import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

// Самый простой вариант восстановления статьи
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

    // Обновляем запись напрямую
    const { error } = await supabase
      .from("articles")
      .update({ is_published: true })
      .eq("id", id);

    if (error) {
      console.error("Ошибка при восстановлении статьи:", error);
      return NextResponse.json(
        { success: false, error: error.message },
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
