"use client";
import { getAllArticles } from "@/lib/blogApi";
import { Article } from "@/lib/supabase";
import { useTheme } from "@/context/ThemeContext";
import "@/style/hero.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsArrowRight, BsSearch } from "react-icons/bs";

export default function BlogPage() {
  const { isDark } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setIsLoading(true);
        const data = await getAllArticles();
        setArticles(data);
      } catch (err) {
        console.error("Ошибка при загрузке статей:", err);
        setError("Не удалось загрузить статьи. Пожалуйста, попробуйте позже.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const filteredPosts = articles.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (post.description &&
        post.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Форматирование даты в понятный вид
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("ru-RU", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
  };

  return (
    <div
      className={`relative min-h-screen pt-32 pb-20 overflow-hidden ${
        isDark ? "bg-black" : "bg-white"
      }`}
    >
      <div className="container mx-auto max-w-[1280px] px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-block px-4 py-1 rounded-full text-sm mb-4 switch-box ${
              !isDark && "light-switch-box"
            }`}
          >
            Блог
          </div>
          <h1
            className={`text-5xl font-bold mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Наш Блог
          </h1>
          <p
            className={`max-w-2xl mx-auto mb-8 ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Блог Neuropolis — ваш надежный источник информации о том, как ИИ
            меняет отрасли и способствует успеху бизнеса.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-md mx-auto w-[300px]">
            <input
              type="text"
              placeholder="Поиск статей"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full p-3 pr-12 rounded-[12px] outline-none transition-colors duration-300 ${
                isDark
                  ? "bg-transparent border-[#262626] text-white hover:border-[#4f4f4f]"
                  : "bg-gray-50 border-gray-300 text-gray-800 hover:border-gray-400"
              } border text-sm`}
            />
            <BsSearch
              className={`absolute right-4 top-1/2 transform -translate-y-1/2 ${
                isDark ? "text-gray-400" : "text-gray-500"
              }`}
            />
          </div>
        </div>

        {/* Состояние загрузки */}
        {isLoading && (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        )}

        {/* Сообщение об ошибке */}
        {error && (
          <div className="text-center py-12">
            <p
              className={`text-lg ${isDark ? "text-red-400" : "text-red-600"}`}
            >
              {error}
            </p>
            <button
              onClick={() => window.location.reload()}
              className={
                isDark
                  ? "mt-4 text-blue-500 hover:text-blue-400"
                  : "mt-4 text-blue-600 hover:text-blue-700"
              }
            >
              Попробовать снова
            </button>
          </div>
        )}

        {/* Blog Posts Grid */}
        {!isLoading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className={
                  isDark
                    ? "text-blue-500 hover:text-blue-400"
                    : "text-blue-600 hover:text-blue-700"
                }
              >
                <div
                  className={`overflow-hidden group ${
                    isDark
                      ? "blog-card"
                      : "border border-gray-200 rounded-xl bg-gray-50"
                  }`}
                >
                  <div className="p-[12px]">
                    <div className="relative p-[12px] h-[200px] w-full overflow-hidden rounded-[12px]">
                      <Image
                        src={post.image_url || "/assets/images/placeholder.jpg"}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-[1.06]"
                      />
                    </div>
                  </div>
                  <div className="p-[12px]">
                    <h3
                      className={`text-xl font-semibold mb-4 line-clamp-2 ${
                        isDark ? "text-white" : "text-gray-800"
                      }`}
                    >
                      {post.title}
                    </h3>
                    {post.description && (
                      <p
                        className={`text-sm mb-3 line-clamp-3 ${
                          isDark ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {post.description}
                      </p>
                    )}
                    <span className="line-a mb-2"></span>
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-sm ${
                          isDark ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        {formatDate(post.published_at)}
                      </span>
                      <BsArrowRight className="text-lg" />
                    </div>
                    {post.source && (
                      <div
                        className={`text-xs mt-2 ${
                          isDark ? "text-gray-500" : "text-gray-400"
                        }`}
                      >
                        Источник: {post.source}
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* No Results */}
        {!isLoading && !error && filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p
              className={`text-lg ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Статьи не найдены, соответствующие вашему запросу.
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className={
                isDark
                  ? "mt-4 text-blue-500 hover:text-blue-400"
                  : "mt-4 text-blue-600 hover:text-blue-700"
              }
            >
              Очистить поиск
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
