import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/data/types";
import { buttonVariants } from "@/components/ui/button";
import { PackageSearch, ShieldCheck, ListTree } from "lucide-react";

export function ProductCard({ product }: { product: Product }) {
  const firstImage = product.variants?.[0]?.images?.[0] || product.variants?.[0]?.originStory?.images?.[0];
  const imageUrl = typeof firstImage === "string" ? firstImage : (firstImage?.src || "/images/placeholder.jpg");
  const productHref = `/products/${product.categorySlug}/${product.slug}`;
  
  return (
    <div className="group relative flex flex-col bg-card border border-border/50 rounded-xl overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all duration-300 cursor-pointer h-full">
      {/* Entire Card Clickable Link */}
      <Link 
        href={productHref} 
        className="absolute inset-0 z-0"
        aria-label={`View details for ${product.name}`}
      />

      {/* Image Container - compact aspect ratio */}
      <div className="relative aspect-[16/10] w-full bg-muted overflow-hidden pointer-events-none">
        <Image
          src={imageUrl}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 group-hover:blur-[2px] group-hover:brightness-50 transition-all duration-500 ease-out"
        />
        
        <div className="absolute top-2.5 left-2.5 z-10 pointer-events-auto">
          <span className="bg-background/90 backdrop-blur-md text-foreground text-[9px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-md shadow-xs border border-white/10">
            {product.category || "Other"}
          </span>
        </div>

        {/* Variant Overlay on Hover */}
        <div className="absolute inset-0 z-20 flex flex-col justify-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0 pointer-events-none">
          <div className="flex items-center gap-1.5 mb-1.5">
            <ListTree className="w-3.5 h-3.5 text-primary" />
            <h4 className="text-white font-semibold text-xs drop-shadow-md">Available Variants</h4>
          </div>
          <ul className="flex flex-col gap-1">
            {product.variants?.slice(0, 2).map(variant => (
              <li key={variant.id} className="text-white/90 text-xs flex flex-col">
                <span className="font-semibold text-white drop-shadow-md text-[11px]">{variant.name}</span>
                <span className="text-[10px] text-white/70 line-clamp-1">{variant.shortDescription}</span>
              </li>
            ))}
            {product.variants && product.variants.length > 2 && (
              <li className="text-white/60 text-[10px] italic">
                + {product.variants.length - 2} more variants
              </li>
            )}
          </ul>
        </div>
      </div>

      {/* Content - reduced padding & margins */}
      <div className="p-3.5 sm:p-4 flex flex-col flex-grow relative z-10 pointer-events-none bg-card">
        <h3 className="font-heading font-bold text-base text-foreground mb-1 line-clamp-1 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        
        <p className="text-muted-foreground text-xs line-clamp-2 mb-3 leading-relaxed">
          {product.description}
        </p>

        {/* Info Grid - compact */}
        <div className="grid grid-cols-2 gap-2 text-xs mb-3 p-2 bg-muted/30 rounded-lg border border-border/50">
          <div className="flex flex-col gap-0.5">
            <span className="text-muted-foreground flex items-center gap-1 font-medium uppercase tracking-wider text-[9px]">
              <PackageSearch className="w-3 h-3" /> Origin
            </span>
            <span className="font-semibold text-xs text-foreground line-clamp-1" title={product.variants?.[0]?.originStory?.location || "India"}>
              {product.variants?.[0]?.originStory?.location || "India"}
            </span>
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-muted-foreground flex items-center gap-1 font-medium uppercase tracking-wider text-[9px]">
              <ShieldCheck className="w-3 h-3" /> Certs
            </span>
            <span className="font-semibold text-xs text-foreground truncate" title={product.certifications?.join(", ")}>
              {product.certifications?.[0]}{product.certifications?.length > 1 ? " +" : ""}
            </span>
          </div>
        </div>

        {/* Actions - compact side-by-side buttons */}
        <div className="grid grid-cols-2 gap-2 mt-auto pointer-events-auto">
          <Link 
            href={`/request-quote?product=${encodeURIComponent(product.slug)}`} 
            className={buttonVariants({ size: "sm", className: "w-full rounded-lg text-xs h-8 shadow-xs" })}
          >
            Quick RFQ
          </Link>
          <Link 
            href={productHref} 
            className={buttonVariants({ variant: "outline", size: "sm", className: "w-full rounded-lg text-xs h-8 text-muted-foreground hover:text-foreground" })}
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
