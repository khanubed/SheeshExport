"use client";
import React from "react";
import { Product as DataProduct } from "@/lib/data/products";
import { Category } from "@/lib/data/categories";
import { ProductCard } from "@/components/products/ProductCard";

export function CategoryProductShowcase({
  products,
  category,
}: {
  products: DataProduct[];
  category?: Category;
}) {
  if (!products || products.length === 0) return null;

  return (
    <section
      className="py-12 lg:py-16 bg-slate-50 border-t border-b border-slate-200"
      id="products"
    >
      <div className="container mx-auto px-6 lg:px-12 max-w-8xl">
        <div className="mb-10">
          <h2 className="text-3xl lg:text-4xl font-serif text-slate-900 font-semibold mb-3">
            Commercial Product Directory
          </h2>
          <p className="text-base text-slate-600 max-w-2xl font-sans">
            Explore our export-grade portfolio of {category?.name.toLowerCase() || "commodities"}.
            Complete with specifications, commercial grades, and sourcing details.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
