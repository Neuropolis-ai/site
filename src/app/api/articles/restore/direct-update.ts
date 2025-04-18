// Прямой доступ к API Supabase без использования клиента
import { createClient } from "@supabase/supabase-js";

// URL-адрес вашего проекта Supabase
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
// Ключ сервиса (service_role key), а не публичный ключ anon
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;

// Функция для прямого SQL-обновления статьи через Supabase REST API
export async function directUpdateArticle(id: string): Promise<boolean> {
  try {
    console.log(`Выполняем прямое обновление для статьи ${id}`);

    // Создаем клиент с сервисным ключом
    const supabase = createClient(
      SUPABASE_URL || "",
      SUPABASE_SERVICE_KEY || ""
    );

    // Выполняем SQL-запрос с сервисными привилегиями
    const { data, error } = await supabase
      .from("articles")
      .update({ is_published: true, updated_at: new Date().toISOString() })
      .eq("id", id);

    if (error) {
      console.error("Ошибка при прямом обновлении статьи:", error);
      return false;
    }

    console.log("Статья успешно обновлена:", data);
    return true;
  } catch (err) {
    console.error("Непредвиденная ошибка при обновлении статьи:", err);
    return false;
  }
}

// Запасной вариант: обновление через REST API
export async function restApiUpdateArticle(id: string): Promise<boolean> {
  if (!SUPABASE_URL) return false;

  try {
    console.log(`Попытка обновления через REST API для статьи ${id}`);

    // Заголовки для авторизации
    const headers = {
      "Content-Type": "application/json",
      apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "",
      Authorization: `Bearer ${
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
      }`,
    };

    // Данные для обновления
    const updateData = {
      is_published: true,
      updated_at: new Date().toISOString(),
    };

    // REST API запрос напрямую
    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/articles?id=eq.${id}`,
      {
        method: "PATCH",
        headers,
        body: JSON.stringify(updateData),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Ошибка REST API: ${response.status} - ${errorText}`);
      return false;
    }

    console.log("Статья успешно обновлена через REST API");
    return true;
  } catch (err) {
    console.error("Ошибка при выполнении REST запроса:", err);
    return false;
  }
}
