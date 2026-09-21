import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "About Sheesh Exports | Leading Indian Agro & Spices Exporter",
  description:
    "Learn about Sheesh Exports, our farm-level sourcing network across India, state-of-the-art cleaning and processing facilities, and global shipping capabilities.",
  pathname: "/about",
});

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
          Our Foundation
        </span>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Connecting Indian Agriculture with Global Food Industries
        </h1>
        <p className="mt-6 text-base leading-relaxed text-slate-600">
          Sheesh Exports is a premier Indian export house specializing in whole spices, ground spices, oil seeds, and agro-commodities. Built on a foundation of uncompromised quality, transparent trade terms, and strict international compliance, we serve importers, distributors, and food processors in over 30 countries worldwide.
        </p>
      </div>
    </div>
  );
}
