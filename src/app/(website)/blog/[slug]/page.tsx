import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPostBySlug, getBlogPosts } from "@/lib/cms/queries";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildArticleSchema } from "@/lib/seo/article";
import { buildBreadcrumbSchema } from "@/lib/seo/breadcrumb";
import { JsonLd } from "@/components/seo/JsonLd";
import { formatDate } from "@/lib/utils/format";
import Link from "next/link";

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
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />

      <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center space-x-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-slate-800">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-slate-800">Insights</Link>
          <span>/</span>
          <span className="font-semibold text-slate-900 truncate max-w-xs">{post.title}</span>
        </nav>

        <header className="border-b border-slate-200 pb-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
            {post.category.name}
          </span>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <div className="mt-4 flex items-center space-x-4 text-xs text-slate-500">
            <span>By {post.author.name} ({post.author.role})</span>
            <span>•</span>
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
          </div>
        </header>

        <div className="prose prose-slate mt-8 max-w-none leading-relaxed text-slate-700">
          <div className="whitespace-pre-line">{post.content}</div>
        </div>

        {/* Conversion CTA Footer */}
        <div className="mt-12 rounded-xl bg-slate-900 p-8 text-white">
          <h3 className="text-xl font-bold">Ready to Source Spices Directly from India?</h3>
          <p className="mt-2 text-sm text-slate-300">
            Connect with our trade export desk for firm price quotations, sample consignments, and container availability.
          </p>
          <div className="mt-6">
            <Link
              href="/request-quote"
              className="rounded-md bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-500"
            >
              Request Commercial RFQ
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
