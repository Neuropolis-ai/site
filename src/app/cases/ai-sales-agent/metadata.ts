import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "AI-агент в отделе продаж — Neuropolis",
  description:
    "Как AI-агент сократил время отклика в отделе продаж с 2 часов до 15 секунд и повысил конверсию на 27%",
  keywords:
    "AI-агент продаж, автоматизация отдела продаж, квалификация лидов, повышение конверсии, ИИ для бизнеса, автоматизация продаж",
  
  // Open Graph метатеги
  openGraph: {
    title: "AI-агент в отделе продаж: сокращение времени отклика с 2 часов до 15 секунд",
    description: "Узнайте как мы автоматизировали квалификацию и первичную обработку лидов в B2B SaaS-компании с помощью AI-агента и повысили конверсию на 27%.",
    type: "article",
    url: "https://neuropolis.ai/cases/ai-sales-agent",
    images: [
      {
        url: "https://neuropolis.ai/assets/images/cases/sale.jpg",
        width: 1200,
        height: 630,
        alt: "AI-агент в отделе продаж"
      }
    ],
  },
  
  // Twitter Card метатеги
  twitter: {
    card: "summary_large_image",
    title: "AI-агент в отделе продаж: время отклика с 2 часов до 15 секунд",
    description: "Как мы автоматизировали квалификацию и первичную обработку лидов с помощью AI-агента",
    images: ["https://neuropolis.ai/assets/images/cases/sale.jpg"],
    creator: "@neuropolis_ai"
  },
  
  // Канонический URL
  alternates: {
    canonical: "https://neuropolis.ai/cases/ai-sales-agent",
  },
  
  // Schema.org разметка для кейса
  other: {
    "structured-data": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "AI-агент в отделе продаж",
      "author": {
        "@type": "Organization",
        "name": "Neuropolis.ai"
      },
      "datePublished": "2023-11-10",
      "dateModified": "2023-12-25",
      "image": "https://neuropolis.ai/assets/images/cases/sale.jpg",
      "publisher": {
        "@type": "Organization",
        "name": "Neuropolis.ai",
        "logo": {
          "@type": "ImageObject",
          "url": "https://neuropolis.ai/assets/images/logo.png"
        }
      },
      "description": "Как внедрение AI-агента сократило время отклика в отделе продаж с 2 часов до 15 секунд и повысило конверсию на 27% для B2B SaaS-компании",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://neuropolis.ai/cases/ai-sales-agent"
      },
      "keywords": "AI-агент, отдел продаж, автоматизация, квалификация лидов, повышение конверсии, SaaS"
    })
  }
};
