import React from "react";
import { Category } from "@/lib/data/categories";

export function CategoryOverview({ category }: { category: Category }) {
  return (
    <section className="py-20 lg:py-32 bg-white border-b border-slate-200">
       <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
             
             {/* Left: Narrative (60%) */}
             <div className="lg:col-span-7 flex flex-col gap-8">
                <div>
                   <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-slate-400 mb-6 font-sans">Industry Overview</h2>
                   <p className="text-xl lg:text-2xl font-serif text-slate-900 leading-relaxed">
                      {category.overview.industry}
                   </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                   <div>
                      <h3 className="text-[10px] uppercase tracking-[0.15em] font-bold text-slate-400 mb-3 font-sans border-b border-slate-900 pb-2 inline-block">Production & Sourcing</h3>
                      <p className="text-sm text-slate-600 leading-relaxed font-sans">
                         {category.overview.production}
                      </p>
                   </div>
                   <div>
                      <h3 className="text-[10px] uppercase tracking-[0.15em] font-bold text-slate-400 mb-3 font-sans border-b border-slate-900 pb-2 inline-block">Global Supply Network</h3>
                      <p className="text-sm text-slate-600 leading-relaxed font-sans">
                         {category.overview.supplyNetwork}
                      </p>
                   </div>
                </div>
             </div>

             {/* Right: Quick Stats (40%) */}
             <div className="lg:col-span-5 bg-slate-50 p-8 lg:p-12 border border-slate-100 flex flex-col justify-center">
                <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-slate-900 mb-10 font-sans">Quick Intelligence</h3>
                
                <div className="flex flex-col gap-8">
                   <div className="flex justify-between items-end border-b border-slate-200 pb-3">
                      <span className="text-sm text-slate-500 font-sans">Products Available</span>
                      <span className="text-2xl font-serif text-slate-900">{category.overview.quickStats.productsAvailable}</span>
                   </div>
                   <div className="flex justify-between items-end border-b border-slate-200 pb-3">
                      <span className="text-sm text-slate-500 font-sans">Export Markets Served</span>
                      <span className="text-2xl font-serif text-slate-900">{category.overview.quickStats.countriesServed}</span>
                   </div>
                   <div className="flex justify-between items-end border-b border-slate-200 pb-3">
                      <span className="text-sm text-slate-500 font-sans">Standard MOQ</span>
                      <span className="text-xl font-mono text-slate-900">{category.overview.quickStats.moq}</span>
                   </div>
                   <div className="flex justify-between items-end border-b border-slate-200 pb-3">
                      <span className="text-sm text-slate-500 font-sans">Average Lead Time</span>
                      <span className="text-xl font-mono text-slate-900">{category.overview.quickStats.leadTime}</span>
                   </div>
                </div>
             </div>

          </div>
       </div>
    </section>
  );
}
