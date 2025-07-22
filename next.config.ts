import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
      ignoreBuildErrors: true
    },
  /* config options here */
  typescript: {
    ignoreBuildErrors: true
  },eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
        { hostname: 'img.clerk.com'}
    ]
}
};

export default nextConfig;
