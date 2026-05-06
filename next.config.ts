import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "elzaeem-international.skywaveads.com",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  experimental: {
    serverActions: {
      allowedOrigins: ["localhost:3000", "localhost:3001", "elzaeem-international.skywaveads.com"],
    },
    optimizePackageImports: ["framer-motion", "react-icons"],
  },

  productionBrowserSourceMaps: false,
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;
