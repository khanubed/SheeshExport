import React from "react";
import { Category } from "@/lib/data/categories";
import { Package, Box, ShoppingBag } from "lucide-react";
import Link from "next/link";

export function CategoryPackaging({ category }: { category: Category }) {
  return (
    <section className="py-12 lg:py-16 bg-background border-b border-border">
      <div className="container mx-auto px-6 lg:px-12 max-w-8xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-heading text-foreground font-bold mb-3">
            Packaging Capabilities
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto font-sans">
            We offer highly customizable packaging solutions for {category.name.toLowerCase()}, from
            raw commodity bales to private label retail pouches.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border border-border p-8 flex flex-col bg-card">
            <div className="w-16 h-16 bg-muted flex items-center justify-center mb-6">
              <Package className="w-8 h-8 text-foreground" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Bulk Commodity</h3>
            <p className="text-sm text-muted-foreground mb-6 font-sans flex-grow">
              Heavy-duty breathable Jute sacks, PP woven bags, or high-density hydraulic compressed
              bales to maximize payload for grinders and extractors.
            </p>
            <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              MOQ: 1x20FT FCL
            </div>
          </div>

          <div className="border border-border p-8 flex flex-col bg-muted">
            <div className="w-16 h-16 bg-background flex items-center justify-center mb-6 border border-border">
              <ShoppingBag className="w-8 h-8 text-foreground" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Private Label</h3>
            <p className="text-sm text-muted-foreground mb-6 font-sans flex-grow">
              Customized pouch packing, pillow bags, zip-lock stand-up pouches, or retail master
              cartons with customer logo and compliance labeling.
            </p>
            <Link
              href="/services/private-label"
              className="text-xs font-bold uppercase tracking-wider text-foreground underline underline-offset-4"
            >
              Learn More
            </Link>
          </div>

          <div className="border border-border p-8 flex flex-col bg-card">
            <div className="w-16 h-16 bg-muted flex items-center justify-center mb-6">
              <Box className="w-8 h-8 text-foreground" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Sheesh Branded</h3>
            <p className="text-sm text-muted-foreground mb-6 font-sans flex-grow">
              Standard high-barrier export-grade 10kg/25kg branded poly-laminated multi-wall bags
              ready for regional distribution.
            </p>
            <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Fastest Lead Time
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
