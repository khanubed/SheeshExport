import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, MapPin, Anchor, FileText } from "lucide-react";
import { COUNTRY_MARKETS } from "@/lib/data/international";
import { PRODUCTS_DATA } from "@/lib/data/products";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { FAQSection } from "@/components/shared/FAQSection";

interface PageProps {
  params: Promise<{ country: string }>;
}

export async function generateStaticParams() {
  return COUNTRY_MARKETS.map((market) => ({
    country: market.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const market = COUNTRY_MARKETS.find((m) => m.slug === resolvedParams.country);

  if (!market) {
    return {};
  }

  return buildMetadata({
    title: market.seoTitle,
    description: market.seoDescription,
  });
}

const IconMap = {
  FileText: FileText,
  ShieldCheck: ShieldCheck,
  CheckCircle2: CheckCircle2,
  Anchor: Anchor,
};

export default async function CountryMarketPage({ params }: PageProps) {
  const resolvedParams = await params;
  const market = COUNTRY_MARKETS.find((m) => m.slug === resolvedParams.country);

  if (!market) {
    notFound();
  }

  // Get featured products based on popularProducts array
  const popularProductsDetails = market.popularProducts
    .map((slug) => PRODUCTS_DATA.find((p) => p.slug === slug))
    .filter(Boolean);

  const featuredProduct = popularProductsDetails[0];
  const secondaryProducts = popularProductsDetails.slice(1, 4); // Limit to 3 secondary

  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: market.seoTitle,
      description: market.seoDescription,
      url: `https://sheeshexports.com/international/${market.slug}`,
    },
  ];

  const heroImage = market.heroImage || "/images/international/intl_route_vis_1790683449601.webp";

  return (
    <main className="min-h-screen bg-background text-foreground">
      <JsonLd data={schemaData} />

      {/* SECTION 1: Editorial Hero */}
      <section className="relative min-h-[90vh] flex items-center border-b border-border pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={heroImage}
            alt={`${market.name} Port Infrastructure`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <div className="lg:w-1/2 pt-12 lg:pt-0">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter leading-[0.85] uppercase mb-8 text-white">
              {market.heroTitle}
            </h1>
            <p className="text-2xl font-light font-serif italic text-white/90 mb-4 max-w-xl">
              {market.heroDescription}
            </p>
          </div>

          <div className="lg:w-1/2 w-full relative z-10 flex justify-end">
            {/* Floating Dossier */}
            <div className="bg-black/40 backdrop-blur-md border-t-4 border-primary border-x border-b border-white/10 shadow-2xl p-10 w-full max-w-lg relative text-white">
              <span className="absolute -top-3 right-6 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-3 py-1">
                Active Report
              </span>

              <div className="grid grid-cols-2 gap-x-8 gap-y-8">
                <div>
                  <span className="block text-xs font-bold uppercase tracking-widest text-white/60 mb-1">
                    Destination
                  </span>
                  <span className="font-heading text-2xl font-bold">{market.name}</span>
                </div>
                <div>
                  <span className="block text-xs font-bold uppercase tracking-widest text-white/60 mb-1">
                    Entry Ports
                  </span>
                  <span className="text-lg text-white/90">
                    {market.ports.slice(0, 2).join(", ")}
                  </span>
                </div>
                <div className="col-span-2 border-t border-white/10 pt-6">
                  <span className="block text-xs font-bold uppercase tracking-widest text-white/60 mb-3">
                    Main Imports
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {popularProductsDetails.slice(0, 4).map((p) => (
                      <span
                        key={p?.slug}
                        className="text-sm bg-white/10 border border-white/10 px-3 py-1"
                      >
                        {p?.name}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="col-span-2 border-t border-white/10 pt-6">
                  <span className="block text-xs font-bold uppercase tracking-widest text-white/60 mb-3">
                    Compliance Regs
                  </span>
                  <div className="flex flex-col gap-2">
                    {market.compliance.slice(0, 3).map((doc, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm font-medium text-white/90">{doc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Market Dossier (Magazine Layout) */}
      <section className="py-24 bg-background border-b border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 border-y border-border">
            <div className="p-8 lg:p-16 border-b lg:border-b-0 lg:border-r border-border">
              <h3 className="font-heading text-3xl font-bold mb-6">
                {market.dossierDemandHeading}
              </h3>
              <p className="text-muted-foreground font-light leading-relaxed text-lg mb-8">
                {market.dossierDemandText}
              </p>
              <ul className="space-y-4">
                {market.marketInsights.map((insight, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-4 border-b border-muted pb-4 last:border-0 text-sm font-medium"
                  >
                    <span className="text-primary font-bold">0{idx + 1}</span>
                    <span className="leading-relaxed">{insight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 lg:p-16">
              <h3 className="font-heading text-3xl font-bold mb-6">
                {market.dossierRegulationsHeading}
              </h3>
              <p className="text-muted-foreground font-light leading-relaxed text-lg mb-8">
                {market.dossierRegulationsText}
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-muted/30 p-6 border border-border">
                  <ShieldCheck className="w-8 h-8 text-primary mb-4" />
                  <h4 className="font-bold text-sm uppercase tracking-widest mb-2">
                    Quality Control
                  </h4>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    Rigorous pre-shipment SGS/Eurofins testing.
                  </p>
                </div>
                <div className="bg-muted/30 p-6 border border-border">
                  <FileText className="w-8 h-8 text-primary mb-4" />
                  <h4 className="font-bold text-sm uppercase tracking-widest mb-2">
                    Customs Clearance
                  </h4>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    Flawless Phyto & Origin documentation supplied.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Massive Image Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <Image
          loading="lazy"
          src={heroImage}
          alt={`Shipping to ${market.name}`}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-6">
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-black uppercase text-white leading-[0.9] tracking-tighter">
            {market.name} Imported
            <br />
            <span className="text-primary">Massive Volumes</span>
            <br />
            Of Spices Last Year
          </h2>
        </div>
      </section>

      {/* SECTION 4: Products Asymmetrical */}
      {featuredProduct && (
        <section className="py-16 lg:py-20 bg-background border-b border-border">
          <div className="container mx-auto px-6 lg:px-12">
            <h2 className="font-heading text-4xl lg:text-5xl font-black uppercase mb-10">
              Procurement Targets
            </h2>

            <div className="grid lg:grid-cols-12 gap-12 items-start">
              {/* Massive Featured Product */}
              <div className="lg:col-span-8 group">
                <div className="aspect-[16/9] lg:aspect-[21/9] relative mb-6 overflow-hidden border border-border">
                  <Image
                    loading="lazy"
                    src={featuredProduct.variants[0]?.images[0]?.src || "/images/sheesh-logo.webp"}
                    alt={featuredProduct.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="border-t-2 border-foreground pt-3">
                    <span className="text-[10px] font-bold uppercase text-muted-foreground block mb-1">
                      Commodity
                    </span>
                    <span className="text-sm font-bold line-clamp-1">{featuredProduct.name}</span>
                  </div>
                  <div className="border-t-2 border-muted pt-3">
                    <span className="text-[10px] font-bold uppercase text-muted-foreground block mb-1">
                      Format
                    </span>
                    <span className="text-sm font-bold">Bulk FCL</span>
                  </div>
                  <div className="border-t-2 border-muted pt-3">
                    <span className="text-[10px] font-bold uppercase text-muted-foreground block mb-1">
                      Compliance
                    </span>
                    <span className="text-sm font-bold">Tested</span>
                  </div>
                  <div className="border-t-2 border-muted pt-3">
                    <span className="text-[10px] font-bold uppercase text-muted-foreground block mb-1">
                      Origin
                    </span>
                    <span className="text-sm font-bold">India</span>
                  </div>
                </div>
                <h3 className="font-heading text-3xl lg:text-4xl font-bold mb-4">
                  {featuredProduct.name}
                </h3>
                <p className="text-lg text-muted-foreground font-light mb-6 max-w-3xl leading-relaxed line-clamp-2">
                  {featuredProduct.description}
                </p>
                <Link
                  href={`/products/${featuredProduct.categorySlug}/${featuredProduct.slug}`}
                  className="inline-block bg-foreground text-background px-6 py-3 font-bold uppercase tracking-widest text-xs hover:bg-foreground/90 transition-colors"
                >
                  View Full Specifications
                </Link>
              </div>

              {/* Secondary Editorial Strips */}
              <div className="lg:col-span-4 flex flex-col gap-0 border-l border-border pl-0 lg:pl-10 mt-10 lg:mt-0">
                <h4 className="font-bold uppercase tracking-widest text-xs mb-6 border-b border-border pb-3">
                  Other High-Demand Imports
                </h4>
                {secondaryProducts.map(
                  (product) =>
                    product && (
                      <Link
                        key={product.slug}
                        href={`/products/${product.categorySlug}/${product.slug}`}
                        className="group block py-5 border-b border-border last:border-0"
                      >
                        <h5 className="font-heading text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {product.name}
                        </h5>
                        <p className="text-muted-foreground font-light line-clamp-2 text-xs leading-relaxed">
                          {product.description}
                        </p>
                      </Link>
                    )
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 5: Export Logistics (Cargill/Olam Editorial Style) */}
      <section className="py-8 lg:py-12 bg-background border-b border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mb-10">
            <h2 className="font-heading text-4xl md:text-5xl font-black uppercase mb-4 leading-tight">
              {market.logisticsHeading}
            </h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              {market.logisticsText}
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Image Grid */}
            <div className="lg:col-span-8 flex flex-col gap-2">
              <div className="aspect-[16/9] relative border border-border">
                <Image
                  src={market.logisticsImages?.[0] || "/images/sheesh-logo.webp"}
                  alt="Loading operations at Indian export port"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="aspect-[16/9] relative border border-border">
                  <Image
                    src={market.logisticsImages?.[1] || "/images/sheesh-logo.webp"}
                    alt="Ocean vessel container logistics"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-[16/9] relative border border-border">
                  <Image
                    src={market.logisticsImages?.[2] || "/images/sheesh-logo.webp"}
                    alt={`Cargo containers arriving at ${market.ports[0] || "destination port"}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Commercial Information Sidebar */}
            <div className="lg:col-span-4 flex flex-col gap-6 lg:pl-8 lg:border-l border-border mt-6 lg:mt-0">
              <div>
                <h4 className="font-bold text-[10px] uppercase tracking-widest text-muted-foreground mb-2 border-b border-border pb-1">
                  Transit Time
                </h4>
                <p className="font-heading text-2xl font-bold">
                  {market.transitTime || "15-30 Days"}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[10px] uppercase tracking-widest text-muted-foreground mb-2 border-b border-border pb-1">
                  Destination Ports
                </h4>
                <ul className="space-y-1">
                  {market.ports.map((port, idx) => (
                    <li key={idx} className="font-heading text-xl font-bold">
                      {port}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[10px] uppercase tracking-widest text-muted-foreground mb-2 border-b border-border pb-1">
                  Container Formats
                </h4>
                <ul className="space-y-1">
                  {(market.containerFormats || ["20ft FCL", "40ft FCL", "Mixed Container"]).map(
                    (format, idx) => (
                      <li key={idx} className="font-heading text-xl font-bold">
                        {format}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Buyer Profiles */}
      <section className="py-24 lg:py-32 bg-background border-b border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between border-b-4 border-foreground pb-6 mb-16">
            <h2 className="font-heading text-4xl lg:text-5xl font-black uppercase">
              {market.buyerProfilesHeading}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
            {market.buyerProfiles.map((profile) => (
              <div key={profile.id}>
                <h3 className="font-bold uppercase tracking-widest text-sm mb-6 border-b border-primary pb-3 text-primary">
                  {profile.title}
                </h3>
                <p className="text-muted-foreground font-light leading-relaxed text-lg">
                  {profile.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: Country Specific Resources */}
      <section className="py-24 lg:py-32 bg-muted/20 border-b border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="font-heading text-5xl lg:text-6xl font-black uppercase mb-16 max-w-2xl">
            {market.resourcesHeading}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {market.resources.map((resource) => {
              const Icon = IconMap[resource.icon];
              return (
                <div
                  key={resource.id}
                  className="bg-background p-10 border border-border group hover:border-primary transition-colors flex items-center justify-between cursor-pointer"
                >
                  <div>
                    <Icon className="w-8 h-8 text-primary mb-6" />
                    <h4 className="font-heading text-3xl font-bold mb-3">{resource.title}</h4>
                    <p className="text-lg text-muted-foreground font-light">
                      {resource.description}
                    </p>
                  </div>
                  <ArrowRight className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 8: Gallery */}
      <section className="py-24 bg-background border-b border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="font-heading text-5xl font-black uppercase mb-16 text-center">
            {market.galleryHeading}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {market.galleryImages.map((img, idx) => (
              <div key={idx} className="aspect-square relative overflow-hidden bg-muted">
                <Image
                  loading="lazy"
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 text-white font-bold tracking-widest text-xs uppercase bg-black/50 px-2 py-1">
                  {img.caption}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: Country Specific FAQ */}
      <FAQSection
        title={`Importing to ${market.name}: FAQ`}
        subtitle="Trade & Compliance Queries"
        faqs={market.faqs}
        layout="editorial-list"
        className="bg-muted/10 py-24"
      />
    </main>
  );
}
