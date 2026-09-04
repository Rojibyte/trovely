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
import ProductGallery from "@/components/ProductGallery";

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
        <div className="text-sm text-(--stone1) font-extralight tracking-[0.06em] mb-8">
          <Link href="/shop">Shop</Link>
          {" / "}
          <span>{capitalize(product.category)}</span>
          {" / "}
          <span>{product.name}</span>
        </div>

        {/* Top section: gallery + info */}
        <div className="flex gap-12 items-start">
          <ProductGallery
            images={[...product.imageUrls]}
            indexNumber={product.indexNumber}
            productName={product.name}
          />

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
            <span className="font-mono text-2xl text-(--ink1) tracking-[0.6em]">
              ${product.price.toFixed(2)}
            </span>
            <p className="font-sans text-(--ink1) leading-relaxed">
              {product.description}
            </p>

            <AddToCart
              productId={product.id}
              slug={product.slug}
              name={product.name}
              price={product.price}
              imageUrl={product.imageUrls[0]}
            />

            <Accordion multiple className="flex-col mt-4">
              <AccordionItem
                value="materials"
                className="px-0 border-b border-(--stone3)"
              >
                <AccordionTrigger>Materials & Care</AccordionTrigger>
                <AccordionContent>
                  {product.material} — spot clean only, avoid prolonged moisture
                  exposure.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="shipping" 
                className="px-0 border-b border-(--stone3)">
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
