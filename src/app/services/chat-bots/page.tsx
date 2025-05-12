import { Metadata } from "next";
import ChatBotsPage from "@/components/chat-bots/ChatBotsPage";

export const metadata: Metadata = {
  title: "Разработка Интеллектуальных Чат-ботов для Бизнеса | Нейрополис",
  description:
    "Создаем и внедряем умных чат-ботов на основе искусственного интеллекта для автоматизации коммуникаций, улучшения клиентского сервиса и оптимизации бизнес-процессов.",
  keywords:
    "разработка чат-ботов, интеллектуальные чат-боты, ИИ чат-боты, NLP чат-боты, GPT-4, автоматизация клиентского сервиса, ИИ для коммуникаций",
};

export default function ChatBots() {
  return <ChatBotsPage />;
} 