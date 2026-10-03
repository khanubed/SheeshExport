import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo/breadcrumb";
import { buildFAQSchema } from "@/lib/seo/faq";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_CONFIG } from "@/config/site";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Container,
  Box,
  FileText,
  CheckCircle2,
  TrendingDown,
  Factory,
  Landmark,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { FAQSection } from "@/components/shared/FAQSection";

const MIXED_CONTAINER_FAQS = [
  {
    question: "What is Mixed Container Consolidation?",
    answer:
      "Mixed container consolidation allows international buyers to source multiple different commodities (like spices, pulses, and oil seeds) and combine them into a single 20ft or 40ft export container. This is ideal for distributors looking to offer a wide variety of products without committing to massive bulk volumes of a single item.",
  },
  {
    question: "How does consolidation reduce my inventory risk?",
    answer:
      "Instead of ordering 20 metric tons of a single spice, you can order 5 tons of cumin, 5 tons of turmeric, and 10 tons of pulses in the same container. This diversifies your inventory, improves cash flow, and minimizes the risk of overstocking a single product.",
  },
  {
    question: "Is there a minimum volume required for each product in a mixed container?",
    answer:
      "Yes, we typically require a minimum volume of 1 to 2 Metric Tons per product category to ensure efficient packing and compliance with export documentation requirements. Contact our operations team for exact product-specific limits.",
  },
  {
    question: "How do you handle export documentation for a multi-commodity shipment?",
    answer:
      "Our operations team issues a consolidated Commercial Invoice and Packing List. We also ensure that all necessary product-specific Phytosanitary Certificates and Certificates of Origin are accurately prepared for the entire container to guarantee seamless customs clearance.",
  },
];

export const metadata: Metadata = buildMetadata({
  title: "Mixed Container Spice Export Consolidation India",
  description:
    "Consolidate multiple spices a  nd agricultural commodities into a single export container. Reduce inventory risk and optimize freight costs.",
  pathname: "/services/mixed-container",
});

export default function MixedContainerPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Mixed Container Consolidation", href: "/services/mixed-container" },
  ]);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Mixed Container Spice Export Consolidation India",
    description:
      "Consolidate multiple spices and agricultural commodities into a single export container. Reduce inventory risk and optimize freight costs.",
    provider: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
    },
    url: `${SITE_CONFIG.url}/services/mixed-container`,
  };

  const faqSchema = buildFAQSchema(MIXED_CONTAINER_FAQS);

  return (
    <main className="bg-background min-h-screen text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      <JsonLd data={[breadcrumbSchema, serviceSchema, faqSchema]} />
      {/* SECTION 01: HERO */}
      <section className="relative min-h-[70vh] flex flex-col justify-center bg-primary text-primary-foreground">
        <div className="absolute inset-0 opacity-40 mix-blend-luminosity">
          <Image
            loading="lazy"
            src="/images/about/factory-processing.webp"
            alt="Mixed container consolidation"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B2F26] via-[#0B2F26]/80 to-transparent" />

        <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-10 pt-24 pb-16">
          <span className="inline-block text-secondary font-semibold tracking-[0.2em] uppercase text-xs mb-8 border-b border-secondary/30 pb-2">
            Supply Chain Consolidation
          </span>
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-[1.05] mb-8 max-w-4xl">
            Multiple Products.
            <br />
            One Shipment.
            <br />
            One Supplier.
          </h1>
          <p className="text-xl sm:text-2xl text-primary-foreground/80 max-w-3xl font-light leading-relaxed font-sans mb-12">
            Reduce inventory risk and optimize freight costs by consolidating multiple commodities
            into a single FCL export container directly from India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#visualizer"
              className="inline-flex items-center justify-center bg-secondary text-primary px-8 py-4 font-medium tracking-wide hover:bg-secondary/90 transition-colors"
            >
              See Container Visualizer
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-primary-foreground/30 text-primary-foreground px-8 py-4 font-medium tracking-wide hover:bg-card/5 transition-colors"
            >
              Plan My Mixed Shipment
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 02: PROBLEM VS SOLUTION */}
      <section className="py-16 lg:py-24 bg-background border-b border-border">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-[1200px]">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="bg-muted text-primary-foreground p-10 lg:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl" />
              <h3 className="font-heading text-3xl font-medium mb-8 text-red-400">
                The Procurement Problem
              </h3>
              <p className="text-primary-foreground/80 font-light mb-8">
                You need a diverse range of spices, but you don't need a full container of just one
                product.
              </p>
              <div className="bg-card/5 border border-primary-foreground/10 p-6 mb-8">
                <span className="block text-primary-foreground/50 uppercase tracking-widest text-xs mb-4">
                  You want:
                </span>
                <ul className="space-y-2 font-medium">
                  <li>3 MT Red Chilli</li>
                  <li>2 MT Turmeric</li>
                  <li>4 MT Cumin</li>
                  <li>5 MT Coriander</li>
                </ul>
              </div>
              <p className="text-red-400 font-light">
                Traditional suppliers require 4 separate orders, 4 separate LCL shipments, and 4
                sets of customs documents.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-4xl sm:text-5xl font-medium text-primary mb-8">
                The Sheesh Solution
              </h3>
              <p className="text-xl text-muted-foreground font-sans font-light leading-relaxed font-sans mb-10">
                We handle the sourcing, processing, and warehousing of all commodities internally.
                We then build a highly optimized container load plan, allowing you to import your
                exact product mix in a single, cost-effective FCL shipment.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center text-lg font-medium text-primary">
                  <CheckCircle2 className="w-6 h-6 text-secondary mr-4" /> 1 Order
                </li>
                <li className="flex items-center text-lg font-medium text-primary">
                  <CheckCircle2 className="w-6 h-6 text-secondary mr-4" /> 1 FCL Container
                </li>
                <li className="flex items-center text-lg font-medium text-primary">
                  <CheckCircle2 className="w-6 h-6 text-secondary mr-4" /> 1 Set of Documents
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03: CONTAINER VISUALIZER */}
      <section id="visualizer" className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-[1200px] text-center">
          <span className="inline-block text-secondary font-semibold tracking-[0.2em] uppercase text-xs mb-6">
            Container Optimization
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-medium mb-16">
            The Consolidated 40FT HC
          </h2>

          {/* Visualizer Graphic */}
          <div className="max-w-4xl mx-auto border-2 border-primary-foreground/20 rounded p-2 lg:p-4 bg-card/5 relative shadow-2xl">
            <div className="absolute -top-4 left-4 bg-secondary text-primary px-4 py-1 text-xs font-bold uppercase tracking-wider">
              Container Cutaway
            </div>
            <div className="flex flex-col sm:flex-row h-[300px] lg:h-[400px] gap-2">
              <div className="w-full sm:w-[30%] bg-[#FF4500]/20 border border-[#FF4500]/50 flex items-center justify-center relative group">
                <span className="font-heading text-2xl lg:text-3xl font-medium text-primary-foreground/90 transform -rotate-90 sm:rotate-0">
                  Red Chilli
                </span>
                <div className="absolute inset-0 bg-[#FF4500]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="w-full sm:w-[25%] bg-[#FFD700]/20 border border-[#FFD700]/50 flex items-center justify-center relative group">
                <span className="font-heading text-2xl lg:text-3xl font-medium text-primary-foreground/90 transform -rotate-90 sm:rotate-0">
                  Turmeric
                </span>
                <div className="absolute inset-0 bg-[#FFD700]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="w-full sm:w-[25%] bg-[#8B4513]/20 border border-[#8B4513]/50 flex items-center justify-center relative group">
                <span className="font-heading text-2xl lg:text-3xl font-medium text-primary-foreground/90 transform -rotate-90 sm:rotate-0">
                  Cumin
                </span>
                <div className="absolute inset-0 bg-[#8B4513]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="w-full sm:w-[20%] bg-muted/40 border border-primary-foreground/30 flex items-center justify-center relative group">
                <span className="font-heading text-2xl lg:text-3xl font-medium text-primary-foreground/90 transform -rotate-90 sm:rotate-0 text-center">
                  Black
                  <br />
                  Pepper
                </span>
                <div className="absolute inset-0 bg-card/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
            <div className="mt-4 flex justify-between text-primary-foreground/50 text-xs uppercase tracking-widest font-semibold px-2">
              <span>Doors</span>
              <span>Nose</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 04: BENEFITS (EDITORIAL BLOCKS) */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-[1200px]">
          <h2 className="font-heading text-4xl sm:text-5xl font-medium text-primary mb-16 text-center">
            Strategic Advantages
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="border-t border-secondary pt-6">
              <TrendingDown className="w-8 h-8 text-secondary mb-4" />
              <h3 className="font-heading text-2xl font-medium text-foreground mb-3">
                Lower Inventory Risk
              </h3>
              <p className="text-muted-foreground font-sans font-light leading-relaxed font-sans">
                Don't tie up capital in 20MT of a slow-moving product. Order only the tonnage you
                need for current demand.
              </p>
            </div>
            <div className="border-t border-secondary pt-6">
              <Container className="w-8 h-8 text-secondary mb-4" />
              <h3 className="font-heading text-2xl font-medium text-foreground mb-3">
                Lower Freight Cost
              </h3>
              <p className="text-muted-foreground font-sans font-light leading-relaxed font-sans">
                Avoid expensive LCL (Less than Container Load) rates. Shipping one FCL dramatically
                reduces your per-ton landed cost.
              </p>
            </div>
            <div className="border-t border-secondary pt-6">
              <FileText className="w-8 h-8 text-secondary mb-4" />
              <h3 className="font-heading text-2xl font-medium text-foreground mb-3">
                Single Documentation
              </h3>
              <p className="text-muted-foreground font-sans font-light leading-relaxed font-sans">
                One Commercial Invoice, one Bill of Lading, one Phytosanitary certificate covering
                all products, saving customs clearance time.
              </p>
            </div>
            <div className="border-t border-secondary pt-6">
              <Factory className="w-8 h-8 text-secondary mb-4" />
              <h3 className="font-heading text-2xl font-medium text-foreground mb-3">
                Simplified Procurement
              </h3>
              <p className="text-muted-foreground font-sans font-light leading-relaxed font-sans">
                Deal with a single dedicated account manager rather than communicating with four
                different suppliers across India.
              </p>
            </div>
            <div className="border-t border-secondary pt-6">
              <ShieldCheck className="w-8 h-8 text-secondary mb-4" />
              <h3 className="font-heading text-2xl font-medium text-foreground mb-3">
                Consistent Quality
              </h3>
              <p className="text-muted-foreground font-sans font-light leading-relaxed font-sans">
                All consolidated products adhere to the exact same stringent SGS/Eurofins laboratory
                testing protocols.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 05: SUITABLE BUYERS */}
      <section className="py-16 lg:py-24 bg-background border-y border-border">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-[1200px]">
          <h2 className="font-heading text-4xl sm:text-5xl font-medium text-primary mb-12 text-center">
            Who Uses This Service?
          </h2>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <span className="px-6 py-4 bg-card border border-border font-heading text-xl font-medium text-foreground shadow-sm">
              Regional Distributors
            </span>
            <span className="px-6 py-4 bg-card border border-border font-heading text-xl font-medium text-foreground shadow-sm">
              Supermarket Chains
            </span>
            <span className="px-6 py-4 bg-card border border-border font-heading text-xl font-medium text-foreground shadow-sm">
              Food Manufacturers
            </span>
            <span className="px-6 py-4 bg-card border border-border font-heading text-xl font-medium text-foreground shadow-sm">
              Private Label Brands
            </span>
            <span className="px-6 py-4 bg-card border border-border font-heading text-xl font-medium text-foreground shadow-sm">
              Boutique Spice Blenders
            </span>
          </div>
        </div>
      </section>

      {/* SECTION 06: CASE EXAMPLE */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-[1000px]">
          <div className="bg-primary text-primary-foreground p-10 lg:p-16 border-t-4 border-secondary">
            <span className="inline-block text-secondary font-semibold tracking-[0.2em] uppercase text-xs mb-6">
              Case Study
            </span>
            <h3 className="font-heading text-4xl font-medium mb-10">
              UAE Distributor Consolidation
            </h3>

            <div className="grid sm:grid-cols-2 gap-12">
              <div>
                <h4 className="text-primary-foreground/50 uppercase tracking-widest text-sm font-semibold mb-4">
                  Client Profile
                </h4>
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="w-5 h-5 text-secondary" />
                  <span className="font-medium text-lg">Dubai, United Arab Emirates</span>
                </div>
                <div className="flex items-center gap-3 mb-6">
                  <Landmark className="w-5 h-5 text-secondary" />
                  <span className="font-medium text-lg">Wholesale Food Distributor</span>
                </div>
                <p className="text-primary-foreground/80 font-light">
                  Client needed to supply regional restaurants with an array of whole spices without
                  overstocking warehouse space.
                </p>
              </div>

              <div>
                <h4 className="text-primary-foreground/50 uppercase tracking-widest text-sm font-semibold mb-4">
                  The Container Load (20FT FCL)
                </h4>
                <ul className="space-y-3 font-medium text-lg">
                  <li className="flex justify-between border-b border-primary-foreground/10 pb-2">
                    <span>Turmeric Fingers</span> <span className="text-secondary">4 MT</span>
                  </li>
                  <li className="flex justify-between border-b border-primary-foreground/10 pb-2">
                    <span>Red Chilli (S4)</span> <span className="text-secondary">3 MT</span>
                  </li>
                  <li className="flex justify-between border-b border-primary-foreground/10 pb-2">
                    <span>Cumin Seeds</span> <span className="text-secondary">2 MT</span>
                  </li>
                  <li className="flex justify-between border-b border-primary-foreground/10 pb-2">
                    <span>Coriander Seeds</span> <span className="text-secondary">5 MT</span>
                  </li>
                  <li className="flex justify-between pt-2">
                    <span>Total Payload</span>{" "}
                    <span className="text-primary-foreground">14 MT</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 07: WORKFLOW */}
      <section className="py-16 lg:py-24 bg-background border-t border-border">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-[1400px]">
          <h2 className="font-heading text-4xl sm:text-5xl font-medium text-primary mb-16 text-center">
            Mixed Container Workflow
          </h2>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-foreground">
            <div className="flex flex-col items-center text-center max-w-[150px]">
              <div className="w-16 h-16 rounded-full border border-secondary flex items-center justify-center font-heading text-2xl font-medium mb-4 bg-card">
                1
              </div>
              <h4 className="font-medium">Product Selection</h4>
            </div>
            <ArrowRight className="hidden lg:block w-6 h-6 text-foreground/20" />

            <div className="flex flex-col items-center text-center max-w-[150px]">
              <div className="w-16 h-16 rounded-full border border-secondary flex items-center justify-center font-heading text-2xl font-medium mb-4 bg-card">
                2
              </div>
              <h4 className="font-medium">Quotation</h4>
            </div>
            <ArrowRight className="hidden lg:block w-6 h-6 text-foreground/20" />

            <div className="flex flex-col items-center text-center max-w-[150px]">
              <div className="w-16 h-16 rounded-full border border-secondary flex items-center justify-center font-heading text-2xl font-medium mb-4 bg-card">
                3
              </div>
              <h4 className="font-medium">Consolidation Planning</h4>
            </div>
            <ArrowRight className="hidden lg:block w-6 h-6 text-foreground/20" />

            <div className="flex flex-col items-center text-center max-w-[150px]">
              <div className="w-16 h-16 rounded-full border border-secondary flex items-center justify-center font-heading text-2xl font-medium mb-4 bg-card">
                4
              </div>
              <h4 className="font-medium">Packaging</h4>
            </div>
            <ArrowRight className="hidden lg:block w-6 h-6 text-foreground/20" />

            <div className="flex flex-col items-center text-center max-w-[150px]">
              <div className="w-16 h-16 rounded-full border border-secondary flex items-center justify-center font-heading text-2xl font-medium mb-4 bg-card">
                5
              </div>
              <h4 className="font-medium">Container Loading</h4>
            </div>
            <ArrowRight className="hidden lg:block w-6 h-6 text-foreground/20" />

            <div className="flex flex-col items-center text-center max-w-[150px]">
              <div className="w-16 h-16 rounded-full border bg-primary text-primary-foreground flex items-center justify-center font-heading text-2xl font-medium mb-4">
                6
              </div>
              <h4 className="font-medium text-primary">Export</h4>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION FAQ */}
      <FAQSection
        title="Consolidation Queries"
        subtitle="Frequently Asked Questions"
        faqs={MIXED_CONTAINER_FAQS}
      />

      {/* SECTION 08: CTA */}
      <section className="py-20 lg:py-24 bg-background border-t border-border">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-4xl text-center">
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-medium text-primary mb-8">
            Plan Your Consolidated Shipment
          </h2>
          <p className="text-xl text-muted-foreground font-sans font-light mb-10 max-w-2xl mx-auto">
            Contact our export operations team to discuss your required product mix, tonnage, and
            destination port.
          </p>
          <div className="flex flex-col justify-center items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground px-10 py-5 font-medium tracking-wide w-full sm:w-auto hover:bg-primary/90 transition-colors"
            >
              Request Mixed Container Proposal
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
