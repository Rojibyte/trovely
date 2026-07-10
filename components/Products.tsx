import Container from "@/components/Container";
import ProductCard from "./ProductCard";
import { prisma } from "@/lib/prisma";
import Image from "next/image";
import filterIcon from "@/public/filter-icon.svg";
import chevronDown from "@/public/chevron-down 1.svg";

export default async function Products() {
  const products = await prisma.product.findMany();
  // const products = [];

  return (
    <Container>
      <section className="py-20">
        <div className="flex flex-col gap-8 pb-8 justify-center items-start">
          <span className="text-sm text-(--stone1) font-extralight tracking-[0.06em]">
            Home / Shop
          </span>
          <div>
            <h3 className="font-heading text-[32px]">Shop All</h3>
          </div>
          <div className="w-full flex justify-between items-center">
            <button className="w-fit px-4 py-3 flex gap-4 bg-background border border-(--stone3) rounded-2xl cursor-pointer">
              <span className="font-sans text-base font-extralight tracking-[0.06em]">
                Filter
              </span>
              <Image
                src={filterIcon}
                alt="Filter Icon"
                width={18}
                height={18}
              />
            </button>
            <div className="flex justify-between items-center gap-8">
              <span className="font-mono text-base font-extralight tracking-[0.06em]">
                {products.length} products
              </span>
              <button className="w-50 px-4 py-3 flex justify-between gap-4 bg-background border border-(--stone3) rounded-2xl cursor-pointer">
                <span className="font-sans text-base font-extralight tracking-[0.06em]">
                  Sort by
                </span>
                <Image
                  src={chevronDown}
                  alt="Sort Icon"
                  width={24}
                  height={24}
                />
              </button>
            </div>
          </div>
        </div>

        {products.length <= 0 ? (
          <div className="flex justify-center items-center gap-7.5 py-20 border-t border-(--stone3)">
            <span className="font-heading text-3xl">
              There are no Available Products for now.
            </span>
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-7.5 pt-8 border-t border-(--stone3)">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </Container>
  );
}
