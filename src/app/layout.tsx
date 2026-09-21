import type { Metadata } from "next";
import { DEFAULT_SEO_METADATA } from "@/config/seo";
import { buildOrganizationSchema } from "@/lib/seo/organization";
import { JsonLd } from "@/components/seo/JsonLd";
import "@/styles/globals.css";

export const metadata: Metadata = DEFAULT_SEO_METADATA;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = buildOrganizationSchema();

  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        <JsonLd data={orgSchema} />
      </head>
      <body className="flex min-h-full flex-col bg-white text-slate-900 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
