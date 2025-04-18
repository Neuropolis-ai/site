import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

// SQL-функции, которые мы будем создавать в Supabase
const SQL_FUNCTIONS: Record<string, string> = {
  // Функция для выполнения SQL
  create_sql_execution_function: `
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

  // Функция для создания SQL-функций
  create_sql_function: `
    CREATE OR REPLACE FUNCTION create_sql_function(sql_code text)
    RETURNS boolean
    LANGUAGE plpgsql
    SECURITY DEFINER
    AS $$
    BEGIN
      EXECUTE sql_code;
      RETURN TRUE;
    EXCEPTION
      WHEN OTHERS THEN
        RAISE NOTICE 'Ошибка при создании функции: %', SQLERRM;
        RETURN FALSE;
    END;
    $$;
  `,

  // Функция для проверки наличия колонки
  check_column_exists: `
    CREATE OR REPLACE FUNCTION check_column_exists(table_name text, column_name text)
    RETURNS boolean
    LANGUAGE plpgsql
    SECURITY DEFINER
    AS $$
    DECLARE
      column_exists boolean;
    BEGIN
      SELECT EXISTS (
        SELECT 1
        FROM information_schema.columns
        WHERE table_name = $1
        AND column_name = $2
      ) INTO column_exists;
      
      RETURN column_exists;
    END;
    $$;
  `,

  // Функция для создания функции проверки колонки
  create_column_check_function: `
    CREATE OR REPLACE FUNCTION create_column_check_function()
    RETURNS boolean
    LANGUAGE plpgsql
    SECURITY DEFINER
    AS $$
    BEGIN
      EXECUTE '
        CREATE OR REPLACE FUNCTION check_column_exists(table_name text, column_name text)
        RETURNS boolean
        LANGUAGE plpgsql
        SECURITY DEFINER
        AS $func$
        DECLARE
          column_exists boolean;
        BEGIN
          SELECT EXISTS (
            SELECT 1
            FROM information_schema.columns
            WHERE table_name = $1
            AND column_name = $2
          ) INTO column_exists;
          
          RETURN column_exists;
        END;
        $func$;
      ';
      
      RETURN TRUE;
    EXCEPTION
      WHEN OTHERS THEN
        RAISE NOTICE 'Ошибка при создании функции check_column_exists: %', SQLERRM;
        RETURN FALSE;
    END;
    $$;
  `,

  // Функция для добавления колонки
  add_column_if_not_exists: `
    CREATE OR REPLACE FUNCTION add_column_if_not_exists(
      table_name text, 
      column_name text,
      column_type text,
      default_value text
    )
    RETURNS boolean
    LANGUAGE plpgsql
    SECURITY DEFINER
    AS $$
    DECLARE
      column_exists boolean;
      alter_sql text;
    BEGIN
      SELECT EXISTS (
        SELECT 1
        FROM information_schema.columns
        WHERE table_name = $1
        AND column_name = $2
      ) INTO column_exists;
      
      IF NOT column_exists THEN
        alter_sql := 'ALTER TABLE ' || quote_ident(table_name) 
          || ' ADD COLUMN ' || quote_ident(column_name) 
          || ' ' || column_type;
        
        IF default_value IS NOT NULL AND default_value != '' THEN
          alter_sql := alter_sql || ' DEFAULT ' || default_value;
        END IF;
        
        EXECUTE alter_sql;
        
        RETURN TRUE;
      END IF;
      
      RETURN FALSE;
    EXCEPTION
      WHEN OTHERS THEN
        RAISE NOTICE 'Ошибка при добавлении колонки: %', SQLERRM;
        RETURN FALSE;
    END;
    $$;
  `,

  // Функция для создания функции добавления колонки
  create_add_column_function: `
    CREATE OR REPLACE FUNCTION create_add_column_function()
    RETURNS boolean
    LANGUAGE plpgsql
    SECURITY DEFINER
    AS $$
    BEGIN
      EXECUTE '
        CREATE OR REPLACE FUNCTION add_column_if_not_exists(
          table_name text, 
          column_name text,
          column_type text,
          default_value text
        )
        RETURNS boolean
        LANGUAGE plpgsql
        SECURITY DEFINER
        AS $func$
        DECLARE
          column_exists boolean;
          alter_sql text;
        BEGIN
          SELECT EXISTS (
            SELECT 1
            FROM information_schema.columns
            WHERE table_name = $1
            AND column_name = $2
          ) INTO column_exists;
          
          IF NOT column_exists THEN
            alter_sql := ''ALTER TABLE '' || quote_ident(table_name) 
              || '' ADD COLUMN '' || quote_ident(column_name) 
              || '' '' || column_type;
            
            IF default_value IS NOT NULL AND default_value != '''' THEN
              alter_sql := alter_sql || '' DEFAULT '' || default_value;
            END IF;
            
            EXECUTE alter_sql;
            
            RETURN TRUE;
          END IF;
          
          RETURN FALSE;
        EXCEPTION
          WHEN OTHERS THEN
            RAISE NOTICE ''Ошибка при добавлении колонки: %'', SQLERRM;
            RETURN FALSE;
        END;
        $func$;
      ';
      
      RETURN TRUE;
    EXCEPTION
      WHEN OTHERS THEN
        RAISE NOTICE 'Ошибка при создании функции add_column_if_not_exists: %', SQLERRM;
        RETURN FALSE;
    END;
    $$;
  `,

  // Функция для восстановления статьи
  restore_article: `
    CREATE OR REPLACE FUNCTION restore_article(article_id text)
    RETURNS boolean
    LANGUAGE plpgsql
    SECURITY DEFINER
    AS $$
    DECLARE
      is_published_exists boolean;
    BEGIN
      -- Проверяем наличие колонки is_published
      SELECT EXISTS (
        SELECT 1
        FROM information_schema.columns
        WHERE table_name = 'articles'
        AND column_name = 'is_published'
      ) INTO is_published_exists;
      
      -- Если колонка существует, обновляем значение
      IF is_published_exists THEN
        UPDATE articles
        SET is_published = TRUE,
            updated_at = NOW()
        WHERE id = article_id::uuid;
      ELSE
        -- Если колонки нет, добавляем её и затем обновляем
        ALTER TABLE articles
        ADD COLUMN IF NOT EXISTS is_published boolean DEFAULT true;
        
        UPDATE articles
        SET is_published = TRUE,
            updated_at = NOW()
        WHERE id = article_id::uuid;
      END IF;
      
      RETURN TRUE;
    EXCEPTION
      WHEN OTHERS THEN
        RAISE NOTICE 'Ошибка при восстановлении статьи: %', SQLERRM;
        RETURN FALSE;
    END;
    $$;
  `,

  // Функция для создания функции восстановления статьи
  create_restore_article_function: `
    CREATE OR REPLACE FUNCTION create_restore_article_function()
    RETURNS boolean
    LANGUAGE plpgsql
    SECURITY DEFINER
    AS $$
    BEGIN
      EXECUTE '
        CREATE OR REPLACE FUNCTION restore_article(article_id text)
        RETURNS boolean
        LANGUAGE plpgsql
        SECURITY DEFINER
        AS $func$
        DECLARE
          is_published_exists boolean;
        BEGIN
          -- Проверяем наличие колонки is_published
          SELECT EXISTS (
            SELECT 1
            FROM information_schema.columns
            WHERE table_name = ''articles''
            AND column_name = ''is_published''
          ) INTO is_published_exists;
          
          -- Если колонка существует, обновляем значение
          IF is_published_exists THEN
            UPDATE articles
            SET is_published = TRUE,
                updated_at = NOW()
            WHERE id = article_id::uuid;
          ELSE
            -- Если колонки нет, добавляем её и затем обновляем
            ALTER TABLE articles
            ADD COLUMN IF NOT EXISTS is_published boolean DEFAULT true;
            
            UPDATE articles
            SET is_published = TRUE,
                updated_at = NOW()
            WHERE id = article_id::uuid;
          END IF;
          
          RETURN TRUE;
        EXCEPTION
          WHEN OTHERS THEN
            RAISE NOTICE ''Ошибка при восстановлении статьи: %'', SQLERRM;
            RETURN FALSE;
        END;
        $func$;
      ';
      
      RETURN TRUE;
    EXCEPTION
      WHEN OTHERS THEN
        RAISE NOTICE 'Ошибка при создании функции restore_article: %', SQLERRM;
        RETURN FALSE;
    END;
    $$;
  `,

  // Функция для прямого обновления статьи
  direct_update_article: `
    CREATE OR REPLACE FUNCTION direct_update_article(article_id text)
    RETURNS boolean
    LANGUAGE plpgsql
    SECURITY DEFINER
    AS $$
    BEGIN
      -- Добавляем колонку, если её нет
      ALTER TABLE articles
      ADD COLUMN IF NOT EXISTS is_published boolean DEFAULT true;
      
      -- Обновляем статью
      UPDATE articles
      SET is_published = TRUE,
          updated_at = NOW()
      WHERE id = article_id::uuid;
      
      RETURN TRUE;
    EXCEPTION
      WHEN OTHERS THEN
        RAISE NOTICE 'Ошибка при прямом обновлении статьи: %', SQLERRM;
        RETURN FALSE;
    END;
    $$;
  `,

  // Функция для создания функции прямого обновления
  create_direct_update_function: `
    CREATE OR REPLACE FUNCTION create_direct_update_function()
    RETURNS boolean
    LANGUAGE plpgsql
    SECURITY DEFINER
    AS $$
    BEGIN
      EXECUTE '
        CREATE OR REPLACE FUNCTION direct_update_article(article_id text)
        RETURNS boolean
        LANGUAGE plpgsql
        SECURITY DEFINER
        AS $func$
        BEGIN
          -- Добавляем колонку, если её нет
          ALTER TABLE articles
          ADD COLUMN IF NOT EXISTS is_published boolean DEFAULT true;
          
          -- Обновляем статью
          UPDATE articles
          SET is_published = TRUE,
              updated_at = NOW()
          WHERE id = article_id::uuid;
          
          RETURN TRUE;
        EXCEPTION
          WHEN OTHERS THEN
            RAISE NOTICE ''Ошибка при прямом обновлении статьи: %'', SQLERRM;
            RETURN FALSE;
        END;
        $func$;
      ';
      
      RETURN TRUE;
    EXCEPTION
      WHEN OTHERS THEN
        RAISE NOTICE 'Ошибка при создании функции direct_update_article: %', SQLERRM;
        RETURN FALSE;
    END;
    $$;
  `,
};

// Конечная точка для создания SQL-функций
export async function POST(request: NextRequest) {
  try {
    const { function_name } = await request.json();

    if (!function_name || !SQL_FUNCTIONS[function_name]) {
      return NextResponse.json(
        { success: false, error: "Функция не найдена" },
        { status: 400 }
      );
    }

    const sql = SQL_FUNCTIONS[function_name];

    // Выполняем SQL для создания функции
    const { error } = await supabase.rpc("create_sql_function", {
      sql_code: sql,
    });

    if (error) {
      console.error(`Ошибка при создании функции ${function_name}:`, error);

      // Пробуем создать функцию для выполнения SQL
      const createFuncResult = await supabase.rpc("execute_sql", {
        sql_code: SQL_FUNCTIONS.create_sql_execution_function,
      });

      if (createFuncResult.error) {
        console.error(
          "Не удалось создать функцию для выполнения SQL:",
          createFuncResult.error
        );

        // Если даже выполнение SQL не сработало, возвращаем ошибку
        return NextResponse.json(
          {
            success: false,
            error: error.message,
            sql: sql,
          },
          { status: 500 }
        );
      }

      // Пробуем снова с новой функцией
      const retryResult = await supabase.rpc("execute_sql", { sql_code: sql });

      if (retryResult.error) {
        console.error(
          "Ошибка при повторной попытке создания функции:",
          retryResult.error
        );

        return NextResponse.json(
          {
            success: false,
            error: retryResult.error.message,
            sql: sql,
          },
          { status: 500 }
        );
      }

      return NextResponse.json({ success: true, retry: true });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Непредвиденная ошибка при создании SQL-функции:", err);

    return NextResponse.json(
      {
        success: false,
        error: err instanceof Error ? err.message : "Непредвиденная ошибка",
      },
      { status: 500 }
    );
  }
}

// Функция для создания всех SQL-функций сразу
export async function GET() {
  try {
    const results = [];

    // Создаем функцию для выполнения SQL
    const createExecuteResult = await fetch("/api/articles/database", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ function_name: "create_sql_execution_function" }),
    }).then((r) => r.json());

    results.push({
      function: "create_sql_execution_function",
      result: createExecuteResult,
    });

    // Создаем функцию для создания других функций
    const createFunctionResult = await fetch("/api/articles/database", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ function_name: "create_sql_function" }),
    }).then((r) => r.json());

    results.push({
      function: "create_sql_function",
      result: createFunctionResult,
    });

    // Создаем все остальные функции
    for (const [name, _] of Object.entries(SQL_FUNCTIONS)) {
      if (
        name !== "create_sql_execution_function" &&
        name !== "create_sql_function"
      ) {
        const result = await fetch("/api/articles/database", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ function_name: name }),
        }).then((r) => r.json());

        results.push({ function: name, result });
      }
    }

    return NextResponse.json({ success: true, results });
  } catch (err) {
    console.error("Ошибка при создании SQL-функций:", err);

    return NextResponse.json(
      {
        success: false,
        error: err instanceof Error ? err.message : "Непредвиденная ошибка",
      },
      { status: 500 }
    );
  }
}
