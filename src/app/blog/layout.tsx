import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title:
    "Блог Neuropolis.ai - Статьи об искусственном интеллекте и автоматизации",
  description:
    "Актуальные статьи о технологиях искусственного интеллекта, автоматизации бизнес-процессов и цифровой трансформации.",
  keywords:
    "блог, статьи, искусственный интеллект, автоматизация, цифровая трансформация, нейронные сети, машинное обучение, ИИ",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
