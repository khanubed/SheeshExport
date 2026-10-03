import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import {
  Calendar,
  Clock,
  ChevronRight,
  ArrowRight,
  BarChart3,
  Globe2,
  ShieldCheck,
  TrendingUp,
  BookOpen,
  Factory,
} from "lucide-react";
import { getAllBlogPosts, BLOG_CATEGORIES } from "@/lib/data/blog";
import { CTASection } from "@/components/shared/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_CONFIG } from "@/config/site";
import { IMAGES } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Global Export Intelligence & Spice Market Reports",
  description:
    "B2B market reports, trade insights, sourcing guides, and regulatory updates for international buyers of Indian spices and agro commodities.",
};

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  "import-guides": <Globe2 className="w-6 h-6" />,
  "market-intelligence": <TrendingUp className="w-6 h-6" />,
  "export-compliance": <ShieldCheck className="w-6 h-6" />,
  "product-knowledge": <BookOpen className="w-6 h-6" />,
};

export default function BlogHubPage() {
  const allPosts = getAllBlogPosts();
  const featuredPost = allPosts.find((p) => p.featured) || allPosts[0];
  const recentPosts = allPosts.filter((p) => p.slug !== featuredPost.slug).slice(0, 6);

  const hubSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Sheesh Exports Intelligence Hub",
    description: metadata.description,
    url: `${SITE_CONFIG.url}/blog`,
  };

  return (
    <main className="flex flex-col min-h-screen">
      <JsonLd data={hubSchema} />

      {/* SECTION 1: Editorial Hero */}
      <section className="relative py-16 flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src={IMAGES.insights.exportGuide}
            alt="Export Operations"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-6 block">
            The Buyer's Knowledge Hub
          </span>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]">
            Global Export <br />
            <span className="text-primary">Intelligence</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Market Reports, Trade Insights, Sourcing Guides & Regulatory Updates For International
            Buyers.
          </p>
        </div>
      </section>

      {/* SECTION 2: Featured Intelligence (70/30 Split) */}
      <section className="py-16 bg-background border-b border-border">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* 70% Feature */}
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="flex-1 group relative rounded-2xl overflow-hidden bg-card border border-border flex flex-col md:flex-row"
            >
              <div className="relative w-full md:w-1/2 aspect-[4/3] md:aspect-auto">
                <Image src={featuredPost.heroImage}
                  alt={featuredPost.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <span className="inline-block bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full mb-6 w-fit">
                  Featured Report
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-muted-foreground mb-6 line-clamp-3 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground mt-auto">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />{" "}
                    {new Date(featuredPost.publishDate).toLocaleDateString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {featuredPost.readTime}
                  </span>
                </div>
              </div>
            </Link>

            {/* 30% Sidebar Intelligence */}
            <div className="w-full lg:w-[30%] flex flex-col gap-6">
              <div className="bg-card border border-border p-8 rounded-2xl h-full flex flex-col">
                <h3 className="font-heading text-2xl font-bold mb-6">Market Watch</h3>
                <div className="space-y-6 flex-1">
                  <div className="border-b border-border pb-4">
                    <span className="text-xs font-bold text-primary uppercase tracking-wider mb-2 block">
                      Guntur, India
                    </span>
                    <h4 className="font-bold text-foreground">Teja S17 Chilli Arrivals Peak</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Prices stabilize as new crop enters the yard.
                    </p>
                  </div>
                  <div className="border-b border-border pb-4">
                    <span className="text-xs font-bold text-primary uppercase tracking-wider mb-2 block">
                      Regulatory
                    </span>
                    <h4 className="font-bold text-foreground">EU Updates MRL for Cumin</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      New pesticide residue limits effective Q3 2024.
                    </p>
                  </div>
                </div>
                <Link
                  href="/request-quote"
                  className="mt-6 inline-flex items-center text-sm font-bold text-primary uppercase tracking-wider hover:text-primary/80"
                >
                  Request Market Pricing <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Content Categories */}
      <section className="py-16 bg-muted/30 border-b border-border">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <h2 className="font-heading text-4xl font-bold text-foreground mb-4">
                Intelligence By Topic
              </h2>
              <p className="text-muted-foreground">
                Browse our specialized resources for global buyers.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.values(BLOG_CATEGORIES).map((category, idx) => (
              <Link
                key={idx}
                href={`/blog/category/${category.slug}`}
                className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-colors group flex flex-col h-full"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {CATEGORY_ICONS[category.slug] || <Factory className="w-6 h-6" />}
                </div>
                <h3 className="font-bold text-xl mb-3 text-foreground group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                  {category.description}
                </p>
                <span className="text-xs font-bold text-primary uppercase tracking-wider flex items-center mt-auto">
                  View Guides <ChevronRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Recent Articles (Editorial Grid) */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="border-b-2 border-foreground pb-4 mb-12 flex justify-between items-end">
            <h2 className="font-heading text-4xl font-bold uppercase tracking-tight">
              Latest Briefings
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {recentPosts.map((post, idx) => (
              <article key={idx} className="group flex flex-col">
                <Link
                  href={`/blog/${post.slug}`}
                  className="relative w-full aspect-[4/3] mb-6 overflow-hidden bg-muted"
                >
                  <Image
                    src={post.heroImage}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>
                <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-primary mb-3">
                  <span>{post.category.name}</span>
                  <span className="text-muted-foreground/30">•</span>
                  <span className="text-muted-foreground">{post.readTime}</span>
                </div>
                <Link href={`/blog/${post.slug}`}>
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-muted-foreground line-clamp-2 leading-relaxed mb-4">
                  {post.excerpt}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </main>
  );
}
