import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "elzaeem-international.skywaveads.com",
        pathname: "/images/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 60,
  },

  experimental: {
    serverActions: {
      allowedOrigins: ["localhost:3000", "localhost:3001", "elzaeem-international.skywaveads.com"],
    },
    optimizePackageImports: ["framer-motion", "react-icons"],
  },

  productionBrowserSourceMaps: false,
  output: "standalone",
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;
