import { getAllArticles } from "@/lib/blogApi";
import Link from "next/link";
import { Metadata } from "next";
import React from "react";
import BlogCard from "@/components/BlogCard";
import { Article } from "@/lib/supabase";

// Полностью отключаем кеширование страницы
export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Блог Neuropolis.ai - Инсайты в мире ИИ и автоматизации",
  description:
    "Блог об инновациях в области искусственного интеллекта, цифровой трансформации и автоматизации бизнес-процессов.",
  keywords:
    "ИИ, искусственный интеллект, машинное обучение, автоматизация, цифровая трансформация, технологические инновации, блог, нейросети",
};

export default async function BlogPage() {
  let articles: Article[] = [];
  let error = null;

  try {
    console.log("Получаем статьи для страницы блога...");
    articles = await getAllArticles();
    console.log(`Получено статей на странице блога: ${articles.length}`);
  } catch (err) {
    console.error("Ошибка при получении статей:", err);
    error = err;
  }

  return (
    <div className="min-h-screen pt-[120px] pb-20 bg-white dark:bg-black">
      <div className="container mx-auto max-w-[1280px] px-4">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Наш Блог
          </h1>
          <p className="max-w-2xl mx-auto mb-8 text-gray-600 dark:text-gray-400">
            Блог Neuropolis — ваш надежный источник информации о том, как ИИ
            меняет отрасли и способствует успеху бизнеса.
          </p>
        </div>

        {/* Blog Posts Grid */}
        {error ? (
          <div className="text-center">
            <p className="text-lg text-red-600 dark:text-red-400 mb-4">
              Произошла ошибка при загрузке статей
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Пожалуйста, попробуйте обновить страницу
            </p>
          </div>
        ) : articles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Статьи скоро появятся...
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
