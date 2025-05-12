"use client";

import React from "react";
import Container from "@/components/ui/Container";
import { useTheme } from "@/context/ThemeContext";
import {
  FiMessageSquare,
  FiUsers,
  FiSettings,
  FiShield,
} from "react-icons/fi";
import ContactForm from "../workflow-automation/WorkflowAutomationContactForm";

export default function ChatBotsContactForm() {
  const { theme } = useTheme();
  const isDark = theme !== "light";

  // Особенности для формы контакта
  const contactFeatures = [
    {
      icon: <FiMessageSquare />,
      title: "Бесплатная консультация",
      description:
        "Проведем детальный анализ ваших бизнес-процессов и коммуникационных потребностей для определения оптимального решения.",
    },
    {
      icon: <FiSettings />,
      title: "Индивидуальный подход",
      description:
        "Разработаем персонализированного чат-бота, учитывающего специфику вашего бизнеса, целевую аудиторию и корпоративный стиль.",
    },
    {
      icon: <FiUsers />,
      title: "Команда экспертов",
      description:
        "С вами будут работать опытные разработчики, лингвисты и специалисты по машинному обучению с большим опытом создания ИИ-решений.",
    },
    {
      icon: <FiShield />,
      title: "Безопасность данных",
      description:
        "Гарантируем полную конфиденциальность информации и соответствие всем требованиям по защите персональных данных.",
    },
  ];

  return (
    <section
      id="chatbots-contact"
      className={`py-16 md:py-20 relative overflow-hidden ${
        isDark ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      {/* Фоновый градиент */}
      <div
        className={`absolute inset-0 ${
          isDark
            ? "bg-gradient-to-br from-gray-900 via-gray-900 to-blue-950/30"
            : "bg-gradient-to-br from-gray-50 via-gray-50 to-blue-50/50"
        } -z-10`}
      ></div>

      {/* Сетка-фон */}
      <div className="absolute inset-0 opacity-[0.03] -z-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: "url('/grid-pattern.svg')",
            backgroundSize: "24px 24px",
            backgroundRepeat: "repeat",
          }}
        ></div>
      </div>

      {/* Плавающие элементы (декоративные) */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-400/10 dark:bg-blue-400/5 rounded-full blur-3xl -z-10"></div>

      <Container>
        <div className="max-w-5xl mx-auto">
          <ContactForm
            title="Готовы создать умного чат-бота для вашего бизнеса?"
            subtitle="Оставьте заявку, и наши эксперты свяжутся с вами в течение одного рабочего дня для обсуждения вашего проекта и предоставления бесплатной консультации."
            submitButtonText="Получить консультацию"
            showCompanyField={true}
            showPhoneField={true}
            showFeatures={true}
            showConfidentiality={true}
            useContainer={false}
            fullWidth={true}
            formId="chatbots-contact-form"
            features={contactFeatures}
            formLabels={{
              name: "Ваше имя",
              email: "Email",
              phone: "Телефон",
              company: "Компания",
              message: "Опишите вашу задачу или вопрос",
              agreement:
                "Я согласен с политикой конфиденциальности и обработкой персональных данных",
            }}
            placeholders={{
              name: "Иван Иванов",
              email: "ivan@company.com",
              phone: "+7 (999) 123-45-67",
              company: "ООО Компания",
              message: "Опишите ваши потребности в разработке чат-бота или задайте вопрос",
            }}
            successMessage={{
              title: "Спасибо за заявку!",
              text: "Ваше сообщение успешно отправлено. Наши эксперты свяжутся с вами в ближайшее время для обсуждения вашего проекта.",
            }}
          />
        </div>
      </Container>
    </section>
  );
}
