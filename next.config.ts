import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  poweredByHeader: false,
  experimental: {
    // TypeScript 7 ships a native compiler without the legacy API Next reads
    // directly, so type-checking runs through the tsc CLI instead.
    useTypeScriptCli: true,
  },
};

export default nextConfig;
