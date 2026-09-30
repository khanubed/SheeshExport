import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema } from "@/lib/seo/breadcrumb";
import { buildFAQSchema } from "@/lib/seo/faq";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_CONFIG } from "@/config/site";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Package, ShieldCheck, Factory } from "lucide-react";
import { FAQSection } from "@/components/shared/FAQSection";

const PRIVATE_LABEL_FAQS = [
  {
    question: "Do you offer custom OEM packaging for spices?",
    answer: "Yes, we specialize in OEM private label manufacturing. We can pack your spices in custom stand-up pouches, glass jars, PET containers, and tin packaging tailored to your brand's specific requirements."
  },
  {
    question: "Can you assist with regulatory labeling and barcode generation?",
    answer: "Absolutely. Our compliance team ensures your labels meet the strict regulatory requirements of your destination market (such as FDA or EU standards) and can assist with EAN/UPC barcode integration."
  },
  {
    question: "What is the Minimum Order Quantity (MOQ) for private label services?",
    answer: "Our MOQ for private label packaging typically depends on the packaging format chosen. Please contact our OEM specialists to discuss specific MOQs for your desired pouches, jars, or tins."
  },
  {
    question: "Which spices and commodities are eligible for private labeling?",
    answer: "We offer private label manufacturing for our entire premium range, including whole spices like Red Chilli, Turmeric, Cumin, Coriander, and Black Pepper, as well as powdered spices and blends."
  }
];

export const metadata: Metadata = buildMetadata({
  title: "Private Label Spice Manufacturing & Packaging India | Sheesh Exports",
  description:
    "Launch your retail spice brand with our OEM private label manufacturing services. We provide custom packaging, regulatory labeling, and export-ready production.",
  pathname: "/services/private-label",
});

export default function PrivateLabelPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Private Label Manufacturing", href: "/services/private-label" },
  ]);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Private Label Spice Manufacturing & Packaging",
    description: "Launch your retail spice brand with our OEM private label manufacturing services. We provide custom packaging, regulatory labeling, and export-ready production.",
    provider: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
    },
    url: `${SITE_CONFIG.url}/services/private-label`,
  };

  const faqSchema = buildFAQSchema(PRIVATE_LABEL_FAQS);

  return (
    <main className="bg-background min-h-screen text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      <JsonLd data={[breadcrumbSchema, serviceSchema, faqSchema]} />
      {/* SECTION 01: HERO */}
      <section className="relative min-h-[70vh] flex flex-col justify-center bg-primary text-primary-foreground">
        <div className="absolute inset-0 ">
          <Image src="/images/services/private-labelling.webp" alt="Premium Retail Spice Packaging" fill className="object-cover" priority />
        </div>
        <div className="absolute inset-0 bg-black/20" />
        
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
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-8xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            {/* The Problem */}
            <div className="bg-card p-10 lg:p-12 border border-border rounded-xl shadow-sm">
              <h3 className="font-heading text-3xl font-semibold text-foreground mb-8">Challenges For Retail Brands</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2.5 mr-4 flex-shrink-0" />
                  <p className="text-lg text-foreground/80 font-sans leading-relaxed"><strong className="font-semibold text-foreground">No Manufacturing:</strong> High capital required to build hygienic, food-safe processing facilities.</p>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2.5 mr-4 flex-shrink-0" />
                  <p className="text-lg text-foreground/80 font-sans leading-relaxed"><strong className="font-semibold text-foreground">No Packaging Line:</strong> Inability to efficiently pack retail quantities (100g - 1kg) at scale.</p>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2.5 mr-4 flex-shrink-0" />
                  <p className="text-lg text-foreground/80 font-sans leading-relaxed"><strong className="font-semibold text-foreground">No Export Expertise:</strong> Struggling to consolidate shipments from multiple small suppliers.</p>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2.5 mr-4 flex-shrink-0" />
                  <p className="text-lg text-foreground/80 font-sans leading-relaxed"><strong className="font-semibold text-foreground">Compliance Risks:</strong> FDA or EU customs rejections due to improper nutritional labeling or barcode formatting.</p>
                </li>
              </ul>
            </div>

            {/* The Solution */}
            <div className="flex flex-col justify-center">
              <h3 className="font-heading text-4xl sm:text-5xl font-semibold text-primary mb-8">How Sheesh Exports Solves Them</h3>
              <ul className="space-y-6">
                <li className="flex items-start group">
                  <Factory className="w-7 h-7 text-secondary mt-0.5 mr-5 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">Turnkey Production</h4>
                    <p className="text-lg text-foreground/80 font-sans leading-relaxed">We utilize our BRC/ISO certified facilities to process and blend products exactly to your specifications.</p>
                  </div>
                </li>
                <li className="flex items-start group">
                  <Package className="w-7 h-7 text-secondary mt-0.5 mr-5 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">Automated Retail Packing</h4>
                    <p className="text-lg text-foreground/80 font-sans leading-relaxed">Form-fill-seal machines directly pack products into your branded pouches, jars, or tins.</p>
                  </div>
                </li>
                <li className="flex items-start group">
                  <ShieldCheck className="w-7 h-7 text-secondary mt-0.5 mr-5 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">Regulatory Compliance</h4>
                    <p className="text-lg text-foreground/80 font-sans leading-relaxed">We ensure all packaging meets the exact nutritional panel and barcode requirements for your destination country.</p>
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
                <Image src="/images/services/standup-pouch-package.webp" alt="Stand-Up Pouches" fill className="object-cover transition-transform duration-700" />
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
                <Image src="/images/services/glass-jars.webp" alt="Glass Jars" fill className="object-cover transition-transform duration-700" />
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
                <Image src="/images/services/pet-containers.webp" alt="PET Containers" fill className="object-cover transition-transform duration-700" />
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
                <Image src="/images/services/tin-container.webp" alt="Tin Packaging" fill className="object-cover transition-transform duration-700" />
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
              <h2 className="font-heading text-4xl sm:text-5xl font-semibold mb-8">
                Regulatory Labeling & Compliance
              </h2>
              <p className="text-xl text-primary-foreground/90 leading-relaxed font-sans mb-10">
                Custom packaging is useless if it gets rejected at customs. Our compliance team ensures your artwork meets the strict food labeling regulations of your destination market before going to print.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                <div>
                  <h4 className="font-heading text-2xl text-secondary font-semibold mb-2">FDA Labels</h4>
                  <p className="text-primary-foreground/90 text-sm leading-relaxed">Compliant formatting for the United States, including specific ingredient declaration rules.</p>
                </div>
                <div>
                  <h4 className="font-heading text-2xl text-secondary font-semibold mb-2">EU Labels</h4>
                  <p className="text-primary-foreground/90 text-sm leading-relaxed">Adherence to European Union allergen highlighting and multilingual requirements.</p>
                </div>
                <div>
                  <h4 className="font-heading text-2xl text-secondary font-semibold mb-2">Nutritional Panels</h4>
                  <p className="text-primary-foreground/90 text-sm leading-relaxed">Accurate macroscopic and microscopic nutritional data calculated per serving size.</p>
                </div>
                <div>
                  <h4 className="font-heading text-2xl text-secondary font-semibold mb-2">Barcodes & Batching</h4>
                  <p className="text-primary-foreground/90 text-sm leading-relaxed">UPC/EAN integration and dynamic inkjet printing for batch numbers and expiry dates.</p>
                </div>
              </div>
            </div>
            
            <div className="relative h-[400px] lg:h-[500px] w-full rounded-xl overflow-hidden shadow-2xl border border-primary-foreground/10 bg-white">
              <Image 
                src="/images/services/label-.webp" 
                alt="Compliant Artwork Example" 
                fill 
                className="object-contain p-6" 
              />
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

      {/* SECTION FAQ */}
      <FAQSection title="Private Label Queries" subtitle="Frequently Asked Questions" faqs={PRIVATE_LABEL_FAQS} />

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
