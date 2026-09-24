"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product, Variant } from "@/lib/data/types";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import {
  Check,
  ChevronDown,
  ChevronUp,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Flame,
  Scale,
  Layers,
  Copy,
  CheckCheck,
  Eye,
  FileSpreadsheet,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductVariantsProps {
  product: Product;
  selectedVariant: Variant;
  onSelect: (v: Variant) => void;
}

export function ProductVariants({
  product,
  selectedVariant,
  onSelect,
}: ProductVariantsProps) {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(false);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  const sectionRef = useRef<HTMLElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);

  // GSAP entrance animation for variant cards
  useEffect(() => {
    if (!cardsContainerRef.current) return;
    const cards = cardsContainerRef.current.children;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 24,
          scale: 0.98,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [product.id]);

  // GSAP animation when selected variant or expanded state changes
  useEffect(() => {
    if (!detailsRef.current || !isExpanded) return;

    const ctx = gsap.context(() => {
      const items = detailsRef.current?.querySelectorAll(".spec-animate-item");
      if (items && items.length > 0) {
        gsap.fromTo(
          items,
          { opacity: 0, y: 12 },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.03,
            ease: "power2.out",
          }
        );
      }
    }, detailsRef);

    return () => ctx.revert();
  }, [selectedVariant.id, isExpanded]);

  // Reset active image index when variant changes
  useEffect(() => {
    setActiveImageIndex(0);
  }, [selectedVariant.id]);

  const handleCardClick = (variant: Variant) => {
    if (selectedVariant.id === variant.id) {
      // Toggle expansion if already selected
      setIsExpanded((prev) => !prev);
    } else {
      onSelect(variant);
      setIsExpanded(true);
    }
  };

  const handleCopySpecs = () => {
    const text = [
      `Product: ${product.name}`,
      `Grade / Variant: ${selectedVariant.name}`,
      selectedVariant.shortDescription ? `Description: ${selectedVariant.shortDescription}` : "",
      "--- Key Attributes ---",
      ...selectedVariant.attributes.map((a) => `${a.label}: ${a.value}`),
      "--- Lab Specifications ---",
      ...selectedVariant.specifications.map((s) => `${s.parameter}: ${s.value}`),
    ]
      .filter(Boolean)
      .join("\n");

    if (navigator?.clipboard) {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  // Helper to get image for any variant
  const getVariantImage = (v: Variant, index = 0): string => {
    if (v.images && v.images.length > index && v.images[index]) {
      return v.images[index];
    }
    if (product.originStory?.images && product.originStory.images.length > 0) {
      return product.originStory.images[0];
    }
    return "/images/products/red-chilli.jpg";
  };

  const currentDisplayImage = getVariantImage(selectedVariant, activeImageIndex);

  return (
    <section
      ref={sectionRef}
      className="py-14 bg-gradient-to-b from-white via-slate-50/50 to-white border-y border-slate-100 relative overflow-hidden"
    >
      {/* Decorative ambient background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-slate-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Header with Luxury Metadata */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 pb-4 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-900 text-white uppercase tracking-wider">
                <Sparkles className="w-3 h-3 text-amber-400" />
                Export Grade Selection
              </span>
              <span className="text-xs text-slate-600 font-medium">
                {product.variants.length} Commercial Grades Available
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 tracking-tight">
              Select Grade & Commercial Specifications
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              Each commercial grade is curated for specific processing applications, heat ranges, and international food safety standards. Click any card below to open its laboratory parameters.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start md:self-auto">
            <span className="text-xs text-slate-600 hidden sm:inline">
              Currently Active:
            </span>
            <span className="text-xs font-semibold px-3 py-1.5 rounded-md bg-slate-900 text-white shadow-sm flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              {selectedVariant.name}
            </span>
          </div>
        </div>

        {/* Interconnected Variant Cards Grid */}
        <div
          ref={cardsContainerRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5"
        >
          {product.variants.map((variant) => {
            const isSelected = selectedVariant.id === variant.id;
            const cardImg = getVariantImage(variant, 0);

            return (
              <motion.button
                key={variant.id}
                type="button"
                onClick={() => handleCardClick(variant)}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  "group relative flex flex-col text-left rounded-xl overflow-hidden transition-all duration-300",
                  "border bg-white cursor-pointer select-none",
                  isSelected
                    ? "border-slate-900 shadow-xl ring-2 ring-slate-900/10 shadow-slate-900/10"
                    : "border-slate-200 hover:border-slate-400 hover:shadow-lg shadow-sm"
                )}
              >
                {/* Active Indicator Top Bar */}
                {isSelected && (
                  <motion.div
                    layoutId="activeVariantBar"
                    className="absolute top-0 left-0 right-0 h-1 bg-slate-900 z-30"
                  />
                )}

                {/* Variant Image Frame */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100">
                  <Image
                    src={cardImg}
                    alt={variant.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className={cn(
                      "object-cover transition-transform duration-500 ease-out",
                      isSelected ? "scale-105" : "group-hover:scale-105"
                    )}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                    <span className="text-[11px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-white border border-white/10">
                      Grade
                    </span>
                    {isSelected ? (
                      <span className="flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500 text-white shadow-sm">
                        <Check className="w-3 h-3" />
                        Selected
                      </span>
                    ) : (
                      <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-black/50 text-white/90 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        Inspect
                      </span>
                    )}
                  </div>

                  {/* Bottom Image Overlay Tag */}
                  <div className="absolute bottom-2.5 left-3 right-3 z-10 flex items-center justify-between text-white">
                    <span className="text-xs font-medium text-slate-200 line-clamp-1">
                      {variant.attributes[0]?.value || "Standard Export Spec"}
                    </span>
                    <span className="text-[10px] text-amber-300 font-mono">
                      {variant.attributes.find((a) => a.label.toLowerCase().includes("heat"))?.value || ""}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-4 flex flex-col flex-grow justify-between bg-white">
                  <div>
                    <h3 className="font-serif font-bold text-base md:text-lg text-slate-900 group-hover:text-slate-950 leading-snug">
                      {variant.name}
                    </h3>

                    {/* Quick attribute preview chips */}
                    <div className="flex flex-wrap gap-1.5 mt-2.5">
                      {variant.attributes.slice(0, 2).map((attr, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200/70"
                        >
                          <strong className="font-medium text-slate-900 mr-1">
                            {attr.label}:
                          </strong>
                          {attr.value}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Click affordance indicator */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    {isSelected ? (
                      <span className="font-semibold text-slate-900 flex items-center gap-1">
                        {isExpanded ? (
                          <>
                            Details Open <ChevronUp className="w-3.5 h-3.5" />
                          </>
                        ) : (
                          <>
                            Click to Expand <ChevronDown className="w-3.5 h-3.5" />
                          </>
                        )}
                      </span>
                    ) : (
                      <span className="font-medium text-slate-600 group-hover:text-slate-900 flex items-center gap-1 transition-colors">
                        Inspect Grade
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    )}

                    <span
                      className={cn(
                        "text-[10px] uppercase font-mono px-1.5 py-0.5 rounded",
                        isSelected
                          ? "bg-slate-900 text-white"
                          : "bg-slate-100 text-slate-600"
                      )}
                    >
                      B2B Specs
                    </span>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Opened Variant Full Details Inspector */}
        <AnimatePresence mode="wait">
          {isExpanded && (
            <motion.div
              key={selectedVariant.id}
              initial={{ opacity: 0, height: 0, y: 15 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 overflow-hidden"
            >
              <div
                ref={detailsRef}
                className="bg-white rounded-2xl border-2 border-slate-900 shadow-2xl overflow-hidden"
              >
                {/* Drawer Header Banner */}
                <div className="bg-slate-900 text-white px-6 py-4 flex flex-wrap items-center justify-between gap-4 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-amber-400">
                      <FileSpreadsheet className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold">
                          Grade Specification Dossier
                        </span>
                        <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.2 rounded-full font-medium">
                          Export Verified
                        </span>
                      </div>
                      <h4 className="text-xl font-serif font-bold text-white">
                        {selectedVariant.name}
                      </h4>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handleCopySpecs}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 text-xs font-medium transition-colors"
                      title="Copy Grade Specifications"
                    >
                      {copied ? (
                        <>
                          <CheckCheck className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-300">Copied to Clipboard</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Specs</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => setIsExpanded(false)}
                      className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                      aria-label="Collapse Grade Details"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Drawer Main Body */}
                <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-slate-50/40">
                  {/* Left Column: Grade Media & Quick Order CTA */}
                  <div className="lg:col-span-4 flex flex-col gap-5">
                    {/* Large Image Showcase */}
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-200 bg-white shadow-sm group">
                      <Image
                        src={currentDisplayImage}
                        alt={selectedVariant.name}
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                      
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 rounded bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold tracking-wide border border-white/15">
                          {selectedVariant.attributes.find((a) => a.label.toLowerCase().includes("format"))?.value || "Commercial Grade"}
                        </span>
                      </div>

                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <span className="text-xs font-medium text-slate-200">Commercial Sample Visual</span>
                        <p className="text-xs text-slate-300 line-clamp-1">
                          Standard Sortex Cleaned Export Lot
                        </p>
                      </div>
                    </div>

                    {/* Thumbnail gallery if variant has multiple images */}
                    {selectedVariant.images && selectedVariant.images.length > 1 && (
                      <div className="flex gap-2">
                        {selectedVariant.images.map((img, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => setActiveImageIndex(idx)}
                            className={cn(
                              "relative w-16 h-14 rounded-lg overflow-hidden border-2 transition-all",
                              activeImageIndex === idx
                                ? "border-slate-900 ring-2 ring-slate-900/20"
                                : "border-slate-200 hover:border-slate-400 opacity-70 hover:opacity-100"
                            )}
                          >
                            <Image
                              src={img}
                              alt={`${selectedVariant.name} thumb ${idx}`}
                              fill
                              className="object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Short Description */}
                    {selectedVariant.shortDescription && (
                      <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600 block mb-1">
                          Grade Suitability & Application
                        </span>
                        <p className="text-xs text-slate-700 leading-relaxed">
                          {selectedVariant.shortDescription}
                        </p>
                      </div>
                    )}

                    {/* Dedicated CTA for this grade */}
                    <div className="flex flex-col gap-2.5 pt-2">
                      <Link
                        href={`/request-quote?product=${product.slug}&variant=${selectedVariant.slug}`}
                        className="w-full"
                      >
                        <Button className="w-full h-11 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-sm font-medium shadow-md flex items-center justify-center gap-2 group">
                          Request Quote for {selectedVariant.name}
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>

                      <div className="flex items-center justify-between text-xs text-slate-600 px-1">
                        <span className="flex items-center gap-1">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                          Pre-shipment Inspection
                        </span>
                        <span className="flex items-center gap-1">
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          CoA Provided
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Middle Column: Physical & Sensory Attributes */}
                  <div className="lg:col-span-4 flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-slate-700" />
                        Physical & Sensory Parameters
                      </h5>
                      <span className="text-[11px] text-slate-600">
                        {selectedVariant.attributes.length} Parameters
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
                      {selectedVariant.attributes.map((attr, idx) => (
                        <div
                          key={idx}
                          className="spec-animate-item bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs flex items-center justify-between hover:border-slate-300 transition-colors"
                        >
                          <div className="flex items-center gap-2.5">
                            <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600">
                              {attr.label.toLowerCase().includes("heat") ? (
                                <Flame className="w-4 h-4 text-red-500" />
                              ) : attr.label.toLowerCase().includes("color") ? (
                                <Sparkles className="w-4 h-4 text-amber-500" />
                              ) : (
                                <Scale className="w-4 h-4 text-slate-500" />
                              )}
                            </div>
                            <span className="text-xs font-semibold text-slate-600">
                              {attr.label}
                            </span>
                          </div>
                          <span className="text-xs font-bold text-slate-900 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100">
                            {attr.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Fast shipping indicator */}
                    <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-3.5 mt-1">
                      <div className="flex items-center gap-2 text-amber-900 font-semibold text-xs mb-1">
                        <span className="w-2 h-2 rounded-full bg-amber-500" />
                        Container Loadability
                      </div>
                      <p className="text-[11px] text-amber-800 leading-relaxed">
                        Standard 20ft: {product.shipping.capacity20ft} • 40ft HC: {product.shipping.capacity40ft}
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Chemical & Quality Lab Specifications */}
                  <div className="lg:col-span-4 flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                        Laboratory Quality Standards
                      </h5>
                      <span className="text-[11px] text-emerald-700 font-medium">
                        Standard Tolerance
                      </span>
                    </div>

                    <div className="bg-white rounded-xl border border-slate-200/80 shadow-xs overflow-hidden divide-y divide-slate-100">
                      {selectedVariant.specifications.map((spec, idx) => (
                        <div
                          key={idx}
                          className="spec-animate-item px-4 py-3 flex items-center justify-between hover:bg-slate-50/60 transition-colors"
                        >
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            <span className="text-xs font-medium text-slate-700">
                              {spec.parameter}
                            </span>
                          </div>
                          <span className="text-xs font-mono font-bold text-slate-900">
                            {spec.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Certifications strip */}
                    <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600 block mb-2">
                        Compliance & Certification
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {product.certifications.map((cert, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200/80"
                          >
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}