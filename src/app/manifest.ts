import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_CONFIG.name,
    short_name: "Sheesh Exports",
    description: SITE_CONFIG.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#047857",
    icons: [
      {
        src: "/favicon.webp",
        sizes: "100x100",
        type: "image/webp",
      },
      {
        src: "/icon-192.webp",
        sizes: "192x192",
        type: "image/webp",
      },
      {
        src: "/icon-512.webp",
        sizes: "512x512",
        type: "image/webp",
      },
    ],
  };
}
