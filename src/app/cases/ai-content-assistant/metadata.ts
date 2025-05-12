import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ИИ-ассистент для создания контента — Neuropolis",
  description:
    "Как ИИ-ассистент увеличил регулярность публикаций блогера на 230% и повысил вовлеченность аудитории на 45%",
  keywords:
    "ИИ-ассистент контента, автоматизация создания контента, генерация контента, блог, повышение вовлеченности, регулярность публикаций",
  
  // Open Graph метатеги
  openGraph: {
    title: "ИИ-ассистент для создания контента: рост публикаций на 230%",
    description: "Узнайте как ИИ-агент для блогера анализирует стиль, исследует актуальные темы и генерирует тексты, увеличивая регулярность публикаций на 230%.",
    type: "article",
    url: "https://neuropolis.ai/cases/ai-content-assistant",
    images: [
      {
        url: "https://neuropolis.ai/assets/images/cases/ssm.jpg",
        width: 1200,
        height: 630,
        alt: "ИИ-ассистент для создания контента"
      }
    ],
  },
  
  // Twitter Card метатеги
  twitter: {
    card: "summary_large_image",
    title: "ИИ-ассистент для создания контента: рост публикаций на 230%",
    description: "Как ИИ-агент помогает блогеру создавать контент и повышать вовлеченность аудитории",
    images: ["https://neuropolis.ai/assets/images/cases/ssm.jpg"],
    creator: "@neuropolis_ai"
  },
  
  // Канонический URL
  alternates: {
    canonical: "https://neuropolis.ai/cases/ai-content-assistant",
  },
  
  // Schema.org разметка для кейса
  other: {
    "structured-data": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "ИИ-ассистент для создания контента",
      "author": {
        "@type": "Organization",
        "name": "Neuropolis.ai"
      },
      "datePublished": "2023-12-05",
      "dateModified": "2024-01-15",
      "image": "https://neuropolis.ai/assets/images/cases/ssm.jpg",
      "publisher": {
        "@type": "Organization",
        "name": "Neuropolis.ai",
        "logo": {
          "@type": "ImageObject",
          "url": "https://neuropolis.ai/assets/images/logo.png"
        }
      },
      "description": "Как внедрение ИИ-ассистента увеличило регулярность публикаций блогера с аудиторией 500K+ на 230% и повысило вовлеченность аудитории на 45%",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://neuropolis.ai/cases/ai-content-assistant"
      },
      "keywords": "ИИ-ассистент, контент, блогер, автоматизация, генерация контента, повышение вовлеченности"
    })
  }
}; 