import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Кейсы использования ИИ в бизнесе — Neuropolis",
  description:
    "Изучите реальные кейсы успешного внедрения ИИ-агентов в различных сферах бизнеса: от клиентской поддержки до продаж и контент-маркетинга",
  keywords:
    "ИИ-агенты, кейсы ИИ, внедрение искусственного интеллекта, автоматизация бизнеса, успешные проекты ИИ, ИИ в продажах, ИИ в клиентском сервисе, ИИ в контент-маркетинге",
  
  // Open Graph метатеги
  openGraph: {
    title: "Кейсы использования ИИ-агентов в бизнесе — Neuropolis",
    description: "Реальные примеры успешного внедрения ИИ-агентов в различных сферах бизнеса с измеримыми результатами",
    type: "website",
    url: "https://neuropolis.ai/cases",
    images: [
      {
        url: "https://neuropolis.ai/assets/images/cases-overview.jpg",
        width: 1200,
        height: 630,
        alt: "Кейсы использования ИИ в бизнесе"
      }
    ],
  },
  
  // Twitter Card метатеги
  twitter: {
    card: "summary_large_image",
    title: "Кейсы использования ИИ-агентов в бизнесе",
    description: "Реальные примеры успешного внедрения ИИ-агентов с измеримыми результатами",
    images: ["https://neuropolis.ai/assets/images/cases-overview.jpg"],
    creator: "@neuropolis_ai"
  },
  
  // Канонический URL
  alternates: {
    canonical: "https://neuropolis.ai/cases",
  },
  
  // Schema.org разметка для страницы кейсов
  other: {
    "structured-data": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "headline": "Кейсы использования ИИ в бизнесе",
      "description": "Реальные примеры успешного внедрения ИИ-агентов в различных сферах бизнеса с измеримыми результатами",
      "publisher": {
        "@type": "Organization",
        "name": "Neuropolis.ai",
        "logo": {
          "@type": "ImageObject",
          "url": "https://neuropolis.ai/assets/images/logo.png"
        }
      },
      "url": "https://neuropolis.ai/cases",
      "mainEntity": {
        "@type": "ItemList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "url": "https://neuropolis.ai/cases/ai-customer-support"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "url": "https://neuropolis.ai/cases/ai-sales-agent"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "url": "https://neuropolis.ai/cases/ai-content-assistant"
          }
        ]
      }
    })
  }
}; 