import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { getProducts, getCategories } from "@/lib/cms/queries";
import { ProductGrid } from "@/components/products/ProductGrid";
import Link from "next/link";

export const metadata: Metadata = buildMetadata({
  title: "Export Products Catalog | Whole & Ground Spices, Oilseeds, Pulses",
  description:
    "Explore our complete export catalog of Indian spices, red chillies, turmeric, cumin seeds, oil seeds, and pulses. B2B specifications, MOQ, and lab compliance.",
  pathname: "/products",
});

export default async function ProductsPage() {
  const [products, categories] = await Promise.all([
    getProducts(),
    getCategories(),
  ]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div>
        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
          Global B2B Catalog
        </span>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Agricultural Commodities & Spices
        </h1>
        <p className="mt-4 max-w-2xl text-base text-slate-600">
          Standardized export grades, customized packaging, and third-party laboratory verified consignments dispatched directly from India.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="mt-8 flex flex-wrap gap-2 border-b border-slate-200 pb-4">
        <Link
          href="/products"
          className="rounded-full bg-emerald-700 px-4 py-1.5 text-xs font-medium text-white"
        >
          All Commodities
        </Link>
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={`/categories/${cat.slug}`}
            className="rounded-full bg-slate-100 px-4 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-200 transition-colors"
          >
            {cat.name}
          </Link>
        ))}
      </div>

      <div className="mt-8">
        <ProductGrid products={products} />
      </div>
    </div>
  );
}
