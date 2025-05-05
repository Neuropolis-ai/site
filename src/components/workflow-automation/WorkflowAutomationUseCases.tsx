"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { useTheme } from "@/context/ThemeContext";
import { useState } from "react";

export default function WorkflowAutomationUseCases() {
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

  // Данные о кейсах использования автоматизации
  const useCases = [
    {
      title: "Автоматизация маркетинговых процессов",
      description:
        "Интеграция CRM-системы, email-маркетинга и социальных сетей для создания единого маркетингового центра. Автоматическая сегментация клиентов, персонализированные рассылки и анализ эффективности кампаний.",
      stats: [
        { value: "68%", label: "Рост конверсии" },
        { value: "45%", label: "Экономия времени" },
        { value: "3x", label: "Увеличение охвата" },
      ],
      image: "/assets/images/workflow-marketing.png",
      colorBg: "bg-purple-500",
      colorText: "text-purple-500",
      bgDark: "bg-purple-900/30",
      borderDark: "border-purple-800/30",
      bgLight: "bg-purple-50",
      borderLight: "border-purple-100",
    },
    {
      title: "Автоматизация продаж",
      description:
        "Интеграция всех каналов продаж в единую систему. Автоматическое создание коммерческих предложений, отслеживание статуса сделок, напоминания о задачах и автоматические отчеты для руководства.",
      stats: [
        { value: "32%", label: "Рост продаж" },
        { value: "60%", label: "Снижение ручной работы" },
        { value: "24ч", label: "Ускорение обработки заявок" },
      ],
      image: "/assets/images/workflow-sales.png",
      colorBg: "bg-green-500",
      colorText: "text-green-500",
      bgDark: "bg-green-900/30",
      borderDark: "border-green-800/30",
      bgLight: "bg-green-50",
      borderLight: "border-green-100",
    },
    {
      title: "Автоматизация финансовых процессов",
      description:
        "Интеграция бухгалтерских систем с банками и платежными системами. Автоматическое формирование счетов, отслеживание платежей, формирование финансовой отчетности и налоговых деклараций.",
      stats: [
        { value: "40%", label: "Сокращение ошибок" },
        { value: "75%", label: "Экономия времени" },
        { value: "12ч", label: "Ускорение закрытия месяца" },
      ],
      image: "/assets/images/workflow-finance.png",
      colorBg: "bg-blue-500",
      colorText: "text-blue-500",
      bgDark: "bg-blue-900/30",
      borderDark: "border-blue-800/30",
      bgLight: "bg-blue-50",
      borderLight: "border-blue-100",
    },
  ];

  const getTabClassName = (index: number): string => {
    if (activeTab === index) {
      return `${useCases[index].colorBg} text-white`;
    }
    return isDark
      ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
      : "bg-gray-200 text-gray-700 hover:bg-gray-300";
  };

  const getStatClassName = (index: number): string => {
    return isDark
      ? `${useCases[activeTab].bgDark} border ${useCases[activeTab].borderDark}`
      : `${useCases[activeTab].bgLight} border ${useCases[activeTab].borderLight}`;
  };

  return (
    <section id="workflow-cases" className="py-16 md:py-24 relative">
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
            Как автоматизация{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA]">
              решает бизнес-задачи
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Ознакомьтесь с реальными примерами внедрения автоматизации рабочих
            процессов в различных сферах бизнеса и достигнутыми результатами.
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
                className={`px-4 py-2 md:px-6 md:py-3 rounded-lg text-sm md:text-base font-medium transition-all ${getTabClassName(
                  index
                )}`}
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
              className={`text-2xl font-semibold mb-4 ${useCases[activeTab].colorText}`}
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
                  className={`p-4 rounded-lg ${getStatClassName(index)}`}
                >
                  <p
                    className={`text-2xl font-bold ${useCases[activeTab].colorText}`}
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
                Ключевые интеграции:
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className={`${useCases[activeTab].colorText} mr-2`}>
                    ✓
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    Интеграция с CRM-системой для централизованного управления
                    данными
                  </span>
                </li>
                <li className="flex items-start">
                  <span className={`${useCases[activeTab].colorText} mr-2`}>
                    ✓
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    Автоматическая синхронизация данных между всеми платформами
                  </span>
                </li>
                <li className="flex items-start">
                  <span className={`${useCases[activeTab].colorText} mr-2`}>
                    ✓
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    Аналитическая панель для отслеживания ключевых показателей
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Правая колонка - Иллюстрация */}
          <div className="relative h-[300px] md:h-[400px]">
            <div className="w-full h-full flex items-center justify-center">
              <div
                className={`w-full h-full rounded-lg ${
                  isDark ? "bg-gray-700" : "bg-gray-100"
                } flex items-center justify-center`}
              >
                <p className="text-gray-500">Иллюстрация процесса</p>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
