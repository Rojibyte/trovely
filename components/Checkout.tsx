// components/Checkout.tsx
"use client";

import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useCartStore } from "@/lib/store/cartStore";
import CheckoutInner from "@/components/CheckoutInner"; // the actual form, below

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string,
);

export default function CheckoutForm() {
  const items = useCartStore((state) => state.items);
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  useEffect(() => {
    if (items.length === 0) return;

    fetch("/api/checkout", {
      method: "POST",
      body: JSON.stringify({
        items: items.map((item) => ({ id: item.id, quantity: item.quantity })),
      }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [items]);

  if (items.length === 0) {
    return null; // your existing empty-cart block goes here, unchanged
  }

  if (!clientSecret) {
    return null; // loading state — could reuse your Spinner component here
  }

  return (
    <Elements stripe={stripePromise} options={{ clientSecret }}>
      <CheckoutInner clientSecret={clientSecret} />
    </Elements>
  );
}
