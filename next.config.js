/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
    domains: ['cdn.sanity.io'],
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
      // www.neuropolis.ai -> neuropolis.ai (любой протокол)
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.neuropolis.ai" }],
        destination: "https://neuropolis.ai/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
