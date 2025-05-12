import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Кейсы использования ИИ в бизнесе — Neuropolis",
  description:
    "Изучите реальные кейсы успешного внедрения ИИ-агентов в различных сферах бизнеса: от клиентской поддержки до продаж и контент-маркетинга",
  keywords:
    "ИИ-агенты, кейсы ИИ, внедрение искусственного интеллекта, автоматизация бизнеса, успешные проекты ИИ, ИИ в продажах, ИИ в клиентском сервисе, ИИ в контент-маркетинге",
};

export default function CasesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 