type ValidationRule = { required: () => unknown };

export const certificationSchema = {
  name: "certification",
  title: "Compliance Certification",
  type: "document",
  fields: [
    { name: "name", title: "Certification Title", type: "string", validation: (Rule: ValidationRule) => Rule.required() },
    { name: "slug", title: "Slug", type: "slug", options: { source: "name", maxLength: 96 } },
    { name: "issuingBody", title: "Issuing Authority / Agency", type: "string" },
    { name: "badgeImage", title: "Certification Logo/Badge", type: "image" },
    { name: "certificateNumber", title: "Registration / License Number", type: "string" },
    { name: "validity", title: "Validity Period", type: "string" },
    { name: "description", title: "Summary Description", type: "text" },
    { name: "complianceDetails", title: "Full Compliance Standards", type: "text" },
    { name: "featured", title: "Featured on Homepage", type: "boolean", initialValue: true },
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
