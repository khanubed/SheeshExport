import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo/breadcrumb";

import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_CONFIG } from "@/config/site";
import Image from "next/image";
import Link from "next/link";
import { Anchor, ShieldAlert, Box, Database, TrendingDown } from "lucide-react";
import { FAQSection } from "@/components/shared/FAQSection";

const BULK_EXPORT_FAQS = [
  {
    question: "What is the minimum order quantity (MOQ) for bulk exports?",
    answer:
      "Our standard MOQ for bulk exports is one 20ft Full Container Load (FCL). However, we can also accommodate Less than Container Load (LCL) shipments or mixed container consolidation depending on your requirements.",
  },
  {
    question: "How do you protect bulk shipments from moisture damage during ocean transit?",
    answer:
      "We use high-capacity calcium chloride container desiccants, strategic desiccant poles, and kraft paper linings to absorb ambient moisture and prevent condensation (Container Rain) during 30+ day ocean voyages.",
  },
  {
    question: "Do you provide custom packaging options for bulk orders?",
    answer:
      "Yes, we offer 25kg and 50kg PP (Polypropylene) or Jute bags. We can also provide customized, food-grade bulk packaging based on your specific requirements.",
  },
  {
    question: "Which quality certifications do your bulk exports carry?",
    answer:
      "All our bulk shipments are accompanied by phytosanitary certificates, certificates of origin, and SGS/Spices Board accredited lab test reports to ensure full compliance with international import regulations.",
  },
  {
    question: "Which major ports do you ship from in India?",
    answer:
      "We primarily ship from Nhava Sheva (Mumbai), Mundra Port (Gujarat), Chennai Port, and Krishnapatnam depending on the product origin to optimize transit times and freight costs.",
  },
];

export const metadata: Metadata = buildMetadata({
  title: "Bulk Spice Exporter India | Container & FCL Spice Shipments",
  description:
    "Container-scale wholesale shipments of spices and food ingredients for processors, importers and distributors. Optimized FCL export with desiccant protection.",
  pathname: "/services/bulk-export",
});

export default function BulkExportPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Bulk Spice Export", href: "/services/bulk-export" },
  ]);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Bulk Spice Exporter India | Container & FCL Spice Shipments",
    description:
      "Container-scale wholesale shipments of spices and food ingredients for processors, importers and distributors. Optimized FCL export with desiccant protection.",
    provider: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
    },
    url: `${SITE_CONFIG.url}/services/bulk-export`,
  };

  return (
    <main className="bg-background min-h-screen text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      <JsonLd data={[breadcrumbSchema, serviceSchema]} />
      {/* SECTION 01: HERO */}
      <section className="relative min-h-[70vh] flex flex-col justify-center text-primary-foreground">
        <div className="absolute inset-0 ">
          <Image src="/images/about/infra-warehouse.webp"
            alt="Warehouse stacked with bags of spices"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/50 " />

        <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-10 pt-24 pb-16">
          <span className="inline-block text-secondary font-semibold tracking-[0.2em] uppercase text-xs mb-8 border-b border-secondary/30 pb-2">
            Wholesale Spice Exporter India
          </span>
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-[1.05] mb-8 max-w-4xl">
            Export-Ready Bulk Commodities
            <br />
            For Global Supply Chains
          </h1>
          <p className="text-xl sm:text-2xl text-primary-foreground/80 max-w-3xl font-light leading-relaxed font-sans mb-12">
            Container-scale shipments of spices and food ingredients optimized for food
            manufacturers, processors, and wholesale distributors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#formats"
              className="inline-flex items-center justify-center bg-secondary text-secondary-foreground font-semibold px-8 py-4 tracking-wide hover:bg-secondary/90 transition-colors shadow-sm"
            >
              View Packaging Formats
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-primary-foreground/60 text-primary-foreground px-8 py-4 font-medium tracking-wide hover:bg-card/10 transition-colors"
            >
              Request Bulk Shipment Proposal
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 02: PACKAGING FORMATS */}
      <section id="formats" className="py-16 lg:py-24 bg-background border-b border-border">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-[1400px]">
          <h2 className="font-heading text-4xl sm:text-5xl font-medium text-primary mb-16 text-center">
            Industrial Packaging Solutions
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border border-border p-8 hover:border-secondary transition-colors bg-background">
              <Database className="w-10 h-10 text-secondary mb-6" />
              <h3 className="font-heading text-2xl font-medium text-foreground mb-3">
                25 KG PP Bags
              </h3>
              <p className="text-muted-foreground font-sans font-light text-sm mb-6">
                Polypropylene bags ideal for grounded spices and dense seeds. Offers high tensile
                strength and basic moisture resistance.
              </p>
              <span className="text-xs uppercase tracking-widest text-muted-foreground font-sans font-semibold">
                Standard Wholesale
              </span>
            </div>

            <div className="border border-border p-8 hover:border-secondary transition-colors bg-background">
              <Database className="w-10 h-10 text-secondary mb-6" />
              <h3 className="font-heading text-2xl font-medium text-foreground mb-3">
                50 KG Jute Bags
              </h3>
              <p className="text-muted-foreground font-sans font-light text-sm mb-6">
                Breathable traditional gunny bags used primarily for whole spices like Red Chilli
                and Turmeric to prevent sweating.
              </p>
              <span className="text-xs uppercase tracking-widest text-muted-foreground font-sans font-semibold">
                Whole Spices
              </span>
            </div>

            <div className="border border-border p-8 hover:border-secondary transition-colors bg-background">
              <Database className="w-10 h-10 text-secondary mb-6" />
              <h3 className="font-heading text-2xl font-medium text-foreground mb-3">
                Multiwall Kraft Bags
              </h3>
              <p className="text-muted-foreground font-sans font-light text-sm mb-6">
                Food-grade multiwall paper bags with inner PE liners. Essential for high-value
                powders and hydroscopic products.
              </p>
              <span className="text-xs uppercase tracking-widest text-muted-foreground font-sans font-semibold">
                Premium Extracts
              </span>
            </div>

            <div className="border border-border p-8 hover:border-secondary transition-colors bg-background">
              <Database className="w-10 h-10 text-secondary mb-6" />
              <h3 className="font-heading text-2xl font-medium text-foreground mb-3">
                Jumbo Bags (FIBC)
              </h3>
              <p className="text-muted-foreground font-sans font-light text-sm mb-6">
                1 Tonne Flexible Intermediate Bulk Containers for massive industrial processors
                requiring forklift unloading.
              </p>
              <span className="text-xs uppercase tracking-widest text-muted-foreground font-sans font-semibold">
                Industrial Processors
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03: CONTAINER OPTIMIZATION */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-[1200px]">
          <h2 className="font-heading text-4xl sm:text-5xl font-medium text-primary mb-16 text-center">
            Container Loading Optimization
          </h2>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="bg-card border border-border p-10 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Box className="w-32 h-32 text-foreground" />
              </div>
              <h3 className="font-heading text-3xl font-medium text-foreground mb-4 relative z-10">
                20FT Container (TEU)
              </h3>
              <ul className="space-y-4 text-muted-foreground font-sans font-light relative z-10">
                <li className="flex justify-between border-b border-border pb-2">
                  <span>Payload Capacity</span>{" "}
                  <span className="font-medium">Up to 14 - 18 MT</span>
                </li>
                <li className="flex justify-between border-b border-border pb-2">
                  <span>Ideal For</span>{" "}
                  <span className="font-medium">Heavy/Dense Cargo (Powders, Seeds)</span>
                </li>
                <li className="flex justify-between border-b border-border pb-2">
                  <span>Typical Use</span>{" "}
                  <span className="font-medium">Cumin, Coriander Seeds, Turmeric Powder</span>
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border p-10 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Box className="w-32 h-32 text-primary" />
              </div>
              <h3 className="font-heading text-3xl font-medium text-foreground mb-4 relative z-10">
                40FT HC Container (FEU)
              </h3>
              <ul className="space-y-4 text-muted-foreground font-sans font-light relative z-10">
                <li className="flex justify-between border-b border-border pb-2">
                  <span>Payload Capacity</span>{" "}
                  <span className="font-medium">Up to 26 - 28 MT</span>
                </li>
                <li className="flex justify-between border-b border-border pb-2">
                  <span>Ideal For</span> <span className="font-medium">Voluminous Cargo</span>
                </li>
                <li className="flex justify-between border-b border-border pb-2">
                  <span>Typical Use</span>{" "}
                  <span className="font-medium">Whole Red Chillies, Jute Bags</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 04: DESICCANT PROTECTION (SEO BLOCK) */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground border-y border-primary-foreground/10">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-[1200px]">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-4xl sm:text-5xl font-medium mb-8">
                Cargo Preservation & Desiccant Protection
              </h2>
              <p className="text-xl text-primary-foreground/80 font-light leading-relaxed font-sans mb-8">
                Ocean transit exposes bulk agricultural commodities to extreme temperature
                fluctuations, causing "Container Rain" and threatening cargo integrity.
              </p>

              <ul className="space-y-6">
                <li className="flex items-start">
                  <ShieldAlert className="w-6 h-6 text-secondary mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-heading text-2xl mb-1 text-primary-foreground">
                      Moisture Protection
                    </h4>
                    <p className="text-primary-foreground/70 font-light text-sm leading-relaxed">
                      We install high-capacity calcium chloride container desiccants to absorb
                      ambient moisture and maintain relative humidity below the critical dew point.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <TrendingDown className="w-6 h-6 text-secondary mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-heading text-2xl mb-1 text-primary-foreground">
                      Preventing Container Condensation
                    </h4>
                    <p className="text-primary-foreground/70 font-light text-sm leading-relaxed">
                      By strategically placing desiccant poles and applying kraft paper linings, we
                      eliminate the risk of aflatoxin development and mold during 30+ day ocean
                      voyages.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="relative h-[400px] lg:h-[500px] bg-card/5 border border-primary-foreground/10 p-8 flex flex-col items-center justify-center text-center">
              <div className="w-24 h-24 rounded-full border border-secondary flex items-center justify-center mb-6">
                <ShieldAlert className="w-10 h-10 text-secondary" />
              </div>
              <h4 className="font-heading text-3xl font-medium text-primary-foreground mb-4">
                Zero Moisture Damage Guarantee
              </h4>
              <p className="text-primary-foreground/60 font-light px-8">
                Our FCL shipments are engineered to withstand the most aggressive maritime climates
                from India to the USA and Northern Europe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 05: LOGISTICS NETWORK */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-[1200px]">
          <h2 className="font-heading text-4xl sm:text-5xl font-medium text-primary mb-12 text-center">
            Major Export Ports
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-8 border border-border bg-background hover:border-secondary transition-colors">
              <Anchor className="w-10 h-10 text-secondary mx-auto mb-4" />
              <h4 className="font-heading text-2xl font-medium text-foreground">Nhava Sheva</h4>
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-sans mt-2">
                Mumbai (West Coast)
              </p>
            </div>
            <div className="p-8 border border-border bg-background hover:border-secondary transition-colors">
              <Anchor className="w-10 h-10 text-secondary mx-auto mb-4" />
              <h4 className="font-heading text-2xl font-medium text-foreground">Mundra Port</h4>
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-sans mt-2">
                Gujarat (West Coast)
              </p>
            </div>
            <div className="p-8 border border-border bg-background hover:border-secondary transition-colors">
              <Anchor className="w-10 h-10 text-secondary mx-auto mb-4" />
              <h4 className="font-heading text-2xl font-medium text-foreground">Chennai Port</h4>
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-sans mt-2">
                Tamil Nadu (East Coast)
              </p>
            </div>
            <div className="p-8 border border-border bg-background hover:border-secondary transition-colors">
              <Anchor className="w-10 h-10 text-secondary mx-auto mb-4" />
              <h4 className="font-heading text-2xl font-medium text-foreground">Krishnapatnam</h4>
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-sans mt-2">
                Andhra (East Coast)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION FAQ */}
      <FAQSection
        title="Bulk Export Queries"
        subtitle="Frequently Asked Questions"
        faqs={BULK_EXPORT_FAQS}
      />

      {/* SECTION 06: CTA */}
      <section className="py-20 lg:py-24 bg-background border-t border-border">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-4xl text-center">
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-medium text-primary mb-8">
            Secure Your Supply Chain
          </h2>
          <p className="text-xl text-muted-foreground font-sans font-light mb-10 max-w-2xl mx-auto">
            Contact our export division to receive latest bulk pricing, freight estimates, and
            current container availability.
          </p>
          <div className="flex flex-col justify-center items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground px-10 py-5 font-medium tracking-wide w-full sm:w-auto hover:bg-primary/90 transition-colors"
            >
              Request Bulk Shipment Proposal
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
