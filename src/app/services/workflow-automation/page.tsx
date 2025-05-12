import { Metadata } from "next";
import WorkflowAutomationPage from "@/components/workflow-automation/WorkflowAutomationPage";

export const metadata: Metadata = {
  title: "Автоматизация бизнес-процессов | Интеллектуальная автоматизация | Нейрополис",
  description:
    "Внедряем интеллектуальные системы автоматизации бизнес-процессов и рабочих потоков. Повышаем эффективность, сокращаем расходы и ускоряем рост вашего бизнеса.",
  keywords:
    "автоматизация бизнес-процессов, оптимизация рабочих потоков, интеллектуальная автоматизация, digital transformation, роботизация, RPA, workflow optimization",
};

export default function WorkflowAutomation() {
  return <WorkflowAutomationPage />;
} 