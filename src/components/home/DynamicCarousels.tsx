"use client";

import dynamic from "next/dynamic";

export const DynamicProductCarousel = dynamic(
  () => import("@/components/home/ProductCarousel").then((mod) => mod.ProductCarousel),
  { ssr: false, loading: () => <div className="min-h-[400px] w-full bg-muted/10 animate-pulse rounded-xl" /> }
);

export const DynamicCertificationsCarousel = dynamic(
  () => import("@/components/home/CertificationsCarousel").then((mod) => mod.CertificationsCarousel),
  { ssr: false, loading: () => <div className="min-h-[160px] w-full bg-muted/10 animate-pulse rounded-xl" /> }
);
