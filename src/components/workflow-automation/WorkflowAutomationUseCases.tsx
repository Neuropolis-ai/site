"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { useTheme } from "@/context/ThemeContext";
import { useState } from "react";
import { FiBarChart, FiCheckCircle, FiTrendingUp } from "react-icons/fi";

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

  // Обновленные данные о кейсах с синим цветом
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
      colorBg: "bg-blue-500",
      colorText: "text-blue-500",
      bgDark: "bg-blue-900/30",
      borderDark: "border-blue-800/30",
      bgLight: "bg-blue-50",
      borderLight: "border-blue-100",
      icon: <FiBarChart className="w-6 h-6" />,
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
      colorBg: "bg-sky-500",
      colorText: "text-sky-500",
      bgDark: "bg-sky-900/30",
      borderDark: "border-sky-800/30",
      bgLight: "bg-sky-50",
      borderLight: "border-sky-100",
      icon: <FiTrendingUp className="w-6 h-6" />,
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
      colorBg: "bg-blue-600",
      colorText: "text-blue-600",
      bgDark: "bg-blue-900/30",
      borderDark: "border-blue-800/30",
      bgLight: "bg-blue-50",
      borderLight: "border-blue-100",
      icon: <FiCheckCircle className="w-6 h-6" />,
    },
  ];

  const getTabClassName = (index: number): string => {
    if (activeTab === index) {
      return `${useCases[index].colorBg} text-white shadow-lg ${
        isDark ? "shadow-blue-900/20" : "shadow-blue-500/20"
      }`;
    }
    return isDark
      ? "bg-gray-800/80 backdrop-blur-sm text-gray-300 hover:bg-gray-800 border border-gray-700 hover:border-blue-800/30"
      : "bg-white text-gray-700 hover:bg-blue-50 border border-gray-200 hover:border-blue-200";
  };

  const getStatClassName = (index: number): string => {
    return isDark
      ? `${useCases[activeTab].bgDark} border ${useCases[activeTab].borderDark} backdrop-blur-sm`
      : `${useCases[activeTab].bgLight} border ${useCases[activeTab].borderLight}`;
  };

  return (
    <section
      id="workflow-cases"
      className="py-16 md:py-24 relative overflow-hidden"
    >
      {/* Градиентный фон */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50/80 dark:from-gray-950 dark:to-blue-950/10 -z-10"></div>

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
        className="absolute top-[35%] left-[10%] w-12 h-12 bg-blue-400/20 dark:bg-blue-600/30 rounded-full backdrop-blur-md z-0"
      ></motion.div>
      <motion.div
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        className="absolute bottom-[25%] right-[7%] w-16 h-16 bg-sky-400/20 dark:bg-sky-600/30 rounded-full backdrop-blur-md z-0"
        style={{ animationDelay: "1.5s" }}
      ></motion.div>

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
            className="inline-flex items-center justify-center border border-blue-300 dark:border-blue-800 gap-2 px-4 py-1 rounded-full text-sm mb-4 bg-blue-500/10 text-blue-600 dark:text-blue-400"
          >
            Примеры использования
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-4"
          >
            Как автоматизация{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-sky-400">
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
          <div className="flex flex-wrap justify-center gap-3 md:gap-5">
            {useCases.map((useCase, index) => (
              <motion.button
                key={index}
                variants={itemVariants}
                onClick={() => setActiveTab(index)}
                whileHover={{
                  y: -3,
                  transition: { duration: 0.2 },
                }}
                className={`px-5 py-3 md:px-7 md:py-4 rounded-xl text-sm md:text-base font-medium transition-all ${getTabClassName(
                  index
                )}`}
              >
                <div className="flex items-center gap-2">
                  <div className="hidden md:block">{useCase.icon}</div>
                  <span>{useCase.title}</span>
                </div>
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
          className={`rounded-2xl overflow-hidden shadow-xl ${
            isDark
              ? "bg-gray-800/50 border border-gray-700 shadow-blue-900/10"
              : "bg-white border border-gray-200 shadow-blue-200/30"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
            {/* Левая колонка - Текст */}
            <div className="p-6 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center 
                  ${
                    isDark
                      ? "bg-gradient-to-br from-blue-600/20 to-sky-600/20 text-blue-400"
                      : "bg-gradient-to-br from-blue-50 to-sky-50 text-blue-500"
                  }`}
                >
                  {useCases[activeTab].icon}
                </div>
                <h3
                  className={`text-2xl font-semibold ${useCases[activeTab].colorText}`}
                >
                  {useCases[activeTab].title}
                </h3>
              </div>

              <div className="mb-10">
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  {useCases[activeTab].description}
                </p>
              </div>

              {/* Статистика */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {useCases[activeTab].stats.map((stat, index) => (
                  <div
                    key={index}
                    className={`p-5 rounded-xl backdrop-blur-sm ${getStatClassName(
                      index
                    )}`}
                  >
                    <div
                      className={`text-3xl font-bold ${useCases[activeTab].colorText} mb-1`}
                    >
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Детали реализации */}
              <div
                className={`p-6 rounded-xl backdrop-blur-sm ${
                  isDark
                    ? "bg-blue-900/20 border border-blue-800/30"
                    : "bg-blue-50/80 border border-blue-100"
                }`}
              >
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <span className="inline-block p-1 rounded-full bg-blue-500/20 dark:bg-blue-400/20">
                    <FiCheckCircle
                      className={`w-4 h-4 ${useCases[activeTab].colorText}`}
                    />
                  </span>
                  Ключевые интеграции
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span
                      className={`${useCases[activeTab].colorText} bg-blue-100 dark:bg-blue-900/40 p-1 rounded-full`}
                    >
                      <FiCheckCircle className="w-4 h-4" />
                    </span>
                    <span className="text-gray-600 dark:text-gray-300">
                      Интеграция с CRM-системой для централизованного управления
                      данными
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span
                      className={`${useCases[activeTab].colorText} bg-blue-100 dark:bg-blue-900/40 p-1 rounded-full`}
                    >
                      <FiCheckCircle className="w-4 h-4" />
                    </span>
                    <span className="text-gray-600 dark:text-gray-300">
                      Автоматическая синхронизация данных между всеми
                      платформами
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span
                      className={`${useCases[activeTab].colorText} bg-blue-100 dark:bg-blue-900/40 p-1 rounded-full`}
                    >
                      <FiCheckCircle className="w-4 h-4" />
                    </span>
                    <span className="text-gray-600 dark:text-gray-300">
                      Аналитическая панель для отслеживания ключевых показателей
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Правая колонка - Иллюстрация */}
            <div
              className={`${
                isDark ? "bg-gray-800/70" : "bg-blue-50/50"
              } p-6 md:p-10 flex items-center justify-center`}
            >
              <div className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className={`w-full h-full bg-gradient-to-br from-blue-100/50 to-blue-50/50 dark:from-blue-900/20 dark:to-blue-800/10 backdrop-blur-sm rounded-xl border ${
                      isDark ? "border-blue-800/20" : "border-blue-200/50"
                    } flex items-center justify-center`}
                  >
                    <div className="text-center p-8">
                      <div className="inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-sky-400 text-white w-16 h-16 rounded-full mb-4">
                        {useCases[activeTab].icon}
                      </div>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">
                        Интерактивная демонстрация
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
                        Свяжитесь с нами для демонстрации работы системы в
                        реальном времени
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Призыв к действию */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <motion.div variants={itemVariants} className="inline-flex gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium shadow-lg shadow-blue-500/20 dark:shadow-blue-600/20"
              href="#contact"
            >
              Обсудить ваш проект
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 rounded-xl border border-blue-300 dark:border-blue-700 text-blue-600 dark:text-blue-400 font-medium"
              href="#workflow-solution"
            >
              Узнать больше
            </motion.a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
