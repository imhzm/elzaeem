import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
    unoptimized: true,
  },

  // Fix domain externals
  experimental: {
    serverActions: {
      allowedOrigins: ["localhost:3000", "elzaeem-international.skywaveads.com"],
    },
  },

  // Enable production source maps for debugging
  productionBrowserSourceMaps: false,

  // Optimize output
  output: "standalone",

  // Disable x-powered-by header
  poweredByHeader: false,

  // Compress output
  compress: true,

  // Generate ESM output
  outputMode: "output",
};

export default nextConfig;
