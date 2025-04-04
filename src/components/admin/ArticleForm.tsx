"use client";

import { Article } from "@/lib/supabase";
import { uploadArticleImage } from "@/lib/blogApi";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Editor } from "@tinymce/tinymce-react";
// Убираем импорты, вызывающие ошибки
// import 'tinymce/tinymce';
// import 'tinymce/themes/silver';
// import 'tinymce/skins/ui/oxide/skin.css';
// ... и так далее

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
  const editorRef = useRef<any>(null);

  // Заполнить форму данными существующей статьи при редактировании
  useEffect(() => {
    if (article) {
      setTitle(article.title);
      setSlug(article.slug);
      setContent(article.content);
      setDescription(article.description || "");
      setSource(article.source || "");
      setImageUrl(article.image_url || "");

      // Форматирование даты для поля ввода типа datetime-local
      const date = new Date(article.published_at);
      setPublishedAt(date.toISOString().slice(0, 16));
    } else {
      // Значения по умолчанию для новой статьи
      const now = new Date();
      setPublishedAt(now.toISOString().slice(0, 16));
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

  // Функция для обработки загрузки изображений в редакторе
  const handleEditorImageUpload = async (
    blobInfo: any,
    progress: Function
  ): Promise<string> => {
    return new Promise(async (resolve, reject) => {
      try {
        const file = blobInfo.blob();
        const url = await uploadArticleImage(file);
        if (url) {
          resolve(url);
        } else {
          reject("Ошибка при загрузке изображения");
        }
      } catch (error) {
        console.error("Ошибка при загрузке изображения:", error);
        reject("Ошибка при загрузке изображения");
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const publishedDate = new Date(publishedAt);
    const editorContent = editorRef.current
      ? editorRef.current.getContent()
      : content;

    await onSubmit({
      title,
      slug,
      content: editorContent,
      description,
      source,
      image_url: imageUrl,
      published_at: publishedDate.toISOString(),
    });
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
        <div className="mt-1">
          <Editor
            onInit={(_, editor) => (editorRef.current = editor)}
            initialValue={content}
            apiKey="no-api-key" // нам нужен api-key для редактора в сети
            init={{
              height: 500,
              menubar: true,
              plugins: [
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "help",
                "wordcount",
              ],
              toolbar:
                "undo redo | formatselect | " +
                "bold italic backcolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help | image media link",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
              images_upload_handler: handleEditorImageUpload,
              automatic_uploads: true,
              file_picker_types: "image media",
            }}
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
              Изображение не загружено. Нажмите "Загрузить", чтобы сохранить.
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
    </form>
  );
}
