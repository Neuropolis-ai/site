import { Metadata } from "next";
import WorkflowAutomationPage from "@/components/workflow-automation/WorkflowAutomationPage";

export const metadata: Metadata = {
  title: "Автоматизация Рабочих Процессов с ИИ | Нейрополис",
  description:
    "Интегрируем инструменты ИИ в существующие программные платформы, CRM-системы и маркетинговые каналы. Оптимизируйте процессы и повысьте эффективность бизнеса!",
  keywords:
    "автоматизация рабочих процессов, интеграция ИИ, оптимизация бизнес-процессов, CRM интеграция, автоматизация бизнеса, workflow automation, ИИ автоматизация",
};

export default function WorkflowAutomation() {
  return <WorkflowAutomationPage />;
}
