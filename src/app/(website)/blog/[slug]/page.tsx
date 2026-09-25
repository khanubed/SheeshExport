import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPostBySlug, getBlogPosts } from "@/lib/cms/queries";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildArticleSchema } from "@/lib/seo/article";
import { buildBreadcrumbSchema } from "@/lib/seo/breadcrumb";
import { JsonLd } from "@/components/seo/JsonLd";
import { formatDate } from "@/lib/utils/format";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight, Share2 } from "lucide-react";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return buildMetadata({
      title: "Article Not Found",
      pathname: `/blog/${slug}`,
    });
  }

  return buildMetadata({
    title: post.seo.title || post.title,
    description: post.seo.description || post.excerpt,
    pathname: `/blog/${post.slug}`,
    ogImage: post.featuredImage?.url,
  });
}

export default async function BlogPostDetailPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const articleSchema = buildArticleSchema(post);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { label: "Home", href: "/" },
    { label: "Insights", href: "/blog" },
    { label: post.title, href: `/blog/${post.slug}` },
  ]);

  return (
    <main className="bg-background min-h-screen text-foreground font-sans">
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* ARTICLE HEADER */}
      <section className="pt-24 pb-16 bg-primary text-primary-foreground border-b border-border">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-[1000px]">
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center space-x-2 text-xs text-primary-foreground/60 uppercase tracking-widest font-medium">
            <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/blog" className="hover:text-secondary transition-colors">Insights</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href={`/blog/category/${post.category.slug}`} className="hover:text-secondary transition-colors">{post.category.name}</Link>
          </nav>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.1] mb-8">
            {post.title}
          </h1>
          
          <p className="text-xl text-primary-foreground/80 font-light leading-relaxed font-sans mb-10 border-l-2 border-secondary pl-6">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-6 pt-8 border-t border-primary-foreground/10">
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-muted">
                {post.author.avatar && (
                   <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover grayscale" />
                )}
              </div>
              <div>
                <p className="font-medium text-primary-foreground">{post.author.name}</p>
                <p className="text-xs text-primary-foreground/60">{post.author.role}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-xs font-medium text-primary-foreground/60 uppercase tracking-widest">
              <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
              <span className="w-1 h-1 rounded-full bg-secondary" />
              <span>{post.readingTimeMinutes} min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLE CONTENT */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-[1000px] flex flex-col lg:flex-row gap-16">
          
          {/* Main Content */}
          <article className="flex-1">
            {post.featuredImage && (
              <div className="relative w-full aspect-[16/9] mb-16 bg-muted">
                <Image src={post.featuredImage.url} alt={post.featuredImage.alt} fill className="object-cover mix-blend-multiply opacity-90" priority />
              </div>
            )}
            
            <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-heading prose-headings:font-medium prose-headings:text-foreground prose-p:text-muted-foreground font-sans prose-p:font-light prose-p:leading-relaxed prose-a:text-primary hover:prose-a:text-secondary prose-li:text-muted-foreground font-sans prose-strong:text-foreground">
              {/* Note: In a real CMS setup this might be MDX or HTML, here we just output text but apply basic styling classes. */}
              <div className="whitespace-pre-line text-lg leading-loose">
                {post.content}
              </div>
            </div>

            {/* Tags & Share */}
            <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <span className="text-xs uppercase tracking-widest font-semibold text-muted-foreground">Share Report:</span>
                <button className="w-10 h-10 border border-border flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-colors">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </article>
          
          {/* Sidebar / CTA */}
          <aside className="w-full lg:w-[320px] shrink-0">
            <div className="sticky top-32">
              <div className="bg-muted p-8 border border-border">
                <h3 className="font-heading text-2xl font-medium text-foreground mb-4">Ready to Source from India?</h3>
                <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
                  Connect with our trade export desk for firm price quotations, sample consignments, and container availability.
                </p>
                <Link
                  href="/request-quote"
                  className="flex items-center justify-center w-full bg-primary text-primary-foreground px-6 py-4 font-medium tracking-wide hover:bg-primary/90 transition-colors uppercase text-sm"
                >
                  Request Commercial RFQ
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center justify-center w-full bg-transparent border border-primary text-primary mt-4 px-6 py-4 font-medium tracking-wide hover:bg-primary hover:text-primary-foreground transition-colors uppercase text-sm"
                >
                  Contact Procurement
                </Link>
              </div>
            </div>
          </aside>
          
        </div>
      </section>

      {/* RELATED POSTS BLOCK (MOCK) */}
      <section className="py-24 bg-muted border-t border-border">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 max-w-[1400px]">
          <h3 className="font-heading text-3xl font-medium text-foreground mb-12 text-center">More Market Insights</h3>
          <div className="grid md:grid-cols-3 gap-8">
             {/* Hardcoded mock cards for related posts layout */}
             <div className="bg-background border border-border p-8 hover:border-primary transition-colors group cursor-pointer">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-3 block">Market Insights</span>
                <h4 className="font-heading text-xl font-medium text-foreground mb-4 group-hover:text-primary transition-colors">Global Turmeric Pricing Trends for Q4 2024</h4>
                <div className="inline-flex items-center text-primary font-medium tracking-wide uppercase text-xs group-hover:underline underline-offset-4">Read <ArrowRight className="ml-2 w-3 h-3" /></div>
             </div>
             <div className="bg-background border border-border p-8 hover:border-primary transition-colors group cursor-pointer">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-3 block">Compliance</span>
                <h4 className="font-heading text-xl font-medium text-foreground mb-4 group-hover:text-primary transition-colors">Understanding New FDA Import Alerts for Spices</h4>
                <div className="inline-flex items-center text-primary font-medium tracking-wide uppercase text-xs group-hover:underline underline-offset-4">Read <ArrowRight className="ml-2 w-3 h-3" /></div>
             </div>
             <div className="bg-background border border-border p-8 hover:border-primary transition-colors group cursor-pointer">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-3 block">Export Guides</span>
                <h4 className="font-heading text-xl font-medium text-foreground mb-4 group-hover:text-primary transition-colors">Consolidating Mixed Containers in Nhava Sheva</h4>
                <div className="inline-flex items-center text-primary font-medium tracking-wide uppercase text-xs group-hover:underline underline-offset-4">Read <ArrowRight className="ml-2 w-3 h-3" /></div>
             </div>
          </div>
        </div>
      </section>

    </main>
  );
}
