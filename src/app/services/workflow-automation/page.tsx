import { Metadata } from "next";
import WorkflowAutomationPage from "@/components/workflow-automation/WorkflowAutomationPage";
import SchemaOrg from "@/components/SchemaOrg";

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
  const serviceData = {
    name: "Автоматизация бизнес-процессов",
    description: "Интеллектуальная автоматизация рабочих процессов с использованием ИИ для повышения эффективности бизнеса на 30%, сокращения расходов и ускорения роста.",
    provider: {
      "@type": "Organization",
      name: "Нейрополис",
      url: "https://neuropolis.ai"
    },
    serviceType: "Workflow Automation",
    areaServed: "Россия",
    offers: {
      "@type": "Offer",
      price: "От 100000",
      priceCurrency: "RUB",
      availability: "https://schema.org/InStock"
    },
    image: "https://neuropolis.ai/assets/images/workflow-automation.webp",
    url: "https://neuropolis.ai/services/workflow-automation"
  };

  return (
    <>
      <SchemaOrg type="Service" data={serviceData} />
      <WorkflowAutomationPage />
    </>
  );
} 