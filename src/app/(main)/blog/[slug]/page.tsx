import { getArticleBySlug, getAllArticles } from "@/lib/blogApi";
import { Metadata } from "next";
import React from "react";
import Link from "next/link";
import BlogImage from "@/components/BlogImage";

// Отключаем кеширование
export const dynamic = "force-dynamic";
export const revalidate = 0;

// Генерация метаданных на основе статьи
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug);

  if (!article) {
    return {
      title: "Статья не найдена | Neuropolis.ai",
      description: "Запрашиваемая статья не найдена",
    };
  }

  return {
    title: `${article.title} | Neuropolis.ai`,
    description: article.description || article.title,
    keywords: "искусственный интеллект, автоматизация, цифровая трансформация",
    openGraph: article.image_url
      ? {
          images: [
            {
              url: article.image_url,
              alt: article.title,
            },
          ],
        }
      : undefined,
  };
}

function formatDate(dateString: string) {
  return new Intl.DateTimeFormat("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(dateString));
}

// Функция для извлечения домена из URL
function extractDomain(url: string): string {
  try {
    const domain = new URL(url);
    return domain.hostname;
  } catch (e) {
    return url;
  }
}

// Функция для удаления маркеров кода из текста
function cleanContentMarkups(content: string): string {
  // Удаляем блоки ```html и ``` с помощью регулярных выражений
  const cleanedContent = content
    .replace(/```html/g, "")
    .replace(/```/g, "")
    .replace(/<code><\/code>/g, "");

  return cleanedContent;
}

// Функция для получения соседних статей
async function getAdjacentArticles(currentSlug: string) {
  const allArticles = await getAllArticles();
  const currentIndex = allArticles.findIndex(
    (article) => article.slug === currentSlug
  );

  if (currentIndex === -1) return { prev: null, next: null };

  const prev = currentIndex > 0 ? allArticles[currentIndex - 1] : null;
  const next =
    currentIndex < allArticles.length - 1
      ? allArticles[currentIndex + 1]
      : null;

  return { prev, next };
}

export default async function Page({
  params,
}: {
  params: { slug: string };
}): Promise<React.ReactNode> {
  try {
    const article = await getArticleBySlug(params.slug);

    if (!article) {
      return (
        <div className="min-h-screen pt-[120px] pb-20 bg-white dark:bg-black">
          <div className="container mx-auto max-w-4xl px-4">
            <nav className="mb-8">
              <Link
                href="/blog"
                className="flex items-center text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  ></path>
                </svg>
                Назад к блогу
              </Link>
            </nav>

            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                Статья не найдена
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Извините, статья с указанным URL не существует или была удалена.
              </p>
              <Link
                href="/blog"
                className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                Вернуться к статьям
              </Link>
            </div>
          </div>
        </div>
      );
    }

    // Очищаем текст статьи от маркеров кода
    const cleanedContent = cleanContentMarkups(article.content);

    // Получаем соседние статьи
    const { prev, next } = await getAdjacentArticles(params.slug);

    return (
      <div className="min-h-screen pt-[120px] pb-20 bg-white dark:bg-black">
        <div className="container mx-auto max-w-4xl px-4">
          <nav className="mb-8">
            <Link
              href="/blog"
              className="flex items-center text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
              Назад к блогу
            </Link>
          </nav>

          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white text-center leading-relaxed">
              {article.title}
            </h1>
          </div>

          {article.image_url && (
            <div className="relative w-full mb-8 rounded-xl overflow-hidden aspect-[16/9] sm:h-[400px]">
              <BlogImage
                src={article.image_url}
                alt={article.title}
                fill
                className="object-cover"
                unoptimized={true}
              />
            </div>
          )}

          <div
            className="prose prose-base max-w-none dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: cleanedContent }}
          />

          {/* Информация о дате и источнике внизу статьи */}
          <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-800">
            <div className="article-date text-gray-700 dark:text-gray-400">
              {formatDate(article.published_at)}
            </div>

            {article.source && (
              <div className="article-source text-gray-700 dark:text-gray-400">
                <span className="font-medium">Источник:</span>{" "}
                {article.source.startsWith("http") ? (
                  <a
                    href={article.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="article-source-link text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {extractDomain(article.source)}
                  </a>
                ) : (
                  article.source
                )}
              </div>
            )}
          </div>

          {/* Навигация между статьями */}
          <div className="mt-10 flex justify-between">
            {prev ? (
              <Link
                href={`/blog/${prev.slug}`}
                className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  ></path>
                </svg>
                Предыдущая статья
              </Link>
            ) : (
              <div></div>
            )}

            {next ? (
              <Link
                href={`/blog/${next.slug}`}
                className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                Следующая статья
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </Link>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Ошибка при загрузке статьи:", error);
    return (
      <div className="min-h-screen pt-[120px] pb-20 bg-white dark:bg-black">
        <div className="container mx-auto max-w-4xl px-4">
          <nav className="mb-8">
            <Link
              href="/blog"
              className="flex items-center text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
              Назад к блогу
            </Link>
          </nav>

          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Ошибка при загрузке статьи
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Произошла ошибка при загрузке статьи. Пожалуйста, попробуйте
              позже.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
