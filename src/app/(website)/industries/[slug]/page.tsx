import { notFound } from "next/navigation";
import { INDUSTRIES_DATA } from "@/lib/data/industries";
import { PRODUCTS_DATA } from "@/lib/data/products";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { ProductCard } from "@/components/products/ProductCard";
import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";

export async function generateStaticParams() {
  return INDUSTRIES_DATA.map((industry) => ({
    slug: industry.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const industry = INDUSTRIES_DATA.find((i) => i.slug === resolvedParams.slug);
  if (!industry) return {};
  return buildMetadata({
    title: `${industry.name} Procurement Solutions | Sheesh Exports`,
    description: industry.heroDescription,
    pathname: `/industries/${industry.slug}`,
  });
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const industry = INDUSTRIES_DATA.find((i) => i.slug === resolvedParams.slug);

  if (!industry) {
    notFound();
  }

  const relatedProducts = PRODUCTS_DATA.filter((p) => industry.products.includes(p.slug));

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: industry.name + " Sourcing & Supply Chain",
    description: industry.heroDescription,
    image: "https://sheeshexports.com" + industry.heroImage,
  };

  return (
    <main className="bg-background min-h-screen text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      <JsonLd data={schema} />

      {/* SECTION 1 — MASSIVE EDITORIAL HERO */}
      <section className="relative min-h-[90vh] flex flex-col justify-end pb-24 border-b border-border">
        <Image
          src={industry.heroImage}
          alt={industry.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10"></div>

        <div className="absolute top-12 left-6 sm:left-12 lg:left-24 z-20">
          <Link
            href="/industries"
            className="text-secondary font-semibold tracking-[0.2em] uppercase text-xs flex items-center hover:text-white transition-colors"
          >
            <ChevronRight className="w-4 h-4 mr-1 rotate-180" /> Back to Industries
          </Link>
        </div>

        <div className="container relative z-10 mx-auto px-6 sm:px-12 lg:px-24 max-w-8xl">
          <div className="max-w-6xl">
            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-[7.5rem] xl:text-[8.5rem] font-semibold text-white leading-[0.9] mb-8 tracking-tighter ">
              {industry.name}
            </h1>
            <p className="text-sm md:text-xl text-white/90 font-sans max-w-4xl font-light leading-relaxed">
              {industry.heroDescription}
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — INDUSTRY SNAPSHOT (DATA DASHBOARD) */}
      <section className="py-12 bg-card border-b border-border">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-8xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 md:divide-x divide-border">
            <div className="pl-0">
              <span className="block text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-2">
                Primary Buyers
              </span>
              <span className="block font-heading text-xl lg:text-2xl font-bold text-foreground">
                {industry.name}
              </span>
            </div>
            <div className="md:pl-12">
              <span className="block text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-2">
                Typical MOQ
              </span>
              <span className="block font-heading text-xl lg:text-2xl font-bold text-foreground">
                5-25 MT
              </span>
            </div>
            <div className="pl-0 md:pl-12">
              <span className="block text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-2">
                Packaging
              </span>
              <span className="block font-heading text-xl lg:text-2xl font-bold text-foreground">
                Bulk / OEM
              </span>
            </div>
            <div className="md:pl-12">
              <span className="block text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-2">
                Lead Time
              </span>
              <span className="block font-heading text-xl lg:text-2xl font-bold text-foreground">
                15-30 Days
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — THE PROCUREMENT REALITY (Merged Overview, Challenges, Packaging) */}
      <section className="py-24 lg:py-32 bg-background border-b border-border">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-8xl">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* Left side: Sticky Editorial Title */}
            <div className="lg:col-span-5 lg:sticky lg:top-32 pr-8">
              <span className="text-primary font-bold tracking-[0.2em] uppercase text-[10px] mb-6 block">
                The Procurement Reality
              </span>
              <h2 className="font-heading text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-8">
                {industry.overview.heading}
              </h2>
              <div className="space-y-6 text-muted-foreground font-sans text-xl font-light leading-relaxed">
                {industry.overview.content.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

            {/* Right side: Typographic Challenges */}
            <div className="lg:col-span-7">
              <div className="mb-16">
                <span className="block font-heading text-3xl font-bold text-primary mb-12 pb-4 border-b border-border">
                  Key Market Complexities
                </span>

                <div className="space-y-16">
                  {industry.challenges.map((challenge, idx) => (
                    <div key={idx} className="relative pl-16 md:pl-24">
                      <span className="absolute left-0 top-0 font-heading text-5xl md:text-7xl font-bold text-secondary/30 leading-none">
                        0{idx + 1}
                      </span>
                      <h4 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4 pt-2">
                        {challenge.title}
                      </h4>
                      <p className="text-muted-foreground font-sans text-lg font-light leading-relaxed max-w-2xl">
                        {challenge.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Seamlessly transition into Packaging & Compliance */}
              <div className="pt-16 border-t border-border">
                <span className="block font-heading text-3xl font-bold text-primary mb-12 pb-4 border-b border-border">
                  Packaging & Compliance Standards
                </span>
                <div className="grid sm:grid-cols-2 gap-12">
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-6">
                      Format Specs
                    </span>
                    <ul className="space-y-6">
                      {industry.packaging.map((pack, idx) => (
                        <li key={idx}>
                          <strong className="block font-heading text-xl font-bold text-foreground mb-1">
                            {pack.title}
                          </strong>
                          <span className="text-muted-foreground font-light text-sm">
                            {pack.description}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-6">
                      Regulatory
                    </span>
                    <ul className="space-y-6">
                      {industry.certifications.map((cert, idx) => (
                        <li key={idx}>
                          <strong className="block font-heading text-xl font-bold text-foreground mb-1">
                            {cert.name}
                          </strong>
                          <span className="text-muted-foreground font-light text-sm">
                            {cert.description}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — NARRATIVE WORKFLOW (Chapters) */}
      <section className="py-24 lg:py-32 bg-foreground text-background border-b border-border">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-8xl">
          <div className="mb-24 md:w-2/3">
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-[10px] mb-6 block">
              Execution Framework
            </span>
            <h2 className="font-heading text-5xl lg:text-7xl font-bold tracking-tight text-background leading-[1.1]">
              Operational Supply Chain Mechanics
            </h2>
          </div>

          <div className="space-y-0 border-t border-background/20">
            {industry.workflow.map((step, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 py-12 border-b border-background/20 items-start group hover:bg-background/5 transition-colors"
              >
                <div className="md:col-span-2">
                  <span className="font-heading text-4xl text-secondary font-bold tracking-tighter">
                    0{idx + 1}
                  </span>
                </div>
                <div className="md:col-span-4">
                  <span className="block text-[10px] uppercase tracking-widest text-muted-foreground/50 font-bold mb-2">
                    Phase
                  </span>
                  <h4 className="font-heading text-3xl font-bold tracking-tight text-background uppercase">
                    {["Discovery", "Sampling", "Production", "Inspection", "Shipment"][idx] ||
                      "Execution"}
                  </h4>
                </div>
                <div className="md:col-span-6">
                  <p className="text-background/70 font-sans text-xl font-light leading-relaxed">
                    {step}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — EDITORIAL CASE STUDY */}
      <section className="py-24 lg:py-32 bg-muted/20 border-b border-border">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-8xl">
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-[10px] mb-6 block">
            Market Intelligence
          </span>

          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="font-heading text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-8">
                {industry.insights.title}
              </h2>
              <div className="space-y-6 text-muted-foreground font-sans text-xl font-light leading-relaxed">
                {industry.insights.content.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

            {industry.caseStudyImage && (
              <div className="relative h-[400px] lg:h-full w-full bg-muted">
                <Image
                  loading="lazy"
                  src={industry.caseStudyImage}
                  alt="Case Study"
                  fill
                  className="object-cover transition-all duration-700"
                />
              </div>
            )}
          </div>

          <div className="bg-background border border-border p-12 lg:p-20 mt-16">
            <span className="block font-heading text-3xl font-bold text-primary mb-12 pb-4 border-b border-border">
              Case Study: Execution In Practice
            </span>
            <div className="grid md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-border">
              <div className="pt-8 md:pt-0 md:pr-12">
                <h4 className="font-heading text-2xl font-bold text-foreground mb-4">
                  The Challenge
                </h4>
                <p className="text-muted-foreground font-sans text-lg font-light leading-relaxed">
                  {industry.caseStudy.challenge}
                </p>
              </div>
              <div className="pt-8 md:pt-0 md:px-12">
                <h4 className="font-heading text-2xl font-bold text-foreground mb-4">
                  Our Solution
                </h4>
                <p className="text-muted-foreground font-sans text-lg font-light leading-relaxed">
                  {industry.caseStudy.solution}
                </p>
              </div>
              <div className="pt-8 md:pt-0 md:pl-12">
                <h4 className="font-heading text-2xl font-bold text-foreground mb-4">
                  The Outcome
                </h4>
                <p className="text-muted-foreground font-sans text-lg font-light leading-relaxed">
                  {industry.caseStudy.outcome}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — PRODUCTS USED IN THIS INDUSTRY */}
      {relatedProducts.length > 0 && (
        <section className="py-24 lg:py-32 bg-background border-b border-border">
          <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-8xl">
            <div className="mb-16 md:w-1/2">
              <span className="text-primary font-bold tracking-[0.2em] uppercase text-[10px] mb-6 block">
                Raw Materials
              </span>
              <h2 className="font-heading text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
                Commodities Extracted For {industry.name}
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 7 — FINAL EDITORIAL CTA */}
      <section aria-labelledby="industry-cta-heading" className="py-16 md:py-24 lg:py-32 bg-foreground text-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-8xl flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12">
          <div className="max-w-4xl">
            <h2 id="industry-cta-heading" className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tighter leading-[1.1] md:leading-[0.9] mb-6 md:mb-8 uppercase">
              Initiate
              <br />
              Procurement
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-background/70 font-light font-sans max-w-2xl">
              Discuss your commercial sourcing requirements with our export operations team for a
              tailored compliance and pricing framework.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-4 w-full md:w-auto shrink-0 mt-4 md:mt-0">
            <Link
              href="/request-quote"
              className="inline-flex items-center justify-center bg-secondary text-secondary-foreground px-8 lg:px-12 py-4 lg:py-6 font-bold tracking-widest uppercase text-xs lg:text-sm hover:bg-secondary/90 transition-colors w-full sm:w-auto text-center shadow-sm"
            >
              Request Quotation
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-background/70 text-background px-8 lg:px-12 py-4 lg:py-6 font-bold tracking-widest uppercase text-xs lg:text-sm hover:bg-white/10 transition-colors w-full sm:w-auto text-center"
            >
              Contact Operations
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
