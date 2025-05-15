import { supabase, Article } from "./supabase";
import { createClient } from "@supabase/supabase-js";

// Включает или отключает отладочные логи
// Приоритет отдается переменной окружения, если она определена
const ENABLE_DEBUG_LOGS = 
  typeof process !== 'undefined' && 
  process.env.NEXT_PUBLIC_ENABLE_DEBUG_LOGS !== undefined
    ? process.env.NEXT_PUBLIC_ENABLE_DEBUG_LOGS === 'true'
    : false;

// Вспомогательная функция для логирования
function debugLog(...args: any[]) {
  if (ENABLE_DEBUG_LOGS) {
    console.log(...args);
  }
}

// Оставляем только существенные логи
function logError(message: string, error?: any) {
  console.error(message, error);
}

/**
 * Получение всех статей блога
 */
export async function getAllArticles(): Promise<Article[]> {
  // Ограничиваем количество статей для статической генерации при деплое
  const maxStaticArticles = 
    typeof process !== 'undefined' && 
    process.env.NEXT_PUBLIC_MAX_STATIC_ARTICLES !== undefined
      ? parseInt(process.env.NEXT_PUBLIC_MAX_STATIC_ARTICLES)
      : 0;

  try {
    const { data, error } = await supabase
      .from("articles")
      .select("*")
      .order("published_at", { ascending: false });

    if (error) {
      logError("Ошибка при получении статей:", error);
      return [];
    }

    // Если установлено ограничение и мы не в режиме разработки, 
    // ограничиваем количество возвращаемых статей
    if (
      maxStaticArticles > 0 && 
      process.env.NODE_ENV === 'production' && 
      data && 
      data.length > maxStaticArticles
    ) {
      debugLog(`Ограничение количества статей до ${maxStaticArticles} из ${data.length} для статической генерации`);
      return data.slice(0, maxStaticArticles);
    }

    return data || [];
  } catch (err) {
    logError("Ошибка при получении всех статей:", err);
    return [];
  }
}

/**
 * Получение опубликованных статей блога
 */
export async function getPublishedArticles(): Promise<Article[]> {
  try {
    debugLog("Запрос опубликованных статей");

    // Сначала пробуем получить все статьи без фильтрации
    const { data, error } = await supabase
      .from("articles")
      .select("*")
      .order("published_at", { ascending: false });

    if (error) {
      console.error("Ошибка при получении статей:", error);
      return [];
    }

    debugLog(`Получено ${data?.length || 0} статей`);

    // Фильтруем статьи на стороне клиента
    // Статья считается опубликованной, если is_published не равно явно false
    const publishedArticles = (data || []).filter((article) => {
      if (article.is_published === undefined) return true; // Если поля нет, считаем опубликованной
      return article.is_published !== false; // Если false - скрыта, иначе опубликована
    });

    debugLog(`После фильтрации осталось ${publishedArticles.length} статей`);

    return publishedArticles;
  } catch (err) {
    console.error("Ошибка при получении опубликованных статей:", err);
    return [];
  }
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
  try {
    debugLog(
      `Запрос статей с пагинацией: страница ${page}, размер ${pageSize}`
    );

    // Вычисляем смещение для запроса
    const offset = (page - 1) * pageSize;

    // Получаем все статьи без фильтрации, чтобы избежать проблем с is_published
    const { data, error, count } = await supabase
      .from("articles")
      .select("*", { count: "exact" })
      .order("published_at", { ascending: false })
      .range(offset, offset + pageSize - 1);

    if (error) {
      console.error("Ошибка при получении статей с пагинацией:", error);
      return { articles: [], total: 0 };
    }

    debugLog(`Получено ${data?.length || 0} статей из ${count || 0}`);

    // Фильтруем статьи на стороне клиента, оставляя только опубликованные
    const publishedArticles = (data || []).filter((article) => {
      // Статья считается опубликованной, если is_published не равно явно false
      if (article.is_published === undefined) return true; // Если поля нет, считаем опубликованной
      return article.is_published !== false; // Если false - скрыта, иначе опубликована
    });

    debugLog(`После фильтрации осталось ${publishedArticles.length} статей`);

    return {
      articles: publishedArticles,
      total: count || 0,
    };
  } catch (err) {
    console.error("Ошибка при получении статей с пагинацией:", err);
    return { articles: [], total: 0 };
  }
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
 * Получение опубликованной статьи по slug
 */
export async function getPublishedArticleBySlug(
  slug: string
): Promise<Article | null> {
  try {
    debugLog(`Запрос статьи по slug: ${slug}`);

    // Получаем статью без проверки is_published
    const { data, error } = await supabase
      .from("articles")
      .select("*")
      .eq("slug", slug)
      .single();

    if (error) {
      console.error(`Ошибка при получении статьи с slug ${slug}:`, error);
      return null;
    }

    // Проверяем, опубликована ли статья
    if (data && data.is_published === false) {
      debugLog(`Статья с slug ${slug} не опубликована`);
      return null;
    }

    debugLog(`Найдена статья:`, data ? { id: data.id, title: data.title } : null);
    return data;
  } catch (err) {
    console.error(`Ошибка при получении статьи с slug ${slug}:`, err);
    return null;
  }
}

/**
 * Получение последних N статей
 */
export async function getRecentArticles(limit: number = 3): Promise<Article[]> {
  try {
    debugLog(`Запрос последних ${limit} статей`);

    // Получаем статьи без фильтрации
    const { data, error } = await supabase
      .from("articles")
      .select("*")
      .order("published_at", { ascending: false })
      .limit(limit);

    if (error) {
      console.error("Ошибка при получении последних статей:", error);
      return [];
    }

    debugLog(`Получено ${data?.length || 0} последних статей`);

    // Фильтруем на стороне клиента
    const publishedArticles = (data || []).filter(
      (article) => article.is_published !== false
    );

    debugLog(`После фильтрации осталось ${publishedArticles.length} статей`);

    return publishedArticles;
  } catch (err) {
    console.error("Ошибка при получении последних статей:", err);
    return [];
  }
}

/**
 * Создание новой статьи
 */
export async function createArticle(
  article: Omit<Article, "id" | "created_at">
): Promise<Article | null> {
  console.log(`Создаем новую статью:`, article);
  // Установка is_published в true по умолчанию, если не задано
  const articleData = {
    ...article,
    is_published:
      article.is_published !== undefined ? article.is_published : true,
  };

  try {
    const { data, error } = await supabase
      .from("articles")
      .insert(articleData)
      .select()
      .single();

    if (error) {
      console.error("Ошибка при создании статьи:", error);

      // Если ошибка связана с отсутствием колонки is_published
      if (
        error.message &&
        error.message.includes("column") &&
        error.message.includes("is_published")
      ) {
        console.error(
          "Ошибка: колонка is_published отсутствует в таблице articles"
        );
        console.error(
          "Необходимо выполнить миграцию базы данных, добавив колонку is_published"
        );

        // Пробуем создать статью без поля is_published
        const cleanArticle = { ...article };
        delete (cleanArticle as any).is_published;

        console.log(`Повторяем создание без поля is_published:`, cleanArticle);

        const retryResult = await supabase
          .from("articles")
          .insert(cleanArticle)
          .select()
          .single();

        if (!retryResult.error) {
          console.log(`Статья создана (без is_published):`, retryResult.data);
          return retryResult.data;
        }
      }

      return null;
    }

    console.log(`Статья успешно создана:`, data);
    return data;
  } catch (err) {
    console.error("Ошибка при создании статьи:", err);
    return null;
  }
}

/**
 * Обновление существующей статьи
 */
export async function updateArticle(
  id: string,
  article: Partial<Omit<Article, "id" | "created_at">>
): Promise<Article | null> {
  console.log(`Начинаем обновление статьи с ID: ${id}, данные:`, article);

  try {
    const { data, error } = await supabase
      .from("articles")
      .update(article)
      .eq("id", id)
      .select()
      .single();

    if (error) {
      console.error(`Ошибка при обновлении статьи с id ${id}:`, error);

      // Если ошибка связана с отсутствием колонки is_published
      if (
        article.is_published !== undefined &&
        error.message &&
        error.message.includes("column") &&
        error.message.includes("is_published")
      ) {
        console.error(
          "Ошибка: колонка is_published отсутствует в таблице articles"
        );
        console.error(
          "Необходимо выполнить миграцию базы данных, добавив колонку is_published"
        );

        // Пробуем обновить статью без поля is_published
        const cleanArticle = { ...article };
        delete cleanArticle.is_published;

        if (Object.keys(cleanArticle).length > 0) {
          console.log(
            `Повторяем обновление без поля is_published:`,
            cleanArticle
          );

          const retryResult = await supabase
            .from("articles")
            .update(cleanArticle)
            .eq("id", id)
            .select()
            .single();

          if (!retryResult.error) {
            console.log(
              `Статья частично обновлена (без is_published):`,
              retryResult.data
            );
            return retryResult.data;
          }
        }
      }

      return null;
    }

    console.log(`Статья с ID ${id} успешно обновлена, возвращаем:`, data);
    return data;
  } catch (err) {
    console.error(`Ошибка при обновлении статьи с id ${id}:`, err);
    return null;
  }
}

/**
 * "Мягкое" удаление статьи (установка is_published в false)
 */
export async function deleteArticle(id: string): Promise<boolean> {
  try {
    console.log(`Начинаем мягкое удаление статьи с ID: ${id}`);

    // Стандартная попытка обновления
    const { error } = await supabase
      .from("articles")
      .update({ is_published: false })
      .eq("id", id);

    if (error) {
      console.error(`Ошибка при удалении статьи с id ${id}:`, error);

      // Если ошибка связана с отсутствием колонки is_published
      if (
        error.message &&
        error.message.includes("column") &&
        error.message.includes("is_published")
      ) {
        console.error(
          "Ошибка: колонка is_published отсутствует в таблице articles"
        );

        // Пробуем повторить с сервисным ключом
        try {
          console.log("Пробуем удаление через сервисный ключ");

          const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
          const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;

          if (SUPABASE_URL && SUPABASE_SERVICE_KEY) {
            const serviceClient = createClient(
              SUPABASE_URL,
              SUPABASE_SERVICE_KEY
            );

            const { error: serviceError } = await serviceClient
              .from("articles")
              .update({ is_published: false })
              .eq("id", id);

            if (!serviceError) {
              console.log(`Статья успешно скрыта через сервисный ключ`);
              return true;
            }
          }
        } catch (serviceErr) {
          console.error(
            "Ошибка при удалении через сервисный ключ:",
            serviceErr
          );
        }

        return false;
      }

      return false;
    }

    console.log(`Статья с ID ${id} успешно помечена как неопубликованная`);
    return true;
  } catch (err) {
    console.error(`Ошибка при удалении статьи с id ${id}:`, err);
    return false;
  }
}

/**
 * Полное удаление статьи из базы данных (используется только в админке)
 */
export async function hardDeleteArticle(id: string): Promise<boolean> {
  const { error } = await supabase.from("articles").delete().eq("id", id);

  if (error) {
    console.error(`Ошибка при полном удалении статьи с id ${id}:`, error);
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
