"use client";
import React from "react";
import { Variant } from "@/lib/data/types";

export function ProductSpecifications({ variant }: { variant: Variant }) {
  return (
    <div className="bg-white p-8 border border-border shadow-sm">
      <h2 className="text-2xl font-serif font-semibold text-foreground mb-6">Technical Specifications</h2>
      <div className="w-full text-sm text-left">
        {variant.specifications.map((spec, idx) => (
          <div key={idx} className="flex justify-between py-4 border-b border-border/50 last:border-0">
            <span className="font-medium text-muted-foreground">{spec.parameter}</span>
            <span className="text-foreground font-semibold text-right">{spec.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}