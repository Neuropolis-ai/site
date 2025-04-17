# Исправление ошибки в контактной форме

## Описание проблемы

При отправке формы обратной связи на сайте появлялась ошибка:

> Произошла ошибка при отправке. Пожалуйста, попробуйте позже.

## Причины ошибки

Анализ кода показал следующие возможные причины:

1. **Отсутствие таблицы `contacts` в базе данных Supabase**: Код пытался вставить данные в несуществующую таблицу.
2. **Проблемы с настройками Telegram-бота**: Неправильный токен бота или ID чата могли привести к ошибке при попытке отправить уведомление.

## Внесенные исправления

### 1. Создание таблицы contacts

Был добавлен SQL-скрипт для создания необходимой таблицы: `supabase-contacts.sql`

Также добавлен автоматический скрипт для создания таблицы через API Supabase: `scripts/create-contacts-table.js`

### 2. Улучшение обработки ошибок в компоненте

В файле `src/components/Contact/Contact.tsx` были внесены следующие изменения:

- Улучшена обработка и логирование ошибок
- Добавлена проверка соединения с Supabase перед отправкой данных
- Изменена функция отправки сообщения в Telegram для более детального логирования ошибок
- Добавлена обработка ситуации, когда данные успешно сохранены, но уведомление в Telegram не отправлено

### 3. Инструмент для проверки настроек Telegram

Добавлен скрипт для проверки токена бота и ID чата: `scripts/check-telegram-settings.js`

## Дополнительные проблемы и их решения

### Ошибка Row-Level Security (RLS)

При тестировании могла возникнуть ошибка:

> Ошибка сохранения данных: new row violates row-level security policy for table "contacts"

Эта ошибка указывает на проблему с политиками безопасности в Supabase, которые запрещают анонимным пользователям (неавторизованным) вставлять данные в таблицу.

#### Решение:

Выполните следующий SQL-запрос в интерфейсе Supabase (SQL Editor):

```sql
-- Исправление политик RLS для таблицы contacts

-- Сначала удалим существующие политики
DROP POLICY IF EXISTS "Public access to contacts" ON contacts;
DROP POLICY IF EXISTS "Public users can create contacts" ON contacts;
DROP POLICY IF EXISTS "Authenticated users can update contacts" ON contacts;
DROP POLICY IF EXISTS "Authenticated users can delete contacts" ON contacts;

-- Включаем Row Level Security и принудительно применяем для всех пользователей
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE contacts FORCE ROW LEVEL SECURITY;

-- Создаем обновленные политики безопасности
CREATE POLICY "Public access to contacts"
ON contacts FOR SELECT
TO anon, authenticated
USING (true);

CREATE POLICY "Public users can create contacts"
ON contacts FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE POLICY "Authenticated users can update contacts"
ON contacts FOR UPDATE
TO authenticated
USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can delete contacts"
ON contacts FOR DELETE
TO authenticated
USING (auth.role() = 'authenticated');

-- Предоставляем явные разрешения
GRANT SELECT, INSERT ON contacts TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON contacts TO authenticated;
```

Этот запрос явно разрешает анонимным пользователям вставлять данные в таблицу `contacts`, что решает проблему с отправкой формы.

## Инструкция по применению исправлений

1. **Создание таблицы contacts в Supabase**:

   **_Вариант 1 (рекомендуется):_**
   Выполните SQL-запрос в интерфейсе Supabase (SQL Editor):

   ```sql
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

   **_Вариант 2:_**
   Если у вас настроена функция `pgexec` в Supabase, можно использовать скрипт:

   ```
   npm run setup-contacts
   ```

2. **Проверка настроек Telegram**:

   ```
   npm run check-telegram
   ```

3. **Если настройки Telegram не работают**:

   Обновите значения в файле `.env` или `.env.local`:

   ```
   NEXT_PUBLIC_TELEGRAM_BOT_TOKEN=ваш_токен_бота
   NEXT_PUBLIC_TELEGRAM_CHAT_ID=ваш_id_чата
   ```

   Затем перезапустите проверку: `npm run check-telegram`

4. **После внесения всех изменений**:

   Перезапустите сервер разработки:

   ```
   npm run dev
   ```

   Или создайте новую сборку для продакшена:

   ```
   npm run build
   npm run start
   ```

## Дополнительная документация

Подробную информацию о настройке базы данных Supabase смотрите в файле `SUPABASE_SETUP.md`.
