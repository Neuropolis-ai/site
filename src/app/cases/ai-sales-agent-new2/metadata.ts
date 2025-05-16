import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "ИИ-агент в отделе продаж: +27% конверсии | Кейс Neuropolis",
  description:
    "Кейс внедрения ИИ-агента для B2B SaaS-компании: сокращение времени отклика с 2 часов до 15 секунд, повышение конверсии на 27%, увеличение эффективности менеджеров на 35%. Реальные результаты и технические детали.",
  keywords:
    "ИИ-агент продаж, автоматизация продаж, генерация лидов, квалификация лидов, B2B продажи, SaaS, повышение конверсии, GPT-4, Telegram Bot API, RAG, LangChain, первичная квалификация",
  
  // Open Graph метатеги
  openGraph: {
    title: "ИИ-агент в отделе продаж: +27% конверсии | Кейс Neuropolis",
    description: "Кейс внедрения ИИ для B2B SaaS-компании: сокращение времени отклика до 15 секунд, повышение конверсии на 27%, увеличение эффективности менеджеров на 35%. Как автоматизировать квалификацию лидов с GPT-4 и LangChain.",
    type: "article",
    url: "https://neuropolis.ai/cases/ai-sales-agent",
    images: [
      {
        url: "https://neuropolis.ai/assets/images/cases/sale.jpg",
        width: 1200,
        height: 630,
        alt: "ИИ-агент в отделе продаж: результаты внедрения"
      }
    ],
    siteName: "Neuropolis.ai",
  },
  
  // Twitter Card метатеги
  twitter: {
    card: "summary_large_image",
    title: "ИИ-агент в отделе продаж: сокращение времени отклика до 15 секунд",
    description: "Кейс внедрения ИИ для B2B SaaS-компании: повышение конверсии, эффективности менеджеров и экономия времени. Реальные результаты и технические детали.",
    images: ["https://neuropolis.ai/assets/images/cases/sale.jpg"],
    creator: "@neuropolis_ai",
    site: "@neuropolis_ai"
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
      "headline": "ИИ-агент в отделе продаж: +27% конверсии | Кейс Neuropolis",
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
      "datePublished": "2023-12-15",
      "dateModified": "2024-02-10",
      "image": {
        "@type": "ImageObject",
        "url": "https://neuropolis.ai/assets/images/cases/sale.jpg",
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
      "description": "Как внедрение ИИ-агента сократило время отклика с 2 часов до 15 секунд и повысило конверсию на 27% для B2B SaaS-компании",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://neuropolis.ai/cases/ai-sales-agent"
      },
      "keywords": "ИИ-агент, продажи, B2B, SaaS, автоматизация, квалификация лидов, повышение конверсии",
      "articleSection": "Case Study",
      "about": {
        "@type": "Thing",
        "name": "Искусственный интеллект в B2B продажах"
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
          "name": "Как ИИ-агент определяет приоритетность лидов?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ИИ-агент использует многофакторную модель оценки, которая анализирует более 20 параметров лида, включая отрасль компании, размер бизнеса, источник обращения, используемые конкурирующие решения, бюджет и срочность запроса. Система автоматически ранжирует лиды по потенциальной ценности и вероятности конверсии."
          }
        },
        {
          "@type": "Question",
          "name": "Может ли ИИ-агент адаптироваться к специфике нашего бизнеса?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Безусловно. Наш ИИ-агент разрабатывается с учётом уникальных особенностей вашего бизнеса и проходит несколько этапов настройки. Система обучается на основе существующих успешных сценариев продаж, скриптов, базы знаний о продуктах и часто задаваемых вопросов."
          }
        },
        {
          "@type": "Question",
          "name": "Как ИИ-агент передает лида живому менеджеру?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "После сбора необходимой информации и первичной квалификации, ИИ-агент оценивает готовность лида к передаче. Если лид соответствует заданным критериям, система автоматически создает карточку в CRM с полным протоколом общения, всеми собранными данными и оценкой потенциала."
          }
        }
      ]
    })
  }
}; 