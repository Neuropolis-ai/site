"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { useTheme } from "@/context/ThemeContext";
import { useState } from "react";

export default function WorkflowAutomationFAQ() {
  const { isDark } = useTheme();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Анимации
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Данные FAQ
  const faqItems = [
    {
      question: "Сколько времени занимает процесс внедрения автоматизации?",
      answer:
        "Срок внедрения автоматизации зависит от сложности процессов и масштаба проекта. Небольшие проекты могут быть реализованы в течение 1-2 месяцев, в то время как комплексные решения для крупных компаний могут занимать 3-6 месяцев. На первых этапах мы проводим детальную оценку и предоставляем точный план-график работ.",
    },
    {
      question:
        "Нужно ли полностью менять существующие системы для автоматизации?",
      answer:
        "Нет, наш подход предполагает интеграцию с существующими системами и программным обеспечением. Мы разрабатываем решения, которые дополняют и расширяют функциональность ваших текущих инструментов, что позволяет сохранить инвестиции и снизить затраты на внедрение автоматизации.",
    },
    {
      question: "Какие процессы лучше всего подходят для автоматизации?",
      answer:
        "Для автоматизации лучше всего подходят повторяющиеся, стандартизированные процессы с четкими правилами. Это может быть обработка данных, генерация отчетов, обработка заявок, управление документами, автоматическая отправка уведомлений и многое другое. Во время аудита мы поможем определить процессы, автоматизация которых принесет наибольшую выгоду.",
    },
    {
      question:
        "Как оценить потенциальную выгоду от автоматизации для нашего бизнеса?",
      answer:
        "Для оценки выгоды мы проводим аудит ваших процессов и рассчитываем ROI (Return on Investment). В расчет принимается экономия времени сотрудников, снижение количества ошибок, повышение скорости обработки задач, снижение операционных расходов и потенциальное увеличение доходов. Обычно проекты автоматизации окупаются в течение 6-18 месяцев.",
    },
    {
      question:
        "Требуется ли обучение сотрудников для работы с автоматизированными системами?",
      answer:
        "Да, обучение сотрудников является неотъемлемой частью процесса внедрения. Мы проводим комплексные тренинги для разных категорий пользователей, предоставляем подробную документацию и инструкции. Наши системы разрабатываются с учетом удобства использования, что сокращает время на освоение новых инструментов.",
    },
    {
      question:
        "Можно ли масштабировать автоматизированные процессы по мере роста бизнеса?",
      answer:
        "Да, масштабируемость является одним из ключевых принципов нашего подхода к автоматизации. Мы проектируем решения с учетом возможного роста компании, увеличения объема данных и расширения функциональности. Используемые нами облачные технологии и микросервисная архитектура обеспечивают гибкость и адаптивность системы.",
    },
    {
      question:
        "Как обеспечивается безопасность данных при автоматизации процессов?",
      answer:
        "Безопасность данных является приоритетом при разработке наших решений. Мы применяем многоуровневую систему защиты, включающую шифрование данных, контроль доступа, аутентификацию пользователей, регулярное резервное копирование и мониторинг подозрительной активности. Все наши решения соответствуют требованиям GDPR и других стандартов защиты данных.",
    },
    {
      question:
        "Предоставляете ли вы техническую поддержку после внедрения автоматизации?",
      answer:
        "Да, мы предлагаем несколько уровней технической поддержки в зависимости от потребностей клиента. Базовый пакет включает реагирование на инциденты в рабочее время, а расширенный — круглосуточную поддержку 24/7. Также доступны услуги по проактивному мониторингу систем, регулярным обновлениям и дальнейшему развитию функциональности.",
    },
  ];

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="workflow-faq" className="py-16 md:py-24 relative">
      {/* Градиентный фон */}
      <div
        className={`absolute inset-0 ${
          isDark
            ? "bg-gradient-to-b from-black to-gray-900"
            : "bg-gradient-to-b from-white to-gray-50"
        } -z-10`}
      ></div>

      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className={`inline-block px-4 py-1 rounded-full text-sm mb-4 switch-box ${
              !isDark && "light-switch-box"
            }`}
          >
            FAQ
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-4"
          >
            Часто задаваемые{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA]">
              вопросы
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Ответы на популярные вопросы об автоматизации рабочих процессов и
            нашем подходе к работе с клиентами.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="max-w-4xl mx-auto divide-y divide-gray-200 dark:divide-gray-700"
        >
          {faqItems.map((item, index) => (
            <motion.div key={index} variants={itemVariants} className="py-5">
              <button
                onClick={() => toggleItem(index)}
                className="flex justify-between items-center w-full text-left focus:outline-none"
              >
                <h3 className="text-lg md:text-xl font-medium text-gray-900 dark:text-white">
                  {item.question}
                </h3>
                <span
                  className={`ml-6 flex-shrink-0 h-6 w-6 rounded-full flex items-center justify-center border ${
                    isDark
                      ? "border-purple-700 text-purple-400"
                      : "border-purple-200 text-purple-600"
                  } transition-transform duration-200 ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                >
                  <svg
                    className="h-3 w-3"
                    fill="none"
                    viewBox="0 0 14 8"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M1 1l6 6 6-6"
                    />
                  </svg>
                </span>
              </button>
              {openIndex === index && (
                <div className="mt-3">
                  <p className="text-base text-gray-600 dark:text-gray-300">
                    {item.answer}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA блок */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-16 text-center"
        >
          <motion.div
            variants={itemVariants}
            className={`max-w-3xl mx-auto p-8 rounded-xl ${
              isDark
                ? "bg-gradient-to-br from-purple-900/30 to-indigo-900/30 border border-purple-800/20"
                : "bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-100"
            }`}
          >
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Не нашли ответ на свой вопрос?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Свяжитесь с нами, и наши эксперты подробно проконсультируют вас по
              всем вопросам внедрения автоматизации для вашего бизнеса.
            </p>
            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] text-white font-medium py-3 px-6 rounded-lg transition-opacity hover:opacity-90"
            >
              Связаться с экспертом
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
