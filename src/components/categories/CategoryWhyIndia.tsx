import React from "react";
import { Category } from "@/lib/data/categories";

export function CategoryWhyIndia({ category }: { category: Category }) {
  if (!category.whyIndia || category.whyIndia.length === 0) return null;
  return (
    <section className="py-12 lg:py-16 bg-slate-50 border-b border-slate-200">
      <div className="container mx-auto px-6 lg:px-12 max-w-8xl">
        <div className="mb-10">
          <h2 className="text-3xl lg:text-4xl font-serif text-slate-900 font-semibold mb-3">
            Why Source {category.name} From India
          </h2>
          <p className="text-base text-slate-600 max-w-2xl font-sans">
            Strategic advantages of partnering with an Indian supplier for your global bulk
            requirements.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {category.whyIndia.map((reason, idx) => (
            <div key={idx} className="bg-white p-8 border border-slate-200">
              <div className="w-12 h-12 bg-slate-900 text-white flex items-center justify-center font-serif text-xl font-bold mb-6">
                {idx + 1}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{reason.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-sans">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
