import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false, // <--- Add this line to stop the flushSync error
};

export default nextConfig;