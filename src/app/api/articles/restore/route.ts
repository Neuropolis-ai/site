import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

// Простая функция для восстановления статьи - установка is_published = true
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

    // Прямое обновление через SQL - устанавливаем is_published = true
    const { error } = await supabase.rpc("execute_sql", {
      sql_code: `
        -- Добавляем колонку is_published, если её нет
        ALTER TABLE articles ADD COLUMN IF NOT EXISTS is_published boolean DEFAULT true;
        
        -- Обновляем статью
        UPDATE articles SET is_published = true, updated_at = NOW() WHERE id = '${id}';
      `,
    });

    if (error) {
      console.error("Ошибка при восстановлении статьи:", error);

      // Запасной вариант - простое обновление через Supabase API
      const { error: updateError } = await supabase
        .from("articles")
        .update({ is_published: true, updated_at: new Date().toISOString() })
        .eq("id", id);

      if (updateError) {
        console.error("Ошибка при обновлении через API:", updateError);
        return NextResponse.json(
          { success: false, error: updateError.message },
          { status: 500 }
        );
      }
    }

    // Возвращаем успешный результат
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
