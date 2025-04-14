"use client";

import { useEffect, useState } from "react";

interface ClientOnlyDateProps {
  dateString: string;
  className?: string;
}

export default function ClientOnlyDate({
  dateString,
  className,
}: ClientOnlyDateProps) {
  const [formattedDate, setFormattedDate] = useState<string>("");

  useEffect(() => {
    // Форматируем дату только на клиенте
    const date = new Date(dateString);
    const formatted = new Intl.DateTimeFormat("ru-RU", {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    }).format(date);

    setFormattedDate(formatted);
  }, [dateString]);

  // Начальное состояние - пустая строка, чтобы избежать несоответствия при гидратации
  return <span className={className}>{formattedDate}</span>;
}
