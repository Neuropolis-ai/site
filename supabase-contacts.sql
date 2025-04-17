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
DROP POLICY IF EXISTS "Authenticated users can create contacts" ON contacts;
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