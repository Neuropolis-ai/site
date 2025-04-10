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
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 0C7.164 0 0 7.164 0 16C0 24.836 7.164 32 16 32C24.836 32 32 24.836 32 16C32 7.164 24.836 0 16 0ZM22.072 17.749C22.072 17.749 23.516 19.177 23.886 19.881C23.897 19.897 23.903 19.913 23.907 19.921C24.043 20.164 24.078 20.351 24.015 20.493C23.908 20.724 23.454 20.862 23.279 20.875H20.371C20.16 20.875 19.721 20.827 19.19 20.465C18.779 20.183 18.373 19.732 17.977 19.292C17.382 18.624 16.857 18.039 16.327 18.039C16.264 18.039 16.201 18.047 16.141 18.062C15.768 18.161 15.294 18.673 15.294 20.223C15.294 20.669 14.941 20.999 14.472 20.999H13.44C13.061 20.999 11.442 20.891 10.047 19.417C8.324 17.581 6.753 14.091 6.741 14.062C6.578 13.685 6.905 13.483 7.264 13.483H10.201C10.604 13.483 10.766 13.747 10.881 14.008C11.015 14.31 11.439 15.477 12.076 16.563C13.053 18.242 13.669 18.84 14.17 18.84C14.271 18.84 14.369 18.818 14.46 18.775C15.146 18.427 15.008 16.856 14.981 16.467C14.981 16.451 14.98 16.45 14.98 16.45C14.98 16.355 14.971 15.551 14.689 15.13C14.483 14.821 14.12 14.707 13.888 14.666C13.983 14.543 14.101 14.397 14.25 14.294C14.639 14.036 15.363 13.987 16.085 13.987H16.538C17.321 14.002 17.53 14.063 17.817 14.15C18.4 14.309 18.408 14.658 18.35 16.041C18.335 16.359 18.319 16.724 18.319 17.156C18.319 17.269 18.314 17.394 18.314 17.521C18.298 18.096 18.279 18.748 18.756 18.999C18.825 19.04 18.902 19.06 18.985 19.06C19.135 19.06 19.595 19.06 20.886 16.597C21.224 15.871 21.52 15.086 21.772 14.514C21.823 14.414 21.949 14.267 22.094 14.221C22.195 14.193 22.3 14.191 22.404 14.191H25.924C26.236 14.191 26.442 14.246 26.489 14.361C26.567 14.539 26.469 15.142 25.131 16.967L24.459 17.887C23.238 19.525 23.238 19.631 24.038 20.264C24.038 20.264 24.038 20.264 24.038 20.264C24.038 20.264 24.038 20.264 24.038 20.264Z"
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
