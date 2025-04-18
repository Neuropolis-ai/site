import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

// Функция для создания базовых SQL-функций в Supabase
async function createBasicSqlFunctions() {
  try {
    // Создаем функцию для выполнения SQL-запросов
    const createExecuteSqlResult = await supabase.rpc("create_sql_function", {
      sql_code: `
        CREATE OR REPLACE FUNCTION execute_sql(sql_code text)
        RETURNS boolean
        LANGUAGE plpgsql
        SECURITY DEFINER
        AS $$
        BEGIN
          EXECUTE sql_code;
          RETURN TRUE;
        EXCEPTION
          WHEN OTHERS THEN
            RAISE NOTICE 'Ошибка при выполнении SQL: %', SQLERRM;
            RETURN FALSE;
        END;
        $$;
      `,
    });

    if (createExecuteSqlResult.error) {
      // Если функция уже существует, это нормально
      console.log(
        "Функция execute_sql уже существует или произошла ошибка:",
        createExecuteSqlResult.error
      );
    } else {
      console.log("Функция execute_sql успешно создана");
    }

    // Добавляем колонку is_published, если её нет
    const addColumnResult = await supabase.rpc("execute_sql", {
      sql_code: `
        -- Добавляем колонку is_published, если она отсутствует
        DO $$ 
        BEGIN
          IF NOT EXISTS (
            SELECT 1 
            FROM information_schema.columns 
            WHERE table_name = 'articles' AND column_name = 'is_published'
          ) THEN
            ALTER TABLE articles ADD COLUMN is_published boolean DEFAULT true;
          END IF;
        END $$;
      `,
    });

    if (addColumnResult.error) {
      console.error(
        "Ошибка при добавлении колонки is_published:",
        addColumnResult.error
      );
    } else {
      console.log(
        "Колонка is_published успешно добавлена или уже существовала"
      );
    }

    return true;
  } catch (err) {
    console.error("Ошибка при создании базовых SQL-функций:", err);
    return false;
  }
}

// Конечная точка для инициализации SQL-функций
export async function GET() {
  try {
    // Создаем базовые SQL-функции
    const success = await createBasicSqlFunctions();

    return NextResponse.json({
      success,
      message: success
        ? "SQL-функции успешно инициализированы"
        : "Не удалось инициализировать все SQL-функции",
    });
  } catch (err) {
    console.error("Ошибка при инициализации SQL-функций:", err);

    return NextResponse.json(
      {
        success: false,
        error: err instanceof Error ? err.message : "Непредвиденная ошибка",
      },
      { status: 500 }
    );
  }
}

// Конечная точка для выполнения произвольного SQL-запроса
export async function POST(request: NextRequest) {
  try {
    const { sql_code } = await request.json();

    if (!sql_code) {
      return NextResponse.json(
        { success: false, error: "SQL-запрос не указан" },
        { status: 400 }
      );
    }

    // Выполняем SQL-запрос
    const { error } = await supabase.rpc("execute_sql", { sql_code });

    if (error) {
      console.error("Ошибка при выполнении SQL-запроса:", error);

      return NextResponse.json(
        {
          success: false,
          error: error.message,
          sql: sql_code,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Непредвиденная ошибка при выполнении SQL-запроса:", err);

    return NextResponse.json(
      {
        success: false,
        error: err instanceof Error ? err.message : "Непредвиденная ошибка",
      },
      { status: 500 }
    );
  }
}
