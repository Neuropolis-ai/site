"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";
import {
  FiClock,
  FiUsers,
  FiServer,
  FiDollarSign,
  FiBarChart2,
  FiMessageCircle,
} from "react-icons/fi";

export default function ChatBotsSolution() {
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

  // Данные о преимуществах ИИ-чат-ботов
  const botBenefits = [
    {
      icon: <FiClock />,
      title: "Круглосуточная работа",
      description:
        "Чат-боты обеспечивают мгновенную поддержку клиентам 24/7/365 без выходных и праздников.",
    },
    {
      icon: <FiMessageCircle />,
      title: "Одновременная обработка",
      description:
        "Одновременное обслуживание тысяч клиентов без снижения качества и скорости ответов.",
    },
    {
      icon: <FiUsers />,
      title: "Персонализация",
      description:
        "Индивидуальный подход к каждому клиенту на основе истории взаимодействия и предпочтений.",
    },
    {
      icon: <FiServer />,
      title: "Интеграция с CRM",
      description:
        "Бесшовная интеграция с CRM-системами и другими бизнес-инструментами для полной автоматизации.",
    },
    {
      icon: <FiDollarSign />,
      title: "Снижение затрат",
      description:
        "Экономия до 70% расходов на поддержку клиентов по сравнению с традиционными методами.",
    },
    {
      icon: <FiBarChart2 />,
      title: "Аналитика и отчеты",
      description:
        "Подробная аналитика всех взаимодействий для улучшения бизнес-процессов и обслуживания.",
    },
  ];

  // Возможности чат-ботов для разных платформ
  const platformCapabilities = [
    {
      name: "Telegram",
      capabilities: [
        "Обработка текстовых сообщений и медиафайлов",
        "Интерактивные кнопки и встроенные клавиатуры",
        "Интеграция с платежными системами",
        "Создание полноценных мини-приложений внутри мессенджера",
      ],
    },
    {
      name: "WhatsApp",
      capabilities: [
        "Коммуникация через официальное API WhatsApp Business",
        "Отправка текстовых сообщений, изображений и файлов",
        "Уведомления и рассылки с соблюдением политик платформы",
        "Многоуровневые сценарии диалогов с клиентами",
      ],
    },
    {
      name: "Веб-сайт",
      capabilities: [
        "Интерактивные виджеты для веб-сайта в соответствии с дизайном",
        "Многоязычная поддержка для международных сайтов",
        "Омниканальность с сохранением истории из других каналов",
        "Проактивное взаимодействие с посетителями сайта",
      ],
    },
  ];

  return (
    <section
      id="chatbots-solution"
      className="py-16 md:py-24 relative overflow-hidden"
    >
      {/* Градиентный фон */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/10 dark:to-black -z-10"></div>

      {/* Декоративные элементы */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-blue-400/20 dark:from-blue-500/10 dark:to-blue-700/10 rounded-full blur-3xl -z-10"></div>
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
            Интеллектуальные чат-боты для{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0167F3] to-[#399AFC]">
              автоматизации коммуникаций
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Мы создаем современных ИИ-чат-ботов, которые автоматизируют общение
            с клиентами, сотрудниками и партнерами на любых платформах.
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
          {botBenefits.map((benefit, index) => (
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
            Возможности чат-ботов для различных платформ
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {platformCapabilities.map((platform, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`p-6 rounded-xl ${
                  isDark
                    ? "bg-gray-800/50 border border-gray-700"
                    : "bg-white border border-gray-200"
                }`}
              >
                <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
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

        {/* Сравнение с традиционным подходом */}
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
            Сравнение с традиционным подходом
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
                  <th className="p-4 text-left border-b border-r bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                    ИИ-чат-бот
                  </th>
                  <th className="p-4 text-left border-b">
                    Традиционная поддержка
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  className={`${
                    isDark ? "border-gray-700" : "border-gray-200"
                  }`}
                >
                  <td className="p-4 border-b border-r">Время ответа</td>
                  <td className="p-4 border-b border-r bg-blue-50/50 dark:bg-blue-900/20">
                    <span className="text-green-500">
                      Мгновенно (3-5 секунд)
                    </span>
                  </td>
                  <td className="p-4 border-b">
                    <span className="text-red-500">
                      От нескольких минут до нескольких часов
                    </span>
                  </td>
                </tr>
                <tr
                  className={`${
                    isDark ? "border-gray-700" : "border-gray-200"
                  }`}
                >
                  <td className="p-4 border-b border-r">Режим работы</td>
                  <td className="p-4 border-b border-r bg-blue-50/50 dark:bg-blue-900/20">
                    <span className="text-green-500">24/7/365</span>
                  </td>
                  <td className="p-4 border-b">
                    <span className="text-red-500">
                      Ограничен рабочими часами
                    </span>
                  </td>
                </tr>
                <tr
                  className={`${
                    isDark ? "border-gray-700" : "border-gray-200"
                  }`}
                >
                  <td className="p-4 border-b border-r">
                    Количество одновременных обращений
                  </td>
                  <td className="p-4 border-b border-r bg-blue-50/50 dark:bg-blue-900/20">
                    <span className="text-green-500">Неограниченно</span>
                  </td>
                  <td className="p-4 border-b">
                    <span className="text-red-500">
                      Ограничено количеством операторов
                    </span>
                  </td>
                </tr>
                <tr
                  className={`${
                    isDark ? "border-gray-700" : "border-gray-200"
                  }`}
                >
                  <td className="p-4 border-b border-r">
                    Стоимость обслуживания одного запроса
                  </td>
                  <td className="p-4 border-b border-r bg-blue-50/50 dark:bg-blue-900/20">
                    <span className="text-green-500">от $0.01 до $0.05</span>
                  </td>
                  <td className="p-4 border-b">
                    <span className="text-red-500">от $5 до $15</span>
                  </td>
                </tr>
                <tr
                  className={`${
                    isDark ? "border-gray-700" : "border-gray-200"
                  }`}
                >
                  <td className="p-4 border-b border-r">Масштабируемость</td>
                  <td className="p-4 border-b border-r bg-blue-50/50 dark:bg-blue-900/20">
                    <span className="text-green-500">
                      Мгновенная, без дополнительных затрат
                    </span>
                  </td>
                  <td className="p-4 border-b">
                    <span className="text-red-500">
                      Требует найма и обучения персонала
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
