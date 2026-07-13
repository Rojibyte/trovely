import Container from "@/components/Container";
import ProductGrid from "./ProductGrid";
import { prisma } from "@/lib/prisma";
import { getFilterOptions } from "@/lib/filterOptions";

export default async function Products() {
  const products = await prisma.product.findMany();
  const serializedProducts = products.map((product) => ({
    ...product,
    price: Number(product.price),
  }));
  const filterOptions = await getFilterOptions(products);
  return (
    <Container>
      <section className="py-20">
        <ProductGrid
          products={serializedProducts}
          filterOptions={filterOptions}
        />
      </section>
    </Container>
  );
}
