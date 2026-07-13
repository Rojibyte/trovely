import { Product } from "./generated/prisma/client";

export async function getFilterOptions(products: Product[]) {
  return {
    Category: [...new Set(products.map((p) => p.category))],
    Materials: [...new Set(products.map((p) => p.material))],
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
  };
}
