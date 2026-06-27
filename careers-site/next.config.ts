import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Longhorn-car-wash-careers",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
