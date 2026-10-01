"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Category } from "@/lib/data/categories";
import { CategoryCard } from "@/components/categories/CategoryCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

interface ProductCarouselProps {
  categories: Category[];
}

export function ProductCarousel({ categories }: ProductCarouselProps) {
  return (
    <div className="w-full relative">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={32}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        loop={true}
        speed={800}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: true }}
        className="product-swiper !pb-14"
      >
        {categories.map((cat, idx) => (
          <SwiperSlide key={idx} className="h-auto">
            <CategoryCard category={cat} className="rounded-xl" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
