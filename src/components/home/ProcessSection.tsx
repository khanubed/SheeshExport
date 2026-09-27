"use client";

import React from "react";
import { Sprout, Factory, PackageCheck, Ship, ArrowRight } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/home/AnimatedSection";

const PROCESS_STEPS = [
  {
    id: "01",
    title: "Direct Sourcing",
    desc: "We procure premium crops directly from trusted Indian farmers and auction yards at peak harvest.",
    icon: Sprout,
  },
  {
    id: "02",
    title: "Processing & QC",
    desc: "Rigorous cleaning, sorting, and lab testing in our state-of-the-art automated facilities.",
    icon: Factory,
  },
  {
    id: "03",
    title: "Custom Packaging",
    desc: "Hygienic, export-grade packing tailored precisely to your bulk or retail specifications.",
    icon: PackageCheck,
  },
  {
    id: "04",
    title: "Global Logistics",
    desc: "Seamless customs clearance and freight forwarding ensuring safe, port-to-port delivery.",
    icon: Ship,
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

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 relative">
          {/* Connecting Line for Desktop */}
          <div
            className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] border-t-2 border-dashed border-border/60"
            style={{ zIndex: 0 }}
          />

          {PROCESS_STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <StaggerItem key={idx} className="relative group">
                <div className="flex flex-col items-center text-center">
                  {/* Icon Container */}
                  <div className="w-24 h-24 rounded-2xl bg-background border border-border shadow-sm flex items-center justify-center relative mb-8 group-hover:-translate-y-2 group-hover:shadow-lg transition-all duration-300 group-hover:border-primary/50 z-10">
                    {/* Inner glowing pulse on hover */}
                    <div className="absolute inset-0 bg-primary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <Icon className="w-10 h-10 text-muted-foreground group-hover:text-primary transition-colors duration-300" />

                    {/* Step Number Badge */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shadow-sm ring-4 ring-background transition-transform duration-300 group-hover:scale-110">
                      {step.id}
                    </div>
                  </div>

                  {/* Text Content */}
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-[250px]">
                    {step.desc}
                  </p>
                </div>

                {/* Mobile/Tablet arrow indicators */}
                {idx < PROCESS_STEPS.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-8 -mb-4 text-border">
                    <ArrowRight className="w-6 h-6 rotate-90 md:rotate-0" />
                  </div>
                )}
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
