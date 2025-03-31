# Neuropolis.ai

Современный веб-сайт для компании Neuropolis.ai, разработанный с использованием Next.js и Supabase.

## Технологии

- **Frontend:** Next.js 14.2, React, TypeScript
- **Стилизация:** Tailwind CSS
- **База данных:** Supabase (PostgreSQL)
- **Деплой:** Vercel

## Основные функции

- Адаптивный дизайн для всех устройств
- Темная/светлая тема
- Динамический блог с контентом из Supabase
- Анимации и интерактивные элементы
- SEO-оптимизация

## Установка и запуск

1. Клонируйте репозиторий:

```bash
git clone [url-репозитория]
cd noctis_ai
```

2. Установите зависимости:

```bash
npm install
```

3. Настройте переменные окружения:
   Создайте файл `.env.local` и добавьте:

```
NEXT_PUBLIC_SUPABASE_URL=ваш_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=ваш_ключ
```

4. Настройте базу данных:

- Создайте проект в [Supabase](https://supabase.com)
- Выполните SQL-скрипт из файла `supabase-setup.sql`

5. Запустите проект:

```bash
npm run dev
```

Сайт будет доступен по адресу: http://localhost:3000

## Структура проекта

```
src/
├── app/                    # Страницы приложения (Next.js App Router)
├── components/            # React компоненты
│   ├── Blog/             # Компоненты блога
│   ├── Features/         # Компоненты функций
│   ├── Header/           # Компоненты шапки
│   ├── Footer/           # Компоненты подвала
│   └── ui/              # Переиспользуемые UI компоненты
├── context/              # React контексты
├── lib/                  # Утилиты и API
│   ├── blogApi.ts       # API для работы с блогом
│   └── supabase.ts      # Конфигурация Supabase
└── style/               # Глобальные стили
```

## База данных

### Таблица articles

```sql
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
```

### Политики безопасности

- Публичный доступ для чтения
- Создание/редактирование/удаление только для авторизованных пользователей

## Деплой

Проект настроен для автоматического деплоя на Vercel при пуше в main ветку.

## Разработка

### Команды

- `npm run dev` - запуск в режиме разработки
- `npm run build` - сборка проекта
- `npm run start` - запуск собранного проекта
- `npm run lint` - проверка кода линтером

### Рекомендации по разработке

1. Используйте TypeScript для типизации
2. Следуйте принципам компонентного подхода
3. Используйте Tailwind CSS для стилизации
4. Следите за производительностью с помощью Next.js Analytics

## Известные проблемы

- ⚠️ Предупреждение о deprecated `images.domains` в Next.js конфигурации. Требуется обновление на `images.remotePatterns`

## Лицензия

MIT
