import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "ИИ-агент для поддержки клиентов: сокращение времени ответа в 480 раз | Кейс Neuropolis",
  description:
    "Кейс внедрения ИИ-агента для e-commerce маркетплейса: автоматизация 82% обращений, сокращение времени ответа с 24 часов до 3 минут, рост NPS на 68%. Реальные результаты и технические детали.",
  keywords:
    "ИИ-агент поддержки, автоматизация клиентской поддержки, чат-бот, e-commerce, обслуживание клиентов, повышение NPS, GPT-4o, RAG, Langchain, Pinecone, WhatsApp",
  
  // Open Graph метатеги
  openGraph: {
    title: "ИИ-агент для поддержки клиентов: сокращение времени ответа в 480 раз | Кейс Neuropolis",
    description: "Кейс внедрения ИИ для маркетплейса: автоматизация 82% обращений, сокращение времени ответа с 24 часов до 3 минут, рост NPS на 68%. Как автоматизировать клиентскую поддержку с GPT-4o и RAG.",
    type: "article",
    url: "https://neuropolis.ai/cases/ai-customer-support-new",
    images: [
      {
        url: "https://neuropolis.ai/assets/images/cases/ssm.jpg",
        width: 1200,
        height: 630,
        alt: "ИИ-агент для поддержки клиентов: результаты внедрения"
      }
    ],
    siteName: "Neuropolis.ai",
  },
  
  // Twitter Card метатеги
  twitter: {
    card: "summary_large_image",
    title: "ИИ-агент для поддержки клиентов: сокращение времени ответа в 480 раз",
    description: "Кейс внедрения ИИ для маркетплейса: автоматизация обращений, рост NPS и экономия времени. Реальные результаты и технические детали.",
    images: ["https://neuropolis.ai/assets/images/cases/ssm.jpg"],
    creator: "@neuropolis_ai",
    site: "@neuropolis_ai"
  },
  
  // Канонический URL
  alternates: {
    canonical: "https://neuropolis.ai/cases/ai-customer-support-new",
  },
  
  // Schema.org разметка для кейса
  other: {
    "structured-data": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "ИИ-агент для поддержки клиентов: сокращение времени ответа в 480 раз | Кейс Neuropolis",
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
      "datePublished": "2024-05-18",
      "dateModified": "2024-05-18",
      "image": {
        "@type": "ImageObject",
        "url": "https://neuropolis.ai/assets/images/cases/ssm.jpg",
        width: 1200,
        height: 630
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
      "description": "Как внедрение ИИ-агента автоматизировало 82% обращений e-commerce маркетплейса, сократило время ответа с 24 часов до 3 минут и повысило NPS на 68%",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://neuropolis.ai/cases/ai-customer-support-new"
      },
      "keywords": "ИИ-агент, поддержка клиентов, e-commerce, автоматизация, чат-бот, NPS",
      "articleSection": "Case Study",
      "about": {
        "@type": "Thing",
        "name": "Искусственный интеллект в клиентской поддержке"
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
          "name": "Сколько времени занимает внедрение ИИ-агента для поддержки клиентов?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Стандартный срок внедрения составляет 2-3 месяца в зависимости от сложности проекта, интеграций и существующих систем. Первая MVP-версия может быть запущена уже через 4-6 недель. Интеграция с системами CRM и базами знаний обычно занимает большую часть времени проекта."
          }
        },
        {
          "@type": "Question",
          "name": "Какие системы нужно интегрировать с ИИ-агентом?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Для максимальной эффективности ИИ-агента рекомендуется интегрировать его с CRM-системой, системой управления заказами, базой знаний, системой аналитики и телефонией. Конкретный набор интеграций зависит от специфики вашего бизнеса и требований к автоматизации клиентской поддержки."
          }
        },
        {
          "@type": "Question",
          "name": "Какой процент запросов сможет обрабатывать ИИ-агент?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "В зависимости от отрасли и типов запросов, современные ИИ-агенты могут автоматизировать 70-85% всех обращений. Остальные запросы, требующие нестандартного подхода или человеческого участия, передаются операторам. Технология RAG (Retrieval Augmented Generation) значительно повышает точность ответов и процент автоматизируемых запросов."
          }
        }
      ]
    })
  }
}; 