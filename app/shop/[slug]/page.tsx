import Container from "@/components/Container";
import ProductCard from "@/components/ProductCard";
import AddToCart from "@/components/AddToCart";
import { getProductBySlug, getRelatedProducts } from "@/lib/getProducts";
import { capitalize } from "@/lib/capitalize";
import Link from "next/link";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  const relatedProducts = await getRelatedProducts(product.category, slug);

  return (
    <Container>
      <section className="py-12">
        {/* Breadcrumb */}
        <div className="text-sm text-(--stone1) font-sans mb-8">
          <Link href="/shop">Shop</Link>
          {" / "}
          <span>{capitalize(product.category)}</span>
          {" / "}
          <span>{product.name}</span>
        </div>

        {/* Top section: gallery + info */}
        <div className="flex gap-12 items-start">
          <div className="flex-1">
            <div className="relative bg-(--stone4) border border-(--stone2) w-full h-125">
              <span className="absolute top-3 left-3 font-mono uppercase text-(--ochre) text-xs tracking-[0.15em]">
                {product.indexNumber}
              </span>
            </div>
            <div className="flex gap-3 mt-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-24 h-24 bg-(--stone4) border border-(--stone2) cursor-pointer"
                />
              ))}
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-4">
            <span className="font-mono uppercase text-(--ochre) text-xs tracking-[0.15em]">
              {capitalize(product.category)}
            </span>
            <h1 className="font-heading text-4xl text-(--ink1)">
              {product.name}
            </h1>
            <span className="subTitle uppercase">
              {product.material} · {product.origin}
            </span>
            <span className="font-mono text-2xl text-(--ink1) tracking-[0.1em]">
              ${product.price.toFixed(2)}
            </span>
            <p className="font-sans text-(--ink1) leading-relaxed">
              {product.description}
            </p>

            <AddToCart productId={product.id} />

            <Accordion multiple className="flex-col mt-4">
              <AccordionItem value="materials">
                <AccordionTrigger>Materials & Care</AccordionTrigger>
                <AccordionContent>
                  {product.material} — spot clean only, avoid prolonged moisture
                  exposure.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="shipping">
                <AccordionTrigger>Shipping & returns</AccordionTrigger>
                <AccordionContent>
                  Ships within 3 business days. Returns accepted within 14 days
                  in original condition.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-8 border-t border-(--stone3)">
            <h3 className="font-heading text-2xl mb-6">
              From the same collection
            </h3>
            <div className="grid grid-cols-4 gap-7.5">
              {relatedProducts.map((related) => (
                <ProductCard key={related.id} products={related} />
              ))}
            </div>
          </div>
        )}
      </section>
    </Container>
  );
}
