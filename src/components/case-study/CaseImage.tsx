"use client";

import OptimizedImage from "@/components/ui/OptimizedImage";

interface CaseImageProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  loading?: "eager" | "lazy";
  seoDescription?: string;
}

/**
 * Компонент для изображений кейсов, который безопасно обрабатывает атрибуты fill и size
 * для избежания ошибки "Image with src has both 'width' and 'fill' properties"
 * 
 * @param src - Путь к изображению
 * @param alt - Альтернативный текст для изображения (обязательный для SEO)
 * @param className - CSS классы
 * @param sizes - Параметр sizes для отзывчивых изображений
 * @param priority - Флаг приоритетной загрузки (для LCP изображений)
 * @param loading - Стратегия загрузки "eager" или "lazy"
 * @param seoDescription - Расширенное описание для SEO
 */
const CaseImage: React.FC<CaseImageProps> = ({
  src,
  alt,
  className = "object-cover",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  priority = false,
  loading = "lazy",
  seoDescription
}) => {
  return (
    <div className="relative h-full w-full">
      <OptimizedImage
        src={src}
        alt={alt}
        fill
        className={className}
        sizes={sizes}
        priority={priority}
        lazyLoad={loading === "lazy"}
        seoDescription={seoDescription || `Изображение для раздела кейса: ${alt}`}
      />
    </div>
  );
};

export default CaseImage; 