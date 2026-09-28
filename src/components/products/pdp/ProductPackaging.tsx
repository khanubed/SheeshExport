"use client";
import React from "react";
import { PackagingOption } from "@/lib/data/types";
import { Check } from "lucide-react";

export function ProductPackaging({ options }: { options: PackagingOption[] }) {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4 max-w-8xl">
        <div className="mb-16">
          <h2 className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-4">
            Fulfillment
          </h2>
          <h3 className="text-3xl lg:text-4xl font-heading font-semibold text-foreground">
            Packaging Options
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {options.map((opt, idx) => (
            <div
              key={idx}
              className="border border-border p-8  transition-colors bg-muted/30"
            >
              <h4 className="text-xl font-heading font-semibold text-foreground mb-4">{opt.name}</h4>
              <p className="text-muted-foreground mb-8 min-h-[60px]">{opt.description}</p>

              <ul className="space-y-4 text-sm">
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-600" />
                  <span className="text-muted-foreground">MOQ:</span>
                  <span className="font-semibold text-foreground ml-auto">{opt.moq}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-600" />
                  <span className="text-muted-foreground">Lead Time:</span>
                  <span className="font-semibold text-foreground ml-auto">{opt.leadTime}</span>
                </li>
                <li className="flex items-center gap-3 border-t border-border pt-4 mt-4">
                  <span className="text-muted-foreground block w-full text-center italic">
                    {opt.bestFor}
                  </span>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
