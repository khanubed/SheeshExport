import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { IMAGES } from "@/lib/assets";
import {
  ArrowRight,
  Download,
  CheckCircle2,
  Factory,
  Store,
  Utensils,
  Package,
  Mail,
  Leaf,
  ShieldCheck,
  Award,
  FileText,
  Boxes,
  Globe2,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { DynamicProductCarousel, DynamicCertificationsCarousel } from "@/components/home/DynamicCarousels";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { QuotationFormSection } from "@/components/home/QuotationFormSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { FAQSection } from "@/components/shared/FAQSection";
import { CTASection } from "@/components/shared/CTASection";
import { ContactSection } from "@/components/contact/ContactSection";
import { CATEGORIES_DATA } from "@/lib/data/categories";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildOrganizationSchema } from "@/lib/seo/organization";
import { SITE_CONFIG } from "@/config/site";

export const metadata: Metadata = buildMetadata({
  title: "Premium Indian Spices & Agro Commodities Exporter",
  description:
    "Sheesh Exports is a leading B2B exporter of bulk spices, grains, pulses, and oil seeds from India. APEDA & FSSAI certified wholesale supplier with custom packaging and global shipping.",
});


const ADVANTAGES = [
  {
    title: "Farm Sourcing",
    desc: "Sourced directly from verified farming networks across India's leading agricultural regions, ensuring full traceability from origin to shipment.",
    icon: Leaf
  },
  {
    title: "Quality Assurance",
    desc: "Every batch undergoes rigorous testing for moisture, purity, and contamination to meet your destination market's strict compliance standards.",
    icon: ShieldCheck
  },
  {
    title: "Private Label",
    desc: "From bulk supply to custom retail-ready formats, we offer complete OEM manufacturing and flexible packaging adapted to your business model.",
    icon: Package
  },
  {
    title: "Export Compliance",
    desc: "Our dedicated team manages all regulatory documentation, phytosanitary requirements, and customs clearance to streamline international procurement.",
    icon: FileText
  },
  {
    title: "Mixed Containers",
    desc: "Import multiple product categories in a single shipment. Optimize freight costs and simplify supplier management with our consolidation program.",
    icon: Boxes
  },
  {
    title: "Global Logistics",
    desc: "Serving buyers across North America, Europe, the Middle East, and Asia with end-to-end container planning and dedicated freight coordination.",
    icon: Globe2
  },
];

const HOME_FAQS = [
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


const INDUSTRIES = [
  { icon: Factory, title: "Food Manufacturing", slug: "food-manufacturing" },
  { icon: Store, title: "Retail & Private Label", slug: "retail-private-label" },
  { icon: Utensils, title: "HoReCa", slug: "horeca-hospitality" },
  { icon: Package, title: "Importers & Distributors", slug: "importers-distributors" },
];

const CERTIFICATIONS = [
  { name: "APEDA", desc: "Registered Exporter", img: "/images/certificates/APEDA.png.webp", slug: "apeda" },
  {
    name: "Spices Board",
    desc: "Certified Member",
    img: "/images/certificates/SPICES-BOARD-CERTIFICATE.webp",
    slug: "spices-board-india"
  },
  { name: "FSSAI", desc: "Food Safety", img: "/images/certificates/FSSAI.webp", slug: "fssai" },
  { name: "FIEO", desc: "Export Organization", img: "/images/certificates/FIEO-Logo-Trans-1.webp", slug: "fieo" },
  { name: "IEC", desc: "Import Export Code", img: "/images/certificates/IEC-CERTIFICATE.png.webp", slug: "iec" },
  { name: "MSME", desc: "Govt. of India", img: "/images/certificates/MSME_logo_colour.svg", slug: "msme" },
  { name: "GST", desc: "Registered", img: "/images/certificates/gst-1.webp", slug: "gst" },
  { name: "Star Export House", desc: "Recognized", img: "/images/certificates/star.webp", slug: "star-export-house" },
];

const INSIGHTS = [
  {
    title: "Global Spice Market Trends 2024",
    category: "Market Insights",
    img: IMAGES.insights.spiceMarket,
    href: "#",
  },
  {
    title: "How to Export Spices to the USA",
    category: "Export Guide",
    img: IMAGES.insights.exportGuide,
    href: "#",
  },
  {
    title: "Indian Agro Commodities - Key Opportunities",
    category: "Commodity Report",
    img: IMAGES.insights.agroOpportunities,
    href: "#",
  },
];


export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen" role="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              buildOrganizationSchema(),
              {
                "@type": "WebSite",
                name: SITE_CONFIG.name,
                url: SITE_CONFIG.url,
              },
            ],
          }),
        }}
      />
      {/* Hero Section */}
      <section aria-labelledby="hero-heading" className="relative h-[85vh] min-h-150 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
            className="object-cover w-full h-full -scale-x-100"
          >
            <source
              src="/hero-video.webm"
              type="video/webm"
            />
          </video>
          <div className="absolute inset-0 bg-black/60 dark:bg-black/20" />
        </div>
        <div className="relative z-10 mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 w-full text-white">
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-4 block">
              Indian Origin. Global Reach.
            </span>
            <h1 id="hero-heading" className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] max-w-3xl mb-6">
              Premium Spices & Agro Commodities from India
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mb-4 leading-relaxed font-sans">
              We are a leading exporter of spices, grains, oil seeds, pulses and allied food
              products, delivering authentic Indian quality to markets worldwide.
            </p>
            <div className="flex flex-wrap gap-4 mb-16">
              <Link
                href="/products"
                className={buttonVariants({
                  size: "lg",
                  className: "bg-primary text-primary-foreground hover:bg-primary/90 font-sans",
                })}
              >
                Explore Our Products <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <a
                href="#"
                className={buttonVariants({
                  size: "lg",
                  variant: "outline",
                  className:
                    "border-white/30 text-white hover:bg-white/10 hover:text-white font-sans bg-transparent",
                })}
              >
                <Download className="mr-2 h-4 w-4" /> Download Catalog
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8 max-w-2xl pt-8 border-t border-white/20" role="list" aria-label="Company statistics">
              <div role="listitem">
                <div className="font-heading text-4xl font-bold mb-1">50+</div>
                <div className="text-sm text-slate-400">Countries Served</div>
              </div>
              <div role="listitem">
                <div className="font-heading text-4xl font-bold mb-1">100+</div>
                <div className="text-sm text-slate-400">Global Partners</div>
              </div>
              <div role="listitem">
                <div className="font-heading text-4xl font-bold mb-1">25+</div>
                <div className="text-sm text-slate-400">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Certifications */}
      <section aria-labelledby="certifications-heading" className="py-12 bg-background">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-4">
            <div>
              <span className="text-xs font-semibold tracking-wider uppercase text-primary mb-4 block">
                Quality & Compliance
              </span>
              <h2 id="certifications-heading" className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Certified for Global Trade
              </h2>
              <p className="text-muted-foreground text-lg">
                We adhere to the highest international standards of food safety, quality control,
                and export compliance, ensuring every shipment meets your regulatory requirements.
              </p>
            </div>
          </div>

          <div>
            <DynamicCertificationsCarousel certifications={CERTIFICATIONS} />
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/certifications"
              className={buttonVariants({ variant: "outline", className: "font-sans" })}
            >
              View All Certificates <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      {/* Product Range */}
      <section aria-labelledby="products-heading" className="pb-24 bg-background">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-2 block">
                Our Product Range
              </span>
              <h2 id="products-heading" className="font-heading text-4xl sm:text-5xl font-bold text-foreground leading-tight">
                Quality Produce.
                <br />
                Diverse Possibilities.
              </h2>
            </div>
            <div className=" md:mt-0 max-w-md">
              <p className="text-muted-foreground mb-4">
                From aromatic spices to wholesome grains, we supply nature's best — sourced,
                processed and packed to meet global standards.
              </p>
              <Link
                href="/products"
                className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors uppercase tracking-wider"
              >
                View All Products <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="mt-4">
            <DynamicProductCarousel categories={CATEGORIES_DATA} />
          </div>
        </div>
      </section>

      {/* Why Choose Us / Competitive Advantage */}
      <section aria-labelledby="advantage-heading" className="relative py-16 border-y border-border overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline aria-hidden="true" className="object-cover w-full h-full grayscale opacity-30">
            <source src="/12351626_3840_2160_30fps.webm" type="video/webm" />
          </video>
          <div className="absolute inset-0 bg-black/50" />
          {/* Subtle noise/texture overlay to remove pure flatness */}
          <div className="absolute inset-0 opacity-10 bg-[url('/images/noise.webp')] mix-blend-overlay pointer-events-none" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="max-w-[700px] mx-auto text-center mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-white/50 mb-4 block">
              OUR COMPETITIVE ADVANTAGE
            </span>
            <h2 id="advantage-heading" className="font-heading text-[clamp(3rem,5vw,5rem)] font-bold text-white mb-6 leading-[1.1]">
              Why Global Buyers Choose Sheesh Exports
            </h2>
            <p className="text-white/70 text-[0.95rem] leading-[1.7] max-w-2xl mx-auto">
              We help importers and distributors source export-grade commodities directly from India's trusted regions, simplifying international procurement with end-to-end support.
            </p>
          </div>

          {/* Metrics Strip */}
          <div className="mb-20 border-y border-white/10 py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-4 md:gap-8 md:divide-x md:divide-white/10 text-center" role="list" aria-label="Key metrics">
              <div role="listitem">
                <div className="text-5xl font-bold text-white mb-2">50+</div>
                <div className="text-white/50 text-xs font-semibold tracking-widest uppercase">Export Markets</div>
              </div>
              <div role="listitem">
                <div className="text-5xl font-bold text-white mb-2">100+</div>
                <div className="text-white/50 text-xs font-semibold tracking-widest uppercase">Commercial SKUs</div>
              </div>
              <div role="listitem">
                <div className="text-5xl font-bold text-white mb-2">20+</div>
                <div className="text-white/50 text-xs font-semibold tracking-widest uppercase">Product Categories</div>
              </div>
              <div role="listitem">
                <div className="text-5xl font-bold text-white mb-2">100%</div>
                <div className="text-white/50 text-xs font-semibold tracking-widest uppercase">Export Focused</div>
              </div>
            </div>
          </div>

          {/* Capability Grid */}
          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-[1px] bg-white/10 border border-white/10 shadow-2xl" role="list" aria-label="Competitive advantages">
              {ADVANTAGES.map((adv, idx) => {
                const Icon = adv.icon;
                return (
                  <article key={idx} className="bg-black/60 backdrop-blur-md p-10 hover:bg-black/80 transition-colors" role="listitem">
                    <Icon className="w-6 h-6 text-white/80 mb-6" aria-hidden="true" />
                    <h3 className="text-[1.125rem] font-semibold text-white mb-3">{adv.title}</h3>
                    <p className="text-[0.95rem] leading-[1.7] text-white/60">
                      {adv.desc}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-16 text-center flex flex-col items-center">
            <span className="text-[10px] uppercase tracking-widest text-white/40 mb-4 block font-semibold">
              ACCREDITATIONS & COMPLIANCE
            </span>
            <div className="flex flex-wrap justify-center gap-4" role="list" aria-label="Certifications">
              {["ISO 22000", "APEDA", "FSSAI", "US FDA", "HALAL", "Spices Board India"].map((badge, idx) => (
                <span key={idx} className="px-4 py-1.5 border border-white/20 text-white/60 text-[11px] font-medium tracking-widest uppercase" role="listitem">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="/about"
              className="inline-flex items-center text-[0.95rem] font-semibold text-white hover:text-white/70 transition-colors group border-b border-transparent hover:border-white/70 pb-1"
            >
              Learn More About Sheesh Exports <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section aria-labelledby="journey-heading" className="py-24 bg-background border-y border-border">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <div className="relative mx-auto max-w-6xl">
            <figure className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border border-border bg-black">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-contain"
              >
                <source src="/Sheesh_Journey.webm" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <figcaption className="sr-only">Sheesh Exports journey from farm to global markets</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection />

      {/* Global Reach */}
      <section aria-labelledby="global-reach-heading" className="relative py-12 border-y border-border overflow-hidden bg-muted/10">
        <div className="absolute inset-0 z-0  pointer-events-none">
          <Image
            src="/world-map.webp"
            alt="Global Reach Background"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-start text-left">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-wider uppercase text-primary mb-4 block">
              Our Global Reach
            </span>
            <h2 id="global-reach-heading" className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
              Trusted by Importers<br />Across 50+ Countries
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              We export to 50+ countries across Asia, Europe, North America, Africa and Oceania,
              serving importers, distributors, food processors and retail chains with consistent quality.
            </p>
            <Link
              href="/international"
              className={buttonVariants({
                size: "lg",
                className: "font-sans bg-foreground text-background hover:bg-foreground/90 px-8",
              })}
            >
              Explore Countries <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section aria-labelledby="industries-heading" className="py-16 bg-card border-y border-border">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative rounded-lg overflow-hidden">
              <figure className="relative h-full min-h-[400px]" style={{ position: "relative" }}>
                <Image
                  src="/images/about/factory-processing.webp"
                  alt="Food processing facility"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <figcaption className="sr-only">Food processing facility</figcaption>
              </figure>
            </div>

            <div className="order-1 lg:order-2">
              <div>
                <span className="text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-4 block">
                  Industry Solutions
                </span>
                <h2 id="industries-heading" className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
                  Tailored for Every
                  <br />
                  Food Business
                </h2>
                <p className="text-muted-foreground text-lg mb-10 max-w-xl">
                  We partner with a wide range of industries, providing customized solutions for
                  their sourcing and procurement needs.
                </p>

                <ul className="grid grid-cols-2 gap-6 mb-10" aria-label="Industry solutions" role="list">
                  {INDUSTRIES.map((ind, idx) => {
                    const Icon = ind.icon;
                    return (
                      <li key={idx} className="bg-background border border-border p-6 rounded-lg text-center flex flex-col items-center justify-center gap-3 transition-colors hover:border-primary/50 group">
                        <Link href={`/industries/${ind.slug}`} className="w-full h-full flex flex-col items-center justify-center gap-3">
                          <Icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" aria-hidden="true" />
                          <span className="font-semibold text-sm group-hover:text-primary transition-colors">{ind.title}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>

                <Link
                  href="/industries"
                  className="inline-flex items-center text-sm font-semibold text-foreground hover:text-primary transition-colors uppercase tracking-wider"
                >
                  View All Industries <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Insights */}
      <section aria-labelledby="insights-heading" className="py-12 bg-background">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <span className="text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-4 block">
              Stay Informed
            </span>
            <h2 id="insights-heading" className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Insights, Guides &<br />
              Market Updates
            </h2>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <p className="text-muted-foreground max-w-xl">
                Get the latest on global demand, export regulations, commodity trends and industry
                insights.
              </p>
              <Link
                href="/blog"
                className={buttonVariants({
                  variant: "outline",
                  className: "bg-foreground text-background hover:bg-foreground/90 font-sans",
                })}
              >
                Explore Resources <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8" role="list" aria-label="Latest insights">
            {INSIGHTS.map((insight, idx) => (
              <div key={idx} role="listitem">
                <article>
                  <Link href={insight.href} className="group block">
                    <figure className="relative h-56 mb-6 overflow-hidden rounded-lg" style={{ position: "relative" }}>
                      <Image
                        src={insight.img}
                        alt={insight.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <figcaption className="sr-only">{insight.title}</figcaption>
                    </figure>
                    <span className="text-xs font-semibold tracking-wider uppercase text-primary mb-2 block">
                      {insight.category}
                    </span>
                    <h3 className="font-heading text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {insight.title}
                    </h3>
                    <div className="inline-flex items-center text-sm font-semibold text-muted-foreground group-hover:text-primary transition-colors">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </Link>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection title="Sourcing & Export Queries" subtitle="Frequently Asked Questions" faqs={HOME_FAQS} />

      {/* Contact Header */}
      <section aria-labelledby="contact-heading" className="pt-24 pb-12 bg-background border-t border-border">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-4 block">
              Global Partnerships
            </span>
            <h2 id="contact-heading" className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Let's Build A Reliable Supply Chain Together.
            </h2>
            <p className="text-lg text-muted-foreground font-sans leading-relaxed">
              Whether you are looking for specific origin certifications, bulk FOB pricing, or end-to-end private-label manufacturing, our international procurement team is ready to assist you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Final CTA */}
      <CTASection />
    </main>
  );
}
