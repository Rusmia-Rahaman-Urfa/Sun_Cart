import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { 
        protocol: "https", 
        hostname: "i.postimg.cc",
        pathname: "/**", 
      },
      { 
        protocol: "https", 
        hostname: "images.unsplash.com",
        pathname: "/**", // Allows all deep links from Unsplash
      },
      { 
        protocol: "https", 
        hostname: "lh3.googleusercontent.com",
        pathname: "/**", 
      },
      { 
        protocol: "https", 
        hostname: "avatars.githubusercontent.com",
        pathname: "/**", 
      },
    ],
  },
  experimental: {
    serverComponentsExternalPackages: ["mongodb"],
  },
};

export default nextConfig;