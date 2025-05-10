"use client";

import React from "react";
import WorkflowAutomationContactForm from "../workflow-automation/WorkflowAutomationContactForm";

export default function ChatBotsContactForm() {
  return (
    <WorkflowAutomationContactForm 
      title="Готовы автоматизировать коммуникации в вашем бизнесе?"
      subtitle="Получите бесплатную консультацию по внедрению чат-ботов в ваши бизнес-процессы. Наши эксперты помогут определить оптимальные сценарии применения."
      formId="chat-bots-contact-form"
      submitButtonText="Получить консультацию"
      features={[
        {
          icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>,
          title: "Быстрое внедрение",
          description: "Запустим чат-бота для вашего бизнеса в кратчайшие сроки, обеспечивая быструю окупаемость инвестиций.",
        },
        {
          icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 2 7l10 5 10-5-10-5Z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>,
          title: "Интеграция с системами",
          description: "Подключим чат-бота к вашим существующим системам: CRM, базам данных, API и другим сервисам.",
        },
        {
          icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
          title: "Поддержка 24/7",
          description: "Ваш бот будет работать круглосуточно, обеспечивая мгновенные ответы клиентам и экономя ресурсы компании.",
        },
      ]}
      privacyPolicyUrl="/privacy-policy"
    />
  );
}
