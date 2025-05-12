"use client";

import { motion } from "framer-motion";
import React from "react";
import Container from "@/components/ui/Container";
import { useTheme } from "@/context/ThemeContext";
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
  Shield,
  Activity,
  Book,
  Bot,
  FileText,
  Briefcase,
  Layers,
  Settings,
  RefreshCw,
} from "lucide-react";
import { Heading } from "@/components/ui/heading";
import Subheading from "@/components/ui/subheading";
import Badge from "@/components/ui/Badge";
import Link from "next/link";
import IconWrapper from "@/components/ui/IconWrapper";

export default function AIAgentSolutionNew() {
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

  // Данные о преимуществах ИИ-агентов
  const agentBenefits = [
    {
      icon: <IconWrapper icon={Clock} size={24} className="text-blue-600" />,
      title: "Экономия времени",
      description:
        "Автоматизация рутинных задач освобождает до 40% рабочего времени сотрудников для выполнения более важных стратегических задач.",
    },
    {
      icon: <IconWrapper icon={Bot} size={24} className="text-blue-600" />,
      title: "Автономность",
      description:
        "Агенты работают самостоятельно по заданным правилам и целям, не требуя постоянного контроля со стороны человека.",
    },
    {
      icon: <IconWrapper icon={RefreshCw} size={24} className="text-blue-600" />,
      title: "Обучаемость",
      description:
        "Алгоритмы машинного обучения позволяют агентам адаптироваться и улучшать свою производительность со временем.",
    },
    {
      icon: <IconWrapper icon={Database} size={24} className="text-blue-600" />,
      title: "Интеграция с системами",
      description:
        "Бесшовное подключение к любым бизнес-системам через API или прямой доступ к базам данных.",
    },
    {
      icon: <IconWrapper icon={DollarSign} size={24} className="text-blue-600" />,
      title: "Снижение затрат",
      description:
        "Уменьшение операционных расходов на 30-50% за счет оптимизации процессов и сокращения ручного труда.",
    },
    {
      icon: <IconWrapper icon={Layers} size={24} className="text-blue-600" />,
      title: "Масштабируемость",
      description:
        "Легко масштабируются под возрастающие объемы задач без необходимости пропорционального увеличения штата.",
    },
  ];

  // Типы ИИ-агентов
  const agentTypes = [
    {
      icon: <IconWrapper icon={MessageSquare} size={24} className="text-blue-600" />,
      name: "Коммуникационные агенты",
      capabilities: [
        "Автоматические ответы на запросы клиентов",
        "Обработка входящей корреспонденции",
        "Рассылка персонализированных сообщений",
        "Модерация комментариев и обратной связи",
      ],
    },
    {
      icon: <IconWrapper icon={FileText} size={24} className="text-blue-600" />,
      name: "Аналитические агенты",
      capabilities: [
        "Сбор и обработка данных из различных источников",
        "Автоматическое создание отчетов и дашбордов",
        "Выявление аномалий и трендов в данных",
        "Прогнозирование на основе исторических данных",
      ],
    },
    {
      icon: <IconWrapper icon={Briefcase} size={24} className="text-blue-600" />,
      name: "Операционные агенты",
      capabilities: [
        "Автоматизация бизнес-процессов и документооборота",
        "Управление задачами и проектами",
        "Координация между отделами и системами",
        "Мониторинг и контроль выполнения задач",
      ],
    },
  ];

  // Сравнение с традиционными методами
  const comparisonTable = [
    {
      parameter: "Скорость выполнения",
      agents: "В 5-10 раз быстрее человека",
      traditional: "Зависит от загруженности и опыта сотрудника",
    },
    {
      parameter: "Доступность",
      agents: "24/7/365 без перерывов",
      traditional: "Ограничена рабочим графиком",
    },
    {
      parameter: "Масштабируемость",
      agents: "Неограниченная",
      traditional: "Требует найма и обучения новых сотрудников",
    },
    {
      parameter: "Стоимость операции",
      agents: "от $0.1 до $0.5 за операцию",
      traditional: "от $5 до $25 за операцию",
    },
    {
      parameter: "Точность выполнения",
      agents: "99.9% при правильной настройке",
      traditional: "60-90% (зависит от сложности и человеческого фактора)",
    },
  ];

  // Процесс работы агента
  const agentWorkflow = [
    {
      step: "01",
      title: "Получение задачи",
      description: "Агент получает триггер или команду (например, новое письмо, запись в CRM, время по расписанию)."
    },
    {
      step: "02",
      title: "Анализ и планирование",
      description: "ИИ анализирует задачу, данные и определяет последовательность действий."
    },
    {
      step: "03",
      title: "Взаимодействие",
      description: "Агент подключается к нужным системам, извлекает или вносит информацию."
    },
    {
      step: "04",
      title: "Выполнение действия",
      description: "Отправляет отчет, отвечает клиенту, обновляет статус заказа и т.д."
    },
    {
      step: "05",
      title: "Обучение и отчет",
      description: "Запоминает результат, формирует отчет и улучшает свою работу в будущем."
    }
  ];

  return (
    <motion.section
      id="solution"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="py-20 md:py-28 px-4 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900 -z-10"></div>
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-gradient-to-br from-blue-200/20 to-blue-400/20 dark:from-blue-500/10 dark:to-blue-700/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-200/20 to-indigo-400/20 dark:from-indigo-500/10 dark:to-indigo-700/10 rounded-full blur-3xl -z-10"></div>

      <motion.div
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        className="absolute top-[5%] right-[15%] w-12 h-12 bg-blue-400/20 dark:bg-blue-600/30 rounded-full backdrop-blur-md z-0"
      ></motion.div>

      <Container className="">
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
            Интеллектуальные ИИ-агенты{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-sky-400">
              для вашего бизнеса
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Автоматизируйте рутинные задачи и увеличьте эффективность с помощью
            интеллектуальных ассистентов, работающих 24/7
          </motion.p>
        </motion.div>

        {/* Улучшенный блок о технологиях */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="relative mb-20 p-10 rounded-3xl overflow-hidden"
        >
          {/* Улучшенный фон с более выраженным глассморфизмом */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-sky-400/10 dark:from-blue-500/20 dark:to-sky-400/20 backdrop-blur-xl border border-blue-300/30 dark:border-blue-400/30 rounded-3xl shadow-xl"></div>
          
          {/* Модернизированные декоративные эффекты */}
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-sky-400/20 rounded-full blur-3xl opacity-60"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
            {/* Обновленный контейнер для иконки с 3D-эффектом */}
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl flex items-center justify-center bg-gradient-to-br from-blue-500 to-sky-400 shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500 group relative">
              {/* Блик для 3D-эффекта */}
              <div className="absolute inset-0 bg-white opacity-20 rounded-2xl transform translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
              <div className="w-12 h-12 md:w-14 md:h-14 text-white relative z-10">
                <IconWrapper icon={Bot} size={56} />
              </div>
              
              {/* Декоративный элемент */}
              <div className="absolute -right-3 -bottom-3 w-8 h-8 bg-yellow-400/70 rounded-full blur-sm"></div>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-5 leading-tight">
                Что такое <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-sky-400">ИИ-агент</span>
              </h3>
              
              <p className="mb-8 max-w-3xl leading-relaxed text-lg text-gray-600 dark:text-gray-300">
                Это программа, использующая искусственный интеллект для автономного выполнения 
                конкретных бизнес-задач. Она может взаимодействовать с вашими системами, общаться 
                с клиентами или сотрудниками, анализировать данные и обучаться на основе полученного опыта.
              </p>
              
              {/* Обновленные теги */}
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-500/15 text-blue-600 dark:bg-blue-500/25 dark:text-blue-400 border border-blue-300/20 dark:border-blue-500/40 shadow-sm hover:shadow-blue-500/20 dark:hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1">
                  <IconWrapper icon={Sparkles} size={16} className="mr-2" />
                  Нейронные сети
                </span>
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-500/20 text-blue-600 dark:bg-blue-500/30 dark:text-blue-400 border border-blue-300/20 dark:border-blue-500/40 shadow-sm hover:shadow-blue-500/20 dark:hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1">
                  <IconWrapper icon={Sparkles} size={16} className="mr-2" />
                  Машинное обучение
                </span>
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-500/25 text-blue-600 dark:bg-blue-500/35 dark:text-blue-400 border border-blue-300/20 dark:border-blue-500/40 shadow-sm hover:shadow-blue-500/20 dark:hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1">
                  <IconWrapper icon={Sparkles} size={16} className="mr-2" />
                  Обработка языка
                </span>
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-500/30 text-blue-600 dark:bg-blue-500/40 dark:text-blue-400 border border-blue-300/20 dark:border-blue-500/40 shadow-sm hover:shadow-blue-500/20 dark:hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1">
                  <IconWrapper icon={Sparkles} size={16} className="mr-2" />
                  API интеграции
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
        >
          {agentBenefits.map((benefit, index) => (
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

        {/* Сравнение с традиционными методами */}
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
            Сравнение с традиционными методами
          </motion.h3>

          <motion.div
            variants={itemVariants}
            className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg mb-20"
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
                    ИИ-агенты
                  </th>
                  <th className="p-4 text-left border-b dark:border-gray-700">
                    Традиционные методы
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonTable.map((row, index) => (
                  <tr
                    key={index}
                    className={`${
                      isDark ? "hover:bg-gray-800/70" : "hover:bg-blue-50/30"
                    } transition-colors`}
                  >
                    <td className="p-4 border-b dark:border-gray-700">
                      {row.parameter}
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
                        {row.agents}
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
                        {row.traditional}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </motion.div>

        {/* Блок с преимуществами для бизнеса */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20"
        >
          <motion.div
            variants={itemVariants}
            className={`p-6 rounded-xl transition-all ${
              isDark
                ? "bg-gray-800/50 border border-gray-700 backdrop-blur-sm"
                : "bg-white border border-gray-200"
            }`}
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Проблемы, которые решают ИИ-агенты
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="mr-2 mt-1.5 w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-sky-400 flex-shrink-0"></div>
                <span className="text-gray-600 dark:text-gray-300">
                  Снижение операционных расходов
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mr-2 mt-1.5 w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-sky-400 flex-shrink-0"></div>
                <span className="text-gray-600 dark:text-gray-300">
                  Освобождение времени сотрудников от рутины
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mr-2 mt-1.5 w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-sky-400 flex-shrink-0"></div>
                <span className="text-gray-600 dark:text-gray-300">
                  Ускорение ответов на запросы клиентов
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mr-2 mt-1.5 w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-sky-400 flex-shrink-0"></div>
                <span className="text-gray-600 dark:text-gray-300">
                  Автоматизация обработки данных и отчетности
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mr-2 mt-1.5 w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-sky-400 flex-shrink-0"></div>
                <span className="text-gray-600 dark:text-gray-300">
                  Повышение точности и снижение ошибок
                </span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className={`p-6 rounded-xl transition-all ${
              isDark
                ? "bg-gray-800/50 border border-gray-700 backdrop-blur-sm"
                : "bg-white border border-gray-200"
            }`}
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Возможности для вашего бизнеса
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="mr-2 mt-1.5 w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-sky-400 flex-shrink-0"></div>
                <span className="text-gray-600 dark:text-gray-300">
                  Концентрация команды на стратегических задачах
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mr-2 mt-1.5 w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-sky-400 flex-shrink-0"></div>
                <span className="text-gray-600 dark:text-gray-300">
                  Рост прибыли за счет оптимизации
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mr-2 mt-1.5 w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-sky-400 flex-shrink-0"></div>
                <span className="text-gray-600 dark:text-gray-300">
                  Повышение удовлетворенности клиентов
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mr-2 mt-1.5 w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-sky-400 flex-shrink-0"></div>
                <span className="text-gray-600 dark:text-gray-300">
                  Принятие решений на основе данных, а не интуиции
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mr-2 mt-1.5 w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-sky-400 flex-shrink-0"></div>
                <span className="text-gray-600 dark:text-gray-300">
                  Масштабирование бизнеса без роста штата
                </span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </Container>
    </motion.section>
  );
}
