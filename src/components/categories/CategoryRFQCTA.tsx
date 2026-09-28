import React from "react";
import { Category } from "@/lib/data/categories";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CategoryRFQCTA({ category }: { category: Category }) {
  return (
    <section className="py-16 bg-slate-900 text-white text-center">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6 leading-tight">
          Looking For A Reliable<br/>{category.name} Supplier?
        </h2>
        <p className="text-lg text-slate-300 font-sans mb-8 max-w-2xl mx-auto">
          Get in touch with our export team to discuss your bulk requirements, receive spec sheets, and get current CFR/FOB pricing.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/request-quote">
            <Button size="lg" className="rounded-none h-14 px-10 bg-white text-slate-900 hover:bg-slate-200 text-sm tracking-widest uppercase font-bold w-full sm:w-auto">
              Request Quote
            </Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" className="rounded-none h-14 px-10 bg-transparent border border-white/20 text-white hover:bg-white/10 hover:text-white text-sm tracking-widest uppercase font-bold w-full sm:w-auto group">
              Talk To Export Team
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
