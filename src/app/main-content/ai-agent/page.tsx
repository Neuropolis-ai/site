import { Metadata } from "next";
import AIAgentPage from "@/components/ai-agent/AIAgentPage";

export const metadata: Metadata = {
  title: "Разработка Кастомных ИИ-Агентов для Бизнеса | Нейрополис",
  description:
    "Создаем и внедряем кастомных ИИ-агентов для автоматизации рутины, оптимизации процессов и увеличения прибыли вашего бизнеса. Получите бесплатную консультацию!",
  keywords:
    "разработка ИИ-агентов, кастомные ИИ-агенты, ИИ для бизнеса, автоматизация бизнес-процессов ИИ, AI agents development, ИИ помощник, ИИ для автоматизации",
};

export default function AIAgent() {
  return <AIAgentPage />;
}
