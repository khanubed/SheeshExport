"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

interface Certification {
  name: string;
  desc: string;
  img: string;
  slug?: string;
}

interface CertificationsCarouselProps {
  certifications: Certification[];
}

export function CertificationsCarousel({ certifications }: CertificationsCarouselProps) {
  return (
    <div className="w-full relative py-4">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={24}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
        loop={true}
        speed={4000}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        className="continuous-swiper"
      >
        {certifications.map((cert, idx) => {
          const content = (
            <>
              <div className="relative h-20 w-full max-w-[120px] bg-white rounded flex items-center justify-center p-2 mb-2 shadow-sm">
                <Image src={cert.img} alt={cert.name} fill className="object-contain p-2" />
              </div>
              <div>
                <div className="font-bold text-foreground group-hover:text-primary transition-colors">{cert.name}</div>
                <div className="text-xs text-muted-foreground mt-1">{cert.desc}</div>
              </div>
            </>
          );

          return (
            <SwiperSlide key={idx} className="h-auto py-2">
              {cert.slug ? (
                <Link 
                  href={`/certifications/${cert.slug}`}
                  className="bg-card border border-border p-6 rounded-lg text-center flex flex-col items-center justify-center gap-4 h-full transition-all hover:border-primary/50 hover:shadow-md w-full group"
                >
                  {content}
                </Link>
              ) : (
                <div className="bg-card border border-border p-6 rounded-lg text-center flex flex-col items-center justify-center gap-4 h-full transition-all hover:border-primary/50 hover:shadow-md w-full">
                  {content}
                </div>
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
