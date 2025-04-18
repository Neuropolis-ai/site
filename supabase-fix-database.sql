-- Проверка наличия колонки is_published
DO $$
DECLARE
   column_exists BOOLEAN;
BEGIN
   SELECT EXISTS (
      SELECT 1
      FROM information_schema.columns
      WHERE table_name = 'articles'
      AND column_name = 'is_published'
   ) INTO column_exists;

   -- Если колонка не существует, добавляем её
   IF NOT column_exists THEN
      RAISE NOTICE 'Добавляем колонку is_published в таблицу articles';
      EXECUTE 'ALTER TABLE articles ADD COLUMN is_published BOOLEAN DEFAULT TRUE';
      
      -- Обновляем существующие записи
      EXECUTE 'UPDATE articles SET is_published = TRUE WHERE is_published IS NULL';
   ELSE
      RAISE NOTICE 'Колонка is_published уже существует';
   END IF;
END $$;

-- Обновляем все статьи, устанавливая is_published в true
UPDATE articles SET is_published = TRUE;

-- Выводим список статей после обновления
SELECT id, title, slug, is_published FROM articles;

-- Создаем хранимую процедуру для восстановления статей (на случай если колонки нет)
CREATE OR REPLACE FUNCTION restore_article(article_id UUID)
RETURNS VOID AS $$
BEGIN
  -- Пробуем обновить is_published, если колонка существует
  BEGIN
    EXECUTE 'UPDATE articles SET is_published = TRUE WHERE id = $1' USING article_id;
  EXCEPTION WHEN undefined_column THEN
    -- Если колонки нет, просто обновляем дату
    RAISE NOTICE 'Колонка is_published не существует, обновляем timestamp';
    UPDATE articles SET updated_at = NOW() WHERE id = article_id;
  END;
END;
$$ LANGUAGE plpgsql; 