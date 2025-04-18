import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import {
  directUpdateArticle,
  restApiUpdateArticle,
} from "@/app/admin/blog/direct-update";

// SQL-запрос для проверки наличия колонки is_published и её добавления
async function ensureIsPublishedColumnExists(): Promise<boolean> {
  try {
    console.log("Проверяем наличие колонки is_published...");

    // Проверяем наличие колонки
    const { data: columnExists, error: checkError } = await supabase.rpc(
      "check_column_exists",
      {
        table_name: "articles",
        column_name: "is_published",
      }
    );

    if (checkError) {
      console.error("Ошибка при проверке колонки:", checkError);

      // Если функции RPC нет, пытаемся выполнить запрос напрямую
      try {
        console.log("Пытаемся добавить колонку is_published напрямую");

        // Создаем RPC функцию для проверки колонки
        await supabase.rpc("create_column_check_function");

        // Создаем функцию для добавления колонки
        await supabase.rpc("create_add_column_function");

        return true;
      } catch (err) {
        console.error(
          "Не удалось создать функции для работы с колонками:",
          err
        );
        return false;
      }
    }

    // Если колонка не существует, добавляем её
    if (!columnExists) {
      console.log("Колонка is_published отсутствует, добавляем...");

      const { error: addError } = await supabase.rpc(
        "add_column_if_not_exists",
        {
          table_name: "articles",
          column_name: "is_published",
          column_type: "boolean",
          default_value: "true",
        }
      );

      if (addError) {
        console.error("Ошибка при добавлении колонки:", addError);
        return false;
      }

      console.log("Колонка is_published успешно добавлена");
    } else {
      console.log("Колонка is_published уже существует");
    }

    return true;
  } catch (err) {
    console.error("Ошибка при проверке/добавлении колонки:", err);
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    console.log("Запрос на восстановление статьи...");

    // Проверяем и при необходимости добавляем колонку is_published
    await ensureIsPublishedColumnExists();

    // Получаем данные из запроса
    const { id } = await request.json();

    if (!id) {
      return NextResponse.json(
        { success: false, error: "ID статьи не указан" },
        { status: 400 }
      );
    }

    console.log(`Восстанавливаем статью с ID: ${id}`);

    let success = false;
    let error = null;

    // Цепочка попыток восстановления
    try {
      // Попытка 1: Стандартный способ через Supabase client
      console.log("Попытка 1: Обновление через стандартный клиент Supabase");
      const { error: supabaseError } = await supabase
        .from("articles")
        .update({ is_published: true, updated_at: new Date().toISOString() })
        .eq("id", id);

      if (!supabaseError) {
        console.log("Успешное обновление через стандартный клиент");
        success = true;
      } else {
        console.warn("Ошибка при стандартном обновлении:", supabaseError);
        error = supabaseError;

        // Попытка 2: Прямое обновление через сервисный ключ
        console.log("Попытка 2: Прямое обновление через сервисный ключ");
        const directSuccess = await directUpdateArticle(id);

        if (directSuccess) {
          console.log("Успешное прямое обновление");
          success = true;
          error = null;
        } else {
          console.warn("Ошибка при прямом обновлении");

          // Попытка 3: Обновление через REST API
          console.log("Попытка 3: Обновление через REST API");
          const restSuccess = await restApiUpdateArticle(id);

          if (restSuccess) {
            console.log("Успешное обновление через REST API");
            success = true;
            error = null;
          }
        }
      }
    } catch (err) {
      console.error("Ошибка при выполнении цепочки восстановления:", err);
      error = err;
    }

    // Запасной вариант: прямой SQL через RPC
    if (!success) {
      try {
        console.log("Попытка 4: Использование RPC функции");

        // Сначала создаем функцию restore_article, если она не существует
        try {
          await supabase.rpc("create_restore_article_function");
          console.log("Функция restore_article создана или уже существует");
        } catch (createErr) {
          console.warn(
            "Не удалось создать функцию restore_article:",
            createErr
          );
        }

        // Вызываем функцию восстановления
        const { error: rpcError } = await supabase.rpc("restore_article", {
          article_id: id,
        });

        if (!rpcError) {
          console.log("Успешное восстановление через RPC");
          success = true;
          error = null;
        } else {
          console.warn("Ошибка при использовании RPC:", rpcError);

          // Последняя попытка: прямой SQL-запрос
          try {
            console.log("Попытка 5: Прямое выполнение SQL");

            // Создаем функцию для прямого SQL
            await supabase.rpc("create_direct_update_function");

            // Вызываем функцию
            const { error: directSqlError } = await supabase.rpc(
              "direct_update_article",
              {
                article_id: id,
              }
            );

            if (!directSqlError) {
              console.log("Успешное восстановление через прямой SQL");
              success = true;
              error = null;
            } else {
              console.error("Ошибка при прямом SQL:", directSqlError);
            }
          } catch (sqlErr) {
            console.error("Ошибка при выполнении прямого SQL:", sqlErr);
          }
        }
      } catch (err) {
        console.error("Ошибка при выполнении RPC:", err);
        if (!error) error = err;
      }
    }

    // Возвращаем результат
    if (success) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        {
          success: false,
          error: error instanceof Error ? error.message : "Неизвестная ошибка",
        },
        { status: 500 }
      );
    }
  } catch (err) {
    console.error("Непредвиденная ошибка в API восстановления:", err);
    return NextResponse.json(
      {
        success: false,
        error: err instanceof Error ? err.message : "Непредвиденная ошибка",
      },
      { status: 500 }
    );
  }
}
