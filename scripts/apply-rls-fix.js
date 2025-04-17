// Скрипт для применения исправления RLS через Supabase API
require("dotenv").config();
const fs = require("fs");
const path = require("path");
const { createClient } = require("@supabase/supabase-js");

// Получаем данные для подключения из .env файла
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Ошибка: отсутствуют переменные окружения для Supabase.");
  console.error("Убедитесь, что в файле .env или .env.local настроены:");
  console.error("NEXT_PUBLIC_SUPABASE_URL и NEXT_PUBLIC_SUPABASE_ANON_KEY");
  process.exit(1);
}

// Создаем клиент Supabase
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Читаем SQL-файл с исправлениями
const fixSqlPath = path.join(__dirname, "..", "fix-contacts-rls.sql");
let fixSql;

try {
  fixSql = fs.readFileSync(fixSqlPath, "utf8");
  console.log("SQL-скрипт для исправления RLS загружен успешно");
} catch (error) {
  console.error("Ошибка при чтении SQL-файла:", error);
  process.exit(1);
}

// Функция для выполнения SQL-скрипта через REST API
// (это альтернативный метод, если rpc вызов не работает)
async function executeRlsFix() {
  console.log("Применение исправления RLS для таблицы contacts...");

  try {
    // Сначала пробуем выполнить через rpc (предпочтительный метод)
    console.log("Попытка выполнения через RPC...");
    try {
      const { error } = await supabase.rpc("pgexec", { command: fixSql });

      if (!error) {
        console.log("✅ Исправление RLS успешно применено через RPC!");
        return;
      }

      console.log("RPC метод недоступен, пробуем альтернативный подход...");
    } catch (rpcError) {
      console.log("RPC метод вызвал ошибку:", rpcError);
    }

    // Если RPC не сработал, выводим инструкции для ручного исправления
    console.log("\n✋ Автоматическое применение не удалось.");
    console.log("\n📋 Пожалуйста, выполните следующие шаги вручную:");
    console.log("1. Войдите в панель управления Supabase для вашего проекта");
    console.log("2. Перейдите в раздел 'SQL Editor'");
    console.log("3. Создайте новый запрос");
    console.log("4. Скопируйте и вставьте следующий SQL-код:");
    console.log("\n" + "```sql" + "\n" + fixSql + "\n" + "```" + "\n");
    console.log("5. Нажмите кнопку 'Run' для выполнения запроса");

    // Выводим содержимое файла fix-contacts-rls.sql в консоль
    console.log("\nСодержимое файла fix-contacts-rls.sql:");
    console.log(fixSql);
  } catch (error) {
    console.error("Ошибка при применении исправления RLS:", error);
    process.exit(1);
  }
}

executeRlsFix();
