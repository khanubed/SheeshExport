"use client";
import React from "react";
import { Variant } from "@/lib/data/types";

export function ProductSpecifications({ variant }: { variant: Variant }) {
  return (
    <div className="bg-white p-8 border border-slate-200 shadow-sm">
      <h2 className="text-2xl font-serif font-semibold text-slate-900 mb-6">Technical Specifications</h2>
      <div className="w-full text-sm text-left">
        {variant.specifications.map((spec, idx) => (
          <div key={idx} className="flex justify-between py-4 border-b border-slate-100 last:border-0">
            <span className="font-medium text-slate-700">{spec.parameter}</span>
            <span className="text-slate-900 font-semibold text-right">{spec.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}