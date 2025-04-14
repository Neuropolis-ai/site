"use client";

import { useState, useEffect } from "react";

interface FormattedDateProps {
  dateString: string;
  className?: string;
  format?: "full" | "short" | "medium";
}

export default function FormattedDate({
  dateString,
  className = "",
  format = "full",
}: FormattedDateProps) {
  const [formattedDate, setFormattedDate] = useState<string>("");

  useEffect(() => {
    if (!dateString) return;

    try {
      const date = new Date(dateString);

      let options: Intl.DateTimeFormatOptions;

      switch (format) {
        case "short":
          options = {
            day: "numeric",
            month: "numeric",
            year: "numeric",
            timeZone: "UTC",
          };
          break;
        case "medium":
          options = {
            day: "numeric",
            month: "short",
            year: "numeric",
            timeZone: "UTC",
          };
          break;
        case "full":
        default:
          options = {
            day: "numeric",
            month: "long",
            year: "numeric",
            timeZone: "UTC",
          };
          break;
      }

      const formatted = new Intl.DateTimeFormat("ru-RU", options).format(date);
      setFormattedDate(formatted);
    } catch (error) {
      console.error("Ошибка форматирования даты:", error);
      setFormattedDate(dateString);
    }
  }, [dateString, format]);

  if (!formattedDate) {
    return <span className={className}></span>;
  }

  return <span className={className}>{formattedDate}</span>;
}
