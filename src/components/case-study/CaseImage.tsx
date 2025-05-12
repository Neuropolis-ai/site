"use client";

import Image from "next/image";
import { useState } from "react";

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
  const [isError, setIsError] = useState(false);

  const handleError = () => {
    setIsError(true);
  };

  // Если изображение не загрузилось, показываем запасное
  const imageSrc = isError ? "/assets/images/placeholder.jpg" : src;

  return (
    <div className="relative h-full w-full">
      <Image
        src={imageSrc}
        alt={alt}
        fill
        className={className}
        sizes={sizes}
        priority={priority}
        loading={loading}
        onError={handleError}
      />
    </div>
  );
};

export default CaseImage; 