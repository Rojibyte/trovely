// app/api/webhook/route.ts
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { prisma } from "@/lib/prisma";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2026-06-29" as any,
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET as string;

export async function POST(request: Request) {
  const body = await request.text(); // raw text, not .json() — explained below
  const signature = request.headers.get("stripe-signature") as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (error: any) {
    return NextResponse.json(
      { error: `Webhook signature verification failed` },
      { status: 400 },
    );
  }

  if (event.type === "payment_intent.succeeded") {
    const paymentIntent = event.data.object as Stripe.PaymentIntent;
    const items = JSON.parse(paymentIntent.metadata.items);

    await prisma.order.create({
      data: {
        paymentIntentId: paymentIntent.id,
        status: "paid",
        totalAmount: paymentIntent.amount / 100, // convert cents back to dollars
        items,
      },
    });
  }

  return NextResponse.json({ received: true });
}
