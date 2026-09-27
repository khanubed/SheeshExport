import React from "react";
import { Category } from "@/lib/data/categories";
import { MapPin } from "lucide-react";

export function CategorySourcingMap({ category }: { category: Category }) {
  if (!category.origins || category.origins.length === 0) return null;
  return (
    <section className="py-12 lg:py-16 bg-white border-b border-slate-200">
      <div className="container mx-auto px-6 lg:px-12 max-w-8xl">
        <div className="mb-10">
          <h2 className="text-3xl lg:text-4xl font-serif text-slate-900 font-semibold mb-3">
            Where Our {category.name} Comes From
          </h2>
          <p className="text-base text-slate-600 max-w-2xl font-sans">
            Traceability matters. We source directly from India's most prominent agro-climatic zones
            dedicated to this commodity.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {category.origins.map((origin, idx) => (
            <div key={idx} className="bg-slate-50 p-8 border border-slate-100 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-slate-900" />
                <h3 className="text-lg font-bold text-slate-900">{origin.region}</h3>
              </div>
              <p className="text-sm text-slate-600 mb-4 font-sans flex-grow">
                {origin.description}
              </p>
              <div className="border-t border-slate-200 pt-4 mt-auto">
                <div className="flex justify-between text-xs mb-2">
                  <span className="text-slate-500 font-bold uppercase tracking-wider">Climate</span>
                  <span className="text-slate-900">{origin.climate}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500 font-bold uppercase tracking-wider">Harvest</span>
                  <span className="text-slate-900">{origin.harvestPeriod}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
