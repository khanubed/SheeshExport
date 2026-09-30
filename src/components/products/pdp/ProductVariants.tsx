"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product, Variant } from "@/lib/data/types";
import { cn } from "@/lib/utils";
import gsap from "gsap";

interface ProductVariantsProps {
  product: Product;
  selectedVariant: Variant;
  onSelect: (v: Variant) => void;
}

const certMapping: Record<string, string> = {
  "ISO 22000": "Food Safety Management",
  "US FDA": "United States Compliance",
  APEDA: "Government Export Authority",
  "Spices Board India": "Industry Regulation",
  FSSAI: "Food Safety and Standards Authority",
  "SGS Inspected": "Pre-shipment Inspection",
};

const getCertFullName = (cert: string) =>
  certMapping[cert] || "International Quality Certification";

const getIdealFor = (product: Product) => {
  const allBestFor = product.packagingOptions.flatMap((p) =>
    p.bestFor.split(",").map((s) => s.trim())
  );
  const unique = Array.from(new Set(allBestFor)).filter(Boolean);
  return unique.length > 0
    ? unique
    : ["Commercial Extraction", "Spice Blending", "Retail Packaging"];
};

export function ProductVariants({ product, selectedVariant, onSelect }: ProductVariantsProps) {
  const [displayVariant, setDisplayVariant] = useState<Variant>(selectedVariant);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const originTextRef = useRef<HTMLDivElement>(null);
  const isFirstMount = useRef(true);

  const getVariantImage = (v: Variant, index = 0): string => {
    let img: any = null;
    if (v.images && v.images.length > index && v.images[index]) {
      img = v.images[index];
    } else if (v.originStory?.images && v.originStory.images.length > 0) {
      img = v.originStory.images[0];
    }
    if (!img) return "/images/sheesh-logo.webp";
    return typeof img === "string" ? img : img.src;
  };

  // Exit animation when selected variant changes
  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }
    if (selectedVariant.id === displayVariant.id) return;
    if (!contentRef.current || !imageRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setDisplayVariant(selectedVariant);
        },
      });

      tl.to(imageRef.current, { opacity: 0, duration: 0.4, ease: "power2.inOut" }, 0);
      tl.to(imageRef.current, { opacity: 0, duration: 0.4, ease: "power2.inOut" }, 0);
      tl.to(originTextRef.current, { opacity: 0, y: 10, duration: 0.4, ease: "power2.inOut" }, 0);
      tl.to(
        contentRef.current?.querySelectorAll(".gsap-item") || [],
        { opacity: 0, y: 15, duration: 0.4, stagger: 0.03, ease: "power2.inOut" },
        0
      );
    });

    return () => ctx.revert();
  }, [selectedVariant, displayVariant.id]);

  // Enter animation when display variant updates
  useEffect(() => {
    if (!contentRef.current || !imageRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Ensure elements are initially hidden before animating in
      gsap.set(imageRef.current, { opacity: 0, scale: 1.05 });
      gsap.set(originTextRef.current, { opacity: 0, y: -10 });
      gsap.set(contentRef.current?.querySelectorAll(".gsap-item") || [], {
        opacity: 0,
        y: -15,
      });

      tl.to(imageRef.current, { opacity: 1, scale: 1, duration: 0.9, ease: "power2.out" }, 0.1);
      tl.to(originTextRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, 0.15);

      tl.to(
        contentRef.current?.querySelectorAll(".gsap-item") || [],
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.06, ease: "power2.out" },
        0.15
      );
    });

    return () => ctx.revert();
  }, [displayVariant]);

  const currentDisplayImage = getVariantImage(displayVariant, 0);

  return (
    <section className="bg-background text-foreground border-b border-border">
      {/* LAYER 1: VARIANT SELECTION (SAMPLE STRIP) */}
      {product.variants.length > 1 && (
        <div className="max-w-8xl mx-auto px-4 lg:px-8 py-8 lg:py-10 border-b border-border">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/80 mb-6 font-sans">
            Commercial Grade Explorer
          </h2>

          <div className="flex flex-row overflow-x-auto hide-scrollbar gap-3 lg:gap-4 pb-4">
            {product.variants.map((v) => {
              const isActive = selectedVariant.id === v.id;
              return (
                <button
                  key={v.id}
                  onClick={() => onSelect(v)}
                  className={cn(
                    "flex-shrink-0 px-6 py-4 rounded transition-all duration-300 border text-left min-w-[200px]",
                    isActive
                      ? "bg-primary border-primary text-primary-foreground shadow-lg"
                      : "bg-background border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                  )}
                >
                  <div className="text-lg font-heading mb-1">{v.name}</div>
                  <div
                    className={cn(
                      "text-[10px] font-sans uppercase tracking-widest",
                      isActive ? "text-primary-foreground/80" : "text-muted-foreground/80"
                    )}
                  >
                    {v.attributes[0]?.value || "Premium"}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* LAYER 2: COMMERCIAL INTELLIGENCE VIEW */}
      <div className="max-w-screen-xl mx-auto px-4 lg:px-8 py-10 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 lg:items-start">
          {/* IMAGE AREA */}
          <div className="w-full lg:w-[35%] sticky top-24 order-2 lg:order-1 flex flex-col gap-6 h-auto lg:h-[80vh] min-h-[500px]">
            <div className="relative w-full h-[60%] lg:h-[60%] overflow-hidden bg-muted/50 rounded min-h-[300px]">
              <div ref={imageRef} className="absolute inset-0 w-full h-full opacity-0">
                <Image
                  src={currentDisplayImage}
                  alt={displayVariant.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 35vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div ref={originTextRef} className="flex-1 bg-muted/30 p-6 rounded border border-border/50 overflow-y-auto opacity-0">
              <h3 className="text-[10px] uppercase tracking-[0.15em] text-foreground mb-3 font-bold font-sans">
                {displayVariant.originStory?.location || "Origin"}
              </h3>
              <p className="text-sm text-muted-foreground font-heading leading-relaxed">
                {displayVariant.originStory?.story || product.description}
              </p>
            </div>
          </div>

          {/* DATA AREA */}
          <div className="w-full lg:w-[65%] flex flex-col justify-center order-1 lg:order-2">
            <div ref={contentRef} className="flex flex-col gap-8">
              {/* Header */}
              <div className="gsap-item opacity-0">
                <h1 className="text-4xl lg:text-5xl font-heading tracking-tight text-foreground mb-4 leading-none">
                  {displayVariant.name}
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed font-heading">
                  {displayVariant.shortDescription ||
                    "Premium export grade cultivated for specialized processing and exceptional yield."}
                </p>
              </div>

              {/* Commercial Snapshot */}
              <div className="gsap-item opacity-0">
                <div className="flex flex-wrap gap-x-8 gap-y-6 pb-6 border-b border-border">
                  {displayVariant.attributes.map((attr) => (
                    <div key={attr.label} className="flex flex-col gap-1.5">
                      <span className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground/80 font-sans font-bold">
                        {attr.label}
                      </span>
                      <span className="text-sm font-mono text-foreground">{attr.value}</span>
                    </div>
                  ))}
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground/80 font-sans font-bold">
                      MOQ
                    </span>
                    <span className="text-sm font-mono text-foreground">
                      {product.packagingOptions[0]?.moq || "14 MT"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Specification Dossier */}
              <div className="gsap-item opacity-0">
                <h3 className="text-[10px] uppercase tracking-[0.15em] text-foreground mb-4 font-bold font-sans">
                  Commercial Specifications
                </h3>
                <div className="flex flex-col gap-4">
                  {displayVariant.specifications.map((spec) => (
                    <div
                      key={spec.parameter}
                      className="flex justify-between items-baseline border-b border-border/50 pb-3"
                    >
                      <span className="text-sm text-muted-foreground font-sans">{spec.parameter}</span>
                      <span className="text-sm font-mono text-foreground font-medium text-right">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Export Compliance & Logistics */}
              <div className="gsap-item opacity-0 flex flex-col gap-8">
                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.15em] text-foreground mb-4 font-bold font-sans">
                    Export Compliance
                  </h3>
                  <div className="flex flex-col gap-4">
                    {product.certifications.slice(0, 4).map((cert) => (
                      <div key={cert} className="flex flex-col gap-1">
                        <span className="text-sm font-bold font-sans text-foreground">{cert}</span>
                        <span className="text-xs text-muted-foreground font-heading italic">
                          {getCertFullName(cert)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.15em] text-foreground mb-4 font-bold font-sans">
                    Commercial Logistics
                  </h3>
                  <div className="flex flex-col gap-4 sm:gap-3 text-xs sm:text-sm font-sans">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end border-b border-border/50 pb-2 gap-1 sm:gap-4">
                      <span className="text-muted-foreground">20FT Container</span>
                      <span className="font-mono font-medium text-foreground sm:text-right">
                        {product.shipping.capacity20ft}
                      </span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end border-b border-border/50 pb-2 gap-1 sm:gap-4">
                      <span className="text-muted-foreground">40FT Container</span>
                      <span className="font-mono font-medium text-foreground sm:text-right">
                        {product.shipping.capacity40ft}
                      </span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end border-b border-border/50 pb-2 gap-1 sm:gap-4">
                      <span className="text-muted-foreground">Transit Time</span>
                      <span className="font-mono font-medium text-foreground sm:text-right">
                        {product.shipping.transitTime.split(" ")[0]} Days
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Buyers Choose This Grade */}
              <div className="gsap-item opacity-0">
                <h3 className="text-[10px] uppercase tracking-[0.15em] text-foreground mb-4 font-bold font-sans">
                  Why Buyers Choose This Grade
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-sans">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-muted-foreground/80 block mb-2">
                      Ideal For
                    </span>
                    <ul className="flex flex-col gap-3">
                      {getIdealFor(product)
                        .slice(0, 4)
                        .map((item, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-3">
                            <span className="text-muted-foreground/60 mt-0.5 font-heading">—</span>
                            {item}
                          </li>
                        ))}
                    </ul>
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-widest text-muted-foreground/80 block mb-2">
                      Strengths
                    </span>
                    <ul className="flex flex-col gap-3">
                      {displayVariant.attributes.slice(0, 4).map((attr, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-3">
                          <span className="text-muted-foreground/60 mt-0.5 font-heading">—</span>
                          High {attr.label}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="gsap-item opacity-0 pt-2">
                <Link
                  href={`/request-quote?product=${product.slug}&variant=${displayVariant.slug}`}
                >
                  <button className="w-full lg:w-auto px-10 py-5 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-[0.15em] hover:bg-primary/90 transition-colors">
                    Request Corporate Quote
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
