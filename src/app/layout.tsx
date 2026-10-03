import type { Metadata } from "next";
import { DEFAULT_SEO_METADATA } from "@/config/seo";
import { buildOrganizationSchema } from "@/lib/seo/organization";
import { JsonLd } from "@/components/seo/JsonLd";
import "@/styles/globals.css";
import { Inter, Cormorant_Garamond } from "next/font/google";
import { cn } from "@/lib/utils";
import { NuqsAdapter } from "nuqs/adapters/next/app";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
});

const fontHeading = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = DEFAULT_SEO_METADATA;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = buildOrganizationSchema();

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <JsonLd data={orgSchema} />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background text-foreground antialiased font-sans",
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <NuqsAdapter>
          {children}
        </NuqsAdapter>
      </body>
    </html>
  );
}
