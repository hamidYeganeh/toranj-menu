import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { hostname: "**", pathname: "**", protocol: "https" },
      { hostname: "**", pathname: "**", protocol: "http" },
    ],
  },
};

export default withNextIntl(nextConfig);
