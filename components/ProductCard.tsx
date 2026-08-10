"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Product } from "@/lib/generated/prisma/client";
import { useCartStore } from "@/lib/store/cartStore";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

type SerializedProducts = Omit<Product, "price"> & { price: number };
// ^ singular — one product's shape

interface ProductCardProps {
  products: SerializedProducts;
}

export default function ProductCard({ products }: ProductCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [added, setAdded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const addItem = useCartStore((state) => state.addItem);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        },
      );
    }, cardRef);

    return () => ctx.revert();
  }, []);

  const handleAddToCart = () => {
    addItem(
      {
        id: products.id,
        slug: products.slug,
        name: products.name,
        price: products.price,
        imageUrl: products.imageUrls[0],
      },
      1,
    );
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div
      ref={cardRef}
      key={products.id}
      className="flex flex-col justify-center items-start gap-4"
    >
      <Link
        href={`/shop/${products.slug}`}
        className="flex flex-col justify-center items-start w-full gap-4"
      >
        <div className="relative bg-(--stone4) border border-(--stone2) w-full h-65 overflow-hidden">
          <img
            src={products.imageUrls[0]}
            alt={products.name}
            onLoad={() => setImageLoaded(true)}
            className={`w-full h-full object-cover transition-opacity duration-500 ease-out ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
          <span className="absolute top-3 left-3 font-mono uppercase text-(--ochre) text-xs tracking-[0.15em] bg-background/80 px-2 py-1">
            {products.indexNumber}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="subTitle">{products.material}</span>
          <span className="font-heading text-lg text-(--ink1) mt-2 mb-4">
            {products.name}
          </span>
          <span className="font-mono font-extralight text-base text-(--ink1) tracking-[0.16em]">
            ${products.price.toFixed(2)}
          </span>
        </div>
      </Link>
      <button
        onClick={handleAddToCart}
        className="w-full rounded-2xl border border-(--stone3) bg-background font-sans text-sm font-medium py-4 cursor-pointer transition-all duration-350 ease-out hover:bg-(--ink1) hover:text-background"
      >
        {added ? "Added ✓" : "Add to Cart"}
      </button>
    </div>
  );
}
