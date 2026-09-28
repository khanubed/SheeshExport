import React from "react";
import { Category } from "@/lib/data/categories";

export function CategoryWhyIndia({ category }: { category: Category }) {
  if (!category.whyIndia || category.whyIndia.length === 0) return null;
  return (
    <section className="py-12 lg:py-16 bg-background border-b border-border">
      <div className="container mx-auto px-6 lg:px-12 max-w-8xl">
        <div className="mb-10">
          <h2 className="text-3xl lg:text-4xl font-heading text-foreground font-bold mb-3">
            Why Source {category.name} From India
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl font-sans">
            Strategic advantages of partnering with an Indian supplier for your global bulk
            requirements.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {category.whyIndia.map((reason, idx) => (
            <div key={idx} className="bg-card p-8 border border-border">
              <div className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center font-heading text-xl font-bold mb-6">
                {idx + 1}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{reason.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
