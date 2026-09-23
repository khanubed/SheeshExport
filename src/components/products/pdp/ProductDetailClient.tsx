"use client";

import { useGetProductBySlugQuery } from "@/lib/redux/api/productsApi";
import { ProductGallery } from "./ProductGallery";
import { ProductSummary } from "./ProductSummary";
import { SpecsTable } from "./SpecsTable";
import { GradesTabs } from "./GradesTabs";
import { PackagingOptions } from "./PackagingOptions";
import { FAQAccordion } from "./FAQAccordion";
import { RFQStickyPanel } from "./RFQStickyPanel";
import { useState } from "react";
import { Loader2, ArrowLeft } from "lucide-react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export function ProductDetailClient({ slug }: { slug: string }) {
  const { data: product, isLoading, isError } = useGetProductBySlugQuery(slug);
  const [rfqOpen, setRfqOpen] = useState(false);

  if (isLoading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <Loader2 className="w-12 h-12 animate-spin text-primary mb-4" />
        <p className="text-muted-foreground">Loading product details...</p>
      </div>
    );
  }

  if (isError || !product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-3xl font-heading font-bold mb-4">Product Not Found</h2>
        <p className="text-muted-foreground mb-6">The product you're looking for doesn't exist or has been removed.</p>
        <Link href="/products" className="text-primary hover:underline flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Catalog
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-background pb-16">
      {/* Breadcrumbs */}
      <div className="bg-muted/30 border-b border-border py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/products">Products</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="font-semibold text-primary">{product.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Top Section: Gallery + Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          <div className="lg:sticky lg:top-24 h-fit">
            <ProductGallery images={product.images || []} />
          </div>
          <div>
            <ProductSummary product={product} onOpenRfq={() => setRfqOpen(true)} />
            
            <Separator className="my-8" />
            
            <PackagingOptions options={product.packagingOptions} />
          </div>
        </div>

        {/* Middle Section: Specs & Grades */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-heading font-bold mb-6">Technical Specifications</h2>
              <SpecsTable specifications={product.specifications} />
            </section>
            
            <section>
              <h2 className="text-2xl font-heading font-bold mb-6">Available Grades</h2>
              <GradesTabs grades={product.grades} />
            </section>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-muted/20 p-6 rounded-xl border border-border">
              <h3 className="font-semibold text-lg mb-4">Applications</h3>
              <ul className="space-y-3">
                {product.applications?.map((app, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-muted-foreground text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    {app}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section: FAQs */}
        <Separator className="my-12" />
        <div className="max-w-3xl mx-auto">
          <FAQAccordion faqs={product.faqs} />
        </div>
      </div>

      <RFQStickyPanel product={product} open={rfqOpen} onOpenChange={setRfqOpen} />
    </div>
  );
}
