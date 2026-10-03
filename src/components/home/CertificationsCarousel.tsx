import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CarouselSlider } from "@/components/shared/CarouselSlider";

export interface Certification {
  name: string;
  desc: string;
  img: string;
  slug?: string;
}

export interface CertificationsCarouselProps {
  certifications: Certification[];
}

export function CertificationsCarousel({ certifications }: CertificationsCarouselProps) {
  return (
    <CarouselSlider
      ariaLabel="Certifications and accreditations slider"
      controlsPosition="sides"
    >
      {certifications.map((cert, idx) => {
        const content = (
          <>
            <div className="relative h-20 w-full max-w-[120px] bg-white rounded-lg flex items-center justify-center p-2 mb-2 shadow-sm">
              <Image
                loading="lazy"
                src={cert.img}
                alt={cert.name}
                fill
                sizes="120px"
                quality={60}
                className="object-contain p-2"
              />
            </div>
            <div>
              <div className="font-bold text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">
                {cert.name}
              </div>
              <div className="text-xs text-muted-foreground mt-1">{cert.desc}</div>
            </div>
          </>
        );

        return cert.slug ? (
          <Link
            key={cert.slug || idx}
            href={`/certifications/${cert.slug}`}
            className="bg-card border border-border p-6 rounded-xl text-center flex flex-col items-center justify-center gap-3 w-56 sm:w-64 shrink-0 snap-start transition-all hover:border-primary/50 hover:shadow-md group"
          >
            {content}
          </Link>
        ) : (
          <div
            key={cert.name || idx}
            className="bg-card border border-border p-6 rounded-xl text-center flex flex-col items-center justify-center gap-3 w-56 sm:w-64 shrink-0 snap-start transition-all hover:border-primary/50 hover:shadow-md"
          >
            {content}
          </div>
        );
      })}
    </CarouselSlider>
  );
}
