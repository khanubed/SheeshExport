import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Clock, ChevronRight } from "lucide-react";
import { getAllBlogPosts, BLOG_CATEGORIES } from "@/lib/data/blog";
import { CTASection } from "@/components/shared/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_CONFIG } from "@/config/site";

export async function generateStaticParams() {
  return Object.values(BLOG_CATEGORIES).map((cat) => ({
    slug: cat.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = Object.values(BLOG_CATEGORIES).find((c) => c.slug === slug);
  if (!category) return {};

  return {
    title: `${category.name} | Sheesh Exports Intelligence`,
    description: category.description,
  };
}

export default async function BlogCategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = Object.values(BLOG_CATEGORIES).find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  const allPosts = getAllBlogPosts();
  const categoryPosts = allPosts.filter((post) => post.category.slug === category.slug);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_CONFIG.url },
      { "@type": "ListItem", position: 2, name: "Intelligence", item: `${SITE_CONFIG.url}/blog` },
      {
        "@type": "ListItem",
        position: 3,
        name: category.name,
        item: `${SITE_CONFIG.url}/blog/category/${category.slug}`,
      },
    ],
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${category.name} - Sheesh Exports`,
    description: category.description,
    url: `${SITE_CONFIG.url}/blog/category/${category.slug}`,
  };

  return (
    <main className="flex flex-col min-h-screen">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={collectionSchema} />

      {/* Category Header */}
      <section className="py-16 bg-muted/30 border-b border-border">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl text-center">
          <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-primary mb-6">
            <Link href="/blog" className="hover:underline">
              Intelligence
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span>Category</span>
          </div>
          <h1 className="font-heading text-5xl lg:text-6xl font-bold text-foreground mb-6">
            {category.name}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {category.description}
          </p>
        </div>
      </section>

      {/* Article Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          {categoryPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
              {categoryPosts.map((post, idx) => (
                <article key={idx} className="group flex flex-col">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="relative w-full aspect-[4/3] mb-6 overflow-hidden bg-muted rounded-xl"
                  >
                    <Image
                      loading="lazy"
                      src={post.heroImage}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </Link>
                  <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-primary mb-3">
                    <span className="text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
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
          ) : (
            <div className="text-center py-20 bg-card border border-border rounded-2xl">
              <h3 className="text-2xl font-heading font-bold mb-2">No Reports Published Yet</h3>
              <p className="text-muted-foreground">
                We are actively researching and compiling data for this category. Check back soon.
              </p>
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </main>
  );
}
