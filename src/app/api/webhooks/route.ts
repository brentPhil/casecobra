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

    let event: Stripe.Event;
    try {
      event = stripe.webhooks.constructEvent(
        body,
        signature,
        process.env.STRIPE_WEBHOOK_SECRET!
      );
    } catch (error) {
      console.error("Stripe Webhook Error:", error);
      return new Response("Webhook signature verification failed", {
        status: 400,
      });
    }

    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;

      const customerEmail = session.customer_details?.email;
      if (!customerEmail) {
        throw new Error("Missing customer email in session");
      }

      const { userId, orderId } = session.metadata || {};
      if (!userId || !orderId) {
        throw new Error("Missing user or order metadata in session");
      }

      const billingAddress = session.customer_details?.address;
      // @ts-expect-error
      const shippingAddress = session.shipping?.address;

      console.log("Billing Address:", billingAddress);
      console.log("Shipping Address:", shippingAddress);

      if (!billingAddress || !shippingAddress) {
        throw new Error("Missing billing or shipping address in session");
      }

      // Update the order in the database
      const updatedOrder = await db.order.update({
        where: { id: orderId },
        data: {
          isPaid: true,
          shippingAddress: {
            create: {
              name: session.customer_details!.name!,
              city: shippingAddress.city!,
              country: shippingAddress.country!,
              postalCode: shippingAddress.postal_code!,
              street: shippingAddress.line1!,
              state: shippingAddress.state || null,
            },
          },
          billingAddress: {
            create: {
              name: session.customer_details!.name!,
              city: billingAddress.city!,
              country: billingAddress.country!,
              postalCode: billingAddress.postal_code!,
              street: billingAddress.line1!,
              state: billingAddress.state || null,
            },
          },
        },
      });

      // Send the order confirmation email
      await resend.emails.send({
        from: "CaseCobra <brentagetrophil@gmail.com>",
        to: [customerEmail],
        subject: "Thanks for your order!",
        react: OrderReceivedEmail({
          orderId,
          orderDate: updatedOrder.createdAt.toLocaleDateString(),
          //@ts-ignore
          shippingAddress: {
            name: session.customer_details?.name || "Customer",
            city: shippingAddress.city || "N/A",
            country: shippingAddress.country || "N/A",
            postalCode: shippingAddress.postal_code || "N/A",
            street: shippingAddress.line1 || "N/A",
            state: shippingAddress.state || "N/A",
          },
        }),
      });
    }

    return NextResponse.json({ result: event, ok: true });
  } catch (err) {
    console.error("Error handling webhook:", err);
    return NextResponse.json(
      { message: "Internal Server Error", ok: false },
      { status: 500 }
    );
  }
}
