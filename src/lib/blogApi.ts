import { supabase, Article } from "./supabase";
import { createClient } from "@supabase/supabase-js";

/**
 * Получение всех статей блога
 */
export async function getAllArticles(): Promise<Article[]> {
  // Временно отключаем загрузку статей для деплоя
  return [];
}

/**
 * Получение опубликованных статей блога
 */
export async function getPublishedArticles(): Promise<Article[]> {
  // Временно отключаем загрузку статей для деплоя
  return [];
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
  // Временно отключаем загрузку статей для деплоя
  return { articles: [], total: 0 };
}

/**
 * Получение статьи по slug
 */
export async function getArticleBySlug(slug: string): Promise<Article | null> {
  // Временно отключаем загрузку статей для деплоя
  return null;
}

/**
 * Получение опубликованной статьи по slug
 */
export async function getPublishedArticleBySlug(
  slug: string
): Promise<Article | null> {
  // Временно отключаем загрузку статей для деплоя
  return null;
}

/**
 * Получение последних N статей
 */
export async function getRecentArticles(limit: number = 3): Promise<Article[]> {
  // Временно отключаем загрузку статей для деплоя
  return [];
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
