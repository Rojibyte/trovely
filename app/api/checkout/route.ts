import { NextResponse } from "next/server";
import Stripe from "stripe";
import { getProductsByIds } from "@/lib/getProducts";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2026-08-26.dahlia",
});

export async function POST(request: Request) {
  const { items } = await request.json();

  const ids = items.map((item: { id: string }) => item.id);
  const products = await getProductsByIds(ids);

  const amount = items.reduce(
    (sum: number, item: { id: string; quantity: number }) => {
      const product = products.find((p) => p.id === item.id);
      if (!product) throw new Error(`Product ${item.id} not found`);
      return sum + product.price * item.quantity;
    },
    0,
  );

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100),
      currency: "usd",
      automatic_payment_methods: { enabled: true },
      metadata: {
        items: JSON.stringify(items), // [{ id, quantity }]
      },
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
