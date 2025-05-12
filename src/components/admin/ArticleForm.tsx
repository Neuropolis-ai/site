"use client";

import { Article } from "@/lib/supabase";
import { uploadArticleImage } from "@/lib/blogApi";
import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css"; // Импорт стилей

// Динамический импорт React-Quill для использования на стороне клиента
const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => (
    <div className="h-96 w-full bg-gray-100 dark:bg-gray-800 animate-pulse rounded" />
  ),
});

interface ArticleFormProps {
  initialData?: {
    title?: string;
    slug?: string;
    description?: string;
    content?: string;
    image_url?: string;
    is_published?: boolean;
  };
  onSubmit: (data: any) => void;
  isEditing?: boolean;
}

const ArticleForm: React.FC<ArticleFormProps> = ({ 
  initialData = {}, 
  onSubmit,
  isEditing = false
}) => {
  const [formData, setFormData] = useState({
    title: initialData.title || '',
    slug: initialData.slug || '',
    description: initialData.description || '',
    content: initialData.content || '',
    image_url: initialData.image_url || '',
    is_published: initialData.is_published || false
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Генерация slug из заголовка
  useEffect(() => {
    if (!isEditing && formData.title && !formData.slug) {
      // Только если это новая статья и slug пустой
      const generatedSlug = formData.title
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/--+/g, '-')
        .trim();
      
      setFormData(prev => ({ ...prev, slug: generatedSlug }));
    }
  }, [formData.title, isEditing, formData.slug]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Очищаем ошибку при изменении поля
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.title.trim()) {
      newErrors.title = 'Заголовок обязателен';
    }
    
    if (!formData.slug.trim()) {
      newErrors.slug = 'URL-адрес обязателен';
    } else if (!/^[a-z0-9-]+$/.test(formData.slug)) {
      newErrors.slug = 'URL может содержать только строчные буквы, цифры и дефисы';
    }
    
    if (!formData.description.trim()) {
      newErrors.description = 'Описание обязательно';
    }
    
    if (!formData.content.trim()) {
      newErrors.content = 'Контент статьи обязателен';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await onSubmit(formData);
      // Форма успешно отправлена
      // Можно добавить редирект или сообщение об успехе
    } catch (error) {
      console.error('Ошибка при сохранении статьи:', error);
      // Здесь можно отобразить сообщение об ошибке
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Заголовок статьи*
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className={`mt-1 block w-full rounded-md border ${
            errors.title ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
          } px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white`}
        />
        {errors.title && <p className="mt-1 text-sm text-red-500">{errors.title}</p>}
      </div>

      <div>
        <label htmlFor="slug" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          URL-адрес статьи*
        </label>
        <div className="mt-1 flex rounded-md shadow-sm">
          <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-300">
            /blog/
          </span>
          <input
            type="text"
            id="slug"
            name="slug"
            value={formData.slug}
            onChange={handleChange}
            className={`block w-full flex-1 rounded-none rounded-r-md border ${
              errors.slug ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
            } px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white`}
          />
        </div>
        {errors.slug && <p className="mt-1 text-sm text-red-500">{errors.slug}</p>}
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Краткое описание*
        </label>
        <textarea
          id="description"
          name="description"
          rows={3}
          value={formData.description}
          onChange={handleChange}
          className={`mt-1 block w-full rounded-md border ${
            errors.description ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
          } px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white`}
        />
        {errors.description && <p className="mt-1 text-sm text-red-500">{errors.description}</p>}
      </div>

      <div>
        <label htmlFor="content" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Содержание статьи*
        </label>
        <textarea
          id="content"
          name="content"
          rows={10}
          value={formData.content}
          onChange={handleChange}
          className={`mt-1 block w-full rounded-md border ${
            errors.content ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
          } px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white`}
        />
        {errors.content && <p className="mt-1 text-sm text-red-500">{errors.content}</p>}
        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
          Поддерживается markdown форматирование.
        </p>
      </div>

      <div>
        <label htmlFor="image_url" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          URL изображения
        </label>
        <input
          type="text"
          id="image_url"
          name="image_url"
          value={formData.image_url}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          placeholder="https://example.com/image.jpg"
        />
      </div>

      <div className="flex items-start">
        <div className="flex h-5 items-center">
          <input
            id="is_published"
            name="is_published"
            type="checkbox"
            checked={formData.is_published}
            onChange={handleCheckboxChange}
            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-700"
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="is_published" className="font-medium text-gray-700 dark:text-gray-300">
            Опубликовать статью
          </label>
          <p className="text-gray-500 dark:text-gray-400">
            Если отмечено, статья будет доступна для чтения.
          </p>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Сохранение...' : isEditing ? 'Обновить статью' : 'Создать статью'}
        </button>
      </div>
    </form>
  );
};

export default ArticleForm;
