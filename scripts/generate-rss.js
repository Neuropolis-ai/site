require("dotenv").config();
const fs = require("fs");
const path = require("path");
const { createClient } = require("@supabase/supabase-js");
const iconv = require("iconv-lite");

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

    console.log(`Найдено ${articles?.length || 0} статей`);

    // Формируем XML
    const xml = `<?xml version="1.0" encoding="windows-1251"?>
<rss xmlns:yandex="http://news.yandex.ru" xmlns:media="http://search.yahoo.com/mrss/" version="2.0">
  <channel>
    <title>Блог Neuropolis.ai</title>
    <link>https://neuropolis.ai/</link>
    <description>ИИ-агенты и автоматизация бизнес-процессов</description>
    <language>ru</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>${
      articles
        ? articles
            .map((article) => {
              const articleUrl = formatUrl(
                `https://neuropolis.ai/blog/${article.slug}`
              );
              const pubDate = new Date(article.published_at).toUTCString();
              const imageUrl = formatUrl(article.image_url);
              const fullText = cleanText(article.content);

              return `
    <item>
      <title>${escapeXml(article.title)}</title>
      <link>${articleUrl}</link>
      <guid isPermaLink="true">${articleUrl}</guid>
      <description>${escapeXml(article.description || "")}</description>
      <author>agent@neuropolis.ai (Neuropolis.ai)</author>
      <category>Искусственный интеллект</category>
      <pubDate>${pubDate}</pubDate>
      <yandex:genre>article</yandex:genre>${
        imageUrl
          ? `
      <media:content url="${imageUrl}" type="image/jpeg" />
      <media:thumbnail url="${imageUrl}" />`
          : ""
      }
      <yandex:full-text>${escapeXml(fullText)}</yandex:full-text>
    </item>`;
            })
            .join("\n")
        : ""
    }
  </channel>
</rss>`;

    // Создаем директорию public, если её нет
    const publicDir = path.join(process.cwd(), "public");
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir);
    }

    // Конвертируем в windows-1251 и сохраняем
    const rssPath = path.join(publicDir, "rss.xml");
    const buffer = iconv.encode(xml, "windows-1251");
    fs.writeFileSync(rssPath, buffer);
    console.log("RSS файл успешно сгенерирован:", rssPath);
  } catch (error) {
    console.error("Ошибка при генерации RSS:", error);
    process.exit(1);
  }
}

// Запускаем генерацию
generateRss();
