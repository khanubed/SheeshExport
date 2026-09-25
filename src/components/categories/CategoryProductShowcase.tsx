"use client";
import React from "react";
import { Product as DataProduct } from "@/lib/data/products";
import { Category } from "@/lib/data/categories";
import { ProductCard } from "@/components/product/ProductCard";
import { Product as TypesProduct } from "@/types/product";

export function CategoryProductShowcase({ 
  products,
  category
}: { 
  products: DataProduct[],
  category?: Category
}) {
  if (!products || products.length === 0) return null;

  return (
    <section className="py-24 bg-white border-t border-slate-200" id="products">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="mb-12">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">
            Commodity Portfolio
          </h2>
          <h3 className="text-4xl lg:text-5xl font-serif text-slate-900 tracking-tight">
            Explore {category?.name || "Products"}
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => {
            // Map the data model to the type expected by ProductCard
            const imageUrl = product.variants?.[0]?.images?.[0] || product.originStory?.images?.[0] || "/images/placeholder.jpg";
            
            const mappedProduct = {
              id: product.id,
              name: product.name,
              // Hack the slug to include categorySlug so ProductCard routes correctly to /products/[category]/[slug]
              slug: `${product.categorySlug}/${product.slug}`,
              botanicalName: product.botanicalName,
              hsCode: "N/A",
              category: { id: product.categorySlug, name: product.category, slug: product.categorySlug },
              shortDescription: product.description?.substring(0, 100) + "...",
              description: product.description,
              origin: product.originStory?.location || "India",
              images: [
                {
                  id: "1",
                  url: imageUrl,
                  altText: product.name
                }
              ],
              minimumOrderQuantity: product.packagingOptions?.[0]?.moq || "1 FCL",
              featured: false,
              status: "published",
            } as TypesProduct;

            return (
              <ProductCard key={product.id} product={mappedProduct} />
            );
          })}
        </div>
      </div>
    </section>
  );
}
