import {
  getPublishedArticleBySlug,
  getAllArticles,
  getPublishedArticles,
} from "@/lib/blogApi";
import Link from "next/link";
import Image from "next/image";
import { Article } from "@/lib/supabase";
import { notFound } from "next/navigation";
import BlogCard from "@/components/BlogCard";
import FormattedDate from "@/components/FormattedDate";
import { FiExternalLink } from "react-icons/fi";
import { BsArrowRight, BsTwitterX, BsFacebook, BsTelegram, BsCalendar } from "react-icons/bs";
import { FaVk } from "react-icons/fa";
import { PageTransitionWrapper } from "@/components/ui/PageTransitionWrapper";
import SectionDivider from "@/components/ui/SectionDivider";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SchemaOrg from "@/components/SchemaOrg";

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
  const allArticles = await getPublishedArticles();
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

// Компонент навигации "хлебные крошки" с микроразметкой
function BreadcrumbNav({ slug, title }: { slug: string; title: string }) {
  const breadcrumbItems = [
    { label: "Главная", href: "/" },
    { label: "Блог", href: "/blog" },
    { label: title, href: `/blog/${slug}`, isCurrentPage: true },
  ];

  return <Breadcrumbs items={breadcrumbItems} />;
}

// Компонент структурированных данных JSON-LD
function ArticleSchema({ article, url }: { article: Article; url: string }) {
  const articleData = {
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
      <SchemaOrg type="Article" data={articleData} />
      <SchemaOrg type="BreadcrumbList" data={breadcrumbData} />
    </>
  );
}

// Дефолтные значения для SEO
const DEFAULT_TITLE = "Блог Neuropolis.ai";
const DEFAULT_DESCRIPTION =
  "Свежие статьи и новости об искусственном интеллекте, автоматизации и технологиях на Neuropolis.ai.";

// Динамическая генерация SEO-метаданных
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const article = await getPublishedArticleBySlug(params.slug);

  if (!article) {
    return {
      title: DEFAULT_TITLE,
      description: DEFAULT_DESCRIPTION,
      openGraph: {
        title: DEFAULT_TITLE,
        description: DEFAULT_DESCRIPTION,
      },
    };
  }

  return {
    title: article.title,
    description: article.description || generateDescription(article.content),
    openGraph: {
      title: article.title,
      description: article.description || generateDescription(article.content),
      images: article.image_url ? [article.image_url] : [],
    },
  };
}

// SSG: Генерация статических путей для всех статей
export async function generateStaticParams() {
  // Временно отключаем генерацию статических путей для деплоя
  return [];
}

// Компонент социальной иконки для шеринга
function SocialIcon({ 
  Icon, 
  url, 
  color, 
  title 
}: { 
  Icon: React.ComponentType<any>;
  url: string;
  color: string;
  title: string;
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
      className={`w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:-translate-y-1 ${color}`}
    >
      <Icon className="text-white text-lg" />
    </a>
  );
}

// СЕРВЕРНЫЙ КОМПОНЕНТ
export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article = await getPublishedArticleBySlug(params.slug);
  if (!article) {
    return notFound();
  }

  const { prev: prevArticle, next: nextArticle } = await getAdjacentArticles(
    params.slug
  );
  const cleanedContent = cleanContentMarkups(article.content);
  const baseUrl = "https://neuropolis.ai";
  const articleUrl = `${baseUrl}/blog/${params.slug}`;
  
  // Формируем URL для шеринга
  const shareTitle = encodeURIComponent(article.title);
  const shareUrl = encodeURIComponent(articleUrl);
  
  const twitterShareUrl = `https://twitter.com/intent/tweet?text=${shareTitle}&url=${shareUrl}`;
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;
  const vkShareUrl = `https://vk.com/share.php?url=${shareUrl}&title=${shareTitle}`;
  const telegramShareUrl = `https://t.me/share/url?url=${shareUrl}&text=${shareTitle}`;

  // Запрос дополнительных статей для секции "Другие статьи"
  const moreArticles = await getPublishedArticles();
  // Исключаем текущую статью и ограничиваем до 3
  const filteredMoreArticles = moreArticles
    .filter(a => a.slug !== params.slug)
    .slice(0, 3);

  return (
    <PageTransitionWrapper>
      {/* Структурированные данные JSON-LD */}
      <ArticleSchema article={article} url={articleUrl} />
      <div className="min-h-screen pt-32 pb-20 bg-white dark:bg-black">
        <div className="container mx-auto max-w-4xl px-6">
          {/* Хлебные крошки */}
          <BreadcrumbNav slug={params.slug} title={article.title} />
          <article className="article-content">
            <header className="mb-10">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-[1.1] text-center text-gray-900 dark:text-white">
                {article.title}
                <span className="block mt-2 h-1 w-16 bg-gradient-to-r from-[#0167F3] to-[#399AFC] mx-auto rounded-full"></span>
              </h1>
              
              {article.description && (
                <p className="text-xl text-gray-700 dark:text-gray-300 font-medium mb-6 text-center max-w-3xl mx-auto leading-[1.4]">
                  {article.description}
                </p>
              )}
              
              {article.image_url && (
                <div className="relative w-full aspect-video mb-8 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={article.image_url}
                    alt={article.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              )}
              
              <div className="flex justify-center items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                <BsCalendar className="mr-2 text-sm" />
                <FormattedDate
                  dateString={article.published_at}
                  format="full"
                  className="text-gray-500 dark:text-gray-400"
                />
              </div>
            </header>

            <div
              className="prose prose-lg max-w-none dark:prose-invert 
              prose-headings:font-bold prose-headings:mt-8 prose-headings:mb-4
              prose-h1:text-4xl prose-h1:leading-[1.1]
              prose-h2:text-3xl prose-h2:font-bold prose-h2:border-b prose-h2:border-gray-200 prose-h2:dark:border-gray-800 prose-h2:pb-2 prose-h2:leading-[1.2]
              prose-h3:text-2xl prose-h3:font-semibold prose-h3:leading-[1.3]
              prose-h4:text-xl prose-h4:font-medium
              prose-p:text-gray-700 prose-p:dark:text-gray-300 prose-p:my-6 prose-p:leading-[1.9]
              prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:font-medium prose-a:no-underline hover:prose-a:underline
              prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50 prose-blockquote:dark:bg-blue-900/20 prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:italic
              prose-img:rounded-xl prose-img:shadow-md
              prose-code:bg-gray-100 prose-code:dark:bg-gray-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
              prose-pre:bg-gray-900 prose-pre:dark:bg-gray-800 prose-pre:text-gray-100 prose-pre:overflow-x-auto
              prose-strong:text-gray-900 prose-strong:dark:text-white 
              prose-ul:list-disc prose-ul:pl-5 
              prose-ol:list-decimal prose-ol:pl-5"
              dangerouslySetInnerHTML={{ __html: cleanedContent }}
            />

            {/* Блок источника с URL */}
            <div className="flex items-center my-10">
              <span className="text-gray-600 dark:text-gray-300 font-medium mr-2">
                Источник:
              </span>
              <a
                href={article.source || 'https://www.theverge.com'}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                {article.source ? extractDomain(article.source) : 'www.theverge.com'}
              </a>
            </div>

            {/* Навигация между статьями в новом дизайне */}
            <div className="flex justify-between my-10 w-full">
              {prevArticle ? (
                <Link
                  href={`/blog/${prevArticle.slug}`}
                  className="px-5 py-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors flex items-center"
                >
                  <span className="flex items-center text-gray-700 dark:text-gray-300 text-sm font-medium">
                    <BsArrowRight className="mr-2 text-lg rotate-180" />
                    Предыдущая статья
                  </span>
                </Link>
              ) : (
                <div></div> // Пустой блок для сохранения flex-структуры
              )}
              
              {nextArticle && (
                <Link
                  href={`/blog/${nextArticle.slug}`}
                  className="px-5 py-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors flex items-center"
                >
                  <span className="flex items-center text-gray-700 dark:text-gray-300 text-sm font-medium">
                    Следующая статья
                    <BsArrowRight className="ml-2 text-lg" />
                  </span>
                </Link>
              )}
            </div>
          </article>

          {/* Другие статьи в новом дизайне */}
          <div className="mt-12 pt-8">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-10">
              Другие статьи
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {filteredMoreArticles.length > 0 ? (
                filteredMoreArticles.slice(0, 2).map(post => (
                  <BlogCard key={post.id} post={post} />
                ))
              ) : (
                <div className="col-span-2 text-center py-10">
                  <p className="text-gray-600 dark:text-gray-400">Другие статьи скоро появятся...</p>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Разделитель перед футером */}
        <div className="mt-16">
          <SectionDivider />
        </div>
      </div>
    </PageTransitionWrapper>
  );
} 