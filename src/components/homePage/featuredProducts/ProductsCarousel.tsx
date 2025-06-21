import React, { useEffect, useState, useRef } from "react";
import type { CarouselProduct } from "@/types/carouselProduct";

interface Props {
  products: CarouselProduct[];
}

export default function ProductsCarousel({ products }: Props) {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate products for seamless looping
  const duplicatedProducts = [...products, ...products];

  // Calculate total width for one set of products
  const itemWidth = 350 + 10; // image width + gap
  const totalWidth = products.length * itemWidth;

  return (
    <div
      className="overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="flex gap-[10px]"
        style={{
          width: `${totalWidth * 2}px`,
          animation: isPaused
            ? "none"
            : `slideLeft ${products.length * 3}s linear infinite`,
        }}
      >
        {duplicatedProducts.map((product, index) => (
          <div
            key={`${product.name || "item"}-${index}`}
            className="flex-shrink-0"
          >
            <img
              src={product.image.src}
              alt={product.name}
              width={400}
              height={300}
              className="w-[350px] h-[200px] rounded-lg object-cover"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes slideLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${totalWidth}px);
          }
        }
      `}</style>
    </div>
  );
}
