import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "ИИ-ассистент для создания контента: +230% публикаций | Кейс Neuropolis",
  description:
    "Кейс внедрения ИИ-ассистента для блогера с аудиторией 100K+: рост публикаций на 230%, повышение вовлеченности на 45%, сокращение времени создания контента на 74%. Реальные результаты и технические детали.",
  keywords:
    "ИИ-ассистент контента, автоматизация создания контента, генерация контента, блог, повышение вовлеченности, регулярность публикаций, GPT-4, Claude 3, Langchain, NLP, контент-маркетинг",
  
  // Open Graph метатеги
  openGraph: {
    title: "ИИ-ассистент для создания контента: +230% публикаций | Кейс Neuropolis",
    description: "Кейс внедрения ИИ для блогера: рост публикаций на 230%, повышение вовлеченности на 45%, экономия 74% времени. Как автоматизировать контент-маркетинг с GPT-4 и NLP.",
    type: "article",
    url: "https://neuropolis.ai/cases/ai-content-assistant",
    images: [
      {
        url: "https://neuropolis.ai/assets/images/cases/ssm.jpg",
        width: 1200,
        height: 630,
        alt: "ИИ-ассистент для создания контента: результаты внедрения"
      }
    ],
    siteName: "Neuropolis.ai",
  },
  
  // Twitter Card метатеги
  twitter: {
    card: "summary_large_image",
    title: "ИИ-ассистент для создания контента: увеличение публикаций на 230%",
    description: "Кейс внедрения ИИ для блогера: рост публикаций, вовлеченности и экономия времени. Реальные результаты и технические детали.",
    images: ["https://neuropolis.ai/assets/images/cases/ssm.jpg"],
    creator: "@neuropolis_ai",
    site: "@neuropolis_ai"
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
      "headline": "ИИ-ассистент для создания контента: +230% публикаций | Кейс Neuropolis",
      "author": {
        "@type": "Organization",
        "name": "Neuropolis.ai",
        "url": "https://neuropolis.ai",
        "logo": {
          "@type": "ImageObject",
          "url": "https://neuropolis.ai/assets/images/logo.png",
          "width": 112,
          "height": 112
        }
      },
      "datePublished": "2023-12-05",
      "dateModified": "2024-01-15",
      "image": {
        "@type": "ImageObject",
        "url": "https://neuropolis.ai/assets/images/cases/ssm.jpg",
        "width": 1200,
        "height": 630
      },
      "publisher": {
        "@type": "Organization",
        "name": "Neuropolis.ai",
        "logo": {
          "@type": "ImageObject",
          "url": "https://neuropolis.ai/assets/images/logo.png",
          "width": 112,
          "height": 112
        }
      },
      "description": "Как внедрение ИИ-ассистента увеличило регулярность публикаций блогера с аудиторией 100K+ на 230% и повысило вовлеченность аудитории на 45%",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://neuropolis.ai/cases/ai-content-assistant"
      },
      "keywords": "ИИ-ассистент, контент, блогер, автоматизация, генерация контента, повышение вовлеченности",
      "articleSection": "Case Study",
      "about": {
        "@type": "Thing",
        "name": "Искусственный интеллект в контент-маркетинге"
      },
      "isAccessibleForFree": "True"
    }),
    
    // Добавляем FAQ разметку для секции вопросов и ответов
    "faq-structured-data": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Как ИИ-ассистент имитирует авторский стиль?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ИИ-ассистент обучается на существующих материалах автора, выявляя характерные языковые паттерны, стилистические приёмы, тональность и структуру повествования. Система анализирует десятки параметров, включая длину предложений, словарный запас, ритмику текста и особенности построения аргументации. На основе этого анализа создаётся индивидуальный стилистический профиль, который применяется при генерации нового контента."
          }
        },
        {
          "@type": "Question",
          "name": "Какие типы контента может создавать система?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Система может создавать различные типы контента, включая статьи для блога, посты для социальных сетей, сценарии для видеороликов, e-mail рассылки и другие форматы текстового контента."
          }
        },
        {
          "@type": "Question",
          "name": "Как обеспечивается фактическая точность контента?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Система использует специальные механизмы проверки фактов, которые сопоставляют информацию с надежными источниками данных. Кроме того, ИИ-ассистент предоставляет ссылки на источники для проверки, а финальное утверждение контента всегда остается за человеком."
          }
        }
      ]
    })
  }
}; 