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

    // Check for missing signature
    if (!signature) {
      return new Response("Missing Stripe signature", { status: 400 });
    }

    let event: Stripe.Event;
    try {
      // Construct the event with the signature
      event = stripe.webhooks.constructEvent(
        body,
        signature,
        process.env.STRIPE_WEBHOOK_SECRET!
      );
    } catch (err) {
      // Handle Stripe signature validation error
      console.error("Stripe signature verification failed", err);
      return new Response("Invalid Stripe signature", { status: 400 });
    }

    // Handle event type
    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;

      // Check for missing user email
      if (!session.customer_details?.email) {
        console.error("Missing customer email in session", session);
        return new Response("Customer email is required", { status: 400 });
      }

      // Extract user and order metadata
      const { userId, orderId } = session.metadata || {};
      if (!userId || !orderId) {
        console.error("Missing userId or orderId in session metadata", session);
        return new Response("Invalid session metadata", { status: 400 });
      }

      const { customer_details, shipping_details } = session as {
        customer_details?: SessionDetails;
        shipping_details?: { address?: Address };
      };

      if (!customer_details?.address || !shipping_details?.address) {
        console.error("Missing billing or shipping address", session);
        return new Response("Billing and shipping addresses are required", {
          status: 400,
        });
      }

      // Helper function to create address data
      const createAddressData = (address: Address) => ({
        name: customer_details?.name ?? "",
        city: address.city ?? "",
        country: address.country ?? "",
        postalCode: address.postal_code ?? "",
        street: address.line1 ?? "",
        state: address.state ?? "",
      });

      // Update the order in the database
      try {
        await db.order.update({
          where: { id: orderId },
          data: {
            isPaid: true,
            shippingAddress: {
              create: createAddressData(shipping_details.address!),
            },
            billingAddress: {
              create: createAddressData(customer_details.address!),
            },
          },
        });
      } catch (dbError) {
        console.error("Database update failed", dbError);
        return new Response("Order update failed", { status: 500 });
      }
    }

    return NextResponse.json({ result: event, ok: true });
  } catch (err: unknown) {
    // Log and return different error responses depending on the error type
    if (err instanceof Error) {
      console.error("Unhandled error occurred:", err.message);
      return NextResponse.json(
        { message: err.message, ok: false },
        { status: 500 }
      );
    } else {
      console.error("Unexpected error occurred");
      return NextResponse.json(
        { message: "Unknown error", ok: false },
        { status: 500 }
      );
    }
  }
}