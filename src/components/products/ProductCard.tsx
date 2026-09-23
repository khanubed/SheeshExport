import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/data/types";
import { buttonVariants } from "@/components/ui/button";
import { CheckCircle2, PackageSearch, ShieldCheck } from "lucide-react";

export function ProductCard({ product }: { product: Product }) {
  const imageUrl = product.images?.[0]?.url || "/images/placeholder.jpg";
  
  return (
    <div className="group flex flex-col bg-card border border-border/50 rounded-2xl overflow-hidden hover:shadow-xl hover:border-primary/20 transition-all duration-300">
      {/* Image Container */}
      <div className="relative aspect-[4/3] sm:aspect-square w-full bg-muted overflow-hidden">
        <Image
          src={imageUrl}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-background/90 backdrop-blur-md text-foreground text-[10px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-full shadow-sm border border-white/10">
            {product.category?.name || "Other"}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-heading font-bold text-xl text-foreground mb-2 line-clamp-1 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        
        <p className="text-muted-foreground text-sm line-clamp-2 mb-6 flex-grow leading-relaxed">
          {product.shortDescription}
        </p>

        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-4 text-xs mb-6 p-3 bg-muted/30 rounded-lg border border-border/50">
          <div className="flex flex-col gap-1.5">
            <span className="text-muted-foreground flex items-center gap-1.5 font-medium uppercase tracking-wider text-[10px]">
              <PackageSearch className="w-3.5 h-3.5" /> MOQ
            </span>
            <span className="font-semibold text-foreground">{product.minimumOrderQuantity}</span>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-muted-foreground flex items-center gap-1.5 font-medium uppercase tracking-wider text-[10px]">
              <ShieldCheck className="w-3.5 h-3.5" /> Certs
            </span>
            <span className="font-semibold text-foreground truncate" title={product.certifications?.map(c => c.name).join(", ")}>
              {product.certifications?.[0]?.name}{product.certifications?.length > 1 ? " +" : ""}
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-2 mt-auto">
          <Link 
            href={`/request-quote?product=${encodeURIComponent(product.slug)}`} 
            className={buttonVariants({ size: "default", className: "w-full rounded-xl shadow-md group-hover:shadow-lg transition-all" })}
          >
            Quick RFQ
          </Link>
          <Link 
            href={`/products/${product.slug}`} 
            className={buttonVariants({ variant: "ghost", size: "default", className: "w-full rounded-xl text-muted-foreground hover:text-primary" })}
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
