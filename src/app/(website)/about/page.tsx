import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Factory,
  Warehouse,
  ShieldCheck,
  MapPin,
  Globe,
  Award,
  FileText,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/home/AnimatedSection";
import { AboutHeroSwiper } from "@/components/about/AboutHeroSwiper";
import { FAQSection } from "@/components/shared/FAQSection";
import { CTASection } from "@/components/shared/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "About Sheesh Exports | Premium Indian Agro & Spices Exporter",
  description:
    "Learn about Sheesh Exports, our farm-level sourcing network across India, state-of-the-art cleaning and processing facilities, and global shipping capabilities.",
  pathname: "/about",
});

import { CATEGORIES_DATA } from "@/lib/data/categories";

const JOURNEY_STEPS = [
  { title: "Farm Sourcing", desc: "Direct from verified Indian growers." },
  { title: "Cleaning", desc: "Multi-stage mechanical cleaning." },
  { title: "Sorting", desc: "Optical and color sortex perfection." },
  { title: "Processing", desc: "Temperature-controlled grinding." },
  { title: "Testing", desc: "SGS / Spices Board accredited lab checks." },
  { title: "Packaging", desc: "Custom food-grade bulk packaging." },
  { title: "Container Loading", desc: "Supervised and fumigated dispatch." },
  { title: "Global Distribution", desc: "CIF / FOB delivery to 50+ nations." },
];

const BUYER_BENEFITS = [
  "Consistent Product Quality",
  "Flexible Packaging Solutions",
  "Private Label Support",
  "Dedicated Export Documentation",
  "Multi-Country Logistics Network",
  "Responsive Procurement Team",
];

const ABOUT_FAQS = [
  {
    question: "Is Sheesh Exports an APEDA registered Indian spices exporter?",
    answer:
      "Yes, Sheesh Exports is a fully APEDA-registered and Spices Board of India-certified exporter. We comply with all governmental regulations to legally export premium Indian spices, agro commodities, and food ingredients to over 50 countries worldwide.",
  },
  {
    question: "Do you supply bulk Indian spices directly from the farmers?",
    answer:
      "Absolutely. We are direct bulk spice suppliers in India, sourcing raw materials like Guntur Red Chilli, Erode Turmeric, and Unjha Cumin directly from verified farming networks. This allows us to maintain strict quality control and offer competitive wholesale pricing.",
  },
  {
    question: "Are your export facilities FSSAI and ISO certified?",
    answer:
      "Our processing and warehousing facilities are strictly FSSAI certified and hold ISO 22000 certifications for food safety management. We also maintain US FDA registration and provide Halal and Kosher certifications for specific markets like the Middle East and North America.",
  },
  {
    question: "What makes you different from other agro commodity exporters in India?",
    answer:
      "Unlike traditional traders, we operate a fully integrated supply chain. We handle the farm-level sourcing, mechanical cleaning, optical sortexing, lab testing, and custom packaging in-house. This ensures that every container leaving our facility meets precise international import standards without adulteration risks.",
  },
];

export default function AboutPage() {
  return (
    <main
      className="bg-background min-h-screen text-foreground font-sans selection:bg-primary selection:text-white"
      role="main"
    >
      {/* SECTION 01: HERO */}
      <section
        aria-labelledby="about-hero-heading"
        className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden"
      >
        <AboutHeroSwiper />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-8xl">
          <FadeIn className="max-w-4xl">
            <span className="inline-block text-secondary font-semibold tracking-[0.2em] uppercase text-sm mb-6 border-b border-secondary/30 pb-2">
              India's Trusted Export Partner
            </span>
            <h1
              id="about-hero-heading"
              className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-[1.05] mb-8 drop-shadow-lg"
            >
              For Spices, Agro Commodities & Food Ingredients
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl font-light leading-relaxed drop-shadow-md">
              Connecting global buyers with carefully sourced, processed and export-ready
              agricultural products from India's most renowned growing regions.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 02: WHO WE ARE */}
      <section aria-labelledby="who-we-are-heading" className="py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-8xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h2
                id="who-we-are-heading"
                className="font-heading text-4xl sm:text-5xl lg:text-6xl font-medium text-primary leading-[1.1] mb-8"
              >
                Built Around Supply Reliability, Quality Consistency & Global Trade Expertise
              </h2>
              <div className="space-y-6 text-lg text-foreground/80 font-light leading-relaxed">
                <p>
                  We are not merely traders. Sheesh Exports is a fully integrated supply chain
                  partner bridging the gap between India's vast agrarian landscape and international
                  markets. Our infrastructure is designed to give you absolute confidence in your
                  procurement.
                </p>
                <p>
                  By cultivating a direct Farmer Network, implementing rigorous Quality Control
                  protocols, and operating advanced Processing facilities, we eliminate
                  intermediaries and adulteration risks.
                </p>
                <p>
                  Our dedicated Export Logistics team ensures that every consignment is supported by
                  flawless documentation, meeting the stringent phytosanitary and customs
                  requirements of your destination port.
                </p>
              </div>
            </FadeIn>
            <FadeIn
              delay={0.2}
              className="relative h-150 w-full rounded-sm overflow-hidden shadow-2xl"
            >
              <figure className="relative w-full h-full" style={{ position: "relative" }}>
                <Image
                  src="/images/about/factory-processing.webp"
                  alt="Spice Processing Facility"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <figcaption className="sr-only">
                  Our state-of-the-art spice processing facility
                </figcaption>
              </figure>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 03: WHAT WE EXPORT */}
      <section
        aria-labelledby="what-we-export-heading"
        className="py-24 bg-white border-y border-primary/10"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-8xl">
          <FadeIn className="mb-16">
            <h2
              id="what-we-export-heading"
              className="font-heading text-4xl sm:text-5xl font-medium text-primary text-center"
            >
              What We Export
            </h2>
          </FadeIn>
          <StaggerContainer
            className="grid grid-cols-2 lg:grid-cols-3 gap-1"
            role="list"
            aria-label="Product categories"
          >
            {CATEGORIES_DATA.map((cat, idx) => (
              <StaggerItem
                key={idx}
                className="group relative aspect-square overflow-hidden bg-[#1C1C1C]"
                role="listitem"
              >
                <article className="h-full w-full">
                  <Link href={`/categories/${cat.slug}`} className="block w-full h-full">
                    <figure className="relative h-full w-full" style={{ position: "relative" }}>
                      <Image
                        src={cat.heroImage}
                        alt={cat.name}
                        fill
                        sizes="(max-width: 1024px) 50vw, 33vw"
                        className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out grayscale-20 group-hover:grayscale-0"
                      />
                      <figcaption className="sr-only">{cat.name} category</figcaption>
                    </figure>
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-8 left-8">
                      <h3 className="font-heading text-3xl text-white font-medium tracking-wide">
                        {cat.name}
                      </h3>
                      <div className="h-0.5 w-12 bg-secondary mt-4 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                    </div>
                  </Link>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* SECTION 04: FARM TO GLOBAL MARKET */}
      <section
        aria-labelledby="farm-to-market-heading"
        className="py-32 bg-primary text-white overflow-hidden relative"
      >
        <div className="absolute inset-0 opacity-10">
          <Image
            loading="lazy"
            src="/images/about/texture-map.webp"
            alt="Texture"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-8xl relative z-10">
          <FadeIn className="mb-20">
            <h2
              id="farm-to-market-heading"
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-medium text-[#F9F8F6] text-center"
            >
              Farm To Global Market
            </h2>
            <p className="text-center text-secondary tracking-[0.2em] uppercase text-sm mt-4">
              Our Signature Supply Chain
            </p>
          </FadeIn>

          <div className="relative mt-12 lg:mt-24">
            {/* Desktop horizontal line */}
            <div
              className="hidden lg:block absolute top-1.75 left-0 w-full h-0.5 bg-white/20"
              aria-hidden="true"
            />

            {/* Mobile/Tablet vertical line */}
            <div
              className="lg:hidden absolute top-1.75 bottom-1.75 left-1.75 w-0.5 bg-white/20"
              aria-hidden="true"
            />

            <StaggerContainer
              className="grid grid-cols-1 lg:grid-cols-8 gap-y-10 lg:gap-x-4 relative z-10"
              role="list"
              aria-label="Supply chain steps"
            >
              {JOURNEY_STEPS.map((step, idx) => (
                <StaggerItem key={idx} className="relative group" role="listitem">
                  <article className="flex flex-row lg:flex-col items-start lg:items-center text-left lg:text-center w-full">
                    {/* The Dot */}
                    <div
                      className="shrink-0 w-4 h-4 rounded-full bg-secondary shadow-[0_0_15px_rgba(197,160,89,0.5)] group-hover:scale-150 transition-transform duration-300 relative z-20 mt-1 lg:mt-0 mr-6 lg:mr-0 lg:mb-6"
                      aria-hidden="true"
                    />

                    {/* Content */}
                    <div className="flex-1 lg:w-full">
                      <h3 className="font-heading text-xl lg:text-sm xl:text-base font-medium text-[#F9F8F6] mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm lg:text-xs text-white/60 font-light leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* SECTION 05: INDIA ORIGINS */}
      <section aria-labelledby="india-origins-heading" className="py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-8xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn className="order-2 lg:order-1 relative h-150 w-full">
              {/* Using a clean map placeholder, user mentioned "Clean India Map. Not interactive." */}
              <figure className="relative w-full h-full" style={{ position: "relative" }}>
                <Image
                  src="/images/about/india-map-clean.webp"
                  alt="Sourcing Regions in India"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain object-left"
                  priority
                />
                <figcaption className="sr-only">Map of India showing sourcing regions</figcaption>
              </figure>
            </FadeIn>
            <FadeIn className="order-1 lg:order-2">
              <span className="text-secondary font-semibold tracking-[0.2em] uppercase text-sm mb-4 block">
                India Origins
              </span>
              <h2
                id="india-origins-heading"
                className="font-heading text-4xl sm:text-5xl font-medium text-primary mb-12"
              >
                Sourced from the Finest Terroirs
              </h2>

              <div className="space-y-8">
                <article className="border-l-2 border-secondary pl-6">
                  <h3 className="font-heading text-2xl font-medium text-foreground">Guntur</h3>
                  <p className="text-foreground/60 uppercase tracking-wider text-xs mt-1 mb-2">
                    Andhra Pradesh
                  </p>
                  <p className="text-foreground/80 font-light">
                    The global epicenter for premium S4 Sananam and Teja red chillies.
                  </p>
                </article>
                <article className="border-l-2 border-secondary pl-6">
                  <h3 className="font-heading text-2xl font-medium text-foreground">
                    Erode & Nizamabad
                  </h3>
                  <p className="text-foreground/60 uppercase tracking-wider text-xs mt-1 mb-2">
                    Tamil Nadu & Telangana
                  </p>
                  <p className="text-foreground/80 font-light">
                    Known for deep yellow, high-curcumin turmeric fingers.
                  </p>
                </article>
                <article className="border-l-2 border-secondary pl-6">
                  <h3 className="font-heading text-2xl font-medium text-foreground">Unjha</h3>
                  <p className="text-foreground/60 uppercase tracking-wider text-xs mt-1 mb-2">
                    Gujarat
                  </p>
                  <p className="text-foreground/80 font-light">
                    Asia's largest cumin and oil seed cultivation belt.
                  </p>
                </article>
                <article className="border-l-2 border-secondary pl-6">
                  <h3 className="font-heading text-2xl font-medium text-foreground">
                    Malabar Coast
                  </h3>
                  <p className="text-foreground/60 uppercase tracking-wider text-xs mt-1 mb-2">
                    Kerala
                  </p>
                  <p className="text-foreground/80 font-light">
                    The historic home of Tellicherry black pepper and cardamom.
                  </p>
                </article>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 06: GLOBAL REACH */}
      <section
        aria-labelledby="global-reach-heading"
        className="py-12 md:py-16 lg:py-24 bg-white text-center flex flex-col justify-center max-h-screen overflow-hidden"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-8xl h-full flex flex-col justify-center">
          <FadeIn className="flex flex-col items-center h-full">
            <h2
              id="global-reach-heading"
              className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-primary mb-6 md:mb-10"
            >
              Serving Importers Across 50+ Countries
            </h2>
            <figure
              className="relative w-full h-[35vh] sm:h-[40vh] md:h-[50vh] lg:h-[55vh] max-h-150 mb-8 md:mb-10 opacity-80 mix-blend-multiply"
              style={{ position: "relative" }}
            >
              <Image
                src="/world-map.webp"
                alt="Global Export Routes"
                fill
                sizes="(max-width: 768px) 100vw, 80vw"
                className="object-contain"
                priority
              />
              <figcaption className="sr-only">
                World map showing export routes to 50+ countries
              </figcaption>
            </figure>
            <nav
              className="flex flex-wrap justify-center items-center gap-x-3 sm:gap-x-6 md:gap-x-10 gap-y-3 text-foreground/80 font-heading text-sm sm:text-lg lg:text-xl tracking-wide"
              aria-label="Export regions"
            >
              <span>North America</span>
              <span aria-hidden="true" className="text-primary/40">
                •
              </span>
              <span>Europe</span>
              <span aria-hidden="true" className="text-primary/40">
                •
              </span>
              <span>Middle East</span>
              <span aria-hidden="true" className="hidden sm:inline text-primary/40">
                •
              </span>
              <span>Africa</span>
              <span aria-hidden="true" className="text-primary/40">
                •
              </span>
              <span>Asia Pacific</span>
            </nav>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 07: QUALITY & COMPLIANCE */}
      <section
        aria-labelledby="quality-compliance-heading"
        className="py-24 sm:py-32 bg-background"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-8xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <FadeIn>
              <h2
                id="quality-compliance-heading"
                className="font-heading text-4xl sm:text-5xl font-medium text-primary mb-6"
              >
                Quality Assurance
              </h2>
              <div className="w-12 h-0.5 bg-secondary mb-8" />
              <p className="text-lg text-foreground/80 font-light leading-relaxed mb-6">
                International buyers cannot risk non-compliance at destination ports. That is why
                our quality framework is uncompromising.
              </p>
              <p className="text-lg text-foreground/80 font-light leading-relaxed">
                Every consignment undergoes mandatory lab analysis for pesticide residues,
                aflatoxins, moisture content, and microbial loads. We partner with internationally
                recognized third-party surveyors like SGS and Eurofins to ensure your goods meet
                ASTA, ESA, and FDA standards before they ever leave Indian shores.
              </p>
            </FadeIn>
            <FadeIn
              delay={0.2}
              className="bg-white p-10 sm:p-14 shadow-sm border border-primary/10 rounded-sm"
            >
              <h3 className="font-heading text-2xl font-medium text-foreground mb-10 pb-4 border-b border-black/10">
                Official Certifications
              </h3>
              <ul
                className="grid grid-cols-2 gap-y-8 gap-x-4"
                role="list"
                aria-label="Certifications"
              >
                <li role="listitem" className="flex items-center gap-4">
                  <ShieldCheck className="w-6 h-6 text-primary" aria-hidden="true" />
                  <span className="font-medium tracking-wide">ISO 22000</span>
                </li>
                <li role="listitem" className="flex items-center gap-4">
                  <Award className="w-6 h-6 text-primary" aria-hidden="true" />
                  <span className="font-medium tracking-wide">APEDA</span>
                </li>
                <li role="listitem" className="flex items-center gap-4">
                  <FileText className="w-6 h-6 text-primary" aria-hidden="true" />
                  <span className="font-medium tracking-wide">US FDA</span>
                </li>
                <li role="listitem" className="flex items-center gap-4">
                  <ShieldCheck className="w-6 h-6 text-primary" aria-hidden="true" />
                  <span className="font-medium tracking-wide">FSSAI</span>
                </li>
                <li role="listitem" className="flex items-center gap-4">
                  <Award className="w-6 h-6 text-primary" aria-hidden="true" />
                  <span className="font-medium tracking-wide">Spices Board India</span>
                </li>
                <li role="listitem" className="flex items-center gap-4">
                  <ShieldCheck className="w-6 h-6 text-primary" aria-hidden="true" />
                  <span className="font-medium tracking-wide">Halal & Kosher</span>
                </li>
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 08: INFRASTRUCTURE */}
      <section
        aria-labelledby="infrastructure-heading"
        className="py-24 sm:py-32 bg-[#1C1C1C] text-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-8xl">
          <FadeIn className="mb-16">
            <h2
              id="infrastructure-heading"
              className="font-heading text-4xl sm:text-5xl font-medium text-[#F9F8F6]"
            >
              Industrial Infrastructure
            </h2>
            <p className="text-[#F9F8F6]/60 mt-4 max-w-2xl font-light text-lg">
              Operating state-of-the-art facilities equipped with optical sortex machines,
              temperature-controlled warehousing, and automated packaging lines to handle bulk
              industrial volumes.
            </p>
          </FadeIn>

          <StaggerContainer
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            role="list"
            aria-label="Infrastructure facilities"
          >
            <StaggerItem className="relative h-87.5 group overflow-hidden" role="listitem">
              <figure className="relative w-full h-full" style={{ position: "relative" }}>
                <Image
                  src="/images/about/infra-processing.webp"
                  alt="Processing Facilities"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-opacity duration-500"
                />
                <figcaption className="sr-only">Processing facilities</figcaption>
              </figure>
              <div className="absolute bottom-6 left-6">
                <h3 className="font-heading bg-primary/60 px-3  text-2xl font-medium">
                  Processing Facilities
                </h3>
              </div>
            </StaggerItem>
            <StaggerItem className="relative h-87.5 group overflow-hidden" role="listitem">
              <figure className="relative w-full h-full" style={{ position: "relative" }}>
                <Image
                  src="/images/about/infra-warehouse.webp"
                  alt="Warehousing"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-opacity duration-500"
                />
                <figcaption className="sr-only">Warehousing facilities</figcaption>
              </figure>
              <div className="absolute bottom-6 left-6">
                <h3 className="font-heading bg-primary/60 px-3  text-2xl font-medium">
                  Warehousing
                </h3>
              </div>
            </StaggerItem>
            <StaggerItem className="relative h-87.5 group overflow-hidden" role="listitem">
              <figure className="relative w-full h-full" style={{ position: "relative" }}>
                <Image
                  src="/images/about/infra-packaging.webp"
                  alt="Packaging Lines"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-opacity duration-500"
                />
                <figcaption className="sr-only">Packaging lines</figcaption>
              </figure>
              <div className="absolute bottom-6 left-6">
                <h3 className="font-heading bg-primary/60 px-3  text-2xl font-medium">
                  Packaging Lines
                </h3>
              </div>
            </StaggerItem>
            <StaggerItem className="relative h-87.5 group overflow-hidden" role="listitem">
              <figure className="relative w-full h-full" style={{ position: "relative" }}>
                <Image
                  src="/images/about/infra-testing.webp"
                  alt="Quality Testing"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-opacity duration-500"
                />
                <figcaption className="sr-only">Quality testing laboratory</figcaption>
              </figure>
              <div className="absolute bottom-6 left-6">
                <h3 className="font-heading bg-primary/60 px-3  text-2xl font-medium">
                  Quality Testing
                </h3>
              </div>
            </StaggerItem>
            <StaggerItem
              className="relative h-87.5 group overflow-hidden lg:col-span-2"
              role="listitem"
            >
              <figure className="relative w-full h-full" style={{ position: "relative" }}>
                <Image
                  src="/images/about/infra-loading.webp"
                  alt="Container Loading Operations"
                  fill
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover transition-opacity duration-500"
                />
                <figcaption className="sr-only">Container loading operations</figcaption>
              </figure>
              <div className="absolute bottom-6 left-6">
                <h3 className="font-heading bg-primary/60 px-3  text-2xl font-medium">
                  Container Loading Operations
                </h3>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* SECTION 09: WHY BUYERS CHOOSE SHEESH */}
      <section aria-labelledby="why-buyers-heading" className="py-24 sm:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <FadeIn>
            <h2
              id="why-buyers-heading"
              className="font-heading text-4xl sm:text-5xl font-medium text-primary mb-16"
            >
              Why Buyers Work With Us
            </h2>
            <ul className="space-y-6" role="list" aria-label="Buyer benefits">
              {BUYER_BENEFITS.map((benefit, idx) => (
                <li
                  key={idx}
                  className="font-heading text-2xl sm:text-3xl text-foreground border-b border-border pb-6 last:border-0 tracking-wide"
                >
                  {benefit}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 10: LEADERSHIP NOTE */}
      <section
        aria-labelledby="leadership-heading"
        className="py-24 bg-background border-y border-primary/10"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <FadeIn>
            <figure className="mx-auto w-12 h-12 mb-8 text-secondary" aria-hidden="true">
              <FileText className="w-full h-full" strokeWidth={1} />
            </figure>
            <h2
              id="leadership-heading"
              className="font-heading text-3xl sm:text-4xl font-medium text-primary mb-10"
            >
              A Message From Sheesh Exports
            </h2>
            <blockquote className="space-y-6 text-lg text-foreground/80 font-light leading-relaxed italic">
              <p>
                "In international commodity trade, the foundation of every successful transaction is
                trust. We understand that our buyers are managing complex supply chains across
                oceans, and they require a partner in India who acts as a dependable extension of
                their own procurement team."
              </p>
              <p>
                "Our philosophy is built entirely around transparency, uncompromising quality, and
                long-term global partnerships. When you import from Sheesh Exports, you are not just
                buying a product; you are securing peace of mind."
              </p>
            </blockquote>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 11: SEO FAQ */}
      <FAQSection
        title="Corporate & Export FAQs"
        subtitle="Common Inquiries"
        faqs={ABOUT_FAQS}
        className="bg-white"
      />

      {/* SECTION 12: FINAL CTA */}
      <CTASection />
    </main>
  );
}
