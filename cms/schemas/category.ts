type ValidationRule = { required: () => unknown };

export const categorySchema = {
  name: "category",
  title: "Product Category",
  type: "document",
  fields: [
    { name: "name", title: "Category Name", type: "string", validation: (Rule: ValidationRule) => Rule.required() },
    { name: "slug", title: "Slug", type: "slug", options: { source: "name", maxLength: 96 } },
    { name: "description", title: "Description", type: "text" },
    { name: "image", title: "Category Image", type: "image", options: { hotspot: true } },
    { name: "featured", title: "Featured on Homepage", type: "boolean", initialValue: false },
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
