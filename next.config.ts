import type { NextConfig } from "next";

/** 静态资源与路由统一挂载在 /portfolio 子路径下 */
const basePath = "/portfolio";

const nextConfig: NextConfig = {
  basePath,
  assetPrefix: basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [new URL("https://cdn.simpleicons.org/**")],
    unoptimized: true,
  },
};

export default nextConfig;