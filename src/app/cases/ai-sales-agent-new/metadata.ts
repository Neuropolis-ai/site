import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "ИИ-агент в отделе продаж — Neuropolis",
  description:
    "Как ИИ-агент сократил время отклика с 2 часов до 15 секунд и повысил конверсию на 27%",
  keywords:
    "ИИ-агент продаж, автоматизация продаж, квалификация лидов, конверсия продаж, отдел продаж, автоматизация",
  
  // Open Graph метатеги
  openGraph: {
    title: "ИИ-агент в отделе продаж: рост конверсии на 27%",
    description: "Узнайте как ИИ-агент для отдела продаж сокращает время отклика с 2 часов до 15 секунд и повышает конверсию на 27%.",
    type: "article",
    url: "https://neuropolis.ai/cases/ai-sales-agent-new",
    images: [
      {
        url: "https://neuropolis.ai/assets/images/cases/sale.jpg",
        width: 1200,
        height: 630,
        alt: "ИИ-агент в отделе продаж"
      }
    ],
  },
  
  // Twitter Card метатеги
  twitter: {
    card: "summary_large_image",
    title: "ИИ-агент в отделе продаж: рост конверсии на 27%",
    description: "Как ИИ-агент помогает отделу продаж сократить время отклика и повысить конверсию",
    images: ["https://neuropolis.ai/assets/images/cases/sale.jpg"],
    creator: "@neuropolis_ai"
  },
  
  // Канонический URL
  alternates: {
    canonical: "https://neuropolis.ai/cases/ai-sales-agent-new",
  },
  
  // Schema.org разметка для кейса
  other: {
    "structured-data": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "ИИ-агент в отделе продаж",
      "author": {
        "@type": "Organization",
        "name": "Neuropolis.ai"
      },
      "datePublished": "2023-12-05",
      "dateModified": "2024-01-15",
      "image": "https://neuropolis.ai/assets/images/cases/sale.jpg",
      "publisher": {
        "@type": "Organization",
        "name": "Neuropolis.ai",
        "logo": {
          "@type": "ImageObject",
          "url": "https://neuropolis.ai/assets/images/logo.png"
        }
      },
      "description": "Как мы сократили время отклика с 2 часов до 15 секунд и повысили конверсию на 27% с помощью ИИ-агента в отделе продаж",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://neuropolis.ai/cases/ai-sales-agent-new"
      },
      "keywords": "ИИ-агент, продажи, автоматизация, квалификация лидов, конверсия, B2B SaaS"
    })
  }
}; 