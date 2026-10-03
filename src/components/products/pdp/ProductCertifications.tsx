import React from "react";
import { ShieldCheck } from "lucide-react";

export function ProductCertifications({ certifications }: { certifications: string[] }) {
  return (
    <section className="py-16 bg-muted/50 border-y border-border">
      <div className="container mx-auto px-4 max-w-8xl flex flex-col md:flex-row items-center gap-8">
        <div className="flex-shrink-0">
          <h3 className="text-lg font-serif font-semibold text-foreground flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-green-600" /> Quality & Compliance
          </h3>
        </div>
        <div className="flex flex-wrap gap-4 md:ml-auto">
          {certifications.map((cert, idx) => (
            <span
              key={idx}
              className="px-4 py-2 bg-white border border-border text-muted-foreground font-medium text-sm shadow-sm rounded-sm"
            >
              {cert}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
