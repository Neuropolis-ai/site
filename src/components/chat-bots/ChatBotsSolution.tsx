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
      icon: <Clock className="w-6 h-6" />,
      title: "Круглосуточная работа",
      description:
        "Чат-боты обеспечивают мгновенную поддержку клиентам 24/7/365 без выходных и праздников.",
      gradient: "from-primary to-primary-light",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Одновременная обработка",
      description:
        "Одновременное обслуживание тысяч клиентов без снижения качества и скорости ответов.",
      gradient: "from-primary/90 to-primary-light/90",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Персонализация",
      description:
        "Индивидуальный подход к каждому клиенту на основе истории взаимодействия и предпочтений.",
      gradient: "from-primary/80 to-primary-light/80",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Интеграция с CRM",
      description:
        "Бесшовная интеграция с CRM-системами и другими бизнес-инструментами для полной автоматизации.",
      gradient: "from-primary/70 to-primary-light/70",
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Снижение затрат",
      description:
        "Экономия до 70% расходов на поддержку клиентов по сравнению с традиционными методами.",
      gradient: "from-primary/60 to-primary-light/60",
    },
    {
      icon: <BarChart2 className="w-6 h-6" />,
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
      icon: <MessageSquare className="w-6 h-6" />,
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
      icon: <Globe className="w-6 h-6" />,
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
      icon: <Globe className="w-6 h-6" />,
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

      {/* Декоративные плавающие элементы (статичные) */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-blue-400/20 dark:from-blue-500/10 dark:to-blue-700/10 rounded-full blur-3xl -z-5"
      ></div>
      <div
        className="absolute top-1/3 left-1/4 w-80 h-80 bg-gradient-to-tr from-indigo-200/20 to-indigo-400/20 dark:from-indigo-500/10 dark:to-indigo-700/10 rounded-full blur-3xl -z-5"
      ></div>
      <div
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-purple-200/20 to-purple-400/20 dark:from-purple-500/10 dark:to-purple-700/10 rounded-full blur-3xl -z-5"
      ></div>

      {/* Декоративные линии */}
      <div className="absolute inset-0 overflow-hidden opacity-10 dark:opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        <div className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
      </div>

      <Container>
        <div className="text-center mb-20">
          <Badge>Наши решения</Badge>
          <Heading level={2} align="center" className="mb-6">
            Интеллектуальные решения для{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-light">
              автоматизации коммуникаций
            </span>
          </Heading>
          <Subheading align="center" className="max-w-3xl mx-auto">
            Наши чат-боты работают на основе новейших алгоритмов искусственного
            интеллекта, обеспечивая беспрецедентное качество взаимодействия с
            клиентами.
          </Subheading>
        </div>

        {/* Улучшенный блок о технологиях */}
        <div className="relative mb-24 p-10 rounded-3xl overflow-hidden">
          {/* Улучшенный фон с более выраженным глассморфизмом */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/15 to-primary-light/15 dark:from-primary/25 dark:to-primary-light/25 backdrop-blur-xl border border-primary/30 dark:border-primary-light/40 rounded-3xl shadow-xl"></div>
          
          {/* Модернизированные декоративные эффекты */}
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-primary-light/20 rounded-full blur-3xl opacity-60"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
            {/* Обновленный контейнер для иконки с 3D-эффектом */}
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl flex items-center justify-center bg-gradient-to-br from-primary to-primary-light shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500 group relative">
              {/* Блик для 3D-эффекта */}
              <div className="absolute inset-0 bg-white opacity-20 rounded-2xl transform translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
              <div className="w-12 h-12 md:w-14 md:h-14 text-white relative z-10">
                <BrainCircuit className="w-full h-full" />
              </div>
              
              {/* Декоративный элемент */}
              <div className="absolute -right-3 -bottom-3 w-8 h-8 bg-yellow-400/70 rounded-full blur-sm"></div>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-5 leading-tight">
                Чат-боты будущего <br/>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-light">на базе нейросетей</span>
              </h3>
              
              <Subheading className="mb-8 max-w-3xl leading-relaxed">
                Мы используем передовые технологии искусственного интеллекта и
                нейронных сетей, чтобы создавать чат-боты, которые понимают
                естественный язык, распознают контекст и обучаются в процессе
                работы, становясь умнее с каждым взаимодействием.
              </Subheading>
              
              {/* Обновленные теги */}
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary/15 text-primary dark:bg-primary/25 dark:text-primary-light border border-primary/20 dark:border-primary/40 shadow-sm hover:shadow-primary/20 dark:hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-1">
                  <Sparkles className="w-4 h-4 mr-2" />
                  GPT-4 Turbo
                </span>
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary/20 text-primary dark:bg-primary/30 dark:text-primary-light border border-primary/20 dark:border-primary/40 shadow-sm hover:shadow-primary/20 dark:hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-1">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Gemini Pro
                </span>
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary/25 text-primary dark:bg-primary/35 dark:text-primary-light border border-primary/20 dark:border-primary/40 shadow-sm hover:shadow-primary/20 dark:hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-1">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Claude 3
                </span>
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary/30 text-primary dark:bg-primary/40 dark:text-primary-light border border-primary/20 dark:border-primary/40 shadow-sm hover:shadow-primary/20 dark:hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-1">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Собственные модели
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Основные преимущества */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {botBenefits.map((benefit, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-2xl transition-all duration-500 overflow-hidden backdrop-blur-sm ${
                isDark
                  ? "bg-gray-800/50 hover:bg-gray-800/70 border border-gray-700/50 hover:border-primary/30"
                  : "bg-white/80 hover:bg-white hover:shadow-xl hover:shadow-primary/10 border border-gray-200/70 hover:border-primary/20"
              }`}
            >
              {/* Градиентный фон при наведении */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 transition-opacity duration-500`}
              ></div>

              {/* Декоративный элемент */}
              <div className="absolute -right-12 -bottom-12 w-40 h-40 rounded-full bg-primary/5 dark:bg-primary-light/10 opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div
                  className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-br ${benefit.gradient} text-white shadow-lg shadow-primary/20 border-2 border-white/20 dark:border-white/10 group-hover:shadow-xl transition-all duration-500 transform group-hover:scale-110 relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-white opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-primary dark:group-hover:text-primary-light transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Возможности для различных платформ */}
        <div className="mb-20">
          <div className="text-center mb-12">
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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {platformCapabilities.map((platform, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden p-8 rounded-2xl transition-all duration-500 backdrop-blur-sm ${
                  isDark
                    ? "bg-gray-800/50 border border-gray-700/50 hover:border-primary-light/50 hover:shadow-xl hover:shadow-primary-light/10"
                    : "bg-white/90 border border-gray-200 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10"
                }`}
              >
                {/* Градиентный фон при наведении */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary-light/10 dark:from-primary/15 dark:to-primary-light/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                {/* Градиент верхней части */}
                <div className={`absolute left-0 top-0 h-2 w-full bg-gradient-to-r ${platform.gradient}`}></div>
                
                {/* Декоративные элементы */}
                <div className="absolute -right-16 -bottom-16 w-48 h-48 bg-gradient-to-br from-primary/10 to-primary-light/10 dark:from-primary/15 dark:to-primary-light/15 rounded-full opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500"></div>
                
                <div className="relative">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`relative w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${platform.gradient} text-white shadow-lg shadow-primary/20 border-2 border-white/20 dark:border-white/10 group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110`}>
                      {platform.icon}
                      <div className="absolute inset-0 rounded-xl bg-white/10 opacity-10 dark:opacity-20 group-hover:opacity-20 dark:group-hover:opacity-30 transition-opacity duration-300"></div>
                    </div>
                    <h4 className={`text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-primary-light transition-colors duration-300`}>
                      {platform.name}
                    </h4>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {platform.capabilities.map((capability, i) => (
                      <li key={i} className="flex items-start group/item">
                        <div className="mt-0.5 flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light mr-3 group-hover/item:bg-primary group-hover/item:text-white transition-colors duration-300">
                          <CheckCircle className="w-4 h-4" />
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
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1.5 duration-300" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Дополнительный компонент "Решение есть!" */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="relative overflow-hidden p-10 rounded-3xl bg-gradient-to-r from-primary/15 to-primary-light/15 dark:from-primary/25 dark:to-primary-light/25 backdrop-blur-xl border border-primary/30 dark:border-primary-light/40 shadow-xl">
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/40 dark:bg-primary/30 rounded-full blur-3xl opacity-40"></div>
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-primary-light/40 dark:bg-primary-light/30 rounded-full blur-3xl opacity-40"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 text-left">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-r from-primary to-primary-light flex-shrink-0 flex items-center justify-center transform rotate-3 hover:rotate-0 transition-all duration-500 shadow-2xl group">
                <div className="absolute inset-0 bg-white opacity-20 rounded-2xl transform translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
                <BrainCircuit className="w-10 h-10 md:w-12 md:h-12 text-white relative z-10" />
                <div className="absolute -right-3 -bottom-3 w-8 h-8 bg-yellow-400/70 rounded-full blur-sm"></div>
              </div>
              
              <div className="flex-grow">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Решение есть!
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  Современные чат-боты на базе искусственного интеллекта способны решить все эти проблемы, обеспечивая круглосуточную поддержку и глубокую аналитику коммуникаций.
                </p>
                <Link
                  href="#chatbots-solution"
                  className="group inline-flex items-center bg-gradient-to-r from-primary to-primary-light text-white font-medium py-3.5 px-7 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 dark:hover:shadow-primary-light/20 transform hover:-translate-y-1"
                >
                  <span className="relative flex items-center">
                    Узнать о решении
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1.5 duration-300" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
