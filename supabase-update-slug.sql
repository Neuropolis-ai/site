-- Добавляем поле slug в таблицу articles
ALTER TABLE articles ADD COLUMN slug TEXT;

-- Создаем уникальный индекс для slug
CREATE UNIQUE INDEX idx_articles_slug ON articles(slug);

-- Обновляем slug для существующих записей
UPDATE articles 
SET slug = 'ai-v-marketinge-5-strategij' 
WHERE title = 'Искусственный интеллект в маркетинге: 5 стратегий, которые нужно знать';

UPDATE articles 
SET slug = 'avtonomnye-ii-agenty-budushhee-avtomatizacii-biznesa' 
WHERE title = 'Автономные ИИ-агенты: будущее автоматизации бизнеса';

-- Делаем поле slug обязательным для будущих записей
ALTER TABLE articles ALTER COLUMN slug SET NOT NULL; 