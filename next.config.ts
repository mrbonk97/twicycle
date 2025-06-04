import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ecz08g0q7g.ufs.sh",
      },
    ],
  },
};

export default nextConfig;
