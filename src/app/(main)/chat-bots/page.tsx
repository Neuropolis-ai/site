import { Metadata } from "next";
import ChatBotsPage from "@/components/chat-bots/ChatBotsPage";

export const metadata: Metadata = {
  title: "Разработка Чат-ботов для Бизнеса | Нейрополис",
  description:
    "Создаем и внедряем интеллектуальных чат-ботов для автоматизации поддержки клиентов, продаж и внутренних бизнес-процессов. Повысьте эффективность вашего бизнеса с помощью современных ИИ-технологий!",
  keywords:
    "разработка чат-ботов, ИИ чат-боты, бизнес чат-боты, автоматизация поддержки клиентов, чат-боты для продаж, Telegram боты, WhatsApp боты, корпоративные чат-боты",
};

export default function ChatBots() {
  return <ChatBotsPage />;
}
