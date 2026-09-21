import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Quality Assurance & Laboratory Testing Standards",
  description:
    "Our quality control protocols: automated sorting, metal detection, moisture testing, microbiological parameters, and pesticide residue screening.",
  pathname: "/quality",
});

export default function QualityPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
          Uncompromised Standards
        </span>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Quality Control & Laboratory Verification
        </h1>
        <p className="mt-6 text-base leading-relaxed text-slate-600">
          At Sheesh Exports, quality is not tested after production—it is engineered into every stage of processing. From farm-gate moisture checks to modern optical sortex cleaning, magnet destoning, and certified independent lab testing (SGS, Eurofins, Spices Board), we ensure consignments match strict international import regulations.
        </p>
      </div>
    </div>
  );
}
