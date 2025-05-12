"use client";

import React from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  ChevronsLeft, 
  ChevronsRight 
} from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  showFirstLast?: boolean;
  maxVisiblePages?: number;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  showFirstLast = true,
  maxVisiblePages = 5
}) => {
  // Если всего одна страница, не показываем пагинацию
  if (totalPages <= 1) return null;

  // Вычисляем диапазон отображаемых страниц
  const getPageRange = () => {
    // Если страниц меньше или равно максимальному количеству видимых страниц,
    // показываем все страницы
    if (totalPages <= maxVisiblePages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    // Для больших количеств страниц показываем только часть
    let startPage = Math.max(
      1,
      currentPage - Math.floor(maxVisiblePages / 2)
    );
    let endPage = startPage + maxVisiblePages - 1;

    // Корректируем, если endPage выходит за пределы
    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );
  };

  const pageRange = getPageRange();

  // Обработчик для кнопок страниц
  const handlePageClick = (page: number) => {
    if (page === currentPage) return;
    onPageChange(page);
  };

  return (
    <nav className="flex justify-center mt-10" aria-label="Pagination">
      <ul className="flex items-center">
        {/* Кнопка "Первая страница" */}
        {showFirstLast && (
          <li className="mr-1">
            <button
              onClick={() => handlePageClick(1)}
              disabled={currentPage === 1}
              className={`p-2 rounded-md ${
                currentPage === 1
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800 dark:text-blue-400'
              }`}
              aria-label="Перейти на первую страницу"
            >
              <ChevronsLeft className="h-5 w-5" />
            </button>
          </li>
        )}

        {/* Кнопка "Предыдущая страница" */}
        <li className="mr-1">
          <button
            onClick={() => handlePageClick(currentPage - 1)}
            disabled={currentPage === 1}
            className={`p-2 rounded-md ${
              currentPage === 1
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800 dark:text-blue-400'
            }`}
            aria-label="Перейти на предыдущую страницу"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
        </li>

        {/* Номера страниц */}
        {pageRange.map((page) => (
          <li key={page}>
            <button
              onClick={() => handlePageClick(page)}
              className={`px-4 py-2 mx-1 rounded-md font-medium ${
                currentPage === page
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-blue-50 dark:text-gray-300 dark:hover:bg-gray-800'
              }`}
              aria-label={`Страница ${page}`}
              aria-current={currentPage === page ? 'page' : undefined}
            >
              {page}
            </button>
          </li>
        ))}

        {/* Кнопка "Следующая страница" */}
        <li className="ml-1">
          <button
            onClick={() => handlePageClick(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`p-2 rounded-md ${
              currentPage === totalPages
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800 dark:text-blue-400'
            }`}
            aria-label="Перейти на следующую страницу"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </li>

        {/* Кнопка "Последняя страница" */}
        {showFirstLast && (
          <li className="ml-1">
            <button
              onClick={() => handlePageClick(totalPages)}
              disabled={currentPage === totalPages}
              className={`p-2 rounded-md ${
                currentPage === totalPages
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800 dark:text-blue-400'
              }`}
              aria-label="Перейти на последнюю страницу"
            >
              <ChevronsRight className="h-5 w-5" />
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
