import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = buildMetadata({
  title: "Certifications & Export Compliance | Sheesh Exports",
  description:
    "Sheesh Exports maintains internationally recognized food safety, regulatory and export certifications including ISO 22000, US FDA, HALAL, and APEDA.",
  pathname: "/certifications",
});

const CERTIFICATION_DIRECTORY = [
  {
    name: "APEDA",
    desc: "Agricultural & Processed Food Export",
    detail: "Government of India regulatory body compliance for agro commodities.",
    markets: "Global",
    slug: "apeda",
    image: "/images/certificates/APEDA.png.webp"
  },
  {
    name: "FSSAI",
    desc: "Food Safety and Standards Authority of India",
    detail: "Mandatory domestic processing and safety benchmark.",
    markets: "India • Global",
    slug: "fssai",
    image: "/images/certificates/FSSAI.webp"
  },
  {
    name: "Spices Board",
    desc: "Ministry of Commerce, India",
    detail: "Mandatory quality testing for global spice exports.",
    markets: "Global",
    slug: "spices-board",
    image: "/images/certificates/SPICES-BOARD-CERTIFICATE.webp"
  },
  {
    name: "FIEO",
    desc: "Federation of Indian Export Organisations",
    detail: "Apex body of Indian export promotion organizations.",
    markets: "Global",
    slug: "fieo",
    image: "/images/certificates/FIEO-Logo-Trans-1.webp"
  },
  {
    name: "Star Export House",
    desc: "Ministry of Commerce & Industry",
    detail: "Recognized status for significant export performance.",
    markets: "Global",
    slug: "star-export-house",
    image: "/images/certificates/star.webp"
  },
];

const MATRIX = [
  { cert: "ISO 22000", usa: "✓", eu: "✓", uae: "✓", saudi: "✓", uk: "✓" },
  { cert: "FDA", usa: "✓", eu: "—", uae: "—", saudi: "—", uk: "—" },
  { cert: "HALAL", usa: "Optional", eu: "Optional", uae: "✓", saudi: "✓", uk: "Optional" },
  { cert: "HACCP", usa: "✓", eu: "✓", uae: "✓", saudi: "✓", uk: "✓" },
];

export default function CertificationsPage() {
  return (
    <main className="bg-background min-h-screen text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      {/* SECTION 01: HERO */}
      <section className="relative min-h-[60vh] flex flex-col lg:flex-row items-center border-b border-border">
        <div className="w-full lg:w-[60%] px-6 sm:px-12 lg:px-24 py-12 lg:py-24 flex flex-col justify-center">
          <span className="inline-block text-foreground font-semibold tracking-[0.2em] uppercase text-xs mb-8 border-b border-secondary pb-2 max-w-max">
            Compliance & Certifications
          </span>
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-medium text-primary leading-[1.05] mb-8">
            Global Certifications Supporting International Food Trade
          </h1>
          <p className="text-xl text-muted-foreground font-sans max-w-2xl font-light leading-relaxed font-sans mb-12">
            Sheesh Exports maintains internationally recognized food safety, regulatory and export certifications to support buyers, distributors and food manufacturers across global markets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#directory" className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 font-medium tracking-wide hover:bg-primary/90 transition-colors">
              Explore Certifications
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center border border-[#0B2F26] text-primary px-8 py-4 font-medium tracking-wide hover:bg-primary/5 transition-colors">
              Request Compliance Documents
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-[40%] h-[40vh] lg:h-[60vh] relative">
          <Image src="/images/about/quality-assurance.webp" alt="Quality Inspection and Laboratory Testing" fill className="object-cover" priority />
        </div>
      </section>

      {/* SECTION 02: COMPLIANCE OVERVIEW */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-[1400px]">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <h2 className="font-heading text-4xl sm:text-5xl font-medium text-primary leading-[1.1] mb-8">
                Built Around Food Safety, Traceability & Export Compliance
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground font-sans font-light leading-relaxed font-sans">
                <p>
                  <strong className="text-foreground font-medium block mb-1">Food Safety & Quality Assurance</strong>
                  Our operations integrate continuous hazard analysis and preventative controls, ensuring that from the moment raw materials enter our facilities to the final container sealing, food safety is never compromised.
                </p>
                <p>
                  <strong className="text-foreground font-medium block mb-1">Global Regulations & Traceability</strong>
                  We maintain strict adherence to international Maximum Residue Limits (MRLs), aflatoxin standards, and microbiological safety requirements. Our batch-coding system ensures 100% farm-to-port traceability.
                </p>
                <p>
                  <strong className="text-foreground font-medium block mb-1">Export Documentation & Buyer Confidence</strong>
                  International trade requires precision. We provide complete, error-free documentation including Certificates of Origin, Phytosanitary Certificates, and Third-Party Lab Reports (SGS/Eurofins) to ensure seamless customs clearance.
                </p>
              </div>
            </div>
            <div className="bg-background p-8 sm:p-12 border border-border">
              <h3 className="font-heading text-2xl font-medium text-primary mb-6 pb-4 border-b border-border">
                Core Compliance Framework
              </h3>
              <ul className="space-y-4 text-foreground font-medium tracking-wide">
                <li className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                  Food Safety Certifications
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                  Export Registrations
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                  Religious Compliance
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                  Third Party Verification
                </li>
              </ul>
              
              <div className="mt-8 pt-6 border-t border-border flex flex-wrap gap-4 items-center">
                <Image src="/images/certificates/MSME_logo_colour.svg" alt="MSME" width={80} height={40} className="object-contain grayscale mix-blend-multiply opacity-70 hover:grayscale-0 hover:opacity-100 transition-all" />
                <Image src="/images/certificates/gst-1.webp" alt="GST" width={80} height={40} className="object-contain grayscale mix-blend-multiply opacity-70 hover:grayscale-0 hover:opacity-100 transition-all" />
                <Image src="/images/certificates/IEC-CERTIFICATE.png.webp" alt="IEC" width={80} height={40} className="object-contain grayscale mix-blend-multiply opacity-70 hover:grayscale-0 hover:opacity-100 transition-all" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03: CERTIFICATION DIRECTORY */}
      <section id="directory" className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-[1000px]">
          <h2 className="font-heading text-4xl sm:text-5xl font-medium text-primary mb-12">
            Export Certification Directory
          </h2>
          <div className="space-y-12">
            {CERTIFICATION_DIRECTORY.map((cert, idx) => (
              <div key={idx} className="border-t border-input pt-8 flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-3">
                    <h3 className="font-heading text-4xl font-medium text-foreground">{cert.name}</h3>
                    <span className="text-primary font-medium tracking-wide mt-2 md:mt-0">{cert.desc}</span>
                  </div>
                  <p className="text-xl text-muted-foreground font-sans font-light mb-6 max-w-2xl">
                    {cert.detail}
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <span className="text-xs uppercase tracking-wider text-muted-foreground font-sans font-semibold block mb-1">Applicable Markets</span>
                      <span className="text-foreground font-medium">{cert.markets}</span>
                    </div>
                    <Link href={`/certifications/${cert.slug}`} className="inline-flex items-center text-foreground hover:text-primary font-medium tracking-wide uppercase text-sm transition-colors">
                      View Certification <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
                {cert.image && (
                  <div className="w-full md:w-[200px] h-[120px] bg-card border border-border flex items-center justify-center p-4 relative flex-shrink-0 group">
                    <Image src={cert.image} alt={cert.name} fill className="object-contain p-4transition-all duration-500" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 04: MARKET ACCESS MATRIX */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-[1200px]">
          <h2 className="font-heading text-4xl sm:text-5xl font-medium text-primary mb-12">
            Certification Requirements By Market
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr>
                  <th className="border-b-2 border-[#1E1E1E] py-4 px-4 font-heading text-2xl font-medium text-primary">Certification</th>
                  <th className="border-b-2 border-[#1E1E1E] py-4 px-4 font-heading text-2xl font-medium text-primary">USA</th>
                  <th className="border-b-2 border-[#1E1E1E] py-4 px-4 font-heading text-2xl font-medium text-primary">EU</th>
                  <th className="border-b-2 border-[#1E1E1E] py-4 px-4 font-heading text-2xl font-medium text-primary">UAE</th>
                  <th className="border-b-2 border-[#1E1E1E] py-4 px-4 font-heading text-2xl font-medium text-primary">Saudi</th>
                  <th className="border-b-2 border-[#1E1E1E] py-4 px-4 font-heading text-2xl font-medium text-primary">UK</th>
                </tr>
              </thead>
              <tbody className="text-lg">
                {MATRIX.map((row, idx) => (
                  <tr key={idx} className="border-b border-border hover:bg-background/50 transition-colors">
                    <td className="py-4 px-4 font-medium text-foreground">{row.cert}</td>
                    <td className={`py-4 px-4 ${row.usa === '✓' ? 'text-primary' : 'text-muted-foreground font-sans'}`}>{row.usa}</td>
                    <td className={`py-4 px-4 ${row.eu === '✓' ? 'text-primary' : 'text-muted-foreground font-sans'}`}>{row.eu}</td>
                    <td className={`py-4 px-4 ${row.uae === '✓' ? 'text-primary' : 'text-muted-foreground font-sans'}`}>{row.uae}</td>
                    <td className={`py-4 px-4 ${row.saudi === '✓' ? 'text-primary' : 'text-muted-foreground font-sans'}`}>{row.saudi}</td>
                    <td className={`py-4 px-4 ${row.uk === '✓' ? 'text-primary' : 'text-muted-foreground font-sans'}`}>{row.uk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 05: PRODUCT COMPLIANCE MAPPING */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-[1200px]">
          <h2 className="font-heading text-4xl sm:text-5xl font-medium text-primary mb-12">
            Compliance Across Product Categories
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <Link href="/products/whole-spices/red-chilli" className="group">
                <h3 className="font-heading text-3xl font-medium text-foreground mb-6 group-hover:text-secondary transition-colors">Red Chilli</h3>
              </Link>
              <ul className="space-y-3 text-lg text-muted-foreground font-sans font-light">
                <li>ISO 22000</li>
                <li>US FDA</li>
                <li>APEDA</li>
                <li>Spices Board</li>
              </ul>
              <div className="h-[1px] w-full bg-muted/20 mt-6" />
            </div>
            <div>
              <Link href="/products/whole-spices/turmeric" className="group">
                <h3 className="font-heading text-3xl font-medium text-foreground mb-6 group-hover:text-secondary transition-colors">Turmeric</h3>
              </Link>
              <ul className="space-y-3 text-lg text-muted-foreground font-sans font-light">
                <li>ISO 22000</li>
                <li>HALAL</li>
                <li>US FDA</li>
                <li>Spices Board</li>
              </ul>
              <div className="h-[1px] w-full bg-muted/20 mt-6" />
            </div>
            <div>
              <Link href="/products/whole-spices/cumin" className="group">
                <h3 className="font-heading text-3xl font-medium text-foreground mb-6 group-hover:text-secondary transition-colors">Cumin Seeds</h3>
              </Link>
              <ul className="space-y-3 text-lg text-muted-foreground font-sans font-light">
                <li>ISO 22000</li>
                <li>HALAL</li>
                <li>APEDA</li>
                <li>Spices Board</li>
              </ul>
              <div className="h-[1px] w-full bg-muted/20 mt-6" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 06: QUALITY PROCESS */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-[1400px]">
          <div className="flex flex-wrap items-center justify-between gap-4 text-foreground font-medium tracking-wider uppercase text-sm sm:text-base">
            <span>Farm Selection</span>
            <ArrowRight className="w-5 h-5 text-secondary hidden md:block" />
            <span>Cleaning</span>
            <ArrowRight className="w-5 h-5 text-secondary hidden md:block" />
            <span>Sorting</span>
            <ArrowRight className="w-5 h-5 text-secondary hidden md:block" />
            <span>Testing</span>
            <ArrowRight className="w-5 h-5 text-secondary hidden md:block" />
            <span className="text-primary border-b-2 border-[#0B2F26]">Certification</span>
            <ArrowRight className="w-5 h-5 text-secondary hidden md:block" />
            <span>Packaging</span>
            <ArrowRight className="w-5 h-5 text-secondary hidden md:block" />
            <span>Export</span>
          </div>
        </div>
      </section>

      {/* SECTION 07: FAQ */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-[800px]">
          <h2 className="font-heading text-4xl sm:text-5xl font-medium text-primary mb-12 text-center">
            Compliance FAQ
          </h2>
          <div className="space-y-10">
            <div>
              <h4 className="text-xl font-medium text-foreground mb-2">What certifications do you provide?</h4>
              <p className="text-muted-foreground font-sans font-light leading-relaxed font-sans">We provide globally recognized certifications including ISO 22000, US FDA Registration, HALAL, KOSHER, HACCP, and compliance documents from APEDA and Spices Board of India.</p>
            </div>
            <div>
              <h4 className="text-xl font-medium text-foreground mb-2">Can certificates be shared before ordering?</h4>
              <p className="text-muted-foreground font-sans font-light leading-relaxed font-sans">Yes, authenticated copies of our certifications and sample lab reports can be provided to verified buyers during the procurement due diligence phase.</p>
            </div>
            <div>
              <h4 className="text-xl font-medium text-foreground mb-2">Do certifications cover all products?</h4>
              <p className="text-muted-foreground font-sans font-light leading-relaxed font-sans">Most certifications like ISO 22000 and APEDA cover our entire processing facility and export operations. Specific product batches receive unique Phytosanitary and SGS testing certificates.</p>
            </div>
            <div>
              <h4 className="text-xl font-medium text-foreground mb-2">Do you support third-party inspections?</h4>
              <p className="text-muted-foreground font-sans font-light leading-relaxed font-sans">Absolutely. We routinely work with international surveying agencies like SGS, Bureau Veritas, and Eurofins for pre-shipment inspection (PSI) and container stuffing supervision.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 08: CTA */}
      <section className="py-20 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-4xl text-center">
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-medium mb-10">
            Need Product-Specific<br/> Compliance Documentation?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center bg-secondary text-primary px-8 py-4 font-medium tracking-wide w-full sm:w-auto hover:bg-secondary/90 transition-colors">
              Request Documents
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center border border-primary-foreground/30 text-primary-foreground px-8 py-4 font-medium tracking-wide w-full sm:w-auto hover:bg-card/5 transition-colors">
              Contact Compliance Team
            </Link>
            <Link href="/request-quote" className="inline-flex items-center justify-center text-primary-foreground underline-offset-4 hover:text-secondary hover:underline px-8 py-4 font-light w-full sm:w-auto transition-colors">
              Request Quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
