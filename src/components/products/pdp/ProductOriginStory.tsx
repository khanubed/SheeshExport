"use client";
import React from "react";
import Image from "next/image";
import { Product } from "@/lib/data/types";
import { MapPin } from "lucide-react";

export function ProductOriginStory({ product }: { product: Product }) {
  if (!product.originStory) return null;
  return (
    <section className="py-24 bg-slate-900 text-slate-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <h2 className="text-sm font-semibold tracking-widest uppercase text-slate-400 mb-4">The Origin Story</h2>
            <h3 className="text-4xl font-serif font-medium mb-6 flex items-center gap-3">
              <MapPin className="w-8 h-8 text-primary" />
              {product.originStory.location}
            </h3>
            <div className="w-12 h-1 bg-primary mb-8"></div>
            <p className="text-lg text-slate-300 leading-relaxed font-light">
              {product.originStory.story}
            </p>
          </div>
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
            {product.originStory.images.slice(0, 2).map((img : any , idx : any) => (
              <div key={idx} className={`relative ${idx === 0 ? 'aspect-square' : 'aspect-[3/4] mt-12'}`}>
                <Image src={img || "/images/placeholder.jpg"} alt="Origin" fill className="object-cover grayscale-40 hover:grayscale-0 transition-all duration-700" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}