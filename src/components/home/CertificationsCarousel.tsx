"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CarouselSlider } from "@/components/shared/CarouselSlider";

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
    <CarouselSlider
      items={certifications}
      keyExtractor={(cert, idx) => cert.slug || idx}
      itemClassName="w-[calc(50%-12px)] sm:w-[calc(33.333%-16px)] md:w-[calc(25%-18px)] lg:w-[calc(20%-20px)] h-auto"
      controlsPosition="top-right"
      ariaLabel="Certifications carousel"
      renderItem={(cert) => {
        const content = (
          <>
            <div className="relative h-20 w-full max-w-30 bg-white rounded flex items-center justify-center p-2 mb-2 shadow-sm">
              <Image
                // decoding="async"
                loading="lazy"
                src={cert.img}
                alt={cert.name}
                fill
                sizes="120px"
                className="object-contain p-2"
              />
            </div>
            <div>
              <div className="font-bold text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">
                {cert.name}
              </div>
              <div className="text-xs text-muted-foreground mt-1 line-clamp-2">{cert.desc}</div>
            </div>
          </>
        );

        return cert.slug ? (
          <Link
            href={`/certifications/${cert.slug}`}
            className="bg-card border border-border p-5 rounded-lg text-center flex flex-col items-center justify-center gap-3 h-full transition-all hover:border-primary/50 hover:shadow-md w-full group"
          >
            {content}
          </Link>
        ) : (
          <div className="bg-card border border-border p-5 rounded-lg text-center flex flex-col items-center justify-center gap-3 h-full transition-all hover:border-primary/50 hover:shadow-md w-full">
            {content}
          </div>
        );
      }}
    />
  );
}
