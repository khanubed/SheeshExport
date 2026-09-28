 import React from "react";
import { Category } from "@/lib/data/categories";

export function CategoryOverview({ category }: { category: Category }) {
  return (
    <section className="py-12 lg:py-16 bg-background border-b border-border">
       <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
             
             {/* Left: Narrative (60%) */}
             <div className="lg:col-span-7 flex flex-col gap-8">
                <div>
                   <h2 className="text-3xl lg:text-4xl font-heading text-foreground font-semibold mb-6">
                     {category.heroTitle || `${category.name} Export Solutions`}
                   </h2>
                   <div className="text-lg text-muted-foreground leading-relaxed font-sans space-y-4">
                     {category.overviewText?.split('\n\n').map((paragraph, idx) => (
                       <p key={idx}>{paragraph}</p>
                     )) || (
                       <p>{category.overview.industry} {category.overview.production}</p>
                     )}
                   </div>
                </div>
             </div>

             {/* Right: Quick Stats (40%) */}
             <div className="lg:col-span-5 bg-card p-8 lg:p-12 border border-border flex flex-col justify-center">
                <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-foreground mb-10 font-sans">Quick Intelligence</h3>
                
                <div className="flex flex-col gap-8">
                   <div className="flex justify-between items-end border-b border-border pb-3">
                      <span className="text-sm text-muted-foreground font-sans">Products Available</span>
                      <span className="text-2xl font-heading text-foreground">{category.overview.quickStats.productsAvailable}</span>
                   </div>
                   <div className="flex justify-between items-end border-b border-border pb-3">
                      <span className="text-sm text-muted-foreground font-sans">Export Markets Served</span>
                      <span className="text-2xl font-heading text-foreground">{category.overview.quickStats.countriesServed}</span>
                   </div>
                   <div className="flex justify-between items-end border-b border-border pb-3">
                      <span className="text-sm text-muted-foreground font-sans">Standard MOQ</span>
                      <span className="text-xl font-heading text-foreground">{category.overview.quickStats.moq}</span>
                   </div>
                   <div className="flex justify-between items-end border-b border-border pb-3">
                      <span className="text-sm text-muted-foreground font-sans">Average Lead Time</span>
                      <span className="text-xl font-heading text-foreground">{category.overview.quickStats.leadTime}</span>
                   </div>
                </div>  
             </div>

          </div>
       </div>
    </section>
  );
}
