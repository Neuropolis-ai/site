"use client";

import ArticleForm from "@/components/admin/ArticleForm";
import { getArticleBySlug, updateArticle } from "@/lib/blogApi";
import { Article } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function EditArticlePage({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();
  const { id } = params;

  const [article, setArticle] = useState<Article | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Получаем статью по ID
        const { data, error } = await supabase
          .from("articles")
          .select("*")
          .eq("id", id)
          .single();

        if (error) {
          throw error;
        }

        setArticle(data as Article);
      } catch (err) {
        console.error(err);
        setError("Не удалось загрузить статью");
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  const handleSubmit = async (
    articleData: Omit<Article, "id" | "created_at">
  ) => {
    try {
      setIsSubmitting(true);
      setError(null);

      const result = await updateArticle(id, articleData);

      if (result) {
        router.push("/admin/blog");
      } else {
        setError("Не удалось обновить статью. Пожалуйста, попробуйте снова.");
      }
    } catch (err) {
      console.error(err);
      setError("Произошла ошибка при обновлении статьи.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen p-8 bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent"></div>
        <p className="ml-2 text-gray-600 dark:text-gray-400">
          Загрузка статьи...
        </p>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen p-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">
            Редактирование статьи
          </h1>
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {error || "Статья не найдена"}
          </div>
          <button
            onClick={() => router.push("/admin/blog")}
            className="mt-4 px-4 py-2 bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white rounded hover:bg-gray-300 dark:hover:bg-gray-600"
          >
            Вернуться к списку статей
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">
          Редактирование статьи: {article.title}
        </h1>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
          <ArticleForm
            article={article}
            onSubmit={handleSubmit}
            isSubmitting={isSubmitting}
          />
        </div>
      </div>
    </div>
  );
}
