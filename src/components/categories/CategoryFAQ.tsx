import React from "react";
import { Category } from "@/lib/data/categories";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function CategoryFAQ({ category }: { category: Category }) {
  if (!category.faqs || category.faqs.length === 0) return null;
  return (
    <section className="py-12 lg:py-16 bg-slate-50 border-b border-slate-200">
      <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-serif text-slate-900 font-semibold mb-3">Frequently Asked Questions</h2>
          <p className="text-base text-slate-600 font-sans">Common queries about sourcing {category.name.toLowerCase()} from us.</p>
        </div>
        <Accordion className="w-full bg-white border border-slate-200">
          {category.faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-slate-100 last:border-0 px-6">
              <AccordionTrigger className="text-left font-serif text-lg font-semibold hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 font-sans leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}