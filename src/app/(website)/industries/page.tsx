import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, Globe, TrendingUp, Anchor, MoveRight, MapPin } from "lucide-react";
import { INDUSTRIES_DATA } from "@/lib/data/industries";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Global Procurement Ecosystem | Sheesh Exports",
  description: "Supporting importers, food manufacturers, distributors, retail brands, and hospitality groups with export-grade agricultural commodities from India.",
  pathname: "/industries",
});

export default function IndustriesHubPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Global Procurement Network - Sheesh Exports",
    "description": "Supply Chain Solutions For Global Food & Ingredient Businesses.",
    "url": "https://sheeshexports.com/industries"
  };

  return (
    <main className="bg-background min-h-screen text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      <JsonLd data={schema} />

      {/* SECTION 1 — MASSIVE EDITORIAL HERO */}
      <section className="relative h-screen flex flex-col justify-end pb-12 lg:pb-24 border-b border-border overflow-hidden">
        <Image
          src="/images/about/global-delivery.webp"
          alt="Global Trade and Shipping"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20"></div>

        <div className="container relative z-10 mx-auto px-6 sm:px-12 lg:px-24 max-w-8xl">
          <div className="max-w-6xl">
            <span className="inline-block text-primary font-bold tracking-[0.2em] uppercase text-xs mb-8 border-b border-primary pb-2">
              Global Procurement Network
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[6.5rem] font-semibold tracking-tighter text-white leading-[0.9] mb-8  drop-shadow-lg">
              Serving the<br/>Businesses<br/>That Move Food.
            </h1>
            <p className="text-xl md:text-2xl text-white/80 font-sans max-w-3xl font-light leading-relaxed">
              We execute complex agricultural supply chains for international markets. From industrial ingredients to retail-ready private label packaging.
            </p>
          </div>
        </div>
      </section>

      {/* TICKER / SECTOR LIST */}
      <section className="bg-primary text-primary-foreground border-b border-border py-6 overflow-hidden">
        <div className="container mx-auto px-6 max-w-8xl flex flex-wrap gap-x-12 gap-y-4 text-sm md:text-base font-bold tracking-widest uppercase opacity-80">
          <span>Food Manufacturers</span>
          <span className="hidden sm:inline">•</span>
          <span>Importers</span>
          <span className="hidden sm:inline">•</span>
          <span>Distributors</span>
          <span className="hidden sm:inline">•</span>
          <span>Retail Brands</span>
          <span className="hidden sm:inline">•</span>
          <span>HORECA</span>
          <span className="hidden sm:inline">•</span>
          <span>Ingredient Processors</span>
        </div>
      </section>

      {/* SECTION 2 — THE INDUSTRY LANDSCAPE (Editorial Index) */}
      <section className="py-24 lg:py-32 bg-background border-b border-border">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-8xl">
          <div className="mb-20">
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-[10px] mb-6 block">01 / Industry Index</span>
            <h2 className="font-heading text-4xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
              Sector Capabilities
            </h2>
          </div>

          <div className="border-t border-border flex flex-col">
            {INDUSTRIES_DATA.map((industry) => (
              <Link 
                key={industry.id} 
                href={`/industries/${industry.slug}`}
                className="group flex flex-col lg:flex-row lg:items-center justify-between py-12 border-b border-border hover:bg-muted/30 transition-colors px-4 -mx-4 lg:px-8 lg:-mx-8"
              >
                <div className="lg:w-1/3 mb-4 lg:mb-0">
                  <h3 className="font-heading text-2xl lg:text-3xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                    {industry.name}
                  </h3>
                </div>
                <div className="lg:w-1/2 mb-6 lg:mb-0 pr-4">
                  <p className="text-muted-foreground font-sans text-xl font-light leading-relaxed">
                    {industry.shortDescription}
                  </p>
                </div>
                <div className="lg:w-auto flex items-center justify-end">
                  <span className="font-bold uppercase tracking-widest text-xs text-foreground group-hover:text-secondary transition-colors flex items-center">
                    [ Explore Market ] <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — GLOBAL PROCUREMENT ECOSYSTEM (Diagram) */}
      <section className="py-24 lg:py-32 bg-muted/20 border-b border-border overflow-hidden">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-8xl text-center">
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-[10px] mb-6 block">02 / Trade Architecture</span>
          <h2 className="font-heading text-4xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-24">
            The Procurement Ecosystem
          </h2>

          <div className="max-w-6xl mx-auto flex flex-col items-center">
            <figure className="relative w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl mb-8" style={{ position: "relative" }}>
              <Image 
                src="/images/procurement-ecosystem.jpg" 
                alt="Global Trade Supply Chain Network radiating from India" 
                fill 
                sizes="(max-width: 1024px) 100vw, 80vw" 
                className="object-cover"
              />
              <figcaption className="sr-only">Global Trade Supply Chain Network radiating from India</figcaption>
            </figure>
            <p className="text-muted-foreground font-sans text-sm md:text-base max-w-2xl mx-auto">
              A robust, streamlined flow of premium agricultural commodities—from the rich soils of India directly to manufacturers, retail brands, and the hospitality sector across 50+ global destinations.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4 — HOW DIFFERENT INDUSTRIES BUY */}
      <section className="py-24 lg:py-32 bg-background border-b border-border">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-8xl">
          <div className="mb-20">
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-[10px] mb-6 block">03 / Sourcing Models</span>
            <h2 className="font-heading text-4xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
              Procurement Architectures
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
            <div className="border-t border-border pt-8">
              <h4 className="font-heading text-3xl font-bold text-primary mb-6">Food Manufacturing</h4>
              <ul className="space-y-4 text-xl font-light text-muted-foreground">
                <li className="flex items-center"><ChevronRight className="w-5 h-5 mr-3 text-secondary" /> Strict Specification Tolerance</li>
                <li className="flex items-center"><ChevronRight className="w-5 h-5 mr-3 text-secondary" /> High-Volume Contract Structures</li>
                <li className="flex items-center"><ChevronRight className="w-5 h-5 mr-3 text-secondary" /> Industrial Bulk Packaging</li>
              </ul>
            </div>
            
            <div className="border-t border-border pt-8">
              <h4 className="font-heading text-3xl font-bold text-primary mb-6">Retail & Private Label</h4>
              <ul className="space-y-4 text-xl font-light text-muted-foreground">
                <li className="flex items-center"><ChevronRight className="w-5 h-5 mr-3 text-secondary" /> Custom Brand Packaging</li>
                <li className="flex items-center"><ChevronRight className="w-5 h-5 mr-3 text-secondary" /> Label & Nutritional Compliance</li>
                <li className="flex items-center"><ChevronRight className="w-5 h-5 mr-3 text-secondary" /> Ready-to-Shelf Formatting</li>
              </ul>
            </div>

            <div className="border-t border-border pt-8">
              <h4 className="font-heading text-3xl font-bold text-primary mb-6">Import & Distribution</h4>
              <div className="space-y-4 text-xl font-light text-muted-foreground">
                <li className="flex items-center"><ChevronRight className="w-5 h-5 mr-3 text-secondary" /> Multi-Commodity Consolidation</li>
                <li className="flex items-center"><ChevronRight className="w-5 h-5 mr-3 text-secondary" /> Container Load Optimization (FCL/LCL)</li>
                <li className="flex items-center"><ChevronRight className="w-5 h-5 mr-3 text-secondary" /> Inventory Replenishment Cycles</li>
              </div>
            </div>

            <div className="border-t border-border pt-8">
              <h4 className="font-heading text-3xl font-bold text-primary mb-6">HORECA & Foodservice</h4>
              <ul className="space-y-4 text-xl font-light text-muted-foreground">
                <li className="flex items-center"><ChevronRight className="w-5 h-5 mr-3 text-secondary" /> Commercial Kitchen Tubs & Pails</li>
                <li className="flex items-center"><ChevronRight className="w-5 h-5 mr-3 text-secondary" /> Consistent Sensory Profiles</li>
                <li className="flex items-center"><ChevronRight className="w-5 h-5 mr-3 text-secondary" /> Fast Delivery Schedules</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — INDUSTRY PROCUREMENT STORIES */}
      <section className="py-24 lg:py-32 bg-muted/30 border-b border-border">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-8xl">
          <div className="mb-20">
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-[10px] mb-6 block">04 / Execution Workflows</span>
            <h2 className="font-heading text-4xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
              How Supply Chains Move
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-20">
            {/* Story 1 */}
            <div>
              <span className="block font-heading text-2xl font-bold text-primary mb-12">Industrial Extraction Model</span>
              <div className="space-y-8 relative before:absolute before:inset-y-0 before:left-3 before:w-px before:bg-border">
                <div className="relative pl-12">
                  <div className="absolute left-0 top-1.5 w-6 h-6 bg-background border-2 border-primary rounded-full z-10"></div>
                  <strong className="block font-heading text-xl text-foreground">Sourcing</strong>
                  <p className="text-muted-foreground font-sans">Farm-level procurement of high-curcumin turmeric.</p>
                </div>
                <div className="relative pl-12">
                  <div className="absolute left-0 top-1.5 w-6 h-6 bg-background border-2 border-border rounded-full z-10"></div>
                  <strong className="block font-heading text-xl text-foreground">Validation</strong>
                  <p className="text-muted-foreground font-sans">Lab testing for alkaloid content and pesticide limits.</p>
                </div>
                <div className="relative pl-12">
                  <div className="absolute left-0 top-1.5 w-6 h-6 bg-background border-2 border-border rounded-full z-10"></div>
                  <strong className="block font-heading text-xl text-foreground">Processing</strong>
                  <p className="text-muted-foreground font-sans">Milling to precise mesh specifications for extraction efficiency.</p>
                </div>
                <div className="relative pl-12">
                  <div className="absolute left-0 top-1.5 w-6 h-6 bg-background border-2 border-secondary rounded-full z-10"></div>
                  <strong className="block font-heading text-xl text-foreground">Export</strong>
                  <p className="text-muted-foreground font-sans">Bulk loading and container dispatch to European facility.</p>
                </div>
              </div>
            </div>

            {/* Story 2 */}
            <div>
              <span className="block font-heading text-2xl font-bold text-primary mb-12">Retail Private Label Model</span>
              <div className="space-y-8 relative before:absolute before:inset-y-0 before:left-3 before:w-px before:bg-border">
                <div className="relative pl-12">
                  <div className="absolute left-0 top-1.5 w-6 h-6 bg-background border-2 border-primary rounded-full z-10"></div>
                  <strong className="block font-heading text-xl text-foreground">Origin Selection</strong>
                  <p className="text-muted-foreground font-sans">Identifying premium whole spices for visual shelf appeal.</p>
                </div>
                <div className="relative pl-12">
                  <div className="absolute left-0 top-1.5 w-6 h-6 bg-background border-2 border-border rounded-full z-10"></div>
                  <strong className="block font-heading text-xl text-foreground">Design & Compliance</strong>
                  <p className="text-muted-foreground font-sans">Adapting client artwork and ensuring FDA nutritional labeling.</p>
                </div>
                <div className="relative pl-12">
                  <div className="absolute left-0 top-1.5 w-6 h-6 bg-background border-2 border-border rounded-full z-10"></div>
                  <strong className="block font-heading text-xl text-foreground">OEM Packaging</strong>
                  <p className="text-muted-foreground font-sans">Automated filling into 250g retail pouches.</p>
                </div>
                <div className="relative pl-12">
                  <div className="absolute left-0 top-1.5 w-6 h-6 bg-background border-2 border-secondary rounded-full z-10"></div>
                  <strong className="block font-heading text-xl text-foreground">Fulfillment</strong>
                  <p className="text-muted-foreground font-sans">Palletized shipping directly to US supermarket distribution center.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — MASSIVE NUMBERS */}
      <section className="py-24 lg:py-40 bg-foreground text-background border-b border-border">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-8xl text-center">
          <div className="grid lg:grid-cols-3 gap-16 md:gap-8">
            <div className="flex flex-col items-center">
              <span className="font-heading text-6xl sm:text-7xl md:text-9xl font-bold text-primary leading-none tracking-tighter mb-4">50+</span>
              <span className="text-xl md:text-2xl font-bold uppercase tracking-widest text-background/80">Export Countries</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-heading text-6xl sm:text-7xl md:text-9xl font-bold text-secondary leading-none tracking-tighter mb-4">100+</span>
              <span className="text-xl md:text-2xl font-bold uppercase tracking-widest text-background/80">Product Variants</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-heading text-6xl sm:text-7xl md:text-9xl font-bold text-white leading-none tracking-tighter mb-4">100<span className="text-4xl md:text-7xl">%</span></span>
              <span className="text-xl md:text-2xl font-bold uppercase tracking-widest text-background/80">Export Focused</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — EDITORIAL CTA */}
      <section className="py-32 bg-background border-b border-border">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-8xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-4xl md:text-6xl font-bold tracking-tighter leading-[1.1] mb-8 text-foreground">
              Let's Discuss Your Supply Chain Requirements.
            </h2>
            <p className="text-2xl text-muted-foreground font-light font-sans mb-12">
              Connect with our export operations desk to establish a reliable procurement framework for your market.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/request-quote" className="inline-flex items-center justify-center bg-secondary text-primary px-12 py-6 font-bold tracking-widest uppercase text-sm hover:bg-secondary/90 transition-colors">
                Initiate Procurement
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center border border-border px-12 py-6 font-bold tracking-widest uppercase text-sm hover:bg-muted transition-colors">
                Contact Desk
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
