/**
 * Скрипт для проверки и исправления конфигурации страницы 404
 * 
 * Этот скрипт проверяет, правильно ли настроена страница 404 в Next.js
 * и исправляет проблемы, если они есть.
 */

const fs = require('fs');
const path = require('path');

console.log('Проверка страницы 404...');

// Пути к основным файлам
const notFoundPath = path.join(process.cwd(), 'src', 'app', 'not-found.tsx');
const nextConfigPath = path.join(process.cwd(), 'next.config.js');

// Проверка существования файла not-found.tsx
if (!fs.existsSync(notFoundPath)) {
  console.error('Ошибка: файл src/app/not-found.tsx не найден!');
  process.exit(1);
}

console.log('Файл not-found.tsx найден.');

// Проверка содержимого файла next.config.js
const nextConfigContent = fs.readFileSync(nextConfigPath, 'utf8');

// Проверяем, есть ли уже настройка для страницы 404
if (!nextConfigContent.includes('async rewrites()') && !nextConfigContent.includes('rewrites:')) {
  console.log('Добавление настройки для обработки 404 страницы в next.config.js...');
  
  // Добавляем настройку rewrites в конфигурацию Next.js
  const updatedConfigContent = nextConfigContent.replace(
    'module.exports = nextConfig;',
    `  // Настройка для обработки 404 страницы
  async rewrites() {
    return [
      // Убеждаемся, что наша кастомная страница 404 используется всегда
      {
        source: '/_next/static/chunks/pages/404.js',
        destination: '/_next/static/chunks/pages/not-found.js',
      },
    ];
  },
};

module.exports = nextConfig;`
  );
  
  // Записываем обновленную конфигурацию
  fs.writeFileSync(nextConfigPath, updatedConfigContent);
  console.log('Настройка для обработки 404 страницы добавлена в next.config.js');
} else {
  console.log('Настройка для обработки 404 страницы уже присутствует в next.config.js');
}

// Проверка метаданных в файле not-found.tsx
const notFoundContent = fs.readFileSync(notFoundPath, 'utf8');

// Убедимся, что метаданные определены правильно
if (!notFoundContent.includes('export const metadata:')) {
  console.log('Добавление метаданных в файл not-found.tsx...');
  
  // Добавляем метаданные после импортов, если их нет
  const updatedNotFoundContent = notFoundContent.replace(
    'import { useTheme } from "@/context/ThemeContext";',
    `import { useTheme } from "@/context/ThemeContext";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Страница не найдена | Neuropolis.ai",
  description: "Запрошенная страница не существует или была перемещена.",
  robots: "noindex, follow",
};`
  );
  
  // Записываем обновленный файл
  fs.writeFileSync(notFoundPath, updatedNotFoundContent);
  console.log('Метаданные добавлены в файл not-found.tsx');
} else {
  console.log('Метаданные уже присутствуют в файле not-found.tsx');
}

// Проверка на наличие разделенного определения и экспорта компонента NotFound
if (notFoundContent.includes('function NotFound()') && 
    notFoundContent.includes('export default NotFound;')) {
  console.log('Компонент NotFound определен и экспортирован правильно');
} else if (notFoundContent.includes('export default function NotFound()')) {
  // Если компонент определен и экспортирован в одной строке, это тоже нормально
  console.log('Компонент NotFound определен и экспортирован в одной строке');
} else {
  console.log('Предупреждение: формат определения компонента NotFound может быть неоптимальным');
}

console.log('Проверка и исправление страницы 404 завершены.');
console.log('Для применения изменений необходимо пересобрать проект командой:');
console.log('  npm run build'); 