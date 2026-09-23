"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import { ProductFaq } from "@/lib/data/types";

interface FAQAccordionProps {
  faqs?: ProductFaq[];
}

export function FAQAccordion({ faqs }: FAQAccordionProps) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-heading font-bold mb-6 flex items-center gap-2">
        <HelpCircle className="text-primary w-6 h-6" />
        Frequently Asked Questions
      </h3>
      <Accordion type="single" className="w-full">
        {faqs.map((faq) => (
          <AccordionItem key={faq.id} value={faq.id}>
            <AccordionTrigger className="text-left font-medium text-lg">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
