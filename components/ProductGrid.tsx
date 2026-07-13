"use client";

import { Product } from "@/lib/generated/prisma/client";
import ProductFilters from "./ProductFilters";
import ProductCard from "./ProductCard";
import { useState } from "react";

type SerializedProducts = Omit<Product, "price"> & { price: number };
// ^ singular — one product's shape

interface ProductGridProps {
  products: SerializedProducts[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  const [sortBy, setSortBy] = useState("");
  const [activeCategories, setActiveCategories] = useState([]);
  const [activeMaterial, setActiveMaterial] = useState("");
  const [activePriceRange, setActivePriceRange] = useState("");

  const onSortChange = (newSortValue: string) => {
    setSortBy(newSortValue);
  };

  const sortedProducts = products.toSorted((a, b) => {
    if (sortBy === "priceAsce") {
      return Number(a.price) - Number(b.price);
    }
    if (sortBy === "priceDesc") {
      return Number(b.price) - Number(a.price);
    }
    if (sortBy === "nameAsce") {
      return a.name.localeCompare(b.name);
    }
    if (sortBy === "nameDesc") {
      return b.name.localeCompare(a.name);
    }
    return 0;
  });

  console.log(sortedProducts);

  const filteredProducts = sortedProducts.toSorted();

  return (
    <>
      <div className="flex flex-col gap-8 pb-8 justify-center items-start">
        <span className="text-sm text-(--stone1) font-extralight tracking-[0.06em]">
          Home / Shop
        </span>
        <div>
          <h3 className="font-heading text-[32px]">Shop All</h3>
        </div>
        <ProductFilters products={products} onSortChange={onSortChange} />
      </div>

      {products.length <= 0 ? (
        <div className="flex justify-center items-center gap-7.5 py-20 border-t border-(--stone3)">
          <span className="font-heading text-3xl">
            There are no Available Products for now.
          </span>
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-7.5 pt-8 border-t border-(--stone3)">
          {products.map((product) => (
            <ProductCard key={product.id} products={product} />
          ))}
        </div>
      )}
    </>
  );
}
