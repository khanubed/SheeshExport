import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, Eye, ShieldCheck, ChevronRight, CheckCircle2 } from "lucide-react";
import { getCertificationBySlug, getCertifications } from "@/lib/cms/queries";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { FAQSection } from "@/components/shared/FAQSection";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const cert = await getCertificationBySlug(slug);
  if (!cert) return {};
  return buildMetadata({
    title: `${cert.name} Certification | Sheesh Exports Compliance`,
    description: cert.description,
    pathname: `/certifications/${slug}`,
  });
}

export default async function CertificationDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const cert = await getCertificationBySlug(slug);

  if (!cert) {
    // Fallback or not found
  }

  // Fallback data
  const name = cert?.name || slug.toUpperCase().replace('-', ' ');
  const desc = cert?.description || "International food safety management system supporting safe sourcing, processing, packaging and export operations.";
  const issuingBody = cert?.issuingBody || "International Organization for Standardization";
  const certNumber = cert?.certificateNumber || "SHEX-99842-2024";
  const validity = cert?.validity || "Valid until 2026";

  let displayImage = cert?.badgeImage;
  if (slug === 'apeda') displayImage = "/images/certificates/APEDA.png.webp";
  else if (slug === 'fssai') displayImage = "/images/certificates/FSSAI.webp";
  else if (slug === 'spices-board') displayImage = "/images/certificates/SPICES-BOARD-CERTIFICATE.webp";
  else if (slug === 'fieo') displayImage = "/images/certificates/FIEO-Logo-Trans-1.webp";
  else if (slug === 'star-export-house') displayImage = "/images/certificates/star.webp";

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `Is Sheesh Exports ${name} certified?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes, Sheesh Exports holds valid ${name} certification ensuring compliance with international trade requirements.`
        }
      },
      {
        "@type": "Question",
        "name": `Can I verify the ${name} certificate?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes, verified B2B buyers can request authenticated copies of our ${name} certification for due diligence.`
        }
      }
    ]
  };

  return (
    <main className="bg-background min-h-screen text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      <JsonLd data={schema} />

      {/* SECTION 01: HERO */}
      <section className="pt-24 pb-12 px-6 sm:px-12 lg:px-24 container mx-auto max-w-[1200px]">
        <div className="flex items-center gap-2 text-sm text-muted-foreground font-sans mb-8 uppercase tracking-wider font-medium">
          <Link href="/" className="hover:text-primary">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/certifications" className="hover:text-primary">Certifications</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-primary">{name}</span>
        </div>
        
        <div className="max-w-4xl">
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-medium text-primary leading-[1.05] mb-6">
            {name} Certification
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground font-sans font-light leading-relaxed font-sans max-w-3xl">
            {desc}
          </p>
        </div>
      </section>

      {/* SECTION 02: CERTIFICATE PREVIEW */}
      <section className="py-12 bg-background border-y border-border">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-[1200px]">
          <div className="bg-background border border-border p-4 sm:p-8">
            <div className="relative w-full aspect-[1/1.4] sm:aspect-[16/9] lg:aspect-[21/9] bg-card border border-[#1E1E1E]/5 shadow-sm mb-8 flex items-center justify-center overflow-hidden group">
              {displayImage ? (
                <Image src={displayImage} alt={`${name} Document Viewer`} fill className="object-contain p-8 md:p-16 transition-all duration-500" />
              ) : (
                <div className="text-center text-foreground/30 font-heading text-4xl">Document Viewer Placeholder</div>
              )}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500" />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-center">
              <button className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 font-medium tracking-wide hover:bg-primary/90 transition-colors">
                <Eye className="w-5 h-5 mr-3" /> View Full Certificate
              </button>
              <button className="inline-flex items-center justify-center border border-[#0B2F26] text-primary px-8 py-4 font-medium tracking-wide hover:bg-primary/5 transition-colors">
                <Download className="w-5 h-5 mr-3" /> Download PDF
              </button>
              <Link href="/contact" className="inline-flex items-center justify-center text-secondary hover:text-primary underline-offset-4 hover:underline px-8 py-4 font-medium tracking-wide transition-colors">
                Request Verification
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 pt-6 border-t border-border">
              <div>
                <span className="text-muted-foreground font-sans uppercase tracking-wider text-xs font-semibold block mb-2">Issuing Authority</span>
                <span className="text-foreground font-medium">{issuingBody}</span>
              </div>
              <div>
                <span className="text-muted-foreground font-sans uppercase tracking-wider text-xs font-semibold block mb-2">Certificate Number</span>
                <span className="text-foreground font-medium">{certNumber}</span>
              </div>
              <div>
                <span className="text-muted-foreground font-sans uppercase tracking-wider text-xs font-semibold block mb-2">Validity</span>
                <span className="text-foreground font-medium">{validity}</span>
              </div>
              <div>
                <span className="text-muted-foreground font-sans uppercase tracking-wider text-xs font-semibold block mb-2">Certification Scope</span>
                <span className="text-foreground font-medium">Processing & Export</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03: WHAT IS THIS CERTIFICATION */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-[900px]">
          <h2 className="font-heading text-4xl sm:text-5xl font-medium text-primary mb-10">
            Understanding {name}
          </h2>
          <div className="space-y-10 text-lg text-muted-foreground font-sans font-light leading-relaxed font-sans editorial-content">
            <div>
              <h3 className="text-2xl font-heading text-foreground font-medium mb-3">Overview</h3>
              <p>The {name} certification represents a globally recognized benchmark for food safety management and compliance. It integrates rigorous hazard analysis principles with prerequisite manufacturing programs to ensure that every stage of the supply chain—from farm procurement to final container loading—meets strict international safety criteria.</p>
            </div>
            <div>
              <h3 className="text-2xl font-heading text-foreground font-medium mb-3">Purpose & Requirements</h3>
              <p>Its primary purpose is to identify, prevent, and mitigate foodborne hazards. For Sheesh Exports, maintaining {name} requires continuous monitoring of our processing environments, automated optical sorting machinery calibrations, and stringent pest control and sanitation procedures within our warehousing units.</p>
            </div>
            <div>
              <h3 className="text-2xl font-heading text-foreground font-medium mb-3">Industry Importance & International Recognition</h3>
              <p>In the highly regulated global commodity trade, {name} acts as a passport for seamless market entry. It provides absolute assurance to procurement managers, food manufacturers, and customs authorities across North America, Europe, and the Middle East that our agricultural products are safe, authentic, and processed under controlled conditions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 04: WHY IT MATTERS FOR BUYERS */}
      <section className="py-16 lg:py-20 bg-background border-y border-border">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-[1200px]">
          <h2 className="font-heading text-4xl sm:text-5xl font-medium text-primary mb-12">
            Why It Matters For Global Buyers
          </h2>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
            <div className="border-t border-secondary pt-4">
              <h3 className="font-heading text-2xl font-medium text-foreground mb-3">Food Safety Assurance</h3>
              <p className="text-muted-foreground font-sans font-light leading-relaxed font-sans">Guarantees that products are free from unacceptable levels of microbial, chemical, or physical contamination, protecting your brand reputation and consumer health.</p>
            </div>
            <div className="border-t border-secondary pt-4">
              <h3 className="font-heading text-2xl font-medium text-foreground mb-3">Operational Consistency</h3>
              <p className="text-muted-foreground font-sans font-light leading-relaxed font-sans">Ensures that every shipment you receive matches the precise quality, moisture, and purity specifications of your initial approved sample.</p>
            </div>
            <div className="border-t border-secondary pt-4">
              <h3 className="font-heading text-2xl font-medium text-foreground mb-3">Farm-to-Port Traceability</h3>
              <p className="text-muted-foreground font-sans font-light leading-relaxed font-sans">Enables rapid tracking of any batch back to its origin farm in India, fulfilling the strict traceability requirements of modern retail chains.</p>
            </div>
            <div className="border-t border-secondary pt-4">
              <h3 className="font-heading text-2xl font-medium text-foreground mb-3">Risk Reduction & Compliance</h3>
              <p className="text-muted-foreground font-sans font-light leading-relaxed font-sans">Dramatically lowers the risk of shipment rejections or delays at destination customs by pre-aligning with international import regulations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 05 & 06: PRODUCTS COVERED & GLOBAL MARKET */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-[1200px]">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-heading text-4xl font-medium text-primary mb-10">
                Applicable Product Categories
              </h2>
              <ul className="space-y-4">
                <li className="flex items-center justify-between border-b border-border pb-3 group">
                  <span className="font-heading text-2xl text-foreground group-hover:text-secondary transition-colors">Red Chilli</span>
                  <Link href="/products/whole-spices/red-chilli" className="text-sm font-medium tracking-wide uppercase text-muted-foreground font-sans group-hover:text-primary transition-colors">View Product</Link>
                </li>
                <li className="flex items-center justify-between border-b border-border pb-3 group">
                  <span className="font-heading text-2xl text-foreground group-hover:text-secondary transition-colors">Turmeric</span>
                  <Link href="/products/whole-spices/turmeric" className="text-sm font-medium tracking-wide uppercase text-muted-foreground font-sans group-hover:text-primary transition-colors">View Product</Link>
                </li>
                <li className="flex items-center justify-between border-b border-border pb-3 group">
                  <span className="font-heading text-2xl text-foreground group-hover:text-secondary transition-colors">Cumin Seeds</span>
                  <Link href="/products/whole-spices/cumin" className="text-sm font-medium tracking-wide uppercase text-muted-foreground font-sans group-hover:text-primary transition-colors">View Product</Link>
                </li>
                <li className="flex items-center justify-between border-b border-border pb-3 group">
                  <span className="font-heading text-2xl text-foreground group-hover:text-secondary transition-colors">Black Pepper</span>
                  <Link href="/products" className="text-sm font-medium tracking-wide uppercase text-muted-foreground font-sans group-hover:text-primary transition-colors">View Product</Link>
                </li>
                <li className="flex items-center justify-between border-b border-border pb-3 group">
                  <span className="font-heading text-2xl text-foreground group-hover:text-secondary transition-colors">Coriander</span>
                  <Link href="/products" className="text-sm font-medium tracking-wide uppercase text-muted-foreground font-sans group-hover:text-primary transition-colors">View Product</Link>
                </li>
              </ul>
            </div>
            
            <div className="bg-primary text-primary-foreground p-10 lg:p-12">
              <h2 className="font-heading text-4xl font-medium mb-10">
                Markets Where {name} Supports Trade
              </h2>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-4 font-medium tracking-wide">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-secondary"/> United States</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-secondary"/> European Union</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-secondary"/> United Kingdom</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-secondary"/> Middle East</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-secondary"/> Australia</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-secondary"/> Southeast Asia</li>
              </ul>
              <p className="mt-10 text-primary-foreground/70 font-light leading-relaxed font-sans text-sm">
                While some markets legally mandate this certification for entry, others highly recommend it as a prerequisite for engaging with institutional distributors and large-scale food processors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 07: CERTIFICATION DETAILS */}
      <section className="py-16 lg:py-20 bg-background border-y border-border">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-[1000px]">
          <h2 className="font-heading text-4xl sm:text-5xl font-medium text-primary mb-10">
            Certification Details
          </h2>
          <table className="w-full text-left text-lg">
            <tbody>
              <tr className="border-b border-border">
                <th className="py-4 font-medium text-foreground w-1/3">Certification Body</th>
                <td className="py-4 text-muted-foreground font-sans font-light">{issuingBody}</td>
              </tr>
              <tr className="border-b border-border">
                <th className="py-4 font-medium text-foreground">Standard</th>
                <td className="py-4 text-muted-foreground font-sans font-light">{name} Compliance Framework</td>
              </tr>
              <tr className="border-b border-border">
                <th className="py-4 font-medium text-foreground">Certificate Number</th>
                <td className="py-4 text-muted-foreground font-sans font-light">{certNumber}</td>
              </tr>
              <tr className="border-b border-border">
                <th className="py-4 font-medium text-foreground">Issue Date</th>
                <td className="py-4 text-muted-foreground font-sans font-light">Available upon verification request</td>
              </tr>
              <tr className="border-b border-border">
                <th className="py-4 font-medium text-foreground">Expiry Date</th>
                <td className="py-4 text-muted-foreground font-sans font-light">{validity}</td>
              </tr>
              <tr className="border-b border-border">
                <th className="py-4 font-medium text-foreground">Coverage</th>
                <td className="py-4 text-muted-foreground font-sans font-light">Sourcing, Processing, Warehousing, and Export</td>
              </tr>
              <tr>
                <th className="py-4 font-medium text-foreground">Renewal Cycle</th>
                <td className="py-4 text-muted-foreground font-sans font-light">Annual Surveillance Audits</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 08: VERIFICATION SUPPORT */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-[1200px]">
          <div className="bg-background border border-secondary p-8 sm:p-12 lg:p-16 text-center flex flex-col items-center">
            <ShieldCheck className="w-12 h-12 text-secondary mb-6" />
            <h2 className="font-heading text-4xl sm:text-5xl font-medium text-primary mb-4">
              Need Additional Documentation?
            </h2>
            <p className="text-xl text-muted-foreground font-sans font-light max-w-2xl mb-8 leading-relaxed">
              We provide full support for buyer due diligence. This includes direct certificate verification links, facilitating third-party pre-shipment inspections (PSI), and supplying comprehensive export documentation packages.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center bg-primary text-primary-foreground px-10 py-5 font-medium tracking-wide hover:bg-primary/90 transition-colors">
              Request Compliance Package
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 09: RELATED CERTIFICATIONS */}
      <section className="py-16 lg:py-20 bg-background border-y border-border">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-[1200px]">
          <h2 className="font-heading text-4xl font-medium text-primary mb-10">
            Related Certifications
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <Link href="/certifications/haccp" className="group block border border-border p-6 hover:border-secondary transition-colors">
              <h4 className="font-heading text-2xl font-medium text-foreground group-hover:text-secondary transition-colors mb-2">HACCP</h4>
              <span className="text-xs uppercase tracking-wider text-muted-foreground font-sans font-semibold">View &rarr;</span>
            </Link>
            <Link href="/certifications/us-fda" className="group block border border-border p-6 hover:border-secondary transition-colors">
              <h4 className="font-heading text-2xl font-medium text-foreground group-hover:text-secondary transition-colors mb-2">US FDA</h4>
              <span className="text-xs uppercase tracking-wider text-muted-foreground font-sans font-semibold">View &rarr;</span>
            </Link>
            <Link href="/certifications/halal" className="group block border border-border p-6 hover:border-secondary transition-colors">
              <h4 className="font-heading text-2xl font-medium text-foreground group-hover:text-secondary transition-colors mb-2">HALAL</h4>
              <span className="text-xs uppercase tracking-wider text-muted-foreground font-sans font-semibold">View &rarr;</span>
            </Link>
            <Link href="/certifications/apeda" className="group block border border-border p-6 hover:border-secondary transition-colors">
              <h4 className="font-heading text-2xl font-medium text-foreground group-hover:text-secondary transition-colors mb-2">APEDA</h4>
              <span className="text-xs uppercase tracking-wider text-muted-foreground font-sans font-semibold">View &rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 10: FAQ */}
      <FAQSection
        title={`${name} FAQ`}
        subtitle="Common Queries"
        faqs={[
          {
            question: `Is Sheesh Exports ${name} certified?`,
            answer: `Yes, Sheesh Exports holds a valid and active ${name} certification, ensuring strict compliance with all associated global trade and food safety requirements.`
          },
          {
            question: `Can I verify the ${name} certificate online?`,
            answer: `Verified buyers can request an authenticated copy of our certification, which includes the registration number. This number can be verified directly through the issuing authority’s official portal.`
          },
          {
            question: "Does this cover all product shipments?",
            answer: `The ${name} standard applies to our overarching processing and export operations. For shipment-specific assurance, it is supplemented by batch-wise lab analysis reports and phytosanitary certificates.`
          }
        ]}
      />
    </main>
  );
}
