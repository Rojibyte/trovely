"use client";

import { useState } from "react";
import { Product } from "@/lib/generated/prisma/client";
import { FilterOptions } from "@/lib/filterOptions";
import ProductFilters from "./ProductFilters";
import ProductCard from "./ProductCard";

type SerializedProducts = Omit<Product, "price"> & { price: number };
type ActiveFilters = Record<string, string[]>;
// ^ singular — one product's shape

interface ProductGridProps {
  products: SerializedProducts[];
  filterOptions: FilterOptions;
}

export default function ProductGrid({
  products,
  filterOptions,
}: ProductGridProps) {
  const [sortBy, setSortBy] = useState("");
  const [activeFilters, setActiveFilters] = useState<ActiveFilters>({});
  const [updatedProducts, setUpdatedProducts] = useState<SerializedProducts>([]);

  const onSortChange = (newSortValue: string) => {
    setSortBy(newSortValue);
  };

  const onFilterChange = (
    groupName: string,
    value: string,
    checked: boolean,
  ) => {
    setActiveFilters((prev) => {
      const currentGroup = prev[groupName] ?? [];
      const updatedGroup = checked
        ? [...currentGroup, value]
        : currentGroup.filter((v) => v !== value);
      return { ...prev, [groupName]: updatedGroup };
    });
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

  // console.log(sortedProducts);
  console.log(activeFilters);

  const filterByCategory = products.filter((prod) =>
    activeFilters.Category?.includes(prod.category.toLocaleLowerCase()),
  );

  const filterByMaterials = products.filter((prod) =>
    activeFilters.Materials?.includes(
      prod.material.toLowerCase().replace(/[\s,-]/g, ""),
    ),
  );

  const filterByPrice = products.filter((prod) => {
    return activeFilters.Price?.some((range) => {
      return prod.price < 30 && range === "under"
        ? true
        : prod.price >= 30 && prod.price <= 60 && range === "middle"
          ? true
          : prod.price >= 60 && range === "high"
            ? true
            : range === ""
              ? true
              : false;
    });
  });

  const filteredProducts = [
    ...filterByCategory,
    ...filterByMaterials,
    ...filterByPrice,
  ];

  console.log(filteredProducts);

  return (
    <>
      <div className="flex flex-col gap-8 pb-8 justify-center items-start">
        <span className="text-sm text-(--stone1) font-extralight tracking-[0.06em]">
          Home / Shop
        </span>
        <div>
          <h3 className="font-heading text-[32px]">Shop All</h3>
        </div>
        <ProductFilters
          products={products}
          onSortChange={onSortChange}
          onFilterChange={onFilterChange}
          filterOptions={filterOptions}
        />
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
