import Link from "next/link";
import Image from "next/image";
import { MAIN_NAV } from "@/config/navigation";
import { ChevronDown, Leaf } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-8xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/images/sheesh-logo.jpeg" alt="Sheesh Exports Logo" width={150} height={50} className="h-12 w-auto object-contain dark:invert" />
        </Link>

        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {MAIN_NAV.map((item) => (
            <div key={item.href} className="group relative">
              <Link
                href={item.href}
                className="flex items-center space-x-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                <span>{item.title}</span>
                {item.children && <ChevronDown className="h-3 w-3" />}
              </Link>
              {item.children && (
                <div className="absolute left-0 top-full hidden w-64 pt-4 group-hover:block">
                  <div className="rounded-md border border-border bg-card p-4 shadow-lg">
                    <div className="grid gap-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-sm px-2 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
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
          <Link href="/request-quote" className={cn(buttonVariants({ variant: "default" }), "hidden sm:inline-flex")}>
            Request a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
