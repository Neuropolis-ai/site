import type { Metadata } from "next";
import ServicesComponent from "@/components/Services/Services";

export const metadata: Metadata = {
  title: "Услуги Neuropolis.ai - Решения для цифровой трансформации",
  description:
    "Полный спектр услуг по цифровой трансформации бизнеса: разработка AI решений, автоматизация процессов, консалтинг.",
  keywords:
    "услуги, цифровая трансформация, автоматизация, искусственный интеллект, ИИ решения, бизнес-процессы",
};

export default function Page(): React.ReactNode {
  return <ServicesComponent />;
}
