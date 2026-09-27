"use client";
import React from "react";
import { PackagingOption } from "@/lib/data/types";
import { Check } from "lucide-react";

export function ProductPackaging({ options }: { options: PackagingOption[] }) {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-8xl">
        <div className="mb-16">
          <h2 className="text-sm font-semibold tracking-widest uppercase text-slate-500 mb-4">
            Fulfillment
          </h2>
          <h3 className="text-3xl lg:text-4xl font-serif font-semibold text-slate-900">
            Packaging Options
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {options.map((opt, idx) => (
            <div
              key={idx}
              className="border border-slate-200 p-8 hover:border-slate-900 transition-colors bg-slate-50"
            >
              <h4 className="text-xl font-serif font-semibold text-slate-900 mb-4">{opt.name}</h4>
              <p className="text-slate-600 mb-8 min-h-[60px]">{opt.description}</p>

              <ul className="space-y-4 text-sm">
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-600" />
                  <span className="text-slate-500">MOQ:</span>
                  <span className="font-semibold text-slate-900 ml-auto">{opt.moq}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-600" />
                  <span className="text-slate-500">Lead Time:</span>
                  <span className="font-semibold text-slate-900 ml-auto">{opt.leadTime}</span>
                </li>
                <li className="flex items-center gap-3 border-t border-slate-200 pt-4 mt-4">
                  <span className="text-slate-500 block w-full text-center italic">
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
