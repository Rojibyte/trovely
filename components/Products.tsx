import Container from "@/components/Container";
import ProductGrid from "./ProductGrid";
import { prisma } from "@/lib/prisma";

export default async function Products() {
  const products = await prisma.product.findMany();
  const serializedProducts = products.map((product) => ({
    ...product,
    price: Number(product.price),
  }));
  return (
    <Container>
      <section className="py-20">
        <ProductGrid products={serializedProducts} />
      </section>
    </Container>
  );
}
