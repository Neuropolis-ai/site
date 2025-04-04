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
    ],
  },
  // Добавляем конфигурацию для TinyMCE
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Не копируем языковые файлы TinyMCE
      config.module.rules.push({
        test: /tinymce[\\/]skins[\\/]/,
        use: {
          loader: "file-loader",
          options: {
            name: "[path][name].[ext]",
            outputPath: "static/chunks/",
            publicPath: "/_next/static/chunks/",
            esModule: false,
          },
        },
      });
    }
    return config;
  },
};

module.exports = nextConfig;
