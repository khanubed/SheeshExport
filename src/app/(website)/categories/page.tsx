import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo/metadata";
import { CATEGORIES_DATA } from "@/lib/data/categories";
import { FAQSection } from "@/components/shared/FAQSection";
import { CategoryCard } from "@/components/categories/CategoryCard";

export const metadata: Metadata = buildMetadata({
  title: "Product Categories | Premium Indian Exporter",
  description:
    "Browse our export-grade agricultural product categories including spices, grains, pulses, and oil seeds sourced directly from India.",
  pathname: "/categories",
});

export default function CategoriesIndexPage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20" role="main">
      {/* 1. HERO SECTION */}
      <section aria-labelledby="categories-hero-heading" className="pt-20 pb-12 lg:pt-24 lg:pb-16 border-b border-border bg-[#FAFAFA]">
        <div className="container mx-auto px-6 lg:px-12 max-w-8xl">
          <div className="max-w-4xl">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-6">
              Product Categories
            </span>
            <h1 id="categories-hero-heading" className="font-heading text-5xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-6">
              Export-Grade Agricultural Commodities
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground font-sans leading-relaxed max-w-2xl">
              Source premium spices, grains, pulses, and oil seeds directly from India's trusted
              farming regions. We provide complete traceability, strict compliance, and global
              logistics support.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CATEGORIES GRID */}
      <section aria-labelledby="categories-grid-heading" className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-8xl">
          <h2 id="categories-grid-heading" className="sr-only">Product Categories Grid</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" role="list" aria-label="Product categories">
            {CATEGORIES_DATA.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. SEO / SOURCING CONTENT */}
      <section aria-labelledby="why-india-heading" className="py-16 lg:py-24 bg-[#FAFAFA] border-y border-border">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Why Source From India?
          </span>
          <h2 id="why-india-heading" className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Global Agricultural Dominance & Unmatched Supply Capacity
          </h2>
          <div className="space-y-6 text-muted-foreground font-sans leading-relaxed">
            <p>
              India is the world's largest producer, consumer, and exporter of spices and various
              agricultural commodities. With 15 distinct agro-climatic zones, the Indian
              subcontinent yields crops with incredibly diverse flavor profiles, unparalleled
              volatile oil content, and exceptional nutritional values.
            </p>
            <p>
              By sourcing directly through <strong>Sheesh Exports</strong>, international buyers
              bypass traditional multi-tiered broker systems. We operate directly at the farm-gate
              level across major growing hubs like Guntur (Chilli), Unjha (Cumin/Coriander), and
              Punjab (Basmati). This direct integration guarantees competitive FOB pricing, strict
              traceability, and the ability to fulfill massive bulk orders year-round without supply
              chain disruptions.
            </p>
            <p>
              Whether you require whole raw commodities for industrial extraction, or
              machine-cleaned, private-labeled goods for retail distribution, our export-grade
              categories are meticulously processed to meet the stringent compliance standards of
              the US FDA, EU, and APEDA.
            </p>
          </div>
        </div>
      </section>

      {/* 4. FAQ SECTION */}
      <FAQSection 
        title="Procurement FAQs" 
        subtitle="Common Questions"
        faqs={[
          {
            question: "Can I mix multiple categories in a single container?",
            answer: "Yes, we specialize in Mixed Container Consolidation. You can combine whole spices, oil seeds, and pulses into a single 20FT or 40FT container to optimize your freight costs and inventory management.",
          },
          {
            question: "Are your commodities compliant with EU and US FDA regulations?",
            answer: "Absolutely. All our commodities undergo rigorous sorting and cleaning processes. We mandate SGS or Geo-Chem pre-shipment inspections (PSI) and provide necessary phytosanitary certificates, COAs, and aflatoxin reports to ensure full customs compliance.",
          },
          {
            question: "What is the Minimum Order Quantity (MOQ) across categories?",
            answer: "While MOQs vary slightly by crop weight and density, we generally require a minimum of 5-14 Metric Tons (MT) or a standard 1x20FT Full Container Load (FCL) for international wholesale pricing.",
          },
          {
            question: "Do you offer private labeling across all categories?",
            answer: "Yes. From 100g retail pouches for spices to 5kg bags for Basmati rice, we offer complete OEM private label manufacturing tailored to your brand's packaging specifications.",
          },
        ]}
      />

      {/* 5. CTA */}
      <section aria-labelledby="categories-cta-heading" className="bg-[#1A1A1A] text-white py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl text-center">
          <h2 id="categories-cta-heading" className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">
            Ready To Request A Quote?
          </h2>
          <p className="text-xl text-white/60 font-sans font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Our procurement team is ready to provide you with current FOB/CIF pricing and custom
            supply chain solutions.
          </p>
          <Link
            href="/request-quote"
            className="inline-block bg-white text-[#1A1A1A] font-bold uppercase tracking-widest px-12 py-6 text-sm hover:bg-white/90 transition-colors"
          >
            Open Procurement Portal
          </Link>
        </div>
      </section>
    </main>
  );
}
