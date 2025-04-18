-- Добавление колонки is_published в таблицу articles
ALTER TABLE articles ADD COLUMN IF NOT EXISTS is_published boolean DEFAULT true; 