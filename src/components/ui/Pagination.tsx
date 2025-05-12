"use client";

import { useTheme } from "@/context/ThemeContext";
import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const { isDark } = useTheme();

  // Создаем массив страниц для отображения
  const getPageNumbers = () => {
    const pageNumbers = [];

    // Всегда показываем первую страницу
    pageNumbers.push(1);

    // Определяем диапазон страниц вокруг текущей
    const startPage = Math.max(2, currentPage - 1);
    const endPage = Math.min(totalPages - 1, currentPage + 1);

    // Добавляем многоточие после первой страницы, если нужно
    if (startPage > 2) {
      pageNumbers.push("...");
    }

    // Добавляем страницы в диапазоне
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    // Добавляем многоточие перед последней страницей, если нужно
    if (endPage < totalPages - 1) {
      pageNumbers.push("...");
    }

    // Всегда показываем последнюю страницу, если она существует
    if (totalPages > 1) {
      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center items-center mt-8 space-x-2">
      {/* Кнопка "Назад" */}
      <button
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-3 py-2 rounded-md ${
          isDark
            ? "bg-[#111] text-gray-300 border border-gray-700 hover:bg-[#222]"
            : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
        } ${
          currentPage === 1 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
        }`}
      >
        &laquo;
      </button>

      {/* Номера страниц */}
      {getPageNumbers().map((page, index) => (
        <React.Fragment key={index}>
          {page === "..." ? (
            <span
              className={`px-3 py-2 ${
                isDark ? "text-gray-400" : "text-gray-500"
              }`}
            >
              ...
            </span>
          ) : (
            <button
              onClick={() => typeof page === "number" && onPageChange(page)}
              className={`px-3 py-2 rounded-md ${
                currentPage === page
                  ? isDark
                    ? "bg-blue-600 text-white"
                    : "bg-blue-500 text-white"
                  : isDark
                  ? "bg-[#111] text-gray-300 border border-gray-700 hover:bg-[#222]"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
              }`}
            >
              {page}
            </button>
          )}
        </React.Fragment>
      ))}

      {/* Кнопка "Вперед" */}
      <button
        onClick={() =>
          currentPage < totalPages && onPageChange(currentPage + 1)
        }
        disabled={currentPage === totalPages}
        className={`px-3 py-2 rounded-md ${
          isDark
            ? "bg-[#111] text-gray-300 border border-gray-700 hover:bg-[#222]"
            : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
        } ${
          currentPage === totalPages
            ? "opacity-50 cursor-not-allowed"
            : "cursor-pointer"
        }`}
      >
        &raquo;
      </button>
    </div>
  );
};

export default Pagination;
