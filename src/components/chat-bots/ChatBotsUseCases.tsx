"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";
import { useState } from "react";
import {
  CheckCircle,
  ChevronRight,
  BrainCircuit,
  Sparkles,
  TrendingUp,
  Building2,
  MessageSquareHeart,
  Users,
  BarChart2,
  Clock,
  ArrowRight,
  Globe,
  Zap,
  Shield,
  Search,
} from "lucide-react";

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

  const pulseAnimation = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.02, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };

  // Улучшенные данные о кейсах использования чат-ботов
  const useCases = [
    {
      title: "Автоматизация клиентской поддержки",
      description:
        "Интеллектуальный чат-бот мгновенно отвечает на запросы клиентов 24/7, повышая удовлетворенность и снижая нагрузку на операторов.",
      stats: [
        {
          value: "24/7",
          label: "Непрерывная работа",
          icon: <Clock className="w-4 h-4" />,
        },
        {
          value: "3 сек",
          label: "Время ответа",
          icon: <Zap className="w-4 h-4" />,
        },
        {
          value: "70%",
          label: "Автоматизация",
          icon: <BarChart2 className="w-4 h-4" />,
        },
      ],
      features: [
        "Глубокая интеграция с CRM для персонализированного обслуживания",
        "Автоматическая эскалация сложных запросов на операторов",
        "Аналитическая панель с метриками эффективности в реальном времени",
        "Мультиязычность и адаптация к региональным особенностям",
      ],
      image: "/assets/images/ai-customer-support.jpg",
      icon: <MessageSquareHeart />,
      color: "blue",
      gradient: "from-blue-500 to-blue-600",
      darkGradient: "from-blue-600/20 to-blue-800/20",
    },
    {
      title: "Генерация и квалификация лидов",
      description:
        "Конверсионный бот проактивно взаимодействует с посетителями, собирает данные и квалифицирует потенциальных клиентов для вашего отдела продаж.",
      stats: [
        {
          value: "35%",
          label: "Рост конверсии",
          icon: <TrendingUp className="w-4 h-4" />,
        },
        {
          value: "300+",
          label: "Лидов ежемесячно",
          icon: <Users className="w-4 h-4" />,
        },
        {
          value: "45%",
          label: "Экономия времени",
          icon: <Clock className="w-4 h-4" />,
        },
      ],
      features: [
        "Прогностический анализ для оценки потенциала клиента",
        "Бесшовная интеграция с воронкой продаж в CRM-системе",
        "Интерактивные опросы для сбора квалификационной информации",
        "Автоматическая сегментация лидов на основе интересов",
      ],
      image: "/assets/images/callcenter.jpg",
      icon: <TrendingUp />,
      color: "green",
      gradient: "from-green-500 to-green-600",
      darkGradient: "from-green-600/20 to-green-800/20",
    },
    {
      title: "Внутренние коммуникации",
      description:
        "Корпоративный ассистент-бот оптимизирует внутренние процессы, предоставляет мгновенный доступ к документации и автоматизирует рабочие процессы.",
      stats: [
        {
          value: "60%",
          label: "Снижение нагрузки",
          icon: <Shield className="w-4 h-4" />,
        },
        {
          value: "85%",
          label: "Удовлетворенность",
          icon: <Users className="w-4 h-4" />,
        },
        {
          value: "5ч",
          label: "Экономия в неделю",
          icon: <Clock className="w-4 h-4" />,
        },
      ],
      features: [
        "Единая база знаний с самообучающимся рекомендательным алгоритмом",
        "Цифровые ассистенты для каждого отдела с уникальной экспертизой",
        "Интеграция с корпоративными системами документооборота",
        "Проактивные уведомления о важных событиях и дедлайнах",
      ],
      image: "/assets/images/ai-consultation.jpg",
      icon: <Building2 />,
      color: "purple",
      gradient: "from-purple-500 to-purple-600",
      darkGradient: "from-purple-600/20 to-purple-800/20",
    },
  ];

  return (
    <section
      id="chatbots-cases"
      className="py-20 md:py-28 relative overflow-hidden"
    >
      {/* Современный объемный градиентный фон */}
      <div className="absolute inset-0 bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-white via-blue-50/30 to-white dark:from-gray-950 dark:via-blue-950/5 dark:to-gray-950 -z-10"></div>

      {/* Трехмерные градиентные элементы */}
      <div
        className="absolute -top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-200/10 to-indigo-300/10 dark:from-blue-500/10 dark:to-indigo-600/10 rounded-full blur-3xl -z-5 animate-pulse"
        style={{ animationDuration: "15s" }}
      ></div>
      <div
        className="absolute top-1/3 left-0 w-72 h-72 bg-gradient-to-tr from-purple-200/10 to-blue-300/10 dark:from-purple-500/10 dark:to-blue-600/10 rounded-full blur-3xl -z-5 animate-pulse"
        style={{ animationDuration: "20s", animationDelay: "3s" }}
      ></div>
      <div
        className="absolute bottom-20 right-0 w-80 h-80 bg-gradient-to-tl from-blue-200/10 to-purple-300/10 dark:from-blue-500/10 dark:to-purple-600/10 rounded-full blur-3xl -z-5 animate-pulse"
        style={{ animationDuration: "18s", animationDelay: "5s" }}
      ></div>

      {/* SVG паттерн */}
      <div className="absolute inset-0 overflow-hidden opacity-5 dark:opacity-10 pointer-events-none">
        <svg
          width="100%"
          height="100%"
          className="absolute inset-0"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="grid-pattern-use-cases"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
              className="text-gray-200 dark:text-gray-800"
            >
              <circle cx="1" cy="1" r="0.5" fill="currentColor" opacity="0.3" />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#grid-pattern-use-cases)"
          />
        </svg>
      </div>

      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-12 md:mb-16"
        >
          {/* Бейдж с улучшенной типографикой */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-4 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 text-blue-600 dark:text-blue-400 border border-blue-200/50 dark:border-blue-700/50 backdrop-blur-sm shadow-sm"
          >
            <div className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-500 dark:bg-blue-600 text-white">
              <Search className="w-3 h-3" />
            </div>
            Примеры внедрения
          </motion.div>

          {/* Заголовок с улучшенной типографикой и 3D-эффектом */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Как чат-боты{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-[#0167F3] via-[#2C81F6] to-[#399AFC]">
                трансформируют бизнес
              </span>
              <span className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500/20 via-blue-400/20 to-blue-500/20 blur-sm -z-10"></span>
              <svg
                className="absolute -bottom-2 left-0 w-full h-2 text-blue-500/20"
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

          {/* Подзаголовок с улучшенной типографикой */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Изучите реальные примеры внедрения нейросетевых чат-ботов и
            результаты, которые достигают наши клиенты в разных отраслях.
          </motion.p>
        </motion.div>

        {/* Улучшенный интерактивный интерфейс выбора кейсов */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mb-12 md:mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                onClick={() => setActiveTab(index)}
                className={`relative group rounded-xl md:rounded-2xl transition-all duration-300 overflow-hidden cursor-pointer ${
                  activeTab === index
                    ? `ring-2 ring-${useCase.color}-500 dark:ring-${useCase.color}-400 shadow-lg shadow-${useCase.color}-500/10`
                    : isDark
                    ? "bg-gray-900/50 hover:bg-gray-800/70 border border-gray-800 hover:border-gray-700"
                    : "bg-white hover:bg-gray-50 border border-gray-200 hover:border-gray-300 hover:shadow-lg"
                }`}
              >
                {/* Градиент карточки */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${
                    isDark ? useCase.darkGradient : `${useCase.gradient}/5`
                  } opacity-0 ${
                    activeTab === index
                      ? "opacity-100"
                      : "group-hover:opacity-100"
                  } transition-opacity duration-300 -z-5`}
                ></div>

                {/* Индикатор активного таба */}
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${
                    useCase.gradient
                  } ${
                    activeTab === index
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-50"
                  } transition-opacity duration-300`}
                ></div>

                <div className="relative p-5 md:p-6 z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center bg-gradient-to-br ${useCase.gradient} text-white shadow-md overflow-hidden`}
                    >
                      <div className="relative z-10">{useCase.icon}</div>
                      <div className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                    </div>
                    <div>
                      <h3
                        className={`text-base md:text-lg font-semibold text-gray-900 dark:text-white`}
                      >
                        {useCase.title}
                      </h3>
                      <div
                        className={`text-xs text-${useCase.color}-600 dark:text-${useCase.color}-400 flex items-center gap-1`}
                      >
                        <span>Подробнее</span>
                        <ChevronRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-2 mb-4">
                    {useCase.description}
                  </p>

                  {/* Ключевые метрики */}
                  <div className="grid grid-cols-3 gap-2">
                    {useCase.stats.map((stat, i) => (
                      <div
                        key={i}
                        className={`p-2 rounded-lg bg-gradient-to-br ${
                          isDark
                            ? "from-gray-800 to-gray-900 border border-gray-800"
                            : "from-gray-50 to-white border border-gray-100"
                        } flex flex-col items-center justify-center text-center`}
                      >
                        <div
                          className={`text-${useCase.color}-500 dark:text-${useCase.color}-400 mb-1`}
                        >
                          {stat.icon}
                        </div>
                        <div
                          className={`text-base md:text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r ${useCase.gradient}`}
                        >
                          {stat.value}
                        </div>
                        <div className="text-[10px] text-gray-500 dark:text-gray-400 line-clamp-1">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Расширенная информация об активном кейсе с улучшенной визуализацией */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 shadow-xl"
        >
          {/* Объемный фон с изоморфным градиентом */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${
              isDark
                ? useCases[activeTab].darkGradient
                : `${useCases[activeTab].gradient}/5`
            } -z-10`}
          ></div>

          {/* Линии градиентного разделителя */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-8 lg:p-10">
            {/* Левая колонка - Текст и статистика */}
            <div className="flex flex-col h-full justify-between">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    initial="initial"
                    animate="animate"
                    variants={pulseAnimation}
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${useCases[activeTab].gradient} text-white shadow-lg relative overflow-hidden`}
                  >
                    <div className="relative z-10 text-white">
                      {useCases[activeTab].icon}
                    </div>
                    <div className="absolute inset-0 bg-white/20 origin-bottom-right -rotate-12"></div>
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      {useCases[activeTab].title}
                    </h3>
                    <div
                      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs bg-${useCases[activeTab].color}-100 dark:bg-${useCases[activeTab].color}-900/30 text-${useCases[activeTab].color}-600 dark:text-${useCases[activeTab].color}-400`}
                    >
                      <Sparkles className="w-3 h-3" />
                      <span>Оптимальное решение</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                  {useCases[activeTab].description}
                </p>

                {/* Улучшенная визуализация статистики */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {useCases[activeTab].stats.map((stat, index) => (
                    <div
                      key={index}
                      className="flex flex-col p-4 rounded-xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm relative overflow-hidden"
                    >
                      <div
                        className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${useCases[activeTab].gradient} w-full`}
                      ></div>
                      <div className="flex items-center gap-2 mb-2">
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center bg-${useCases[activeTab].color}-100 dark:bg-${useCases[activeTab].color}-900/30`}
                        >
                          <div
                            className={`text-${useCases[activeTab].color}-500 dark:text-${useCases[activeTab].color}-400`}
                          >
                            {stat.icon}
                          </div>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                          {stat.label}
                        </p>
                      </div>
                      <p
                        className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${useCases[activeTab].gradient}`}
                      >
                        {stat.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Модернизированные фичи */}
              <div className="rounded-xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-6 border border-gray-100 dark:border-gray-700 shadow-sm">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <BrainCircuit
                    className={`w-5 h-5 text-${useCases[activeTab].color}-500`}
                  />
                  Ключевые особенности решения
                </h4>
                <ul className="space-y-3">
                  {useCases[activeTab].features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle
                        className={`w-5 h-5 text-${useCases[activeTab].color}-500 flex-shrink-0 mt-0.5`}
                      />
                      <span className="text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Правая колонка - Модернизированная иллюстрация */}
            <div className="flex items-center justify-center">
              <div className="relative w-full h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-xl">
                {/* Эффекты наложения */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-${useCases[activeTab].color}-500/10 to-transparent mix-blend-overlay z-20`}
                ></div>

                {/* Современная рамка с градиентом */}
                <div className="absolute inset-0 border-2 border-white/20 rounded-xl z-30 pointer-events-none"></div>

                <Image
                  src={useCases[activeTab].image}
                  alt={useCases[activeTab].title}
                  fill
                  className="object-cover rounded-xl hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute bottom-6 left-6 z-40">
                  <p className="text-white text-lg font-medium mb-2 drop-shadow-md">
                    Узнайте, как это работает
                  </p>
                  <a
                    href="#contact"
                    className={`group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-br ${useCases[activeTab].gradient} hover:brightness-110 shadow-lg shadow-${useCases[activeTab].color}-500/20 transition-all duration-300 text-white font-medium`}
                  >
                    <span>Получить демо</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
