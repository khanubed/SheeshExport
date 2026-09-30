"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

// Filter out the React 19 script tag warning and fdprocessedid hydration warnings in development
if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
  const orig = console.error;
  console.error = (...args: any[]) => {
    const stringified = args.map(arg => 
      typeof arg === "string" ? arg : (arg instanceof Error ? arg.message : String(arg))
    ).join(" ");
    
    if (stringified.includes("Encountered a script tag")) {
      return;
    }
    
    // Ignore browser extension injected attributes (e.g., fdprocessedid from password managers)
    if (stringified.includes("fdprocessedid")) {
      return;
    }

    orig.apply(console, args);
  };
}

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
