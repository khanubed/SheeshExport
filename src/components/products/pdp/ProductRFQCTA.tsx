"use client";
import React from "react";
import { Product } from "@/lib/data/types";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";

export function ProductRFQCTA({ product }: { product: Product }) {
  return (
    <section className="py-24 bg-primary text-primary-foreground text-center">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl lg:text-5xl font-serif font-semibold mb-6">Ready to Source Premium {product.name}?</h2>
        <p className="text-xl text-primary-foreground/80 mb-12 font-light">
          Partner with Sheesh Exports for reliable, bulk commodity fulfillment customized to your exact specifications.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href={`/request-quote?product=${product.slug}`}>
            <Button size="lg" className="rounded-none bg-white text-primary hover:bg-slate-100 h-16 px-10 text-lg tracking-wide w-full sm:w-auto">
              Request Quotation <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <Button size="lg" variant="outline" className="rounded-none h-16 px-10 border-white text-white hover:bg-white/10 text-lg tracking-wide w-full sm:w-auto">
            <Mail className="mr-2 w-5 h-5" /> Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
}