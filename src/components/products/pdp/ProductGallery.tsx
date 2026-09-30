"use client";
import React from "react";
import Image from "next/image";
import { Variant } from "@/lib/data/types";

export function ProductGallery({ variant }: { variant: Variant }) {
  if (!variant.images || variant.images.length === 0) return null;
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-8xl">
        <h2 className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-8">
          Product Gallery — {variant.name}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {variant.images.map((img, idx) => {
            const imgSrc = typeof img === "string" ? img : ((img as any)?.src || "/images/sheesh-logo.webp");
            const imgAlt = typeof img === "string" ? variant.name : ((img as any)?.alt || variant.name);
            return (
            <div key={idx} className="relative aspect-square bg-muted/50 group overflow-hidden" style={{ position: "relative" }}>
              <Image
                src={imgSrc}
                alt={imgAlt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          )})}
        </div>
      </div>
    </section>
  );
}
