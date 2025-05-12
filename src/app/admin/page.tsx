"use client";

import { getAllArticles } from "@/lib/blogApi";
import { Article } from "@/lib/supabase";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AdminPage() {
  const [articlesCount, setArticlesCount] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Загрузка количества статей
        const articles = await getAllArticles();
        setArticlesCount(articles.length);
      } catch (err) {
        console.error(err);
        setError("Ошибка при загрузке данных");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">
        Обзор
      </h1>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      {loading ? (
        <div className="flex items-center">
          <div className="inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent"></div>
          <p className="ml-2 text-gray-600 dark:text-gray-400">
            Загрузка данных...
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
              Блог
            </h2>
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
                <svg
                  className="w-6 h-6 text-blue-600 dark:text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18.75c0 1.036.84 1.875 1.875 1.875h15.75c1.035 0 1.875-.84 1.875-1.875V4.875C21.75 3.839 20.91 3 19.875 3H4.125zM12 18.75a.75.75 0 01-.75-.75V6a.75.75 0 011.5 0v12a.75.75 0 01-.75.75z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Всего статей
                </p>
                <p className="text-2xl font-bold text-gray-800 dark:text-white">
                  {articlesCount}
                </p>
              </div>
            </div>
            <Link
              href="/admin/blog"
              className="text-blue-600 dark:text-blue-400 hover:underline block text-sm"
            >
              Управление статьями →
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
