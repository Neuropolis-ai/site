import { getAllArticles } from "@/lib/blogApi";
import { Article } from "@/lib/supabase";
import type { Metadata } from "next";
import Link from "next/link";
import React from "react";
import BlogImage from "@/components/BlogImage";

// Полностью отключаем кеширование страницы
export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title:
    "Блог Neuropolis.ai - Статьи об искусственном интеллекте и автоматизации",
  description:
    "Актуальные статьи о технологиях искусственного интеллекта, автоматизации бизнес-процессов и цифровой трансформации.",
  keywords:
    "блог, статьи, искусственный интеллект, автоматизация, цифровая трансформация",
};

function formatDate(dateString: string) {
  return new Intl.DateTimeFormat("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(dateString));
}

export default async function Page(): Promise<React.ReactNode> {
  let articles: Article[] = [];
  let error = null;

  try {
    articles = await getAllArticles();
    console.log("Получено статей на странице блога:", articles.length);
  } catch (err) {
    console.error("Ошибка при получении статей для страницы блога:", err);
    error = err;
  }

  return (
    <div className="min-h-screen pt-[120px] pb-20 bg-white dark:bg-black">
      <div className="container mx-auto max-w-[1280px] px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full text-sm mb-4 switch-box dark:bg-[#262626] dark:text-white bg-gray-100 text-gray-800">
            Блог
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
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
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400"
              >
                <div className="overflow-hidden group border border-gray-200 dark:border-[#262626] rounded-xl bg-gray-50 dark:bg-[#121212]">
                  <div className="p-[12px]">
                    <div className="relative p-[12px] h-[200px] w-full overflow-hidden rounded-[12px]">
                      <BlogImage
                        src={post.image_url || "/placeholder.jpg"}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-[1.06]"
                        unoptimized={true}
                      />
                    </div>
                  </div>
                  <div className="p-[12px]">
                    <h3 className="text-xl font-semibold mb-4 line-clamp-2 text-gray-800 dark:text-white">
                      {post.title}
                    </h3>
                    {post.description && (
                      <p className="text-sm mb-3 line-clamp-3 text-gray-600 dark:text-gray-400">
                        {post.description}
                      </p>
                    )}
                    <span className="line-a mb-2"></span>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {formatDate(post.published_at)}
                      </span>
                    </div>
                    {post.source && (
                      <div className="text-xs mt-2 text-gray-400 dark:text-gray-500">
                        Источник: {post.source}
                      </div>
                    )}
                  </div>
                </div>
              </Link>
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
