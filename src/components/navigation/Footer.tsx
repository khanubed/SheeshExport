import Link from "next/link";
import Image from "next/image";
import { FOOTER_NAV } from "@/config/navigation";
import { Leaf, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";

export function Footer() {
  return (
    <footer className="bg-card text-card-foreground border-t border-border" role="contentinfo">
      <div className="mx-auto max-w-8xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/" className="flex items-center space-x-2" aria-label="Sheesh Exports Home">
              <Image
                src="/images/sheesh-logo.webp"
                alt="Sheesh Exports Logo"
                width={150}
                height={50}
                className="h-12 w-auto object-contain dark:invert"
              />
            </Link>
            <p className="text-sm leading-6 text-muted-foreground max-w-xs">
              Bringing the richness of Indian agriculture to the world. Premium quality spices,
              grains, and agro-commodities.
            </p>
            <nav aria-label="Social media links">
              <ul className="flex space-x-6 items-center" role="list">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary" aria-label="LinkedIn">
                    <span className="sr-only">LinkedIn</span>
                    <FontAwesomeIcon icon={faLinkedinIn} className="h-6 w-6" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary" aria-label="Twitter">
                    <span className="sr-only">Twitter</span>
                    <FontAwesomeIcon icon={faTwitter} className="h-6 w-6" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="mailto:info@sheeshexports.in" className="text-muted-foreground hover:text-primary" aria-label="Email">
                    <span className="sr-only">Email</span>
                    <Mail className="h-6 w-6" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <nav aria-label="Company links" className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground font-heading tracking-wide uppercase">
                  Company
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {FOOTER_NAV.company.map((item) => (
                    <li key={item.title}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-muted-foreground hover:text-primary"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-foreground font-heading tracking-wide uppercase">
                  Products
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {FOOTER_NAV.products.map((item) => (
                    <li key={item.title}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-muted-foreground hover:text-primary"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
            <nav aria-label="Services and newsletter" className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground font-heading tracking-wide uppercase">
                  Services
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {FOOTER_NAV.services.map((item) => (
                    <li key={item.title}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-muted-foreground hover:text-primary"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-foreground font-heading tracking-wide uppercase">
                  Newsletter
                </h3>
                <p className="mt-6 text-sm leading-6 text-muted-foreground">
                  Stay updated with the latest export insights and market trends.
                </p>
                <form className="mt-6 flex flex-col gap-3 max-w-xs" aria-label="Newsletter subscription">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email-address"
                    id="email-address"
                    autoComplete="email"
                    required
                    className="flex h-10 w-full min-w-0 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Enter your email"
                  />
                  <Button type="submit" className="w-full h-10">
                    Subscribe
                  </Button>
                </form>
              </div>
            </nav>
          </div>
        </div>
        <div className="mt-16 border-t border-border pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-muted-foreground">
            &copy; {new Date().getFullYear()} Sheesh Exports. All rights reserved.
          </p>
        </div>
        <address className="mt-4 text-xs text-muted-foreground not-italic" aria-label="Company address">
          507, B-Block, The One Building, 5 RNT Marg, Indore, Madhya Pradesh - 452001, India
        </address>
      </div>
    </footer>
  );
}
