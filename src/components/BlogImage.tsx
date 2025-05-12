"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

type BlogImageProps = Omit<ImageProps, "onError"> & {
  fallbackSrc?: string;
};

const BlogImage = ({
  src,
  alt,
  fallbackSrc = "/placeholder.jpg",
  ...props
}: BlogImageProps) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [isError, setIsError] = useState(false);

  const handleError = () => {
    if (!isError) {
      setIsError(true);
      setImgSrc(fallbackSrc);
    }
  };

  return (
    <Image
      src={imgSrc}
      alt={alt}
      {...props}
      onError={handleError}
      unoptimized={true}
    />
  );
};

export default BlogImage;
