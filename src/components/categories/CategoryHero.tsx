"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Category } from "@/lib/data/categories";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CategoryHero({ category }: { category: Category }) {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 flex items-center bg-slate-900 text-white overflow-hidden border-b border-slate-800">
      {/* Background Image with slight opacity */}
      <div className="absolute inset-0 z-0">
        <Image
          src={category.heroImage}
          alt={category.name}
          fill
          className="object-cover opacity-25 mix-blend-overlay"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 max-w-8xl relative z-10">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-amber-400 mb-6"
          >
            {category.name}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-6xl font-serif font-semibold tracking-tight mb-4 leading-[1.1]"
          >
            {category.heroTitle || category.label}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base lg:text-lg text-slate-300 font-sans leading-relaxed mb-8 max-w-2xl"
          >
            {category.heroSubtitle || category.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="#products">
              <Button
                size="lg"
                className="rounded-none h-14 px-8 bg-white text-slate-950 hover:bg-slate-200 text-sm tracking-widest uppercase font-bold w-full sm:w-auto group"
              >
                Explore Products
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button
              size="lg"
              className="rounded-none h-14 px-8 bg-transparent border border-white/20 text-white hover:bg-white/10 hover:text-white text-sm tracking-widest uppercase font-bold w-full sm:w-auto"
            >
              <Download className="w-4 h-4 mr-2" /> Download Catalog
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
