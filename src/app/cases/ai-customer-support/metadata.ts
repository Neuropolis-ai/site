import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Улучшение клиентского сервиса с ИИ-агентами — Neuropolis",
  description:
    "Как внедрение ИИ-ассистента сократило время ответа с 24 часов до 3 минут и повысило удовлетворенность клиентов на 68% для крупного e-commerce маркетплейса",
  keywords:
    "ИИ-ассистент поддержки, автоматизация клиентского сервиса, чат-бот поддержки, AI в клиентском сервисе, повышение NPS, автоматизация обращений, оптимизация службы поддержки",
  
  // Open Graph метатеги
  openGraph: {
    title: "ИИ-ассистент для поддержки клиентов: сокращение времени ответа с 24 часов до 3 минут",
    description: "Узнайте как мы автоматизировали 82% обращений в службу поддержки e-commerce площадки с помощью ИИ-ассистента и сократили время ответа с 24 часов до 3 минут.",
    type: "article",
    url: "https://neuropolis.ai/cases/ai-customer-support",
    images: [
      {
        url: "https://neuropolis.ai/assets/images/ai-customer-support-new.jpg",
        width: 1200,
        height: 630,
        alt: "ИИ-ассистент для поддержки клиентов"
      }
    ],
  },
  
  // Twitter Card метатеги
  twitter: {
    card: "summary_large_image",
    title: "ИИ-ассистент для поддержки клиентов: время ответа с 24 часов до 3 минут",
    description: "Как мы автоматизировали 82% обращений в службу поддержки e-commerce площадки с помощью ИИ-ассистента",
    images: ["https://neuropolis.ai/assets/images/ai-customer-support-new.jpg"],
    creator: "@neuropolis_ai"
  },
  
  // Канонический URL
  alternates: {
    canonical: "https://neuropolis.ai/cases/ai-customer-support",
  },
  
  // Schema.org разметка для кейса
  other: {
    "structured-data": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "ИИ-ассистент для поддержки клиентов",
      "author": {
        "@type": "Organization",
        "name": "Neuropolis.ai"
      },
      "datePublished": "2023-10-15",
      "dateModified": "2023-12-20",
      "image": "https://neuropolis.ai/assets/images/ai-customer-support-new.jpg",
      "publisher": {
        "@type": "Organization",
        "name": "Neuropolis.ai",
        "logo": {
          "@type": "ImageObject",
          "url": "https://neuropolis.ai/assets/images/logo.png"
        }
      },
      "description": "Как внедрение ИИ-ассистента сократило время ответа с 24 часов до 3 минут и повысило удовлетворенность клиентов на 68% для крупного e-commerce маркетплейса",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://neuropolis.ai/cases/ai-customer-support"
      },
      "keywords": "ИИ-ассистент, поддержка клиентов, автоматизация обращений, чат-бот для e-commerce, повышение NPS"
    })
  }
};
