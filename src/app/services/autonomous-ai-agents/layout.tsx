import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Автономные ИИ-агенты для бизнеса | Neuropolis.ai",
  description:
    "Разрабатываем интеллектуальных агентов, которые выполняют задачи, анализируют данные и принимают решения — как самостоятельные сотрудники. Интеграция с API, CRM, мессенджерами и любыми бизнес-системами.",
  keywords:
    "автономные агенты, ИИ-агенты, искусственный интеллект, бизнес-автоматизация, интеллектуальные системы, автоматизация бизнес-процессов, нейрополис",
  openGraph: {
    title: "Автономные ИИ-агенты для бизнеса | Neuropolis.ai",
    description:
      "Разрабатываем интеллектуальных агентов, которые выполняют задачи, анализируют данные и принимают решения — как самостоятельные сотрудники.",
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    title: "Автономные ИИ-агенты для бизнеса | Neuropolis.ai",
    description:
      "Разрабатываем интеллектуальных агентов, которые выполняют задачи, анализируют данные и принимают решения — как самостоятельные сотрудники.",
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AutomationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
