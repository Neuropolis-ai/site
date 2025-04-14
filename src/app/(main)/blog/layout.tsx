import type { Metadata } from "next";

// Полностью отключаем кеширование страницы
export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Блог Neuropolis.ai - Инсайты в мире ИИ и автоматизации",
  description:
    "Блог об инновациях в области искусственного интеллекта, цифровой трансформации и автоматизации бизнес-процессов.",
  keywords:
    "ИИ, искусственный интеллект, машинное обучение, автоматизация, цифровая трансформация, технологические инновации, блог, нейросети",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
