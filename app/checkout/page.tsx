"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Container from "@/components/Container";
import { useCartStore } from "@/lib/store/cartStore";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function CheckoutPage() {
  const router = useRouter();
  const items = useCartStore((state) => state.items);
  const totalPrice = useCartStore((state) => state.totalPrice());
  const clearCart = useCartStore((state) => state.clearCart);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [placingOrder, setPlacingOrder] = useState(false);

  const handlePlaceOrder = (e: FormEvent) => {
    e.preventDefault();
    setPlacingOrder(true);

    // Simulated order placement — no backend/payment wired up yet.
    setTimeout(() => {
      clearCart();
      router.push("/order-confirmation");
    }, 800);
  };

  if (items.length === 0) {
    return (
      <Container>
        <section className="py-24 flex flex-col items-center gap-6 text-center">
          <h1 className="font-heading text-3xl text-(--ink1)">
            Your cart is empty
          </h1>
          <p className="font-sans text-(--stone1)">
            Add something to your cart before checking out.
          </p>
          <Link
            href="/shop"
            className="rounded-2xl bg-(--action) text-background font-sans text-sm font-medium px-6 py-4 transition-all duration-350 ease-out hover:opacity-90"
          >
            Browse the Collection
          </Link>
        </section>
      </Container>
    );
  }

  return (
    <Container>
      <section className="py-12 flex flex-col gap-8">
        <h1 className="font-heading text-3xl text-(--ink1)">Checkout</h1>

        <div className="flex gap-16 items-start">
          {/* Shipping form */}
          <form
            onSubmit={handlePlaceOrder}
            className="flex-1 flex flex-col gap-6"
          >
            <h2 className="font-heading text-xl text-(--ink1)">
              Shipping details
            </h2>

            <Field>
              <FieldLabel htmlFor="fullName">Full name</FieldLabel>
              <Input
                id="fullName"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="bg-background border border-(--stone3) rounded-lg px-4 py-3"
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-background border border-(--stone3) rounded-lg px-4 py-3"
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="address">Address</FieldLabel>
              <Input
                id="address"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="bg-background border border-(--stone3) rounded-lg px-4 py-3"
              />
            </Field>

            <div className="flex gap-4">
              <Field className="flex-1">
                <FieldLabel htmlFor="city">City</FieldLabel>
                <Input
                  id="city"
                  required
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="bg-background border border-(--stone3) rounded-lg px-4 py-3"
                />
              </Field>

              <Field className="flex-1">
                <FieldLabel htmlFor="postalCode">Postal code</FieldLabel>
                <Input
                  id="postalCode"
                  required
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  className="bg-background border border-(--stone3) rounded-lg px-4 py-3"
                />
              </Field>
            </div>

            <button
              type="submit"
              disabled={placingOrder}
              className="w-fit rounded-2xl bg-(--action) text-background font-sans text-sm font-medium px-8 py-4 cursor-pointer transition-all duration-350 ease-out hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {placingOrder ? "Placing order..." : "Place Order"}
            </button>
          </form>

          {/* Order summary */}
          <div className="w-80 flex flex-col gap-4 border border-(--stone3) rounded-2xl p-6">
            <h2 className="font-heading text-xl text-(--ink1)">
              Order summary
            </h2>

            <div className="flex flex-col gap-3">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span className="text-(--ink1)">
                    {item.name}{" "}
                    <span className="text-(--stone1)">× {item.quantity}</span>
                  </span>
                  <span className="font-mono text-(--ink1)">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex justify-between pt-4 border-t border-(--stone3)">
              <span className="font-heading text-lg text-(--ink1)">Total</span>
              <span className="font-mono text-lg text-(--ink1)">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
