import type { Metadata } from "next";
import { DEFAULT_SEO_METADATA } from "@/config/seo";
import { buildOrganizationSchema } from "@/lib/seo/organization";
import { JsonLd } from "@/components/seo/JsonLd";
import "@/styles/globals.css";
import { Inter, Cormorant_Garamond, Geist_Mono } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { ReduxProvider } from "@/components/providers/ReduxProvider";
import { NuqsAdapter } from "nuqs/adapters/next/app";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontHeading = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = DEFAULT_SEO_METADATA;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = buildOrganizationSchema();

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <JsonLd data={orgSchema} />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background text-foreground antialiased font-sans",
          fontSans.variable,
          fontHeading.variable,
          fontMono.variable
        )}
      >
        <NuqsAdapter>
          <ReduxProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </ReduxProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
}
