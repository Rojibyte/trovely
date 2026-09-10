// components/CheckoutInner.tsx
"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { useCartStore } from "@/lib/store/cartStore";
// ...your existing Field/Input/Container imports

export default function CheckoutInner({
  clientSecret,
}: {
  clientSecret: string;
}) {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  const clearCart = useCartStore((state) => state.clearCart);
  const [placingOrder, setPlacingOrder] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // ...your existing fullName/email/address/city/postalCode useState hooks stay exactly as they are

  const handlePlaceOrder = async (e: FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return; // Stripe.js hasn't finished loading yet

    setPlacingOrder(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/order-confirmation`,
      },
    });

    if (error) {
      setErrorMessage(error.message ?? "Something went wrong.");
      setPlacingOrder(false);
    }
    // on success, Stripe redirects the browser to return_url itself —
    // clearCart() should happen on that confirmation page, not here
  };

  return (
    <form
      onSubmit={handlePlaceOrder}
      className="flex-1 flex flex-col py-10 gap-6"
    >
      {/* your existing Full name / Email / Address / City / Postal code fields, unchanged */}

      <PaymentElement />

      {errorMessage && <p className="text-red-600 text-sm">{errorMessage}</p>}

      <button
        type="submit"
        disabled={placingOrder || !stripe}
        className="w-fit rounded-2xl bg-(--action) text-background font-sans text-sm font-medium px-8 py-4 cursor-pointer transition-all duration-350 ease-out hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {placingOrder ? "Placing order..." : "Place Order"}
      </button>
    </form>
  );
}
