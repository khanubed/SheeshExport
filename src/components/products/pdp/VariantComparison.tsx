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
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-8xl">
        <h3 className="text-3xl font-serif font-semibold text-slate-900 mb-12 text-center">
          Grade Comparison
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse bg-white shadow-sm border border-slate-200">
            <thead>
              <tr>
                <th className="p-6 border-b border-slate-200 bg-slate-100 text-slate-900 font-serif font-semibold">
                  Parameter
                </th>
                {variants.map((v) => (
                  <th
                    key={v.id}
                    className="p-6 border-b border-slate-200 bg-slate-100 text-slate-900 font-serif font-semibold"
                  >
                    {v.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {specKeys.map((key, idx) => (
                <tr key={idx} className="border-b border-slate-100 last:border-0 hover:bg-slate-50">
                  <td className="p-4 px-6 text-sm font-medium text-slate-600">{key}</td>
                  {variants.map((v) => {
                    const spec = v.specifications.find((s) => s.parameter === key);
                    return (
                      <td key={v.id} className="p-4 px-6 text-sm text-slate-900 font-semibold">
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
