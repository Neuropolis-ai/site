-- Создаем хранимую процедуру для восстановления статей
CREATE OR REPLACE FUNCTION restore_article(article_id UUID)
RETURNS VOID AS $$
BEGIN
  -- Обновляем запись статьи без использования колонки is_published
  -- Вместо этого обновляем дату обновления, чтобы создать эффект "обновления"
  UPDATE articles
  SET updated_at = NOW()
  WHERE id = article_id;
END;
$$ LANGUAGE plpgsql; 