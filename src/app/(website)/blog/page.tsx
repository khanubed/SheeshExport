import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { getBlogPosts } from "@/lib/cms/queries";
import { formatDate } from "@/lib/utils/format";
import Link from "next/link";

export const metadata: Metadata = buildMetadata({
  title: "Export Insights, Market Trends & Agricultural Procurement Guides",
  description:
    "Expert articles and guides on importing spices from India, crop harvest forecasts, market pricing trends, and food safety regulations.",
  pathname: "/blog",
});

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div>
        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
          Industry Intelligence
        </span>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Market Insights & Trade Guides
        </h1>
        <p className="mt-4 max-w-2xl text-base text-slate-600">
          In-depth technical guides for international food buyers, commodity brokers, and procurement heads.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article key={post.id} className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <span className="text-xs font-semibold text-emerald-700">{post.category.name}</span>
            <h2 className="mt-2 text-xl font-bold text-slate-900 hover:text-emerald-700 transition-colors">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="mt-3 text-sm text-slate-600 line-clamp-3 flex-1">{post.excerpt}</p>
            <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>{formatDate(post.publishedAt)}</span>
              <span>{post.readingTimeMinutes} min read</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
