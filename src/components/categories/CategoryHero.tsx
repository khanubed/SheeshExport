"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Category } from "@/lib/data/categories";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CategoryHero({ category }: { category: Category }) {
  return (
    <section aria-labelledby="category-hero-heading" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 flex items-center bg-black text-white overflow-hidden border-b border-white/10">
      {/* Background Image with slight opacity */}
      <div className="absolute inset-0 z-0">
        <Image
          src={category.heroImage}
          alt={category.name}
          fill
          className="object-cover mix-blend-overlay"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" aria-hidden="true" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 max-w-8xl relative z-10">
        <div className="max-w-3xl">
          <span
            className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-6"
          >
            {category.name}
          </span>

          <h1 id="category-hero-heading" className="text-4xl lg:text-6xl font-heading font-semibold tracking-tight mb-4 leading-[1.1]">
            {category.heroTitle || category.label}
          </h1>

          <p
            className="text-base lg:text-lg text-white/80 font-sans leading-relaxed mb-8 max-w-2xl"
          >
            {category.heroSubtitle || category.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/products">
              <Button
                size="lg"
                className="rounded-none h-14 px-8 bg-primary text-primary-foreground hover:bg-primary/90 text-sm tracking-widest uppercase font-bold w-full sm:w-auto group"
              >
                Explore Products
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Button>
            </Link>
            <Button
              size="lg"
              className="rounded-none h-14 px-8 bg-transparent border border-white/20 text-white hover:bg-white/10 hover:text-white text-sm tracking-widest uppercase font-bold w-full sm:w-auto"
            >
              <Download className="w-4 h-4 mr-2" aria-hidden="true" /> Download Catalog
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
