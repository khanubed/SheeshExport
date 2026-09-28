import React from "react";
import { JsonLd } from "@/components/seo/JsonLd";
import { FadeIn, StaggerContainer, StaggerItem } from "./AnimatedSection";

const FAQS = [
  {
    question: "What agricultural commodities do you export?",
    answer: "We export a comprehensive range of Indian agricultural commodities including Whole Spices, Powdered Spices, Basmati & Non-Basmati Rice, Oil Seeds, Pulses, Grains & Millets, and Dry Fruits."
  },
  {
    question: "Do you supply products for Private Labeling?",
    answer: "Yes, we offer complete OEM and private label manufacturing services. We can supply our products in bulk or pack them in custom retail-ready pouches and boxes with your branding."
  },
  {
    question: "What are your minimum order quantities (MOQ)?",
    answer: "Our standard MOQ for most commodities is 1x20FT FCL (Full Container Load). However, we offer Mixed Container solutions allowing you to consolidate multiple products to meet the threshold."
  },
  {
    question: "Are your products compliant with EU and US FDA regulations?",
    answer: "Absolutely. We adhere strictly to international quality standards including ASTA, ESA, and EU maximum residue limits. Our facilities are ISO 22000, HACCP, and FDA compliant, and we provide third-party assay certificates with shipments."
  },
  {
    question: "Do you offer CIF or FOB pricing?",
    answer: "We offer flexible INCOTERMS including FOB, CIF, and CFR, working closely with top-tier ocean freight forwarders to ensure the most competitive shipping rates to your destination port."
  }
];

export function HomeFAQ() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-24 bg-[#FAFAFA]">
      <JsonLd data={schema} />
      <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-6xl">
        <FadeIn className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-4 block">
            Frequently Asked Questions
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground">
            Sourcing & Export Queries
          </h2>
        </FadeIn>
        
        <StaggerContainer className="grid md:grid-cols-2 gap-x-12 gap-y-12">
          {FAQS.map((faq, idx) => (
            <StaggerItem key={idx} className="border-t border-border pt-6">
              <h3 className="font-heading text-xl font-bold text-foreground mb-4 pr-4">
                {faq.question}
              </h3>
              <p className="text-muted-foreground font-sans leading-relaxed text-[15px]">
                {faq.answer}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
