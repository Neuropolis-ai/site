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
 * Получение опубликованных статей блога
 */
export async function getPublishedArticles(): Promise<Article[]> {
  try {
    console.log("Запрос опубликованных статей");
    const { data, error } = await supabase
      .from("articles")
      .select("*")
      .eq("is_published", true)
      .order("published_at", { ascending: false });

    if (error) {
      console.error("Ошибка при получении опубликованных статей:", error);

      // Если ошибка связана с отсутствием колонки is_published
      if (
        error.message &&
        error.message.includes("column") &&
        error.message.includes("is_published")
      ) {
        console.warn("Колонка is_published отсутствует, возвращаем все статьи");

        // Если поле is_published отсутствует, возвращаем все статьи
        const fallbackResult = await supabase
          .from("articles")
          .select("*")
          .order("published_at", { ascending: false });

        if (!fallbackResult.error) {
          // Симулируем наличие поля is_published для совместимости
          const articlesWithIsPublished = (fallbackResult.data || []).map(
            (article) => ({
              ...article,
              is_published: true,
            })
          );

          return articlesWithIsPublished;
        }
      }

      return [];
    }

    return data || [];
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
    console.log(
      `Запрос статей с пагинацией: страница ${page}, размер ${pageSize}`
    );
    // Вычисляем смещение для запроса
    const offset = (page - 1) * pageSize;

    // Получаем общее количество опубликованных статей
    const countResponse = await supabase
      .from("articles")
      .select("*", { count: "exact", head: true })
      .eq("is_published", true);

    if (countResponse.error) {
      console.error(
        "Ошибка при получении количества статей:",
        countResponse.error
      );

      // Если ошибка связана с отсутствием колонки is_published
      if (
        countResponse.error.message &&
        countResponse.error.message.includes("column") &&
        countResponse.error.message.includes("is_published")
      ) {
        console.warn(
          "Колонка is_published отсутствует, считаем все статьи опубликованными"
        );

        // Если поле is_published отсутствует, считаем общее количество без фильтрации
        const fallbackCount = await supabase
          .from("articles")
          .select("*", { count: "exact", head: true });

        if (!fallbackCount.error) {
          const totalCount = fallbackCount.count || 0;

          // Получаем статьи для текущей страницы без фильтрации по is_published
          const { data, error } = await supabase
            .from("articles")
            .select("*")
            .order("published_at", { ascending: false })
            .range(offset, offset + pageSize - 1);

          if (!error && data) {
            // Симулируем наличие поля is_published
            const articlesWithIsPublished = data.map((article) => ({
              ...article,
              is_published: true,
            }));

            return {
              articles: articlesWithIsPublished,
              total: totalCount,
            };
          }
        }
      }

      return { articles: [], total: 0 };
    }

    // Получаем статьи для текущей страницы
    const { data, error } = await supabase
      .from("articles")
      .select("*")
      .eq("is_published", true)
      .order("published_at", { ascending: false })
      .range(offset, offset + pageSize - 1);

    if (error) {
      console.error("Ошибка при получении статей с пагинацией:", error);

      // Если ошибка связана с отсутствием колонки is_published
      if (
        error.message &&
        error.message.includes("column") &&
        error.message.includes("is_published")
      ) {
        console.warn(
          "Колонка is_published отсутствует, получаем все статьи без фильтрации"
        );

        // Если поле is_published отсутствует, получаем статьи без фильтрации
        const fallbackResult = await supabase
          .from("articles")
          .select("*")
          .order("published_at", { ascending: false })
          .range(offset, offset + pageSize - 1);

        if (!fallbackResult.error && fallbackResult.data) {
          // Симулируем наличие поля is_published
          const articlesWithIsPublished = fallbackResult.data.map(
            (article) => ({
              ...article,
              is_published: true,
            })
          );

          return {
            articles: articlesWithIsPublished,
            total: countResponse.count || 0,
          };
        }
      }

      return { articles: [], total: countResponse.count || 0 };
    }

    return {
      articles: data || [],
      total: countResponse.count || 0,
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
    console.log(`Запрос опубликованной статьи по slug: ${slug}`);
    const { data, error } = await supabase
      .from("articles")
      .select("*")
      .eq("slug", slug)
      .eq("is_published", true)
      .single();

    if (error) {
      console.error(
        `Ошибка при получении опубликованной статьи с slug ${slug}:`,
        error
      );

      // Если ошибка связана с отсутствием колонки is_published
      if (
        error.message &&
        error.message.includes("column") &&
        error.message.includes("is_published")
      ) {
        console.warn(
          `Колонка is_published отсутствует, получаем статью без проверки публикации: ${slug}`
        );

        // Если поле is_published отсутствует, получаем статью только по slug
        const fallbackResult = await supabase
          .from("articles")
          .select("*")
          .eq("slug", slug)
          .single();

        if (!fallbackResult.error && fallbackResult.data) {
          // Симулируем наличие поля is_published
          return {
            ...fallbackResult.data,
            is_published: true,
          };
        }
      }

      return null;
    }

    return data;
  } catch (err) {
    console.error(
      `Ошибка при получении опубликованной статьи с slug ${slug}:`,
      err
    );
    return null;
  }
}

/**
 * Получение последних N статей
 */
export async function getRecentArticles(limit: number = 3): Promise<Article[]> {
  try {
    console.log(`Запрос последних ${limit} статей`);
    const { data, error } = await supabase
      .from("articles")
      .select("*")
      .eq("is_published", true)
      .order("published_at", { ascending: false })
      .limit(limit);

    if (error) {
      console.error("Ошибка при получении последних статей:", error);

      // Если ошибка связана с отсутствием колонки is_published
      if (
        error.message &&
        error.message.includes("column") &&
        error.message.includes("is_published")
      ) {
        console.warn(
          `Колонка is_published отсутствует, получаем все последние ${limit} статей`
        );

        // Если поле is_published отсутствует, получаем статьи без фильтрации
        const fallbackResult = await supabase
          .from("articles")
          .select("*")
          .order("published_at", { ascending: false })
          .limit(limit);

        if (!fallbackResult.error && fallbackResult.data) {
          // Симулируем наличие поля is_published
          return fallbackResult.data.map((article) => ({
            ...article,
            is_published: true,
          }));
        }
      }

      return [];
    }

    return data || [];
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
        console.error(
          "Необходимо выполнить миграцию базы данных, добавив колонку is_published"
        );
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
