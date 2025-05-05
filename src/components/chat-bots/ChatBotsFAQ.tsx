"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { useTheme } from "@/context/ThemeContext";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function ChatBotsFAQ() {
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

  const toggleQuestion = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section
      id="chatbots-faq"
      className="py-16 md:py-24 relative overflow-hidden"
    >
      {/* Градиентный фон */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-black -z-10"></div>

      {/* Декоративные элементы */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-blue-400/20 dark:from-blue-500/10 dark:to-blue-700/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-indigo-200/20 to-indigo-400/20 dark:from-indigo-500/10 dark:to-indigo-700/10 rounded-full blur-3xl -z-10"></div>

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
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0167F3] to-[#399AFC]">
              вопросы
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Ответы на самые распространенные вопросы о разработке и внедрении
            чат-ботов
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`mb-4 rounded-xl overflow-hidden border ${
                openIndex === index
                  ? isDark
                    ? "bg-gray-800/70 border-gray-700"
                    : "bg-white border-gray-200 shadow-md"
                  : isDark
                  ? "bg-gray-800/30 border-gray-700"
                  : "bg-white border-gray-200"
              }`}
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {item.question}
                </h3>
                {openIndex === index ? (
                  <FiChevronUp className="text-blue-600 dark:text-blue-400 ml-2 flex-shrink-0" />
                ) : (
                  <FiChevronDown className="text-gray-600 dark:text-gray-400 ml-2 flex-shrink-0" />
                )}
              </button>

              <div
                className={`px-6 transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? "pb-6 max-h-96" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 dark:text-gray-300">
                  {item.answer}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Дополнительная информация */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-16 text-center"
        >
          <motion.div
            variants={itemVariants}
            className={`p-6 rounded-xl max-w-3xl mx-auto ${
              isDark
                ? "bg-blue-900/20 border border-blue-800/30"
                : "bg-blue-50 border border-blue-100"
            }`}
          >
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
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
