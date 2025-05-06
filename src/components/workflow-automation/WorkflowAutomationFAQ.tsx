"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "lucide-react";

export default function WorkflowAutomationFAQ() {
  const [openItem, setOpenItem] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  // Вопросы и ответы
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

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.section
      id="workflow-faq"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="relative py-20 md:py-28 px-4 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900 -z-10"></div>
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-blue-400/20 dark:from-blue-500/10 dark:to-blue-700/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-indigo-200/20 to-indigo-400/20 dark:from-indigo-500/10 dark:to-indigo-700/10 rounded-full blur-3xl -z-10"></div>

      <div className="container relative mx-auto max-w-5xl">
        <motion.div
          variants={itemVariants}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-block px-4 py-1 rounded-full text-sm mb-4 bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
            FAQ
          </div>
          <motion.h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
            Часто задаваемые{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0167F3] to-[#399AFC]">
              вопросы
            </span>
          </motion.h2>
          <motion.p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ответы на самые распространенные вопросы об автоматизации рабочих
            процессов
          </motion.p>
        </motion.div>

        <div className="grid gap-4">
          {faqItems.map((faq, index) => (
            <motion.div key={index} variants={itemVariants} className="group">
              <div className="relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden transition-all duration-300 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md">
                <button
                  onClick={() => toggleItem(index)}
                  className="flex justify-between items-center w-full p-5 md:p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 rounded-2xl"
                  aria-expanded={openItem === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-semibold text-lg md:text-xl text-gray-900 dark:text-white pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full ${
                      openItem === index
                        ? "bg-blue-500 text-white"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400"
                    }`}
                  >
                    <ChevronDownIcon
                      className={`w-5 h-5 transition-transform duration-300 ${
                        openItem === index ? "transform rotate-180" : ""
                      }`}
                    />
                  </div>
                </button>

                {openItem === index && (
                  <div
                    id={`faq-answer-${index}`}
                    className="px-5 md:px-6 pb-5 md:pb-6 text-gray-600 dark:text-gray-300 text-base md:text-lg"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Дополнительная информация */}
        <motion.div variants={itemVariants} className="mt-16 text-center">
          <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden p-6 max-w-3xl mx-auto border border-gray-200 dark:border-gray-800 shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Остались вопросы?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Свяжитесь с нами для получения бесплатной консультации. Наши
              эксперты подробно расскажут о возможностях автоматизации для
              вашего бизнеса.
            </p>
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-[#0167F3] to-[#399AFC] text-white font-semibold py-2 px-6 rounded-lg transition-transform hover:-translate-y-1"
            >
              Получить консультацию
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
