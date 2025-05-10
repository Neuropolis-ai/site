"use client";

import React from "react";
import WorkflowAutomationContactForm from "../workflow-automation/WorkflowAutomationContactForm";

export default function AIAgentContactForm() {
  return (
    <WorkflowAutomationContactForm 
      title="Готовы автоматизировать ваш бизнес с помощью ИИ?"
      subtitle="Получите бесплатную консультацию по внедрению ИИ-агентов в ваши бизнес-процессы. Наши эксперты помогут определить оптимальные сценарии применения."
      formId="ai-agent-contact-form"
      submitButtonText="Получить консультацию"
      features={[
        {
          icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 14.6 3 18l3.4-6.5L3 5l6.5 3.4L18 3l-3.4 6.5L18 18l-6.5-3.4L3 18"/></svg>,
          title: "ИИ-решения под ключ",
          description: "Разработаем и внедрим специализированных ИИ-агентов, учитывающих уникальные потребности вашего бизнеса.",
        },
        {
          icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3.5 5.5 5 7l2.5-2.5"/><path d="M3.5 11.5 5 13l2.5-2.5"/><path d="M3.5 17.5 5 19l2.5-2.5"/><path d="M11 6h9"/><path d="M11 12h9"/><path d="M11 18h9"/></svg>,
          title: "Комплексная автоматизация",
          description: "Автоматизируем рутинные задачи, обработку данных и бизнес-процессы, освобождая время для ключевых задач.",
        },
        {
          icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z"/></svg>,
          title: "Масштабируемость",
          description: "Создаем решения, которые растут вместе с вашей компанией и адаптируются к меняющимся требованиям бизнеса.",
        },
      ]}
      privacyPolicyUrl="/privacy-policy"
    />
  );
}
