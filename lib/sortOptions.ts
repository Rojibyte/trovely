export const sortOptions = [
  { label: "Price: Low to High", value: "priceAsce" },
  { label: "Price: High to Low", value: "priceDesc" },
  { label: "Product Name: A to Z", value: "nameAsce" },
  { label: "Product Name: Z to A", value: "nameDesc" },
] as const;

export type SortValue = (typeof sortOptions)[number]["value"];
