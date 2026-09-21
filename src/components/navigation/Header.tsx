import Link from "next/link";
import { MAIN_NAV } from "@/config/navigation";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-3">
          <span className="text-2xl font-bold tracking-tight text-slate-900">
            SHEESH <span className="text-emerald-700">EXPORTS</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {MAIN_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-700 transition-colors hover:text-emerald-700"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <Link
            href="/request-quote"
            className="inline-flex items-center justify-center rounded-md bg-emerald-700 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-800 transition-colors"
          >
            Request Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
