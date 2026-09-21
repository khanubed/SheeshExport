import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Terms of International Trade & Conditions | Sheesh Exports",
  description: "Standard commercial trade terms, Incoterms governance, payment methods (L/C, T/T), and force majeure conditions.",
  pathname: "/terms",
});

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold text-slate-900">Terms of International Trade</h1>
      <p className="mt-4 text-sm leading-relaxed text-slate-600">
        All export consignments, proforma invoices, and sale contracts executed by Sheesh Exports are governed by the International Chamber of Commerce Incoterms (Incoterms 2020) and applicable export laws of the Republic of India.
      </p>
    </div>
  );
}
