import React from "react";
import Image from "next/image";
import { Product } from "@/lib/data/types";
import { MapPin } from "lucide-react";

export function ProductOriginStory({ product }: { product: Product }) {
  const originStory = product.variants?.[0]?.originStory;
  if (!originStory) return null;
  return (
    <section className="py-24 bg-primary text-slate-50">
      <div className="container mx-auto px-4 max-w-8xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <h2 className="text-sm font-semibold tracking-widest uppercase text-muted-foreground/80 mb-4">
              The Origin Story
            </h2>
            <h3 className="text-4xl font-serif font-medium mb-6 flex items-center gap-3">
              <MapPin className="w-8 h-8 text-primary" />
              {originStory.location}
            </h3>
            <div className="w-12 h-1 bg-primary mb-8"></div>
            <p className="text-lg text-muted-foreground/70 leading-relaxed font-light">
              {originStory.story}
            </p>
          </div>
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
            {originStory.images?.slice(0, 2).map((img: any, idx: any) => {
              const imgSrc = typeof img === "string" ? img : (img?.src || "/images/sheesh-logo.webp");
              const imgAlt = typeof img === "string" ? "Origin" : (img?.alt || "Origin");
              return (
              <div
                key={idx}
                className={`relative ${idx === 0 ? "aspect-square" : "aspect-[3/4] mt-12"}`}
              >
                <Image
                  src={imgSrc}
                  alt={imgAlt}
                  fill
                  className="object-cover grayscale-40 hover:grayscale-0 transition-all duration-700"
                />
              </div>
            )})}
          </div>
        </div>
      </div>
    </section>
  );
}
