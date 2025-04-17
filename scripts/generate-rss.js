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
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "&":
        return "&amp;";
      case "'":
        return "&apos;";
      case '"':
        return "&quot;";
      default:
        return c;
    }
  });
}

// Функция для удаления HTML
function stripHtml(html) {
  return html
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
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
      // Создаем пустой RSS даже если нет статей
    }

    console.log(`Найдено ${articles?.length || 0} статей`);

    // Формируем XML
    const xml = `<?xml version="1.0" encoding="windows-1251"?>
<rss xmlns:yandex="http://news.yandex.ru" xmlns:media="http://search.yahoo.com/mrss/" version="2.0">
  <channel>
    <title>Блог Neuropolis.ai</title>
    <link>https://neuropolis.ai/</link>
    <description>Статьи о применении ИИ в бизнесе и кейсы автоматизации</description>
    <language>ru</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${
      articles
        ? articles
            .map(
              (article) => `
    <item>
      <title>${escapeXml(article.title)}</title>
      <link>https://neuropolis.ai/blog/${article.slug}</link>
      <pdalink>https://neuropolis.ai/blog/${article.slug}</pdalink>
      <description>${escapeXml(article.description || "")}</description>
      <author>Neuropolis.ai</author>
      <category>Искусственный интеллект</category>
      <pubDate>${new Date(article.published_at).toUTCString()}</pubDate>
      <yandex:genre>article</yandex:genre>
      <yandex:full-text>${escapeXml(
        stripHtml(article.content)
      )}</yandex:full-text>
      ${
        article.image_url
          ? `
      <media:group>
        <media:content url="${article.image_url}" type="image/jpeg" />
        <media:thumbnail url="${article.image_url}" />
      </media:group>`
          : ""
      }
    </item>`
            )
            .join("")
        : ""
    }
  </channel>
</rss>`;

    // Конвертируем в windows-1251
    const buffer = iconv.encode(xml, "windows-1251");

    // Создаем директорию public, если её нет
    const publicDir = path.join(process.cwd(), "public");
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir);
    }

    // Сохраняем файл
    const rssPath = path.join(publicDir, "rss.xml");
    fs.writeFileSync(rssPath, buffer);
    console.log("RSS файл успешно сгенерирован:", rssPath);
  } catch (error) {
    console.error("Ошибка при генерации RSS:", error);
    process.exit(1);
  }
}

// Запускаем генерацию
generateRss();
