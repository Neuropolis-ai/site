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
                  className="text-gray-700 hover:text-[#229ED9] dark:text-gray-300 dark:hover:text-[#229ED9] transition-colors"
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
                      d="M12 0C5.37 0 0 5.37 0 12C0 18.63 5.37 24 12 24C18.63 24 24 18.63 24 12C24 5.37 18.63 0 12 0ZM17.84 8.22C17.68 10.08 16.95 14.47 16.58 16.6C16.42 17.53 16.09 17.84 15.77 17.88C15.08 17.95 14.55 17.42 13.87 16.97C12.8 16.27 12.21 15.83 11.17 15.14C9.96 14.34 10.74 13.91 11.42 13.21C11.61 13.02 14.67 10.19 14.73 9.92C14.74 9.88 14.75 9.74 14.67 9.67C14.59 9.6 14.48 9.62 14.4 9.64C14.28 9.66 12.56 10.8 9.22 13.09C8.72 13.42 8.26 13.58 7.85 13.57C7.39 13.56 6.52 13.33 5.88 13.13C5.09 12.88 4.47 12.75 4.52 12.31C4.55 12.08 4.85 11.84 5.46 11.61C9.03 10.06 11.37 9.06 12.49 8.6C15.67 7.25 16.38 7 16.85 7C16.96 7 17.21 7.03 17.37 7.16C17.5 7.27 17.55 7.42 17.56 7.53C17.55 7.61 17.57 7.92 17.84 8.22Z"
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
                  className="text-gray-700 hover:text-[#0077FF] dark:text-gray-300 dark:hover:text-[#0077FF] transition-colors"
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
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.85 24C5.31 24 0 18.69 0 12.15C0 5.61 5.31 0.3 11.85 0.3C18.39 0.3 23.7 5.61 23.7 12.15C23.7 18.69 18.39 24 11.85 24ZM11.85 1.8C6.14 1.8 1.5 6.44 1.5 12.15C1.5 17.86 6.14 22.5 11.85 22.5C17.56 22.5 22.2 17.86 22.2 12.15C22.2 6.44 17.56 1.8 11.85 1.8ZM17.52 14.28C17.52 14.28 18.15 14.91 18.3 15.3C18.31 15.32 18.32 15.34 18.32 15.35C18.4 15.5 18.42 15.62 18.38 15.71C18.31 15.88 18.03 15.98 17.93 15.99H16.28C16.16 15.99 15.9 15.96 15.58 15.74C15.34 15.57 15.1 15.3 14.87 15.04C14.53 14.65 14.23 14.31 13.93 14.31C13.89 14.31 13.85 14.32 13.81 14.33C13.57 14.41 13.27 14.74 13.27 15.79C13.27 16.08 13.05 16.3 12.73 16.3H12.03C11.8 16.3 10.78 16.23 9.89 15.29C8.8 14.15 7.81 11.92 7.8 11.9C7.69 11.64 7.92 11.5 8.17 11.5H9.83C10.09 11.5 10.19 11.68 10.27 11.85C10.35 12.05 10.64 12.85 11.06 13.58C11.71 14.72 12.11 15.13 12.42 15.13C12.49 15.13 12.56 15.12 12.62 15.08C13.08 14.85 12.99 13.84 12.97 13.57C12.97 13.56 12.97 13.56 12.97 13.56C12.97 13.49 12.96 12.95 12.77 12.68C12.64 12.48 12.4 12.4 12.25 12.37C12.31 12.29 12.39 12.19 12.49 12.12C12.76 11.94 13.25 11.91 13.74 11.91H14.03C14.56 11.92 14.7 11.96 14.9 12.02C15.31 12.15 15.31 12.39 15.27 13.2C15.26 13.42 15.25 13.67 15.25 13.96C15.25 14.04 15.24 14.12 15.24 14.2C15.22 14.59 15.21 15.03 15.54 15.23C15.59 15.26 15.64 15.27 15.7 15.27C15.8 15.27 16.11 15.27 16.96 13.6C17.18 13.21 17.38 12.77 17.55 12.39C17.58 12.34 17.67 12.17 17.77 12.11C17.85 12.07 17.93 12.07 18.01 12.07H19.91C20.12 12.07 20.27 12.11 20.3 12.19C20.36 12.32 20.29 12.73 19.36 14.01L18.92 14.59C18.06 15.73 18.06 15.8 18.52 16.23C18.52 16.23 18.52 16.23 18.52 16.23C18.52 16.23 18.52 16.23 18.52 16.23Z"
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
