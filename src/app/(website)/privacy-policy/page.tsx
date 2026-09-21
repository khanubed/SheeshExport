import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy | Sheesh Exports",
  description: "Our privacy policy outlining how corporate and customer inquiry data is managed securely.",
  pathname: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold text-slate-900">Privacy Policy</h1>
      <p className="mt-4 text-sm leading-relaxed text-slate-600">
        Sheesh Exports is committed to protecting your commercial and personal data. We do not sell, distribute, or lease trade inquiry information to third parties. Information provided during RFQ requests is strictly used to evaluate and execute export transactions.
      </p>
    </div>
  );
}
