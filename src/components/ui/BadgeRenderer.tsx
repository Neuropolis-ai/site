"use client";

import { useEffect } from "react";
import Badge from "./Badge";
import { createRoot } from "react-dom/client";

/**
 * Компонент для замены элементов с классом switch-box на компонент Badge
 */
const BadgeRenderer = () => {
  useEffect(() => {
    // Находим все элементы с классом switch-box
    const switchBoxElements = document.querySelectorAll(".switch-box");

    switchBoxElements.forEach((element) => {
      // Получаем текст из элемента
      const text = element.textContent || "";

      // Создаем новый div для монтирования Badge
      const container = document.createElement("div");
      element.parentNode?.replaceChild(container, element);

      // Создаем корень React и рендерим Badge
      const root = createRoot(container);
      root.render(<Badge>{text}</Badge>);
    });
  }, []);

  return null;
};

export default BadgeRenderer;
