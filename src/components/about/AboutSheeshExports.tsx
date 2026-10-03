import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

export function AboutSheeshExports() {
  const trustIndicators = [
    "Direct Farm Sourcing",
    "International Quality Standards",
    "Flexible Packaging Solutions",
    "Multi-Country Export Network",
    "End-to-End Export Documentation",
    "Dedicated Procurement Support",
  ];

  return (
    <section className="py-24 bg-white border-t border-border/50 text-foreground">
      <div className="container mx-auto px-6 lg:px-12 max-w-8xl">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-stretch">
          {/* Content Column - 45% */}
          <div className="w-full lg:w-[45%] flex flex-col justify-center">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4">
                About Sheesh Exports
              </span>

              <h2 className="text-4xl lg:text-5xl font-serif text-slate-900 leading-[1.1] mb-6 tracking-tight">
                Connecting Indian Agricultural Excellence With Global Markets
              </h2>

              <h3 className="text-xl lg:text-2xl text-slate-700 font-serif mb-8 leading-snug">
                Sheesh Exports is a trusted Indian exporter of premium spices, agro commodities,
                grains, pulses, oil seeds and food ingredients, serving importers, distributors,
                food manufacturers and retail brands across international markets.
              </h3>
            </div>

            <div className="prose prose-slate prose-lg max-w-none text-muted-foreground mb-12 font-light leading-relaxed">
              <p>
                As a premier Indian spice exporter and bulk food ingredient supplier, we bridge the
                gap between agrarian heartlands and the global food supply chain. Our operations are
                rooted in ethical procurement, working closely with farmers to deliver export
                quality spices and agro commodities that meet rigorous international specifications.
              </p>
              <p>
                We specialize in end-to-end B2B trade, offering reliable supply for food
                manufacturers and providing customized private label export solutions for retail
                brands globally. Our commitment to absolute quality, transparent traceability, and
                seamless logistics makes us the definitive partner for food products exported from
                India.
              </p>
            </div>

            <div>
              <ul className="space-y-4">
                {trustIndicators.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-4 text-slate-800 font-medium text-sm tracking-wide"
                  >
                    <Check className="w-5 h-5 text-amber-700 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Visual Column - 55% */}
          <div className="w-full lg:w-[55%] relative flex items-center">
            <div className="relative w-full aspect-[4/5] bg-slate-100 overflow-hidden">
              <Image
                src="/images/sheesh-logo.webp"
                alt="Premium spice processing facility and export operations"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 55vw"
                priority
              />
            </div>
          </div>
        </div>

        {/* Global Reach Strip */}
        <div className="mt-24 pt-12 border-t border-slate-200">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
              Serving Importers Across
            </span>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-slate-900 font-serif text-lg lg:text-xl">
              <span>North America</span>
              <span className="hidden md:inline text-slate-300">•</span>
              <span>Europe</span>
              <span className="hidden md:inline text-slate-300">•</span>
              <span>Middle East</span>
              <span className="hidden md:inline text-slate-300">•</span>
              <span>Asia Pacific</span>
              <span className="hidden md:inline text-slate-300">•</span>
              <span>Africa</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
