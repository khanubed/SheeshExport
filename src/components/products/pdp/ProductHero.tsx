"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product, Variant } from "@/lib/data/types";
import { motion } from "framer-motion";
import { ChevronRight, Download, PackageSearch } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ProductHero({
  product,
  selectedVariant,
}: {
  product: Product;
  selectedVariant: Variant;
}) {
  const firstImg = product.variants[0]?.images?.[0] || product.variants[0]?.originStory?.images?.[0];
  const heroImgSrc = typeof firstImg === "string" ? firstImg : ((firstImg as any)?.src || "/images/sheesh-logo.webp");

  return (
    <section aria-labelledby="product-name" className="relative pt-12 pb-8 lg:pt-16 lg:pb-8 overflow-hidden border-b border-border">
      <div className="container mx-auto px-4 max-w-8xl">
        <div className="flex flex-col lg:flex-row gap-4 items-center">
          <motion.div
            className="w-full lg:w-3/5 flex flex-col gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <nav className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2" aria-label="Breadcrumb">
              <Link href="/products" className="hover:text-primary transition-colors">
                Products
              </Link>
              <ChevronRight className="w-3 h-3 flex-shrink-0" aria-hidden="true" />
              <Link
                href={`/categories/${product.categorySlug}`}
                className="hover:text-primary transition-colors truncate"
              >
                {product.category}
              </Link>
              <ChevronRight className="w-3 h-3 flex-shrink-0" aria-hidden="true" />
              <span className="text-foreground truncate">{product.name}</span>
            </nav>

            <h1 id="product-name" className="text-3xl lg:text-5xl font-heading font-bold tracking-tight text-foreground leading-tight">
              {product.name}
            </h1>

            {product.botanicalName && (
              <p className="text-md text-muted-foreground italic font-sans">{product.botanicalName}</p>
            )}

            <p className="text-sm text-muted-foreground leading-relaxed max-w-xl mb-6 font-sans">
              {product.description.split("\n")[0]}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Link href={`/request-quote?product=${product.slug}`}>
                <Button
                  size="lg"
                  className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-base tracking-wide w-full sm:w-auto"
                >
                  Request Bulk Quote
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="rounded-none h-14 px-8 border-border text-foreground hover:bg-muted/50 text-base tracking-wide w-full sm:w-auto"
              >
                <Download className="w-4 h-4 mr-2" aria-hidden="true" /> Spec Sheet
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="w-full lg:w-2/5 relative h-[500px] bg-muted/30"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <figure className="relative h-full w-full" style={{ position: "relative" }}>
              <Image
                src={heroImgSrc}
                alt={product.name}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
                priority
              />
              <figcaption className="sr-only">{product.name} product image</figcaption>
            </figure>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
