"use client";
import React, { useState, useEffect } from "react";
import { Product, Variant } from "@/lib/data/types";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { ProductHero } from "./ProductHero";
import { ProductVariants } from "./ProductVariants";
import { ProductPackaging } from "./ProductPackaging";
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
    <div className="flex flex-col w-full bg-background text-foreground selection:bg-primary/20">
      <ProductHero product={product} selectedVariant={selectedVariant} />
      
      {/* Commercial Intelligence View (includes origin story, specs, compliance, and image) */}
      <ProductVariants 
        product={product} 
        selectedVariant={selectedVariant} 
        onSelect={handleVariantChange} 
      />
      
      {/* Additional PDP Sections */}
      <ProductPackaging options={product.packagingOptions} />
      <ProductExportMarkets markets={product.exportMarkets} />
      
      {product.variants.length > 1 && (
        <VariantComparison variants={product.variants} />
      )}
      
      <ProductFAQ faqs={product.faqs} />
      <ProductRFQCTA product={product} />
    </div>
  );
}