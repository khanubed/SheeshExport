import React from "react";
import { Category } from "@/lib/data/categories";

export function CategoryApplications({ category }: { category: Category }) {
  if (!category.applications || category.applications.length === 0) return null;
  return (
    <section className="py-12 lg:py-16 bg-white border-b border-slate-200">
      <div className="container mx-auto px-6 lg:px-12 max-w-8xl">
        <div className="mb-10">
          <h2 className="text-3xl lg:text-4xl font-serif text-slate-900 font-semibold mb-3">
            Buyer Applications
          </h2>
          <p className="text-base text-slate-600 max-w-2xl font-sans">
            Who we supply {category.name.toLowerCase()} to.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {category.applications.map((app, idx) => (
            <div key={idx} className="flex gap-6 items-start border-b border-slate-100 pb-8">
              <div className="text-3xl font-serif text-slate-300 font-bold">0{idx + 1}</div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{app.industry}</h3>
                <p className="text-slate-600 leading-relaxed font-sans">{app.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
