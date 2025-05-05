"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";
import { useState } from "react";

export default function ChatBotsUseCases() {
  const { isDark } = useTheme();
  const [activeTab, setActiveTab] = useState(0);

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

  // Данные о кейсах использования чат-ботов
  const useCases = [
    {
      title: "Автоматизация клиентской поддержки",
      description:
        "Чат-бот мгновенно отвечает на типовые запросы клиентов, решает простые проблемы и собирает информацию для дальнейшей обработки операторами, если требуется.",
      stats: [
        { value: "24/7", label: "Работа без выходных" },
        { value: "3 сек", label: "Среднее время ответа" },
        { value: "70%", label: "Автоматизация запросов" },
      ],
      image: "/assets/images/chatbot-support.png",
      color: "blue",
    },
    {
      title: "Лидогенерация и продажи",
      description:
        "Чат-бот квалифицирует потенциальных клиентов, собирает контактные данные, предоставляет информацию о продуктах и услугах, передает готовые лиды менеджерам по продажам.",
      stats: [
        { value: "35%", label: "Рост конверсии" },
        { value: "300+", label: "Лидов в месяц" },
        { value: "45%", label: "Экономия времени менеджеров" },
      ],
      image: "/assets/images/chatbot-sales.png",
      color: "green",
    },
    {
      title: "Внутренние коммуникации",
      description:
        "Чат-бот для сотрудников компании автоматизирует внутренние процессы: ответы на вопросы по HR-политикам, помощь в заполнении документов, бронирование переговорных и многое другое.",
      stats: [
        { value: "60%", label: "Снижение нагрузки на HR" },
        { value: "85%", label: "Удовлетворенность" },
        { value: "5ч", label: "Экономия времени в неделю" },
      ],
      image: "/assets/images/chatbot-internal.png",
      color: "purple",
    },
  ];

  return (
    <section id="chatbots-cases" className="py-16 md:py-24 relative">
      {/* Градиентный фон */}
      <div
        className={`absolute inset-0 ${
          isDark
            ? "bg-gradient-to-b from-gray-900 to-black"
            : "bg-gradient-to-b from-gray-100 to-white"
        } -z-10`}
      ></div>

      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-12"
        >
          <motion.div
            variants={itemVariants}
            className={`inline-block px-4 py-1 rounded-full text-sm mb-4 switch-box ${
              !isDark && "light-switch-box"
            }`}
          >
            Примеры использования
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-4"
          >
            Как чат-боты{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0167F3] to-[#399AFC]">
              решают задачи бизнеса
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Ознакомьтесь с реальными примерами использования чат-ботов в
            различных сферах бизнеса и результатами, которых удалось достичь.
          </motion.p>
        </motion.div>

        {/* Табы для переключения между кейсами */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {useCases.map((useCase, index) => (
              <motion.button
                key={index}
                variants={itemVariants}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-2 md:px-6 md:py-3 rounded-lg text-sm md:text-base font-medium transition-all ${
                  activeTab === index
                    ? `bg-${useCase.color}-500 text-white`
                    : isDark
                    ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {useCase.title}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Контент активного кейса */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
            isDark ? "bg-gray-800/50" : "bg-white"
          } p-6 md:p-8 rounded-2xl border ${
            isDark ? "border-gray-700" : "border-gray-200"
          }`}
        >
          {/* Левая колонка - Текст */}
          <div>
            <h3
              className={`text-2xl font-semibold mb-4 text-${useCases[activeTab].color}-500`}
            >
              {useCases[activeTab].title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              {useCases[activeTab].description}
            </p>

            {/* Статистика */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {useCases[activeTab].stats.map((stat, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg ${
                    isDark
                      ? `bg-${useCases[activeTab].color}-900/30 border border-${useCases[activeTab].color}-800/30`
                      : `bg-${useCases[activeTab].color}-50 border border-${useCases[activeTab].color}-100`
                  }`}
                >
                  <p
                    className={`text-2xl font-bold text-${useCases[activeTab].color}-500`}
                  >
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Детали реализации */}
            <div
              className={`p-4 rounded-lg ${
                isDark ? "bg-gray-700/50" : "bg-gray-50"
              }`}
            >
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Ключевые особенности:
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span
                    className={`text-${useCases[activeTab].color}-500 mr-2`}
                  >
                    ✓
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    Интеграция с CRM системой для сохранения данных о клиентах
                  </span>
                </li>
                <li className="flex items-start">
                  <span
                    className={`text-${useCases[activeTab].color}-500 mr-2`}
                  >
                    ✓
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    Автоматическое уведомление операторов о сложных запросах
                  </span>
                </li>
                <li className="flex items-start">
                  <span
                    className={`text-${useCases[activeTab].color}-500 mr-2`}
                  >
                    ✓
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    Аналитическая панель для отслеживания эффективности
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Правая колонка - Иллюстрация */}
          <div className="relative h-[300px] md:h-[400px]">
            <Image
              src={useCases[activeTab].image}
              alt={useCases[activeTab].title}
              fill
              className="object-contain"
            />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
