"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";

interface OptimizedImageProps extends Omit<ImageProps, "src"> {
  src: string;
  fallbackSrc?: string;
  lazyLoad?: boolean;
  seoDescription?: string;
}

/**
 * Компонент для оптимизированных изображений с поддержкой WebP и отложенной загрузкой
 * @param src - Путь к изображению (будет автоматически заменен на WebP версию если она существует)
 * @param fallbackSrc - Запасное изображение, если основное не загрузится
 * @param lazyLoad - Флаг для включения отложенной загрузки (по умолчанию true)
 * @param alt - Альтернативный текст для изображения (обязательный параметр для SEO)
 * @param seoDescription - Расширенное описание изображения для SEO
 * @param className - CSS классы
 * @param priority - Приоритет загрузки (отключает lazy loading)
 * @param other - Остальные свойства компонента Image из Next.js
 */
const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  fallbackSrc = "/assets/images/placeholder.jpg",
  lazyLoad = true,
  alt = "",
  seoDescription,
  className = "",
  priority = false,
  ...other
}) => {
  const [isError, setIsError] = useState(false);
  const [isWebpFailed, setIsWebpFailed] = useState(false);

  // Убедимся, что у изображения всегда есть описательный alt-текст
  const safeAlt = alt || getAltFromSrc(src);

  // Преобразуем путь изображения в WebP формат
  const getWebpSrc = (originalSrc: string) => {
    if (isWebpFailed) return originalSrc;
    
    // Если src - это внешний URL, возвращаем как есть
    if (originalSrc.startsWith('http')) return originalSrc;
    
    const extension = originalSrc.split('.').pop()?.toLowerCase();
    if (extension && ['jpg', 'jpeg', 'png'].includes(extension)) {
      return originalSrc.replace(new RegExp(`\\.${extension}$`), '.webp');
    }
    return originalSrc;
  };

  // Извлекаем alt из имени файла, если не указан явно
  function getAltFromSrc(src: string): string {
    try {
      // Извлекаем имя файла из пути
      const fileName = src.split('/').pop() || '';
      // Извлекаем имя без расширения
      const nameWithoutExtension = fileName.split('.')[0] || '';
      // Заменяем дефисы и подчеркивания на пробелы и делаем первую букву заглавной
      return nameWithoutExtension
        .replace(/[-_]/g, ' ')
        .replace(/\b\w/g, l => l.toUpperCase());
    } catch (e) {
      return "Изображение";
    }
  }

  const handleError = () => {
    // Если WebP не загрузился, пробуем оригинальный формат
    if (!isWebpFailed) {
      setIsWebpFailed(true);
    } else {
      // Если и оригинал не загрузился, используем запасное изображение
      setIsError(true);
    }
  };

  // Определяем, какой источник изображения использовать
  const imageSrc = isError 
    ? fallbackSrc 
    : isWebpFailed 
      ? src 
      : getWebpSrc(src);

  // Настройки отложенной загрузки
  const loadingStrategy = priority ? "eager" : lazyLoad ? "lazy" : "eager";

  return (
    <div 
      itemScope 
      itemType="https://schema.org/ImageObject"
      className="relative"
    >
      <meta itemProp="contentUrl" content={src} />
      <meta itemProp="name" content={safeAlt} />
      {seoDescription && <meta itemProp="description" content={seoDescription} />}
      
      <Image
        src={imageSrc}
        alt={safeAlt}
        className={className}
        loading={loadingStrategy}
        priority={priority}
        onError={handleError}
        {...other}
      />
    </div>
  );
};

export default OptimizedImage; 