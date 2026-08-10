import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { Category } from "@/lib/generated/prisma/enums";

export default async function getProducts() {
  const products = await prisma.product.findMany();
  const serializedProducts = products.map((product) => ({
    ...product,
    price: Number(product.price),
  }));
  return serializedProducts;
}

export async function getProductBySlug(slug: string) {
  const findSlug = await prisma.product.findUnique({ where: { slug } });

  if (findSlug) {
    const serializedSlug = {
      ...findSlug,
      price: Number(findSlug.price),
    };
    return serializedSlug;
  } else {
    notFound();
  }
}

export async function getRelatedProducts(
  category: Category,
  excludeSlug: string,
) {
  const relatedProducts = await prisma.product.findMany({
    where: { category: category, NOT: { slug: excludeSlug } },
    take: 4,
  });
  return relatedProducts.map((product) => ({
    ...product,
    price: Number(product.price),
  }));
}

export type Products = Awaited<ReturnType<typeof getProducts>>;
export type ProductBySlug = Awaited<ReturnType<typeof getProductBySlug>>;
