import { supabase, Article } from "./supabase";

/**
 * Получение всех статей блога
 */
export async function getAllArticles(): Promise<Article[]> {
  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .order("published_at", { ascending: false });

  if (error) {
    console.error("Ошибка при получении статей:", error);
    return [];
  }

  return data || [];
}

/**
 * Получение статьи по slug
 */
export async function getArticleBySlug(slug: string): Promise<Article | null> {
  // В Supabase нет прямой поддержки slug, поэтому можно использовать id
  // или добавить поле slug в таблицу articles
  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .eq("id", slug)
    .single();

  if (error) {
    console.error(`Ошибка при получении статьи с ID ${slug}:`, error);
    return null;
  }

  return data;
}

/**
 * Получение последних N статей
 */
export async function getRecentArticles(limit: number = 3): Promise<Article[]> {
  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .order("published_at", { ascending: false })
    .limit(limit);

  if (error) {
    console.error("Ошибка при получении последних статей:", error);
    return [];
  }

  return data || [];
}
