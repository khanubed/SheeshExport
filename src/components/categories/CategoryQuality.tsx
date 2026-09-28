import React from "react";
import { Category } from "@/lib/data/categories";
import { CheckCircle2 } from "lucide-react";

export function CategoryQuality({ category }: { category: Category }) {
  return (
    <section className="py-12 lg:py-16 bg-slate-900 text-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-8xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
              Export Quality Standards
            </h2>
            <p className="text-base text-slate-300 font-sans mb-8 leading-relaxed">
              Every consignment of {category.name.toLowerCase()} undergoes rigorous testing. We
              enforce strict compliance controls to maintain purity, manage moisture, and guarantee
              aflatoxin/microbiological thresholds compliant with stringent EU Commission and US FDA
              standards.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Moisture Control & Optimization",
                "Advanced Sortex Purity",
                "Laboratory Residue Testing",
                "Aflatoxin Management",
                "Microbiological Analysis",
                "Fumigation & Phytosanitary",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm font-sans">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 p-10">
            <h3 className="text-xl font-bold mb-6 font-heading">Global Certifications</h3>
            <div className="flex flex-wrap gap-3">
              {category.certifications.map((cert, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-white/10 text-xs uppercase tracking-wider font-bold"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
