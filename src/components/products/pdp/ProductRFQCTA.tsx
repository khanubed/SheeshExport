import React from "react";
import { Product } from "@/lib/data/types";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";

export function ProductRFQCTA({ product }: { product: Product }) {
  return (
    <section className="py-24 bg-primary text-primary-foreground text-center">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl lg:text-5xl font-heading font-semibold mb-6">Ready to Source Premium {product.name}?</h2>
        <p className="text-xl text-primary-foreground/80 mb-12 font-light">
          Partner with Sheesh Exports for reliable, bulk commodity fulfillment customized to your exact specifications.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href={`/request-quote?product=${product.slug}`}
            className={buttonVariants({
              size: "lg",
              className:
                "rounded-none bg-background text-primary hover:bg-muted/90 h-16 px-10 text-lg tracking-wide w-full sm:w-auto font-semibold",
            })}
          >
            Request Quotation <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <Link
            href="/contact"
            className={buttonVariants({
              variant: "outline",
              size: "lg",
              className:
                "rounded-none h-16 px-10 border-white/70 text-white hover:bg-white/10 text-lg tracking-wide w-full sm:w-auto font-semibold",
            })}
          >
            <Mail className="mr-2 w-5 h-5" /> Contact Sales
          </Link>
        </div>
      </div>
    </section>
  );
}