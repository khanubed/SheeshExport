import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarketBySlug, getMarkets } from "@/lib/cms/queries";
import { buildMetadata } from "@/lib/seo/metadata";
import Link from "next/link";

interface MarketPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const markets = await getMarkets();
  return markets.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: MarketPageProps): Promise<Metadata> {
  const { slug } = await params;
  const market = await getMarketBySlug(slug);

  if (!market) {
    return buildMetadata({
      title: "Market Not Found",
      pathname: `/export-markets/${slug}`,
    });
  }

  return buildMetadata({
    title: market.seo.title || `Exporting Indian Spices to ${market.country}`,
    description: market.seo.description || market.overview,
    pathname: `/export-markets/${market.slug}`,
  });
}

export default async function MarketDetailPage({ params }: MarketPageProps) {
  const { slug } = await params;
  const market = await getMarketBySlug(slug);

  if (!market) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="mb-6 flex items-center space-x-2 text-xs text-slate-500">
        <Link href="/" className="hover:text-slate-800">Home</Link>
        <span>/</span>
        <Link href="/export-markets" className="hover:text-slate-800">Export Markets</Link>
        <span>/</span>
        <span className="font-semibold text-slate-900">{market.country}</span>
      </nav>

      <div className="max-w-3xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
          Trade Corridor Intelligence
        </span>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Exporting Indian Commodities to {market.country}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-slate-600">
          {market.overview}
        </p>

        <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-lg font-bold text-slate-900">Key Regulatory & Customs Requirements</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            {market.keyImportRequirements.map((req, i) => (
              <li key={i} className="flex items-start">
                <span className="mr-2 text-emerald-600">✓</span>
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex gap-4">
          <Link
            href={`/request-quote?market=${encodeURIComponent(market.country)}`}
            className="rounded-md bg-emerald-700 px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-emerald-800"
          >
            Get Shipping & Price Quote to {market.country}
          </Link>
        </div>
      </div>
    </div>
  );
}
