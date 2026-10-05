"use client";

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
      items={categories}
      keyExtractor={(cat) => cat.id || cat.slug}
      itemClassName="w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] h-auto"
      controlsPosition="top-right"
      ariaLabel="Product categories carousel"
      renderItem={(cat) => (
        <CategoryCard category={cat} className="rounded-xl h-full shadow-sm" />
      )}
    />
  );
}
