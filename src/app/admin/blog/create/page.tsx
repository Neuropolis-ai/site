"use client";

import ArticleForm from "@/components/admin/ArticleForm";
import { createArticle } from "@/lib/blogApi";
import { Article } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateArticlePage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (
    articleData: Omit<Article, "id" | "created_at">
  ) => {
    try {
      setIsSubmitting(true);
      setError(null);

      const result = await createArticle(articleData);

      if (result) {
        router.push("/admin/blog");
      } else {
        setError("Не удалось создать статью. Пожалуйста, попробуйте снова.");
      }
    } catch (err) {
      console.error(err);
      setError("Произошла ошибка при создании статьи.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen p-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">
          Создание новой статьи
        </h1>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
          <ArticleForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
        </div>
      </div>
    </div>
  );
}
