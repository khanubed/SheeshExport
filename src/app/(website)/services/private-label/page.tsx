import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Package, ShieldCheck, Factory } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Private Label Spice Manufacturing & Packaging India | Sheesh Exports",
  description:
    "Launch your retail spice brand with our OEM private label manufacturing services. We provide custom packaging, regulatory labeling, and export-ready production.",
  pathname: "/services/private-label",
});

export default function PrivateLabelPage() {
  return (
    <main className="bg-background min-h-screen text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      
      {/* SECTION 01: HERO */}
      <section className="relative min-h-[70vh] flex flex-col justify-center bg-primary text-primary-foreground">
        <div className="absolute inset-0 opacity-30 mix-blend-luminosity">
          <Image src="/images/about/factory-processing.jpg" alt="Premium Retail Spice Packaging" fill className="object-cover" priority />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B2F26] via-[#0B2F26]/80 to-transparent" />
        
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-10 pt-24 pb-16">
          <span className="inline-block text-secondary font-semibold tracking-[0.2em] uppercase text-xs mb-8 border-b border-secondary/30 pb-2">
            OEM & Custom Manufacturing
          </span>
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-[1.05] mb-8 max-w-4xl">
            Build Your Spice Brand<br/>Without Building A Factory
          </h1>
          <p className="text-xl sm:text-2xl text-primary-foreground/80 max-w-3xl font-light leading-relaxed font-sans mb-12">
            Private label manufacturing, custom packaging, regulatory labeling and export-ready production for global retail brands.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#formats" className="inline-flex items-center justify-center bg-secondary text-primary px-8 py-4 font-medium tracking-wide hover:bg-secondary/90 transition-colors">
              Explore Packaging Formats
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center border border-primary-foreground/30 text-primary-foreground px-8 py-4 font-medium tracking-wide hover:bg-card/5 transition-colors">
              Request Private Label Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 02: PROBLEM -> SOLUTION */}
      <section className="py-16 lg:py-24 bg-background border-b border-border">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-[1200px]">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            {/* The Problem */}
            <div className="bg-background p-10 lg:p-12 border border-border">
              <h3 className="font-heading text-3xl font-medium text-foreground mb-8">Challenges For Retail Brands</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-muted0 rounded-full mt-2.5 mr-4 flex-shrink-0" />
                  <p className="text-lg text-muted-foreground font-sans font-light"><strong className="font-medium text-foreground">No Manufacturing:</strong> High capital required to build hygienic, food-safe processing facilities.</p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-muted0 rounded-full mt-2.5 mr-4 flex-shrink-0" />
                  <p className="text-lg text-muted-foreground font-sans font-light"><strong className="font-medium text-foreground">No Packaging Line:</strong> Inability to efficiently pack retail quantities (100g - 1kg) at scale.</p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-muted0 rounded-full mt-2.5 mr-4 flex-shrink-0" />
                  <p className="text-lg text-muted-foreground font-sans font-light"><strong className="font-medium text-foreground">No Export Expertise:</strong> Struggling to consolidate shipments from multiple small suppliers.</p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-muted0 rounded-full mt-2.5 mr-4 flex-shrink-0" />
                  <p className="text-lg text-muted-foreground font-sans font-light"><strong className="font-medium text-foreground">Compliance Risks:</strong> FDA or EU customs rejections due to improper nutritional labeling or barcode formatting.</p>
                </li>
              </ul>
            </div>

            {/* The Solution */}
            <div className="flex flex-col justify-center">
              <h3 className="font-heading text-4xl sm:text-5xl font-medium text-primary mb-8">How Sheesh Exports Solves Them</h3>
              <ul className="space-y-6">
                <li className="flex items-start group">
                  <Factory className="w-6 h-6 text-secondary mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-medium text-foreground mb-1 group-hover:text-secondary transition-colors">Turnkey Production</h4>
                    <p className="text-lg text-muted-foreground font-sans font-light">We utilize our BRC/ISO certified facilities to process and blend products exactly to your specifications.</p>
                  </div>
                </li>
                <li className="flex items-start group">
                  <Package className="w-6 h-6 text-secondary mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-medium text-foreground mb-1 group-hover:text-secondary transition-colors">Automated Retail Packing</h4>
                    <p className="text-lg text-muted-foreground font-sans font-light">Form-fill-seal machines directly pack products into your branded pouches, jars, or tins.</p>
                  </div>
                </li>
                <li className="flex items-start group">
                  <ShieldCheck className="w-6 h-6 text-secondary mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-medium text-foreground mb-1 group-hover:text-secondary transition-colors">Regulatory Compliance</h4>
                    <p className="text-lg text-muted-foreground font-sans font-light">We ensure all packaging meets the exact nutritional panel and barcode requirements for your destination country.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03: PACKAGING FORMATS GALLERY */}
      <section id="formats" className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-[1400px]">
          <h2 className="font-heading text-4xl sm:text-5xl font-medium text-primary mb-16 text-center">
            Retail Packaging Formats
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Format 1 */}
            <div className="bg-card border border-border group">
              <div className="relative h-[300px] w-full bg-muted overflow-hidden">
                <Image src="/images/about/factory-processing.jpg" alt="Stand-Up Pouches" fill className="object-cover grayscale mix-blend-multiply group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8">
                <h3 className="font-heading text-2xl font-medium text-foreground mb-4">Stand-Up Pouches</h3>
                <p className="text-muted-foreground font-sans font-light mb-6">Resealable zip-lock pouches (100g - 1kg). Excellent barrier properties for whole and grounded spices.</p>
                <div className="border-t border-border pt-4 flex justify-between items-center text-sm font-medium">
                  <span className="text-muted-foreground font-sans uppercase tracking-wider">MOQ</span>
                  <span className="text-primary">5,000 Units</span>
                </div>
              </div>
            </div>

            {/* Format 2 */}
            <div className="bg-card border border-border group">
              <div className="relative h-[300px] w-full bg-muted overflow-hidden">
                <Image src="/images/about/infra-warehouse.jpg" alt="Glass Jars" fill className="object-cover grayscale mix-blend-multiply group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8">
                <h3 className="font-heading text-2xl font-medium text-foreground mb-4">Glass Jars</h3>
                <p className="text-muted-foreground font-sans font-light mb-6">Premium retail presentation with grinder caps or shaker lids (50g - 250g). Perfect for supermarket shelves.</p>
                <div className="border-t border-border pt-4 flex justify-between items-center text-sm font-medium">
                  <span className="text-muted-foreground font-sans uppercase tracking-wider">MOQ</span>
                  <span className="text-primary">10,000 Units</span>
                </div>
              </div>
            </div>

            {/* Format 3 */}
            <div className="bg-card border border-border group">
              <div className="relative h-[300px] w-full bg-muted overflow-hidden">
                <Image src="/images/about/vision.jpg" alt="PET Containers" fill className="object-cover grayscale mix-blend-multiply group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8">
                <h3 className="font-heading text-2xl font-medium text-foreground mb-4">PET Containers</h3>
                <p className="text-muted-foreground font-sans font-light mb-6">Lightweight, shatterproof transparent jars with flapper caps. High durability for international transit.</p>
                <div className="border-t border-border pt-4 flex justify-between items-center text-sm font-medium">
                  <span className="text-muted-foreground font-sans uppercase tracking-wider">MOQ</span>
                  <span className="text-primary">10,000 Units</span>
                </div>
              </div>
            </div>

            {/* Format 4 */}
            <div className="bg-card border border-border group">
              <div className="relative h-[300px] w-full bg-muted overflow-hidden">
                <Image src="/images/about/mission.jpg" alt="Tin Packaging" fill className="object-cover grayscale mix-blend-multiply group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8">
                <h3 className="font-heading text-2xl font-medium text-foreground mb-4">Tin Packaging</h3>
                <p className="text-muted-foreground font-sans font-light mb-6">Luxury packaging for premium organic lines or gifting segments. Absolute barrier against light and moisture.</p>
                <div className="border-t border-border pt-4 flex justify-between items-center text-sm font-medium">
                  <span className="text-muted-foreground font-sans uppercase tracking-wider">MOQ</span>
                  <span className="text-primary">Custom</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 04: BRANDING PROCESS */}
      <section className="py-16 lg:py-24 bg-background border-y border-border">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-[1400px]">
          <h2 className="font-heading text-4xl sm:text-5xl font-medium text-primary mb-16 text-center">
            The Private Label Process
          </h2>
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-foreground">
            <div className="flex flex-col items-center text-center max-w-[150px]">
              <div className="w-16 h-16 rounded-full border border-secondary flex items-center justify-center font-heading text-2xl font-medium mb-4 bg-background">1</div>
              <h4 className="font-medium">Brand Brief</h4>
            </div>
            <ArrowRight className="hidden lg:block w-6 h-6 text-foreground/20" />
            <ArrowRight className="lg:hidden w-6 h-6 text-foreground/20 rotate-90 my-2" />
            
            <div className="flex flex-col items-center text-center max-w-[150px]">
              <div className="w-16 h-16 rounded-full border border-secondary flex items-center justify-center font-heading text-2xl font-medium mb-4 bg-background">2</div>
              <h4 className="font-medium">Artwork Review</h4>
            </div>
            <ArrowRight className="hidden lg:block w-6 h-6 text-foreground/20" />
            <ArrowRight className="lg:hidden w-6 h-6 text-foreground/20 rotate-90 my-2" />

            <div className="flex flex-col items-center text-center max-w-[150px]">
              <div className="w-16 h-16 rounded-full border border-secondary flex items-center justify-center font-heading text-2xl font-medium mb-4 bg-background">3</div>
              <h4 className="font-medium">Packaging Approval</h4>
            </div>
            <ArrowRight className="hidden lg:block w-6 h-6 text-foreground/20" />
            <ArrowRight className="lg:hidden w-6 h-6 text-foreground/20 rotate-90 my-2" />

            <div className="flex flex-col items-center text-center max-w-[150px]">
              <div className="w-16 h-16 rounded-full border border-secondary flex items-center justify-center font-heading text-2xl font-medium mb-4 bg-background">4</div>
              <h4 className="font-medium">Production</h4>
            </div>
            <ArrowRight className="hidden lg:block w-6 h-6 text-foreground/20" />
            <ArrowRight className="lg:hidden w-6 h-6 text-foreground/20 rotate-90 my-2" />

            <div className="flex flex-col items-center text-center max-w-[150px]">
              <div className="w-16 h-16 rounded-full border border-secondary flex items-center justify-center font-heading text-2xl font-medium mb-4 bg-background">5</div>
              <h4 className="font-medium">Quality Testing</h4>
            </div>
            <ArrowRight className="hidden lg:block w-6 h-6 text-foreground/20" />
            <ArrowRight className="lg:hidden w-6 h-6 text-foreground/20 rotate-90 my-2" />

            <div className="flex flex-col items-center text-center max-w-[150px]">
              <div className="w-16 h-16 rounded-full border bg-primary text-primary-foreground flex items-center justify-center font-heading text-2xl font-medium mb-4">6</div>
              <h4 className="font-medium text-primary">Export & Delivery</h4>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 05: REGULATORY LABELING (SEO SECTION) */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-[1200px]">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-4xl sm:text-5xl font-medium mb-8">
                Regulatory Labeling & Compliance
              </h2>
              <p className="text-xl text-primary-foreground/80 font-light leading-relaxed font-sans mb-10">
                Custom packaging is useless if it gets rejected at customs. Our compliance team ensures your artwork meets the strict food labeling regulations of your destination market before going to print.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                <div>
                  <h4 className="font-heading text-2xl text-secondary mb-2">FDA Labels</h4>
                  <p className="text-primary-foreground/70 font-light text-sm">Compliant formatting for the United States, including specific ingredient declaration rules.</p>
                </div>
                <div>
                  <h4 className="font-heading text-2xl text-secondary mb-2">EU Labels</h4>
                  <p className="text-primary-foreground/70 font-light text-sm">Adherence to European Union allergen highlighting and multilingual requirements.</p>
                </div>
                <div>
                  <h4 className="font-heading text-2xl text-secondary mb-2">Nutritional Panels</h4>
                  <p className="text-primary-foreground/70 font-light text-sm">Accurate macroscopic and microscopic nutritional data calculated per serving size.</p>
                </div>
                <div>
                  <h4 className="font-heading text-2xl text-secondary mb-2">Barcodes & Batching</h4>
                  <p className="text-primary-foreground/70 font-light text-sm">UPC/EAN integration and dynamic inkjet printing for batch numbers and expiry dates.</p>
                </div>
              </div>
            </div>
            
            <div className="relative h-[500px] bg-card/5 border border-primary-foreground/10 p-10 flex flex-col justify-center shadow-2xl">
              <div className="space-y-6 opacity-70">
                <div className="h-4 bg-card/20 w-1/3 rounded" />
                <div className="h-12 bg-card/10 w-3/4 rounded" />
                <div className="flex gap-4">
                  <div className="h-32 bg-card/10 w-1/2 rounded" />
                  <div className="h-32 bg-card/10 w-1/2 rounded" />
                </div>
                <div className="h-8 bg-card/20 w-1/4 rounded mt-8" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-secondary text-primary px-6 py-3 font-medium tracking-widest uppercase text-sm">
                  Compliant Artwork Approved
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 06: PRODUCT ELIGIBILITY */}
      <section className="py-16 lg:py-24 bg-background border-b border-border">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-[1200px]">
          <h2 className="font-heading text-4xl sm:text-5xl font-medium text-primary mb-12 text-center">
            Eligible Commodities For Private Label
          </h2>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-2xl font-heading font-medium tracking-wide">
            <Link href="/products/whole-spices/red-chilli" className="px-6 py-4 border border-border hover:border-secondary hover:text-secondary transition-colors">Red Chilli</Link>
            <Link href="/products/whole-spices/turmeric" className="px-6 py-4 border border-border hover:border-secondary hover:text-secondary transition-colors">Turmeric</Link>
            <Link href="/products/whole-spices/cumin" className="px-6 py-4 border border-border hover:border-secondary hover:text-secondary transition-colors">Cumin</Link>
            <Link href="/products/whole-spices/coriander" className="px-6 py-4 border border-border hover:border-secondary hover:text-secondary transition-colors">Coriander</Link>
            <Link href="/products/whole-spices/black-pepper" className="px-6 py-4 border border-border hover:border-secondary hover:text-secondary transition-colors">Black Pepper</Link>
          </div>
        </div>
      </section>

      {/* SECTION 07: CTA */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-4xl text-center">
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-medium text-primary mb-8">
            Ready To Launch Your Retail Brand?
          </h2>
          <p className="text-xl text-muted-foreground font-sans font-light mb-10 max-w-2xl mx-auto">
            Contact our OEM specialists to discuss minimum order quantities, packaging formats, and formulation requirements.
          </p>
          <div className="flex flex-col justify-center items-center gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center bg-primary text-primary-foreground px-10 py-5 font-medium tracking-wide w-full sm:w-auto hover:bg-primary/90 transition-colors">
              Request Private Label Consultation
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
