const fs = require("fs");
const path = require("path");
const { parse } = require("csv-parse/sync");
const { createClient } = require("@supabase/supabase-js");
const slugify = require("slugify");

// Загрузка переменных окружения из .env.local файла
require("dotenv").config({ path: ".env.local" });

// Типы данных для категорий и постов
interface Category {
  id?: string;
  name: string;
  slug: string;
  created_at?: string;
}

interface Post {
  id?: string;
  title: string;
  content: string;
  category_id?: string;
  slug: string;
  created_at?: string;
  updated_at?: string;
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Отсутствуют переменные окружения для Supabase");
  process.exit(1);
}

// Создаем клиент с опцией auth.persistSession: false для обхода RLS
const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
});

// Пути к CSV файлам
const categoriesCsvPath = path.join(
  __dirname,
  "../export_All----------------------s_2025-03-22_05-43-01.csv"
);
const blogPostsCsvPath = path.join(
  __dirname,
  "../export_All-gh-blogs_2025-03-22_05-42-45.csv"
);

// Функция для создания уникального slug
function createUniqueSlug(title: string, existingSlugs: Set<string>): string {
  let slug = slugify(title, { lower: true, strict: true });
  let uniqueSlug = slug;
  let counter = 1;

  // Если slug уже существует, добавляем к нему число
  while (existingSlugs.has(uniqueSlug)) {
    uniqueSlug = `${slug}-${counter}`;
    counter++;
  }

  existingSlugs.add(uniqueSlug);
  return uniqueSlug;
}

// Функция для загрузки категорий из CSV
async function uploadCategories(): Promise<Category[] | null> {
  try {
    console.log("Начинаю загрузку категорий из CSV...");

    // Чтение и парсинг CSV-файла категорий
    const fileContent = fs.readFileSync(categoriesCsvPath, "utf8");
    const records = parse(fileContent, {
      columns: true,
      skip_empty_lines: true,
    });

    // Для отслеживания уникальных slug
    const existingSlugs = new Set<string>();

    // Преобразование CSV-записей в категории
    const categories: Category[] = records
      .filter((record: any) => record.Название) // Убедитесь, что поле Название существует
      .map((record: any) => {
        const slug = createUniqueSlug(record.Название, existingSlugs);
        return {
          name: record.Название,
          slug: slug,
          created_at: new Date().toISOString(),
        };
      });

    console.log(`Найдено ${categories.length} категорий в CSV файле`);

    // Если нет категорий в CSV, используем тестовые
    if (categories.length === 0) {
      console.log("Категории в CSV не найдены, использую тестовые данные...");
      const testCategories = [
        {
          name: "Искусственный интеллект",
          slug: "ai",
          created_at: new Date().toISOString(),
        },
        {
          name: "Разработка",
          slug: "development",
          created_at: new Date().toISOString(),
        },
        {
          name: "Бизнес",
          slug: "business",
          created_at: new Date().toISOString(),
        },
      ];

      // Загрузка тестовых категорий в Supabase
      const { data, error } = await supabase
        .from("blog_categories")
        .upsert(testCategories, { onConflict: "slug" })
        .select();

      if (error) {
        console.error("Ошибка при загрузке тестовых категорий:", error);
        return null;
      }

      console.log(`Успешно загружено ${data.length} тестовых категорий`);
      return data;
    }

    // Загрузка категорий из CSV в Supabase
    const { data, error } = await supabase
      .from("blog_categories")
      .upsert(categories, { onConflict: "slug" })
      .select();

    if (error) {
      console.error("Ошибка при загрузке категорий из CSV:", error);
      return null;
    }

    console.log(`Успешно загружено ${data.length} категорий из CSV`);
    return data;
  } catch (error) {
    console.error("Ошибка при обработке файла категорий:", error);
    return null;
  }
}

// Функция для загрузки статей из CSV
async function uploadBlogPosts(categories: Category[]): Promise<void> {
  try {
    console.log("Начинаю загрузку статей из CSV...");

    // Чтение и парсинг CSV-файла статей
    const fileContent = fs.readFileSync(blogPostsCsvPath, "utf8");
    const records = parse(fileContent, {
      columns: true,
      skip_empty_lines: true,
    });

    // Для отслеживания уникальных slug
    const existingSlugs = new Set<string>();

    // Преобразование CSV-записей в статьи
    const posts: Post[] = records
      .filter((record: any) => record["Заголовок (рус)"]) // Убедитесь, что поле Заголовок существует
      .map((record: any) => {
        const categoryName = record["Категория статьи"];
        const category = categories.find(
          (cat: Category) => cat.name === categoryName
        );
        const slug = createUniqueSlug(record["Заголовок (рус)"], existingSlugs);

        return {
          title: record["Заголовок (рус)"],
          content:
            record["Контент с парсера"] ||
            `Содержание статьи "${record["Заголовок (рус)"]}"...`,
          category_id: category?.id,
          slug: slug,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        };
      });

    console.log(`Найдено ${posts.length} статей в CSV файле`);

    // Если нет статей в CSV, используем тестовые
    if (posts.length === 0) {
      console.log("Статьи в CSV не найдены, использую тестовые данные...");
      const testPosts = [
        {
          title: "Будущее автоматизации",
          content:
            "Эта статья рассказывает о будущем автоматизации с использованием ИИ...",
          category_id: categories.find((cat: Category) => cat.slug === "ai")
            ?.id,
          slug: "future-of-automation",
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          title: "Как ИИ меняет бизнес",
          content:
            "В этой статье мы рассмотрим влияние искусственного интеллекта на современный бизнес...",
          category_id: categories.find(
            (cat: Category) => cat.slug === "business"
          )?.id,
          slug: "ai-business-impact",
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          title: "Оптимизация разработки с помощью ИИ",
          content:
            "Узнайте, как ИИ может повысить эффективность разработки программного обеспечения...",
          category_id: categories.find(
            (cat: Category) => cat.slug === "development"
          )?.id,
          slug: "ai-development-optimization",
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
      ];

      // Фильтруем тестовые посты без категории
      const filteredTestPosts = testPosts.filter((post) => post.category_id);

      // Загрузка тестовых статей в Supabase
      const { data, error } = await supabase
        .from("blog_posts")
        .upsert(filteredTestPosts, { onConflict: "slug" })
        .select();

      if (error) {
        console.error("Ошибка при загрузке тестовых статей:", error);
        return;
      }

      console.log(`Успешно загружено ${data.length} тестовых статей`);
      return;
    }

    // Фильтруем посты без категории
    const filteredPosts = posts.filter((post) => post.category_id);
    console.log(
      `Отфильтровано ${filteredPosts.length} статей с существующими категориями`
    );

    // Загружаем статьи маленькими группами, чтобы избежать ошибок
    const batchSize = 10;
    let successCount = 0;

    for (let i = 0; i < filteredPosts.length; i += batchSize) {
      const batch = filteredPosts.slice(i, i + batchSize);
      console.log(
        `Загрузка группы статей ${i / batchSize + 1}/${Math.ceil(
          filteredPosts.length / batchSize
        )}`
      );

      const { data, error } = await supabase
        .from("blog_posts")
        .upsert(batch, { onConflict: "slug" })
        .select();

      if (error) {
        console.error(
          `Ошибка при загрузке группы статей ${i / batchSize + 1}:`,
          error
        );
      } else {
        successCount += data.length;
        console.log(
          `Загружено ${data.length} статей в группе ${i / batchSize + 1}`
        );
      }
    }

    console.log(
      `Всего успешно загружено ${successCount} статей из ${filteredPosts.length}`
    );
  } catch (error) {
    console.error("Ошибка при обработке файла статей:", error);
  }
}

// Основная функция
async function main() {
  // Проверка соединения с Supabase
  console.log("Проверка соединения с Supabase...");
  try {
    const { data, error } = await supabase
      .from("blog_categories")
      .select("count");

    if (error) {
      console.error("Ошибка при подключении к Supabase:", error);
      process.exit(1);
    }

    console.log("Соединение с Supabase установлено успешно");

    // Загрузка категорий
    const categories = await uploadCategories();

    if (!categories) {
      console.error("Не удалось загрузить категории. Прерываю процесс.");
      process.exit(1);
    }

    // Загрузка статей
    await uploadBlogPosts(categories);

    console.log("Процесс загрузки данных завершен");
  } catch (error) {
    console.error("Необработанная ошибка:", error);
    process.exit(1);
  }
}

// Запуск основной функции
main().catch((error) => {
  console.error("Необработанная ошибка:", error);
  process.exit(1);
});
