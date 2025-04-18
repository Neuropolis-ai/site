import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import {
  directUpdateArticle,
  restApiUpdateArticle,
} from "@/app/admin/blog/direct-update";

export async function POST(request: NextRequest) {
  try {
    console.log("Запрос на восстановление статьи...");

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
        const { error: rpcError } = await supabase.rpc("restore_article", {
          article_id: id,
        });

        if (!rpcError) {
          console.log("Успешное восстановление через RPC");
          success = true;
          error = null;
        } else {
          console.warn("Ошибка при использовании RPC:", rpcError);
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
