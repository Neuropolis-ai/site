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

export const metadata: Metadata = {
  title: "ИИ-решения для бизнеса: автоматизация процессов и снижение издержек | Neuropolis.ai",
  description:
    "Автоматизируйте до 80% рутинных процессов с помощью ИИ-решений. Снижение издержек и рост эффективности бизнеса. Персональная консультация и внедрение.",
  keywords:
    "искусственный интеллект, цифровая трансформация, автоматизация, нейронные сети, машинное обучение, ИИ, бизнес решения, IT консалтинг, ИИ-решения для бизнеса, автоматизация бизнес-процессов, искусственный интеллект в бизнесе, ИИ-агенты, разработка ИИ, внедрение ИИ, автоматизация с помощью ИИ, бизнес-автоматизация, AI для бизнеса, консалтинг по ИИ, снижение издержек с помощью ИИ, повышение эффективности процессов, автоматизация рутинных задач, ускорение бизнес-процессов, ИИ вместо ручного труда, освободить команду от рутины, фокус на стратегические задачи, ИИ для отдела продаж, ИИ-агенты для клиентской поддержки, автоматизация HR-процессов, чат-боты для бизнеса, интеграция ИИ с CRM, персонализированные AI-решения, интеллектуальные бизнес-ассистенты, LLM, Large Language Models, GPT для бизнеса, автоматизация через n8n, Python-боты для автоматизации, интеграции с API и CRM, нейросети для автоматизации, машинное обучение в бизнесе",
  openGraph: {
    title: "ИИ-решения для бизнеса: автоматизация процессов и снижение издержек | Neuropolis.ai",
    description:
      "Автоматизируйте до 80% рутинных процессов с помощью ИИ-решений. Снижение издержек и рост эффективности бизнеса.",
    url: "https://neuropolis.ai",
    siteName: "Neuropolis.ai",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Neuropolis.ai - AI решения для бизнеса",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ИИ-решения для бизнеса: автоматизация процессов и снижение издержек | Neuropolis.ai",
    description:
      "Автоматизируйте до 80% рутинных процессов с помощью ИИ-решений. Снижение издержек и рост эффективности бизнеса.",
    images: ["/og-image.jpg"],
  },
};

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