"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product, Variant } from "@/lib/data/types";
import { motion } from "framer-motion";
import { ChevronRight, Download, PackageSearch } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ProductHero({ product, selectedVariant }: { product: Product; selectedVariant: Variant }) {
  return (
    <section className="relative pt-12 pb-8 lg:pt-16 lg:pb-8 overflow-hidden border-b border-slate-100">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-4 items-center">
          
          <motion.div 
            className="w-full lg:w-3/5 flex flex-col gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-slate-500 mb-2">
              <Link href="/products" className="hover:text-slate-900 transition-colors">Products</Link>
              <ChevronRight className="w-3 h-3" />
              <span>{product.category}</span>
            </div>
            
            <h1 className="text-3xl lg:text-5xl font-serif font-semibold tracking-tight text-slate-900 leading-tight">
              {product.name}
            </h1>
            
            {product.botanicalName && (
              <p className="text-md text-slate-500 italic font-serif">
                {product.botanicalName}
              </p>
            )}

            <p className="text-sm text-slate-600 leading-relaxed max-w-xl">
              {product.description.split("\n")[0]}
            </p>

            <div className="grid grid-cols-2 gap-6 py-6 border-y border-slate-100 my-4">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Origin</span>
                <span className="font-medium text-slate-900">{product.originStory.location}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Key Markets</span>
                <span className="font-medium text-slate-900 line-clamp-1" title={product.exportMarkets.join(", ")}>
                  {product.exportMarkets.slice(0, 3).join(", ")}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Link href={`/request-quote?product=${product.slug}`}>
                <Button size="lg" className="rounded-none bg-slate-900 text-white hover:bg-slate-800 h-14 px-8 text-base tracking-wide w-full sm:w-auto">
                  Request Bulk Quote
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="rounded-none h-14 px-8 border-slate-300 text-slate-700 hover:bg-slate-50 text-base tracking-wide w-full sm:w-auto">
                <Download className="w-4 h-4 mr-2" /> Spec Sheet
              </Button>
            </div>
          </motion.div>

          <motion.div 
            className="w-full lg:w-2/5 relative h-[500px] bg-slate-50"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Image
              src={selectedVariant.images[0] || product.originStory.images[0] || "/images/placeholder.jpg"}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}