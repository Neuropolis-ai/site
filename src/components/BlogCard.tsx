"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Article } from '@/lib/supabase';

interface BlogCardProps {
  post: Article;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  // Форматирование даты
  const formatDate = (dateStr: string): string => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(date);
  };

  // Обрезаем описание до определенной длины
  const truncateText = (text: string, maxLength: number): string => {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative w-full h-48">
          {post.image_url ? (
            <Image
              src={post.image_url}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400">Нет изображения</span>
            </div>
          )}
        </div>
      </Link>
      
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-blue-600 dark:text-blue-400">Блог</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {formatDate(post.published_at || post.created_at)}
          </span>
        </div>
        
        <Link href={`/blog/${post.slug}`} className="block">
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            {post.title}
          </h3>
        </Link>
        
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {truncateText(post.description || '', 100)}
        </p>
        
        <Link href={`/blog/${post.slug}`} className="inline-block text-blue-600 dark:text-blue-400 font-medium hover:underline transition-all">
          Читать далее →
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
