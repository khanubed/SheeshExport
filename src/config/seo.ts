import { Metadata } from "next";
import { SITE_CONFIG } from "./site";

export const DEFAULT_SEO_METADATA: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: "Sheesh Exports | Leading Indian Spices & Agro Commodities Exporter",
    template: "%s | Sheesh Exports",
  },
  description: SITE_CONFIG.description,
  keywords: [
    "Indian spices exporter",
    "agro commodities exporter India",
    "red chilli exporter",
    "turmeric supplier India",
    "cumin seeds bulk export",
    "private label spices exporter",
    "APEDA registered spice exporter",
    "FSSAI certified bulk spices",
  ],
  icons: {
    icon: [
      { url: "/favicon.webp", type: "image/webp" },
    ],
  },
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: "Sheesh Exports | Premier Indian Spices & Commodities Exporter",
    description: SITE_CONFIG.description,
    images: [
      {
        url: `${SITE_CONFIG.url}/images/branding/og-default.jpg`,
        width: 1200,
        height: 630,
        alt: "Sheesh Exports - Indian Agro Commodities & Spices",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sheesh Exports | Premier Indian Spices & Commodities Exporter",
    description: SITE_CONFIG.description,
    images: [`${SITE_CONFIG.url}/images/branding/og-default.jpg`],
  },
};
