"use client";

import { useState } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

// --- Mock Data ---
const PRODUCTS = [
  {
    id: "red-chilli",
    name: "Red Chilli",
    image: "/images/products/whole-spices/red-chilli-guntur-whole/stemless.webp",
  },
  {
    id: "turmeric",
    name: "Turmeric",
    image:
      "/images/products/whole-spices/turmeric-finger-guntur-whole/nizamabad-double-polished.webp",
  },
  { id: "cumin", name: "Cumin", image: "/images/sheesh-logo.webp" },
  { id: "coriander", name: "Coriander", image: "/images/sheesh-logo.webp" },
  { id: "sesame", name: "Sesame Seeds", image: "/images/sheesh-logo.webp" },
];

const VARIANTS: Record<string, any[]> = {
  "red-chilli": [
    {
      id: "teja-s17",
      name: "Teja S17",
      heat: "75K-100K SHU",
      color: "50-70 ASTA",
      desc: "Fiery, extra-hot variety widely favored for industrial extraction.",
      image: "/images/products/whole-spices/red-chilli-guntur-whole/stemless.webp",
    },
    {
      id: "byadgi",
      name: "Byadgi",
      heat: "8K-15K SHU",
      color: "120-160 ASTA",
      desc: "Deep crimson, low-heat chilli valued for high color extraction.",
      image: "/images/products/whole-spices/red-chilli-guntur-whole/byadgi.webp",
    },
    {
      id: "s4-sannam",
      name: "S4 Sannam",
      heat: "25K-35K SHU",
      color: "40-60 ASTA",
      desc: "The world's largest volume export chilli variety.",
      image: "/images/products/whole-spices/red-chilli-guntur-whole/Sannam-Stemless.webp",
    },
    {
      id: "273",
      name: "Wrinkled 273",
      heat: "15K-25K SHU",
      color: "60-90 ASTA",
      desc: "Popular medium-heat variety with distinct wrinkled pericarp.",
      image: "/images/products/whole-spices/red-chilli-guntur-whole/wrinkled.webp",
    },
  ],
  turmeric: [
    {
      id: "nizamabad",
      name: "Nizamabad",
      heat: "N/A",
      color: "2.5-3.5% Curcumin",
      desc: "Smooth, clean-surfaced golden finger.",
      image:
        "/images/products/whole-spices/turmeric-finger-guntur-whole/nizamabad-double-polished.webp",
    },
    {
      id: "alleppey",
      name: "Alleppey",
      heat: "N/A",
      color: "5.0-6.5% Curcumin",
      desc: "Premium dark-orange turmeric with exceptional oil content.",
      image:
        "/images/products/whole-spices/turmeric-finger-guntur-whole/alleppey-high-curcumin.webp",
    },
  ],
};

const QUANTITIES = ["1–5 MT", "5–20 MT", "20–50 MT", "50+ MT", "Full Container Load"];

const PACKAGING = [
  {
    id: "bulk",
    title: "Raw Commodity Supply",
    desc: "Bulk loose export packing (25kg/50kg PP or Jute bags, FIBC Jumbo Bags).",
  },
  {
    id: "private",
    title: "Buyer Private Label",
    desc: "Your branding and packaging (Retail pouches, jars, printed cartons).",
  },
  {
    id: "sheesh",
    title: "Sheesh Packaging",
    desc: "Ready export packaging with Sheesh Exports commercial branding.",
  },
];

const CERTIFICATIONS = ["FDA", "HALAL", "ISO 22000", "Organic", "Kosher", "APEDA"];

const TRUST_FEATURES = [
  "Export Documentation Support",
  "Private Label Manufacturing",
  "Mixed Container Consolidation",
  "International Compliance Support",
  "Global Logistics Coordination",
  "Dedicated Procurement Team",
];

export default function RequestQuotePage() {
  const [formData, setFormData] = useState({
    product: "",
    variant: "",
    quantity: "",
    packaging: "",
    country: "",
    port: "",
    certifications: [] as string[],
    fullName: "",
    companyName: "",
    email: "",
    whatsapp: "",
    designation: "",
    website: "",
    notes: "",
  });

  const updateForm = (key: string, value: any) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const toggleCert = (cert: string) => {
    setFormData((prev) => ({
      ...prev,
      certifications: prev.certifications.includes(cert)
        ? prev.certifications.filter((c) => c !== cert)
        : [...prev.certifications, cert],
    }));
  };

  const selectedProductVariants = formData.product ? VARIANTS[formData.product] || [] : [];

  return (
    <main
      className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20"
      role="main"
    >
      {/* 1. HERO SECTION */}
      <section
        aria-labelledby="rfq-hero-heading"
        className="pt-20 pb-12 lg:pt-24 lg:pb-16 border-b border-border bg-[#FAFAFA]"
      >
        <div className="container mx-auto px-6 lg:px-12 max-w-8xl">
          <div className="max-w-4xl">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-6">
              Request For Quotation
            </span>
            <h1
              id="rfq-hero-heading"
              className="font-heading text-5xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-6"
            >
              Source Export-Grade Agricultural Products Directly From India
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground font-sans leading-relaxed max-w-2xl">
              Submit your procurement requirements and receive a customized quotation including
              product specifications, packaging options, shipment planning, and export documentation
              support.
            </p>
          </div>
        </div>
      </section>

      {/* 2. TRUST STRIP */}
      <section aria-labelledby="trust-strip-heading" className="border-b border-border bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-8xl">
          <h2 id="trust-strip-heading" className="sr-only">
            Key Metrics
          </h2>
          <div
            className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-border border-x border-border -mx-px"
            role="list"
            aria-label="Key metrics"
          >
            <div role="listitem" className="p-8 lg:p-10">
              <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
                Response Time
              </div>
              <div className="font-heading text-2xl font-bold text-foreground">Within 24 Hours</div>
            </div>
            <div role="listitem" className="p-8 lg:p-10">
              <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
                Export Markets
              </div>
              <div className="font-heading text-2xl font-bold text-foreground">50+ Countries</div>
            </div>
            <div role="listitem" className="p-8 lg:p-10">
              <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
                Packaging Options
              </div>
              <div className="font-heading text-2xl font-bold text-foreground">
                Private Label + Bulk
              </div>
            </div>
            <div role="listitem" className="p-8 lg:p-10">
              <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
                Shipment Types
              </div>
              <div className="font-heading text-xl lg:text-2xl font-bold text-foreground">
                FCL • LCL • Mixed
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MAIN LAYOUT (35% Sticky / 65% Scrollable) */}
      <section aria-labelledby="rfq-form-heading" className="bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-8xl">
          <div className="flex flex-col lg:flex-row border-x border-border -mx-px min-h-[1000px]">
            {/* LEFT PANEL: Sticky Inquiry Summary (35%) */}
            <aside
              className="w-full lg:w-[35%] lg:border-r border-border bg-[#FAFAFA] hidden lg:block"
              aria-label="Inquiry summary"
            >
              <div className="sticky top-20 p-8 lg:p-12 h-[calc(100vh-80px)] overflow-y-auto flex flex-col">
                <h3 className="font-heading text-3xl font-bold text-foreground mb-8 pb-4 border-b border-border">
                  Your Inquiry
                </h3>

                <div className="flex-1 space-y-4  ">
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">
                      Product
                    </span>
                    <div className="font-sans text-lg font-medium text-foreground">
                      {PRODUCTS.find((p) => p.id === formData.product)?.name || "—"}
                    </div>
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">
                      Variant
                    </span>
                    <div className="font-sans text-lg font-medium text-foreground">
                      {VARIANTS[formData.product]?.find((v) => v.id === formData.variant)?.name ||
                        "—"}
                    </div>
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">
                      Quantity
                    </span>
                    <div className="font-sans text-lg font-medium text-foreground">
                      {formData.quantity || "—"}
                    </div>
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">
                      Packaging
                    </span>
                    <div className="font-sans text-lg font-medium text-foreground">
                      {PACKAGING.find((p) => p.id === formData.packaging)?.title || "—"}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">
                        Country
                      </span>
                      <div className="font-sans text-lg font-medium text-foreground truncate">
                        {formData.country || "—"}
                      </div>
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">
                        Port
                      </span>
                      <div className="font-sans text-lg font-medium text-foreground truncate">
                        {formData.port || "—"}
                      </div>
                    </div>
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">
                      Certifications
                    </span>
                    <div className="font-sans text-sm font-medium text-foreground leading-relaxed">
                      {formData.certifications.length > 0
                        ? formData.certifications.join(", ")
                        : "—"}
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-border">
                  <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">
                    Estimated Response Time
                  </span>
                  <div className="font-heading text-xl font-bold text-[#556B2F]">
                    Within 24 Hours
                  </div>
                </div>
              </div>
            </aside>

            {/* RIGHT PANEL: Scrollable RFQ Procurement Form Workflow (65%) */}
            <div className="w-full lg:w-[65%] p-6 lg:p-12 xl:p-16 bg-white">
              <form
                className="max-w-3xl mx-auto space-y-12 lg:space-y-16"
                aria-label="Request for quotation form"
              >
                {/* STEP 1 */}
                <fieldset>
                  <legend className="font-heading text-3xl font-bold text-foreground mb-8">
                    What Products Are You Looking For?
                  </legend>
                  <div
                    className="grid grid-cols-2 sm:grid-cols-3 gap-4"
                    role="radiogroup"
                    aria-label="Product selection"
                  >
                    {PRODUCTS.map((p) => (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => {
                          updateForm("product", p.id);
                          updateForm("variant", "");
                        }}
                        role="radio"
                        aria-checked={formData.product === p.id}
                        className={cn(
                          "flex flex-col items-start p-4 border transition-all text-left group",
                          formData.product === p.id
                            ? "border-primary bg-primary/5 shadow-sm"
                            : "border-border hover:border-primary/30"
                        )}
                      >
                        <figure className="relative w-full aspect-[4/3] bg-muted mb-4 overflow-hidden">
                          <Image
                            loading="lazy"
                            src={p.image}
                            alt={p.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <figcaption className="sr-only">{p.name}</figcaption>
                        </figure>
                        <span className="font-sans font-semibold text-foreground">{p.name}</span>
                      </button>
                    ))}
                  </div>
                </fieldset>

                {/* STEP 2 */}
                {selectedProductVariants.length > 0 && (
                  <fieldset className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <legend className="font-heading text-3xl font-bold text-foreground mb-8">
                      Select Product Variant
                    </legend>
                    <div
                      className="grid sm:grid-cols-2 gap-4"
                      role="radiogroup"
                      aria-label="Variant selection"
                    >
                      {selectedProductVariants.map((v) => (
                        <button
                          key={v.id}
                          type="button"
                          onClick={() => updateForm("variant", v.id)}
                          role="radio"
                          aria-checked={formData.variant === v.id}
                          className={cn(
                            "flex flex-col text-left border p-5 transition-all group",
                            formData.variant === v.id
                              ? "border-primary bg-primary/5 shadow-sm"
                              : "border-border hover:border-primary/30"
                          )}
                        >
                          <figure className="relative w-full h-32 bg-muted mb-5 overflow-hidden">
                            <Image
                              loading="lazy"
                              src={v.image}
                              alt={v.name}
                              fill
                              className="object-cover"
                            />
                            <figcaption className="sr-only">{v.name}</figcaption>
                          </figure>
                          <h4 className="font-heading text-xl font-bold text-foreground mb-3">
                            {v.name}
                          </h4>
                          <div className="flex gap-4 mb-3 border-b border-border/50 pb-3 w-full">
                            <div>
                              <span className="block text-[9px] uppercase tracking-widest text-muted-foreground mb-1">
                                Spec 1
                              </span>
                              <span className="text-xs font-mono font-medium">{v.heat}</span>
                            </div>
                            <div>
                              <span className="block text-[9px] uppercase tracking-widest text-muted-foreground mb-1">
                                Spec 2
                              </span>
                              <span className="text-xs font-mono font-medium">{v.color}</span>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground font-sans line-clamp-2">
                            {v.desc}
                          </p>
                        </button>
                      ))}
                    </div>
                  </fieldset>
                )}

                {/* STEP 3 */}
                <fieldset>
                  <legend className="font-heading text-3xl font-bold text-foreground mb-8">
                    Estimated Purchase Quantity
                  </legend>
                  <div
                    className="flex flex-wrap gap-3"
                    role="radiogroup"
                    aria-label="Quantity selection"
                  >
                    {QUANTITIES.map((q) => (
                      <button
                        key={q}
                        type="button"
                        onClick={() => updateForm("quantity", q)}
                        role="radio"
                        aria-checked={formData.quantity === q}
                        className={cn(
                          "px-6 py-4 border text-sm font-semibold transition-all",
                          formData.quantity === q
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border hover:border-primary/50 text-foreground"
                        )}
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </fieldset>

                {/* STEP 4 */}
                <fieldset>
                  <legend className="font-heading text-3xl font-bold text-foreground mb-8">
                    Packaging Requirements
                  </legend>
                  <div
                    className="flex flex-col gap-4"
                    role="radiogroup"
                    aria-label="Packaging selection"
                  >
                    {PACKAGING.map((p) => (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => updateForm("packaging", p.id)}
                        role="radio"
                        aria-checked={formData.packaging === p.id}
                        className={cn(
                          "flex flex-col sm:flex-row sm:items-center text-left border p-6 transition-all",
                          formData.packaging === p.id
                            ? "border-primary bg-primary/5 shadow-sm"
                            : "border-border hover:border-primary/50"
                        )}
                      >
                        <div className="flex-1">
                          <h4 className="font-heading text-xl font-bold text-foreground mb-2">
                            {p.title}
                          </h4>
                          <p className="text-sm text-muted-foreground font-sans">{p.desc}</p>
                        </div>
                        {formData.packaging === p.id && (
                          <div
                            className="mt-4 sm:mt-0 sm:ml-4 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground flex-shrink-0"
                            aria-hidden="true"
                          >
                            <Check className="w-4 h-4" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </fieldset>

                {/* STEP 5 */}
                <fieldset>
                  <legend className="font-heading text-3xl font-bold text-foreground mb-8">
                    Destination Details
                  </legend>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="rfq-country"
                        className="block text-xs uppercase tracking-widest font-bold text-muted-foreground mb-3"
                      >
                        Country
                      </label>
                      <input
                        id="rfq-country"
                        type="text"
                        placeholder="e.g. United Arab Emirates"
                        value={formData.country}
                        onChange={(e) => updateForm("country", e.target.value)}
                        className="w-full border-b border-border bg-transparent py-3 text-lg focus:border-primary focus:outline-none transition-colors rounded-none placeholder:text-muted-foreground/30 font-sans"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="rfq-port"
                        className="block text-xs uppercase tracking-widest font-bold text-muted-foreground mb-3"
                      >
                        Destination Port
                      </label>
                      <input
                        id="rfq-port"
                        type="text"
                        placeholder="e.g. Jebel Ali"
                        value={formData.port}
                        onChange={(e) => updateForm("port", e.target.value)}
                        className="w-full border-b border-border bg-transparent py-3 text-lg focus:border-primary focus:outline-none transition-colors rounded-none placeholder:text-muted-foreground/30 font-sans"
                      />
                    </div>
                  </div>
                </fieldset>

                {/* STEP 6 */}
                <fieldset>
                  <legend className="font-heading text-3xl font-bold text-foreground mb-8">
                    Compliance Requirements
                  </legend>
                  <div
                    className="flex flex-wrap gap-3"
                    role="group"
                    aria-label="Certification selection"
                  >
                    {CERTIFICATIONS.map((c) => (
                      <button
                        key={c}
                        type="button"
                        onClick={() => toggleCert(c)}
                        role="checkbox"
                        aria-checked={formData.certifications.includes(c)}
                        className={cn(
                          "px-6 py-3 border text-sm font-semibold transition-all rounded-full",
                          formData.certifications.includes(c)
                            ? "border-[#556B2F] bg-[#556B2F] text-white shadow-sm"
                            : "border-border hover:border-[#556B2F]/50 text-foreground"
                        )}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </fieldset>

                {/* STEP 7 */}
                <fieldset>
                  <legend className="font-heading text-3xl font-bold text-foreground mb-8">
                    Buyer Information
                  </legend>
                  <div className="grid sm:grid-cols-2 gap-8 lg:gap-12">
                    <div>
                      <label
                        htmlFor="rfq-fullname"
                        className="block text-xs uppercase tracking-widest font-bold text-muted-foreground mb-2"
                      >
                        Full Name
                      </label>
                      <input
                        id="rfq-fullname"
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => updateForm("fullName", e.target.value)}
                        className="w-full border-b border-border bg-transparent py-2 text-base focus:border-primary focus:outline-none transition-colors rounded-none font-sans"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="rfq-company"
                        className="block text-xs uppercase tracking-widest font-bold text-muted-foreground mb-2"
                      >
                        Company Name
                      </label>
                      <input
                        id="rfq-company"
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => updateForm("companyName", e.target.value)}
                        className="w-full border-b border-border bg-transparent py-2 text-base focus:border-primary focus:outline-none transition-colors rounded-none font-sans"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="rfq-email"
                        className="block text-xs uppercase tracking-widest font-bold text-muted-foreground mb-2"
                      >
                        Business Email
                      </label>
                      <input
                        id="rfq-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateForm("email", e.target.value)}
                        className="w-full border-b border-border bg-transparent py-2 text-base focus:border-primary focus:outline-none transition-colors rounded-none font-sans"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="rfq-whatsapp"
                        className="block text-xs uppercase tracking-widest font-bold text-muted-foreground mb-2"
                      >
                        WhatsApp
                      </label>
                      <input
                        id="rfq-whatsapp"
                        type="tel"
                        value={formData.whatsapp}
                        onChange={(e) => updateForm("whatsapp", e.target.value)}
                        className="w-full border-b border-border bg-transparent py-2 text-base focus:border-primary focus:outline-none transition-colors rounded-none font-sans"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="rfq-designation"
                        className="block text-xs uppercase tracking-widest font-bold text-muted-foreground mb-2"
                      >
                        Designation
                      </label>
                      <input
                        id="rfq-designation"
                        type="text"
                        value={formData.designation}
                        onChange={(e) => updateForm("designation", e.target.value)}
                        className="w-full border-b border-border bg-transparent py-2 text-base focus:border-primary focus:outline-none transition-colors rounded-none font-sans"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="rfq-website"
                        className="block text-xs uppercase tracking-widest font-bold text-muted-foreground mb-2"
                      >
                        Website
                      </label>
                      <input
                        id="rfq-website"
                        type="url"
                        value={formData.website}
                        onChange={(e) => updateForm("website", e.target.value)}
                        className="w-full border-b border-border bg-transparent py-2 text-base focus:border-primary focus:outline-none transition-colors rounded-none font-sans"
                      />
                    </div>
                  </div>
                </fieldset>

                {/* STEP 8 */}
                <fieldset>
                  <legend className="font-heading text-3xl font-bold text-foreground mb-8">
                    Additional Notes
                  </legend>
                  <div>
                    <label htmlFor="rfq-notes" className="sr-only">
                      Additional Notes
                    </label>
                    <textarea
                      id="rfq-notes"
                      value={formData.notes}
                      onChange={(e) => updateForm("notes", e.target.value)}
                      rows={4}
                      placeholder="Mention destination port, target pricing, packaging requirements, special certifications, or any additional procurement details."
                      className="w-full border border-border bg-[#FAFAFA] p-6 text-base focus:border-primary focus:outline-none transition-colors font-sans resize-y min-h-[150px] placeholder:text-muted-foreground/50"
                    />
                  </div>
                </fieldset>

                {/* FORM SUBMIT */}
                <div className="pt-4 border-t border-border flex flex-col gap-4">
                  <h3 className="font-heading text-2xl font-bold text-foreground">
                    Ready To Receive Your Quotation?
                  </h3>
                  <p className="text-muted-foreground font-sans max-w-xl">
                    Our procurement specialists will review your requirements and provide a detailed
                    commercial proposal.
                  </p>
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-primary text-primary-foreground font-bold uppercase tracking-widest px-10 py-5 text-sm hover:bg-primary/90 transition-colors mt-2"
                  >
                    Submit Procurement Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BOTTOM TRUST SECTION */}
      <section
        aria-labelledby="rfq-trust-heading"
        className="border-t border-[#333] bg-[#1A1A1A] py-10"
      >
        <div className="container mx-auto px-6 lg:px-12 max-w-8xl">
          <h2 id="rfq-trust-heading" className="sr-only">
            Trust Features
          </h2>
          <ul
            className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-sm font-semibold tracking-widest uppercase text-white/40"
            role="list"
            aria-label="Service features"
          >
            {TRUST_FEATURES.map((feat, idx) => (
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
