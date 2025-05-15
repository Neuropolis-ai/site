/** @type {import('next').NextConfig} */
const nextConfig = {
  // Временно отключаем standalone режим для отладки проблем деплоя
  // output: 'standalone',
  images: {
    formats: ['image/avif', 'image/webp'],
    // Автоматически оптимизировать изображения
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Разрешить внешние домены для изображений
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '**.supabase.co',
      },
    ],
  },
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    scrollRestoration: true,
    // Добавляем поддержку внешних пакетов для серверных компонентов
    serverComponentsExternalPackages: ['@supabase/supabase-js', 'dotenv'],
    optimizeCss: true,
    optimizeServerReact: true,
  },
  compress: true,
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
  // Отключаем логи во время сборки на Vercel
  onBuildStart: () => {
    if (process.env.VERCEL) {
      // Переопределяем console.log для окружения Vercel
      const originalConsoleLog = console.log;
      const originalConsoleInfo = console.info;
      const originalConsoleDebug = console.debug;
      
      // Сохраняем только критически важные логи (ошибки и предупреждения)
      console.log = (...args) => {
        if (args[0] && typeof args[0] === 'string' && (
          args[0].includes('error') || 
          args[0].includes('Error') || 
          args[0].includes('ERRO') ||
          args[0].includes('warn') || 
          args[0].includes('Warn') || 
          args[0].includes('WARN')
        )) {
          originalConsoleLog(...args);
        }
      };
      console.info = (...args) => {
        // Отключаем info-логи полностью
      };
      console.debug = (...args) => {
        // Отключаем debug-логи полностью
      };
    }
  },
};

module.exports = nextConfig;
