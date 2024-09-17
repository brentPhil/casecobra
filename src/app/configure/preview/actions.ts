"use server";

import { BASE_PRICE, PRODUCT_PRICES } from "@/config/products";
import db from "@/db";
import { stripe } from "@/lib/stripe";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Order } from "@prisma/client";

export const createCheckoutSession = async ({
  configId,
}: {
  configId: string;
}) => {
  const configuration = await db.configuration.findUnique({
    where: { id: configId },
  });

  if (!configuration) {
    throw new Error("Configuration not found");
  }

  const { getUser } = getKindeServerSession();
  const user = await getUser();

  console.log(user.id);

  if (!user) throw new Error("User not found");

  const { finish, material } = configuration;

  let price = BASE_PRICE;
  if (finish === "textured") price += PRODUCT_PRICES.finish.textured;
  if (material === "polycarbonate")
    price += PRODUCT_PRICES.material.polycarbonate;

  let order: Order | undefined = undefined;

  const existingOrder = await db.order.findFirst({
    where: {
      userId: user.id,
      configurationId: configId,
    },
  });

  if (existingOrder) {
    order = existingOrder;
  } else {
    order = await db.order.create({
      data: {
        userId: user.id,
        configurationId: configId,
        amount: price / 100,
      },
    });
  }

  const product = await stripe.products.create({
    name: "Customized Case",
    description: "A customized case for your needs",
    images: [configuration.imageUrl],
    default_price_data: {
      unit_amount: price,
      currency: "usd",
    },
    metadata: {
      orderId: order.id,
    },
  });

  const stripeSession = await stripe.checkout.sessions.create({
    success_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/thank-you?orderId=${order.id}`,
    cancel_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/configure/preview?id=${configuration.id}`,
    payment_method_types: ["card", "paypal"],
    mode: "payment",
    shipping_address_collection: { allowed_countries: ["DE", "US"] },
    metadata: {
      userId: user.id,
      orderId: order.id,
    },
    line_items: [
      {
        price: product.default_price as string,
        quantity: 1,
      },
    ],
  });

  return { url: stripeSession.url };
};
