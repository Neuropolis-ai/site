"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";
import {
  Clock,
  Users,
  Database,
  DollarSign,
  BarChart2,
  MessageSquare,
  Zap,
  CheckCircle,
  ArrowRight,
  Globe,
  BrainCircuit,
  Sparkles,
} from "lucide-react";

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
      y: -8,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  // Данные о преимуществах ИИ-чат-ботов
  const botBenefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Круглосуточная работа",
      description:
        "Чат-боты обеспечивают мгновенную поддержку клиентам 24/7/365 без выходных и праздников.",
      gradient: "from-[#0167F3] to-[#399AFC]",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Одновременная обработка",
      description:
        "Одновременное обслуживание тысяч клиентов без снижения качества и скорости ответов.",
      gradient: "from-[#0167F3]/90 to-[#399AFC]/90",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Персонализация",
      description:
        "Индивидуальный подход к каждому клиенту на основе истории взаимодействия и предпочтений.",
      gradient: "from-[#0167F3]/80 to-[#399AFC]/80",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Интеграция с CRM",
      description:
        "Бесшовная интеграция с CRM-системами и другими бизнес-инструментами для полной автоматизации.",
      gradient: "from-[#0167F3]/70 to-[#399AFC]/70",
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Снижение затрат",
      description:
        "Экономия до 70% расходов на поддержку клиентов по сравнению с традиционными методами.",
      gradient: "from-[#0167F3]/60 to-[#399AFC]/60",
    },
    {
      icon: <BarChart2 className="w-6 h-6" />,
      title: "Аналитика и отчеты",
      description:
        "Подробная аналитика всех взаимодействий для улучшения бизнес-процессов и обслуживания.",
      gradient: "from-[#0167F3]/50 to-[#399AFC]/50",
    },
  ];

  // Возможности чат-ботов для разных платформ
  const platformCapabilities = [
    {
      name: "Telegram",
      icon: <MessageSquare className="w-6 h-6" />,
      color: "text-[#0167F3]",
      gradient: "from-[#0167F3] to-[#399AFC]",
      capabilities: [
        "Обработка текстовых сообщений и медиафайлов",
        "Интерактивные кнопки и встроенные клавиатуры",
        "Интеграция с платежными системами",
        "Создание полноценных мини-приложений внутри мессенджера",
      ],
    },
    {
      name: "WhatsApp",
      icon: <Globe className="w-6 h-6" />,
      color: "text-[#0167F3]",
      gradient: "from-[#0167F3] to-[#399AFC]",
      capabilities: [
        "Коммуникация через официальное API WhatsApp Business",
        "Отправка текстовых сообщений, изображений и файлов",
        "Уведомления и рассылки с соблюдением политик платформы",
        "Многоуровневые сценарии диалогов с клиентами",
      ],
    },
    {
      name: "Веб-сайт",
      icon: <Globe className="w-6 h-6" />,
      color: "text-[#0167F3]",
      gradient: "from-[#0167F3] to-[#399AFC]",
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
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Современный градиентный фон */}
      <div className="absolute inset-0 bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-white to-blue-50/70 dark:from-blue-950/30 dark:via-gray-950 dark:to-blue-950/20 -z-10"></div>

      {/* Декоративные плавающие элементы */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-blue-400/30 dark:from-blue-500/10 dark:to-blue-700/10 rounded-full blur-3xl -z-5 animate-pulse"
        style={{ animationDuration: "8s" }}
      ></div>
      <div
        className="absolute top-1/3 left-1/4 w-80 h-80 bg-gradient-to-tr from-indigo-200/30 to-indigo-400/30 dark:from-indigo-500/10 dark:to-indigo-700/10 rounded-full blur-3xl -z-5 animate-pulse"
        style={{ animationDuration: "12s", animationDelay: "2s" }}
      ></div>
      <div
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-purple-200/30 to-purple-400/30 dark:from-purple-500/10 dark:to-purple-700/10 rounded-full blur-3xl -z-5 animate-pulse"
        style={{ animationDuration: "10s", animationDelay: "1s" }}
      ></div>

      {/* Декоративные линии */}
      <div className="absolute inset-0 overflow-hidden opacity-10 dark:opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        <div className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
      </div>

      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-20"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm mb-4 bg-[#0167F3]/10 text-[#0167F3] dark:text-[#399AFC] border border-[#0167F3]/20 dark:border-[#399AFC]/50 backdrop-blur-sm"
          >
            <svg
              width={15}
              height={15}
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#0167F3] dark:text-[#399AFC]"
            >
              <path
                opacity="0.2"
                d="M14.0063 8.11585L9.82259 9.6371L8.30133 13.8208C8.26582 13.9165 8.20186 13.9991 8.11807 14.0573C8.03428 14.1156 7.93465 14.1469 7.83258 14.1469C7.73052 14.1469 7.63089 14.1156 7.5471 14.0573C7.4633 13.9991 7.39935 13.9165 7.36383 13.8208L5.84508 9.6371L1.66133 8.11585C1.56565 8.08033 1.48312 8.01638 1.42484 7.93258C1.36656 7.84879 1.33533 7.74917 1.33533 7.6471C1.33533 7.54503 1.36656 7.44541 1.42484 7.36161C1.48312 7.27782 1.56565 7.21387 1.66133 7.17835L5.84508 5.6596L7.36633 1.47585C7.40185 1.38016 7.4658 1.29763 7.5496 1.23936C7.63339 1.18108 7.73302 1.14984 7.83508 1.14984C7.93715 1.14984 8.03678 1.18108 8.12057 1.23936C8.20436 1.29763 8.26832 1.38016 8.30383 1.47585L9.82508 5.6596L14.0088 7.18085C14.1036 7.21708 14.1851 7.28129 14.2425 7.36495C14.2999 7.44861 14.3305 7.54775 14.3303 7.64921C14.33 7.75067 14.2989 7.84965 14.241 7.933C14.1831 8.01635 14.1013 8.08012 14.0063 8.11585Z"
                fill="currentColor"
              />
              <path
                d="M14.1776 6.71085L10.2126 5.2696L8.77134 1.3046C8.7003 1.11323 8.5724 0.948173 8.40481 0.831617C8.23722 0.715062 8.03797 0.652588 7.83384 0.652588C7.6297 0.652588 7.43046 0.715062 7.26287 0.831617C7.09528 0.948173 6.96737 1.11323 6.89634 1.3046L5.45509 5.2696L1.49009 6.71085C1.29871 6.78189 1.13366 6.90979 1.0171 7.07738C0.900548 7.24497 0.838074 7.44422 0.838074 7.64835C0.838074 7.85249 0.900548 8.05173 1.0171 8.21932C1.13366 8.38691 1.29871 8.51482 1.49009 8.58585L5.45509 10.0277L6.89634 13.9921C6.96737 14.1835 7.09528 14.3485 7.26287 14.4651C7.43046 14.5816 7.6297 14.6441 7.83384 14.6441C8.03797 14.6441 8.23722 14.5816 8.40481 14.4651C8.5724 14.3485 8.7003 14.1835 8.77134 13.9921L10.2132 10.0271L14.1776 8.58585C14.369 8.51482 14.534 8.38691 14.6506 8.21932C14.7671 8.05173 14.8296 7.85249 14.8296 7.64835C14.8296 7.44422 14.7671 7.24497 14.6506 7.07738C14.534 6.90979 14.369 6.78189 14.1776 6.71085ZM9.65134 9.1671C9.58275 9.19208 9.52047 9.23176 9.46886 9.28337C9.41725 9.33498 9.37756 9.39727 9.35259 9.46585L7.83384 13.6421L6.31509 9.46585C6.29012 9.39727 6.25043 9.33498 6.19882 9.28337C6.14721 9.23176 6.08492 9.19208 6.01634 9.1671L1.84009 7.64835L6.01634 6.1296C6.08492 6.10463 6.14721 6.06494 6.19882 6.01333C6.25043 5.96172 6.29012 5.89944 6.31509 5.83085L7.83384 1.6546L9.35259 5.83085C9.37756 5.89944 9.41725 5.96172 9.46886 6.01333C9.52047 6.06494 9.58275 6.10463 9.65134 6.1296L13.8276 7.64835L9.65134 9.1671Z"
                fill="currentColor"
              />
            </svg>
            Neuropolis.ai
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Интеллектуальные чат-боты для{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0167F3] via-[#2C81F6] to-[#399AFC] relative">
              автоматизации коммуникаций
              <svg
                className="absolute -bottom-2 left-0 w-full h-2 text-[#0167F3]/20"
                viewBox="0 0 100 15"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,5 Q25,0 50,5 T100,5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                />
              </svg>
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Мы создаем современных ИИ-чат-ботов, которые автоматизируют общение
            с клиентами, сотрудниками и партнерами на любых платформах.
          </motion.p>
        </motion.div>

        {/* Вдохновляющий блок о технологиях */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="relative mb-24 p-8 rounded-2xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#0167F3]/10 to-[#399AFC]/10 dark:from-[#0167F3]/20 dark:to-[#399AFC]/20 backdrop-blur-sm border border-[#0167F3]/20 dark:border-[#399AFC]/30 rounded-2xl"></div>
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#0167F3]/10 rounded-full blur-3xl"></div>
          <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-[#399AFC]/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#0167F3] to-[#399AFC] shadow-lg">
              <BrainCircuit className="w-10 h-10 md:w-12 md:h-12 text-white" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Чат-боты будущего на базе нейросетей
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed max-w-3xl">
                Мы используем передовые технологии искусственного интеллекта и
                нейронных сетей, чтобы создавать чат-боты, которые понимают
                естественный язык, распознают контекст и обучаются в процессе
                работы, становясь умнее с каждым взаимодействием.
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#0167F3]/10 text-[#0167F3] dark:bg-[#0167F3]/20 dark:text-[#399AFC]">
                  <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                  GPT-4 Turbo
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#0167F3]/15 text-[#0167F3] dark:bg-[#0167F3]/25 dark:text-[#399AFC]">
                  <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                  Gemini Pro
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#0167F3]/20 text-[#0167F3] dark:bg-[#0167F3]/30 dark:text-[#399AFC]">
                  <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                  Claude 3
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#0167F3]/25 text-[#0167F3] dark:bg-[#0167F3]/35 dark:text-[#399AFC]">
                  <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                  Собственные модели
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Основные преимущества */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
        >
          {botBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={benefitCardVariants}
              whileHover="hover"
              className={`group relative p-7 rounded-2xl transition-all duration-300 overflow-hidden ${
                isDark
                  ? "bg-gray-800/50 hover:bg-gray-800/70 border border-gray-700/50"
                  : "bg-white hover:shadow-xl border border-gray-200/70"
              }`}
            >
              {/* Градиентный фон при наведении */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 transition-opacity duration-500`}
              ></div>

              {/* Декоративный элемент */}
              <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-[#0167F3]/5 dark:bg-[#399AFC]/10 opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div
                  className={`w-14 h-14 rounded-xl mb-5 flex items-center justify-center bg-gradient-to-br ${benefit.gradient} text-white shadow-md group-hover:shadow-lg transition-all duration-300 transform group-hover:scale-105`}
                >
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-[#0167F3] dark:group-hover:text-[#399AFC] transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
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
            className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center"
          >
            Возможности чат-ботов для разных платформ
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {platformCapabilities.map((platform, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative overflow-hidden p-7 rounded-2xl transition-all duration-300 ${
                  isDark
                    ? "bg-gray-800/50 border border-gray-700/50 hover:border-[#399AFC]/50"
                    : "bg-white border border-gray-200 hover:border-[#0167F3]/50"
                } hover:shadow-lg hover:shadow-[#0167F3]/5 dark:hover:shadow-[#399AFC]/5`}
              >
                {/* Градиент фона */}
                <div
                  className={`absolute left-0 top-0 h-2 w-full bg-gradient-to-r ${platform.gradient}`}
                ></div>
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${platform.gradient} text-white shadow-md transform transition-transform duration-300 hover:scale-105`}
                  >
                    {platform.icon}
                  </div>
                  <h4 className={`text-xl font-bold ${platform.color}`}>
                    {platform.name}
                  </h4>
                </div>
                <ul className="space-y-3.5">
                  {platform.capabilities.map((capability, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#0167F3] dark:text-[#399AFC] mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">
                        {capability}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700/50">
                  <a
                    href="#chatbots-cases"
                    className="inline-flex items-center text-sm font-medium group text-[#0167F3] dark:text-[#399AFC] hover:text-[#399AFC] dark:hover:text-[#0167F3] transition-colors duration-300"
                  >
                    Посмотреть примеры
                    <ArrowRight className="ml-1.5 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
