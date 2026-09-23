"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

interface Category {
  title: string;
  desc: string;
  img: string;
  href: string;
}

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
        speed={5000}
        pagination={{ clickable: true }}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        className="product-swiper continuous-swiper !pb-14"
      >
        {categories.map((cat, idx) => (
          <SwiperSlide key={idx} className="h-auto">
            <Link href={cat.href} className="group block h-full">
              <div className="bg-card border border-border overflow-hidden h-full flex flex-col transition-all hover:shadow-lg hover:-translate-y-1 rounded-xl">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image src={cat.img} alt={cat.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-foreground mb-2">{cat.title}</h3>
                    <p className="text-muted-foreground text-sm">{cat.desc}</p>
                  </div>
                  <div className="mt-4 text-primary">
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
