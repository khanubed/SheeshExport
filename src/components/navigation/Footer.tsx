import Link from "next/link";
import { FOOTER_NAV } from "@/config/navigation";
import { SITE_CONFIG } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <span className="text-2xl font-bold tracking-tight text-white">
              SHEESH <span className="text-emerald-500">EXPORTS</span>
            </span>
            <p className="mt-4 text-sm leading-relaxed text-slate-400 max-w-sm">
              {SITE_CONFIG.description}
            </p>
            <div className="mt-6 space-y-1 text-xs text-slate-400">
              <p>📍 {SITE_CONFIG.contact.address.street}, {SITE_CONFIG.contact.address.city}, {SITE_CONFIG.contact.address.country}</p>
              <p>✉️ {SITE_CONFIG.contact.email} | 📞 {SITE_CONFIG.contact.phone}</p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Products</h3>
            <ul className="mt-4 space-y-2">
              {FOOTER_NAV.products.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h3>
            <ul className="mt-4 space-y-2">
              {FOOTER_NAV.company.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Services & Trade</h3>
            <ul className="mt-4 space-y-2">
              {FOOTER_NAV.services.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
              {FOOTER_NAV.legal.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.legalName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
