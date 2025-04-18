"use client";

import { getAllArticles, deleteArticle, updateArticle } from "@/lib/blogApi";
import { Article } from "@/lib/supabase";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { supabase } from "@/lib/supabase";

export default function AdminBlogPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      setLoading(true);
      const data = await getAllArticles();
      setArticles(data);
    } catch (err) {
      setError("Ошибка при загрузке статей");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Вы уверены, что хотите удалить эту статью?")) {
      try {
        const success = await deleteArticle(id);
        if (success) {
          setArticles(
            articles.map((article) =>
              article.id === id ? { ...article, is_published: false } : article
            )
          );
        } else {
          setError("Не удалось удалить статью");
        }
      } catch (err) {
        setError("Ошибка при удалении статьи");
        console.error(err);
      }
    }
  };

  const handleRestore = async (id: string) => {
    try {
      console.log("Начинаем восстановление статьи с ID:", id);

      // Сначала получаем данные статьи
      const { data: articleData, error: fetchError } = await supabase
        .from("articles")
        .select("*")
        .eq("id", id)
        .single();

      if (fetchError) {
        console.error("Ошибка при получении данных статьи:", fetchError);
        setError(`Не удалось получить данные статьи: ${fetchError.message}`);
        return;
      }

      console.log("Получены данные статьи:", articleData);

      // Комплексное решение для восстановления
      try {
        let updateSuccess = false;

        // Сначала пробуем прямой SQL запрос через RPC
        try {
          console.log("Пробуем восстановить через RPC...");
          const { error: rpcError } = await supabase.rpc("restore_article", {
            article_id: id,
          });

          if (!rpcError) {
            console.log("Успешное восстановление через RPC");
            updateSuccess = true;
          } else {
            console.warn("RPC метод не сработал:", rpcError);
          }
        } catch (rpcErr) {
          console.warn("Ошибка при вызове RPC:", rpcErr);
        }

        // Если RPC не сработал, пробуем прямое обновление
        if (!updateSuccess) {
          try {
            console.log("Пробуем прямое обновление is_published...");
            // Указываем явно SQL для обновления через Postgres
            const { error: sqlError } = await supabase.rpc("exec_sql", {
              sql_query: `UPDATE articles SET is_published = TRUE WHERE id = '${id}'`,
            });

            if (!sqlError) {
              console.log("Успешное обновление через SQL");
              updateSuccess = true;
            } else {
              console.warn("SQL запрос не сработал:", sqlError);
            }
          } catch (sqlErr) {
            console.warn("Ошибка при выполнении SQL:", sqlErr);
          }
        }

        // Если всё ещё не получилось, пробуем обновить через API
        if (!updateSuccess) {
          console.log("Пробуем обновление через API...");

          // Обновляем основные поля, чтобы обновить запись
          const { error: updateError } = await supabase
            .from("articles")
            .update({
              title: articleData.title.trim(),
              updated_at: new Date().toISOString(),
            })
            .eq("id", id);

          if (!updateError) {
            console.log("Успешное обновление через API");
            updateSuccess = true;
          } else {
            console.error("Ошибка при обновлении через API:", updateError);
            setError(`Ошибка обновления: ${updateError.message}`);
            return;
          }
        }

        // Обновляем интерфейс
        setArticles(
          articles.map((article) =>
            article.id === id
              ? {
                  ...articleData,
                  is_published: true,
                  updated_at: new Date().toISOString(),
                }
              : article
          )
        );
        console.log("Статья успешно восстановлена в UI");
      } catch (error) {
        console.error("Непредвиденная ошибка при обновлении:", error);
        setError(
          `Непредвиденная ошибка: ${
            error instanceof Error ? error.message : "Неизвестная ошибка"
          }`
        );
      }
    } catch (err) {
      console.error("Ошибка при восстановлении статьи:", err);
      setError(
        `Ошибка при восстановлении статьи: ${
          err instanceof Error ? err.message : "Неизвестная ошибка"
        }`
      );
    }
  };

  const formatDate = (dateString: string) => {
    return new Intl.DateTimeFormat("ru-RU", {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    }).format(new Date(dateString));
  };

  return (
    <div className="min-h-screen p-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            Управление статьями
          </h1>
          <Link
            href="/admin/blog/create"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Создать статью
          </Link>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        {loading ? (
          <div className="text-center py-8">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent"></div>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Загрузка статей...
            </p>
          </div>
        ) : articles.length > 0 ? (
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Изображение
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Название
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Дата публикации
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Статус
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Действия
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {articles.map((article) => (
                  <tr
                    key={article.id}
                    className={
                      !article.is_published
                        ? "bg-gray-100 dark:bg-gray-900"
                        : ""
                    }
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="relative h-12 w-12 rounded overflow-hidden">
                        <Image
                          src={
                            article.image_url ||
                            "/assets/images/placeholder.jpg"
                          }
                          alt={article.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        {article.title}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 truncate max-w-xs">
                        {article.description}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {formatDate(article.published_at)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {article.is_published ? (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100">
                          Опубликована
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100">
                          Скрыта
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <div className="flex space-x-2">
                        {article.is_published && (
                          <>
                            <Link
                              href={`/blog/${article.slug}`}
                              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                              target="_blank"
                            >
                              Просмотр
                            </Link>
                            <Link
                              href={`/admin/blog/edit/${article.id}`}
                              className="text-yellow-600 hover:text-yellow-800 dark:text-yellow-400 dark:hover:text-yellow-300"
                            >
                              Редактировать
                            </Link>
                            <button
                              onClick={() => handleDelete(article.id)}
                              className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
                            >
                              Скрыть
                            </button>
                          </>
                        )}

                        {!article.is_published && (
                          <>
                            <Link
                              href={`/admin/blog/edit/${article.id}`}
                              className="text-yellow-600 hover:text-yellow-800 dark:text-yellow-400 dark:hover:text-yellow-300"
                            >
                              Редактировать
                            </Link>
                            <button
                              onClick={() => handleRestore(article.id)}
                              className="text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300"
                            >
                              Восстановить
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              Нет статей. Создайте первую статью!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
