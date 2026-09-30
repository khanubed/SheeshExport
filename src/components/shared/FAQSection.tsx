import React from "react";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs: FAQItem[];
  layout?: "grid" | "editorial-list"; // Kept for backwards compatibility
  className?: string;
  showSchema?: boolean;
}

export function FAQSection({
  title = "Frequently Asked Questions",
  subtitle = "Common Inquiries",
  faqs,
  className = "",
  showSchema = true,
}: FAQSectionProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className={`py-16 lg:py-24 bg-background border-y border-border ${className}`} aria-labelledby="faq-heading">
      {showSchema && <JsonLd data={schema} />}
      
      <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-5xl">
        <header className="mb-12 md:mb-16 text-center">
          <span className="text-secondary font-bold tracking-[0.2em] uppercase text-[10px] mb-4 block">
            {subtitle}
          </span>
          <h2 id="faq-heading" className="font-heading text-4xl lg:text-5xl font-black tracking-tight text-foreground uppercase">
            {title}
          </h2>
        </header>

        <Accordion className="w-full">
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`} className="border-border">
              <AccordionTrigger className="font-heading text-xl lg:text-2xl font-bold text-foreground text-left py-6 hover:no-underline hover:text-primary transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground font-sans font-light leading-relaxed pb-8">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

