import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Export Process & Logistics Operations Workflow",
  description:
    "Our transparent 6-step export process from procurement, cleaning, testing, custom packing, container loading to customs dispatch.",
  pathname: "/export-process",
});

const STEPS = [
  { step: "01", title: "Raw Material Procurement", desc: "Sourcing directly from verified farming clusters in Andhra Pradesh, Gujarat, and Rajasthan." },
  { step: "02", title: "Cleaning & Sortex Grading", desc: "Machine destoning, magnetic separation, and optical sorting to remove foreign matter." },
  { step: "03", title: "Quality & Lab Analysis", desc: "Aflatoxin, pesticide residue, moisture, and microbial testing in accredited laboratories." },
  { step: "04", title: "Export-Grade Packaging", desc: "Packing in multiwall paper, vacuum pouches, or PP/Jute bags with moisture desiccants." },
  { step: "05", title: "Container Stuffing & Fumigation", desc: "Sealed container loading under direct supervisory inspection at processing units." },
  { step: "06", title: "Customs Clearance & Bill of Lading", desc: "Port dispatch via Mundra or Nhava Sheva with complete phytosanitary and origin papers." },
];

export default function ExportProcessPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
          Operational Precision
        </span>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          End-to-End Export Workflow
        </h1>
        <p className="mt-4 text-base leading-relaxed text-slate-600">
          Every shipment undergoes our standardized 6-step processing protocol to ensure complete order accuracy, safety compliance, and on-time ocean transit.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {STEPS.map((s) => (
          <div key={s.step} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <span className="text-2xl font-black text-emerald-700">{s.step}</span>
            <h2 className="mt-2 text-lg font-bold text-slate-900">{s.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
