import { Product } from "@/lib/generated/prisma/client";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div
      key={product.id}
      className="flex flex-col justify-center items-start gap-4"
    >
      <div className="relative bg-(--stone4) border border-(--stone2) w-full h-65">
        <span className="absolute top-3 left-3 font-mono uppercase text-(--ochre) text-xs tracking-[0.15em]">
          {product.indexNumber}
        </span>
      </div>
      <div className="flex flex-col">
        <span className="subTitle">{product.material}</span>
        <span className="font-heading text-lg text-(--ink1) mt-2 mb-4">
          {product.name}
        </span>
        <span className="font-mono font-extralight text-base text-(--ink1) tracking-[0.16em]">
          ${product.price.toFixed(2)}
        </span>
      </div>
      <button className="w-full rounded-2xl border border-(--stone3) bg-background font-sans text-sm font-medium py-4 cursor-pointer transition-all duration-350 ease-out hover:bg-(--ink1) hover:text-background">
        Add to Cart
      </button>
    </div>
  );
}
