/* eslint-disable @typescript-eslint/ban-ts-comment */
import db from "@/db";
import { stripe } from "@/lib/stripe";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { Resend } from "resend";
import OrderReceivedEmail from "@/components/emails/OrderReceivedEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

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

    if (!signature) {
      return new Response("Invalid signature", { status: 400 });
    }

    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;

      // Check if customer details and email are available
      if (!session.customer_details?.email) {
        throw new Error("Missing user email");
      }

      const { userId, orderId } = session.metadata || {
        userId: null,
        orderId: null,
      };

      if (!userId || !orderId) {
        throw new Error("Invalid request metadata");
      }

      const billingAddress = session.customer_details?.address;
      // @ts-expect-error
      const shippingAddress = session.shipping?.address;

      console.log("billing", billingAddress);
      console.log("shipping", shippingAddress);

      // Add checks for billing and shipping addresses
      if (!billingAddress || !shippingAddress) {
        throw new Error("Missing billing or shipping address");
      }

      const updatedOrder = await db.order.update({
        where: {
          id: orderId,
        },
        data: {
          isPaid: true,
          shippingAddress: {
            create: {
              name: session.customer_details.name!,
              city: shippingAddress.city!,
              country: shippingAddress.country!,
              postalCode: shippingAddress.postal_code!,
              street: shippingAddress.line1!,
              state: shippingAddress.state || null, // Optional fields can be set to null
            },
          },
          billingAddress: {
            create: {
              name: session.customer_details.name!,
              city: billingAddress.city!,
              country: billingAddress.country!,
              postalCode: billingAddress.postal_code!,
              street: billingAddress.line1!,
              state: billingAddress.state || null, // Optional fields can be set to null
            },
          },
        },
      });

      await resend.emails.send({
        from: "CaseCobra <brent.agetro@gmail.com>",
        to: [event.data.object.customer_details?.email].filter(
          (email): email is string => !!email
        ), // Ensure only valid strings are in the array
        subject: "Thanks for your order!",
        react: OrderReceivedEmail({
          orderId,
          orderDate: updatedOrder.createdAt.toLocaleDateString(),
          // @ts-ignore
          shippingAddress: {
            name: session.customer_details?.name || "Customer", // Fallback in case name is undefined
            city: shippingAddress?.city || "N/A", // Handle missing address fields
            country: shippingAddress?.country || "N/A",
            postalCode: shippingAddress?.postal_code || "N/A",
            street: shippingAddress?.line1 || "N/A",
            state: shippingAddress?.state || "N/A",
          },
        }),
      });
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
