import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, MapPin, Building2, TrendingUp, Ship } from "lucide-react";
import { CITY_MARKETS, COUNTRY_MARKETS } from "@/lib/data/international";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";

interface PageProps {
  params: Promise<{ country: string; city: string }>;
}

export async function generateStaticParams() {
  return CITY_MARKETS.map((city) => ({
    country: city.country,
    city: city.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const city = CITY_MARKETS.find(
    (c) => c.slug === resolvedParams.city && c.country === resolvedParams.country
  );
  
  if (!city) {
    return {};
  }

  return buildMetadata({
    title: `Sourcing Indian Spices & Commodities in ${city.city} | Sheesh Exports`,
    description: city.intro,
  });
}

export default async function CityMarketPage({ params }: PageProps) {
  const resolvedParams = await params;
  const city = CITY_MARKETS.find(
    (c) => c.slug === resolvedParams.city && c.country === resolvedParams.country
  );
  const country = COUNTRY_MARKETS.find((c) => c.slug === resolvedParams.country);

  if (!city || !country) {
    notFound();
  }

  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: `Sourcing Agricultural Commodities in ${city.city}`,
      description: city.intro,
      url: `https://sheeshexports.com/international/${country.slug}/${city.slug}`,
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      <JsonLd data={schemaData} />

      {/* SECTION 1: Editorial Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 border-b border-border relative bg-muted/20">
        <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02] bg-[size:32px_32px] pointer-events-none" />
        <div className="container mx-auto px-6 sm:px-12 lg:px-24">
          <div className="max-w-4xl relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <Link href={`/international/${country.slug}`} className="text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">
                {country.name}
              </Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-sm font-bold uppercase tracking-widest text-foreground">
                {city.city}
              </span>
            </div>
            
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-8">
              Supplying Indian Spices To Buyers In {city.city}
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground font-sans font-light leading-relaxed max-w-2xl">
              {city.intro}. Serving local importers, distributors, and food manufacturing facilities with premium, lab-tested agricultural commodities.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: Market Snapshot & Logistics */}
      <section className="py-20 lg:py-32 bg-background border-b border-border">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border border-border p-8 hover:border-primary/50 transition-colors">
              <MapPin className="w-8 h-8 text-primary mb-6" />
              <h3 className="font-bold text-xl mb-2">Location</h3>
              <p className="text-muted-foreground">{city.city}, {country.name}</p>
            </div>
            <div className="border border-border p-8 hover:border-primary/50 transition-colors">
              <Ship className="w-8 h-8 text-primary mb-6" />
              <h3 className="font-bold text-xl mb-2">Nearest Port</h3>
              <p className="text-muted-foreground">{city.nearbyPort}</p>
            </div>
            <div className="border border-border p-8 hover:border-primary/50 transition-colors">
              <Building2 className="w-8 h-8 text-primary mb-6" />
              <h3 className="font-bold text-xl mb-2">Key Industries</h3>
              <p className="text-muted-foreground">{city.industries.join(", ")}</p>
            </div>
            <div className="border border-border p-8 hover:border-primary/50 transition-colors">
              <TrendingUp className="w-8 h-8 text-primary mb-6" />
              <h3 className="font-bold text-xl mb-2">Market Type</h3>
              <p className="text-muted-foreground">High Volume Import Hub</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Popular Products in the City */}
      <section className="py-24 lg:py-32 bg-background border-b border-border">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-12">
            Importers In {city.city} Commonly Source:
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {country.popularProducts.slice(0, 3).map((slug) => (
              <div key={slug} className="group border border-border p-8 flex flex-col bg-muted/10 hover:bg-muted/30 transition-colors">
                <h4 className="font-heading text-2xl font-bold mb-4 capitalize">
                  {slug.replace(/-/g, ' ').replace('premium', '')}
                </h4>
                <p className="text-muted-foreground font-light mb-8 flex-grow">
                  Highly demanded by local {city.industries[0].toLowerCase()} sectors in {city.city}, requiring strict adherence to {country.name} import regulations.
                </p>
                <Link href={`/products`} className="inline-flex items-center text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">
                  View Specifications <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Logistics Information & CTA */}
      <section className="py-24 lg:py-32 bg-foreground text-background">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-6 text-background">
                Direct Routing to {city.nearbyPort}
              </h2>
              <p className="text-xl font-light text-background/70 leading-relaxed mb-8">
                We manage the entire export supply chain from our facilities in India directly to {city.nearbyPort}. Our logistics team handles all pre-shipment documentation, ensuring smooth customs clearance for your broker in {city.city}.
              </p>
              <ul className="space-y-4 mb-12">
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0 mt-1" />
                  <span className="text-background/90">FCL (Full Container Load) and LCL shipments available.</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0 mt-1" />
                  <span className="text-background/90">Mixed container consolidation for diverse product requirements.</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0 mt-1" />
                  <span className="text-background/90">Complete documentation packet provided prior to vessel arrival.</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-background/10 border border-background/20 p-8 sm:p-12">
              <h3 className="font-heading text-3xl font-bold mb-4 text-background">Request Quotation</h3>
              <p className="text-background/70 font-light mb-8">
                Tell us what you need to import to {city.city}. We will provide a formalized quotation including freight costs to {city.nearbyPort}.
              </p>
              <Link 
                href="/request-quote"
                className="w-full inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-primary/90 transition-colors"
              >
                Submit Requirement
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
