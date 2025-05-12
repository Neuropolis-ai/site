import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { createClient } from "@supabase/supabase-js";

// Улучшенная версия восстановления статьи с сервисным ключом
export async function POST(request: NextRequest) {
  try {
    // Получаем ID статьи из запроса
    const { id } = await request.json();

    if (!id) {
      return NextResponse.json(
        { success: false, error: "ID статьи не указан" },
        { status: 400 }
      );
    }

    console.log(`Восстанавливаем статью с ID: ${id}`);

    // Пробуем использовать стандартный клиент
    let result = await standardUpdate(id);

    // Если стандартный метод не сработал, используем сервисный клиент
    if (!result.success) {
      console.log(
        "Стандартное обновление не удалось, пробуем через сервисный ключ"
      );
      result = await serviceKeyUpdate(id);
    }

    if (!result.success) {
      console.error("Все методы восстановления не удались:", result.error);
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 500 }
      );
    }

    // Возвращаем успешный результат
    console.log("Статья успешно восстановлена");
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Непредвиденная ошибка:", err);
    return NextResponse.json(
      {
        success: false,
        error: err instanceof Error ? err.message : "Непредвиденная ошибка",
      },
      { status: 500 }
    );
  }
}

// Функция обновления через стандартный клиент
async function standardUpdate(id: string) {
  try {
    // Обновляем запись напрямую через стандартный клиент
    const { error } = await supabase
      .from("articles")
      .update({ is_published: true })
      .eq("id", id);

    if (error) {
      console.error(
        "Ошибка при восстановлении статьи (стандартный метод):",
        error
      );
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err) {
    console.error("Ошибка в стандартном методе:", err);
    return {
      success: false,
      error: err instanceof Error ? err.message : "Ошибка в стандартном методе",
    };
  }
}

// Функция обновления через сервисный ключ
async function serviceKeyUpdate(id: string) {
  try {
    // URL и ключ для Supabase из переменных окружения
    const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;

    if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
      return {
        success: false,
        error:
          "Отсутствуют переменные окружения SUPABASE_URL или SUPABASE_SERVICE_KEY",
      };
    }

    // Создаем клиент с сервисным ключом
    const serviceClient = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

    // Обновляем запись через сервисный клиент
    const { error } = await serviceClient
      .from("articles")
      .update({ is_published: true })
      .eq("id", id);

    if (error) {
      console.error("Ошибка при восстановлении через сервисный ключ:", error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err) {
    console.error("Ошибка в методе с сервисным ключом:", err);
    return {
      success: false,
      error:
        err instanceof Error
          ? err.message
          : "Ошибка в методе с сервисным ключом",
    };
  }
}
