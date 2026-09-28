"use client";
import React from "react";
import { FAQ } from "@/lib/data/types";

export function ProductFAQ({ faqs }: { faqs: FAQ[] }) {
  if (!faqs || faqs.length === 0) return null;
  return (
    <section className="py-24 bg-background border-t border-border/50">
      <div className="container mx-auto px-4 max-w-3xl">
        <h3 className="text-3xl font-heading font-semibold text-foreground mb-12 text-center">Frequently Asked Questions</h3>
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-border pb-6">
              <h4 className="text-lg font-semibold text-foreground mb-2">{faq.question}</h4>
              <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}