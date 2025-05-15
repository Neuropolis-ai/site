require("dotenv").config();
const fs = require("fs");
const path = require("path");
const { createClient } = require("@supabase/supabase-js");

// Включает или отключает отладочные логи
const ENABLE_DEBUG_LOGS = false;

// Вспомогательная функция для логирования
function debugLog(...args) {
  if (ENABLE_DEBUG_LOGS) {
    console.log(...args);
  }
}

// Проверяем наличие необходимых переменных окружения
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error(
    "Ошибка: Не найдены переменные окружения NEXT_PUBLIC_SUPABASE_URL и/или NEXT_PUBLIC_SUPABASE_ANON_KEY"
  );
  process.exit(1);
}

// Инициализация Supabase клиента
const supabase = createClient(supabaseUrl, supabaseAnonKey);

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

    // Получаем статьи из Supabase
    const { data: articles, error } = await supabase
      .from("articles")
      .select("*")
      .order("published_at", { ascending: false });

    if (error) {
      console.error("Ошибка при получении статей:", error);
      throw error;
    }

    if (!articles || articles.length === 0) {
      console.log("Предупреждение: Статьи не найдены");
    }

    debugLog(`Найдено ${articles?.length || 0} статей`);

    // Создаем массив для элементов item
    const items = [];

    // Обрабатываем каждую статью
    if (articles && articles.length > 0) {
      for (const article of articles) {
        const articleUrl = formatUrl(
          `https://neuropolis.ai/blog/${article.slug}`
        );
        const pubDate = new Date(article.published_at).toUTCString();
        const imageUrl = formatUrl(article.image_url);
        const fullText = cleanText(article.content);

        // Формируем item без переносов строк внутри тегов
        let item = `<item>
<title>${escapeXml(article.title)}</title>
<link>${articleUrl}</link>
<guid isPermaLink="true">${articleUrl}</guid>
<description>${escapeXml(article.description || "")}</description>
<author>agent@neuropolis.ai (Neuropolis.ai)</author>
<category>Искусственный интеллект</category>
<pubDate>${pubDate}</pubDate>
<yandex:genre>article</yandex:genre>`;

        // Добавляем информацию об изображении, только если оно есть
        if (imageUrl) {
          item += `
<media:content url="${imageUrl}" type="image/jpeg" />
<media:thumbnail url="${imageUrl}" />`;
        }

        // Добавляем полный текст и закрываем item
        item += `
<yandex:full-text>${escapeXml(fullText)}</yandex:full-text>
</item>`;

        items.push(item);
      }
    }

    // Формируем XML с добавлением atom namespace и atom:link
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:yandex="http://news.yandex.ru" xmlns:media="http://search.yahoo.com/mrss/" xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
<channel>
<title>Блог Neuropolis.ai</title>
<link>https://neuropolis.ai/</link>
<atom:link href="https://neuropolis.ai/rss.xml" rel="self" type="application/rss+xml" />
<description>ИИ-агенты и автоматизация бизнес-процессов</description>
<language>ru</language>
<lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items.join("\n")}
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
    console.log("RSS файл успешно сгенерирован:", rssPath);

    // Создаем альтернативный RSS файл с другим atom:link
    const rssNewXml = xml.replace(
      '<atom:link href="https://neuropolis.ai/rss.xml" rel="self" type="application/rss+xml" />',
      '<atom:link href="https://neuropolis.ai/rss-new.xml" rel="self" type="application/rss+xml" />'
    );
    const rssNewPath = path.join(publicDir, "rss-new.xml");
    fs.writeFileSync(rssNewPath, rssNewXml, "utf8");
    console.log("Альтернативный RSS файл успешно сгенерирован:", rssNewPath);

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
