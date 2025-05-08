"use client";

import React from "react";
import Link from "next/link";
import { Article } from "@/lib/supabase";
import BlogCard from "@/components/BlogCard";
import Badge from "@/components/ui/Badge";

interface BlogSectionProps {
  recentArticles: Article[];
}

// Оптимизированный компонент BlogSection
const BlogSection = ({ recentArticles }: BlogSectionProps) => (
  <section className="py-20 md:py-28 px-4 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900 -z-10"></div>
    <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-gradient-to-br from-blue-200/20 to-blue-400/20 dark:from-blue-500/10 dark:to-blue-700/10 rounded-full blur-3xl -z-10"></div>
    <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-200/20 to-indigo-400/20 dark:from-indigo-500/10 dark:to-indigo-700/10 rounded-full blur-3xl -z-10"></div>

    <div className="container mx-auto max-w-1280 relative z-10">
      <div className="text-center mb-16">
        <Badge>Блог</Badge>
        <h2 className="text-h1 font-semibold text-gray-900 dark:text-white mb-4">
          Последние{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0167F3] to-[#399AFC]">
            публикации
          </span>
        </h2>
        <p className="text-h5 text-muted-foreground max-w-2xl mx-auto">
          Узнайте о последних тенденциях и инновациях в области искусственного
          интеллекта и цифровой трансформации.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {recentArticles.map((post, index) => (
          <div
            key={post.id}
            className="group transition-all duration-300 hover:-translate-y-1"
            style={{
              transitionDelay: `${index * 100}ms`,
            }}
          >
            <BlogCard post={post} />
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          href="/blog"
          className="bg-gradient-to-r from-[#0167F3] to-[#399AFC] hover:from-[#0157D3] hover:to-[#2988E8] text-white shadow-lg hover:shadow-blue-500/20 dark:hover:shadow-blue-700/10 font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 px-8 py-4 text-lg inline-flex"
        >
          Все статьи
        </Link>
      </div>
    </div>
  </section>
);

export default BlogSection;
