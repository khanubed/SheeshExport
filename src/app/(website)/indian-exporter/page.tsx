import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildFAQSchema } from "@/lib/seo/faq";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_CONFIG } from "@/config/site";
import { Button, buttonVariants } from "@/components/ui/button";
import { CATEGORIES_DATA } from "@/lib/data/categories";
import { FAQSection } from "@/components/shared/FAQSection";

export const metadata = buildMetadata({
  title: "Indian Exporter | Premium Agricultural & Spice Supplier | Sheesh Exports",
  description:
    "Sheesh Exports is a leading Indian exporter connecting international buyers with export-grade agricultural commodities, bulk spices, and food ingredients.",
  pathname: "/indian-exporter",
});

const EXPORT_JOURNEY = [
  {
    stage: "Farm Sourcing",
    desc: "Origin-level procurement from selected Indian agricultural hubs.",
  },
  { stage: "Quality Evaluation", desc: "Rigorous raw material inspection and grading protocols." },
  {
    stage: "Processing",
    desc: "Advanced cleaning, sorting, and processing in certified facilities.",
  },
  {
    stage: "Laboratory Testing",
    desc: "Chemical, physical, and microbiological parameter validation.",
  },
  { stage: "Packaging", desc: "Market-specific industrial and retail packaging solutions." },
  { stage: "Container Loading", desc: "Supervised container stuffing with moisture protection." },
  { stage: "Customs Clearance", desc: "Seamless export documentation and regulatory compliance." },
  { stage: "Destination Delivery", desc: "Global shipping coordination to your chosen port." },
];

const CAPABILITIES = [
  {
    title: "Farm-Level Procurement",
    desc: "Direct partnerships with farming communities ensure traceability, stable pricing, and consistent quality without middleman interference.",
  },
  {
    title: "Quality Control Programs",
    desc: "Multi-stage inspection from farm to container. We maintain in-house testing protocols alongside third-party SGS/GeoChem certifications.",
  },
  {
    title: "Export Documentation",
    desc: "Flawless execution of Bills of Lading, Phytosanitary Certificates, Certificates of Origin, and market-specific customs paperwork.",
  },
  {
    title: "Private Label Manufacturing",
    desc: "End-to-end contract manufacturing for retail brands. We handle the processing, custom formulation, and retail-ready packaging.",
  },
  {
    title: "Bulk Packaging",
    desc: "Industrial packing solutions including 25kg/50kg PP bags, jute bags, paper bags, and jumbo FIBC bags optimized for sea freight.",
  },
  {
    title: "Mixed Container Programs",
    desc: "LCL and FCL consolidation allowing buyers to source multiple commodity types (e.g., spices, pulses, grains) within a single shipment.",
  },
  {
    title: "Global Logistics Support",
    desc: "Strategic partnerships with major shipping lines (Maersk, MSC, Hapag-Lloyd) ensuring competitive freight rates and timely vessel space.",
  },
  {
    title: "Destination Market Compliance",
    desc: "Strict adherence to US FDA, European Union MRL standards, and Middle Eastern HALAL requirements for friction-free imports.",
  },
];

const CERTIFICATIONS = [
  {
    name: "APEDA",
    desc: "Agricultural and Processed Food Products Export Development Authority registration for global trade.",
    img: "/images/certifications/apeda-logo.png",
  },
  {
    name: "Spices Board",
    desc: "Registered under the Spices Board of India as a verified manufacturer and merchant exporter.",
    img: "/images/certifications/spices-board-logo.png",
  },
  {
    name: "FSSAI",
    desc: "Food Safety and Standards Authority of India central license for manufacturing.",
    img: "/images/certifications/fssai-logo.png",
  },
  {
    name: "ISO 22000:2018",
    desc: "International standard for food safety management systems across the supply chain.",
    img: "/images/certifications/iso-logo.png",
  },
  {
    name: "HACCP",
    desc: "Hazard Analysis Critical Control Point compliance for risk-free food processing.",
    img: "/images/certifications/haccp-logo.png",
  },
  {
    name: "US FDA",
    desc: "Registered facility under the United States Food and Drug Administration.",
    img: "/images/certifications/fda-logo.png",
  },
];

const MARKETS = [
  { name: "USA & Canada", import: "Organic Spices, Extracts, Pulses" },
  { name: "United Kingdom", import: "Curry Powders, Rice, Whole Spices" },
  { name: "European Union", import: "MRL Compliant Spices, Oilseeds" },
  { name: "Middle East", import: "Basmati Rice, Cardamom, Saffron" },
  { name: "Australia", import: "Food Ingredients, Dehydrated Veg" },
  { name: "Southeast Asia", import: "Chilli, Turmeric, Cumin" },
];

const FAQS = [
  {
    question: "Who are the top exporters in India for spices and agricultural products?",
    answer:
      "India is home to many export houses, but leading exporters like Sheesh Exports distinguish themselves through direct farm procurement, in-house processing, and strict adherence to international quality standards such as US FDA and EU MRL limits.",
  },
  {
    question: "How do I find a reliable exporter in India?",
    answer:
      "A reliable Indian exporter should possess valid APEDA and Spices Board registrations, offer transparent origin tracing, provide third-party laboratory reports (like SGS), and have a proven track record of successful container shipments to your destination country.",
  },
  {
    question: "How can I import spices from India?",
    answer:
      "To import spices from India, you need to partner with a registered Indian exporter, agree on Incoterms (like FOB or CIF), finalize product specifications, and ensure the exporter provides necessary documents such as the Phytosanitary Certificate, Certificate of Origin, and Commercial Invoice for your local customs clearance.",
  },
  {
    question: "Can I order mixed containers from Indian exporters?",
    answer:
      "Yes, premium exporters like Sheesh Exports offer mixed container (consolidation) programs. This allows international buyers to procure various commodities—such as different spices, grains, and pulses—within a single 20ft or 40ft container, optimizing freight costs and inventory management.",
  },
  {
    question: "What export documents are provided?",
    answer:
      "Standard export documentation includes the Commercial Invoice, Packing List, Bill of Lading (B/L), Certificate of Origin (CoO), Phytosanitary Certificate, and Fumigation Certificate. Additional documents like Health Certificates or SGS inspection reports can be provided based on the importing country's regulations.",
  },
  {
    question: "Do you offer private label packaging for international brands?",
    answer:
      "Absolutely. We offer comprehensive private label and contract manufacturing services. We can pack spices and food ingredients directly into your branded retail pouches, jars, or boxes at our facility before export.",
  },
  {
    question: "What is the minimum order quantity (MOQ) for export?",
    answer:
      "For sea freight, the general minimum order quantity is one 20ft container (FCL), which can hold approximately 14 to 18 Metric Tons depending on the commodity. For specific high-value items, LCL (Less than Container Load) shipments can be arranged.",
  },
  {
    question: "How long does shipping take from India?",
    answer:
      "Transit times vary by destination. Typically, shipments to the Middle East take 7-12 days, Europe and the UK take 25-35 days, and North America takes 30-45 days via ocean freight from major Indian ports like Nhava Sheva or Mundra.",
  },
];

export default function ExportersInIndiaPage() {
  // Generate Schemas
  const faqSchema = buildFAQSchema(FAQS);

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sheesh Exports",
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/images/sheesh-logo.webp`,
    description: "Premium Indian Exporter of Agricultural Commodities and Spices.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Indore",
      addressRegion: "Madhya Pradesh",
      addressCountry: "IN",
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Agricultural Commodity Export",
    provider: {
      "@type": "Organization",
      name: "Sheesh Exports",
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 20.5937,
        longitude: 78.9629,
      },
      geoRadius: "10000",
    },
    description: "Global export of spices, pulses, grains, and food ingredients from India.",
  };

  return (
    <main className="min-h-screen bg-background selection:bg-primary selection:text-primary-foreground">
      <JsonLd data={[orgSchema, serviceSchema, faqSchema]} />

      {/* SECTION 01: HERO */}
      <section className="relative h-[90vh] min-h-[600px] w-full flex items-center bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/exporters/hero.jpg"
            alt="Container terminal port for Indian exports"
            fill
            sizes="100vw"
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl">
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase leading-[1.1] tracking-tight mb-6">
              <span className="block text-primary mb-2 text-2xl md:text-3xl tracking-widest font-bold">
                Indian Exporter
              </span>
              Global Supply Partner
            </h1>
            <p className="text-lg md:text-xl text-gray-300 font-sans leading-relaxed mb-10 max-w-2xl border-l-2 border-primary pl-6">
              Connecting international buyers with export-grade agricultural commodities, sourced
              directly from India's leading production regions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/request-quote"
                className={
                  buttonVariants({ size: "lg", variant: "default" }) +
                  " bg-primary hover:bg-primary/90 text-primary-foreground font-bold tracking-widest uppercase rounded-none px-8"
                }
              >
                Request Quotation
              </Link>
              <Link
                href="/products"
                className={
                  buttonVariants({ size: "lg", variant: "outline" }) +
                  " text-primary border-white hover:bg-white hover:text-black font-bold tracking-widest uppercase rounded-none px-8"
                }
              >
                Explore Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02: INDIA'S EXPORT STORY */}
      <section className="py-12 bg-background border-b border-border relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-8">
                INDIA PRODUCES SOME OF THE WORLD'S MOST SOUGHT-AFTER SPICES, GRAINS, AND FOOD
                INGREDIENTS.
              </h2>
            </div>
            <div className="prose prose-lg dark:prose-invert">
              <p className="font-serif text-xl leading-relaxed text-muted-foreground mb-6">
                India's agricultural strength is unmatched, yielding an incredibly diverse portfolio
                of commodities. However, for international buyers, the export opportunity often
                comes with procurement complexity.
              </p>
              <p className="text-base text-muted-foreground mb-6">
                Navigating origin markets requires an deep understanding of quality grading,
                pesticide management, and compliance requirements. International trade demands
                flawless logistics, rigorous laboratory testing, and airtight export documentation
                to prevent delays at destination ports.
              </p>
              <p className="text-xl font-heading font-bold text-foreground border-l-4 border-primary pl-6 mt-8">
                This is where Sheesh Exports operates. We bridge the gap between Indian agriculture
                and global markets.
              </p>
            </div>
          </div>
        </div>

        {/* Abstract Background Element */}
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none grayscale">
          <Image
            loading="lazy"
            src="/images/exporters/harvest.jpg"
            alt="Indian harvest"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* SECTION 03: WHAT WE EXPORT */}
      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <header className="mb-20">
            <span className="text-sm font-bold uppercase tracking-widest text-primary mb-4 block">
              Our Portfolio
            </span>
            <h2 className="font-heading text-4xl lg:text-5xl font-black uppercase">
              What We Export
            </h2>
          </header>

          <div className="space-y-20 lg:space-y-32">
            {CATEGORIES_DATA.slice(0, 4).map((cat, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={cat.id}
                  className={`flex flex-col lg:flex-row gap-10 lg:gap-20 items-center ${isEven ? "" : "lg:flex-row-reverse"}`}
                >
                  <div className="w-full lg:w-1/2 relative aspect-[4/3] bg-muted">
                    <Image
                      src={cat.heroImage || `/images/product-categories/${cat.slug}.webp`}
                      alt={`${cat.name} Exporter India`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  <div className="w-full lg:w-1/2">
                    <h3 className="font-heading text-4xl font-bold mb-6">{cat.name}</h3>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg">
                      {cat.description} Sourced from the finest growing regions in India, processed
                      under strict hygiene standards, and packed for global export.
                    </p>
                    <Link
                      href={`/categories/${cat.slug}`}
                      className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-foreground hover:text-primary transition-colors border-b-2 border-primary pb-1"
                    >
                      View {cat.name} Export Range <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 04: FROM SOURCE TO SHIPMENT */}
      <section className="py-12 bg-foreground text-background overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <Image
            loading="lazy"
            src="/images/exporters/loading.jpg"
            alt="Shipping logistics"
            fill
            className="object-cover"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <header className="mb-20">
            <span className="text-sm font-bold uppercase tracking-widest text-primary mb-4 block">
              Export Journey
            </span>
            <h2 className="font-heading text-4xl lg:text-5xl font-black uppercase text-background">
              From Source To Shipment
            </h2>
          </header>

          <div className="flex overflow-x-auto hide-scrollbar gap-8 pb-12 snap-x">
            {EXPORT_JOURNEY.map((step, idx) => (
              <div key={idx} className="flex-none w-72 lg:w-80 snap-start group">
                <div className="text-6xl font-black text-background/10 group-hover:text-primary/20 transition-colors mb-4 font-heading">
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <h3 className="text-xl font-bold uppercase tracking-widest mb-4 text-primary border-b border-background/20 pb-4">
                  {step.stage}
                </h3>
                <p className="text-background/70 font-serif leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 05: EXPORT CAPABILITIES */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <header className="mb-20">
            <h2 className="font-heading text-4xl lg:text-5xl font-black uppercase">
              Export Capabilities
            </h2>
          </header>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
            {CAPABILITIES.map((cap, idx) => (
              <div key={idx} className="border-t border-border pt-6">
                <h3 className="font-heading text-2xl font-bold mb-4">{cap.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 06: PACKAGING SYSTEMS */}
      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-primary mb-4 block">
                Infrastructure
              </span>
              <h2 className="font-heading text-4xl lg:text-5xl font-black uppercase mb-8">
                Industrial Packaging Systems
              </h2>
              <div className="prose dark:prose-invert mb-10">
                <p className="text-lg text-muted-foreground">
                  Our packaging infrastructure is designed to maintain product integrity during long
                  oceanic transit. We provide customized packaging solutions tailored to buyer
                  requirements and destination market regulations.
                </p>
              </div>
              <ul className="space-y-4 font-serif text-lg text-foreground">
                <li className="flex items-center gap-4">
                  <CheckCircle2 className="w-5 h-5 text-primary" /> 25kg / 50kg PP Bags (Laminated)
                </li>
                <li className="flex items-center gap-4">
                  <CheckCircle2 className="w-5 h-5 text-primary" /> Traditional Jute Bags with inner
                  liners
                </li>
                <li className="flex items-center gap-4">
                  <CheckCircle2 className="w-5 h-5 text-primary" /> Multi-wall Paper Kraft Bags
                </li>
                <li className="flex items-center gap-4">
                  <CheckCircle2 className="w-5 h-5 text-primary" /> FIBC Jumbo Bags (1 Metric Ton)
                </li>
                <li className="flex items-center gap-4">
                  <CheckCircle2 className="w-5 h-5 text-primary" /> Private Label Retail Pouches
                </li>
                <li className="flex items-center gap-4">
                  <CheckCircle2 className="w-5 h-5 text-primary" /> Vacuum Packing for High-Value
                  Spices
                </li>
              </ul>
            </div>
            <div className="relative aspect-square w-full">
              <Image
                src="/images/exporters/packaging.jpg"
                alt="Bulk packaging for export spices"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover rounded-sm shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 07: QUALITY & CERTIFICATIONS */}
      <section className="py-12 bg-background border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <header className="mb-20 text-center max-w-3xl mx-auto">
            <h2 className="font-heading text-4xl lg:text-5xl font-black uppercase mb-6">
              Global Compliance
            </h2>
            <p className="text-lg text-muted-foreground">
              We operate under strict international food safety standards, ensuring every export
              consignment meets the regulatory requirements of the destination country.
            </p>
          </header>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {CERTIFICATIONS.map((cert, idx) => (
              <div
                key={idx}
                className="p-8 border border-border bg-muted/10 hover:border-primary transition-colors flex flex-col"
              >
                <h3 className="font-heading text-2xl font-bold mb-4">{cert.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 08: INTERNATIONAL MARKETS */}
      <section className="py-12 bg-foreground text-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <header className="mb-20 flex flex-col md:flex-row md:justify-between md:items-end gap-8">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-primary mb-4 block">
                Global Reach
              </span>
              <h2 className="font-heading text-4xl lg:text-5xl font-black uppercase text-background">
                Export Markets
              </h2>
            </div>
            <Link
              href="/international"
              className={
                buttonVariants({ variant: "outline" }) +
                " text-white border-white hover:bg-white hover:text-black rounded-none uppercase tracking-widest"
              }
            >
              View All Markets
            </Link>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {MARKETS.map((market, idx) => (
              <div key={idx} className="border-t border-background/20 pt-6 group">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-heading text-2xl font-bold text-background group-hover:text-primary transition-colors">
                    {market.name}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-background/50 group-hover:text-primary transition-colors" />
                </div>
                <p className="text-sm text-background/60 font-serif uppercase tracking-wider">
                  Key Imports: {market.import}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 09: PROCUREMENT ADVANTAGES */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-4xl lg:text-5xl font-black uppercase mb-16 text-center">
              Why Source From Us?
            </h2>

            <div className="space-y-12">
              <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                <div className="md:w-1/3 shrink-0">
                  <h3 className="text-xl font-bold uppercase tracking-widest text-primary">
                    Single Supplier Consolidation
                  </h3>
                </div>
                <div className="md:w-2/3">
                  <p className="text-lg text-muted-foreground leading-relaxed font-serif">
                    Instead of dealing with multiple origin suppliers for different commodities, our
                    comprehensive portfolio allows you to source spices, pulses, and grains under
                    one roof. This drastically reduces vendor management overhead, banking fees, and
                    logistics coordination efforts.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                <div className="md:w-1/3 shrink-0">
                  <h3 className="text-xl font-bold uppercase tracking-widest text-primary">
                    Origin-Based Sourcing
                  </h3>
                </div>
                <div className="md:w-2/3">
                  <p className="text-lg text-muted-foreground leading-relaxed font-serif">
                    We maintain procurement centers directly in the cultivation hubs of India—from
                    the turmeric fields of Erode to the cumin markets of Unjha. This direct-to-farm
                    model bypasses local traders, securing superior quality raw materials at highly
                    competitive export prices.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                <div className="md:w-1/3 shrink-0">
                  <h3 className="text-xl font-bold uppercase tracking-widest text-primary">
                    Export Documentation Mastery
                  </h3>
                </div>
                <div className="md:w-2/3">
                  <p className="text-lg text-muted-foreground leading-relaxed font-serif">
                    International trade falls apart when documentation is incorrect. Our dedicated
                    export compliance team ensures that every commercial invoice, packing list,
                    certificate of origin, and phytosanitary certificate is drafted flawlessly to
                    meet your country's customs regulations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: FAQ */}
      <FAQSection
        title="Frequently Asked Questions"
        subtitle="Knowledge Hub"
        faqs={FAQS}
        showSchema={false}
        className="py-12 bg-muted/30 border-t border-border"
      />

      {/* SECTION 11: FINAL CTA */}
      <section className="py-12 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="font-heading text-5xl lg:text-6xl font-black uppercase mb-8 leading-tight">
            Let's Build Your Supply Chain In India
          </h2>
          <p className="text-xl md:text-2xl text-primary-foreground/90 font-serif mb-12 leading-relaxed">
            Supporting importers, distributors, manufacturers, and private-label brands with
            export-grade agricultural commodities sourced from India.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              href="/request-quote"
              className={
                buttonVariants({ size: "lg", variant: "secondary" }) +
                " font-bold tracking-widest uppercase rounded-none px-10 py-6 text-lg"
              }
            >
              Request Quotation
            </Link>
            <Link
              href="/contact"
              className={
                buttonVariants({ size: "lg", variant: "default" }) +
                " bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-bold tracking-widest uppercase rounded-none px-10 py-6 text-lg"
              }
            >
              Speak With Export Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
