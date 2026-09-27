import React from "react";
import { Category } from "@/lib/data/categories";
import { Package, Box, ShoppingBag } from "lucide-react";
import Link from "next/link";

export function CategoryPackaging({ category }: { category: Category }) {
  return (
    <section className="py-12 lg:py-16 bg-white border-b border-slate-200">
      <div className="container mx-auto px-6 lg:px-12 max-w-8xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-serif text-slate-900 font-semibold mb-3">
            Packaging Capabilities
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto font-sans">
            We offer highly customizable packaging solutions for {category.name.toLowerCase()}, from
            raw commodity bales to private label retail pouches.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border border-slate-200 p-8 flex flex-col">
            <div className="w-16 h-16 bg-slate-50 flex items-center justify-center mb-6">
              <Package className="w-8 h-8 text-slate-900" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Bulk Commodity</h3>
            <p className="text-sm text-slate-600 mb-6 font-sans flex-grow">
              Heavy-duty breathable Jute sacks, PP woven bags, or high-density hydraulic compressed
              bales to maximize payload for grinders and extractors.
            </p>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
              MOQ: 1x20FT FCL
            </div>
          </div>

          <div className="border border-slate-200 p-8 flex flex-col bg-slate-50">
            <div className="w-16 h-16 bg-white flex items-center justify-center mb-6 border border-slate-200">
              <ShoppingBag className="w-8 h-8 text-slate-900" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Private Label</h3>
            <p className="text-sm text-slate-600 mb-6 font-sans flex-grow">
              Customized pouch packing, pillow bags, zip-lock stand-up pouches, or retail master
              cartons with customer logo and compliance labeling.
            </p>
            <Link
              href="/services/private-label"
              className="text-xs font-bold uppercase tracking-wider text-slate-900 underline underline-offset-4"
            >
              Learn More
            </Link>
          </div>

          <div className="border border-slate-200 p-8 flex flex-col">
            <div className="w-16 h-16 bg-slate-50 flex items-center justify-center mb-6">
              <Box className="w-8 h-8 text-slate-900" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Sheesh Branded</h3>
            <p className="text-sm text-slate-600 mb-6 font-sans flex-grow">
              Standard high-barrier export-grade 10kg/25kg branded poly-laminated multi-wall bags
              ready for regional distribution.
            </p>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Fastest Lead Time
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
