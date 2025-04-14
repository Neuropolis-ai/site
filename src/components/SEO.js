import Head from "next/head";

export default function SEO({
  title = "Neuropolis.ai - Цифровая трансформация и автоматизация бизнеса",
  description = "Современные IT решения для бизнеса: искусственный интеллект, автоматизация, цифровая трансформация.",
  keywords = "искусственный интеллект, цифровая трансформация, автоматизация, нейронные сети, машинное обучение, ИИ, бизнес решения, IT консалтинг",
  ogImage = "https://neuropolis.ai/og-image.jpg",
  canonicalUrl,
}) {
  // Конструируем канонический URL
  const canonical = canonicalUrl
    ? canonicalUrl
    : `https://neuropolis.ai${
        typeof window !== "undefined" ? window.location.pathname : ""
      }`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Канонический URL */}
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonical} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {/* Другие полезные мета-теги */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="format-detection" content="telephone=no" />

      {/* Иконки сайта */}
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
    </Head>
  );
}
