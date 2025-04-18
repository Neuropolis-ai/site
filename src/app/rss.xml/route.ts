import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";
import { encode } from "iconv-lite";

// Функция для генерации RSS
async function generateRss() {
  // Получаем все статьи из Supabase
  const { data: articles, error } = await supabase
    .from("articles")
    .select("*")
    .eq("is_published", true)
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

  return xml;
}

export async function GET() {
  try {
    const xml = await generateRss();

    // Конвертируем в windows-1251
    const buffer = encode(xml, "windows-1251");

    // Возвращаем XML с правильными заголовками
    return new NextResponse(buffer, {
      headers: {
        "Content-Type": "application/rss+xml; charset=windows-1251",
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    console.error("Error generating RSS:", error);
    return new NextResponse("Error generating RSS feed", {
      status: 500,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    });
  }
}

// Функция для экранирования специальных символов XML
function escapeXml(unsafe: string): string {
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

// Функция для удаления HTML-тегов из текста
function stripHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, "") // Удаляем HTML-теги
    .replace(/&nbsp;/g, " ") // Заменяем неразрывные пробелы
    .replace(/\s+/g, " ") // Заменяем множественные пробелы одним
    .trim(); // Убираем пробелы в начале и конце
}
