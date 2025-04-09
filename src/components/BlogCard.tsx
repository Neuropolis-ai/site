"use client";

import { useTheme } from "@/context/ThemeContext";
import { Article } from "@/lib/supabase";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import BlogImage from "./BlogImage";

interface BlogCardProps {
  post: Article;
}

export default function BlogCard({ post }: BlogCardProps) {
  const { isDark } = useTheme();

  const formatDate = (dateString: string) => {
    return new Intl.DateTimeFormat("ru-RU", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(dateString));
  };

  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`group overflow-hidden rounded-xl ${
        isDark
          ? "border border-[#0d1635] bg-[#050A1B] process-card"
          : "border border-gray-200 bg-gray-50"
      } hover:shadow-md transition-all duration-300`}
    >
      <div className="p-[12px]">
        <div className="relative h-[200px] w-full overflow-hidden rounded-[12px]">
          <BlogImage
            src={post.image_url || "/assets/images/placeholder.jpg"}
            alt={post.title}
            fill
            className="object-cover transition-transform group-hover:scale-[1.06]"
          />
        </div>
      </div>
      <div className="p-6">
        <h3
          className={`text-base font-semibold mb-4 line-clamp-2 ${
            isDark ? "text-white" : "text-gray-800"
          } group-hover:text-gray-400 dark:group-hover:text-gray-300 transition-colors`}
        >
          {post.title}
        </h3>
        {post.description && (
          <p
            className={`text-sm mb-4 line-clamp-3 ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {post.description}
          </p>
        )}
        <span className="line-a mb-4 block"></span>
        <div className="flex items-center justify-between">
          <span
            className={`text-sm ${isDark ? "text-[#919191]" : "text-gray-500"}`}
          >
            {formatDate(post.published_at)}
          </span>
          <BsArrowRight
            className={`text-lg ${isDark ? "text-white" : "text-gray-800"}`}
          />
        </div>
      </div>
    </Link>
  );
}
