import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo/breadcrumb";
import { buildFAQSchema } from "@/lib/seo/faq";
import { JsonLd } from "@/components/seo/JsonLd";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Package, Box, Container } from "lucide-react";
import { FAQSection } from "@/components/shared/FAQSection";
import { SITE_CONFIG } from "@/config/site";

const SERVICES_FAQS = [
  {
    question: "What types of export services do you offer?",
    answer:
      "We offer three primary commercial services: Bulk Commodity Export (FCL shipments for manufacturers and importers), Private Label Manufacturing (OEM packaging for retail brands), and Mixed Container Consolidation (combining multiple products into one shipment for distributors).",
  },
  {
    question: "Do you handle export documentation and customs clearance?",
    answer:
      "Yes, our export operations team handles all mandatory origin documentation, including Commercial Invoices, Packing Lists, Certificates of Origin, Phytosanitary Certificates, and Lab Analysis reports to ensure smooth customs clearance at the destination port.",
  },
  {
    question: "Can I combine spices, pulses, and grains in a single shipment?",
    answer:
      "Absolutely. Our Mixed Container Consolidation service allows you to combine various categories like spices, oil seeds, grains, and pulses into a single Full Container Load (FCL). This reduces inventory risk and optimizes freight costs.",
  },
  {
    question: "What are your quality control procedures before shipping?",
    answer:
      "All shipments undergo mandatory pre-shipment inspections and stringent lab testing (often through SGS, Eurofins, or Spices Board of India) to ensure they meet the specific import regulations and quality standards of the destination country.",
  },
];

export const metadata: Metadata = buildMetadata({
  title: "Global Export Services | Sheesh Exports",
  description:
    "From bulk commodity shipments and private label manufacturing to mixed-container consolidation, we support every stage of international food procurement.",
  pathname: "/services",
});

export default function ServicesHubPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
  ]);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Global Export Services | Sheesh Exports",
    description:
      "From bulk commodity shipments and private label manufacturing to mixed-container consolidation, we support every stage of international food procurement.",
    provider: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
    },
    url: `${SITE_CONFIG.url}/services`,
  };

  const faqSchema = buildFAQSchema(SERVICES_FAQS);

  return (
    <main
      className="bg-background min-h-screen text-foreground font-sans selection:bg-primary selection:text-primary-foreground"
      role="main"
    >
      <JsonLd data={[breadcrumbSchema, serviceSchema, faqSchema]} />
      {/* SECTION 01: HERO */}
      <section
        aria-labelledby="services-hero-heading"
        className="relative min-h-[60vh] flex flex-col justify-center bg-primary text-primary-foreground"
      >
        <div className="absolute inset-0 opacity-100">
          <Image
            loading="lazy"
            src="/images/services/factory-eagle-eye.webp"
            alt="Global Supply Chain"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/60 " />

        <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-10 py-20">
          <span className="inline-block text-secondary font-semibold tracking-[0.2em] uppercase text-xs mb-8 border-b border-secondary/30 pb-2">
            Commercial Capabilities
          </span>
          <h1
            id="services-hero-heading"
            className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-[1.05] mb-8 max-w-4xl"
          >
            Export Services Designed For Global Food Buyers
          </h1>
          <p className="text-xl sm:text-2xl text-primary-foreground/80 max-w-2xl font-light leading-relaxed font-sans">
            From bulk commodity shipments and private label manufacturing to mixed-container
            consolidation, Sheesh Exports supports every stage of international food procurement.
          </p>
        </div>
      </section>

      {/* SECTION 02: SERVICE NAVIGATOR */}
      <section
        aria-labelledby="services-navigator-heading"
        className="py-16 lg:py-24 bg-background"
      >
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-[1200px]">
          <h2 id="services-navigator-heading" className="sr-only">
            Our Services
          </h2>
          <div className="space-y-16 lg:space-y-24">
            {/* Private Label */}
            <article className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
              <figure
                className="w-full lg:w-1/2 relative h-[350px] lg:h-[450px]"
                style={{ position: "relative" }}
              >
                <Image
                  loading="lazy"
                  src="/images/services/private-labelling.webp"
                  alt="Retail spice packaging"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700"
                />
                <figcaption className="sr-only">Private label spice packaging</figcaption>
              </figure>
              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <Package className="w-8 h-8 text-secondary" aria-hidden="true" />
                  <span className="text-xs uppercase tracking-widest font-semibold text-muted-foreground font-sans">
                    For Retail Brands
                  </span>
                </div>
                <h2 className="font-heading text-4xl sm:text-5xl font-medium text-primary mb-6">
                  Private Label Manufacturing
                </h2>
                <p className="text-xl text-muted-foreground font-sans font-light leading-relaxed font-sans mb-8">
                  Launch your own spice brand with custom packaging, regulatory labeling and
                  export-ready production. We handle everything from blending to final shelf-ready
                  pouches and jars.
                </p>
                <Link
                  href="/services/private-label"
                  className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 font-medium tracking-wide hover:bg-primary/90 transition-colors"
                >
                  Explore Private Label
                </Link>
              </div>
            </article>

            {/* Bulk Export */}
            <article className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-20 items-center">
              <figure
                className="w-full lg:w-1/2 relative h-[350px] lg:h-[450px]"
                style={{ position: "relative" }}
              >
                <Image
                  loading="lazy"
                  src="/images/services/bulk-exports.webp"
                  alt="Warehouse stacked with bags"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700"
                />
                <figcaption className="sr-only">Bulk export warehouse</figcaption>
              </figure>
              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <Box className="w-8 h-8 text-secondary" aria-hidden="true" />
                  <span className="text-xs uppercase tracking-widest font-semibold text-muted-foreground font-sans">
                    For Importers & Processors
                  </span>
                </div>
                <h2 className="font-heading text-4xl sm:text-5xl font-medium text-primary mb-6">
                  Bulk Export Shipments
                </h2>
                <p className="text-xl text-muted-foreground font-sans font-light leading-relaxed font-sans mb-8">
                  Large-volume shipments optimized for manufacturers, processors and wholesale
                  distributors. Packaged in 25kg/50kg PP or Jute bags with container desiccant
                  protection.
                </p>
                <Link
                  href="/services/bulk-export"
                  className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 font-medium tracking-wide hover:bg-primary/90 transition-colors"
                >
                  Explore Bulk Export
                </Link>
              </div>
            </article>

            {/* Mixed Container */}
            <article className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
              <figure
                className="w-full lg:w-1/2 relative h-[350px] lg:h-[450px]"
                style={{ position: "relative" }}
              >
                <Image
                  loading="lazy"
                  src="/images/services/mixed-shipment.webp"
                  alt="Container with multiple commodities"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700"
                />
                <figcaption className="sr-only">Mixed container shipment</figcaption>
              </figure>
              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <Container className="w-8 h-8 text-secondary" aria-hidden="true" />
                  <span className="text-xs uppercase tracking-widest font-semibold text-muted-foreground font-sans">
                    For Distributors & Supermarkets
                  </span>
                </div>
                <h2 className="font-heading text-4xl sm:text-5xl font-medium text-primary mb-6">
                  Mixed Container Consolidation
                </h2>
                <p className="text-xl text-muted-foreground font-sans font-light leading-relaxed font-sans mb-8">
                  Combine multiple products into a single FCL shipment. Reduce your inventory risk,
                  lower freight costs, and consolidate your supply chain with a single vendor.
                </p>
                <Link
                  href="/services/mixed-container"
                  className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 font-medium tracking-wide hover:bg-primary/90 transition-colors"
                >
                  Explore Mixed Containers
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* SECTION 03: WHY BUYERS USE OUR SERVICES */}
      <section
        aria-labelledby="why-partner-heading"
        className="py-16 lg:py-24 bg-background border-t border-border"
      >
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-[1200px]">
          <h2
            id="why-partner-heading"
            className="font-heading text-4xl sm:text-5xl font-medium text-primary mb-16 text-center"
          >
            Why Buyers Partner With Us
          </h2>
          <ul
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16"
            role="list"
            aria-label="Partnership benefits"
          >
            <li role="listitem" className="border-t border-secondary pt-4">
              <h3 className="font-heading text-2xl font-medium text-foreground mb-3">
                Procurement Flexibility
              </h3>
              <p className="text-muted-foreground font-sans font-light leading-relaxed font-sans">
                Scale from a consolidated mixed container up to continuous multi-container bulk
                contracts effortlessly.
              </p>
            </li>
            <li role="listitem" className="border-t border-secondary pt-4">
              <h3 className="font-heading text-2xl font-medium text-foreground mb-3">
                Reduced Supply Chain Complexity
              </h3>
              <p className="text-muted-foreground font-sans font-light leading-relaxed font-sans">
                Eliminate the need for multiple brokers and processors by sourcing, packing, and
                shipping directly from origin.
              </p>
            </li>
            <li role="listitem" className="border-t border-secondary pt-4">
              <h3 className="font-heading text-2xl font-medium text-foreground mb-3">
                Single Vendor Sourcing
              </h3>
              <p className="text-muted-foreground font-sans font-light leading-relaxed font-sans">
                Consolidate your purchasing power. We handle Spices, Oil Seeds, Pulses, and Grains
                under one commercial invoice.
              </p>
            </li>
            <li role="listitem" className="border-t border-secondary pt-4">
              <h3 className="font-heading text-2xl font-medium text-foreground mb-3">
                Export Documentation Support
              </h3>
              <p className="text-muted-foreground font-sans font-light leading-relaxed font-sans">
                We provide flawless Certificates of Origin, Phytosanitary Certificates, and Lab
                Analysis reports for seamless customs clearance.
              </p>
            </li>
            <li role="listitem" className="border-t border-secondary pt-4">
              <h3 className="font-heading text-2xl font-medium text-foreground mb-3">
                Global Logistics Expertise
              </h3>
              <p className="text-muted-foreground font-sans font-light leading-relaxed font-sans">
                Decades of experience routing shipments to highly regulated markets including the
                EU, USA, and Middle East.
              </p>
            </li>
            <li role="listitem" className="border-t border-secondary pt-4">
              <h3 className="font-heading text-2xl font-medium text-foreground mb-3">
                Stringent Quality Control
              </h3>
              <p className="text-muted-foreground font-sans font-light leading-relaxed font-sans">
                Mandatory pre-shipment inspections and lab testing through SGS or Eurofins for
                strict compliance with destination standards.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* SECTION 04: FAQ */}
      <FAQSection
        title="Export Services Queries"
        subtitle="Frequently Asked Questions"
        faqs={SERVICES_FAQS}
      />
    </main>
  );
}
