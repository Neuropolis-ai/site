import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Если пакеты clsx и tailwind-merge ещё не установлены, выполните:
// pnpm add clsx tailwind-merge

/**
 * Объединяет классы с помощью clsx и tailwind-merge
 * для корректного объединения классов Tailwind CSS
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
