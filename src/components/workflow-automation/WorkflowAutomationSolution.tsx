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
      transition: { duration: 0.3 },
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
      name: "CRM-системы",
      capabilities: [
        "Автоматизация процессов продаж и маркетинга",
        "Интеграция с электронной почтой и мессенджерами",
        "Автоматическое создание и обновление карточек клиентов",
        "Генерация предложений и договоров по шаблонам",
      ],
    },
    {
      name: "Маркетинговые платформы",
      capabilities: [
        "Автоматизация создания и запуска рекламных кампаний",
        "Сбор и анализ данных о взаимодействии с контентом",
        "Персонализация контента на основе поведения пользователей",
        "Автоматическая сегментация аудитории",
      ],
    },
    {
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
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50 to-white dark:from-purple-950/10 dark:to-black -z-10"></div>

      {/* Декоративные элементы */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br from-purple-200/20 to-purple-400/20 dark:from-purple-500/10 dark:to-purple-700/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-gradient-to-tr from-indigo-200/20 to-indigo-400/20 dark:from-indigo-500/10 dark:to-indigo-700/10 rounded-full blur-3xl -z-10"></div>

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
            Решение
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-4"
          >
            Интеллектуальная автоматизация{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA]">
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
                  ? "bg-gray-800/50 hover:bg-gray-800/80 border border-gray-700"
                  : "bg-white hover:shadow-lg border border-gray-200"
              }`}
            >
              <div
                className={`w-14 h-14 rounded-xl mb-4 flex items-center justify-center text-xl ${
                  isDark ? "bg-purple-900/30" : "bg-purple-50"
                }`}
              >
                <span className="text-purple-600 dark:text-purple-400">
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
                className={`p-6 rounded-xl ${
                  isDark
                    ? "bg-gray-800/50 border border-gray-700"
                    : "bg-white border border-gray-200"
                }`}
              >
                <h4 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-4">
                  {platform.name}
                </h4>
                <ul className="space-y-2">
                  {platform.capabilities.map((capability, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
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

          <motion.div variants={itemVariants} className="overflow-x-auto">
            <table
              className={`w-full border-collapse ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              <thead>
                <tr className={`${isDark ? "bg-gray-800" : "bg-gray-100"}`}>
                  <th className="p-4 text-left border-b border-r">Параметр</th>
                  <th className="p-4 text-left border-b border-r bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                    Автоматизированные процессы
                  </th>
                  <th className="p-4 text-left border-b">Ручные процессы</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  className={`${
                    isDark ? "border-gray-700" : "border-gray-200"
                  }`}
                >
                  <td className="p-4 border-b border-r">Скорость выполнения</td>
                  <td className="p-4 border-b border-r bg-purple-50/50 dark:bg-purple-900/20">
                    <span className="text-green-500">В 5-10 раз быстрее</span>
                  </td>
                  <td className="p-4 border-b">
                    <span className="text-red-500">
                      Зависит от нагрузки и скорости сотрудника
                    </span>
                  </td>
                </tr>
                <tr
                  className={`${
                    isDark ? "border-gray-700" : "border-gray-200"
                  }`}
                >
                  <td className="p-4 border-b border-r">Точность данных</td>
                  <td className="p-4 border-b border-r bg-purple-50/50 dark:bg-purple-900/20">
                    <span className="text-green-500">99.9%</span>
                  </td>
                  <td className="p-4 border-b">
                    <span className="text-red-500">
                      60-90% (зависит от сложности задачи)
                    </span>
                  </td>
                </tr>
                <tr
                  className={`${
                    isDark ? "border-gray-700" : "border-gray-200"
                  }`}
                >
                  <td className="p-4 border-b border-r">Масштабируемость</td>
                  <td className="p-4 border-b border-r bg-purple-50/50 dark:bg-purple-900/20">
                    <span className="text-green-500">Неограниченная</span>
                  </td>
                  <td className="p-4 border-b">
                    <span className="text-red-500">
                      Требует пропорционального увеличения персонала
                    </span>
                  </td>
                </tr>
                <tr
                  className={`${
                    isDark ? "border-gray-700" : "border-gray-200"
                  }`}
                >
                  <td className="p-4 border-b border-r">
                    Стоимость обработки одной операции
                  </td>
                  <td className="p-4 border-b border-r bg-purple-50/50 dark:bg-purple-900/20">
                    <span className="text-green-500">от $0.05 до $0.5</span>
                  </td>
                  <td className="p-4 border-b">
                    <span className="text-red-500">от $2 до $15</span>
                  </td>
                </tr>
                <tr
                  className={`${
                    isDark ? "border-gray-700" : "border-gray-200"
                  }`}
                >
                  <td className="p-4 border-b border-r">Аналитика процессов</td>
                  <td className="p-4 border-b border-r bg-purple-50/50 dark:bg-purple-900/20">
                    <span className="text-green-500">
                      Полная, в реальном времени
                    </span>
                  </td>
                  <td className="p-4 border-b">
                    <span className="text-red-500">
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
