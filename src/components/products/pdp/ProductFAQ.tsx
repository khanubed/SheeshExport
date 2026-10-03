import React from "react";
import { FAQ } from "@/lib/data/types";
import { FAQSection } from "@/components/shared/FAQSection";

export function ProductFAQ({ faqs }: { faqs: FAQ[] }) {
  if (!faqs || faqs.length === 0) return null;
  return (
    <FAQSection 
      title="Product Queries" 
      subtitle="Frequently Asked Questions" 
      faqs={faqs} 
      className="!py-16" // override extreme padding for PDP
    />
  );
}