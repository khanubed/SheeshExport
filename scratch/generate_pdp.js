const fs = require("fs");
const path = require("path");

const outDir = path.join(__dirname, "..", "src", "components", "products", "pdp");

const files = {
  "ProductDetailClient.tsx": `
"use client";
import React, { useState, useEffect } from "react";
import { Product, Variant } from "@/lib/data/types";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { ProductHero } from "./ProductHero";
import { ProductVariants } from "./ProductVariants";
import { ProductOriginStory } from "./ProductOriginStory";
import { ProductGallery } from "./ProductGallery";
import { VariantAttributes } from "./VariantAttributes";
import { ProductSpecifications } from "./ProductSpecifications";
import { ProductShipping } from "./ProductShipping";
import { ProductPackaging } from "./ProductPackaging";
import { ProductCertifications } from "./ProductCertifications";
import { ProductExportMarkets } from "./ProductExportMarkets";
import { VariantComparison } from "./VariantComparison";
import { ProductFAQ } from "./ProductFAQ";
import { ProductRFQCTA } from "./ProductRFQCTA";

export function ProductDetailClient({ product }: { product: Product }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  
  const variantParam = searchParams.get("variant");
  const defaultVariant = product.variants[0];
  
  const [selectedVariant, setSelectedVariant] = useState<Variant>(
    product.variants.find((v) => v.slug === variantParam) || defaultVariant
  );

  useEffect(() => {
    const v = product.variants.find((v) => v.slug === variantParam);
    if (v) {
      setSelectedVariant(v);
    }
  }, [variantParam, product.variants]);

  const handleVariantChange = (variant: Variant) => {
    setSelectedVariant(variant);
    const params = new URLSearchParams(searchParams.toString());
    params.set("variant", variant.slug);
    router.replace(\`\${pathname}?\${params.toString()}\`, { scroll: false });
  };

  return (
    <div className="flex flex-col w-full bg-white text-slate-900 selection:bg-slate-200">
      <ProductHero product={product} selectedVariant={selectedVariant} />
      {product.variants.length > 1 && (
        <ProductVariants product={product} selectedVariant={selectedVariant} onSelect={handleVariantChange} />
      )}
      <ProductOriginStory product={product} />
      <ProductGallery variant={selectedVariant} />
      <div className="bg-slate-50 border-t border-b border-slate-100 py-16">
        <div className="container mx-auto px-4 max-w-8xl grid grid-cols-1 lg:grid-cols-2 gap-16">
          <VariantAttributes variant={selectedVariant} />
          <ProductSpecifications variant={selectedVariant} />
        </div>
      </div>
      <ProductShipping shipping={product.shipping} />
      <ProductPackaging options={product.packagingOptions} />
      <ProductCertifications certifications={product.certifications} />
      <ProductExportMarkets markets={product.exportMarkets} />
      {product.variants.length > 1 && (
        <VariantComparison variants={product.variants} />
      )}
      <ProductFAQ faqs={product.faqs} />
      <ProductRFQCTA product={product} />
    </div>
  );
}
  `,

  "ProductHero.tsx": `
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
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden border-b border-slate-100">
      <div className="container mx-auto px-4 max-w-8xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            className="w-full lg:w-1/2 flex flex-col gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-slate-500 mb-2">
              <Link href="/products" className="hover:text-slate-900 transition-colors">Products</Link>
              <ChevronRight className="w-3 h-3" />
              <span>{product.category}</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-serif font-semibold tracking-tight text-slate-900 leading-tight">
              {product.name}
            </h1>
            
            {product.botanicalName && (
              <p className="text-lg text-slate-500 italic font-serif">
                {product.botanicalName}
              </p>
            )}

            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
              {product.description.split("\\n")[0]}
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
              <Link href={\`/request-quote?product=\${product.slug}\`}>
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
            className="w-full lg:w-1/2 relative h-[500px] bg-slate-50"
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
  `,

  "ProductVariants.tsx": `
"use client";
import React from "react";
import { Product, Variant } from "@/lib/data/types";
import { cn } from "@/lib/utils";

export function ProductVariants({ product, selectedVariant, onSelect }: { product: Product; selectedVariant: Variant; onSelect: (v: Variant) => void }) {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-8xl">
        <h3 className="text-sm font-semibold tracking-widest uppercase text-slate-500 mb-6">Available Grades & Variants</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {product.variants.map((variant) => (
            <button
              key={variant.id}
              onClick={() => onSelect(variant)}
              className={cn(
                "flex flex-col items-start p-6 border text-left transition-all duration-200",
                selectedVariant.id === variant.id 
                  ? "border-slate-900 bg-slate-50 shadow-sm" 
                  : "border-slate-200 hover:border-slate-400"
              )}
            >
              <span className="font-serif font-semibold text-lg text-slate-900 mb-2">{variant.name}</span>
              <div className="flex flex-col gap-1 mt-auto">
                {variant.attributes.slice(0, 2).map((attr, idx) => (
                  <span key={idx} className="text-xs text-slate-500">
                    <strong className="font-medium text-slate-700">{attr.label}:</strong> {attr.value}
                  </span>
                ))}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
  `,

  "ProductOriginStory.tsx": `
"use client";
import React from "react";
import Image from "next/image";
import { Product } from "@/lib/data/types";
import { MapPin } from "lucide-react";

export function ProductOriginStory({ product }: { product: Product }) {
  return (
    <section className="py-24 bg-slate-900 text-slate-50">
      <div className="container mx-auto px-4 max-w-8xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <h2 className="text-sm font-semibold tracking-widest uppercase text-slate-400 mb-4">The Origin Story</h2>
            <h3 className="text-4xl font-serif font-medium mb-6 flex items-center gap-3">
              <MapPin className="w-8 h-8 text-primary" />
              {product.originStory.location}
            </h3>
            <div className="w-12 h-1 bg-primary mb-8"></div>
            <p className="text-lg text-slate-300 leading-relaxed font-light">
              {product.originStory.story}
            </p>
          </div>
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
            {product.originStory.images.slice(0, 2).map((img, idx) => (
              <div key={idx} className={\`relative \${idx === 0 ? 'aspect-square' : 'aspect-[3/4] mt-12'}\`}>
                <Image loading="lazy" src={img || "/images/placeholder.jpg"} alt="Origin" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
  `,

  "ProductGallery.tsx": `
"use client";
import React from "react";
import Image from "next/image";
import { Variant } from "@/lib/data/types";

export function ProductGallery({ variant }: { variant: Variant }) {
  if (!variant.images || variant.images.length === 0) return null;
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-8xl">
        <h2 className="text-sm font-semibold tracking-widest uppercase text-slate-500 mb-8">Product Gallery — {variant.name}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {variant.images.map((img, idx) => (
            <div key={idx} className="relative aspect-square bg-slate-100 group overflow-hidden">
              <Image loading="lazy" 
                src={img || "/images/placeholder.jpg"} 
                alt={variant.name} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
  `,

  "VariantAttributes.tsx": `
"use client";
import React from "react";
import { Variant } from "@/lib/data/types";

export function VariantAttributes({ variant }: { variant: Variant }) {
  return (
    <div>
      <h2 className="text-2xl font-serif font-semibold text-slate-900 mb-8">Key Attributes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
        {variant.attributes.map((attr, idx) => (
          <div key={idx} className="flex flex-col border-b border-slate-200 pb-4">
            <span className="text-sm text-slate-500 mb-1">{attr.label}</span>
            <span className="text-lg font-medium text-slate-900">{attr.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
  `,

  "ProductSpecifications.tsx": `
"use client";
import React from "react";
import { Variant } from "@/lib/data/types";

export function ProductSpecifications({ variant }: { variant: Variant }) {
  return (
    <div className="bg-white p-8 border border-slate-200 shadow-sm">
      <h2 className="text-2xl font-serif font-semibold text-slate-900 mb-6">Technical Specifications</h2>
      <div className="w-full text-sm text-left">
        {variant.specifications.map((spec, idx) => (
          <div key={idx} className="flex justify-between py-4 border-b border-slate-100 last:border-0">
            <span className="font-medium text-slate-700">{spec.parameter}</span>
            <span className="text-slate-900 font-semibold text-right">{spec.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
  `,

  "ProductShipping.tsx": `
"use client";
import React from "react";
import { ShippingDetails } from "@/lib/data/types";
import { Ship, Anchor, Clock, Box } from "lucide-react";

export function ProductShipping({ shipping }: { shipping: ShippingDetails }) {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4 max-w-8xl">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold tracking-widest uppercase text-slate-400 mb-4">Logistics</h2>
          <h3 className="text-3xl lg:text-4xl font-serif font-medium">Shipping & Containerization</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center p-8 border border-slate-800 bg-slate-800/50">
            <Box className="w-10 h-10 text-primary mb-4" />
            <h4 className="text-xl font-serif mb-2">20FT FCL</h4>
            <p className="text-slate-400">{shipping.capacity20ft}</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-8 border border-slate-800 bg-slate-800/50">
            <Box className="w-10 h-10 text-primary mb-4" />
            <h4 className="text-xl font-serif mb-2">40FT HC</h4>
            <p className="text-slate-400">{shipping.capacity40ft}</p>
          </div>

          <div className="flex flex-col items-center text-center p-8 border border-slate-800 bg-slate-800/50">
            <Clock className="w-10 h-10 text-primary mb-4" />
            <h4 className="text-xl font-serif mb-2">Transit Time</h4>
            <p className="text-slate-400">{shipping.transitTime}</p>
          </div>

          <div className="flex flex-col items-center text-center p-8 border border-slate-800 bg-slate-800/50">
            <Anchor className="w-10 h-10 text-primary mb-4" />
            <h4 className="text-xl font-serif mb-2">Export Ports</h4>
            <p className="text-slate-400">{shipping.exportPorts.join(", ")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
  `,

  "ProductPackaging.tsx": `
"use client";
import React from "react";
import { PackagingOption } from "@/lib/data/types";
import { Check } from "lucide-react";

export function ProductPackaging({ options }: { options: PackagingOption[] }) {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-8xl">
        <div className="mb-16">
          <h2 className="text-sm font-semibold tracking-widest uppercase text-slate-500 mb-4">Fulfillment</h2>
          <h3 className="text-3xl lg:text-4xl font-serif font-semibold text-slate-900">Packaging Options</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {options.map((opt, idx) => (
            <div key={idx} className="border border-slate-200 p-8 hover:border-slate-900 transition-colors bg-slate-50">
              <h4 className="text-xl font-serif font-semibold text-slate-900 mb-4">{opt.name}</h4>
              <p className="text-slate-600 mb-8 min-h-[60px]">{opt.description}</p>
              
              <ul className="space-y-4 text-sm">
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-600" />
                  <span className="text-slate-500">MOQ:</span>
                  <span className="font-semibold text-slate-900 ml-auto">{opt.moq}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-600" />
                  <span className="text-slate-500">Lead Time:</span>
                  <span className="font-semibold text-slate-900 ml-auto">{opt.leadTime}</span>
                </li>
                <li className="flex items-center gap-3 border-t border-slate-200 pt-4 mt-4">
                  <span className="text-slate-500 block w-full text-center italic">{opt.bestFor}</span>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
  `,

  "ProductCertifications.tsx": `
"use client";
import React from "react";
import { ShieldCheck } from "lucide-react";

export function ProductCertifications({ certifications }: { certifications: string[] }) {
  return (
    <section className="py-16 bg-slate-100 border-y border-slate-200">
      <div className="container mx-auto px-4 max-w-8xl flex flex-col md:flex-row items-center gap-8">
        <div className="flex-shrink-0">
          <h3 className="text-lg font-serif font-semibold text-slate-900 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-green-600" /> Quality & Compliance
          </h3>
        </div>
        <div className="flex flex-wrap gap-4 md:ml-auto">
          {certifications.map((cert, idx) => (
            <span key={idx} className="px-4 py-2 bg-white border border-slate-200 text-slate-700 font-medium text-sm shadow-sm rounded-sm">
              {cert}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
  `,

  "ProductExportMarkets.tsx": `
"use client";
import React from "react";
import { Globe2 } from "lucide-react";

export function ProductExportMarkets({ markets }: { markets: string[] }) {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-8xl text-center">
        <Globe2 className="w-12 h-12 text-slate-300 mx-auto mb-6" />
        <h3 className="text-3xl font-serif font-semibold text-slate-900 mb-8">Global Export Markets</h3>
        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {markets.map((market, idx) => (
            <span key={idx} className="px-6 py-3 bg-slate-50 border border-slate-200 text-slate-900 font-semibold uppercase tracking-wider text-xs">
              {market}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
  `,

  "VariantComparison.tsx": `
"use client";
import React from "react";
import { Variant } from "@/lib/data/types";

export function VariantComparison({ variants }: { variants: Variant[] }) {
  if (variants.length < 2) return null;
  
  // Extract all unique spec parameters
  const specKeys = Array.from(new Set(variants.flatMap(v => v.specifications.map(s => s.parameter))));

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-8xl">
        <h3 className="text-3xl font-serif font-semibold text-slate-900 mb-12 text-center">Grade Comparison</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse bg-white shadow-sm border border-slate-200">
            <thead>
              <tr>
                <th className="p-6 border-b border-slate-200 bg-slate-100 text-slate-900 font-serif font-semibold">Parameter</th>
                {variants.map(v => (
                  <th key={v.id} className="p-6 border-b border-slate-200 bg-slate-100 text-slate-900 font-serif font-semibold">{v.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {specKeys.map((key, idx) => (
                <tr key={idx} className="border-b border-slate-100 last:border-0 hover:bg-slate-50">
                  <td className="p-4 px-6 text-sm font-medium text-slate-600">{key}</td>
                  {variants.map(v => {
                    const spec = v.specifications.find(s => s.parameter === key);
                    return <td key={v.id} className="p-4 px-6 text-sm text-slate-900 font-semibold">{spec ? spec.value : "-"}</td>
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
  `,

  "ProductFAQ.tsx": `
"use client";
import React from "react";
import { FAQ } from "@/lib/data/types";

export function ProductFAQ({ faqs }: { faqs: FAQ[] }) {
  if (!faqs || faqs.length === 0) return null;
  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 max-w-3xl">
        <h3 className="text-3xl font-serif font-semibold text-slate-900 mb-12 text-center">Frequently Asked Questions</h3>
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-slate-200 pb-6">
              <h4 className="text-lg font-semibold text-slate-900 mb-2">{faq.question}</h4>
              <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
  `,

  "ProductRFQCTA.tsx": `
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
          <Link href={\`/request-quote?product=\${product.slug}\`}>
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
  `,
};

for (const [filename, content] of Object.entries(files)) {
  fs.writeFileSync(path.join(outDir, filename), content.trim());
}

console.log("Successfully generated 15 PDP components in", outDir);
