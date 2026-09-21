import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import Link from "next/link";

export const metadata: Metadata = buildMetadata({
  title: "Mixed Container Spice Consolidation Services India",
  description:
    "Combine multiple Indian spices and agro-commodities into a single 20ft or 40ft container load. Optimize working capital and inventory holding costs.",
  pathname: "/services/mixed-container",
});

export default function MixedContainerPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
          Flexible Logistics
        </span>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Mixed Container Cargo Consolidation
        </h1>
        <p className="mt-4 text-base leading-relaxed text-slate-600">
          Don&apos;t lock up capital ordering entire containers of single products. Our mixed-container service allows international buyers to consolidate chilli, cumin, turmeric, coriander, and sesame seeds inside one container load, fully itemized on a single bill of lading.
        </p>

        <div className="mt-8">
          <Link
            href="/request-quote?service=mixed-container"
            className="inline-flex rounded-md bg-emerald-700 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-800"
          >
            Plan a Mixed Container Consignment
          </Link>
        </div>
      </div>
    </div>
  );
}
