import { Products } from "./getProducts";

export function getFilterOptions(products: Products) {
  return {
    Category: [...new Set(products.map((p) => p.category))].map((category) => ({
      label: category.charAt(0).toUpperCase() + category.slice(1).toLowerCase(),
      value: category.toLowerCase().replace(/\s/g, ""),
    })),
    Materials: [...new Set(products.map((p) => p.material))].map(
      (material) => ({
        label: material,
        value: material.toLowerCase().replace(/[\s,-]/g, ""),
      }),
    ),
    Price: [
      {
        label: "Under 30$",
        value: "under",
      },
      {
        label: "$30-$60",
        value: "middle",
      },
      {
        label: "$60+",
        value: "high",
      },
    ],
  } as const;
}

export type FilterOptions = ReturnType<typeof getFilterOptions>;
