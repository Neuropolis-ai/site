"use client";

import { createContext, useContext, ReactNode, useEffect } from "react";

// Упрощенный тип темы - только светлая тема
export type Theme = "light";

interface ThemeContextType {
  theme: Theme;
  isDark: boolean;
}

// Создаем контекст только со светлой темой
export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  isDark: false
});

// Хук для доступа к контексту
export const useTheme = () => useContext(ThemeContext);

// Провайдер для оборачивания приложения
export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // Всегда используем светлую тему
  const theme: Theme = "light";
  const isDark = false;

  // Эффект для установки светлой темы при загрузке
  useEffect(() => {
    // Установка светлой темы в HTML
    document.documentElement.setAttribute("data-theme", "light");
    
    // Добавляем классы для принудительного применения светлой темы
    document.documentElement.classList.add("light-theme");
    document.documentElement.classList.add("forced-light-theme");
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
};
