import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { getBlogPostBySlug, getAllBlogPosts } from "@/lib/data/blog";
import { FAQSection } from "@/components/shared/FAQSection";
import { CTASection } from "@/components/shared/CTASection";
import { Calendar, Clock, ChevronRight, User } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_CONFIG } from "@/config/site";

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.seoTitle,
    description: post.seoDescription,
    keywords: post.keywords,
    openGraph: {
      title: post.seoTitle,
      description: post.seoDescription,
      type: "article",
      publishedTime: post.publishDate,
      authors: [post.author],
      images: [
        {
          url: post.heroImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_CONFIG.url },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_CONFIG.url}/blog` },
      {
        "@type": "ListItem",
        position: 3,
        name: post.category.name,
        item: `${SITE_CONFIG.url}/blog/category/${post.category.slug}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: post.title,
        item: `${SITE_CONFIG.url}/blog/${post.slug}`,
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    image: [`${SITE_CONFIG.url}${post.heroImage}`],
    datePublished: post.publishDate,
    author: [{ "@type": "Person", name: post.author }],
  };

  return (
    <main className="flex flex-col min-h-screen pb-16">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={articleSchema} />

      {/* Editorial Hero */}
      <section className="relative py-16 bg-muted/30 border-b border-border">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
                <Link href="/blog" className="hover:underline">
                  Blog
                </Link>
                <ChevronRight className="w-3 h-3" />
                <Link href={`/blog/category/${post.category.slug}`} className="hover:underline">
                  {post.category.name}
                </Link>
              </div>
              <h1 className="font-heading text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-foreground">
                {post.title}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                {post.excerpt}
              </p>
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground pt-4 border-t border-border">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" /> {post.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />{" "}
                  {new Date(post.publishDate).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" /> {post.readTime}
                </div>
              </div>
            </div>
            <div className="flex-1 w-full lg:w-auto">
              <div className="relative aspect-4/3 rounded-xl overflow-hidden shadow-lg border border-border">
                <Image
                  loading="lazy"
                  src={post.heroImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-7xl mt-16">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Main Content Area */}
          <article className="flex-1 prose prose-lg prose-neutral max-w-none prose-headings:font-heading prose-headings:font-bold prose-a:text-primary hover:prose-a:text-primary/80">
            {/* Quick Summary Block */}
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 mb-12 not-prose">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                Quick Summary
              </h3>
              <ul className="space-y-3">
                {post.faq.slice(0, 3).map((f, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground">
                    <span className="text-primary font-bold mt-0.5">•</span>
                    <span>{f.answer}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* The MDX/HTML Content */}
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>

          {/* Sticky Sidebar */}
          <aside className="w-full lg:w-80 shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Procurement CTA Box */}
              <div className="bg-card border border-border rounded-xl p-6 shadow-sm text-center">
                <h3 className="font-heading text-xl font-bold mb-3">Need A Supplier?</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Sheesh Exports offers bulk procurement with full compliance for your market.
                </p>
                <Link
                  href="/request-quote"
                  className="inline-flex items-center justify-center w-full bg-primary text-primary-foreground font-semibold py-3 px-4 rounded hover:bg-primary/90 transition-colors uppercase text-sm tracking-wider"
                >
                  Request Current Pricing
                </Link>
              </div>

              {/* Related Sections */}
              <div className="border border-border rounded-xl p-6">
                <h3 className="font-bold text-sm tracking-widest uppercase mb-4 text-foreground">
                  Explore More
                </h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li>
                    <Link
                      href="/products"
                      className="hover:text-primary transition-colors flex items-center justify-between"
                    >
                      View Product Catalog <ChevronRight className="w-3 h-3" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/international/uae"
                      className="hover:text-primary transition-colors flex items-center justify-between"
                    >
                      UAE Export Guide <ChevronRight className="w-3 h-3" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/international/usa"
                      className="hover:text-primary transition-colors flex items-center justify-between"
                    >
                      USA Export Guide <ChevronRight className="w-3 h-3" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Reusable FAQ Component */}
      <FAQSection
        title="Related Questions"
        subtitle="Export Intelligence"
        faqs={post.faq}
        showSchema={true}
        className="mt-24 border-t-0 bg-transparent"
      />

      {/* CTA Section */}
      <CTASection />
    </main>
  );
}
