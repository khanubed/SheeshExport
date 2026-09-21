/**
 * Headless CMS Client wrapper.
 * Currently returns mock / static seed data while allowing seamless transition
 * to Sanity, Payload CMS, or Supabase without modifying application code.
 */
export const cmsClient = {
  projectId: process.env.CMS_PROJECT_ID || "sheesh-cms",
  dataset: process.env.CMS_DATASET || "production",
  apiVersion: process.env.CMS_API_VERSION || "2024-01-01",
  useCdn: process.env.NODE_ENV === "production",
};
