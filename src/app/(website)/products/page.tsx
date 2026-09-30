import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo/breadcrumb";
import { JsonLd } from "@/components/seo/JsonLd";
import { Suspense } from "react";
import { ProductCatalogClient } from "@/components/products/ProductCatalogClient";

export const metadata: Metadata = buildMetadata({
  title: "Product Catalog | Sheesh Exports",
  description:
    "Browse our extensive catalog of premium spices, grains, oil seeds, and pulses. Filter by category, certifications, and packaging to find exactly what you need.",
  pathname: "/products",
});

export default function ProductsPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { label: "Home", href: "/" },
    { label: "Products Catalog", href: "/products" },
  ]);

  return (
    <main className="min-h-screen bg-background pt-8 pb-6 border-t border-border" role="main">
      <JsonLd data={breadcrumbSchema} />
      {/* Full-width Hero for catalog */}
      <section aria-labelledby="products-hero-heading" className="relative h-[40vh] min-h-[400px] max-h-[600px] mb-6 flex items-center justify-center overflow-hidden text-center text-white border-y border-border">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/products-hero.jpg"
            alt="Premium Agricultural Commodities"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black/70 mix-blend-multiply" aria-hidden="true" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 flex flex-col items-center mt-8">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-secondary mb-4 border-b border-secondary/30 pb-2">
            Global B2B Catalog
          </span>
          <h1 id="products-hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-[#F9F8F6] mb-6 tracking-tight drop-shadow-lg">
            Premium Agricultural Commodities
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg sm:text-xl font-light leading-relaxed drop-shadow-md">
            Source authentic Indian produce with confidence. All products undergo rigorous quality
            checks and are certified for international trade.
          </p>
        </div>
      </section>

      <Suspense fallback={<div className="p-12 text-center text-muted-foreground font-sans">Loading catalog...</div>}>
        <ProductCatalogClient />
      </Suspense>
    </main>
  );
}
