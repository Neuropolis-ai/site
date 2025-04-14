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
 * Получение статей блога с пагинацией
 * @param page - номер страницы (начиная с 1)
 * @param pageSize - количество статей на странице
 */
export async function getPaginatedArticles(
  page: number = 1,
  pageSize: number = 9
): Promise<{ articles: Article[]; total: number }> {
  // Вычисляем смещение для запроса
  const offset = (page - 1) * pageSize;

  // Получаем общее количество статей
  const countResponse = await supabase
    .from("articles")
    .select("*", { count: "exact", head: true });

  if (countResponse.error) {
    console.error(
      "Ошибка при получении количества статей:",
      countResponse.error
    );
    return { articles: [], total: 0 };
  }

  // Получаем статьи для текущей страницы
  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .order("published_at", { ascending: false })
    .range(offset, offset + pageSize - 1);

  if (error) {
    console.error("Ошибка при получении статей с пагинацией:", error);
    return { articles: [], total: countResponse.count || 0 };
  }

  return {
    articles: data || [],
    total: countResponse.count || 0,
  };
}

/**
 * Получение статьи по slug
 */
export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) {
    console.error(`Ошибка при получении статьи с slug ${slug}:`, error);
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

/**
 * Создание новой статьи
 */
export async function createArticle(
  article: Omit<Article, "id" | "created_at">
): Promise<Article | null> {
  const { data, error } = await supabase
    .from("articles")
    .insert(article)
    .select()
    .single();

  if (error) {
    console.error("Ошибка при создании статьи:", error);
    return null;
  }

  return data;
}

/**
 * Обновление существующей статьи
 */
export async function updateArticle(
  id: string,
  article: Partial<Omit<Article, "id" | "created_at">>
): Promise<Article | null> {
  const { data, error } = await supabase
    .from("articles")
    .update(article)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error(`Ошибка при обновлении статьи с id ${id}:`, error);
    return null;
  }

  return data;
}

/**
 * Удаление статьи
 */
export async function deleteArticle(id: string): Promise<boolean> {
  const { error } = await supabase.from("articles").delete().eq("id", id);

  if (error) {
    console.error(`Ошибка при удалении статьи с id ${id}:`, error);
    return false;
  }

  return true;
}

/**
 * Загрузка изображения для статьи
 */
export async function uploadArticleImage(file: File): Promise<string | null> {
  const fileExt = file.name.split(".").pop();
  const fileName = `${Date.now()}.${fileExt}`;
  const filePath = `article-images/${fileName}`;

  const { error } = await supabase.storage.from("blog").upload(filePath, file);

  if (error) {
    console.error("Ошибка при загрузке изображения:", error);
    return null;
  }

  const { data } = supabase.storage.from("blog").getPublicUrl(filePath);

  return data.publicUrl;
}
