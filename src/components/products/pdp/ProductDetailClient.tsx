"use client";
import React, { useState, useEffect } from "react";
import { Product, Variant } from "@/lib/data/types";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { ProductHero } from "./ProductHero";
import { ProductVariants } from "./ProductVariants";
import { ProductOriginStory } from "./ProductOriginStory";
import { ProductGallery } from "./ProductGallery";
import { VariantAttributes } from "./VariantAttributes";
import { ProductSpecifications } from "./ProductSpecifications";
import { ProductShipping } from "./ProductShipping";
import { ProductPackaging } from "./ProductPackaging";
import { ProductCertifications } from "./ProductCertifications";
import { ProductExportMarkets } from "./ProductExportMarkets";
import { VariantComparison } from "./VariantComparison";
import { ProductFAQ } from "./ProductFAQ";
import { ProductRFQCTA } from "./ProductRFQCTA";

export function ProductDetailClient({ product }: { product: Product }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  
  const variantParam = searchParams.get("variant");
  const defaultVariant = product.variants[0];
  
  const [selectedVariant, setSelectedVariant] = useState<Variant>(
    product.variants.find((v) => v.slug === variantParam) || defaultVariant
  );

  useEffect(() => {
    const v = product.variants.find((v) => v.slug === variantParam);
    if (v) {
      setSelectedVariant(v);
    }
  }, [variantParam, product.variants]);

  const handleVariantChange = (variant: Variant) => {
    setSelectedVariant(variant);
    const params = new URLSearchParams(searchParams.toString());
    params.set("variant", variant.slug);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex flex-col w-full bg-white text-slate-900 selection:bg-slate-200">
      <ProductHero product={product} selectedVariant={selectedVariant} />
      {product.variants.length > 1 && (
        <ProductVariants product={product} selectedVariant={selectedVariant} onSelect={handleVariantChange} />
      )}
      <ProductOriginStory product={product} />
      <ProductGallery variant={selectedVariant} />
      <div className="bg-slate-50 border-t border-b border-slate-100 py-16">
        <div className="container mx-auto px-4 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16">
          <VariantAttributes variant={selectedVariant} />
          <ProductSpecifications variant={selectedVariant} />
        </div>
      </div>
      <ProductShipping shipping={product.shipping} />
      <ProductPackaging options={product.packagingOptions} />
      <ProductCertifications certifications={product.certifications} />
      <ProductExportMarkets markets={product.exportMarkets} />
      {product.variants.length > 1 && (
        <VariantComparison variants={product.variants} />
      )}
      <ProductFAQ faqs={product.faqs} />
      <ProductRFQCTA product={product} />
    </div>
  );
}