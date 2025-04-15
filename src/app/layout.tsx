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
  title: "ИИ-агенты и автоматизация бизнес-процессов | Neuropolis.ai",
  description:
    "Внедряем ИИ-агентов и автоматизируем до 80% рутинных задач. Консалтинг, разработка и поддержка ИИ-решений для бизнеса. Neuropolis.ai — технологии, которые работают на результат.",
  keywords:
    "искусственный интеллект, цифровая трансформация, автоматизация, нейронные сети, машинное обучение, ИИ, бизнес решения, IT консалтинг",
  openGraph: {
    title: "ИИ-агенты и автоматизация бизнес-процессов | Neuropolis.ai",
    description:
      "Внедряем ИИ-агентов и автоматизируем до 80% задач. Консалтинг, разработка и поддержка ИИ-решений.",
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
    title: "ИИ-агенты и автоматизация бизнес-процессов | Neuropolis.ai",
    description:
      "Внедряем ИИ-агентов и автоматизируем до 80% задач. Консалтинг, разработка и поддержка ИИ-решений.",
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
