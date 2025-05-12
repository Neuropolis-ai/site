// Скрипт для создания таблицы contacts в Supabase
require("dotenv").config();
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

// SQL-запрос для создания таблицы contacts
const createTableSQL = `
-- Активируем расширение для работы с UUID, если оно еще не активировано
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Удаляем таблицу, если она существует
DROP TABLE IF EXISTS contacts;

-- Создаем таблицу для контактных форм
CREATE TABLE contacts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Включаем Row Level Security
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Удаляем существующие политики, если они есть
DROP POLICY IF EXISTS "Public access to contacts" ON contacts;
DROP POLICY IF EXISTS "Public users can create contacts" ON contacts;
DROP POLICY IF EXISTS "Authenticated users can update contacts" ON contacts;
DROP POLICY IF EXISTS "Authenticated users can delete contacts" ON contacts;

-- Создаем политики безопасности
CREATE POLICY "Public access to contacts" 
ON contacts FOR SELECT USING (true);

CREATE POLICY "Public users can create contacts" 
ON contacts FOR INSERT WITH CHECK (true);

CREATE POLICY "Authenticated users can update contacts" 
ON contacts FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can delete contacts" 
ON contacts FOR DELETE USING (auth.role() = 'authenticated');
`;

async function createContactsTable() {
  console.log("Создание таблицы contacts в Supabase...");

  try {
    const { error } = await supabase.rpc("pgexec", { command: createTableSQL });

    if (error) {
      console.error("Ошибка при создании таблицы:", error);
      process.exit(1);
    }

    console.log("Таблица contacts успешно создана!");
    console.log("Теперь форма обратной связи должна работать корректно.");
  } catch (err) {
    console.error("Непредвиденная ошибка:", err);
    process.exit(1);
  }
}

createContactsTable();
