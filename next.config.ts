import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/sazak-teknesi-ismet-kaptan-tekne-turlari",
        destination: "/tekne-turlari",
        permanent: true,
      },
      {
        source: "/sazak-teknesi-ismet-kaptan-tekne-turlari/",
        destination: "/tekne-turlari",
        permanent: true,
      },
      {
        source: "/adrasanda-neler-yapilir",
        destination: "/blog/adrasanda-neler-yapilir",
        permanent: true,
      },
      {
        source: "/adrasan-tarihcesi",
        destination: "/blog/adrasan-tarihcesi",
        permanent: true,
      },
      {
        source: "/adrasanda-nerede-kalinir",
        destination: "/blog/adrasanda-nerede-kalinir",
        permanent: true,
      },
      {
        source: "/adrasana-nasil-gidilir",
        destination: "/blog/adrasana-nasil-gidilir",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;