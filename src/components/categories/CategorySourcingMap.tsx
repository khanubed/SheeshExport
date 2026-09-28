import React from "react";
import { Category } from "@/lib/data/categories";
import { MapPin } from "lucide-react";

export function CategorySourcingMap({ category }: { category: Category }) {
  if (!category.origins || category.origins.length === 0) return null;
  return (
    <section className="py-12 lg:py-16 bg-background border-b border-border">
      <div className="container mx-auto px-6 lg:px-12 max-w-8xl">
        <div className="mb-10">
          <h2 className="text-3xl lg:text-4xl font-heading text-foreground font-bold mb-3">
            Where Our {category.name} Comes From
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl font-sans">
            Traceability matters. We source directly from India's most prominent agro-climatic zones
            dedicated to this commodity.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {category.origins.map((origin, idx) => (
            <div key={idx} className="bg-card p-8 border border-border flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-foreground" />
                <h3 className="text-lg font-bold text-foreground">{origin.region}</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4 font-sans flex-grow">
                {origin.description}
              </p>
              <div className="border-t border-border pt-4 mt-auto">
                <div className="flex justify-between text-xs mb-2">
                  <span className="text-muted-foreground font-bold uppercase tracking-wider">Climate</span>
                  <span className="text-foreground">{origin.climate}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground font-bold uppercase tracking-wider">Harvest</span>
                  <span className="text-foreground">{origin.harvestPeriod}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
