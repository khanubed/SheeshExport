"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Globe,
  Ship,
  BarChart3,
  Clock,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
import { COUNTRY_MARKETS } from "@/lib/data/international";
import { JsonLd } from "@/components/seo/JsonLd";
import { FAQSection } from "@/components/shared/FAQSection";
import { ContactSection } from "@/components/contact/ContactSection";

// Pre-defined images based on our generated assets and existing folder
const IMAGES = {
  worldMap: "/images/international/port-image.png",
  routeVis: "/images/international/intl_route_vis_1790683449601.webp",
  commandCenter: "/images/international/intl_command_center_1790683463614.webp",
  portNy: "/images/international/intl_port_ny_1790683487543.webp",
  portHamburg: "/images/international/intl_port_hamburg_1790683504127.webp",
  portDubai: "/images/international/intl_port_dubai_1790683516299.webp",
  portSingapore: "/images/international/intl_port_singapore_1790683576116.webp",
  warehouse: "/images/about/infra-warehouse.webp",
  farm: "/images/about/infra-sourcing.webp",
  processing: "/images/about/infra-processing.webp",
  lab: "/images/about/infra-testing.webp",
  loading: "/images/about/infra-loading.webp",
  packaging: "/images/about/infra-packaging.webp",
  retail: "/images/industries/retail-private-label.webp",
  foodMfg: "/images/industries/food-manufacturing.webp",
};

const INTERNATIONAL_FAQS = [
  {
    question: "Which countries do you export to?",
    answer:
      "We export globally, with heavy volume focused on North America, the European Union, the Middle East (GCC), and the Asia-Pacific region. We maintain strategic maritime corridors to all major global ports.",
  },
  {
    question: "Do you handle destination customs clearance?",
    answer:
      "We manage all origin documentation, freight forwarding, and port clearance (FOB/CIF). Destination customs clearance is typically handled by the buyer's clearing agent, but we provide all necessary compliance documentation (Phytosanitary, Certificate of Origin, Lab Reports) to ensure a seamless process.",
  },
  {
    question: "What are your minimum order quantities (MOQ) for international shipments?",
    answer:
      "Our standard MOQ is one 20ft container (FCL), but we also offer mixed-container consolidation (LCL) for specialized or high-value commodities. Reach out to discuss specific volumetric requirements.",
  },
  {
    question: "How do you ensure compliance with strict FDA or EU regulations?",
    answer:
      "All our export facilities are ISO and HACCP certified. For heavily regulated markets like the EU and USA, we mandate rigorous pre-shipment lab testing through independent agencies like SGS or Eurofins for pesticide MRLs, aflatoxins, and microbial counts.",
  },
  {
    question: "Do you offer private label packaging for international retail?",
    answer:
      "Yes. We offer comprehensive private labeling services. We can pack spices, seeds, and pulses in retail-ready standup pouches, glass jars, or PET containers, completely compliant with destination country labeling laws.",
  },
];

export default function InternationalMarketsHub() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Global Export Markets Intelligence",
    description: "International trade intelligence and sourcing hub for agricultural commodities.",
    url: "https://sheeshexports.com/international",
  };

  return (
    <main
      className="min-h-screen bg-background text-foreground selection:bg-primary/30"
      role="main"
    >
      <JsonLd data={schemaData} />

      {/* SECTION 1: GLOBAL TRADE HERO */}
      <section
        aria-labelledby="intl-hero-heading"
        className="relative min-h-[100vh] flex items-center overflow-hidden border-b border-border"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.worldMap}
            alt="Global Maritime Trade Network"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10 h-full flex flex-col justify-center pt-20">
          {/* Typography */}
          <div className="max-w-5xl">
            <h1
              id="intl-hero-heading"
              className="font-heading text-6xl sm:text-7xl lg:text-[90px] font-black tracking-tighter leading-[0.85] mb-8 uppercase text-white"
            >
              India to the World
            </h1>
            <p className="text-lg sm:text-xl text-white/90 font-sans font-light leading-relaxed max-w-2xl mb-10 border-l-4 border-primary pl-6">
              A premium trade intelligence platform for global buyers sourcing export-grade
              agricultural commodities from India.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: PLATFORM INTRODUCTION */}
      <section
        aria-labelledby="platform-intro-heading"
        className="py-24 lg:py-32 bg-background border-b border-border"
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-5">
              <h2
                id="platform-intro-heading"
                className="font-heading text-4xl lg:text-6xl font-black uppercase leading-[1.1] mb-8"
              >
                Bridging Indian Origin With Global Markets
              </h2>
              <div className="w-24 h-2 bg-primary mb-8" />
            </div>
            <div className="lg:col-span-7 pt-2 lg:pt-4">
              <p className="text-2xl lg:text-4xl font-light text-foreground leading-snug mb-12">
                We don't just export commodities. We architect compliant, reliable, and scalable
                supply chains connecting the world's most demanding importers directly to India's
                finest agricultural origins.
              </p>
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <h3 className="font-bold uppercase tracking-widest text-sm mb-4 border-b border-border pb-2">
                    Uncompromising Compliance
                  </h3>
                  <p className="text-muted-foreground font-light leading-relaxed text-lg">
                    Navigating international trade requires precision. We ensure every shipment
                    meets the exact Phytosanitary, FDA, and EU MRL regulations mandated by your
                    destination port.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold uppercase tracking-widest text-sm mb-4 border-b border-border pb-2">
                    Strategic Sourcing
                  </h3>
                  <p className="text-muted-foreground font-light leading-relaxed text-lg">
                    By bypassing unnecessary intermediaries, we provide direct access to
                    ISO-certified processing facilities—ensuring competitive pricing and absolute
                    traceability from farm to container.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: MARKET DIRECTORY (Magazine Style) */}
      <section
        aria-labelledby="market-directory-heading"
        className="py-16 bg-background border-b border-border"
      >
        <div className="container mx-auto px-6 lg:px-12">
          <h2
            id="market-directory-heading"
            className="font-heading text-5xl lg:text-7xl font-bold mb-24 max-w-3xl"
          >
            Global Import Markets Directory
          </h2>

          <div className="flex flex-col gap-16">
            {/* Market 1: USA */}
            <article className="grid lg:grid-cols-2 gap-16 items-center group">
              <figure className="relative aspect-[4/3] w-full overflow-hidden border border-border">
                <Image
                  src={IMAGES.portNy}
                  alt="USA Market"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <figcaption className="sr-only">New York port</figcaption>
              </figure>
              <div className="flex flex-col justify-center">
                <span className="text-sm font-bold tracking-widest uppercase text-muted-foreground mb-4 block">
                  North America
                </span>
                <h3 className="font-heading text-6xl font-black mb-6">United States</h3>
                <div
                  className="flex flex-wrap gap-3 mb-8"
                  role="list"
                  aria-label="USA market focus areas"
                >
                  <span
                    role="listitem"
                    className="px-4 py-1.5 bg-muted text-xs font-bold uppercase tracking-widest"
                  >
                    Food Ingredients
                  </span>
                  <span
                    role="listitem"
                    className="px-4 py-1.5 bg-muted text-xs font-bold uppercase tracking-widest"
                  >
                    Private Label
                  </span>
                  <span
                    role="listitem"
                    className="px-4 py-1.5 bg-muted text-xs font-bold uppercase tracking-widest"
                  >
                    FDA Compliance
                  </span>
                </div>
                <p className="text-xl text-muted-foreground font-light mb-10 max-w-md leading-relaxed">
                  High demand for standardized bulk ingredients and retail-ready private label
                  packaging. Strict adherence to FSMA and Prior Notice required.
                </p>
                <Link
                  href="/international/usa"
                  className="inline-flex items-center text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors"
                >
                  View Market Intelligence <ArrowRight className="ml-3 w-5 h-5" />
                </Link>
              </div>
            </article>

            {/* Market 2: Germany */}
            <article className="grid lg:grid-cols-2 gap-16 items-center group">
              <div className="flex flex-col justify-center lg:order-1 order-2">
                <span className="text-sm font-bold tracking-widest uppercase text-muted-foreground mb-4 block">
                  European Union
                </span>
                <h3 className="font-heading text-6xl font-black mb-6">Germany</h3>
                <div
                  className="flex flex-wrap gap-3 mb-8"
                  role="list"
                  aria-label="Germany market focus areas"
                >
                  <span
                    role="listitem"
                    className="px-4 py-1.5 bg-muted text-xs font-bold uppercase tracking-widest"
                  >
                    Organic Sourcing
                  </span>
                  <span
                    role="listitem"
                    className="px-4 py-1.5 bg-muted text-xs font-bold uppercase tracking-widest"
                  >
                    Pesticide MRLs
                  </span>
                  <span
                    role="listitem"
                    className="px-4 py-1.5 bg-muted text-xs font-bold uppercase tracking-widest"
                  >
                    Food Manufacturing
                  </span>
                </div>
                <p className="text-xl text-muted-foreground font-light mb-10 max-w-md leading-relaxed">
                  Europe's most stringent compliance market. Focus on heavily lab-tested commodities
                  ensuring zero pesticide residues and organic integrity.
                </p>
                <Link
                  href="/international/germany"
                  className="inline-flex items-center text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors"
                >
                  View Market Intelligence <ArrowRight className="ml-3 w-5 h-5" />
                </Link>
              </div>
              <figure className="relative aspect-[4/3] w-full overflow-hidden border border-border lg:order-2 order-1">
                <Image
                  src={IMAGES.portHamburg}
                  alt="Germany Market"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <figcaption className="sr-only">Hamburg port</figcaption>
              </figure>
            </article>

            {/* Market 3: UAE */}
            <article className="grid lg:grid-cols-2 gap-16 items-center group">
              <figure className="relative aspect-[4/3] w-full overflow-hidden border border-border">
                <Image
                  src={IMAGES.portDubai}
                  alt="UAE Market"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <figcaption className="sr-only">Dubai port</figcaption>
              </figure>
              <div className="flex flex-col justify-center">
                <span className="text-sm font-bold tracking-widest uppercase text-muted-foreground mb-4 block">
                  Middle East & GCC
                </span>
                <h3 className="font-heading text-6xl font-black mb-6">UAE & Dubai</h3>
                <div
                  className="flex flex-wrap gap-3 mb-8"
                  role="list"
                  aria-label="UAE market focus areas"
                >
                  <span
                    role="listitem"
                    className="px-4 py-1.5 bg-muted text-xs font-bold uppercase tracking-widest"
                  >
                    Bulk Commodities
                  </span>
                  <span
                    role="listitem"
                    className="px-4 py-1.5 bg-muted text-xs font-bold uppercase tracking-widest"
                  >
                    HoReCa
                  </span>
                  <span
                    role="listitem"
                    className="px-4 py-1.5 bg-muted text-xs font-bold uppercase tracking-widest"
                  >
                    Re-Export Hub
                  </span>
                </div>
                <p className="text-xl text-muted-foreground font-light mb-10 max-w-md leading-relaxed">
                  The central transit hub for the GCC. High volume procurement of rice, pulses, and
                  whole spices driven by hospitality and re-export demands.
                </p>
                <Link
                  href="/international/uae"
                  className="inline-flex items-center text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors"
                >
                  View Market Intelligence <ArrowRight className="ml-3 w-5 h-5" />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* SECTION 4: MARKET INTELLIGENCE REPORTS (Newspaper Style) */}
      <section
        aria-labelledby="trade-reports-heading"
        className="py-24 bg-muted/10 border-b border-border"
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between border-b-4 border-foreground pb-6 mb-8">
            <h2
              id="trade-reports-heading"
              className="font-heading text-4xl lg:text-5xl font-black uppercase"
            >
              Trade Reports
            </h2>
            <span className="text-sm font-bold tracking-widest uppercase text-muted-foreground hidden sm:block">
              Q3 Market Analysis
            </span>
          </div>

          <div
            className="grid md:grid-cols-3 gap-2 divide-y md:divide-y-0 md:divide-x divide-border"
            role="list"
            aria-label="Trade reports"
          >
            {/* Report 1 */}
            <article role="listitem" className="md:pr-8 pt-8 md:pt-0">
              <figure className="aspect-video relative mb-6">
                <Image
                  loading="lazy"
                  src={IMAGES.retail}
                  alt="Retail"
                  fill
                  className="object-cover"
                />
                <figcaption className="sr-only">Retail spice packaging</figcaption>
              </figure>
              <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
                United States
              </span>
              <h3 className="font-heading text-3xl font-bold mb-4 leading-tight hover:underline cursor-pointer">
                The Surge in Private Label Spice Demand
              </h3>
              <p className="text-muted-foreground font-light leading-relaxed mb-6 line-clamp-4">
                As major US retailers expand their internal brands, the demand for origin-packed,
                FDA-compliant private label spices from India has grown by 34% YoY.
              </p>
            </article>

            {/* Report 2 */}
            <article role="listitem" className="md:px-8 pt-8 md:pt-0">
              <figure className="aspect-video relative mb-6">
                <Image
                  loading="lazy"
                  src={IMAGES.lab}
                  alt="Lab Testing"
                  fill
                  className="object-cover"
                />
                <figcaption className="sr-only">Laboratory testing</figcaption>
              </figure>
              <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
                European Union
              </span>
              <h3 className="font-heading text-3xl font-bold mb-4 leading-tight hover:underline cursor-pointer">
                Navigating Strict EU Pesticide MRLs
              </h3>
              <p className="text-muted-foreground font-light leading-relaxed mb-6 line-clamp-4">
                European border rejections are rising due to ethylene oxide and pesticide traces.
                How specialized sourcing and Eurofins testing secures your supply chain.
              </p>
            </article>

            {/* Report 3 */}
            <article role="listitem" className="md:pl-8 pt-8 md:pt-0">
              <figure className="aspect-video relative mb-6">
                <Image
                  loading="lazy"
                  src={IMAGES.portSingapore}
                  alt="Singapore"
                  fill
                  className="object-cover"
                />
                <figcaption className="sr-only">Singapore port</figcaption>
              </figure>
              <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
                Asia Pacific
              </span>
              <h3 className="font-heading text-3xl font-bold mb-4 leading-tight hover:underline cursor-pointer">
                Singapore as the S.E.A Trading Hub
              </h3>
              <p className="text-muted-foreground font-light leading-relaxed mb-6 line-clamp-4">
                Logistics speed is driving procurement strategies in Southeast Asia, with Singapore
                importers utilizing rapid LCL shipments for specialized ingredients.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* SECTION 5: GLOBAL BUYER BEHAVIOUR */}
      <section
        aria-labelledby="buyer-behavior-heading"
        className="relative py-32 bg-black text-white overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.commandCenter}
            alt="Command Center"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        </div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <h2
            id="buyer-behavior-heading"
            className="font-heading text-5xl lg:text-7xl font-bold mb-20 text-center"
          >
            Global Buyer Behavior
          </h2>

          <div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            role="list"
            aria-label="Regional buyer behavior"
          >
            {/* Region 1 */}
            <article
              role="listitem"
              className="border border-white/20 bg-black/50 backdrop-blur-md p-8 hover:bg-white/5 transition-colors"
            >
              <h3 className="font-heading text-3xl font-bold mb-6 border-b border-white/20 pb-4">
                North America
              </h3>
              <ul className="space-y-6">
                <li>
                  <span className="block text-xs uppercase tracking-widest text-white/50 mb-1">
                    Packaging
                  </span>
                  Retail Private Label & 50lb Bags
                </li>
                <li>
                  <span className="block text-xs uppercase tracking-widest text-white/50 mb-1">
                    Compliance
                  </span>
                  FDA, FSMA, High Standards
                </li>
                <li>
                  <span className="block text-xs uppercase tracking-widest text-white/50 mb-1">
                    MOQ
                  </span>
                  FCL (Full Container) Annual
                </li>
                <li>
                  <span className="block text-xs uppercase tracking-widest text-white/50 mb-1">
                    Buyers
                  </span>
                  Supermarkets, Mega-Distributors
                </li>
              </ul>
            </article>
            {/* Region 2 */}
            <article
              role="listitem"
              className="border border-white/20 bg-black/50 backdrop-blur-md p-8 hover:bg-white/5 transition-colors"
            >
              <h3 className="font-heading text-3xl font-bold mb-6 border-b border-white/20 pb-4">
                Europe
              </h3>
              <ul className="space-y-6">
                <li>
                  <span className="block text-xs uppercase tracking-widest text-white/50 mb-1">
                    Packaging
                  </span>
                  25kg Recyclable Multi-wall
                </li>
                <li>
                  <span className="block text-xs uppercase tracking-widest text-white/50 mb-1">
                    Compliance
                  </span>
                  Extreme MRLs, Organic Euro-leaf
                </li>
                <li>
                  <span className="block text-xs uppercase tracking-widest text-white/50 mb-1">
                    MOQ
                  </span>
                  High Frequency LCL/FCL
                </li>
                <li>
                  <span className="block text-xs uppercase tracking-widest text-white/50 mb-1">
                    Buyers
                  </span>
                  Food Manufacturers, Organic Brands
                </li>
              </ul>
            </article>
            {/* Region 3 */}
            <article
              role="listitem"
              className="border border-white/20 bg-black/50 backdrop-blur-md p-8 hover:bg-white/5 transition-colors"
            >
              <h3 className="font-heading text-3xl font-bold mb-6 border-b border-white/20 pb-4">
                Middle East
              </h3>
              <ul className="space-y-6">
                <li>
                  <span className="block text-xs uppercase tracking-widest text-white/50 mb-1">
                    Packaging
                  </span>
                  Bulk PP Bags, 50kg Jute
                </li>
                <li>
                  <span className="block text-xs uppercase tracking-widest text-white/50 mb-1">
                    Compliance
                  </span>
                  Halal, Municipality Health Certs
                </li>
                <li>
                  <span className="block text-xs uppercase tracking-widest text-white/50 mb-1">
                    MOQ
                  </span>
                  High Volume FCL Spot Buying
                </li>
                <li>
                  <span className="block text-xs uppercase tracking-widest text-white/50 mb-1">
                    Buyers
                  </span>
                  Wholesalers, HoReCa Suppliers
                </li>
              </ul>
            </article>
            {/* Region 4 */}
            <article
              role="listitem"
              className="border border-white/20 bg-black/50 backdrop-blur-md p-8 hover:bg-white/5 transition-colors"
            >
              <h3 className="font-heading text-3xl font-bold mb-6 border-b border-white/20 pb-4">
                Asia Pacific
              </h3>
              <ul className="space-y-6">
                <li>
                  <span className="block text-xs uppercase tracking-widest text-white/50 mb-1">
                    Packaging
                  </span>
                  Industrial Totes, 25kg Bags
                </li>
                <li>
                  <span className="block text-xs uppercase tracking-widest text-white/50 mb-1">
                    Compliance
                  </span>
                  Standard Phyto & Origin Certs
                </li>
                <li>
                  <span className="block text-xs uppercase tracking-widest text-white/50 mb-1">
                    MOQ
                  </span>
                  Flexible Mixed Containers
                </li>
                <li>
                  <span className="block text-xs uppercase tracking-widest text-white/50 mb-1">
                    Buyers
                  </span>
                  Spice Blenders, Noodle Mfg
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* SECTION 7: COUNTRY SPOTLIGHT */}
      <section
        aria-labelledby="country-spotlight-heading"
        className="py-12 bg-background border-b border-border"
      >
        <div className="container mx-auto px-6 lg:px-12">
          <span className="text-sm font-bold tracking-widest uppercase text-muted-foreground mb-6 block">
            Market Spotlight of the Month
          </span>
          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            <figure className="lg:col-span-8 relative aspect-[16/10] bg-muted overflow-hidden">
              <Image
                loading="lazy"
                src={IMAGES.warehouse}
                alt="USA Warehouse"
                fill
                className="object-cover"
              />
              <figcaption className="sr-only">USA warehouse facility</figcaption>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="font-heading text-5xl lg:text-7xl font-bold mb-4">United States</h3>
                <p className="text-xl font-light max-w-2xl">
                  The rapid expansion of Private Label Spices in North America.
                </p>
              </div>
            </figure>

            <div className="lg:col-span-4 flex flex-col gap-8">
              <article className="flex-1 bg-muted/20 border border-border p-8 hover:bg-muted/30 transition-colors">
                <h4 className="font-heading text-2xl font-bold mb-4">Popular Imports</h4>
                <ul className="space-y-3 font-light text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-primary" aria-hidden="true" /> Stemless
                    Red Chilli (Teja)
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-primary" aria-hidden="true" />{" "}
                    High-Curcumin Turmeric
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-primary" aria-hidden="true" /> Cumin Seeds
                    (Premium)
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-primary" aria-hidden="true" /> Psyllium
                    Husk (99%)
                  </li>
                </ul>
              </article>
              <article className="flex-1 relative overflow-hidden group">
                <Image
                  src={IMAGES.portNy}
                  alt="NY Port"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Link
                    href="/international/usa"
                    className="text-primary-foreground font-bold uppercase tracking-widest text-sm flex items-center gap-2"
                  >
                    Read Report <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: GLOBAL GALLERY (Masonry) */}
      <section
        aria-labelledby="export-infra-heading"
        className="py-12 bg-muted/10 border-b border-border overflow-hidden"
      >
        <div className="container mx-auto px-6 lg:px-12 mb-16 text-center">
          <h2 id="export-infra-heading" className="font-heading text-5xl font-bold">
            The Export Infrastructure
          </h2>
        </div>

        {/* Simple CSS Grid masonry approximation */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4"
          role="list"
          aria-label="Export infrastructure images"
        >
          <div className="flex flex-col gap-4" role="listitem">
            <figure className="relative aspect-square">
              <Image loading="lazy" src={IMAGES.farm} alt="Farm" fill className="object-cover" />
              <figcaption className="sr-only">Farm sourcing</figcaption>
            </figure>
            <figure className="relative aspect-[3/4]">
              <Image
                loading="lazy"
                src={IMAGES.processing}
                alt="Processing"
                fill
                className="object-cover"
              />
              <figcaption className="sr-only">Processing facility</figcaption>
            </figure>
          </div>
          <div className="flex flex-col gap-4 pt-12" role="listitem">
            <figure className="relative aspect-[3/4]">
              <Image loading="lazy" src={IMAGES.lab} alt="Lab" fill className="object-cover" />
              <figcaption className="sr-only">Quality testing lab</figcaption>
            </figure>
            <figure className="relative aspect-square">
              <Image
                loading="lazy"
                src={IMAGES.loading}
                alt="Loading"
                fill
                className="object-cover"
              />
              <figcaption className="sr-only">Container loading</figcaption>
            </figure>
          </div>
          <div className="flex flex-col gap-4" role="listitem">
            <figure className="relative aspect-square">
              <Image
                loading="lazy"
                src={IMAGES.warehouse}
                alt="Warehouse"
                fill
                className="object-cover"
              />
              <figcaption className="sr-only">Warehouse storage</figcaption>
            </figure>
            <figure className="relative aspect-[4/3]">
              <Image
                loading="lazy"
                src={IMAGES.portHamburg}
                alt="Port"
                fill
                className="object-cover"
              />
              <figcaption className="sr-only">Port operations</figcaption>
            </figure>
          </div>
          <div className="flex flex-col gap-4 pt-8" role="listitem">
            <figure className="relative aspect-[3/4]">
              <Image
                loading="lazy"
                src={IMAGES.retail}
                alt="Retail"
                fill
                className="object-cover"
              />
              <figcaption className="sr-only">Retail packaging</figcaption>
            </figure>
            <figure className="relative aspect-square">
              <Image
                loading="lazy"
                src={IMAGES.foodMfg}
                alt="Manufacturing"
                fill
                className="object-cover"
              />
              <figcaption className="sr-only">Food manufacturing</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* SECTION 9: TRADE TIMELINE (Horizontal Journey) */}
      <section
        aria-labelledby="farm-to-port-heading"
        className="py-12 bg-background border-b border-border overflow-x-hidden"
      >
        <div className="container mx-auto px-6 lg:px-12 mb-20">
          <h2 id="farm-to-port-heading" className="font-heading text-5xl font-bold">
            Farm To Port Journey
          </h2>
        </div>

        <nav
          className="flex overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar pl-6 lg:pl-12"
          aria-label="Farm to port journey steps"
        >
          {/* Step 1 */}
          <article
            className="min-w-[85vw] md:min-w-[40vw] lg:min-w-[30vw] pr-8 snap-start"
            role="listitem"
          >
            <figure className="aspect-[4/3] relative mb-6">
              <Image
                loading="lazy"
                src={IMAGES.farm}
                alt="Farm Procurement"
                fill
                className="object-cover"
              />
              <figcaption className="sr-only">Farm procurement</figcaption>
              <div className="absolute top-4 left-4 bg-background text-foreground font-heading text-2xl font-bold w-12 h-12 flex items-center justify-center">
                1
              </div>
            </figure>
            <h4 className="font-bold text-xl mb-2">Farm Procurement</h4>
            <p className="text-muted-foreground font-light">
              Direct sourcing from agricultural yards ensuring peak harvest freshness.
            </p>
          </article>
          {/* Step 2 */}
          <article
            className="min-w-[85vw] md:min-w-[40vw] lg:min-w-[30vw] pr-8 snap-start"
            role="listitem"
          >
            <figure className="aspect-[4/3] relative mb-6">
              <Image
                src={IMAGES.processing}
                alt="Industrial Processing"
                fill
                className="object-cover"
              />
              <figcaption className="sr-only">Industrial processing</figcaption>
              <div className="absolute top-4 left-4 bg-background text-foreground font-heading text-2xl font-bold w-12 h-12 flex items-center justify-center">
                2
              </div>
            </figure>
            <h4 className="font-bold text-xl mb-2">Industrial Processing</h4>
            <p className="text-muted-foreground font-light">
              Automated sortex cleaning and destoning in ISO certified facilities.
            </p>
          </article>
          {/* Step 3 */}
          <article
            className="min-w-[85vw] md:min-w-[40vw] lg:min-w-[30vw] pr-8 snap-start"
            role="listitem"
          >
            <figure className="aspect-[4/3] relative mb-6">
              <Image
                loading="lazy"
                src={IMAGES.lab}
                alt="Lab Testing"
                fill
                className="object-cover"
              />
              <figcaption className="sr-only">Laboratory testing</figcaption>
              <div className="absolute top-4 left-4 bg-background text-foreground font-heading text-2xl font-bold w-12 h-12 flex items-center justify-center">
                3
              </div>
            </figure>
            <h4 className="font-bold text-xl mb-2">Lab Testing</h4>
            <p className="text-muted-foreground font-light">
              SGS/Eurofins pre-shipment analysis for pesticide MRLs and Aflatoxins.
            </p>
          </article>
          {/* Step 4 */}
          <article
            className="min-w-[85vw] md:min-w-[40vw] lg:min-w-[30vw] pr-8 snap-start"
            role="listitem"
          >
            <figure className="aspect-[4/3] relative mb-6">
              <Image
                loading="lazy"
                src={IMAGES.loading}
                alt="Container Loading"
                fill
                className="object-cover"
              />
              <figcaption className="sr-only">Container loading</figcaption>
              <div className="absolute top-4 left-4 bg-background text-foreground font-heading text-2xl font-bold w-12 h-12 flex items-center justify-center">
                4
              </div>
            </figure>
            <h4 className="font-bold text-xl mb-2">Container Loading</h4>
            <p className="text-muted-foreground font-light">
              Hygienic stuffing and fumigation of FCL/LCL cargo.
            </p>
          </article>
          {/* Step 5 */}
          <article
            className="min-w-[85vw] md:min-w-[40vw] lg:min-w-[30vw] pr-8 snap-start"
            role="listitem"
          >
            <figure className="aspect-[4/3] relative mb-6">
              <Image
                loading="lazy"
                src={IMAGES.portDubai}
                alt="Destination Port"
                fill
                className="object-cover"
              />
              <figcaption className="sr-only">Destination port</figcaption>
              <div className="absolute top-4 left-4 bg-background text-foreground font-heading text-2xl font-bold w-12 h-12 flex items-center justify-center">
                5
              </div>
            </figure>
            <h4 className="font-bold text-xl mb-2">Destination Port</h4>
            <p className="text-muted-foreground font-light">
              Customs clearance handoff with exact compliance documentation.
            </p>
          </article>
        </nav>
      </section>

      {/* SECTION 11: SEO FAQ */}
      <FAQSection
        title="Global Procurement FAQs"
        subtitle="Trade & Logistics"
        faqs={INTERNATIONAL_FAQS}
        layout="editorial-list"
        className="bg-background py-24 border-b border-border"
      />

      <ContactSection />
    </main>
  );
}
