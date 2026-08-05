"use client";

import { useState } from "react";

interface AddToCartProps {
  productId: string;
}

export default function AddToCart({ productId }: AddToCartProps) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const decrement = () => setQuantity((q) => Math.max(1, q - 1));
  const increment = () => setQuantity((q) => q + 1);

  const handleAddToCart = () => {
    // Simulated cart — no live cart/context yet.
    console.log(`Added ${quantity} of product ${productId} to cart`);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-4">
        <div className="flex items-center border border-(--stone3) rounded-2xl">
          <button
            onClick={decrement}
            className="px-4 py-3 font-mono text-(--ink1) cursor-pointer"
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span className="w-8 text-center font-mono">{quantity}</span>
          <button
            onClick={increment}
            className="px-4 py-3 font-mono text-(--ink1) cursor-pointer"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>

        <button
          onClick={handleAddToCart}
          className="flex-1 rounded-2xl bg-(--action) text-background font-sans text-sm font-medium py-4 cursor-pointer transition-all duration-350 ease-out hover:opacity-90"
        >
          {added ? "Added ✓" : "Add to Cart"}
        </button>
      </div>
      <span className="text-xs text-(--stone1) font-sans">
        In stock — usually ships within 3 days
      </span>
    </div>
  );
}
