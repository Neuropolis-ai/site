// Скрипт для создания SQL-функций в базе данных
const { createClient } = require("@supabase/supabase-js");
const fs = require("fs");
const path = require("path");

// Загрузка переменных окружения
require("dotenv").config();

// Создаем клиент Supabase с сервисным ключом
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error(
    "Ошибка: отсутствуют переменные окружения NEXT_PUBLIC_SUPABASE_URL или SUPABASE_SERVICE_KEY"
  );
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

// Читаем SQL-файл
const sqlFilePath = path.join(
  __dirname,
  "..",
  "migrations",
  "add_column_function.sql"
);
const sqlQuery = fs.readFileSync(sqlFilePath, "utf8");

async function createFunction() {
  try {
    console.log("Создаем SQL-функцию alter_table_add_column...");

    // Выполняем SQL-запрос напрямую через REST API
    const response = await fetch(`${supabaseUrl}/rest/v1/rpc/postgres`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${supabaseServiceKey}`,
        apikey: supabaseServiceKey,
      },
      body: JSON.stringify({
        query: sqlQuery,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(
        `Ошибка при выполнении SQL (${response.status}):`,
        errorText
      );

      // Альтернативный метод - через pg_dump
      console.log("Пробуем альтернативный метод создания функции...");

      // Создаем функцию для добавления колонки через прямой SQL
      const { data, error } = await supabase.auth.admin.createStoragePolicy(
        "alter_table_add_column",
        {
          INSERT: "true",
          SELECT: "true",
          UPDATE: "true",
          DELETE: "true",
        }
      );

      if (error) {
        console.error(
          "Не удалось создать функцию через административный API:",
          error
        );
      } else {
        console.log("Функция создана через административный API");
      }
    } else {
      console.log("Функция alter_table_add_column успешно создана");
    }

    // Проверяем, что колонка is_published существует в таблице articles
    console.log("Проверяем наличие колонки is_published в таблице articles...");

    const { data, error } = await supabase.rpc("alter_table_add_column", {
      tablename: "articles",
      columnname: "is_published",
      datatype: "boolean",
      defaultvalue: "true",
    });

    if (error) {
      console.error("Ошибка при добавлении колонки is_published:", error);
    } else {
      console.log(
        "Колонка is_published проверена/добавлена в таблицу articles"
      );
    }
  } catch (error) {
    console.error("Ошибка при выполнении скрипта:", error);
  }
}

// Запускаем функцию
createFunction()
  .then(() => console.log("Скрипт завершен"))
  .catch((err) => console.error("Ошибка в скрипте:", err));
