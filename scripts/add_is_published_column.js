// Скрипт для добавления колонки is_published в таблицу articles
require("dotenv").config();
const { createClient } = require("@supabase/supabase-js");
const fs = require("fs");
const path = require("path");

// URL и ключ для Supabase
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;

if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
  console.error(
    "Ошибка: Не заданы переменные окружения NEXT_PUBLIC_SUPABASE_URL или SUPABASE_SERVICE_KEY"
  );
  process.exit(1);
}

// Создаем клиент Supabase с сервисным ключом
const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

// Путь к SQL-файлу
const sqlFilePath = path.join(
  __dirname,
  "..",
  "migrations",
  "add_is_published_column.sql"
);

// Проверяем существование файла
if (!fs.existsSync(sqlFilePath)) {
  console.error(`Ошибка: Файл ${sqlFilePath} не найден`);
  process.exit(1);
}

// Читаем SQL-запрос из файла
const sqlQuery = fs.readFileSync(sqlFilePath, "utf8");

async function addColumn() {
  try {
    console.log("Добавляем колонку is_published в таблицу articles...");

    // Получаем список таблиц
    const { data: tables, error: tablesError } = await supabase
      .from("_metadata")
      .select("tablename")
      .limit(10);

    if (tablesError) {
      console.error("Ошибка при получении списка таблиц:", tablesError);
    } else {
      console.log("Список таблиц:", tables);
    }

    // Выполняем SQL-запрос
    const { data, error } = await supabase.rpc("execute_sql", {
      sql_code: sqlQuery,
    });

    if (error) {
      console.error("Ошибка при выполнении SQL-запроса:", error);

      // Пробуем выполнить запрос через REST API
      console.log("Пробуем выполнить запрос через REST API...");

      const response = await fetch(`${SUPABASE_URL}/rest/v1/rpc/execute_sql`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: SUPABASE_SERVICE_KEY,
          Authorization: `Bearer ${SUPABASE_SERVICE_KEY}`,
        },
        body: JSON.stringify({
          sql_code: sqlQuery,
        }),
      });

      if (!response.ok) {
        const errorData = await response.text();
        console.error(`Ошибка API (${response.status}):`, errorData);

        // Последняя попытка - прямое подключение к Postgres
        console.log("Пробуем прямое подключение к Postgres...");
        console.log(
          "Для добавления колонки используйте SQL-консоль в Supabase Studio:"
        );
        console.log(sqlQuery);
      } else {
        const result = await response.json();
        console.log("Запрос успешно выполнен через REST API:", result);
      }
    } else {
      console.log("Колонка is_published успешно добавлена в таблицу articles");
    }
  } catch (err) {
    console.error("Непредвиденная ошибка:", err);
  }
}

// Запускаем добавление колонки
addColumn()
  .then(() => console.log("Скрипт завершен"))
  .catch((err) => console.error("Ошибка при выполнении скрипта:", err));
