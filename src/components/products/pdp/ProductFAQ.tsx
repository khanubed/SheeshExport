"use client";
import React from "react";
import { FAQ } from "@/lib/data/types";

export function ProductFAQ({ faqs }: { faqs: FAQ[] }) {
  if (!faqs || faqs.length === 0) return null;
  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 max-w-3xl">
        <h3 className="text-3xl font-serif font-semibold text-slate-900 mb-12 text-center">Frequently Asked Questions</h3>
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-slate-200 pb-6">
              <h4 className="text-lg font-semibold text-slate-900 mb-2">{faq.question}</h4>
              <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}