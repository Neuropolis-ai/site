"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { useTheme } from "@/context/ThemeContext";
import {
  FiClock,
  FiUsers,
  FiServer,
  FiDollarSign,
  FiBarChart2,
  FiTrendingUp,
  FiZap,
  FiShield,
  FiActivity,
} from "react-icons/fi";

export default function WorkflowAutomationSolution() {
  const { isDark } = useTheme();

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

  const benefitCardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      y: -5,
      boxShadow: isDark
        ? "0 10px 30px rgba(30, 64, 175, 0.2)"
        : "0 10px 30px rgba(59, 130, 246, 0.15)",
      transition: { duration: 0.3 },
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

  // Данные о преимуществах автоматизации рабочих процессов
  const automationBenefits = [
    {
      icon: <FiClock />,
      title: "Экономия времени",
      description:
        "Автоматизация рутинных задач освобождает до 40% рабочего времени сотрудников для выполнения более важных стратегических задач.",
    },
    {
      icon: <FiTrendingUp />,
      title: "Повышение точности",
      description:
        "Устранение человеческого фактора при вводе и обработке данных снижает количество ошибок на 90% и повышает качество работы.",
    },
    {
      icon: <FiUsers />,
      title: "Масштабируемость",
      description:
        "Автоматизированные системы легко масштабируются под растущие нужды бизнеса без необходимости пропорционального увеличения штата.",
    },
    {
      icon: <FiServer />,
      title: "Интеграция систем",
      description:
        "Бесшовное объединение разрозненных систем и платформ в единую экосистему с централизованным управлением данными.",
    },
    {
      icon: <FiDollarSign />,
      title: "Снижение затрат",
      description:
        "Уменьшение операционных расходов на 30-50% за счет оптимизации процессов и сокращения ресурсов на выполнение рутинных операций.",
    },
    {
      icon: <FiBarChart2 />,
      title: "Аналитика в реальном времени",
      description:
        "Получение актуальных данных о бизнес-процессах для быстрого принятия решений и оперативного реагирования на изменения.",
    },
  ];

  // Типы интеграций
  const integrationTypes = [
    {
      icon: <FiZap />,
      name: "CRM-системы",
      capabilities: [
        "Автоматизация процессов продаж и маркетинга",
        "Интеграция с электронной почтой и мессенджерами",
        "Автоматическое создание и обновление карточек клиентов",
        "Генерация предложений и договоров по шаблонам",
      ],
    },
    {
      icon: <FiActivity />,
      name: "Маркетинговые платформы",
      capabilities: [
        "Автоматизация создания и запуска рекламных кампаний",
        "Сбор и анализ данных о взаимодействии с контентом",
        "Персонализация контента на основе поведения пользователей",
        "Автоматическая сегментация аудитории",
      ],
    },
    {
      icon: <FiShield />,
      name: "ERP и бухгалтерия",
      capabilities: [
        "Автоматизация финансовых операций и отчетности",
        "Интеграция с банковскими системами",
        "Автоматический расчет налогов и других обязательных платежей",
        "Контроль складских запасов и закупок",
      ],
    },
  ];

  return (
    <section
      id="workflow-solution"
      className="py-16 md:py-24 relative overflow-hidden"
    >
      {/* Градиентный фон */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/10 dark:to-black -z-10"></div>

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
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br from-blue-200/30 to-blue-400/30 dark:from-blue-500/10 dark:to-blue-700/10 rounded-full blur-3xl -z-5"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-gradient-to-tr from-sky-200/30 to-sky-400/30 dark:from-sky-500/10 dark:to-sky-700/10 rounded-full blur-3xl -z-5"></div>

      {/* Анимированные элементы */}
      <motion.div
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        className="absolute top-[5%] right-[15%] w-12 h-12 bg-blue-400/20 dark:bg-blue-600/30 rounded-full backdrop-blur-md z-0"
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
            Решение
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-4 tracking-tight"
          >
            Интеллектуальная автоматизация{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-sky-400">
              рабочих процессов
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Мы интегрируем инструменты искусственного интеллекта в существующие
            программные платформы, CRM-системы и маркетинговые каналы для
            оптимизации бизнес-процессов.
          </motion.p>
        </motion.div>

        {/* Основные преимущества */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
        >
          {automationBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={benefitCardVariants}
              whileHover="hover"
              className={`p-6 rounded-xl transition-all ${
                isDark
                  ? "bg-gray-800/50 hover:bg-gray-800/80 border border-gray-700 backdrop-blur-sm"
                  : "bg-white hover:shadow-xl border border-gray-200 hover:border-blue-200"
              }`}
            >
              <div
                className={`w-14 h-14 rounded-xl mb-4 flex items-center justify-center text-xl ${
                  isDark ? "bg-blue-900/30" : "bg-blue-50"
                }`}
              >
                <span className="text-blue-600 dark:text-blue-400">
                  {benefit.icon}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Возможности для различных платформ */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mb-20"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center"
          >
            Возможности интеграции с различными системами
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {integrationTypes.map((platform, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.3 },
                  boxShadow: isDark
                    ? "0 10px 30px rgba(30, 64, 175, 0.2)"
                    : "0 10px 30px rgba(59, 130, 246, 0.15)",
                }}
                className={`p-6 rounded-xl transition-all ${
                  isDark
                    ? "bg-gray-800/50 border border-gray-700 backdrop-blur-sm"
                    : "bg-white border border-gray-200 hover:border-blue-200"
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${
                      isDark ? "bg-blue-900/30" : "bg-blue-50"
                    }`}
                  >
                    <span className="text-blue-600 dark:text-blue-400">
                      {platform.icon}
                    </span>
                  </div>
                  <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                    {platform.name}
                  </h4>
                </div>
                <ul className="space-y-2 ml-2">
                  {platform.capabilities.map((capability, i) => (
                    <li key={i} className="flex items-start">
                      <div className="mr-2 mt-1.5 w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-sky-400 flex-shrink-0"></div>
                      <span className="text-gray-600 dark:text-gray-300">
                        {capability}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Сравнение с ручными процессами */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center"
          >
            Сравнение с ручными процессами
          </motion.h3>

          <motion.div
            variants={itemVariants}
            className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg"
          >
            <table
              className={`w-full border-collapse ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              <thead>
                <tr className={`${isDark ? "bg-gray-800" : "bg-gray-50"}`}>
                  <th className="p-4 text-left border-b dark:border-gray-700">
                    Параметр
                  </th>
                  <th className="p-4 text-left border-b dark:border-gray-700 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                    Автоматизированные процессы
                  </th>
                  <th className="p-4 text-left border-b dark:border-gray-700">
                    Ручные процессы
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  className={`${
                    isDark ? "hover:bg-gray-800/70" : "hover:bg-blue-50/30"
                  } transition-colors`}
                >
                  <td className="p-4 border-b dark:border-gray-700">
                    Скорость выполнения
                  </td>
                  <td className="p-4 border-b dark:border-gray-700 bg-blue-50/50 dark:bg-blue-900/20">
                    <span className="text-green-500 flex items-center">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      В 5-10 раз быстрее
                    </span>
                  </td>
                  <td className="p-4 border-b dark:border-gray-700">
                    <span className="text-red-500 flex items-center">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      Зависит от нагрузки и скорости сотрудника
                    </span>
                  </td>
                </tr>
                <tr
                  className={`${
                    isDark ? "hover:bg-gray-800/70" : "hover:bg-blue-50/30"
                  } transition-colors`}
                >
                  <td className="p-4 border-b dark:border-gray-700">
                    Точность данных
                  </td>
                  <td className="p-4 border-b dark:border-gray-700 bg-blue-50/50 dark:bg-blue-900/20">
                    <span className="text-green-500 flex items-center">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      99.9%
                    </span>
                  </td>
                  <td className="p-4 border-b dark:border-gray-700">
                    <span className="text-red-500 flex items-center">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      60-90% (зависит от сложности задачи)
                    </span>
                  </td>
                </tr>
                <tr
                  className={`${
                    isDark ? "hover:bg-gray-800/70" : "hover:bg-blue-50/30"
                  } transition-colors`}
                >
                  <td className="p-4 border-b dark:border-gray-700">
                    Масштабируемость
                  </td>
                  <td className="p-4 border-b dark:border-gray-700 bg-blue-50/50 dark:bg-blue-900/20">
                    <span className="text-green-500 flex items-center">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      Неограниченная
                    </span>
                  </td>
                  <td className="p-4 border-b dark:border-gray-700">
                    <span className="text-red-500 flex items-center">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      Требует пропорционального увеличения персонала
                    </span>
                  </td>
                </tr>
                <tr
                  className={`${
                    isDark ? "hover:bg-gray-800/70" : "hover:bg-blue-50/30"
                  } transition-colors`}
                >
                  <td className="p-4 border-b dark:border-gray-700">
                    Стоимость обработки одной операции
                  </td>
                  <td className="p-4 border-b dark:border-gray-700 bg-blue-50/50 dark:bg-blue-900/20">
                    <span className="text-green-500 flex items-center">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      от $0.05 до $0.5
                    </span>
                  </td>
                  <td className="p-4 border-b dark:border-gray-700">
                    <span className="text-red-500 flex items-center">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      от $2 до $15
                    </span>
                  </td>
                </tr>
                <tr
                  className={`${
                    isDark ? "hover:bg-gray-800/70" : "hover:bg-blue-50/30"
                  } transition-colors`}
                >
                  <td className="p-4 border-b dark:border-gray-700">
                    Аналитика процессов
                  </td>
                  <td className="p-4 border-b dark:border-gray-700 bg-blue-50/50 dark:bg-blue-900/20">
                    <span className="text-green-500 flex items-center">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      Полная, в реальном времени
                    </span>
                  </td>
                  <td className="p-4 border-b dark:border-gray-700">
                    <span className="text-red-500 flex items-center">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      Ограниченная, с задержкой
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
