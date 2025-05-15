"use client";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { ThemeProvider } from "@/context/ThemeContext";
import YandexMetrika from "@/components/YandexMetrika";
import { ThemeScript } from "@/components/ThemeScript";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../style/normalize.css";
import "./globals.css";
import "./styles.css";
import "../style/animations-fix.css";
import "../style/hero.css";
import "../style/services.css";
import "../style/card-line.css";
import "../style/dot-grid.css";
import "../style/icon-animations.css";
import "../style/text-animations.css";
import "../style/mobile-optimizations.css";
import BadgeRenderer from "@/components/ui/BadgeRenderer";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });

// Метаданные определены в отдельном файле src/app/metadata.ts
// export const metadata: Metadata = { ... } - удалено

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Используем темную тему по умолчанию для рендеринга на сервере
  const initialTheme = "dark";

  return (
    <html lang="ru" data-theme={initialTheme}>
      <head>
        <ThemeScript />
        {/* Preload fonts */}
        <link 
          rel="preload" 
          href="/fonts/inter-var.woff2" 
          as="font" 
          type="font/woff2" 
          crossOrigin="anonymous" 
        />
        <link rel="canonical" href="https://neuropolis.ai/" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body
        className={`${inter.className} antialiased bg-[#ffffff] dark:bg-[#050505] text-foreground min-h-screen transition-colors duration-300`}
      >
        {/* Google Analytics - отложенная загрузка */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-024R9ZTD1K"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-024R9ZTD1K');
          `}
        </Script>
        
        <ThemeProvider>
          <BadgeRenderer />
          <Header />
          {children}
          <Footer />
          <YandexMetrika />
        </ThemeProvider>
      </body>
    </html>
  );
}