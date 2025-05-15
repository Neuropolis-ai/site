import { MetadataRoute } from "next";
import { Article } from "@/lib/supabase";
import { getPublishedArticles } from "@/lib/blogApi";

// Включает или отключает отладочные логи
const ENABLE_DEBUG_LOGS = false;

// Вспомогательная функция для логирования
function debugLog(...args: any[]) {
  if (ENABLE_DEBUG_LOGS) {
    console.log(...args);
  }
}

// Базовый URL сайта
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neuropolis.ai';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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

  // Динамическая генерация URL для статей блога
  let blogRoutes: MetadataRoute.Sitemap = [];
  
  try {
    debugLog("Получаем статьи для sitemap");
    const articles = await getPublishedArticles();
    debugLog(`Найдено ${articles.length} статей для sitemap`);
    
    blogRoutes = articles.map(article => ({
      url: `${baseUrl}/blog/${article.slug}`,
      lastModified: new Date(article.published_at),
      changeFrequency: 'weekly',
      priority: 0.7,
    }));
  } catch (error) {
    console.error('Ошибка при получении статей для sitemap:', error);
  }

  return [...mainRoutes, ...caseStudyRoutes, ...blogRoutes];
}
