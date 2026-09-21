import { Metadata } from "next";
import { SITE_CONFIG } from "@/config/site";
import { SEOData } from "@/types/common";

interface BuildMetadataParams extends Partial<SEOData> {
  pathname?: string;
}

export function buildMetadata({
  title,
  description,
  pathname = "",
  ogImage,
  noIndex = false,
}: BuildMetadataParams = {}): Metadata {
  const metaTitle = title
    ? `${title} | ${SITE_CONFIG.name}`
    : `${SITE_CONFIG.name} | Leading Indian Spices & Agro Commodities Exporter`;
  const metaDescription = description || SITE_CONFIG.description;
  const canonicalUrl = `${SITE_CONFIG.url}${pathname}`;
  const image = ogImage || `${SITE_CONFIG.url}/images/branding/og-default.jpg`;

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: canonicalUrl,
      siteName: SITE_CONFIG.name,
      images: [{ url: image, width: 1200, height: 630, alt: title || SITE_CONFIG.name }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: [image],
    },
  };
}
