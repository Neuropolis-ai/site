// Скрипт для подготовки к деплою на Vercel
console.log('Запускаю подготовку к деплою на Vercel...');

// Устанавливаем переменные окружения для уменьшения логов
process.env.NODE_ENV = 'production';
process.env.LOG_LEVEL = 'error';
process.env.NEXT_PUBLIC_ENABLE_DEBUG_LOGS = 'false';
process.env.NEXT_PUBLIC_MAX_STATIC_ARTICLES = '10';

// Переопределяем методы консоли для фильтрации логов
const originalConsoleLog = console.log;
const originalConsoleInfo = console.info;
const originalConsoleDebug = console.debug;

// Сохраняем только критически важные логи
console.log = (...args) => {
  if (args[0] && typeof args[0] === 'string' && (
    args[0].includes('error') || 
    args[0].includes('Error') || 
    args[0].includes('ERRO') ||
    args[0].includes('warn') || 
    args[0].includes('Warn') || 
    args[0].includes('WARN') ||
    // Важные сообщения о процессе сборки
    args[0].includes('Creating an optimized production build') ||
    args[0].includes('Compiled successfully') ||
    args[0].includes('Build completed')
  )) {
    originalConsoleLog(...args);
  }
};

console.info = (...args) => {
  // Отключаем info-логи полностью
};

console.debug = (...args) => {
  // Отключаем debug-логи полностью
};

console.log('Логирование ограничено для деплоя на Vercel.');
console.log('Запускаю стандартную сборку...');

// Продолжаем со стандартным процессом сборки
require('../node_modules/next/dist/bin/next'); 