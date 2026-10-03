"use client";

import dynamic from "next/dynamic";

export const DynamicProductCarousel = dynamic(
  () => import("@/components/home/ProductCarousel").then((mod) => mod.ProductCarousel),
  { ssr: true }
);

export const DynamicCertificationsCarousel = dynamic(
  () => import("@/components/home/CertificationsCarousel").then((mod) => mod.CertificationsCarousel),
  { ssr: true }
);
