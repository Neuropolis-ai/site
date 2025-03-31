"use client";

import { useTheme } from "@/context/ThemeContext";
import { getRecentArticles } from "@/lib/blogApi";
import { Article } from "@/lib/supabase";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import Container from "../ui/Container";

const Blog = () => {
  const { isDark } = useTheme();
  const [blogPosts, setBlogPosts] = useState<Article[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getRecentArticles(3);
      setBlogPosts(posts);
    };

    fetchPosts();
  }, []);

  const formatDate = (dateString: string) => {
    return new Intl.DateTimeFormat("ru-RU", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(dateString));
  };

  return (
    <section id="blog" className="py-20 bg-white dark:bg-black">
      <Container>
        <div className="text-center mb-16">
          <div
            className={`inline-block px-4 py-1 rounded-full text-sm mb-4 switch-box ${
              !isDark && "light-switch-box"
            }`}
          >
            Блог
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold dark:text-white text-black mb-4">
            Последние статьи из нашего блога
          </h2>
          <p className="dark:text-[#919191] text-gray-600 max-w-2xl mx-auto max-[425px]:text-[14px]">
            Будьте в курсе последних трендов, советов и инноваций в области ИИ и
            автоматизации.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="text-blue-500 hover:text-blue-400"
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
                        isDark ? "text-[#919191]" : "text-gray-500"
                      }`}
                    >
                      {formatDate(post.published_at)}
                    </span>
                    <BsArrowRight
                      className={`text-lg ${
                        isDark ? "text-blue-500" : "text-blue-600"
                      }`}
                    />
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

        <div className="flex justify-center mt-12">
          <Link
            href="/blog"
            className={`flex items-center gap-2 px-6 py-3 rounded-[10px] transition-colors ${
              isDark
                ? "border border-[#262626] text-white hover:bg-white/10"
                : "border border-gray-300 text-gray-800 hover:bg-gray-100"
            }`}
          >
            Перейти в Блог
            <BsArrowRight />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Blog;
