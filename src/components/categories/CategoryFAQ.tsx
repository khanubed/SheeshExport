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
    <section className="py-12 lg:py-16 bg-background border-b border-border">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-heading text-foreground font-bold mb-3">Frequently Asked Questions</h2>
          <p className="text-base text-muted-foreground font-sans">Common queries about sourcing {category.name.toLowerCase()} from us.</p>
        </div>
        <Accordion className="w-full bg-card border border-border">
          {category.faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-border last:border-0 px-6">
              <AccordionTrigger className="text-left font-heading text-lg font-bold hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-sans leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
