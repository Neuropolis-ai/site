import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { ThemeProvider } from "@/context/ThemeContext";
import YandexMetrika from "@/components/YandexMetrika";
import { ThemeScript } from "@/components/ThemeScript";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../style/normalize.css";
import "./globals.css";
import "../style/animations-fix.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Автоматизация и разработка ИИ-решений для бизнеса | Neuropolis.ai",
  description:
    "Повышайте эффективность, автоматизируйте процессы и снижайте издержки с помощью индивидуальных ИИ-решений. Освободите команду от рутины и направьте фокус на ключевые стратегические цели.",
  keywords:
    "искусственный интеллект, цифровая трансформация, автоматизация, нейронные сети, машинное обучение, ИИ, бизнес решения, IT консалтинг, ИИ-решения для бизнеса, автоматизация бизнес-процессов, искусственный интеллект в бизнесе, ИИ-агенты, разработка ИИ, внедрение ИИ, автоматизация с помощью ИИ, бизнес-автоматизация, AI для бизнеса, консалтинг по ИИ, снижение издержек с помощью ИИ, повышение эффективности процессов, автоматизация рутинных задач, ускорение бизнес-процессов, ИИ вместо ручного труда, освободить команду от рутины, фокус на стратегические задачи, ИИ для отдела продаж, ИИ-агенты для клиентской поддержки, автоматизация HR-процессов, чат-боты для бизнеса, интеграция ИИ с CRM, персонализированные AI-решения, интеллектуальные бизнес-ассистенты, LLM, Large Language Models, GPT для бизнеса, автоматизация через n8n, Python-боты для автоматизации, интеграции с API и CRM, нейросети для автоматизации, машинное обучение в бизнесе",
  openGraph: {
    title: "Автоматизация и разработка ИИ-решений для бизнеса | Neuropolis.ai",
    description:
      "Повышайте эффективность, автоматизируйте процессы и снижайте издержки с помощью индивидуальных ИИ-решений.",
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
    title: "Автоматизация и разработка ИИ-решений для бизнеса | Neuropolis.ai",
    description:
      "Повышайте эффективность, автоматизируйте процессы и снижайте издержки с помощью индивидуальных ИИ-решений.",
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
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-024R9ZTD1K"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-024R9ZTD1K');
            `,
          }}
        />
        <link rel="canonical" href="https://neuropolis.ai/" />
      </head>
      <body
        className={`${inter.className} antialiased bg-[#ffffff] dark:bg-[#050505] text-foreground min-h-screen transition-colors duration-300`}
      >
        <ThemeProvider>
          {children}
          <YandexMetrika />
        </ThemeProvider>
      </body>
    </html>
  );
}
