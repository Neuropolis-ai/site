"use client";

import OptimizedImage from "@/components/ui/OptimizedImage";

interface CaseImageProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  loading?: "eager" | "lazy";
}

/**
 * Компонент для изображений кейсов, который безопасно обрабатывает атрибуты fill и size
 * для избежания ошибки "Image with src has both 'width' and 'fill' properties"
 */
const CaseImage: React.FC<CaseImageProps> = ({
  src,
  alt,
  className = "object-cover",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  priority = false,
  loading = "lazy"
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
      />
    </div>
  );
};

export default CaseImage; 