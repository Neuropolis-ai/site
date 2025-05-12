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

type ArticleFormProps = {
  article?: Article;
  onSubmit: (articleData: Omit<Article, "id" | "created_at">) => Promise<void>;
  isSubmitting: boolean;
};

export default function ArticleForm({
  article,
  onSubmit,
  isSubmitting,
}: ArticleFormProps) {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  const [description, setDescription] = useState("");
  const [source, setSource] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [publishedAt, setPublishedAt] = useState("");
  const [isPublished, setIsPublished] = useState(true);

  // Заполнить форму данными существующей статьи при редактировании
  useEffect(() => {
    if (article) {
      setTitle(article.title);
      setSlug(article.slug);
      setContent(article.content);
      setDescription(article.description || "");
      setSource(article.source || "");
      setImageUrl(article.image_url || "");
      setIsPublished(
        article.is_published !== undefined ? article.is_published : true
      );

      // Форматирование даты для поля ввода типа datetime-local
      const date = new Date(article.published_at);
      setPublishedAt(date.toISOString().slice(0, 16));
    } else {
      // Значения по умолчанию для новой статьи
      const now = new Date();
      setPublishedAt(now.toISOString().slice(0, 16));
      setIsPublished(true);
    }
  }, [article]);

  // Автоматически создавать slug из заголовка
  useEffect(() => {
    if (!article) {
      // Только для новых статей
      const newSlug = title
        .toLowerCase()
        .replace(/[^\w\sа-яё]/g, "")
        .replace(/\s+/g, "-")
        .replace(/[а-яё]/g, (char) => {
          const russianChars: Record<string, string> = {
            а: "a",
            б: "b",
            в: "v",
            г: "g",
            д: "d",
            е: "e",
            ё: "yo",
            ж: "zh",
            з: "z",
            и: "i",
            й: "y",
            к: "k",
            л: "l",
            м: "m",
            н: "n",
            о: "o",
            п: "p",
            р: "r",
            с: "s",
            т: "t",
            у: "u",
            ф: "f",
            х: "h",
            ц: "ts",
            ч: "ch",
            ш: "sh",
            щ: "sch",
            ъ: "",
            ы: "y",
            ь: "",
            э: "e",
            ю: "yu",
            я: "ya",
          };
          return russianChars[char] || char;
        });
      setSlug(newSlug);
    }
  }, [title, article]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImageFile(file);

    // Создание превью изображения
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleImageUpload = async () => {
    if (!imageFile) return;

    try {
      setUploadingImage(true);
      const url = await uploadArticleImage(imageFile);
      if (url) {
        setImageUrl(url);
        setImagePreview(null);
      }
    } catch (error) {
      console.error("Ошибка при загрузке изображения:", error);
    } finally {
      setUploadingImage(false);
    }
  };

  // Загрузка изображений для редактора
  const imageHandler = useCallback(() => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      const file = input.files?.[0];
      if (file) {
        try {
          const url = await uploadArticleImage(file);
          if (url) {
            // Использовать ReactQuill API из модуля
            const quill = (document.querySelector(".ql-editor") as any)
              ?.__quill;
            if (quill) {
              const range = quill.getSelection();
              quill.insertEmbed(range?.index || 0, "image", url);
            }
          }
        } catch (error) {
          console.error("Ошибка загрузки изображения:", error);
        }
      }
    };
  }, []);

  // Модули для React-Quill
  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [
          { list: "ordered" },
          { list: "bullet" },
          { indent: "-1" },
          { indent: "+1" },
        ],
        ["link", "image", "video"],
        [{ color: [] }, { background: [] }],
        [{ align: [] }],
        ["clean"],
      ],
      handlers: {
        image: imageHandler,
      },
    },
    clipboard: {
      // Разрешаем вставку форматированного текста
      matchVisual: false,
    },
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
    "color",
    "background",
    "align",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const publishedDate = new Date(publishedAt);

    // Создаем данные статьи с полем is_published
    const articleData = {
      title,
      slug,
      content,
      description,
      source,
      image_url: imageUrl,
      published_at: publishedDate.toISOString(),
      is_published: isPublished,
    };

    // Пробуем сохранить статью
    try {
      await onSubmit(articleData as Omit<Article, "id" | "created_at">);
    } catch (error) {
      console.error("Ошибка при сохранении статьи:", error);
      // Если ошибка связана с полем is_published, пробуем без него
      if (
        error instanceof Error &&
        error.message &&
        error.message.includes("is_published")
      ) {
        console.warn("Ошибка с полем is_published, повторяем без него");

        // Создаем новый объект с нужными полями для сохранения
        const dataWithoutPublished = {
          title,
          slug,
          content,
          description,
          source,
          image_url: imageUrl,
          published_at: publishedDate.toISOString(),
        };

        // Явно указываем тип как частичный
        await onSubmit(dataWithoutPublished as any);
      } else {
        throw error; // Пробрасываем ошибку дальше
      }
    }
  };

  const handleContentChange = (value: string) => {
    setContent(value);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Заголовок *
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
        />
      </div>

      <div>
        <label
          htmlFor="slug"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          URL-slug *
        </label>
        <input
          type="text"
          id="slug"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
        />
      </div>

      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Описание
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
        />
      </div>

      <div>
        <label
          htmlFor="content"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Содержание *
        </label>
        <div className="mt-1 quill-container">
          <ReactQuill
            theme="snow"
            value={content}
            onChange={handleContentChange}
            modules={modules}
            formats={formats}
            placeholder="Введите содержание статьи..."
            className="dark:text-white"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="source"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Источник
        </label>
        <input
          type="text"
          id="source"
          value={source}
          onChange={(e) => setSource(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
        />
      </div>

      <div>
        <label
          htmlFor="published_at"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Дата публикации *
        </label>
        <input
          type="datetime-local"
          id="published_at"
          value={publishedAt}
          onChange={(e) => setPublishedAt(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
        />
      </div>

      <div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="is_published"
            checked={isPublished}
            onChange={(e) => setIsPublished(e.target.checked)}
            className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded dark:border-gray-700 dark:bg-gray-800"
          />
          <label
            htmlFor="is_published"
            className="ml-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Опубликована
          </label>
        </div>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Отметьте, если статья должна быть видна посетителям
        </p>
      </div>

      <div>
        <label
          htmlFor="image"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Обложка
        </label>
        <div className="mt-1 flex items-center space-x-4">
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
          <label
            htmlFor="image"
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            Выбрать файл
          </label>
          {imageFile && (
            <button
              type="button"
              onClick={handleImageUpload}
              disabled={uploadingImage}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50 transition-colors"
            >
              {uploadingImage ? "Загрузка..." : "Загрузить"}
            </button>
          )}
        </div>

        {imagePreview && (
          <div className="mt-4">
            <p className="text-sm text-yellow-600 dark:text-yellow-400 mb-2">
              Изображение не загружено. Нажмите &quot;Загрузить&quot;, чтобы
              сохранить.
            </p>
            <div className="relative h-40 w-full max-w-md rounded overflow-hidden">
              <Image
                src={imagePreview}
                alt="Предпросмотр"
                fill
                className="object-cover"
              />
            </div>
          </div>
        )}

        {imageUrl && !imagePreview && (
          <div className="mt-4">
            <p className="text-sm text-green-600 dark:text-green-400 mb-2">
              Текущее изображение:
            </p>
            <div className="relative h-40 w-full max-w-md rounded overflow-hidden">
              <Image
                src={imageUrl}
                alt="Обложка статьи"
                fill
                className="object-cover"
              />
            </div>
          </div>
        )}
      </div>

      <div className="flex space-x-4">
        <button
          type="submit"
          disabled={isSubmitting || uploadingImage}
          className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 transition-colors"
        >
          {isSubmitting
            ? "Сохранение..."
            : article
            ? "Обновить статью"
            : "Создать статью"}
        </button>
      </div>

      <style jsx global>{`
        .quill-container {
          height: 500px;
        }
        .ql-editor {
          min-height: 400px;
          max-height: 600px;
        }
        .ql-container {
          font-size: 16px;
        }
        .dark .ql-toolbar.ql-snow {
          background-color: #374151;
          border-color: #4b5563;
        }
        .dark .ql-container.ql-snow {
          border-color: #4b5563;
        }
        .dark .ql-editor {
          color: #e5e7eb;
          background-color: #1f2937;
        }
        .dark .ql-picker-label,
        .dark .ql-picker-options {
          color: #e5e7eb;
        }
        .dark .ql-toolbar.ql-snow .ql-formats button {
          color: #e5e7eb;
        }
        .dark .ql-toolbar.ql-snow .ql-formats svg {
          fill: #e5e7eb;
          stroke: #e5e7eb;
        }
      `}</style>
    </form>
  );
}
