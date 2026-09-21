import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { getCertifications } from "@/lib/cms/queries";
import Link from "next/link";

export const metadata: Metadata = buildMetadata({
  title: "Food Safety, APEDA, FSSAI & Quality Certifications",
  description:
    "Sheesh Exports is certified by APEDA, Spices Board of India, FSSAI, ISO 22000, and complies with US FDA, Halal, and Kosher regulatory benchmarks.",
  pathname: "/certifications",
});

export default async function CertificationsPage() {
  const certs = await getCertifications();

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div>
        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
          Regulatory & Quality Benchmarks
        </span>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Accreditations & Export Compliance
        </h1>
        <p className="mt-4 max-w-2xl text-base text-slate-600">
          Our consignments undergo rigorous certification and laboratory inspection to guarantee safety and compliance with international trade laws.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
        {certs.map((c) => (
          <div key={c.id} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">{c.name}</h2>
            <p className="mt-1 text-xs text-slate-500 font-medium">Issued by: {c.issuingBody}</p>
            <p className="mt-3 text-sm text-slate-600">{c.description}</p>
            <div className="mt-4 text-xs font-medium text-emerald-700">
              Registration No: {c.certificateNumber}
            </div>
            <Link
              href={`/certifications/${c.slug}`}
              className="mt-4 inline-block text-sm font-semibold text-emerald-700 hover:text-emerald-800"
            >
              View Compliance Standards &rarr;
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
