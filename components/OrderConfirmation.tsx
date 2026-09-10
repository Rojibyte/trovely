"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { loadStripe } from "@stripe/stripe-js";
import Link from "next/link";
import Container from "@/components/Container";
import { Spinner } from "@/components/ui/spinner";
import { useCartStore } from "@/lib/store/cartStore";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string,
);

export default function OrderConfirmation() {
  const searchParams = useSearchParams();
  const clearCart = useCartStore((state) => state.clearCart);
  const [status, setStatus] = useState<"loading" | "succeeded" | "failed">(
    "loading",
  );

  useEffect(() => {
    const clientSecret = searchParams.get("payment_intent_client_secret");
    if (!clientSecret) {
      setStatus("failed");
      return;
    }

    stripePromise.then((stripe) => {
      if (!stripe) return;

      stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
        if (paymentIntent?.status === "succeeded") {
          clearCart();
          setStatus("succeeded");
        } else {
          setStatus("failed");
        }
      });
    });
  }, [searchParams, clearCart]);

  if (status === "loading") {
    return (
      <Container>
        <section className="py-24 flex items-center justify-center">
          <Spinner className="size-20" />
        </section>
      </Container>
    );
  }

  if (status === "failed") {
    return (
      <Container>
        <section className="py-24 flex flex-col items-center gap-6 text-center">
          <h1 className="font-heading text-3xl text-(--ink1)">
            Payment not completed
          </h1>
          <p className="font-sans text-(--stone1)">
            Something went wrong, or the payment wasn&apos;t finished.
          </p>
          <Link
            href="/checkout"
            className="rounded-2xl bg-(--action) text-background font-sans text-sm font-medium px-6 py-4 transition-all duration-350 ease-out hover:opacity-90"
          >
            Return to Checkout
          </Link>
        </section>
      </Container>
    );
  }

  return (
    <Container>
      <section className="py-24 flex flex-col items-center gap-6 text-center">
        <h1 className="font-heading text-3xl text-(--ink1)">Order confirmed</h1>
        <p className="font-sans text-(--stone1)">
          Thank you — your order has been placed.
        </p>
        <Link
          href="/shop"
          className="rounded-2xl bg-(--action) text-background font-sans text-sm font-medium px-6 py-4 transition-all duration-350 ease-out hover:opacity-90"
        >
          Continue Shopping
        </Link>
      </section>
    </Container>
  );
}
