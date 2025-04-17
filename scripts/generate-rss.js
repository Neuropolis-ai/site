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
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "&":
        // Не экранируем уже экранированные амперсанды
        return unsafe.startsWith("&amp;") ? c : "&amp;";
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
  if (!html) return "";
  return html
    .replace(/<[^>]+>/g, "") // Удаляем HTML-теги
    .replace(/&nbsp;/g, " ") // Заменяем неразрывные пробелы
    .replace(/\s+/g, " ") // Заменяем множественные пробелы одним
    .trim(); // Убираем пробелы в начале и конце
}

// Функция для форматирования URL изображения
function formatImageUrl(url) {
  if (!url) return "";
  try {
    const imageUrl = new URL(url);
    // Удаляем параметры качества и обрезки
    imageUrl.search = "";
    return imageUrl.toString();
  } catch (e) {
    console.warn("Некорректный URL изображения:", url);
    return url;
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
      // Создаем пустой RSS даже если нет статей
    }

    console.log(`Найдено ${articles?.length || 0} статей`);

    // Формируем XML
    const xml = `<?xml version="1.0" encoding="windows-1251"?>
<rss version="2.0" 
     xmlns:yandex="http://news.yandex.ru"
     xmlns:media="http://search.yahoo.com/mrss/"
     xmlns:turbo="http://turbo.yandex.ru"
     xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>Блог Neuropolis.ai</title>
    <link>https://neuropolis.ai/</link>
    <description>Статьи о применении ИИ в бизнесе и кейсы автоматизации</description>
    <language>ru</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <generator>Neuropolis RSS Generator</generator>
    <docs>http://blogs.law.harvard.edu/tech/rss</docs>
    ${
      articles
        ? articles
            .map((article) => {
              const articleUrl = `https://neuropolis.ai/blog/${article.slug}`;
              const pubDate = new Date(article.published_at).toUTCString();
              const imageUrl = formatImageUrl(article.image_url);

              return `
    <item>
      <title>${escapeXml(article.title)}</title>
      <link>${articleUrl}</link>
      <guid isPermaLink="true">${articleUrl}</guid>
      <description>${escapeXml(article.description || "")}</description>
      <dc:creator>info@neuropolis.ai (Neuropolis.ai)</dc:creator>
      <category>Искусственный интеллект</category>
      <pubDate>${pubDate}</pubDate>
      <yandex:genre>article</yandex:genre>
      <turbo:content>
        <![CDATA[${article.content || ""}]]>
      </turbo:content>
      <yandex:full-text>${escapeXml(
        stripHtml(article.content)
      )}</yandex:full-text>
      ${
        imageUrl
          ? `
      <enclosure url="${imageUrl}" type="image/jpeg" />
      <media:content url="${imageUrl}" type="image/jpeg" medium="image">
        <media:title>${escapeXml(article.title)}</media:title>
        <media:description>${escapeXml(
          article.description || ""
        )}</media:description>
      </media:content>`
          : ""
      }
    </item>`;
            })
            .join("\n")
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
