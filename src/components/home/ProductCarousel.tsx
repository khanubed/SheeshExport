import React from "react";
import { Category } from "@/lib/data/categories";
import { CategoryCard } from "@/components/categories/CategoryCard";
import { CarouselSlider } from "@/components/shared/CarouselSlider";

interface ProductCarouselProps {
  categories: Category[];
}

export function ProductCarousel({ categories }: ProductCarouselProps) {
  return (
    <CarouselSlider
      ariaLabel="Product categories slider"
      controlsPosition="top-right-absolute"
    >
      {categories.map((cat, idx) => (
        <div
          key={cat.slug || idx}
          className="snap-start shrink-0 w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
        >
          <CategoryCard category={cat} className="h-full rounded-xl" />
        </div>
      ))}
    </CarouselSlider>
  );
}
