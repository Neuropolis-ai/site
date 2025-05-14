"use client";

import { getPaginatedArticles } from "@/lib/blogApi";
import React, { useEffect, useState, Suspense } from "react";
import BlogCard from "@/components/BlogCard";
import { Article } from "@/lib/supabase";
import Pagination from "@/components/ui/Pagination";
import PageTransition from "@/components/ui/PageTransition";
import SectionDivider from "@/components/ui/SectionDivider";

// Количество статей на странице
const ARTICLES_PER_PAGE = 9;

// Скелетон для загрузки карточек блога
const BlogCardSkeleton = () => (
  <div className="bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md animate-pulse">
    <div className="h-48 bg-gray-200 dark:bg-gray-700"></div>
    <div className="p-4">
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-4"></div>
      <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
    </div>
  </div>
);

// Компонент для отображения скелетона загрузки
const BlogListSkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {Array(ARTICLES_PER_PAGE)
      .fill(0)
      .map((_, index) => (
        <BlogCardSkeleton key={index} />
      ))}
  </div>
);

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
        const { articles, total } = await getPaginatedArticles(
          currentPage,
          ARTICLES_PER_PAGE
        );

        // Если статьи есть, но is_published отсутствует или false, явно фильтруем их
        const visibleArticles = articles.filter(
          (article) => article.is_published !== false
        );

        setArticles(visibleArticles);
        setTotalArticles(total);
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

  const renderBlogContent = () => {
    if (error) {
      return (
        <div className="text-center">
          <p className="text-lg text-red-600 dark:text-red-400 mb-4">
            Произошла ошибка при загрузке статей
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Пожалуйста, попробуйте обновить страницу
          </p>
        </div>
      );
    }

    if (!loading && articles.length === 0) {
      return (
        <div className="text-center">
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Статьи скоро появятся...
          </p>
        </div>
      );
    }

    return (
      <>
        <Suspense fallback={<BlogListSkeleton />}>
          {loading ? (
            <BlogListSkeleton />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </Suspense>

        {/* Пагинация */}
        {!loading && totalPages > 1 && (
          <div className="mt-16">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        )}
      </>
    );
  };

  return (
    <PageTransition>
      <div className="min-h-screen pt-32 pb-20 bg-white dark:bg-black">
        <div className="container mx-auto max-w-7xl px-4">
          {/* Page Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full text-sm mb-6 bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
              Блог Neuropolis
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 text-gray-900 dark:text-white leading-[1.1]">
              Наш Блог
            </h1>
            <p className="max-w-2xl mx-auto mb-8 text-lg text-gray-600 dark:text-gray-400 leading-[1.6]">
              Блог Neuropolis — ваш надежный источник информации о том, как ИИ
              меняет отрасли и способствует успеху бизнеса.
            </p>
          </div>

          {renderBlogContent()}
        </div>
        
        {/* Разделитель перед футером */}
        <div className="mt-20">
          <SectionDivider />
        </div>
      </div>
    </PageTransition>
  );
} 