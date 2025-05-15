import { Metadata } from "next";
import WorkflowAutomationPage from "@/components/workflow-automation/WorkflowAutomationPage";

export const metadata: Metadata = {
  title: "Workflow Automation | Автоматизация бизнес-процессов | Нейрополис",
  description:
    "Внедряем интеллектуальные системы Workflow Automation для оптимизации бизнес-процессов. Повышаем эффективность на 30%, сокращаем расходы и ускоряем рост вашего бизнеса. Свяжитесь с нами сегодня!",
  keywords:
    "workflow automation, автоматизация бизнес-процессов, оптимизация рабочих потоков, интеллектуальная автоматизация, digital transformation, роботизация, RPA, workflow optimization",
  robots: "index, follow",
  alternates: {
    canonical: "https://neuropolis.ai/services/workflow-automation",
  },
};

export default function WorkflowAutomation() {
  return <WorkflowAutomationPage />;
} 