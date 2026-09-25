import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Package, Box, Container } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Global Export Services | Sheesh Exports",
  description:
    "From bulk commodity shipments and private label manufacturing to mixed-container consolidation, we support every stage of international food procurement.",
  pathname: "/services",
});

export default function ServicesHubPage() {
  return (
    <main className="bg-background min-h-screen text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      
      {/* SECTION 01: HERO */}
      <section className="relative min-h-[60vh] flex flex-col justify-center bg-primary text-primary-foreground">
        <div className="absolute inset-0 opacity-20 mix-blend-luminosity">
          <Image src="/images/about/factory-processing.jpg" alt="Global Supply Chain" fill className="object-cover" priority />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2F26] via-[#0B2F26]/90 to-[#0B2F26]/60" />
        
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-10 py-20">
          <span className="inline-block text-secondary font-semibold tracking-[0.2em] uppercase text-xs mb-8 border-b border-secondary/30 pb-2">
            Commercial Capabilities
          </span>
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-[1.05] mb-8 max-w-4xl">
            Export Services Designed For Global Food Buyers
          </h1>
          <p className="text-xl sm:text-2xl text-primary-foreground/80 max-w-2xl font-light leading-relaxed font-sans">
            From bulk commodity shipments and private label manufacturing to mixed-container consolidation, Sheesh Exports supports every stage of international food procurement.
          </p>
        </div>
      </section>

      {/* SECTION 02: SERVICE NAVIGATOR */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-[1200px]">
          <div className="space-y-16 lg:space-y-24">
            
            {/* Private Label */}
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
              <div className="w-full lg:w-1/2 relative h-[350px] lg:h-[450px]">
                <Image src="/images/about/vision.jpg" alt="Retail spice packaging" fill className="object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700" />
              </div>
              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <Package className="w-8 h-8 text-secondary" />
                  <span className="text-xs uppercase tracking-widest font-semibold text-muted-foreground font-sans">For Retail Brands</span>
                </div>
                <h2 className="font-heading text-4xl sm:text-5xl font-medium text-primary mb-6">
                  Private Label Manufacturing
                </h2>
                <p className="text-xl text-muted-foreground font-sans font-light leading-relaxed font-sans mb-8">
                  Launch your own spice brand with custom packaging, regulatory labeling and export-ready production. We handle everything from blending to final shelf-ready pouches and jars.
                </p>
                <Link href="/services/private-label" className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 font-medium tracking-wide hover:bg-primary/90 transition-colors">
                  Explore Private Label
                </Link>
              </div>
            </div>

            {/* Bulk Export */}
            <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-20 items-center">
              <div className="w-full lg:w-1/2 relative h-[350px] lg:h-[450px]">
                <Image src="/images/about/infra-warehouse.jpg" alt="Warehouse stacked with bags" fill className="object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700" />
              </div>
              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <Box className="w-8 h-8 text-secondary" />
                  <span className="text-xs uppercase tracking-widest font-semibold text-muted-foreground font-sans">For Importers & Processors</span>
                </div>
                <h2 className="font-heading text-4xl sm:text-5xl font-medium text-primary mb-6">
                  Bulk Export Shipments
                </h2>
                <p className="text-xl text-muted-foreground font-sans font-light leading-relaxed font-sans mb-8">
                  Large-volume shipments optimized for manufacturers, processors and wholesale distributors. Packaged in 25kg/50kg PP or Jute bags with container desiccant protection.
                </p>
                <Link href="/services/bulk-export" className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 font-medium tracking-wide hover:bg-primary/90 transition-colors">
                  Explore Bulk Export
                </Link>
              </div>
            </div>

            {/* Mixed Container */}
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
              <div className="w-full lg:w-1/2 relative h-[350px] lg:h-[450px]">
                <Image src="/images/about/factory-processing.jpg" alt="Container with multiple commodities" fill className="object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700" />
              </div>
              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <Container className="w-8 h-8 text-secondary" />
                  <span className="text-xs uppercase tracking-widest font-semibold text-muted-foreground font-sans">For Distributors & Supermarkets</span>
                </div>
                <h2 className="font-heading text-4xl sm:text-5xl font-medium text-primary mb-6">
                  Mixed Container Consolidation
                </h2>
                <p className="text-xl text-muted-foreground font-sans font-light leading-relaxed font-sans mb-8">
                  Combine multiple products into a single FCL shipment. Reduce your inventory risk, lower freight costs, and consolidate your supply chain with a single vendor.
                </p>
                <Link href="/services/mixed-container" className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 font-medium tracking-wide hover:bg-primary/90 transition-colors">
                  Explore Mixed Containers
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 03: WHY BUYERS USE OUR SERVICES */}
      <section className="py-16 lg:py-24 bg-background border-t border-border">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-[1200px]">
          <h2 className="font-heading text-4xl sm:text-5xl font-medium text-primary mb-16 text-center">
            Why Buyers Partner With Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            <div className="border-t border-secondary pt-4">
              <h3 className="font-heading text-2xl font-medium text-foreground mb-3">Procurement Flexibility</h3>
              <p className="text-muted-foreground font-sans font-light leading-relaxed font-sans">Scale from a consolidated mixed container up to continuous multi-container bulk contracts effortlessly.</p>
            </div>
            <div className="border-t border-secondary pt-4">
              <h3 className="font-heading text-2xl font-medium text-foreground mb-3">Reduced Supply Chain Complexity</h3>
              <p className="text-muted-foreground font-sans font-light leading-relaxed font-sans">Eliminate the need for multiple brokers and processors by sourcing, packing, and shipping directly from origin.</p>
            </div>
            <div className="border-t border-secondary pt-4">
              <h3 className="font-heading text-2xl font-medium text-foreground mb-3">Single Vendor Sourcing</h3>
              <p className="text-muted-foreground font-sans font-light leading-relaxed font-sans">Consolidate your purchasing power. We handle Spices, Oil Seeds, Pulses, and Grains under one commercial invoice.</p>
            </div>
            <div className="border-t border-secondary pt-4">
              <h3 className="font-heading text-2xl font-medium text-foreground mb-3">Export Documentation Support</h3>
              <p className="text-muted-foreground font-sans font-light leading-relaxed font-sans">We provide flawless Certificates of Origin, Phytosanitary Certificates, and Lab Analysis reports for seamless customs clearance.</p>
            </div>
            <div className="border-t border-secondary pt-4">
              <h3 className="font-heading text-2xl font-medium text-foreground mb-3">Global Logistics Expertise</h3>
              <p className="text-muted-foreground font-sans font-light leading-relaxed font-sans">Decades of experience routing shipments to highly regulated markets including the EU, USA, and Middle East.</p>
            </div>
          </div>
        </div>
      </section>
      
    </main>
  );
}
