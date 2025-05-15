require("dotenv").config();
const fs = require("fs");
const path = require("path");
// Временно отключаем Supabase для деплоя
// const { createClient } = require("@supabase/supabase-js");

// Проверяем наличие необходимых переменных окружения
// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
// const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// if (!supabaseUrl || !supabaseAnonKey) {
//   console.error(
//     "Ошибка: Не найдены переменные окружения NEXT_PUBLIC_SUPABASE_URL и/или NEXT_PUBLIC_SUPABASE_ANON_KEY"
//   );
//   process.exit(1);
// }

// Инициализация Supabase клиента
// const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Функция для экранирования XML
function escapeXml(unsafe) {
  if (!unsafe) return "";
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

// Функция для удаления HTML, markdown и приведения текста к чистому виду
function cleanText(text) {
  if (!text) return "";
  return text
    .replace(/```[^`]*```/g, "") // Удаляем блоки кода
    .replace(/`[^`]+`/g, "") // Удаляем инлайн-код
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1") // Удаляем markdown ссылки
    .replace(/[*_~`#]/g, "") // Удаляем markdown форматирование
    .replace(/<[^>]+>/g, "") // Удаляем HTML-теги
    .replace(/&nbsp;/g, " ") // Заменяем неразрывные пробелы
    .replace(/\s+/g, " ") // Заменяем множественные пробелы одним
    .trim(); // Убираем пробелы в начале и конце
}

// Функция для форматирования URL с корректным экранированием амперсандов
function formatUrl(url) {
  if (!url) return "";
  try {
    const formattedUrl = new URL(url);
    // Убеждаемся, что URL использует HTTPS
    formattedUrl.protocol = "https:";
    // Заменяем & на &amp; во всех параметрах, но только после знака ?
    const urlString = formattedUrl.toString();
    const [baseUrl, query] = urlString.split("?");
    if (query) {
      return `${baseUrl}?${query.replace(/&/g, "&amp;")}`;
    }
    return urlString;
  } catch (e) {
    console.warn("Некорректный URL:", url);
    return "";
  }
}

async function generateRss() {
  try {
    console.log("Начинаем генерацию RSS...");

    // Временно отключаем генерацию RSS с реальными статьями для деплоя
    // Создаем пустой RSS-файл
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:yandex="http://news.yandex.ru" xmlns:media="http://search.yahoo.com/mrss/" xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
<channel>
<title>Блог Neuropolis.ai</title>
<link>https://neuropolis.ai/</link>
<atom:link href="https://neuropolis.ai/rss.xml" rel="self" type="application/rss+xml" />
<description>ИИ-агенты и автоматизация бизнес-процессов</description>
<language>ru</language>
<lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
<!-- Статьи временно отключены для деплоя -->
</channel>
</rss>`;

    // Создаем директорию public, если её нет
    const publicDir = path.join(process.cwd(), "public");
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir);
    }

    // Сохраняем в UTF-8
    const rssPath = path.join(publicDir, "rss.xml");
    fs.writeFileSync(rssPath, xml, "utf8");
    console.log("Пустой RSS файл успешно сгенерирован:", rssPath);

    // Создаем альтернативный RSS файл с другим atom:link
    const rssNewXml = xml.replace(
      '<atom:link href="https://neuropolis.ai/rss.xml" rel="self" type="application/rss+xml" />',
      '<atom:link href="https://neuropolis.ai/rss-new.xml" rel="self" type="application/rss+xml" />'
    );
    const rssNewPath = path.join(publicDir, "rss-new.xml");
    fs.writeFileSync(rssNewPath, rssNewXml, "utf8");
    console.log("Альтернативный пустой RSS файл успешно сгенерирован:", rssNewPath);

    // Проверяем размер
    const stats = fs.statSync(rssPath);
    console.log(`Размер RSS файла: ${Math.round(stats.size / 1024)} KB`);
  } catch (error) {
    console.error("Ошибка при генерации RSS:", error);
    process.exit(1);
  }
}

// Запускаем генерацию
generateRss();
