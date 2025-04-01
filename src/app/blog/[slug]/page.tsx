import { getArticleBySlug } from "@/lib/blogApi";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug);

  if (!article) {
    return {
      title: "Статья не найдена - Neuropolis.ai",
      description: "Запрашиваемая статья не найдена или была удалена",
    };
  }

  return {
    title: `${article.title} - Блог Neuropolis.ai`,
    description:
      article.description ||
      `Читайте статью "${article.title}" в блоге Neuropolis.ai`,
    keywords:
      "искусственный интеллект, автоматизация, цифровая трансформация, нейронные сети",
  };
}

// Функция для форматирования даты
function formatDate(dateString: string) {
  return new Intl.DateTimeFormat("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(dateString));
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  try {
    const article = await getArticleBySlug(params.slug);

    if (!article) {
      notFound();
    }

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

          <div className="mb-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white text-center">
              {article.title}
            </h1>
          </div>

          {article.image_url && (
            <div className="relative w-full h-[300px] md:h-[400px] mb-8 rounded-lg overflow-hidden">
              <Image
                src={article.image_url}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          <div
            className="prose prose-lg max-w-none dark:prose-invert mb-8"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          <div className="flex items-center text-gray-500 mb-4">
            <span>{formatDate(article.published_at)}</span>
            {article.source && (
              <span className="ml-4">Источник: {article.source}</span>
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
