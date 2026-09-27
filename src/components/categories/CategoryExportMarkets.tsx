import React from "react";
import { Category } from "@/lib/data/categories";

export function CategoryExportMarkets({ category }: { category: Category }) {
  if (!category.exportMarkets || category.exportMarkets.length === 0) return null;
  return (
    <section className="py-12 lg:py-16 bg-slate-50 border-b border-slate-200 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 max-w-8xl">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl lg:text-4xl font-serif text-slate-900 font-semibold mb-4">
              Exported Globally
            </h2>
            <p className="text-base text-slate-600 font-sans mb-8 leading-relaxed max-w-xl">
              Sheesh Exports has an established footprint across 50+ countries. Our dedicated
              logistics team handles end-to-end documentation, ensuring smooth customs clearance for
              our {category.name.toLowerCase()} worldwide.
            </p>
            <div className="flex flex-wrap gap-4">
              {category.exportMarkets.map((market, i) => (
                <div
                  key={i}
                  className="px-5 py-3 bg-white border border-slate-200 font-sans text-sm font-semibold text-slate-900"
                >
                  {market}
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative h-[400px] flex items-center justify-center">
            {/* Minimalist World Map */}
            <div className="absolute inset-0 opacity-40 bg-[url('/world-map.png')] bg-center bg-contain bg-no-repeat"></div>
            <div className="relative z-10 text-center bg-white/70 backdrop-blur-sm p-8 border border-white/40 shadow-sm rounded-xl">
              <div className="text-6xl font-serif font-bold text-slate-900 mb-2">50+</div>
              <div className="text-sm font-bold uppercase tracking-widest text-slate-800">
                Countries Served
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
