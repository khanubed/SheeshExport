import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import Link from "next/link";
import { Check } from "lucide-react";

import { ContactSection } from "@/components/contact/ContactSection";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us | Sheesh Exports India",
  description:
    "Contact Sheesh Exports for pricing, product information, and export operations support. We supply global food buyers directly from India.",
  pathname: "/contact",
});

const FAQ = [
  { q: "How quickly do you respond?", a: "Our procurement desk typically responds to all inquiries within 24 hours." },
  { q: "Can I request samples?", a: "Yes, we dispatch commercial samples via DHL/FedEx globally for verified buyers." },
  { q: "Do you provide private labeling?", a: "Yes, we offer complete OEM private label manufacturing and packing services." },
  { q: "Which countries do you export to?", a: "We export globally, with primary markets in North America, Europe, the Middle East, and Asia Pacific." },
  { q: "Can I request compliance documents?", a: "Yes, our Quality team can provide relevant COAs, FDA registrations, and ISO certifications upon request." }
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20" role="main">
      
      {/* 1. HERO SECTION */}
      <section aria-labelledby="contact-hero-heading" className="pt-20 pb-12 lg:pt-24 lg:pb-16 border-b border-border bg-[#FAFAFA]">
        <div className="container mx-auto px-6 lg:px-12 max-w-8xl">
          <div className="max-w-4xl">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-6">
              Global Support Desk
            </span>
            <h1 id="contact-hero-heading" className="font-heading text-5xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-6">
              Connect With Our Export Specialists
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground font-sans leading-relaxed max-w-2xl">
              Whether you need pricing, product information, export documentation support, or shipment planning, our international trade team is ready to assist.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CONTACT METRICS STRIP */}
      <section aria-labelledby="contact-metrics-heading" className="border-b border-border bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-8xl">
          <h2 id="contact-metrics-heading" className="sr-only">Contact Metrics</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-border border-x border-border -mx-px" role="list" aria-label="Contact information">
            <div role="listitem" className="p-8 lg:p-10">
              <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Call Us</div>
              <div className="font-heading text-xl lg:text-2xl font-bold text-foreground">+91 9826270888</div>
            </div>
            <div role="listitem" className="p-8 lg:p-10">
              <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">General Enquiries</div>
              <div className="font-heading text-xl lg:text-2xl font-bold text-foreground truncate">info@sheeshexports.in</div>
            </div>
            <div role="listitem" className="p-8 lg:p-10">
              <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">WhatsApp</div>
              <div className="font-heading text-xl lg:text-2xl font-bold text-foreground">+91 90399 20069</div>
            </div>
            <div role="listitem" className="p-8 lg:p-10">
              <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Response Time</div>
              <div className="font-heading text-xl lg:text-2xl font-bold text-foreground">Within 24 Hours</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MAIN SPLIT LAYOUT */}
      <ContactSection />

      {/* 4. FAQ SECTION */}
      <section aria-labelledby="contact-faq-heading" className="bg-[#FAFAFA]">
        <div className="container mx-auto px-6 lg:px-12 max-w-8xl">
          <div className="grid lg:grid-cols-12 border-x border-border -mx-px">
            <div className="lg:col-span-5 p-8 lg:p-12 lg:border-r border-border">
              <h2 id="contact-faq-heading" className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground font-sans text-lg">
                Common queries regarding export operations, compliance, and sample dispatch.
              </p>
            </div>
            <div className="lg:col-span-7 p-8 lg:p-12 bg-white">
              <div className="space-y-10 max-w-3xl">
                {FAQ.map((item, idx) => (
                  <article key={idx} className="border-b border-border pb-8 last:border-0 last:pb-0">
                    <h3 className="text-xl font-bold font-heading text-foreground mb-4">{item.q}</h3>
                    <p className="text-muted-foreground font-sans leading-relaxed">{item.a}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA */}
      <section aria-labelledby="contact-cta-heading" className="bg-[#1A1A1A] text-white py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl text-center">
          <h2 id="contact-cta-heading" className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">
            Ready To Request A Quote?
          </h2>
          <p className="text-xl text-white/60 font-sans font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Switch to our comprehensive procurement portal to submit detailed product and shipping requirements.
          </p>
          <Link href="/request-quote" className="inline-block bg-white text-[#1A1A1A] font-bold uppercase tracking-widest px-12 py-6 text-sm hover:bg-white/90 transition-colors">
            Open Procurement Portal
          </Link>
        </div>
      </section>

      {/* 6. BOTTOM TRUST SECTION */}
      <section aria-labelledby="trust-features-heading" className="border-t border-[#333] bg-[#1A1A1A] py-10">
        <div className="container mx-auto px-6 lg:px-12 max-w-8xl">
          <h2 id="trust-features-heading" className="sr-only">Trust Features</h2>
          <ul className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-sm font-semibold tracking-widest uppercase text-white/40" role="list" aria-label="Service features">
            {[
              "Export Documentation Support",
              "Private Label Manufacturing",
              "Mixed Container Consolidation",
              "International Compliance Support",
              "Global Logistics Coordination",
              "Dedicated Procurement Team"
            ].map((feat, idx) => (
              <li key={idx} className="flex items-center gap-2" role="listitem">
                <Check className="w-4 h-4 text-[#D4AF37]" aria-hidden="true" /> {feat}
              </li>
            ))}
          </ul>
        </div>
      </section>

    </main>
  );
}
