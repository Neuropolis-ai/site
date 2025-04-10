import { getArticleBySlug, getAllArticles } from "@/lib/blogApi";
import { Metadata } from "next";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Article } from "@/lib/supabase";
import { notFound } from "next/navigation";

// Используем статическую генерацию
export const dynamic = "force-static";

// Указываем, что страница должна предварительно рендериться
export const generateStaticParams = async (): Promise<{ slug: string }[]> => {
  const articles = await getAllArticles();

  return articles.map((article) => ({
    slug: article.slug,
  }));
};

// Расширенная генерация метаданных для SEO
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

  // Базовый URL сайта
  const baseUrl = "https://neuropolis.ai";
  // URL текущей статьи
  const articleUrl = `${baseUrl}/blog/${params.slug}`;

  // Формируем keywords на основе тегов или содержимого статьи
  const keywordsBase =
    "искусственный интеллект, ИИ, автоматизация, цифровая трансформация";
  const keywordsFromTitle = article.title
    .toLowerCase()
    .split(" ")
    .filter((word) => word.length > 3)
    .slice(0, 5)
    .join(", ");

  return {
    title: `${article.title} | Neuropolis.ai`,
    description: article.description || generateDescription(article.content),
    keywords: `${keywordsBase}, ${keywordsFromTitle}`,

    // Open Graph метаданные
    openGraph: {
      type: "article",
      url: articleUrl,
      title: article.title,
      description: article.description || generateDescription(article.content),
      siteName: "Neuropolis.ai",
      images: article.image_url
        ? [
            {
              url: article.image_url,
              alt: article.title,
              width: 1200,
              height: 630,
            },
          ]
        : [],
      locale: "ru_RU",
      publishedTime: article.published_at,
      modifiedTime: article.published_at,
    },

    // Twitter Card метаданные
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description || generateDescription(article.content),
      images: article.image_url ? [article.image_url] : [],
    },

    // Указываем canonical URL
    alternates: {
      canonical: articleUrl,
    },

    // Прочие мета-теги
    authors: [{ name: "Neuropolis.ai" }],
    robots: {
      index: true,
      follow: true,
    },
  };
}

// Функция для генерации описания из контента
function generateDescription(content: string): string {
  // Очищаем от HTML-тегов и берем первые 160 символов
  const plainText = content.replace(/<[^>]+>/g, "");
  return plainText.slice(0, 157) + "...";
}

// Функция форматирования даты
function formatDate(dateString: string): string {
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

// Функция для очистки контента от маркеров кода
function cleanContentMarkups(content: string): string {
  return content
    .replace(/```html/g, "")
    .replace(/```/g, "")
    .replace(/<code><\/code>/g, "");
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

// Создаем компонент хлебных крошек
function BreadcrumbNav({ slug, title }: { slug: string; title: string }) {
  return (
    <nav className="mb-8" aria-label="breadcrumb">
      <ol className="flex items-center text-sm">
        <li className="flex items-center">
          <Link
            href="/"
            className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
          >
            Главная
          </Link>
          <span className="mx-2 text-gray-500 dark:text-gray-400">/</span>
        </li>
        <li className="flex items-center">
          <Link
            href="/blog"
            className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
          >
            Блог
          </Link>
          <span className="mx-2 text-gray-500 dark:text-gray-400">/</span>
        </li>
        <li
          className="text-gray-700 dark:text-gray-300 truncate max-w-[200px]"
          aria-current="page"
        >
          {title}
        </li>
      </ol>
    </nav>
  );
}

// Компонент структурированных данных JSON-LD
function JsonLd({ article, url }: { article: Article; url: string }) {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description || generateDescription(article.content),
    image: article.image_url || "",
    datePublished: article.published_at,
    dateModified: article.published_at,
    author: {
      "@type": "Organization",
      name: "Neuropolis.ai",
      url: "https://neuropolis.ai",
    },
    publisher: {
      "@type": "Organization",
      name: "Neuropolis.ai",
      logo: {
        "@type": "ImageObject",
        url: "https://neuropolis.ai/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    url: url,
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Главная",
        item: "https://neuropolis.ai",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Блог",
        item: "https://neuropolis.ai/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: url,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
    </>
  );
}

// Основной компонент страницы
export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article = await getArticleBySlug(params.slug);

  // Если статья не найдена, возвращаем 404
  if (!article) {
    notFound();
  }

  // Очищаем текст статьи от маркеров кода
  const cleanedContent = cleanContentMarkups(article.content);

  // Получаем соседние статьи
  const { prev, next } = await getAdjacentArticles(params.slug);

  // Формируем URL статьи
  const baseUrl = "https://neuropolis.ai";
  const articleUrl = `${baseUrl}/blog/${params.slug}`;

  return (
    <>
      {/* Структурированные данные JSON-LD */}
      <JsonLd article={article} url={articleUrl} />

      <div className="min-h-screen pt-[120px] pb-20 bg-white dark:bg-black">
        <div className="container mx-auto max-w-4xl px-4">
          {/* Хлебные крошки */}
          <BreadcrumbNav slug={params.slug} title={article.title} />

          <article className="article-content">
            <header className="mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white text-center leading-relaxed">
                {article.title}
              </h1>

              {article.description && (
                <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-4">
                  {article.description}
                </p>
              )}

              <div className="flex justify-center items-center text-sm text-gray-500 dark:text-gray-400 mb-6">
                <time dateTime={article.published_at}>
                  {formatDate(article.published_at)}
                </time>
              </div>
            </header>

            {article.image_url && (
              <figure className="relative w-full mb-8 rounded-xl overflow-hidden aspect-[16/9] sm:h-[400px]">
                <Image
                  src={article.image_url}
                  alt={article.title}
                  fill
                  priority={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 85vw, 1200px"
                  className="object-cover"
                />
                {article.description && (
                  <figcaption className="sr-only">
                    {article.description}
                  </figcaption>
                )}
              </figure>
            )}

            <main>
              <div
                className="prose prose-base max-w-none dark:prose-invert"
                dangerouslySetInnerHTML={{ __html: cleanedContent }}
              />
            </main>

            <footer>
              {/* Кнопки шеринга */}
              <div className="mt-8 flex items-center gap-4">
                <span className="text-gray-700 dark:text-gray-300">
                  Поделиться:
                </span>
                <a
                  href={`https://t.me/share/url?url=${encodeURIComponent(
                    articleUrl
                  )}&text=${encodeURIComponent(article.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                  aria-label="Поделиться в Telegram"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.64 8.8C16.49 10.38 15.84 14.22 15.51 15.99C15.37 16.74 15.09 16.99 14.83 17.02C14.25 17.07 13.81 16.64 13.25 16.27C12.37 15.69 11.87 15.33 11.02 14.77C10.03 14.12 10.67 13.76 11.24 13.18C11.39 13.03 13.95 10.7 14 10.49C14.0069 10.4582 14.006 10.4252 13.9973 10.3938C13.9886 10.3624 13.9724 10.3337 13.95 10.31C13.89 10.26 13.81 10.28 13.74 10.29C13.65 10.31 12.25 11.24 9.52 13.08C9.1 13.35 8.72 13.49 8.38 13.48C8.01 13.47 7.3 13.28 6.76 13.12C6.1 12.92 5.58 12.81 5.62 12.45C5.64 12.26 5.9 12.07 6.4 11.88C9.32 10.59 11.25 9.74 12.18 9.33C14.86 8.15 15.45 7.94 15.83 7.93C15.91 7.93 16.09 7.95 16.21 8.05C16.29 8.12 16.34 8.23 16.35 8.33C16.36 8.44 16.37 8.56 16.64 8.8Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a
                  href={`https://vk.com/share.php?url=${encodeURIComponent(
                    articleUrl
                  )}&title=${encodeURIComponent(article.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                  aria-label="Поделиться ВКонтакте"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93V15.07C2 20.67 3.33 22 8.93 22H15.07C20.67 22 22 20.67 22 15.07V8.93C22 3.33 20.67 2 15.07 2ZM18.15 16.27H16.69C16.01 16.27 15.81 15.67 14.76 14.62C13.85 13.74 13.5 13.59 13.24 13.59C12.89 13.59 12.79 13.69 12.79 14.18V15.59C12.79 16 12.64 16.19 11.65 16.19C10.57 16.15 9.52 15.82 8.59 15.23C7.66 14.64 6.88 13.81 6.31 12.83C5.11 11.2 4.11 9.29 3.38 7.23C3.38 6.89 3.53 6.59 4.02 6.59H5.47C5.89 6.59 6.07 6.78 6.26 7.23C7.11 9.89 8.45 12.16 9.08 12.16C9.3 12.16 9.4 12.06 9.4 11.51V9.33C9.34 8.39 8.9 8.32 8.9 7.91C8.91 7.75 9.03 7.61 9.19 7.61H11.5C11.84 7.61 11.98 7.79 11.98 8.23V11.01C11.98 11.35 12.16 11.48 12.27 11.48C12.49 11.48 12.67 11.35 13.08 10.94C13.98 9.77 14.71 8.49 15.25 7.13C15.32 6.94 15.47 6.79 15.65 6.72C15.77 6.68 15.9 6.66 16.03 6.67H17.48C17.96 6.67 18.08 6.91 17.96 7.23C17.29 8.87 16.45 10.43 15.45 11.9C15.27 12.2 15.21 12.34 15.45 12.64C15.61 12.86 16.14 13.31 16.5 13.73C17.04 14.29 17.49 14.93 17.83 15.63C17.99 16.06 17.77 16.27 18.15 16.27Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>

              {/* Метаданные статьи */}
              <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-800">
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
              <nav
                className="mt-10 flex justify-between"
                aria-label="Навигация по статьям"
              >
                {prev ? (
                  <Link
                    href={`/blog/${prev.slug}`}
                    className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    rel="prev"
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
                    <span className="hidden sm:inline">Предыдущая статья</span>
                    <span className="inline sm:hidden">Назад</span>
                  </Link>
                ) : (
                  <div></div>
                )}

                {next ? (
                  <Link
                    href={`/blog/${next.slug}`}
                    className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    rel="next"
                  >
                    <span className="hidden sm:inline">Следующая статья</span>
                    <span className="inline sm:hidden">Далее</span>
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
              </nav>
            </footer>
          </article>

          {/* Секция "Другие статьи" */}
          <aside className="mt-16">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Другие статьи
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[...(prev ? [prev] : []), ...(next ? [next] : [])]
                .slice(0, 2)
                .map((relatedArticle) => (
                  <Link
                    key={relatedArticle.id}
                    href={`/blog/${relatedArticle.slug}`}
                    className="block border border-gray-200 dark:border-gray-800 rounded-lg hover:shadow-md transition-shadow overflow-hidden group"
                  >
                    <div className="relative w-full h-48 overflow-hidden">
                      {relatedArticle.image_url ? (
                        <Image
                          src={relatedArticle.image_url}
                          alt={relatedArticle.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600" />
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-gray-900 dark:text-white mb-2 line-clamp-2">
                        {relatedArticle.title}
                      </h3>
                      <time
                        dateTime={relatedArticle.published_at}
                        className="text-sm text-gray-500 dark:text-gray-400"
                      >
                        {formatDate(relatedArticle.published_at)}
                      </time>
                    </div>
                  </Link>
                ))}
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
