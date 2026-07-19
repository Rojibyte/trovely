import Container from "@/components/Container";
import ProductGrid from "./ProductGrid";
import { getFilterOptions } from "@/lib/filterOptions";
import getProducts from "@/lib/getProducts";

export default async function Products() {
  const products = await getProducts();
  const filterOptions = getFilterOptions(products);
  return (
    <Container>
      <section className="py-20">
        <ProductGrid products={products} filterOptions={filterOptions} />
      </section>
    </Container>
  );
}
