import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    qualities: [25, 50, 60, 75],
  },
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
