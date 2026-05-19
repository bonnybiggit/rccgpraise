import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* @ts-ignore */
  turbopack: {
    root: "C:/Users/HP/OneDrive/Desktop/OLUWATOBILOBA_FILES/RCCG Praise Pavillion Parish Files",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
