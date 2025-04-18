-- Добавляем поле is_published в таблицу articles
ALTER TABLE articles ADD COLUMN is_published BOOLEAN DEFAULT TRUE;

-- Обновляем существующие записи, устанавливая is_published в TRUE
UPDATE articles SET is_published = TRUE WHERE is_published IS NULL;

-- Комментарий к колонке
COMMENT ON COLUMN articles.is_published IS 'Флаг, указывающий опубликована ли статья'; 