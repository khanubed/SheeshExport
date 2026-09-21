import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import Link from "next/link";

export const metadata: Metadata = buildMetadata({
  title: "Bulk Agricultural Commodity & Spice Exports India | FCL Shipping",
  description:
    "Full container load (FCL) wholesale spice export shipments from India in 25kg, 50kg PP, HDPE, and Jute bags. Direct port clearance via Mundra and Nhava Sheva.",
  pathname: "/services/bulk-export",
});

export default function BulkExportPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
          Commercial Volume
        </span>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Bulk Commodity Exports & Container Freight
        </h1>
        <p className="mt-4 text-base leading-relaxed text-slate-600">
          Engineered for global spice mills, oil extractors, and wholesale distributors requiring multi-ton recurring shipments. Every container is inspected, fumigated, and protected with dry-bag container desiccants.
        </p>

        <div className="mt-8">
          <Link
            href="/request-quote?service=bulk-export"
            className="inline-flex rounded-md bg-emerald-700 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-800"
          >
            Request Bulk Container Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
