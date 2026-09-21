import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { getMarkets } from "@/lib/cms/queries";
import Link from "next/link";

export const metadata: Metadata = buildMetadata({
  title: "Global Export Corridors & International Trade Markets",
  description:
    "Sheesh Exports regularly ships Indian spices and commodities to the Middle East, GCC, North America, and Europe with full destination port compliance.",
  pathname: "/export-markets",
});

export default async function ExportMarketsPage() {
  const markets = await getMarkets();

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div>
        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
          Global Reach
        </span>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          International Export Corridors
        </h1>
        <p className="mt-4 max-w-2xl text-base text-slate-600">
          We maintain established logistics routes, customs documentation familiarity, and fast ocean transit to major commercial ports worldwide.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {markets.map((m) => (
          <div key={m.id} className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <span className="text-xs font-semibold text-emerald-700">{m.region}</span>
            <h2 className="mt-1 text-xl font-bold text-slate-900">{m.country}</h2>
            <p className="mt-3 text-sm text-slate-600 flex-1">{m.overview}</p>
            <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-500">
              <p>⏱ Est. Transit: {m.transitTimeEstimate}</p>
            </div>
            <Link
              href={`/export-markets/${m.slug}`}
              className="mt-4 text-sm font-semibold text-emerald-700 hover:text-emerald-800"
            >
              Country import guidelines &rarr;
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
