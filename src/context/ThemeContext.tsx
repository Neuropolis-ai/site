"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export type Theme = "light";

interface ThemeContextType {
  theme: Theme;
  isDark: boolean;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  isDark: false,
});

function getInitialThemeVal(): Theme {
  return "light";
}

// Светлая тема по умолчанию для первоначальной загрузки
export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>("light");
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    try {
      // Устанавливаем светлую тему
      setTheme("light");
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
      setIsInitialized(true);
    } catch (e) {
      console.error("Error setting initial theme:", e);
      setTheme("light");
      document.documentElement.setAttribute("data-theme", "light");
      setIsInitialized(true);
    }
  }, []);

  const isDark = false;

  return (
    <ThemeContext.Provider value={{ theme, isDark }}>
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
