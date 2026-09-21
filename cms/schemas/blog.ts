type ValidationRule = { required: () => unknown };

export const blogSchema = {
  name: "blogPost",
  title: "Insights & Articles",
  type: "document",
  fields: [
    { name: "title", title: "Article Headline", type: "string", validation: (Rule: ValidationRule) => Rule.required() },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title", maxLength: 96 } },
    { name: "publishedAt", title: "Publication Date", type: "datetime" },
    { name: "author", title: "Author", type: "reference", to: [{ type: "author" }] },
    { name: "category", title: "Category", type: "reference", to: [{ type: "category" }] },
    { name: "excerpt", title: "Summary / Excerpt", type: "text", rows: 3 },
    {
      name: "featuredImage",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt Text", type: "string" }],
    },
    { name: "content", title: "Body Content (Markdown / Portable Text)", type: "text" },
    {
      name: "relatedProducts",
      title: "Related Products",
      type: "array",
      of: [{ type: "reference", to: [{ type: "product" }] }],
    },
    {
      name: "seo",
      title: "SEO Metadata",
      type: "object",
      fields: [
        { name: "title", title: "Meta Title", type: "string" },
        { name: "description", title: "Meta Description", type: "text" },
      ],
    },
  ],
};
