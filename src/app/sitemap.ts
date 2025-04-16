import { MetadataRoute } from "next";
import { Article } from "@/lib/supabase";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Базовый URL сайта
  const baseUrl = "https://neuropolis.ai";

  // Текущая дата для lastModified
  const now = new Date();

  // Статические страницы
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/cases`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  try {
    // Получаем страницы блога
    const { getAllArticles } = await import("@/lib/blogApi");
    const articles: Article[] = await getAllArticles();

    const blogPages: MetadataRoute.Sitemap = articles.map((article) => ({
      url: `${baseUrl}/blog/${article.slug}`,
      lastModified: new Date(article.published_at || article.created_at),
      changeFrequency: "monthly",
      priority: 0.6,
    }));

    return [...staticPages, ...blogPages];
  } catch (error) {
    console.error("Ошибка при генерации карты сайта:", error);
    // Возвращаем только статические страницы в случае ошибки
    return staticPages;
  }
}
