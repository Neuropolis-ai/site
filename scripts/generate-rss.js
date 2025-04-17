const fs = require("fs");
const path = require("path");
const { createClient } = require("@supabase/supabase-js");
const iconv = require("iconv-lite");

// Инициализация Supabase клиента
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
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
    // Получаем статьи из Supabase
    const { data: articles, error } = await supabase
      .from("articles")
      .select("*")
      .order("published_at", { ascending: false });

    if (error) throw error;

    // Формируем XML
    const xml = `<?xml version="1.0" encoding="windows-1251"?>
<rss xmlns:yandex="http://news.yandex.ru" xmlns:media="http://search.yahoo.com/mrss/" version="2.0">
  <channel>
    <title>Блог Neuropolis.ai</title>
    <link>https://neuropolis.ai/</link>
    <description>Статьи о применении ИИ в бизнесе и кейсы автоматизации</description>
    <language>ru</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${articles
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
      .join("")}
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
    fs.writeFileSync(path.join(publicDir, "rss.xml"), buffer);
    console.log("RSS файл успешно сгенерирован");
  } catch (error) {
    console.error("Ошибка при генерации RSS:", error);
    process.exit(1);
  }
}

// Запускаем генерацию
generateRss();
