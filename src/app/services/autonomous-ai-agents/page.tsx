import type { Metadata } from "next";
import AutonomousAIAgents from "@/components/Services/AutonomousAIAgents";

export const metadata: Metadata = {
  title: "Разработка ИИ-агентов - Neuropolis.ai",
  description:
    "Создаем интеллектуальные решения, которые трансформируют бизнес-процессы и открывают новые возможности для вашего бизнеса.",
  keywords:
    "ИИ-агенты, разработка агентов, автоматизация, искусственный интеллект, ИИ решения, бизнес-процессы",
};

export default function Page(): React.ReactNode {
  return <AutonomousAIAgents />;
}
