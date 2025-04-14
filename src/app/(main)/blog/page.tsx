"use client";

import { getPaginatedArticles } from "@/lib/blogApi";
import React, { useEffect, useState } from "react";
import BlogCard from "@/components/BlogCard";
import { Article } from "@/lib/supabase";
import Pagination from "@/components/ui/Pagination";

// Количество статей на странице
const ARTICLES_PER_PAGE = 9;

export default function BlogPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [totalArticles, setTotalArticles] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  // Вычисляем общее количество страниц
  const totalPages = Math.ceil(totalArticles / ARTICLES_PER_PAGE);

  // Загружаем статьи при изменении страницы
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        console.log(`Загрузка статей для страницы ${currentPage}...`);
        const { articles, total } = await getPaginatedArticles(
          currentPage,
          ARTICLES_PER_PAGE
        );

        setArticles(articles);
        setTotalArticles(total);
        console.log(`Загружено ${articles.length} статей из ${total}`);
      } catch (err) {
        console.error("Ошибка при получении статей:", err);
        setError(err instanceof Error ? err : new Error("Неизвестная ошибка"));
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [currentPage]);

  // Обработчик изменения страницы
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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

        {/* Загрузка */}
        {loading && (
          <div className="text-center py-10">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Загрузка статей...
            </p>
          </div>
        )}

        {/* Ошибка */}
        {error && !loading && (
          <div className="text-center">
            <p className="text-lg text-red-600 dark:text-red-400 mb-4">
              Произошла ошибка при загрузке статей
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Пожалуйста, попробуйте обновить страницу
            </p>
          </div>
        )}

        {/* Blog Posts Grid */}
        {!loading && !error && articles.length > 0 && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>

            {/* Пагинация */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </>
        )}

        {/* Пустой результат */}
        {!loading && !error && articles.length === 0 && (
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
