"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MAIN_NAV } from "@/config/navigation";
import { ChevronDown, Leaf, Menu, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-md"
      role="banner"
    >
      <div className="mx-auto flex h-20 max-w-8xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2" aria-label="Sheesh Exports Home">
          <Image
            src="/images/sheesh-logo.webp"
            alt="Sheesh Exports Logo"
            width={150}
            height={50}
            className="h-12 w-auto object-contain dark:invert"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center space-x-6 lg:space-x-8"
          aria-label="Main navigation"
        >
          {MAIN_NAV.map((item) => (
            <div key={item.href} className="group relative">
              <Link
                href={item.href}
                className="flex items-center space-x-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                <span>{item.title}</span>
                {item.children && <ChevronDown className="h-3 w-3" aria-hidden="true" />}
              </Link>
              {item.children && (
                <div
                  className="absolute left-0 top-full hidden w-64 pt-4 group-hover:block"
                  role="menu"
                >
                  <div className="rounded-md border border-border bg-card p-4 shadow-lg">
                    <div className="grid gap-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-sm px-2 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                          role="menuitem"
                        >
                          <div className="font-medium text-foreground">{child.title}</div>
                          {child.description && (
                            <p className="line-clamp-2 text-xs mt-1 text-muted-foreground">
                              {child.description}
                            </p>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <Link
            href="/request-quote"
            className={cn(buttonVariants({ variant: "default" }), "hidden sm:inline-flex")}
          >
            Request a Quote
          </Link>
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background absolute top-20 left-0 w-full shadow-xl">
          <nav className="flex flex-col p-6 space-y-6 max-h-[calc(100vh-5rem)] overflow-y-auto">
            {MAIN_NAV.map((item) => (
              <div key={item.href} className="flex flex-col space-y-3">
                <Link
                  href={item.href}
                  className="font-heading text-lg font-bold text-foreground"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
                {item.children && (
                  <div className="flex flex-col pl-4 space-y-3 border-l-2 border-border/50 ml-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {child.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-border sm:hidden">
              <Link
                href="/request-quote"
                className={cn(buttonVariants({ variant: "default" }), "w-full")}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Request a Quote
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
