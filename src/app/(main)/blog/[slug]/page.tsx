import { getArticleBySlug } from "@/lib/blogApi";
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
  let cleanedContent = content
    .replace(/```html/g, "")
    .replace(/```/g, "")
    .replace(/<code><\/code>/g, "");

  return cleanedContent;
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
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              {article.title}
            </h1>
          </div>

          {article.image_url && (
            <div className="relative h-[400px] w-full mb-8 rounded-xl overflow-hidden">
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
            className="prose prose-lg max-w-none dark:prose-invert lg:prose-xl"
            dangerouslySetInnerHTML={{ __html: cleanedContent }}
          />

          {/* Информация о дате и источнике внизу статьи */}
          <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-800">
            <div className="article-date">
              {formatDate(article.published_at)}
            </div>

            {article.source && (
              <div className="article-source">
                Источник:{" "}
                {article.source.startsWith("http") ? (
                  <a
                    href={article.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="article-source-link"
                  >
                    {extractDomain(article.source)}
                  </a>
                ) : (
                  article.source
                )}
              </div>
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
