import React from "react";
import { Globe2 } from "lucide-react";

export function ProductExportMarkets({ markets }: { markets: string[] }) {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4 max-w-8xl text-center">
        <Globe2 className="w-12 h-12 text-muted-foreground/60 mx-auto mb-6" />
        <h3 className="text-3xl font-heading font-semibold text-foreground mb-8">
          Global Export Markets
        </h3>
        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {markets.map((market, idx) => (
            <span
              key={idx}
              className="px-6 py-3 bg-muted/30 border border-border text-foreground font-semibold uppercase tracking-wider text-xs"
            >
              {market}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
