import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import Link from "next/link";

export const metadata: Metadata = buildMetadata({
  title: "Private Label Spices & OEM Packaging Services India",
  description:
    "Custom private label spice packaging from India. Pouches, plastic jars, composite cans, and tins with bilingual multi-country labeling compliance.",
  pathname: "/services/private-label",
});

export default function PrivateLabelPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
          OEM Contract Packaging
        </span>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Private Label & Retail Packaging
        </h1>
        <p className="mt-4 text-base leading-relaxed text-slate-600">
          Sheesh Exports provides turnkey private label packaging for international supermarket chains, importers, and spice brands. From nitrogen-flushed stand-up zip pouches to PET grinder jars, we pack to exact buyer specifications with full batch traceability and barcode integration.
        </p>

        <div className="mt-8">
          <Link
            href="/request-quote?service=private-label"
            className="inline-flex rounded-md bg-emerald-700 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-800"
          >
            Inquire About Private Label Packaging
          </Link>
        </div>
      </div>
    </div>
  );
}
