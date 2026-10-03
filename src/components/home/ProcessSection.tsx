"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/home/AnimatedSection";

const PROCESS_STEPS = [
  {
    id: "01",
    title: "Direct Sourcing",
    desc: "We procure premium crops directly from trusted Indian farmers and auction yards at peak harvest.",
    image: "/images/about/infra-sourcing.webp",
  },
  {
    id: "02",
    title: "Processing & QC",
    desc: "Rigorous cleaning, sorting, and lab testing in our state-of-the-art automated facilities.",
    image: "/images/about/infra-processing.webp",
  },
  {
    id: "03",
    title: "Custom Packaging",
    desc: "Hygienic, export-grade packing tailored precisely to your bulk or retail specifications.",
    image: "/images/about/infra-packaging.webp",
  },
  {
    id: "04",
    title: "Global Logistics",
    desc: "Seamless customs clearance and freight forwarding ensuring safe, port-to-port delivery.",
    image: "/images/about/global-delivery.webp",
  },
];

export function ProcessSection() {
  return (
    <section className="py-24 bg-card relative overflow-hidden border-t border-border">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <FadeIn>
            <span className="text-xs font-semibold tracking-wider uppercase text-primary mb-4 block">
              How We Work
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
              The Export Supply Chain
            </h2>
            <p className="text-muted-foreground text-lg">
              From Indian farms to your destination port, our streamlined process ensures quality
              control, unmatched transparency, and timely delivery.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative">
          {PROCESS_STEPS.map((step, idx) => {
            return (
              <StaggerItem key={idx} className="relative group">
                <div className="flex flex-col text-left">
                  {/* Image Container */}
                  <div
                    className="w-full aspect-[4/3] md:aspect-[4/5] bg-muted relative mb-8 overflow-hidden group-hover:-translate-y-2 group-hover:shadow-2xl transition-all duration-500 z-10 border border-border"
                    style={{ position: "relative" }}
                  >
                    <Image
                      loading="lazy"
                      src={step.image}
                      alt={step.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover transition-all duration-700 scale-105 group-hover:scale-100"
                    />
                    {/* Inner glowing pulse on hover */}
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    {/* Step Number Badge */}
                    <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm text-foreground px-4 py-2 font-heading text-xl font-bold border border-border shadow-sm">
                      {step.id}
                    </div>
                  </div>

                  {/* Text Content */}
                  <h3 className="font-heading text-2xl font-medium text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed">{step.desc}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
