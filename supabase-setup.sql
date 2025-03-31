-- Активируем расширение для работы с UUID
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Удаляем таблицу, если она существует
DROP TABLE IF EXISTS articles;

-- Создаем таблицу для статей
CREATE TABLE articles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  source TEXT,
  published_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Создаем индекс для быстрого поиска по slug
CREATE INDEX articles_slug_idx ON articles (slug);

-- Добавляем пример статьи для тестирования
INSERT INTO articles (slug, title, content, description, image_url, source, published_at)
VALUES (
  'ai-marketing-strategies-2025',
  'Искусственный интеллект в маркетинге: 5 стратегий, которые нужно знать',
  '<p>Искусственный интеллект трансформирует маркетинг с невиданной ранее скоростью. От персонализированного взаимодействия с клиентами до принятия решений на основе данных, технологии ИИ предоставляют маркетологам мощные новые инструменты для связи с аудиторией и достижения результатов.</p>

<h2>1. Гиперперсонализация в масштабе</h2>
<p>ИИ позволяет маркетологам анализировать огромные объемы данных о клиентах для предоставления персонализированного опыта. В отличие от традиционной сегментации, ИИ может обрабатывать поведенческие данные, историю покупок, модели просмотра и демографическую информацию для создания действительно индивидуальных маркетинговых сообщений.</p>
<p>Благодаря внедрению персонализации на основе ИИ компании зафиксировали увеличение коэффициента конверсии до 30% и значительное улучшение показателей удовлетворенности клиентов.</p>',
  'Узнайте, как искусственный интеллект трансформирует маркетинговые стратегии и как бизнес может использовать эти технологии для достижения лучших результатов.',
  'https://framerusercontent.com/images/62DPwiIyI0enXXQUX5ewQevWvCU.jpg',
  'Исследование AI Marketing Trends 2025',
  '2025-03-10T10:00:00Z'
);

-- Добавляем еще статью для примера
INSERT INTO articles (slug, title, content, description, image_url, source, published_at)
VALUES (
  'autonomous-ai-agents-future',
  'Автономные ИИ-агенты: будущее автоматизации бизнеса',
  '<p>Автономные ИИ-агенты представляют собой следующий шаг в эволюции искусственного интеллекта для бизнеса. В отличие от традиционных инструментов автоматизации, эти системы способны самостоятельно выполнять сложные последовательности действий, адаптироваться к изменяющимся условиям и принимать обоснованные решения.</p>

<h2>Что такое автономные ИИ-агенты?</h2>
<p>Автономные ИИ-агенты — это программные системы, которые могут воспринимать среду, анализировать данные, планировать действия и выполнять задачи с минимальным вмешательством человека. Они объединяют в себе достижения машинного обучения, обработки естественного языка, планирования и других областей искусственного интеллекта.</p>

<h2>Преимущества для бизнеса</h2>
<p>Внедрение автономных ИИ-агентов позволяет компаниям автоматизировать не только рутинные, но и более сложные процессы, требующие принятия решений. Это приводит к повышению эффективности, сокращению затрат и освобождению человеческих ресурсов для более творческих и стратегических задач.</p>',
  'Узнайте, как автономные ИИ-агенты меняют подход к автоматизации бизнес-процессов и открывают новые возможности для повышения эффективности.',
  'https://framerusercontent.com/images/eJcB6XjsCxKn8Tq45LWiERUtf0.png',
  'Исследование Autonomous AI Trends 2025',
  '2025-03-15T10:00:00Z'
);

-- Включаем Row Level Security
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;

-- Удаляем существующие политики, если они есть
DROP POLICY IF EXISTS "Public access to articles" ON articles;
DROP POLICY IF EXISTS "Authenticated users can create articles" ON articles;
DROP POLICY IF EXISTS "Authenticated users can update articles" ON articles;
DROP POLICY IF EXISTS "Authenticated users can delete articles" ON articles;

-- Создаем политики безопасности на английском
CREATE POLICY "Public access to articles" 
ON articles FOR SELECT USING (true);

CREATE POLICY "Authenticated users can create articles" 
ON articles FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update articles" 
ON articles FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can delete articles" 
ON articles FOR DELETE USING (auth.role() = 'authenticated');

-- Создаем функцию для поиска статей
CREATE OR REPLACE FUNCTION search_articles(search_query TEXT)
RETURNS SETOF articles AS $$
BEGIN
    RETURN QUERY
    SELECT *
    FROM articles
    WHERE 
        title ILIKE '%' || search_query || '%'
        OR content ILIKE '%' || search_query || '%'
        OR description ILIKE '%' || search_query || '%'
    ORDER BY published_at DESC;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER; 