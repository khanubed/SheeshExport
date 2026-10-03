import React from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { FadeIn } from "@/components/home/AnimatedSection";

export function CTASection() {
  return (
    <section aria-labelledby="cta-heading" className="py-24 sm:py-32 bg-primary text-white text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <FadeIn>
          <h2 id="cta-heading" className="font-heading text-4xl sm:text-5xl lg:text-6xl font-medium mb-12">
            Ready To Source Premium
            <br className="hidden sm:block" /> Indian Agricultural Products?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link
              href="/request-quote"
              className={buttonVariants({
                size: "lg",
                className:
                  "bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold tracking-wide w-full sm:w-auto h-14 px-8 text-lg rounded-none shadow-sm",
              })}
            >
              Request Quote
            </Link>
            <Link
              href="/contact"
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className:
                  "bg-transparent border-white/70 text-white hover:bg-white/10 w-full sm:w-auto h-14 px-8 text-lg rounded-none",
              })}
            >
              Download Company Profile
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-secondary underline-offset-4 hover:underline transition-all mt-4 sm:mt-0 font-medium"
            >
              Talk To Procurement Team
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
