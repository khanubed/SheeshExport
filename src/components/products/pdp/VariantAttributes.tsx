"use client";
import React from "react";
import { Variant } from "@/lib/data/types";

export function VariantAttributes({ variant }: { variant: Variant }) {
  return (
    <div>
      <h2 className="text-2xl font-serif font-semibold text-foreground mb-8">Key Attributes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
        {variant.attributes.map((attr, idx) => (
          <div key={idx} className="flex flex-col border-b border-border pb-4">
            <span className="text-sm text-muted-foreground mb-1">{attr.label}</span>
            <span className="text-lg font-medium text-foreground">{attr.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}