"use client";
import Container from "@/components/ui/Container";
import { useTheme } from "@/context/ThemeContext";
import "@/style/hero.css";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { BsArrowLeft } from "react-icons/bs";
import { getArticleBySlug } from "@/lib/blogApi";
import { Article } from "@/lib/supabase";
import { useEffect, useState } from "react";
import type { Metadata } from "next";

export default function BlogPost() {
  const { isDark } = useTheme();
  const params = useParams();
  const slug = params.slug as string;

  const [article, setArticle] = useState<Article | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setIsLoading(true);
        const data = await getArticleBySlug(slug);
        setArticle(data);
        if (!data) {
          setError("Статья не найдена");
        }
      } catch (err) {
        console.error(`Ошибка при загрузке статьи с ID ${slug}:`, err);
        setError("Не удалось загрузить статью. Пожалуйста, попробуйте позже.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticle();
  }, [slug]);

  // Форматирование даты в понятный вид
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("ru-RU", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
  };

  // Отображение в процессе загрузки
  if (isLoading) {
    return (
      <div
        className={`min-h-screen pt-[200px] pb-20 flex justify-center ${
          isDark ? "bg-black text-white" : "bg-white text-gray-900"
        }`}
      >
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // Отображение при ошибке или если статья не найдена
  if (error || !article) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center ${
          isDark ? "bg-black" : "bg-white"
        }`}
      >
        <div className="text-center">
          <h1
            className={`text-3xl font-bold mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            {error || "Статья не найдена"}
          </h1>
          <Link
            href="/blog"
            className={
              isDark
                ? "text-blue-500 hover:text-blue-400 flex items-center justify-center gap-2"
                : "text-blue-600 hover:text-blue-700 flex items-center justify-center gap-2"
            }
          >
            <BsArrowLeft /> Вернуться к блогу
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen pt-[200px] pb-20 ${
        isDark ? "bg-black text-white" : "bg-white text-gray-900"
      }`}
    >
      <Container>
        <div className="flex justify-center mb-4">
          <div
            className={`inline-flex rounded-full px-3 py-1 text-xs ${
              isDark ? "bg-white/10 switch-box" : "bg-gray-100 text-gray-700"
            }`}
          >
            {formatDate(article.published_at)}
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 max-w-4xl text-center mx-auto">
          {article.title}
        </h1>

        {article.description && (
          <p
            className={`text-center max-w-3xl mx-auto mb-8 ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {article.description}
          </p>
        )}

        {article.image_url && (
          <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] rounded-xl overflow-hidden mb-12">
            <Image
              src={article.image_url}
              alt={article.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        <div className="w-[600px] mx-auto max-[610px]:w-full">
          <article
            className={`prose max-w-none ${
              isDark ? "prose-invert" : ""
            } prose-lg`}
          >
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </article>

          {article.source && (
            <div
              className={`mt-8 text-sm ${
                isDark ? "text-gray-500" : "text-gray-500"
              }`}
            >
              <p>Источник: {article.source}</p>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}

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
    openGraph: {
      title: article.title,
      description:
        article.description ||
        `Читайте статью "${article.title}" в блоге Neuropolis.ai`,
      images: [{ url: article.image_url || "/assets/images/placeholder.jpg" }],
    },
  };
}
