"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";

interface OptimizedImageProps extends Omit<ImageProps, "src"> {
  src: string;
  fallbackSrc?: string;
  lazyLoad?: boolean;
}

/**
 * Компонент для оптимизированных изображений с поддержкой WebP и отложенной загрузкой
 * @param src - Путь к изображению (будет автоматически заменен на WebP версию если она существует)
 * @param fallbackSrc - Запасное изображение, если основное не загрузится
 * @param lazyLoad - Флаг для включения отложенной загрузки (по умолчанию true)
 * @param alt - Альтернативный текст для изображения
 * @param className - CSS классы
 * @param priority - Приоритет загрузки (отключает lazy loading)
 * @param other - Остальные свойства компонента Image из Next.js
 */
const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  fallbackSrc = "/assets/images/placeholder.jpg",
  lazyLoad = true,
  alt,
  className = "",
  priority = false,
  ...other
}) => {
  const [isError, setIsError] = useState(false);
  const [isWebpFailed, setIsWebpFailed] = useState(false);

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
    <Image
      src={imageSrc}
      alt={alt || ""}
      className={className}
      loading={loadingStrategy}
      priority={priority}
      onError={handleError}
      {...other}
    />
  );
};

export default OptimizedImage; 