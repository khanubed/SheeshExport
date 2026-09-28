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
import { ProductCarousel } from "@/components/home/ProductCarousel";
import { CertificationsCarousel } from "@/components/home/CertificationsCarousel";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { QuotationFormSection } from "@/components/home/QuotationFormSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/home/AnimatedSection";
import { HomeFAQ } from "@/components/home/HomeFAQ";
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

const INDUSTRIES = [
  { icon: Factory, title: "Food Manufacturing" },
  { icon: Store, title: "Retail & Private Label" },
  { icon: Utensils, title: "HoReCa (Hotels, Restaurants, Cafes)" },
  { icon: Package, title: "FMCG" },
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
    <div className="flex flex-col min-h-screen">
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
      <section className="relative h-[85vh] min-h-150 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full -scale-x-100"
          >
            <source
              src="/hero-video.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-black/60 dark:bg-black/20" />
        </div>
        <div className="relative z-10 mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 w-full text-white">
          <FadeIn>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-4 block">
              Indian Origin. Global Reach.
            </span>
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] max-w-3xl mb-6">
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

            <div className="grid grid-cols-3 gap-8 max-w-2xl pt-8 border-t border-white/20">
              <div>
                <div className="font-heading text-4xl font-bold mb-1">50+</div>
                <div className="text-sm text-slate-400">Countries Served</div>
              </div>
              <div>
                <div className="font-heading text-4xl font-bold mb-1">100+</div>
                <div className="text-sm text-slate-400">Global Partners</div>
              </div>
              <div>
                <div className="font-heading text-4xl font-bold mb-1">25+</div>
                <div className="text-sm text-slate-400">Years of Excellence</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
      {/* Certifications */}
      <section className="py-12 bg-background">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-4">
            <FadeIn>
              <span className="text-xs font-semibold tracking-wider uppercase text-primary mb-4 block">
                Quality & Compliance
              </span>
              <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Certified for Global Trade
              </h2>
              <p className="text-muted-foreground text-lg">
                We adhere to the highest international standards of food safety, quality control,
                and export compliance, ensuring every shipment meets your regulatory requirements.
              </p>
            </FadeIn>
          </div>

          <FadeIn>
            <CertificationsCarousel certifications={CERTIFICATIONS} />
          </FadeIn>

          <FadeIn className="mt-6 text-center">
            <Link
              href="/certifications"
              className={buttonVariants({ variant: "outline", className: "font-sans" })}
            >
              View All Certificates <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </FadeIn>
        </div>
      </section>
      {/* Product Range */}
      <section className="pb-24 bg-background">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-2 block">
                Our Product Range
              </span>
              <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground leading-tight">
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
          </FadeIn>

          <FadeIn className="mt-4">
            <ProductCarousel categories={CATEGORIES_DATA} />
          </FadeIn>
        </div>
      </section>

      {/* Why Choose Us / Competitive Advantage */}
      <section className="relative py-16 border-y border-border overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="object-cover w-full h-full grayscale opacity-30">
            <source src="/12351626_3840_2160_30fps.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50" />
          {/* Subtle noise/texture overlay to remove pure flatness */}
          <div className="absolute inset-0 opacity-10 bg-[url('/images/noise.png')] mix-blend-overlay pointer-events-none" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <FadeIn className="max-w-[700px] mx-auto text-center mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-white/50 mb-4 block">
              OUR COMPETITIVE ADVANTAGE
            </span>
            <h2 className="font-heading text-[clamp(3rem,5vw,5rem)] font-bold text-white mb-6 leading-[1.1]">
              Why Global Buyers Choose Sheesh Exports
            </h2>
            <p className="text-white/70 text-[0.95rem] leading-[1.7] max-w-2xl mx-auto">
              We help importers and distributors source export-grade commodities directly from India's trusted regions, simplifying international procurement with end-to-end support.
            </p>
          </FadeIn>

          {/* Metrics Strip */}
          <FadeIn delay={0.1} className="mb-20 border-y border-white/10 py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10 text-center">
              <div>
                <div className="text-5xl font-bold text-white mb-2">50+</div>
                <div className="text-white/50 text-xs font-semibold tracking-widest uppercase">Export Markets</div>
              </div>
              <div className="border-t border-white/10 pt-8 mt-8 md:border-t-0 md:pt-0 md:mt-0">
                <div className="text-5xl font-bold text-white mb-2">100+</div>
                <div className="text-white/50 text-xs font-semibold tracking-widest uppercase">Commercial SKUs</div>
              </div>
              <div className="border-t border-white/10 pt-8 mt-8 md:border-t-0 md:pt-0 md:mt-0">
                <div className="text-5xl font-bold text-white mb-2">20+</div>
                <div className="text-white/50 text-xs font-semibold tracking-widest uppercase">Product Categories</div>
              </div>
              <div className="border-t border-white/10 pt-8 mt-8 md:border-t-0 md:pt-0 md:mt-0">
                <div className="text-5xl font-bold text-white mb-2">100%</div>
                <div className="text-white/50 text-xs font-semibold tracking-widest uppercase">Export Focused</div>
              </div>
            </div>
          </FadeIn>

          {/* Capability Grid */}
          <FadeIn delay={0.2} className="mb-16">
            <div className="grid md:grid-cols-2 gap-[1px] bg-white/10 border border-white/10 shadow-2xl">
              {ADVANTAGES.map((adv, idx) => {
                const Icon = adv.icon;
                return (
                  <div key={idx} className="bg-black/60 backdrop-blur-md p-10 hover:bg-black/80 transition-colors">
                    <Icon className="w-6 h-6 text-white/80 mb-6" />
                    <h3 className="text-[1.125rem] font-semibold text-white mb-3">{adv.title}</h3>
                    <p className="text-[0.95rem] leading-[1.7] text-white/60">
                      {adv.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </FadeIn>

          {/* Certifications */}
          <FadeIn delay={0.3} className="mb-16 text-center flex flex-col items-center">
            <span className="text-[10px] uppercase tracking-widest text-white/40 mb-4 block font-semibold">
              ACCREDITATIONS & COMPLIANCE
            </span>
            <div className="flex flex-wrap justify-center gap-4">
              {["ISO 22000", "APEDA", "FSSAI", "US FDA", "HALAL", "Spices Board India"].map((badge, idx) => (
                <span key={idx} className="px-4 py-1.5 border border-white/20 text-white/60 text-[11px] font-medium tracking-widest uppercase">
                  {badge}
                </span>
              ))}
            </div>
          </FadeIn>

          {/* CTA */}
          <FadeIn delay={0.4} className="text-center">
            <Link
              href="/about"
              className="inline-flex items-center text-[0.95rem] font-semibold text-white hover:text-white/70 transition-colors group border-b border-transparent hover:border-white/70 pb-1"
            >
              Learn More About Sheesh Exports <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-24 bg-background border-y border-border">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="relative mx-auto max-w-6xl">
            <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border border-border bg-black">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-contain"
              >
                <source src="/Sheesh_Journey.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection />

      {/* Global Reach */}
      <section className="relative py-24 border-y border-border overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/ChatGPT%20Image%20Sep%2022,%202026,%2002_46_51%20PM.png"
            alt="Global Reach Background"
            fill
            className="object-cover object-right"
          />
          <div className="absolute inset-0 " />
        </div>
        <div className="relative z-10 mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <span className="text-xs font-semibold tracking-wider uppercase text-primary mb-4 block">
                Our Global Reach
              </span>
              <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
                Trusted by Importers
                <br />
                Across 50+ Countries
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-xl">
                We export to 50+ countries across Asia, Europe, North America, Africa and Oceania,
                serving importers, distributors, food processors and retail chains.
              </p>
              <Link
                href="/export-markets"
                className={buttonVariants({
                  className: "font-sans bg-foreground text-background hover:bg-foreground/90",
                })}
              >
                Explore Countries <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </FadeIn>

            <FadeIn delay={0.2} className="relative h-100 hidden lg:block">
              <div aria-hidden="true" />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-16 bg-card border-y border-border">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn className="order-2 lg:order-1 relative rounded-lg overflow-hidden">
              <Image
                src="/images/ChatGPT%20Image%20Sep%2022,%202026,%2003_04_18%20PM.png"
                alt="Industry Processing"
                width={800}
                height={800}
                className="w-full h-auto object-cover"
              />
            </FadeIn>

            <div className="order-1 lg:order-2">
              <FadeIn>
                <span className="text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-4 block">
                  Industry Solutions
                </span>
                <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
                  Tailored for Every
                  <br />
                  Food Business
                </h2>
                <p className="text-muted-foreground text-lg mb-10 max-w-xl">
                  We partner with a wide range of industries, providing customized solutions for
                  their sourcing and procurement needs.
                </p>

                <div className="grid grid-cols-2 gap-6 mb-10">
                  {INDUSTRIES.map((ind, idx) => {
                    const Icon = ind.icon;
                    return (
                      <div
                        key={idx}
                        className="bg-background border border-border p-6 rounded-lg text-center flex flex-col items-center justify-center gap-3 transition-colors hover:border-primary/50"
                      >
                        <Icon className="h-8 w-8 text-primary" />
                        <span className="font-semibold text-sm">{ind.title}</span>
                      </div>
                    );
                  })}
                </div>

                <Link
                  href="/industries"
                  className="inline-flex items-center text-sm font-semibold text-foreground hover:text-primary transition-colors uppercase tracking-wider"
                >
                  View All Industries <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Insights */}
      <section className="py-12 bg-background">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-16">
            <span className="text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-4 block">
              Stay Informed
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">
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
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {INSIGHTS.map((insight, idx) => (
              <StaggerItem key={idx}>
                <Link href={insight.href} className="group block">
                  <div className="relative h-56 mb-6 overflow-hidden rounded-lg">
                    <Image
                      src={insight.img}
                      alt={insight.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
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
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FAQ Section */}
      <HomeFAQ />

      {/* Contact Header */}
      <section className="pt-24 pb-12 bg-background border-t border-border">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="max-w-3xl">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-4 block">
              Global Partnerships
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Let's Build A Reliable Supply Chain Together.
            </h2>
            <p className="text-lg text-muted-foreground font-sans leading-relaxed">
              Whether you are looking for specific origin certifications, bulk FOB pricing, or end-to-end private-label manufacturing, our international procurement team is ready to assist you.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
