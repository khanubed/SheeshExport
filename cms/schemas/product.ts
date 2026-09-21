type ValidationRule = { required: () => unknown };

export const productSchema = {
  name: "product",
  title: "Export Product",
  type: "document",
  fields: [
    { name: "name", title: "Product Name", type: "string", validation: (Rule: ValidationRule) => Rule.required() },
    { name: "slug", title: "Slug", type: "slug", options: { source: "name", maxLength: 96 } },
    { name: "botanicalName", title: "Botanical / Scientific Name", type: "string" },
    { name: "hsCode", title: "HS Code", type: "string", validation: (Rule: ValidationRule) => Rule.required() },
    { name: "category", title: "Category", type: "reference", to: [{ type: "category" }] },
    { name: "shortDescription", title: "Short Summary", type: "text", rows: 3 },
    { name: "description", title: "Comprehensive Description", type: "text" },
    { name: "origin", title: "Origin (Region & Country)", type: "string" },
    { name: "harvestSeason", title: "Harvest / Crop Season", type: "string" },
    {
      name: "images",
      title: "Product Images",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [{ name: "alt", title: "Alt Text", type: "string" }],
        },
      ],
    },
    {
      name: "specifications",
      title: "Technical Specifications",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", title: "Parameter (e.g. Moisture)", type: "string" },
            { name: "value", title: "Value (e.g. Max 10%)", type: "string" },
          ],
        },
      ],
    },
    {
      name: "grades",
      title: "Commercial Grades",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "gradeName", title: "Grade Name", type: "string" },
            { name: "description", title: "Details", type: "text" },
          ],
        },
      ],
    },
    {
      name: "packaging",
      title: "Packaging Options",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "type", title: "Packaging Type (e.g., Jute, PP)", type: "string" },
            { name: "sizes", title: "Sizes (e.g., 25kg, 50kg)", type: "array", of: [{ type: "string" }] },
          ],
        },
      ],
    },
    { name: "minimumOrderQuantity", title: "MOQ", type: "string" },
    { name: "shelfLife", title: "Shelf Life", type: "string" },
    { name: "applications", title: "Industrial Applications", type: "array", of: [{ type: "string" }] },
    { name: "availableMarkets", title: "Export Markets", type: "array", of: [{ type: "reference", to: [{ type: "market" }] }] },
    { name: "certifications", title: "Applicable Certifications", type: "array", of: [{ type: "reference", to: [{ type: "certification" }] }] },
    { name: "featured", title: "Featured Product", type: "boolean", initialValue: false },
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
