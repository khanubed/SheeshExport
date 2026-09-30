import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { getBlogPosts } from "@/lib/cms/queries";
import { formatDate } from "@/lib/utils/format";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, TrendingUp, ShieldCheck, Globe } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = buildMetadata({
  title: "Export Insights, Market Trends & Agricultural Procurement Guides",
  description:
    "Expert articles and guides on importing spices from India, crop harvest forecasts, market pricing trends, and food safety regulations.",
  pathname: "/blog",
});

const CATEGORIES = [
  { name: "Market Insights", icon: TrendingUp, href: "/blog/category/market-insights", count: 12 },
  { name: "Export Guides", icon: Globe, href: "/blog/category/export-guides", count: 8 },
  { name: "Compliance & QA", icon: ShieldCheck, href: "/blog/category/compliance", count: 5 },
  { name: "Commodity Reports", icon: BookOpen, href: "/blog/category/commodity-reports", count: 15 },
];

export default async function BlogPage() {
  const posts = await getBlogPosts();
  
  // For the sake of the premium layout, let's treat the first post as the featured editorial.
  const featuredPost = posts.length > 0 ? posts[0] : null;
  const regularPosts = posts.length > 1 ? posts.slice(1) : [];

  return (
    <main className="bg-background min-h-screen text-foreground font-sans" role="main">
      
      {/* HEADER SECTION */}
      <section aria-labelledby="blog-hero-heading" className="pt-24 pb-12 bg-primary text-primary-foreground border-b border-border">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-[1400px]">
          <span className="inline-block text-secondary font-semibold tracking-[0.2em] uppercase text-xs mb-6 border-b border-secondary/30 pb-2">
            Industry Intelligence
          </span>
          <h1 id="blog-hero-heading" className="font-heading text-5xl sm:text-6xl md:text-7xl font-medium leading-[1.05] mb-8 max-w-4xl">
            Market Insights &<br /> Trade Intelligence
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl font-light leading-relaxed font-sans">
            In-depth technical guides, crop harvest forecasts, and procurement intelligence for international food buyers and commodity brokers.
          </p>
        </div>
      </section>

      {/* FEATURED EDITORIAL */}
      {featuredPost && (
        <section aria-labelledby="featured-heading" className="py-16 bg-background border-b border-border">
          <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-[1400px]">
            <span className="text-xs uppercase tracking-widest font-semibold text-muted-foreground mb-8 block">
              Featured Report
            </span>
            <article className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center group cursor-pointer">
              <Link href={`/blog/${featuredPost.slug}`} className="order-2 lg:order-1">
                <span className="inline-block text-primary text-xs font-semibold uppercase tracking-wider mb-4">
                  {featuredPost.category.name}
                </span>
                <h2 className="font-heading text-4xl sm:text-5xl font-medium text-foreground mb-6 group-hover:text-primary transition-colors leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8 line-clamp-3">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center text-sm font-medium text-muted-foreground mb-8">
                  <time dateTime={featuredPost.publishedAt}>{formatDate(featuredPost.publishedAt)}</time>
                  <span className="mx-3 border-l border-border h-4" aria-hidden="true" />
                  <span>{featuredPost.readingTimeMinutes} min read</span>
                </div>
                <div className="inline-flex items-center text-primary font-medium tracking-wide uppercase text-sm group-hover:underline underline-offset-4">
                  Read Full Report <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </Link>
              <Link href={`/blog/${featuredPost.slug}`} className="order-1 lg:order-2 relative h-[400px] lg:h-[500px] w-full overflow-hidden bg-muted">
                {/* Fallback image if no featuredImage is present */}
                <figure>
                  <Image 
                    src="/images/about/factory-processing.jpg" 
                    alt={featuredPost.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105 mix-blend-multiply opacity-90" 
                  />
                  <figcaption className="sr-only">{featuredPost.title}</figcaption>
                </figure>
              </Link>
            </article>
          </div>
        </section>
      )}

      {/* CATEGORY QUICK LINKS */}
      <section aria-labelledby="categories-heading" className="py-12 bg-muted border-b border-border">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-[1400px]">
          <h2 id="categories-heading" className="sr-only">Blog Categories</h2>
          <nav className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" aria-label="Blog categories">
            {CATEGORIES.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <Link key={idx} href={cat.href} className="flex items-center p-6 bg-card border border-border hover:border-primary transition-colors group">
                  <div className="w-12 h-12 bg-muted flex items-center justify-center mr-4 group-hover:bg-primary/10 transition-colors">
                    <Icon className="w-5 h-5 text-foreground group-hover:text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">{cat.name}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{cat.count} Articles</p>
                  </div>
                </Link>
              )
            })}
          </nav>
        </div>
      </section>

      {/* RECENT INTELLIGENCE GRID */}
      <section aria-labelledby="latest-heading" className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-[1400px]">
          <div className="flex items-center justify-between mb-12">
            <h3 id="latest-heading" className="font-heading text-3xl font-medium text-foreground">Latest Publications</h3>
            <Link href="/blog/archive" className="hidden sm:flex items-center text-sm font-medium text-primary hover:underline underline-offset-4 uppercase tracking-widest">
              View All Archive <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16" role="list" aria-label="Latest blog posts">
            {regularPosts.map((post) => (
              <article key={post.id} className="group flex flex-col" role="listitem">
                <Link href={`/blog/${post.slug}`} className="block relative h-64 mb-6 bg-muted overflow-hidden">
                  <figure>
                    <Image 
                      src="/images/about/infra-warehouse.jpg" 
                      alt={post.title} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" 
                    />
                    <figcaption className="sr-only">{post.title}</figcaption>
                  </figure>
                </Link>
                <div className="flex-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-3 block">
                    {post.category.name}
                  </span>
                  <Link href={`/blog/${post.slug}`}>
                    <h4 className="font-heading text-2xl font-medium text-foreground mb-3 group-hover:text-primary transition-colors leading-snug">
                      {post.title}
                    </h4>
                  </Link>
                  <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                </div>
                <div className="flex items-center justify-between text-xs font-medium text-muted-foreground pt-4 border-t border-border mt-auto">
                  <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                  <span>{post.readingTimeMinutes} min read</span>
                </div>
              </article>
            ))}
          </div>
          
          {regularPosts.length === 0 && (
            <div className="text-center py-24 border border-dashed border-border">
              <p className="text-muted-foreground">More insights and reports are being published soon.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* NEWSLETTER CTA */}
      <section aria-labelledby="newsletter-heading" className="py-24 bg-primary text-primary-foreground text-center">
         <div className="container mx-auto px-6 max-w-2xl">
            <h2 id="newsletter-heading" className="font-heading text-4xl sm:text-5xl font-medium mb-6">Subscribe To Market Updates</h2>
            <p className="text-primary-foreground/80 text-lg mb-10 font-light">
              Receive monthly commodity reports, harvest forecasts, and regulatory updates directly in your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 justify-center" aria-label="Newsletter subscription">
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input id="newsletter-email" type="email" placeholder="Enter your corporate email" className="w-full sm:w-96 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground px-6 py-4 outline-none focus:border-secondary placeholder:text-primary-foreground/50" />
              <button type="button" className="bg-secondary text-primary px-8 py-4 font-medium tracking-wide hover:bg-secondary/90 transition-colors whitespace-nowrap">
                Subscribe Now
              </button>
            </form>
         </div>
      </section>

    </main>
  );
}
