import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowDown, FileText, Download, ShieldCheck, Microscope, Database, CheckCircle2 } from "lucide-react";
import { FAQSection } from "@/components/shared/FAQSection";

export const metadata: Metadata = buildMetadata({
  title: "Quality Assurance & Laboratory Testing Standards | Sheesh Exports",
  description:
    "Explore our rigorous export quality control system including aflatoxin testing, moisture control, sortex cleaning, and international food safety compliance.",
  pathname: "/quality",
});

const QUALITY_FLOW = [
  { step: "Farm Sourcing", desc: "Rigorous supplier qualification & soil evaluation." },
  { step: "Incoming Inspection", desc: "Raw material moisture & visual purity checks." },
  { step: "Cleaning", desc: "Multi-stage mechanical & aspiration cleaning." },
  { step: "Sorting", desc: "Advanced optical and color sortex machines." },
  { step: "Laboratory Testing", desc: "SGS / Eurofins accredited sample analysis." },
  { step: "Quality Approval", desc: "Final release against buyer specifications." },
  { step: "Packaging", desc: "Hygienic, food-grade automated packing lines." },
  { step: "Container Loading", desc: "Fumigation & strict stuffing supervision." },
  { step: "Export", desc: "Customs clearance with full QA documentation." }
];

const TESTING_PARAMETERS = [
  { param: "Moisture", reason: "Shelf Life & Storage Stability", detail: "Prevents fungal growth and ensures long-term viability during sea transit." },
  { param: "Aflatoxin", reason: "Food Safety Compliance", detail: "Strict limits maintained to clear stringent EU and USA customs regulations." },
  { param: "Foreign Matter", reason: "Product Purity", detail: "Optical sorting eliminates stones, stems, and non-target seeds." },
  { param: "Pesticide Residue", reason: "Regulatory Compliance", detail: "Screening against international Maximum Residue Limits (MRLs)." },
  { param: "Microbiology", reason: "Consumer Safety", detail: "Testing for Salmonella, E. coli, and total plate counts." },
  { param: "Heavy Metals", reason: "Export Requirements", detail: "Lead, Cadmium, and Arsenic testing for high-compliance markets." },
];

export default function QualityPage() {
  return (
    <main className="bg-background min-h-screen text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      
      {/* SECTION 01: HERO */}
      <section className="relative min-h-[60vh] flex flex-col lg:flex-row items-center border-b border-border">
        <div className="w-full lg:w-[60%] px-6 sm:px-12 lg:px-24 py-12 lg:py-20 flex flex-col justify-center">
          <span className="inline-block text-foreground font-semibold tracking-[0.2em] uppercase text-xs mb-8 border-b border-secondary pb-2 max-w-max">
            Food Safety & Export Compliance System
          </span>
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-medium text-primary leading-[1.05] mb-8">
            Quality Is Built Into Every Shipment, Not Inspected At The End
          </h1>
          <p className="text-xl text-muted-foreground font-sans max-w-2xl font-light leading-relaxed font-sans mb-12">
            From sourcing and cleaning to laboratory testing, packaging and export documentation, every batch undergoes rigorous quality verification before shipment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#standards" className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 font-medium tracking-wide hover:bg-primary/90 transition-colors">
              View Testing Standards
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center border border-[#0B2F26] text-primary px-8 py-4 font-medium tracking-wide hover:bg-primary/5 transition-colors">
              Request Product Specifications
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-[40%] h-[40vh] lg:h-[60vh] relative">
          <Image src="/images/about/quality-assurance.webp" alt="Laboratory testing of spices and agro commodities" fill className="object-cover" priority />
        </div>
      </section>

      {/* SECTION 02: OUR QUALITY APPROACH */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-[1400px]">
          <div className="grid lg:grid-cols-[60%_40%] gap-12 lg:gap-16 items-start">
            <div>
              <h2 className="font-heading text-4xl sm:text-5xl font-medium text-primary leading-[1.1] mb-8">
                Our Quality Approach
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground font-sans font-light leading-relaxed font-sans editorial-content">
                <p>
                  Quality assurance in international trade cannot be reactionary. At Sheesh Exports, our quality intelligence framework is deeply embedded into our procurement and processing architecture. We operate on a strict preventative protocol rather than a corrective one.
                </p>
                <p>
                  <strong className="text-foreground font-medium block mb-1">Supplier Qualification & Farm Selection</strong>
                  Raw material integrity dictates final product quality. We evaluate our agrarian network based on soil health, harvesting practices, and historic moisture-retention data.
                </p>
                <p>
                  <strong className="text-foreground font-medium block mb-1">Batch Traceability & Laboratory Analysis</strong>
                  Every inbound lot is barcoded, traced, and quarantined until initial laboratory clearance is achieved. We utilize advanced chromatography and spectrometry to identify deviations before processing begins.
                </p>
                <p>
                  <strong className="text-foreground font-medium block mb-1">Shipment Verification</strong>
                  No container is sealed without a matching Certificate of Analysis (CoA) that directly aligns with the buyer's localized import regulations and technical specifications.
                </p>
              </div>
            </div>
            <div className="relative h-full min-h-[400px] bg-background">
              <Image src="/images/about/factory-processing.jpg" alt="Quality Inspection" fill className="object-cover grayscale-[20%]" />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03: FARM TO SHIPMENT QA PROCESS */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-[1400px]">
          <h2 className="font-heading text-4xl sm:text-5xl font-medium text-[#F7F5F0] mb-4 text-center">
            Farm to Shipment QA Process
          </h2>
          <p className="text-center text-secondary uppercase tracking-widest text-sm font-medium mb-16">Standard Operating Procedure</p>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {QUALITY_FLOW.map((item, idx) => (
              <div key={idx} className="relative group">
                <div className="mb-4">
                  <span className="text-secondary font-heading font-bold text-5xl ">0{idx + 1}</span>
                </div>
                <h4 className="font-heading text-xl font-medium mb-2">{item.step}</h4>
                <p className="text-primary-foreground/60 font-light text-sm leading-relaxed">{item.desc}</p>
                
                {/* Visual Connector for large screens */}
                {idx < QUALITY_FLOW.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-6 -right-6 w-6 h-6 text-secondary/50" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 04: LABORATORY & TESTING */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-[1400px]">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative h-[500px] lg:h-[700px] w-full">
              <Image src="/images/about/infra-testing.jpeg" alt="Laboratory Analysis" fill className="object-cover" />
            </div>
            <div>
              <h2 className="font-heading text-4xl sm:text-5xl font-medium text-primary mb-8">
                Laboratory Analysis & Product Verification
              </h2>
              <p className="text-lg text-muted-foreground font-sans font-light leading-relaxed font-sans mb-10">
                To guarantee absolute compliance with ASTA, ESA, and FSSAI standards, our in-house and third-party laboratory partners perform exhaustive analytical testing on every single export batch.
              </p>
              
              <div className="space-y-6">
                <div className="border-l-2 border-secondary pl-6 py-1">
                  <h4 className="font-medium text-foreground text-lg mb-1">Aflatoxin & Mycotoxin Testing</h4>
                  <p className="text-muted-foreground font-sans font-light text-sm">Critical for European markets; utilizing HPLC to ensure levels remain strictly below required ppb limits.</p>
                </div>
                <div className="border-l-2 border-secondary pl-6 py-1">
                  <h4 className="font-medium text-foreground text-lg mb-1">Microbiological Testing</h4>
                  <p className="text-muted-foreground font-sans font-light text-sm">Screening for E. coli, Salmonella, Yeast, and Mold to guarantee absolute consumer safety.</p>
                </div>
                <div className="border-l-2 border-secondary pl-6 py-1">
                  <h4 className="font-medium text-foreground text-lg mb-1">Physicochemical Analysis</h4>
                  <p className="text-muted-foreground font-sans font-light text-sm">Validating moisture content, total ash, acid-insoluble ash, and volatile oil percentages.</p>
                </div>
                <div className="border-l-2 border-secondary pl-6 py-1">
                  <h4 className="font-medium text-foreground text-lg mb-1">Pesticide Residue & Heavy Metals</h4>
                  <p className="text-muted-foreground font-sans font-light text-sm">Gas Chromatography used to ensure MRL compliance and zero presence of unauthorized chemicals.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 05: TESTING PARAMETERS */}
      <section id="standards" className="py-16 lg:py-24 bg-background border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-24 max-w-[1200px]">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-medium text-primary mb-10 lg:mb-12">
            Standard Testing Parameters
          </h2>
          
          {/* Responsive Table View */}
          <div className="w-full">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="border-b-2 border-[#1E1E1E] py-3 md:py-4 px-2 md:px-4 font-heading text-sm sm:text-base md:text-xl font-medium text-primary w-[25%] align-bottom">Parameter</th>
                  <th className="border-b-2 border-[#1E1E1E] py-3 md:py-4 px-2 md:px-4 font-heading text-sm sm:text-base md:text-xl font-medium text-primary w-[30%] align-bottom">Why It Matters</th>
                  <th className="border-b-2 border-[#1E1E1E] py-3 md:py-4 px-2 md:px-4 font-heading text-sm sm:text-base md:text-xl font-medium text-primary w-[45%] align-bottom">Technical Implication</th>
                </tr>
              </thead>
              <tbody className="text-xs sm:text-sm md:text-base text-muted-foreground font-sans font-light">
                {TESTING_PARAMETERS.map((row, idx) => (
                  <tr key={idx} className="border-b border-border hover:bg-background/50 transition-colors">
                    <td className="py-4 md:py-5 px-2 md:px-4 font-medium text-foreground align-top leading-snug">{row.param}</td>
                    <td className="py-4 md:py-5 px-2 md:px-4 font-medium text-primary align-top leading-snug">{row.reason}</td>
                    <td className="py-4 md:py-5 px-2 md:px-4 leading-relaxed align-top">{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 06: PRODUCT QUALITY STANDARDS */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-[1200px]">
          <h2 className="font-heading text-4xl sm:text-5xl font-medium text-primary mb-12">
            Product Quality Standards
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-card border border-border p-8 shadow-sm group hover:border-secondary transition-colors">
              <Link href="/products/whole-spices/red-chilli">
                <h3 className="font-heading text-3xl font-medium text-foreground mb-6 group-hover:text-primary transition-colors">Red Chilli</h3>
              </Link>
              <ul className="space-y-4 text-base text-muted-foreground font-sans font-light">
                <li className="flex justify-between border-b border-border pb-2"><span>Moisture</span> <span className="font-medium">≤ 11%</span></li>
                <li className="flex justify-between border-b border-border pb-2"><span>Purity</span> <span className="font-medium">≥ 99%</span></li>
                <li className="flex justify-between border-b border-border pb-2"><span>Aflatoxin</span> <span className="font-medium">Controlled</span></li>
                <li className="flex justify-between border-b border-border pb-2"><span>Color Value</span> <span className="font-medium">Graded (ASTA)</span></li>
              </ul>
            </div>
            
            <div className="bg-card border border-border p-8 shadow-sm group hover:border-secondary transition-colors">
              <Link href="/products/whole-spices/turmeric">
                <h3 className="font-heading text-3xl font-medium text-foreground mb-6 group-hover:text-primary transition-colors">Turmeric</h3>
              </Link>
              <ul className="space-y-4 text-base text-muted-foreground font-sans font-light">
                <li className="flex justify-between border-b border-border pb-2"><span>Curcumin</span> <span className="font-medium">Standardized</span></li>
                <li className="flex justify-between border-b border-border pb-2"><span>Moisture</span> <span className="font-medium">Controlled</span></li>
                <li className="flex justify-between border-b border-border pb-2"><span>Appearance</span> <span className="font-medium">Color Consistent</span></li>
                <li className="flex justify-between border-b border-border pb-2"><span>Extraneous Matter</span> <span className="font-medium">≤ 1%</span></li>
              </ul>
            </div>

            <div className="bg-card border border-border p-8 shadow-sm group hover:border-secondary transition-colors">
              <Link href="/products/whole-spices/cumin">
                <h3 className="font-heading text-3xl font-medium text-foreground mb-6 group-hover:text-primary transition-colors">Cumin</h3>
              </Link>
              <ul className="space-y-4 text-base text-muted-foreground font-sans font-light">
                <li className="flex justify-between border-b border-border pb-2"><span>Volatile Oil</span> <span className="font-medium">High Content</span></li>
                <li className="flex justify-between border-b border-border pb-2"><span>Purity</span> <span className="font-medium">Machine Cleaned</span></li>
                <li className="flex justify-between border-b border-border pb-2"><span>Moisture</span> <span className="font-medium">Strict Limits</span></li>
                <li className="flex justify-between border-b border-border pb-2"><span>Total Ash</span> <span className="font-medium">Regulated</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 07: FOOD SAFETY & HYGIENE */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-[1400px]">
          <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <h2 className="font-heading text-4xl sm:text-5xl font-medium text-primary mb-8">
                Food Safety & Hygiene Protocols
              </h2>
              <p className="text-lg text-muted-foreground font-sans font-light leading-relaxed font-sans mb-10">
                A pristine processing environment is the foundation of quality. Our facilities strictly implement global Good Manufacturing Practices (GMP).
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium text-foreground text-lg mb-2">Controlled Storage</h4>
                  <p className="text-muted-foreground font-sans font-light text-sm">Temperature and humidity monitored warehousing preventing degradation.</p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground text-lg mb-2">Batch Identification</h4>
                  <p className="text-muted-foreground font-sans font-light text-sm">Digital tagging ensuring instant backward and forward traceability.</p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground text-lg mb-2">Pest Management</h4>
                  <p className="text-muted-foreground font-sans font-light text-sm">Integrated chemical-free pest control protocols across all zones.</p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground text-lg mb-2">Packaging Protocols</h4>
                  <p className="text-muted-foreground font-sans font-light text-sm">Automated, touch-free food grade packing eliminating contamination risks.</p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative h-[400px] lg:h-[600px]">
              <Image src="/images/about/infra-warehouse.jpeg" alt="Controlled Hygiene Facility" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 08: QUALITY + CERTIFICATIONS */}
      <section className="py-16 lg:py-20 bg-background border-y border-border">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-[1200px] text-center">
          <h2 className="font-heading text-4xl font-medium text-primary mb-12">
            Quality Systems Supported By Global Certifications
          </h2>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-12 text-xl font-heading font-medium tracking-wide">
            <Link href="/certifications/iso-22000" className="hover:text-secondary transition-colors">ISO 22000</Link>
            <Link href="/certifications/haccp" className="hover:text-secondary transition-colors">HACCP</Link>
            <Link href="/certifications/us-fda" className="hover:text-secondary transition-colors">US FDA</Link>
            <Link href="/certifications/fssai" className="hover:text-secondary transition-colors">FSSAI</Link>
            <Link href="/certifications/halal" className="hover:text-secondary transition-colors">HALAL</Link>
            <Link href="/certifications/apeda" className="hover:text-secondary transition-colors">APEDA</Link>
          </div>
        </div>
      </section>

      {/* SECTION 09: DOWNLOADABLE DOCUMENTATION */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-[1200px]">
          <h2 className="font-heading text-4xl sm:text-5xl font-medium text-primary mb-12">
            Documentation Center
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <a href="#" className="flex items-center p-6 border border-border hover:border-[#0B2F26] transition-colors group bg-background">
              <FileText className="w-8 h-8 text-secondary mr-4" />
              <div>
                <span className="block font-medium text-foreground group-hover:text-primary">Product Specifications</span>
                <span className="text-xs uppercase tracking-wider text-muted-foreground font-sans">PDF Library</span>
              </div>
            </a>
            <a href="#" className="flex items-center p-6 border border-border hover:border-[#0B2F26] transition-colors group bg-background">
              <Database className="w-8 h-8 text-secondary mr-4" />
              <div>
                <span className="block font-medium text-foreground group-hover:text-primary">COA Sample</span>
                <span className="text-xs uppercase tracking-wider text-muted-foreground font-sans">Download Example</span>
              </div>
            </a>
            <a href="#" className="flex items-center p-6 border border-border hover:border-[#0B2F26] transition-colors group bg-background">
              <ShieldCheck className="w-8 h-8 text-secondary mr-4" />
              <div>
                <span className="block font-medium text-foreground group-hover:text-primary">Export Quality Manual</span>
                <span className="text-xs uppercase tracking-wider text-muted-foreground font-sans">Company Profile</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 10: FAQ */}
      <FAQSection
        title="Quality & Testing FAQ"
        subtitle="Common Queries"
        faqs={[
          {
            question: "How do you test spices before export?",
            answer: "All spices undergo comprehensive physicochemical and microbiological analysis in accordance with ASTA/ESA guidelines before shipment."
          },
          {
            question: "Do you perform aflatoxin testing?",
            answer: "Yes, aflatoxin testing (B1, B2, G1, G2) is mandatory, especially for highly regulated markets like the EU. We maintain strict sub-ppb limits."
          },
          {
            question: "Do you provide Certificates of Analysis (CoA)?",
            answer: "Every individual shipment is dispatched with a batch-specific CoA detailing moisture, purity, and microbial parameters."
          },
          {
            question: "Can third-party inspections be arranged?",
            answer: "Absolutely. We regularly facilitate SGS, Eurofins, and Bureau Veritas inspections at our warehousing facilities prior to container stuffing."
          }
        ]}
      />

      {/* SECTION 11: CTA */}
      <section className="py-20 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-4xl text-center">
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-medium mb-10">
            Need Technical Specifications<br/>For Your Product Requirement?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="/request-quote" className="inline-flex items-center justify-center bg-secondary text-primary px-8 py-4 font-medium tracking-wide w-full sm:w-auto hover:bg-secondary/90 transition-colors">
              Request Quote
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center border border-primary-foreground/30 text-primary-foreground px-8 py-4 font-medium tracking-wide w-full sm:w-auto hover:bg-card/5 transition-colors">
              Request Product Specifications
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center text-primary-foreground underline-offset-4 hover:text-secondary hover:underline px-8 py-4 font-light w-full sm:w-auto transition-colors">
              Talk To Quality Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
