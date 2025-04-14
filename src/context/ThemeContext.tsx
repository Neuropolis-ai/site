"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isDark: boolean;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  toggleTheme: () => {},
  isDark: true,
});

// Создаем отдельную функцию для определения начальной темы для SSR
// Важно: Эта функция должна быть внутри компонента на клиенте
// чтобы избежать ошибок при серверном рендеринге
const getInitialThemeVal = (): Theme => "dark"; // Темная тема по умолчанию для первоначальной загрузки

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>(getInitialThemeVal());
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    try {
      // Проверяем наличие сохраненной темы в localStorage
      const storedTheme = localStorage.getItem("theme") as Theme | null;
      if (storedTheme) {
        setTheme(storedTheme);
        document.documentElement.setAttribute("data-theme", storedTheme);
      } else {
        // Если нет сохраненной темы, проверяем системные предпочтения
        const prefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        const initialTheme = prefersDark ? "dark" : "dark";
        setTheme(initialTheme);
        document.documentElement.setAttribute("data-theme", initialTheme);
        localStorage.setItem("theme", initialTheme);
      }
      setIsInitialized(true);
    } catch (e) {
      console.error("Error setting initial theme:", e);
      setTheme("dark"); // При ошибке используем темную тему
      document.documentElement.setAttribute("data-theme", "dark");
      setIsInitialized(true);
    }
  }, []);

  // Добавляем слушатель изменений системной темы
  useEffect(() => {
    if (!isInitialized) return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      // Обновляем тему только если пользователь не установил её вручную
      if (!localStorage.getItem("theme")) {
        const newTheme = e.matches ? "dark" : "dark";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [isInitialized]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const isDark = theme === "dark";

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
