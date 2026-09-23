import React from 'react';
import { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo/metadata';
import { ProductCatalogClient } from '@/components/products/ProductCatalogClient';

export const metadata: Metadata = buildMetadata({
  title: "Product Catalog | Sheesh Exports",
  description: "Browse our extensive catalog of premium spices, grains, oil seeds, and pulses. Filter by category, certifications, and packaging to find exactly what you need.",
  pathname: "/products",
});

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-background pt-8 pb-24 border-t border-border">
      {/* Small hero/banner for catalog */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8 mt-4">
        <div className="rounded-3xl bg-primary/10 dark:bg-primary/5 p-8 sm:p-12 border border-primary/20 flex flex-col sm:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-2 block">
              Global B2B Catalog
            </span>
            <h1 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4 tracking-tight">Premium Agricultural Commodities</h1>
            <p className="text-muted-foreground max-w-2xl text-lg">
              Source authentic Indian produce with confidence. All products undergo rigorous quality checks and are certified for international trade.
            </p>
          </div>
        </div>
      </div>

      <ProductCatalogClient />
    </main>
  );
}
