# Инструкция по настройке Supabase для блога

## 1. Создание проекта Supabase

1. Зарегистрируйтесь на [supabase.com](https://supabase.com) или войдите в существующий аккаунт
2. Создайте новый проект
3. Запишите URL проекта и anon ключ (они потребуются для подключения)

## 2. Создание таблицы для статей блога

Выполните следующий SQL-запрос в разделе SQL Editor вашего проекта:

```sql
-- Активируем расширение для работы с UUID
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Создаем таблицу для статей
CREATE TABLE articles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  source TEXT,
  published_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Добавляем пример статьи для тестирования
INSERT INTO articles (title, content, description, image_url, source, published_at)
VALUES (
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
```

## 3. Настройка политик доступа

Выполните следующие SQL-запросы для настройки политик доступа:

```sql
-- Включаем Row Level Security
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;

-- Разрешаем чтение всем пользователям
CREATE POLICY "Публичный доступ для чтения статей"
ON articles FOR SELECT USING (true);

-- Для защиты операций записи требуем аутентификацию
CREATE POLICY "Только авторизованные пользователи могут создавать/изменять статьи"
ON articles FOR INSERT USING (auth.role() = 'authenticated');

CREATE POLICY "Только авторизованные пользователи могут обновлять статьи"
ON articles FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "Только авторизованные пользователи могут удалять статьи"
ON articles FOR DELETE USING (auth.role() = 'authenticated');
```

## 4. Настройка переменных окружения

1. Добавьте в файл `.env.local` следующие переменные:

```
NEXT_PUBLIC_SUPABASE_URL=https://ваш-проект.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=ваш-anon-ключ
```

2. Замените значения на ваши реальные данные из проекта Supabase

## 5. Дополнительные настройки для администрирования

Для управления контентом блога вы можете:

1. Использовать Supabase Studio для ручного добавления и редактирования статей
2. Создать простую админ-панель в вашем приложении (требуется аутентификация)
3. Интегрировать CMS, такую как Strapi или Contentful, вместе с Supabase

## 6. Запуск проекта

После настройки запустите проект:

```
npm run dev
```

Ваш блог теперь должен отображать данные из Supabase!

## 7. Настройка таблицы для контактной формы

Для работы контактной формы на сайте необходимо создать таблицу `contacts`. Выполните следующий SQL запрос:

```sql
-- Активируем расширение для работы с UUID, если оно еще не активировано
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

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

-- Создаем политики безопасности
CREATE POLICY "Public access to contacts"
ON contacts FOR SELECT USING (true);

CREATE POLICY "Public users can create contacts"
ON contacts FOR INSERT WITH CHECK (true);

CREATE POLICY "Authenticated users can update contacts"
ON contacts FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can delete contacts"
ON contacts FOR DELETE USING (auth.role() = 'authenticated');
```

## 8. Настройка переменных окружения для Telegram

Для отправки уведомлений о новых заявках в Telegram, добавьте следующие переменные в файл `.env.local`:

```
NEXT_PUBLIC_TELEGRAM_BOT_TOKEN=ваш_токен_бота
NEXT_PUBLIC_TELEGRAM_CHAT_ID=ваш_id_чата
```

1. Создайте бота через [@BotFather](https://t.me/BotFather) в Telegram и получите токен.
2. Создайте чат или группу, добавьте туда своего бота.
3. Получите ID чата, отправив сообщение в чат и затем проверив его через API: `https://api.telegram.org/bot{токен}/getUpdates`
