import { stripe } from "@/lib/stripe";
import { headers } from "next/headers";
import Stripe from "stripe";
import db from "@/db";
import { NextResponse } from "next/server";

type Address = {
  city?: string;
  country?: string;
  postal_code?: string;
  line1?: string;
  state?: string;
};

type SessionDetails = {
  name?: string;
  address?: Address;
};

export async function POST(req: Request) {
  try {
    const body = await req.text();
    const signature = headers().get("stripe-signature");
    if (!signature) {
      return new Response("Invalid signature", { status: 400 });
    }

    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );

    if (event.type === "checkout.session.completed") {
      if (!event.data.object.customer_details?.email) {
        throw new Error("Missing user email");
      }

      const session = event.data.object as Stripe.Checkout.Session;

      const { userId, orderId } = session.metadata || {
        userId: null,
        orderId: null,
      };

      if (!userId || !orderId) {
        throw new Error("Invalid request metadata");
      }

      const { customer_details, shipping_details } = session as {
        customer_details?: SessionDetails;
        shipping_details?: { address?: Address };
      };

      // Helper function to create address data
      const createAddressData = (address: Address) => ({
        name: customer_details?.name ?? "",
        city: address.city ?? "",
        country: address.country ?? "",
        postalCode: address.postal_code ?? "",
        street: address.line1 ?? "",
        state: address.state ?? "",
      });

      // Extract billing and shipping addresses
      const billingAddress = customer_details?.address;
      const shippingAddress = shipping_details?.address;

      if (billingAddress && shippingAddress) {
        await db.order.update({
          where: {
            id: orderId,
          },
          data: {
            isPaid: true,
            shippingAddress: { create: createAddressData(shippingAddress) },
            billingAddress: { create: createAddressData(billingAddress) },
          },
        });
      }
    }

    return NextResponse.json({ result: event, ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Something went wrong", ok: false },
      { status: 500 }
    );
  }
}
