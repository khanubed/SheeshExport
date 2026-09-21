type ValidationRule = { required: () => unknown };

export const authorSchema = {
  name: "author",
  title: "Author / Contributor",
  type: "document",
  fields: [
    { name: "name", title: "Full Name", type: "string", validation: (Rule: ValidationRule) => Rule.required() },
    { name: "role", title: "Role / Designation", type: "string" },
    { name: "avatar", title: "Profile Image", type: "image", options: { hotspot: true } },
    { name: "bio", title: "Short Biography", type: "text" },
  ],
};
