import { MetadataRoute } from "next";
// Временно отключаем импорт Article для деплоя
// import { Article } from "@/lib/supabase";

// Базовый URL сайта
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neuropolis.ai';

export default function sitemap(): MetadataRoute.Sitemap {
  // Основные страницы
  const mainRoutes = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
  ] as MetadataRoute.Sitemap;

  // Страницы кейсов
  const caseStudyRoutes = [
    {
      url: `${baseUrl}/cases/ai-customer-support`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/cases/ai-content-assistant`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/cases/ai-sales-agent`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/cases/bank-chatbot`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ] as MetadataRoute.Sitemap;

  // Временно отключаем динамическую генерацию URL для статей блога
  // В реальном приложении здесь можно было бы динамически получать
  // страницы из CMS или базы данных

  return [...mainRoutes, ...caseStudyRoutes];
}
