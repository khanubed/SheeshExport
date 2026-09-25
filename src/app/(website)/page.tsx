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
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { ProductCarousel } from "@/components/home/ProductCarousel";
import { CertificationsCarousel } from "@/components/home/CertificationsCarousel";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { QuotationFormSection } from "@/components/home/QuotationFormSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/home/AnimatedSection";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildOrganizationSchema } from "@/lib/seo/organization";
import { SITE_CONFIG } from "@/config/site";

export const metadata: Metadata = buildMetadata({
  title: "Premium Indian Spices & Agro Commodities Exporter",
  description:
    "Sheesh Exports is a leading B2B exporter of bulk spices, grains, pulses, and oil seeds from India. APEDA & FSSAI certified wholesale supplier with custom packaging and global shipping.",
});

const PRODUCT_CATEGORIES = [
  {
    title: "Whole Spices",
    desc: "Turmeric, Chilli, Cumin, Coriander & more",
    img: IMAGES.products.spices,
    href: "/products?categories=Whole+Spices",
  },
  {
    title: "Powdered Spices",
    desc: "Turmeric Powder, Chilli Powder & more",
    img: IMAGES.products.spices,
    href: "/products?categories=Powdered+Spices",
  },
  {
    title: "Grains & Millets",
    desc: "Rice, Wheat, Maize, Millet & more",
    img: IMAGES.products.grains,
    href: "/products?categories=Grains+%26+Millets",
  },
  {
    title: "Pulses & Beans",
    desc: "Chickpeas, Lentils, Beans, Grams & more",
    img: IMAGES.products.pulses,
    href: "/products?categories=Pulses+%26+Beans",
  },
  {
    title: "Oil Seeds",
    desc: "Sesame, Mustard, Groundnut & more",
    img: IMAGES.products.oilSeeds,
    href: "/products?categories=Oil+Seeds",
  },
  {
    title: "Dry Fruits & Nuts",
    desc: "Almonds, Cashews, Raisins & more",
    img: IMAGES.products.dryFruits,
    href: "/products?categories=Dry+Fruits+%26+Nuts",
  },
];

const FEATURES = [
  { title: "Consistent Quality", desc: "International Standards" },
  { title: "On-Time Delivery", desc: "Global Logistics Network" },
  { title: "Flexible MOQs", desc: "For Businesses of All Sizes" },
  { title: "Dedicated Export Support", desc: "From Inquiry to Shipment" },
];

const INDUSTRIES = [
  { icon: Factory, title: "Food Manufacturing" },
  { icon: Store, title: "Retail & Private Label" },
  { icon: Utensils, title: "HoReCa (Hotels, Restaurants, Cafes)" },
  { icon: Package, title: "FMCG" },
];

const CERTIFICATIONS = [
  { name: "APEDA", desc: "Registered Exporter", img: "/images/certificates/APEDA.png.webp" },
  {
    name: "Spices Board",
    desc: "Certified Member",
    img: "/images/certificates/SPICES-BOARD-CERTIFICATE.webp",
  },
  { name: "FSSAI", desc: "Food Safety", img: "/images/certificates/FSSAI.webp" },
  { name: "FIEO", desc: "Export Organization", img: "/images/certificates/FIEO-Logo-Trans-1.webp" },
  { name: "IEC", desc: "Import Export Code", img: "/images/certificates/IEC-CERTIFICATE.png.webp" },
  { name: "MSME", desc: "Govt. of India", img: "/images/certificates/MSME_logo_colour.svg" },
  { name: "GST", desc: "Registered", img: "/images/certificates/gst-1.webp" },
  { name: "Star Export House", desc: "Recognized", img: "/images/certificates/star.webp" },
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
              src="/Generated%20Video%20September%2022,%202026%20-%202_18PM.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-black/60 dark:bg-black/20" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full text-white">
          <FadeIn>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4 block">
              Indian Origin. Global Reach.
            </span>
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] max-w-3xl mb-6">
              Premium Spices & Agro Commodities from India
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed font-sans">
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
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
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

          <FadeIn className="mt-12 text-center">
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
            <div className="mt-6 md:mt-0 max-w-md">
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

          <FadeIn className="mt-12">
            <ProductCarousel categories={PRODUCT_CATEGORIES} />
          </FadeIn>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-24 border-y border-border overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="object-cover w-full h-full ">
            <source src="/12351626_3840_2160_30fps.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/80 dark:bg-black/80" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <span className="text-xs font-semibold tracking-wider uppercase text-white/80 mb-4 block">
                Our Strengths
              </span>
              <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                Why Global Buyers
                <br />
                Choose Us
              </h2>
              <p className="text-slate-300 text-lg mb-10 max-w-xl">
                We combine India's rich agricultural heritage with modern infrastructure and
                stringent quality control to deliver products you can trust.
              </p>

              <div className="space-y-8 mb-12">
                {FEATURES.map((feat, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="mt-1 shrink-0">
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">{feat.title}</h4>
                      <p className="text-slate-300">{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className={buttonVariants({
                  variant: "outline",
                  className:
                    "font-sans border-white/30 text-white hover:bg-white/10 hover:text-white bg-transparent",
                })}
              >
                About Sheesh Exports <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </FadeIn>

            <FadeIn delay={0.2} className="hidden lg:flex justify-end items-end h-full">
              <div className="bg-background p-6 rounded-lg shadow-xl max-w-xs border border-border">
                <Leaf className="h-8 w-8 text-primary mb-3" />
                <p className="font-heading text-xl font-bold text-foreground">
                  From Indian Farms to Global Tables
                </p>
              </div>
            </FadeIn>
          </div>
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
            className="object-right"
          />
          <div className="absolute inset-0 bg-background/55" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
      <section className="py-24 bg-card border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn className="order-2 lg:order-1 relative h-125 rounded-lg overflow-hidden">
              <Image
                src="/images/ChatGPT%20Image%20Sep%2022,%202026,%2003_04_18%20PM.png"
                alt="Industry Processing"
                fill
                className="object-cover"
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
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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

      {/* Quotation Form */}
      <QuotationFormSection />

      {/* CTA */}
      <section className="relative py-24 overflow-hidden border-t border-border">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/cta-bg.avif"
            alt="Agricultural Fields"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-background/85" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4 block">
                Let's Grow Together
              </span>
              <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Ready to Source Authentic Indian Products?
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl">
                Partner with Sheesh Exports for reliable supply, competitive pricing, and long-term
                business relationships.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
              <Link
                href="/request-quote"
                className={buttonVariants({
                  size: "lg",
                  className:
                    "bg-foreground text-background hover:bg-foreground/90 font-sans shadow-lg",
                })}
              >
                Request a Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className={buttonVariants({
                  size: "lg",
                  variant: "outline",
                  className: "font-sans bg-transparent",
                })}
              >
                Contact Us
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
