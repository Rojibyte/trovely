import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

export default async function getProducts() {
  const products = await prisma.product.findMany();
  const serializedProducts = products.map((product) => ({
    ...product,
    price: Number(product.price),
  }));
  return serializedProducts;
}

export async function getProductBySlug(slug: string) {
  const getSlug = await prisma.product.findUnique({ where: { slug } });

  if (getSlug) {
    return getSlug;
  } else {
    notFound();
  }
}

export type Products = Awaited<ReturnType<typeof getProducts>>;
