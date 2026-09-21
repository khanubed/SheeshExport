type ValidationRule = { required: () => unknown };

export const marketSchema = {
  name: "market",
  title: "Export Market / Country",
  type: "document",
  fields: [
    { name: "country", title: "Country Name", type: "string", validation: (Rule: ValidationRule) => Rule.required() },
    { name: "slug", title: "Slug", type: "slug", options: { source: "country", maxLength: 96 } },
    {
      name: "region",
      title: "Region",
      type: "string",
      options: {
        list: ["Middle East", "Europe", "North America", "Asia Pacific", "Africa"],
      },
    },
    { name: "flagIcon", title: "Flag Icon Image", type: "image" },
    { name: "heroImage", title: "Destination Hero Image", type: "image" },
    { name: "overview", title: "Market Trade Overview", type: "text" },
    {
      name: "keyImportRequirements",
      title: "Import Requirements & Regulations",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "majorPortsServed",
      title: "Major Ports (e.g. Jebel Ali, Rotterdam)",
      type: "array",
      of: [{ type: "string" }],
    },
    { name: "transitTimeEstimate", title: "Average Transit Time", type: "string" },
    { name: "featured", title: "Featured Market", type: "boolean", initialValue: false },
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
