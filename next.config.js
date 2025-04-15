/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "framerusercontent.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "techcrunch.com",
      },
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    unoptimized: false,
  },
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    scrollRestoration: true,
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // http://neuropolis.ai -> https://neuropolis.ai
      {
        source: "/:path*",
        has: [
          { type: "host", value: "neuropolis.ai" },
          { type: "protocol", value: "http" },
        ],
        destination: "https://neuropolis.ai/:path*",
        permanent: true,
      },
      // http://www.neuropolis.ai -> https://neuropolis.ai
      {
        source: "/:path*",
        has: [
          { type: "host", value: "www.neuropolis.ai" },
          { type: "protocol", value: "http" },
        ],
        destination: "https://neuropolis.ai/:path*",
        permanent: true,
      },
      // https://www.neuropolis.ai -> https://neuropolis.ai
      {
        source: "/:path*",
        has: [
          { type: "host", value: "www.neuropolis.ai" },
          { type: "protocol", value: "https" },
        ],
        destination: "https://neuropolis.ai/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
