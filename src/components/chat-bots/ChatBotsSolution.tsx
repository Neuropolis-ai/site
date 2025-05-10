"use client";

import React from "react";
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
import { Heading } from "@/components/ui/heading";
import Subheading from "@/components/ui/subheading";
import Badge from "@/components/ui/Badge";
import Link from "next/link";

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
      icon: <div className="w-6 h-6 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      </div>,
      title: "Круглосуточная работа",
      description:
        "Чат-боты обеспечивают мгновенную поддержку клиентам 24/7/365 без выходных и праздников.",
      gradient: "from-primary to-primary-light",
    },
    {
      icon: <div className="w-6 h-6 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </div>,
      title: "Одновременная обработка",
      description:
        "Одновременное обслуживание тысяч клиентов без снижения качества и скорости ответов.",
      gradient: "from-primary/90 to-primary-light/90",
    },
    {
      icon: <div className="w-6 h-6 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      </div>,
      title: "Персонализация",
      description:
        "Индивидуальный подход к каждому клиенту на основе истории взаимодействия и предпочтений.",
      gradient: "from-primary/80 to-primary-light/80",
    },
    {
      icon: <div className="w-6 h-6 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 2v6h6" />
          <path d="M21 12A9 9 0 0 0 6 5.3L3 8" />
          <path d="M21 22v-6h-6" />
          <path d="M3 12a9 9 0 0 0 15 6.7l3-2.7" />
        </svg>
      </div>,
      title: "Интеграция с CRM",
      description:
        "Бесшовная интеграция с CRM-системами и другими бизнес-инструментами для полной автоматизации.",
      gradient: "from-primary/70 to-primary-light/70",
    },
    {
      icon: <div className="w-6 h-6 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      </div>,
      title: "Снижение затрат",
      description:
        "Экономия до 70% расходов на поддержку клиентов по сравнению с традиционными методами.",
      gradient: "from-primary/60 to-primary-light/60",
    },
    {
      icon: <div className="w-6 h-6 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 20V10" />
          <path d="M12 20V4" />
          <path d="M6 20v-6" />
        </svg>
      </div>,
      title: "Аналитика и отчеты",
      description:
        "Подробная аналитика всех взаимодействий для улучшения бизнес-процессов и обслуживания.",
      gradient: "from-primary/50 to-primary-light/50",
    },
  ];

  // Возможности чат-ботов для разных платформ
  const platformCapabilities = [
    {
      name: "Telegram",
      icon: <div className="w-6 h-6 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </div>,
      color: "text-primary",
      gradient: "from-primary to-primary-light",
      capabilities: [
        "Обработка текстовых сообщений и медиафайлов",
        "Интерактивные кнопки и встроенные клавиатуры",
        "Интеграция с платежными системами",
        "Создание полноценных мини-приложений внутри мессенджера",
      ],
    },
    {
      name: "WhatsApp",
      icon: <div className="w-6 h-6 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      </div>,
      color: "text-primary",
      gradient: "from-primary to-primary-light",
      capabilities: [
        "Коммуникация через официальное API WhatsApp Business",
        "Отправка текстовых сообщений, изображений и файлов",
        "Уведомления и рассылки с соблюдением политик платформы",
        "Многоуровневые сценарии диалогов с клиентами",
      ],
    },
    {
      name: "Веб-сайт",
      icon: <div className="w-6 h-6 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      </div>,
      color: "text-primary",
      gradient: "from-primary to-primary-light",
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
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900 -z-10"></div>

      {/* Декоративные плавающие элементы */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-blue-400/20 dark:from-blue-500/10 dark:to-blue-700/10 rounded-full blur-3xl -z-5 animate-pulse"
        style={{ animationDuration: "8s" }}
      ></div>
      <div
        className="absolute top-1/3 left-1/4 w-80 h-80 bg-gradient-to-tr from-indigo-200/20 to-indigo-400/20 dark:from-indigo-500/10 dark:to-indigo-700/10 rounded-full blur-3xl -z-5 animate-pulse"
        style={{ animationDuration: "12s", animationDelay: "2s" }}
      ></div>
      <div
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-purple-200/20 to-purple-400/20 dark:from-purple-500/10 dark:to-purple-700/10 rounded-full blur-3xl -z-5 animate-pulse"
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
          <motion.div variants={itemVariants}>
            <Badge>Наши решения</Badge>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm mb-4 bg-primary/10 text-primary dark:text-primary-light border border-primary/20 dark:border-primary-light/50 backdrop-blur-sm"
          >
            <svg
              width={15}
              height={15}
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-primary dark:text-primary-light"
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
          <motion.div variants={itemVariants}>
            <Heading level={2} align="center" className="mb-6">
              Интеллектуальные решения для{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-light">
                автоматизации коммуникаций
              </span>
            </Heading>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Subheading align="center" className="max-w-3xl mx-auto">
              Наши чат-боты работают на основе новейших алгоритмов искусственного
              интеллекта, обеспечивая беспрецедентное качество взаимодействия с
              клиентами.
            </Subheading>
          </motion.div>
        </motion.div>

        {/* Вдохновляющий блок о технологиях */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="relative mb-24 p-8 rounded-2xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary-light/10 dark:from-primary/20 dark:to-primary-light/20 backdrop-blur-sm border border-primary/20 dark:border-primary-light/30 rounded-2xl"></div>
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-primary-light/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center bg-gradient-to-br from-primary to-primary-light shadow-lg">
              <div className="w-10 h-10 md:w-12 md:h-12 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Чат-боты будущего на базе нейросетей
              </h3>
              <Subheading className="mb-6 max-w-3xl leading-relaxed">
                Мы используем передовые технологии искусственного интеллекта и
                нейронных сетей, чтобы создавать чат-боты, которые понимают
                естественный язык, распознают контекст и обучаются в процессе
                работы, становясь умнее с каждым взаимодействием.
              </Subheading>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-light">
                  <svg className="w-3.5 h-3.5 mr-1.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                    <path d="M5 3v4" />
                    <path d="M19 17v4" />
                    <path d="M3 5h4" />
                    <path d="M17 19h4" />
                  </svg>
                  GPT-4 Turbo
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/15 text-primary dark:bg-primary/25 dark:text-primary-light">
                  <svg className="w-3.5 h-3.5 mr-1.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                    <path d="M5 3v4" />
                    <path d="M19 17v4" />
                    <path d="M3 5h4" />
                    <path d="M17 19h4" />
                  </svg>
                  Gemini Pro
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/20 text-primary dark:bg-primary/30 dark:text-primary-light">
                  <svg className="w-3.5 h-3.5 mr-1.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                    <path d="M5 3v4" />
                    <path d="M19 17v4" />
                    <path d="M3 5h4" />
                    <path d="M17 19h4" />
                  </svg>
                  Claude 3
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/25 text-primary dark:bg-primary/35 dark:text-primary-light">
                  <svg className="w-3.5 h-3.5 mr-1.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                    <path d="M5 3v4" />
                    <path d="M19 17v4" />
                    <path d="M3 5h4" />
                    <path d="M17 19h4" />
                  </svg>
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
                  : "bg-white hover:shadow-lg border border-gray-200/70"
              }`}
            >
              {/* Градиентный фон при наведении */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 transition-opacity duration-500`}
              ></div>

              {/* Декоративный элемент */}
              <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-primary/5 dark:bg-primary-light/10 opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div
                  className={`w-14 h-14 rounded-xl mb-5 flex items-center justify-center bg-gradient-to-br ${benefit.gradient} text-white shadow-md group-hover:shadow-lg transition-all duration-300 transform group-hover:scale-105`}
                >
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary dark:group-hover:text-primary-light transition-colors duration-300">
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
          <motion.div variants={itemVariants} className="text-center mb-12">
            <Badge>Платформы интеграции</Badge>
            <Heading level={3} align="center" className="mb-4">
              Возможности чат-ботов для{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-light">
                разных платформ
              </span>
            </Heading>
            <Subheading align="center" className="max-w-3xl mx-auto">
              Наши решения легко интегрируются с популярными мессенджерами и веб-платформами, 
              обеспечивая единый пользовательский опыт во всех каналах коммуникации.
            </Subheading>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {platformCapabilities.map((platform, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.5, ease: "easeOut" },
                }}
                className={`group relative overflow-hidden p-7 rounded-2xl transition-all duration-500 ${
                  isDark
                    ? "bg-gray-800/50 border border-gray-700/50 hover:border-primary-light/50 hover:shadow-xl hover:shadow-primary-light/5"
                    : "bg-white border border-gray-200 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
                }`}
              >
                {/* Градиентный фон при наведении */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-light/5 dark:from-primary/10 dark:to-primary-light/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                {/* Градиент верхней части */}
                <div className={`absolute left-0 top-0 h-2 w-full bg-gradient-to-r ${platform.gradient}`}></div>
                
                {/* Декоративные элементы */}
                <div className="absolute -right-16 -bottom-16 w-48 h-48 bg-gradient-to-br from-primary/5 to-primary-light/5 dark:from-primary/10 dark:to-primary-light/10 rounded-full opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500"></div>
                
                <div className="relative">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`relative w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${platform.gradient} text-white shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110`}>
                      {platform.icon}
                      <div className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <h4 className={`text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-primary-light transition-colors duration-300`}>
                      {platform.name}
                    </h4>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {platform.capabilities.map((capability, i) => (
                      <li key={i} className="flex items-start group/item">
                        <div className="mt-0.5 flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light mr-3 group-hover/item:bg-primary group-hover/item:text-white transition-colors duration-300">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                            <polyline points="22 4 12 14.01 9 11.01" />
                          </svg>
                        </div>
                        <span className="text-gray-700 dark:text-gray-300 group-hover/item:text-primary-dark dark:group-hover/item:text-primary-light/80 transition-colors duration-300">
                          {capability}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-gray-100 dark:border-gray-700/50">
                    <Link
                      href="#chatbots-cases"
                      className="group inline-flex items-center bg-gradient-to-r from-primary/10 to-primary-light/10 dark:from-primary/20 dark:to-primary-light/20 text-primary dark:text-primary-light font-medium py-2.5 px-5 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md"
                    >
                      <span className="relative flex items-center">
                        Посмотреть примеры
                        <svg 
                          className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1.5 duration-300" 
                          xmlns="http://www.w3.org/2000/svg" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14"/>
                          <path d="m12 5 7 7-7 7"/>
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
