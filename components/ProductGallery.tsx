"use client";

import Image from "next/image";
import { useState } from "react";

interface ProductGalleryProps {
  images: string[];
  indexNumber: string;
  productName: string;
}

export default function ProductGallery({
  images,
  indexNumber,
  productName,
}: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  const markLoaded = (index: number) => {
    setLoadedImages((prev) => new Set(prev).add(index));
  };

  return (
    <div className="flex-1">
      <div className="relative bg-(--stone4) border border-(--stone2) w-full h-125 overflow-hidden">
        <Image
          src={images[activeIndex]}
          alt={`${productName} — image ${activeIndex + 1}`}
          priority
          width={630}
          height={500}
          onLoad={() => markLoaded(activeIndex)}
          className={`w-full h-full object-cover transition-opacity duration-500 ease-out ${
            loadedImages.has(activeIndex) ? "opacity-100" : "opacity-0"
          }`}
        />
        <span className="absolute top-3 left-3 font-mono uppercase text-(--ochre) text-xs tracking-[0.15em] bg-background/80 px-2 py-1">
          {indexNumber}
        </span>
      </div>

      <div className="flex gap-3 mt-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`relative w-24 h-24 overflow-hidden border cursor-pointer transition-all duration-200 ${
              activeIndex === index
                ? "border-(--ink1) border-2"
                : "border-(--stone2) opacity-70 hover:opacity-100"
            }`}
            aria-label={`View ${productName} image ${index + 1}`}
          >
            <Image
              src={image}
              alt=""
              width={100}
              height={100}
              onLoad={() => markLoaded(index)}
              className={`w-full h-full object-cover transition-opacity duration-500 ease-out ${
                loadedImages.has(index) ? "opacity-100" : "opacity-0"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
