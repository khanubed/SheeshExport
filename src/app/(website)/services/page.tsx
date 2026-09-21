import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import Link from "next/link";

export const metadata: Metadata = buildMetadata({
  title: "Export Services | Private Label, Bulk Shipping & Mixed Containers",
  description:
    "Comprehensive B2B agricultural export solutions: OEM private labeling, full container bulk exports, and multi-commodity mixed container logistics from India.",
  pathname: "/services",
});

const SERVICES = [
  {
    title: "Private Label Packaging",
    slug: "private-label",
    description: "Custom OEM branding, pouch and tin packaging with international regulatory and barcode compliance.",
  },
  {
    title: "Bulk Commodity Exports",
    slug: "bulk-export",
    description: "FCL shipments in 25kg & 50kg export bags with desiccant container treatment.",
  },
  {
    title: "Mixed Container Logistics",
    slug: "mixed-container",
    description: "Consolidate multiple spices and agricultural items in a single 20ft or 40ft ocean container.",
  },
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div>
        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
          Tailored Global Trade Solutions
        </span>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Export Facilitation & Value-Added Services
        </h1>
        <p className="mt-4 max-w-2xl text-base text-slate-600">
          We combine flexible packaging, end-to-end logistics, and strict export documentation to streamline international procurement.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
        {SERVICES.map((s) => (
          <div key={s.slug} className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">{s.title}</h2>
            <p className="mt-3 text-sm text-slate-600 flex-1">{s.description}</p>
            <Link
              href={`/services/${s.slug}`}
              className="mt-6 text-sm font-semibold text-emerald-700 hover:text-emerald-800"
            >
              Explore service specs &rarr;
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
