"use client";

import React from "react";

type LoadingSpinnerProps = {
  size?: "small" | "medium" | "large";
  color?: "blue" | "gray" | "white";
};

export default function LoadingSpinner({
  size = "medium",
  color = "blue",
}: LoadingSpinnerProps) {
  // Размеры спиннера
  const sizes = {
    small: "h-4 w-4",
    medium: "h-6 w-6",
    large: "h-10 w-10",
  };

  // Цвета спиннера
  const colors = {
    blue: "border-blue-600 dark:border-blue-400",
    gray: "border-gray-600 dark:border-gray-400",
    white: "border-white dark:border-gray-100",
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className={`inline-block ${sizes[size]} animate-spin rounded-full border-4 border-solid ${colors[color]} border-r-transparent`}
        role="status"
        aria-label="Загрузка"
      />
      <span className="mt-2 text-sm text-gray-600 dark:text-gray-300">
        Загрузка...
      </span>
    </div>
  );
}
