import { Metadata } from "next";
import ChatBotsPage from "@/components/chat-bots/ChatBotsPage";
import Script from 'next/script';

export const metadata: Metadata = {
  title: "Разработка Интеллектуальных Чат-ботов для Бизнеса | Нейрополис",
  description:
    "Автоматизируйте до 70% клиентских запросов с помощью ИИ чат-ботов. Снижение издержек на поддержку, повышение конверсии и доступность 24/7. Интеграция с CRM и мессенджерами.",
  keywords:
    "разработка чат-ботов, интеллектуальные чат-боты, ИИ чат-боты, NLP чат-боты, GPT-4, автоматизация клиентского сервиса, ИИ для коммуникаций",
  openGraph: {
    title: "Разработка ИИ Чат-ботов для Бизнеса | Автоматизация поддержки 24/7",
    description: "Автоматизируйте до 70% клиентских запросов с помощью ИИ чат-ботов. Снижение издержек на поддержку, повышение конверсии и доступность 24/7.",
    url: "https://neuropolis.ai/services/chat-bots",
    siteName: "Нейрополис",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "https://neuropolis.ai/images/og/chatbots-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Интеллектуальные чат-боты для бизнеса от Нейрополис",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Разработка ИИ Чат-ботов для автоматизации бизнес-процессов",
    description: "Автоматизируйте до 70% клиентских запросов с помощью ИИ чат-ботов. Поддержка клиентов 24/7.",
    images: ["https://neuropolis.ai/images/og/chatbots-cover.jpg"],
  },
  alternates: {
    canonical: "https://neuropolis.ai/services/chat-bots",
  },
};

export default function ChatBots() {
  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Разработка интеллектуальных чат-ботов",
            "description": "Создаем и внедряем умных чат-ботов на основе искусственного интеллекта для автоматизации коммуникаций, улучшения клиентского сервиса и оптимизации бизнес-процессов.",
            "provider": {
              "@type": "Organization",
              "name": "Нейрополис",
              "url": "https://neuropolis.ai",
              "logo": "https://neuropolis.ai/favicon.svg"
            },
            "areaServed": "Российская Федерация",
            "serviceType": "Разработка ИИ-решений",
            "offers": {
              "@type": "Offer",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "priceCurrency": "RUB",
                "description": "Стоимость зависит от сложности проекта"
              },
              "availability": "https://schema.org/InStock"
            }
          })
        }}
      />
      <ChatBotsPage />
    </>
  );
} 