"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { useTheme } from "@/context/ThemeContext";
import { useState } from "react";
import {
  FiPlusCircle,
  FiMinusCircle,
  FiHelpCircle,
  FiMessageCircle,
} from "react-icons/fi";

export default function WorkflowAutomationFAQ() {
  const { isDark } = useTheme();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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

  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      },
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
    <section
      id="workflow-faq"
      className="py-16 md:py-24 relative overflow-hidden"
    >
      {/* Градиентный фон */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 to-white dark:from-blue-950/10 dark:to-gray-950 -z-10"></div>

      {/* Сетка-фон */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02] -z-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: "url('/grid-pattern.svg')",
            backgroundSize: "24px 24px",
            backgroundRepeat: "repeat",
          }}
        ></div>
      </div>

      {/* Декоративные элементы */}
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-gradient-to-br from-blue-200/30 to-blue-400/30 dark:from-blue-500/10 dark:to-blue-700/10 rounded-full blur-3xl -z-5"></div>
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-gradient-to-tr from-sky-200/30 to-sky-400/30 dark:from-sky-500/10 dark:to-sky-700/10 rounded-full blur-3xl -z-5"></div>

      {/* Анимированные элементы */}
      <motion.div
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        className="absolute top-[25%] left-[5%] w-10 h-10 bg-blue-400/20 dark:bg-blue-600/30 rounded-full backdrop-blur-md z-0"
      ></motion.div>
      <motion.div
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        className="absolute bottom-[15%] right-[7%] w-14 h-14 bg-sky-400/20 dark:bg-sky-600/30 rounded-full backdrop-blur-md z-0"
        style={{ animationDelay: "1.5s" }}
      ></motion.div>

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
            className="inline-flex items-center justify-center border border-blue-300 dark:border-blue-800 gap-2 px-4 py-1 rounded-full text-sm mb-4 bg-blue-500/10 text-blue-600 dark:text-blue-400"
          >
            <FiHelpCircle className="w-4 h-4" />
            <span>FAQ</span>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-4"
          >
            Часто задаваемые{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-sky-400">
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
          className="max-w-4xl mx-auto"
        >
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`mb-4 rounded-xl overflow-hidden ${
                isDark
                  ? "bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-blue-700/50"
                  : "bg-white border border-gray-200 hover:border-blue-200"
              } transition-all duration-300 ${
                openIndex === index
                  ? isDark
                    ? "shadow-lg shadow-blue-900/10"
                    : "shadow-lg shadow-blue-200/40"
                  : ""
              }`}
            >
              <button
                onClick={() => toggleItem(index)}
                className="flex justify-between items-center w-full text-left p-5 focus:outline-none"
              >
                <div className="flex items-center gap-3 pr-4">
                  <div
                    className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${
                      openIndex === index
                        ? isDark
                          ? "bg-blue-600/30 text-blue-400"
                          : "bg-blue-100 text-blue-600"
                        : isDark
                        ? "bg-gray-700 text-gray-400"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    <span className="text-lg font-semibold">Q</span>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    {item.question}
                  </h3>
                </div>
                <span
                  className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${
                    openIndex === index
                      ? isDark
                        ? "bg-blue-600/40 text-blue-300"
                        : "bg-blue-100 text-blue-600"
                      : isDark
                      ? "bg-gray-700 text-gray-400"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {openIndex === index ? (
                    <FiMinusCircle className="w-5 h-5" />
                  ) : (
                    <FiPlusCircle className="w-5 h-5" />
                  )}
                </span>
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-5 pb-5"
                >
                  <div className="flex gap-3 pt-1 pl-11">
                    <div className="w-0.5 bg-gradient-to-b from-blue-500 to-sky-400 self-stretch rounded-full"></div>
                    <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
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
            whileHover={{
              y: -5,
              transition: { duration: 0.3 },
              boxShadow: isDark
                ? "0 20px 40px rgba(30, 64, 175, 0.25)"
                : "0 20px 40px rgba(59, 130, 246, 0.2)",
            }}
            className={`max-w-3xl mx-auto p-8 rounded-xl ${
              isDark
                ? "bg-gradient-to-br from-blue-900/30 to-blue-800/20 backdrop-blur-sm border border-blue-800/30"
                : "bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-100"
            }`}
          >
            <div className="flex flex-col items-center mb-6">
              <div className="w-16 h-16 mb-5 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-sky-400 shadow-lg shadow-blue-500/20">
                <FiMessageCircle className="w-8 h-8 text-white" />
              </div>
              <div className="h-0.5 w-20 bg-gradient-to-r from-blue-500 to-sky-400"></div>
            </div>

            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Не нашли ответ на свой вопрос?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Свяжитесь с нами, и наши эксперты подробно проконсультируют вас по
              всем вопросам внедрения автоматизации для вашего бизнеса.
            </p>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold py-3 px-8 rounded-xl transition-all hover:shadow-lg hover:shadow-blue-500/20 dark:hover:shadow-blue-600/20"
            >
              Связаться с экспертом
            </motion.a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
