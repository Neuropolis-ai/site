-- Создаем хранимую процедуру для восстановления статей
CREATE OR REPLACE FUNCTION restore_article(article_id UUID)
RETURNS VOID AS $$
DECLARE
  column_exists BOOLEAN;
BEGIN
  -- Проверяем наличие колонки is_published
  SELECT EXISTS (
    SELECT 1 
    FROM information_schema.columns 
    WHERE table_name = 'articles' AND column_name = 'is_published'
  ) INTO column_exists;
  
  -- Если колонка существует, устанавливаем is_published = true
  IF column_exists THEN
    UPDATE articles
    SET is_published = TRUE
    WHERE id = article_id;
    RAISE NOTICE 'Статья % восстановлена (установлено is_published = true)', article_id;
  ELSE
    -- Если колонки нет, обновляем timestamp
    RAISE NOTICE 'Колонка is_published не существует, обновляем timestamp для статьи %', article_id;
    UPDATE articles
    SET updated_at = NOW()
    WHERE id = article_id;
  END IF;
END;
$$ LANGUAGE plpgsql; 