import Link from "next/link";
import { getFeaturedProducts } from "@/lib/cms/queries";
import { ProductGrid } from "@/components/products/ProductGrid";

export default async function HomePage() {
  const featuredProducts = await getFeaturedProducts();

  return (
    <div className="space-y-16 py-12">
      {/* Hero Section Placeholder */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 p-8 sm:p-16 text-white shadow-xl">
          <span className="inline-block rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-300 backdrop-blur-sm">
            Government Recognized Export House
          </span>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Premium Indian Spices & Agro Commodities for Global Importers
          </h1>
          <p className="mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
            Direct sourcing from verified agricultural clusters in India. Certified by APEDA, Spices Board, and FSSAI with guaranteed international lab compliance.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/products"
              className="rounded-md bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 transition-colors"
            >
              Explore Products
            </Link>
            <Link
              href="/request-quote"
              className="rounded-md border border-slate-600 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Request Commercial RFQ
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
              Export Ready Consignments
            </span>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Featured Export Commodities
            </h2>
          </div>
          <Link
            href="/products"
            className="mt-4 md:mt-0 text-sm font-semibold text-emerald-700 hover:text-emerald-800"
          >
            View all commodities &rarr;
          </Link>
        </div>

        <ProductGrid products={featuredProducts} />
      </section>
    </div>
  );
}
