"use client";

import Link from "next/link";
import Container from "@/components/Container";
import { useCartStore } from "@/lib/store/cartStore";

export default function CartItems() {
  const items = useCartStore((state) => state.items);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);
  const totalPrice = useCartStore((state) => state.totalPrice());

  if (items.length === 0) {
    return (
      <Container>
        <section className="py-24 flex flex-col items-center gap-6 text-center">
          <h1 className="font-heading text-3xl text-(--ink1)">
            Your cart is empty
          </h1>
          <p className="font-sans text-(--stone1)">
            Nothing kept yet — browse the catalog to find something worth
            keeping.
          </p>
          <Link
            href="/shop"
            className="rounded-2xl bg-(--rust) text-background font-sans text-sm font-medium px-6 py-4 transition-all duration-350 ease-out hover:opacity-90"
          >
            Browse the Collection
          </Link>
        </section>
      </Container>
    );
  }

  return (
    <>
      <div className="flex flex-col gap-6 border-t border-(--stone3) pt-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-6 pb-6 border-b border-(--stone3)"
          >
            <div
              className="w-24 h-24 shrink-0 bg-(--stone4) border border-(--stone2)"
              style={{
                backgroundImage: `url(${item.imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            <div className="flex-1 flex flex-col gap-1">
              <Link
                href={`/shop/${item.slug}`}
                className="font-heading text-lg text-(--ink1) hover:underline"
              >
                {item.name}
              </Link>
              <span className="font-mono text-sm text-(--stone1)">
                ${item.price.toFixed(2)}
              </span>
            </div>

            <div className="flex items-center border border-(--stone3) rounded-2xl">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="px-4 py-2 font-mono text-(--ink1) cursor-pointer"
                aria-label={`Decrease quantity of ${item.name}`}
              >
                −
              </button>
              <span className="w-8 text-center font-mono">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="px-4 py-2 font-mono text-(--ink1) cursor-pointer"
                aria-label={`Increase quantity of ${item.name}`}
              >
                +
              </button>
            </div>

            <span className="font-mono text-base text-(--ink1) w-20 text-right">
              ${(item.price * item.quantity).toFixed(2)}
            </span>

            <button
              onClick={() => removeItem(item.id)}
              className="text-xs text-(--stone1) hover:text-(--ink1) underline cursor-pointer"
              aria-label={`Remove ${item.name} from cart`}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center pt-4">
        <span className="font-heading text-xl text-(--ink1)">Total</span>
        <span className="font-mono text-xl text-(--ink1)">
          ${totalPrice.toFixed(2)}
        </span>
      </div>
    </>
  );
}
