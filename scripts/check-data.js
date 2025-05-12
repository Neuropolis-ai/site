#!/usr/bin/env node

// Скрипт для проверки данных в Supabase
const { createClient } = require("@supabase/supabase-js");
require("dotenv").config({ path: ".env.local" });

// Проверяем наличие переменных окружения
if (
  !process.env.NEXT_PUBLIC_SUPABASE_URL ||
  !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
) {
  console.error(
    "Ошибка: Отсутствуют переменные окружения NEXT_PUBLIC_SUPABASE_URL или NEXT_PUBLIC_SUPABASE_ANON_KEY"
  );
  process.exit(1);
}

// Создаем клиент Supabase
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

async function checkData() {
  try {
    // Проверяем категории
    console.log("\n=== Проверка таблицы blog_categories ===");
    const { data: categories, error: categoriesError } = await supabase
      .from("blog_categories")
      .select("*");

    if (categoriesError) {
      throw categoriesError;
    }

    console.log(`Найдено ${categories.length} категорий:`);
    categories.forEach((category) => {
      console.log(
        `- ID: ${category.id}, Название: ${category.name}, Slug: ${category.slug}`
      );
    });

    // Проверяем статьи
    console.log("\n=== Проверка таблицы blog_posts ===");
    const { data: posts, error: postsError } = await supabase.from("blog_posts")
      .select(`
        *,
        blog_categories(id, name, slug)
      `);

    if (postsError) {
      throw postsError;
    }

    console.log(`Найдено ${posts.length} статей:`);
    posts.forEach((post) => {
      console.log(
        `- ID: ${post.id}, Заголовок: ${post.title}, Категория: ${post.blog_categories.name}, Slug: ${post.slug}`
      );
      console.log(
        `  Дата: ${post.created_at}, Опубликовано: ${
          post.published ? "Да" : "Нет"
        }`
      );
      console.log(
        `  Содержание (первые 50 символов): ${post.content.substring(0, 50)}...`
      );
      console.log("---");
    });
  } catch (error) {
    console.error("Ошибка при проверке данных:", error);
  }
}

// Запускаем проверку
checkData().catch(console.error);
