"use client";
import React from "react";
import { Variant } from "@/lib/data/types";

export function VariantComparison({ variants }: { variants: Variant[] }) {
  if (variants.length < 2) return null;

  // Extract all unique spec parameters
  const specKeys = Array.from(
    new Set(variants.flatMap((v) => v.specifications.map((s) => s.parameter)))
  );

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 max-w-8xl">
        <h3 className="text-3xl font-heading font-semibold text-foreground mb-12 text-center">
          Grade Comparison
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse bg-background shadow-sm border border-border">
            <thead>
              <tr>
                <th className="p-6 border-b border-border bg-muted/50 text-foreground font-heading font-semibold">
                  Parameter
                </th>
                {variants.map((v) => (
                  <th
                    key={v.id}
                    className="p-6 border-b border-border bg-muted/50 text-foreground font-heading font-semibold"
                  >
                    {v.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {specKeys.map((key, idx) => (
                <tr key={idx} className="border-b border-border/50 last:border-0 hover:bg-muted/30">
                  <td className="p-4 px-6 text-sm font-medium text-muted-foreground">{key}</td>
                  {variants.map((v) => {
                    const spec = v.specifications.find((s) => s.parameter === key);
                    return (
                      <td key={v.id} className="p-4 px-6 text-sm text-foreground font-semibold">
                        {spec ? spec.value : "-"}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
