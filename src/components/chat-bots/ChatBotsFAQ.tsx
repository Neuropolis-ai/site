"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "lucide-react";

export default function ChatBotsFAQ() {
  const [openItem, setOpenItem] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  // Вопросы и ответы
  const faqItems = [
    {
      question: "Сколько времени занимает разработка чат-бота?",
      answer:
        "Время разработки зависит от сложности проекта и требуемого функционала. Простой чат-бот может быть создан за 2-4 недели, в то время как сложные решения с интеграцией в CRM, обучением на большом объеме данных и настройкой уникальных сценариев могут занять 2-3 месяца. Мы всегда предоставляем детальный план с точным сроком реализации после изучения ваших требований.",
    },
    {
      question:
        "На каких платформах могут работать разрабатываемые вами чат-боты?",
      answer:
        "Мы разрабатываем чат-ботов для любых популярных платформ и мессенджеров: Telegram, WhatsApp, Viber, VK, Facebook Messenger, а также создаем веб-чаты для сайтов и корпоративных порталов. При необходимости обеспечиваем одновременную работу на нескольких платформах с синхронизацией данных.",
    },
    {
      question: "Какие интеграции поддерживают ваши чат-боты?",
      answer:
        "Наши решения интегрируются с широким спектром систем: CRM (Bitrix24, AmoCRM, Salesforce и др.), ERP, системы аналитики, платежные шлюзы, учетные системы, базы данных и API сторонних сервисов. Мы реализуем как стандартные интеграции, так и создаем индивидуальные решения для специфических бизнес-потребностей.",
    },
    {
      question:
        "Как обеспечивается безопасность данных при использовании чат-бота?",
      answer:
        "Мы уделяем особое внимание безопасности: используем шифрование данных при передаче и хранении, внедряем механизмы аутентификации и авторизации, проводим регулярные аудиты безопасности. Наши решения соответствуют требованиям законодательства о защите персональных данных, включая GDPR и 152-ФЗ. Данные хранятся на защищенных серверах в России или других странах по вашему выбору.",
    },
    {
      question: "Можно ли дорабатывать чат-бота после его запуска?",
      answer:
        "Да, все наши чат-боты созданы с возможностью гибкой доработки и масштабирования. После запуска мы анализируем их эффективность, изучаем поведение пользователей и постоянно улучшаем функционал. В рамках технической поддержки мы оперативно вносим необходимые изменения и дополнения по вашему запросу.",
    },
    {
      question: "Какова стоимость разработки чат-бота?",
      answer:
        "Стоимость зависит от сложности проекта, требуемых функций, интеграций и объема работ. Базовый чат-бот с основными функциями стоит от 150 000 рублей, расширенные решения с интеграциями и ИИ — от 300 000 рублей. Мы предоставляем детальную смету и прозрачное ценообразование на этапе проектирования. Также доступны гибкие варианты оплаты и поэтапная реализация проекта.",
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
      id="chatbots-faq"
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
            Ответы на самые распространенные вопросы о разработке и внедрении
            чат-ботов
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
              эксперты подробно расскажут о возможностях чат-ботов для вашего
              бизнеса.
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
