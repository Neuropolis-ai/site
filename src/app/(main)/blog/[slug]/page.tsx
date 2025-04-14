"use client";

import { getArticleBySlug, getAllArticles } from "@/lib/blogApi";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Article } from "@/lib/supabase";
import { notFound } from "next/navigation";
import BlogCard from "@/components/BlogCard";
import FormattedDate from "@/components/FormattedDate";

// Функция для генерации описания из контента
function generateDescription(content: string): string {
  // Очищаем от HTML-тегов и берем первые 160 символов
  const plainText = content.replace(/<[^>]+>/g, "");
  return plainText.slice(0, 157) + "...";
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
export default function ArticlePage({ params }: { params: { slug: string } }) {
  const [article, setArticle] = useState<Article | null>(null);
  const [prevArticle, setPrevArticle] = useState<Article | null>(null);
  const [nextArticle, setNextArticle] = useState<Article | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setIsLoading(true);
        // Получаем статью по slug
        const articleData = await getArticleBySlug(params.slug);

        if (!articleData) {
          setError("Статья не найдена");
          return;
        }

        setArticle(articleData);

        // Получаем соседние статьи
        const { prev, next } = await getAdjacentArticles(params.slug);
        setPrevArticle(prev);
        setNextArticle(next);
      } catch (err) {
        console.error("Ошибка при загрузке статьи:", err);
        setError("Произошла ошибка при загрузке статьи");
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticle();
  }, [params.slug]);

  // Если статья не найдена или произошла ошибка
  if (error) {
    return (
      <div className="min-h-screen pt-[120px] pb-20 bg-white dark:bg-black flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {error}
          </h2>
          <Link href="/blog" className="text-blue-500 hover:underline">
            Вернуться к блогу
          </Link>
        </div>
      </div>
    );
  }

  // Пока загружаются данные
  if (isLoading || !article) {
    return (
      <div className="min-h-screen pt-[120px] pb-20 bg-white dark:bg-black flex items-center justify-center">
        <div className="text-center">
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent text-blue-600 dark:text-blue-400 align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Загрузка...
            </span>
          </div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Загрузка статьи...
          </p>
        </div>
      </div>
    );
  }

  // Очищаем текст статьи от маркеров кода
  const cleanedContent = cleanContentMarkups(article.content);

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
                <FormattedDate
                  dateString={article.published_at}
                  format="full"
                  className="date-text"
                />
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
                {/* Telegram */}
                <a
                  href={`https://t.me/share/url?url=${encodeURIComponent(
                    articleUrl
                  )}&text=${encodeURIComponent(article.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-110"
                  aria-label="Поделиться в Telegram"
                >
                  <svg
                    viewBox="0 0 16 16"
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <linearGradient
                      id="a"
                      x1="66.67%"
                      x2="41.67%"
                      y1="16.67%"
                      y2="75%"
                    >
                      <stop offset="0" stopColor="#37aee2" />
                      <stop offset="1" stopColor="#1e96c8" />
                    </linearGradient>
                    <linearGradient
                      id="b"
                      x1="65.97%"
                      x2="85.12%"
                      y1="43.69%"
                      y2="80.24%"
                    >
                      <stop offset="0" stopColor="#eff7fc" />
                      <stop offset="1" stopColor="#fff" />
                    </linearGradient>
                    <circle cx="8" cy="8" fill="url(#a)" r="8" />
                    <path
                      d="m6.53333333 11.6666667c-.25917333 0-.21513333-.09786-.30452-.3446334l-.76214666-2.50830663 5.86666663-3.48039334"
                      fill="#c8daea"
                    />
                    <path
                      d="m6.53333333 11.6666667c.2 0 .28836667-.0914667.4-.2l1.06666667-1.0372-1.33053333-.80233337"
                      fill="#a9c9dd"
                    />
                    <path
                      d="m6.66933333 9.62733333 3.224 2.38193337c.36789997.2029933.63342667.0978933.72506667-.3415667l1.3123333-6.1842c.13436-.53868-.20534-.783-.5572933-.62321333l-7.706 2.9714c-.52600667.21098-.52294.50444-.09588.6352l1.97753333.61722 4.57819997-2.88833334c.2161267-.13106.4144867-.06059933.25168.08389334"
                      fill="url(#b)"
                    />
                  </svg>
                </a>

                {/* VKontakte */}
                <a
                  href={`https://vk.com/share.php?url=${encodeURIComponent(
                    articleUrl
                  )}&title=${encodeURIComponent(article.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-110"
                  aria-label="Поделиться ВКонтакте"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 92 93"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      fill="#2787f5"
                      height="91.56"
                      rx="45.78"
                      width="91.56"
                      y=".803711"
                    />
                    <path
                      clipRule="evenodd"
                      d="m72.4961 33.4006c.387-1.2104.0001-2.0998-1.8415-2.0998h-6.0894c-1.5484 0-2.2622.7683-2.6493 1.6155 0 0-3.0967 7.0806-7.4836 11.68-1.4193 1.3313-2.0645 1.7549-2.8386 1.7549-.3871 0-.9474-.4236-.9474-1.6339v-11.3167c0-1.4525-.4493-2.0998-1.7397-2.0998h-9.5692c-.9675 0-1.5495.6741-1.5495 1.313 0 1.3769 2.1934 1.6944 2.4195 5.5676v8.412c0 1.8443-.3551 2.1787-1.1293 2.1787-2.0643 0-7.0859-7.1123-10.0641-15.2506-.5837-1.5818-1.1691-2.2207-2.7254-2.2207h-6.0894c-1.7399 0-2.0879.7683-2.0879 1.6155 0 1.513 2.0645 9.0172 9.6125 18.9421 5.032 6.7779 12.1217 10.452 18.573 10.452 3.8708 0 4.3496-.816 4.3496-2.2216v-5.1227c0-1.6321.3667-1.9579 1.5925-1.9579.9031 0 2.4515.4237 6.0643 3.6916 4.1288 3.8731 4.8095 5.6106 7.1319 5.6106h6.0895c1.7398 0 2.6097-.816 2.1079-2.4264-.5492-1.605-2.5205-3.9337-5.1362-6.6942-1.4194-1.5735-3.5483-3.2679-4.1935-4.1153-.9031-1.0892-.6451-1.5734 0-2.5416 0 0 7.4192-9.8039 8.1933-13.1323z"
                      fill="#fff"
                      fillRule="evenodd"
                    />
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    articleUrl
                  )}&t=${encodeURIComponent(article.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-110"
                  aria-label="Поделиться в Facebook"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect fill="#1877f2" height="512" rx="15%" width="512" />
                    <path
                      d="m355.6 330 11.4-74h-71v-48c0-20.2 9.9-40 41.7-40h32.3v-63s-29.3-5-57.3-5c-58.5 0-96.7 35.4-96.7 99.6v56.4h-65v74h65v182h80v-182z"
                      fill="#fff"
                    />
                  </svg>
                </a>

                {/* Twitter/X */}
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                    article.title
                  )}&url=${encodeURIComponent(articleUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-110 bg-black dark:bg-white rounded-full p-1"
                  aria-label="Поделиться в Twitter/X"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                      fill="white"
                      className="dark:fill-black"
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
                {prevArticle ? (
                  <Link
                    href={`/blog/${prevArticle.slug}`}
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

                {nextArticle ? (
                  <Link
                    href={`/blog/${nextArticle.slug}`}
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
              {[
                ...(prevArticle ? [prevArticle] : []),
                ...(nextArticle ? [nextArticle] : []),
              ]
                .slice(0, 2)
                .map((relatedArticle) => (
                  <BlogCard key={relatedArticle.id} post={relatedArticle} />
                ))}
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
