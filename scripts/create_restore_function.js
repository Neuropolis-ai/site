// Скрипт для создания SQL-функции восстановления статей
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
  "create_restore_function.sql"
);

// Проверяем существование файла
if (!fs.existsSync(sqlFilePath)) {
  console.error(`Ошибка: Файл ${sqlFilePath} не найден`);
  process.exit(1);
}

// Читаем SQL-запрос из файла
const sqlQuery = fs.readFileSync(sqlFilePath, "utf8");

async function createFunction() {
  try {
    console.log("Создаем функцию restore_article...");

    // Выполняем SQL-запрос через REST API
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
      console.log(`Ошибка API (${response.status})`);
      const errorData = await response.text();
      console.error(`Детали ошибки:`, errorData);

      // Проверяем доступные методы RPC
      console.log("Проверяем доступные методы RPC...");

      // Прямое подключение к SQL через админ API
      console.log("Пробуем использовать прямой SQL запрос через админ API...");

      const adminResponse = await fetch(`${SUPABASE_URL}/rest/v1/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: SUPABASE_SERVICE_KEY,
          Authorization: `Bearer ${SUPABASE_SERVICE_KEY}`,
          Prefer: "return=minimal",
        },
        body: sqlQuery,
      });

      if (!adminResponse.ok) {
        console.log(
          `Ошибка выполнения SQL через админ API (${adminResponse.status})`
        );
        console.log(
          "Для создания функции используйте SQL-консоль в Supabase Studio:"
        );
        console.log(sqlQuery);
      } else {
        console.log("SQL-запрос успешно выполнен через админ API");
      }
    } else {
      const result = await response.json();
      console.log("Функция restore_article успешно создана:", result);
    }
  } catch (err) {
    console.error("Непредвиденная ошибка:", err);
    console.log(
      "Для создания функции вручную используйте SQL-консоль в Supabase Studio:"
    );
    console.log(sqlQuery);
  }
}

// Запускаем создание функции
createFunction()
  .then(() => console.log("Скрипт завершен"))
  .catch((err) => console.error("Ошибка при выполнении скрипта:", err));
