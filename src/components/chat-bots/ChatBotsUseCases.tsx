"use client";

import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";
import { useState, useEffect } from "react";
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
  ExternalLink,
} from "lucide-react";

// Набор фирменных цветов в формате Tailwind классов
const BRAND_COLORS = {
  primary: {
    base: "blue-600",
    light: "blue-500",
    dark: "blue-700",
    brightest: "blue-400",
    subtle: "blue-50",
    grad: {
      from: "from-blue-600",
      via: "via-blue-500",
      to: "to-blue-700",
    },
    text: {
      light: "text-blue-600",
      dark: "text-blue-400",
      hover: "hover:text-blue-500",
    },
    bg: {
      default: "bg-blue-600",
      hover: "hover:bg-blue-700",
      light: "bg-blue-500",
      gradient: "bg-gradient-to-r from-blue-600 to-blue-700",
      subtle: "bg-blue-50",
      dark: "bg-blue-700",
    },
    border: {
      light: "border-blue-200",
      default: "border-blue-600",
      dark: "border-blue-700",
      hover: "hover:border-blue-500",
    },
    ring: {
      default: "ring-blue-600",
      offset: "ring-offset-blue-100",
    },
    shadow: {
      sm: "shadow-blue-500/10",
      md: "shadow-blue-600/20",
      lg: "shadow-blue-700/30",
    },
  },
  accent: {
    base: "indigo-600",
    grad: {
      from: "from-indigo-600",
      to: "to-violet-700",
    },
    bg: {
      default: "bg-indigo-600",
      hover: "hover:bg-indigo-700",
      gradient: "bg-gradient-to-r from-indigo-600 to-violet-700",
    },
    text: {
      default: "text-indigo-600",
      dark: "text-indigo-400",
    },
  },
  success: {
    base: "emerald-500",
    grad: {
      from: "from-emerald-500",
      to: "to-teal-600",
    },
  },
  glass: {
    bg: {
      light: "bg-white/70 backdrop-blur-lg border border-white/20",
      dark: "bg-gray-900/60 backdrop-blur-lg border border-gray-800/20",
    },
  },
};

export default function ChatBotsUseCases() {
  const { isDark } = useTheme();
  const [activeTab, setActiveTab] = useState(0);
  const [isInView, setIsInView] = useState(false);

  // Эффект для плавной анимации входа при скроллинге
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("chatbots-cases");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  // Расширенные анимации с учетом трендов 2025
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] }, // Cubic bezier для плавности
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 20,
        delay: 0.1,
      },
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
    tap: {
      scale: 0.98,
      transition: {
        duration: 0.15,
      },
    },
  };

  const pulseAnimation = {
    initial: { scale: 1, opacity: 0.9 },
    animate: {
      scale: [1, 1.03, 1],
      opacity: [0.9, 1, 0.9],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "loop" as const,
        ease: "easeInOut",
      },
    },
  };

  // Плавное движение фоновых элементов
  const floatingAnimation = {
    initial: { y: 0, x: 0 },
    animate: (i: number) => ({
      y: [0, i % 2 === 0 ? 15 : -15, 0],
      x: [0, i % 2 === 0 ? -10 : 10, 0],
      transition: {
        duration: 8 + i * 2,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut",
      },
    }),
  };

  // Анимация появления для CTA кнопок
  const staggerButtonAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.15,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
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
          icon: <Clock className="w-5 h-5" />,
        },
        {
          value: "3 сек",
          label: "Время ответа",
          icon: <Zap className="w-5 h-5" />,
        },
        {
          value: "70%",
          label: "Автоматизация",
          icon: <BarChart2 className="w-5 h-5" />,
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
      iconGradient: `${BRAND_COLORS.primary.grad.from} ${BRAND_COLORS.primary.grad.via} ${BRAND_COLORS.primary.grad.to}`,
      accentGradient: `${BRAND_COLORS.primary.grad.from} ${BRAND_COLORS.primary.grad.to}`,
    },
    {
      title: "Генерация и квалификация лидов",
      description:
        "Конверсионный бот проактивно взаимодействует с посетителями, собирает данные и квалифицирует потенциальных клиентов для вашего отдела продаж.",
      stats: [
        {
          value: "35%",
          label: "Рост конверсии",
          icon: <TrendingUp className="w-5 h-5" />,
        },
        {
          value: "300+",
          label: "Лидов ежемесячно",
          icon: <Users className="w-5 h-5" />,
        },
        {
          value: "45%",
          label: "Экономия времени",
          icon: <Clock className="w-5 h-5" />,
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
      color: "blue",
      iconGradient: `${BRAND_COLORS.primary.grad.from} ${BRAND_COLORS.primary.grad.via} ${BRAND_COLORS.primary.grad.to}`,
      accentGradient: `${BRAND_COLORS.primary.grad.from} ${BRAND_COLORS.primary.grad.to}`,
    },
    {
      title: "Внутренние коммуникации",
      description:
        "Корпоративный ассистент-бот оптимизирует внутренние процессы, предоставляет мгновенный доступ к документации и автоматизирует рабочие процессы.",
      stats: [
        {
          value: "60%",
          label: "Снижение нагрузки",
          icon: <Shield className="w-5 h-5" />,
        },
        {
          value: "85%",
          label: "Удовлетворенность",
          icon: <Users className="w-5 h-5" />,
        },
        {
          value: "5ч",
          label: "Экономия в неделю",
          icon: <Clock className="w-5 h-5" />,
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
      color: "blue",
      iconGradient: `${BRAND_COLORS.primary.grad.from} ${BRAND_COLORS.primary.grad.via} ${BRAND_COLORS.primary.grad.to}`,
      accentGradient: `${BRAND_COLORS.primary.grad.from} ${BRAND_COLORS.primary.grad.to}`,
    },
  ];

  return (
    <section
      id="chatbots-cases"
      className="py-24 md:py-32 relative overflow-hidden font-sans"
    >
      {/* CSS для дополнительных анимаций */}
      <style jsx global>{`
        @keyframes shine {
          0% {
            left: -100%;
            opacity: 0;
          }
          50% {
            opacity: 0.3;
          }
          100% {
            left: 100%;
            opacity: 0;
          }
        }

        .animate-shine {
          overflow: hidden;
          position: relative;
        }

        .animate-shine::after {
          content: "";
          position: absolute;
          top: -100%;
          left: -100%;
          width: 50%;
          height: 300%;
          background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.3) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          transform: rotate(25deg);
          animation: shine 6s infinite;
        }

        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-10px) translateX(5px);
          }
        }

        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }

        @keyframes glow {
          0%,
          100% {
            filter: drop-shadow(0 0 5px rgba(59, 130, 246, 0.5));
          }
          50% {
            filter: drop-shadow(0 0 20px rgba(59, 130, 246, 0.8));
          }
        }

        .animate-glow {
          animation: glow 4s ease-in-out infinite;
        }
      `}</style>

      {/* Фон секции */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${
          isDark
            ? "from-gray-950 via-gray-950 to-gray-950"
            : "from-gray-50 via-white to-gray-50"
        } -z-50`}
      ></div>

      {/* Современные 3D фоновые элементы с нейтральными оттенками */}
      <div className="absolute inset-0 overflow-hidden -z-40">
        {/* Анимированная сетка */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <svg width="100%" height="100%" className="opacity-30">
            <defs>
              <pattern
                id="grid-pattern-dots"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
                className="text-gray-300 dark:text-gray-700"
              >
                <circle cx="2" cy="2" r="1" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern-dots)" />
          </svg>
        </div>

        {/* 3D градиентные формы - более нейтральные */}
        <motion.div
          initial="initial"
          animate="animate"
          custom={1}
          variants={floatingAnimation}
          className="absolute top-20 left-10 w-80 h-80 rounded-full bg-gradient-to-br from-gray-100/40 to-gray-200/40 dark:from-gray-800/20 dark:to-gray-700/20 blur-3xl"
        ></motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          custom={2}
          variants={floatingAnimation}
          className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-gradient-to-tl from-gray-200/40 to-blue-100/30 dark:from-gray-800/20 dark:to-blue-900/10 blur-3xl"
        ></motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          custom={3}
          variants={floatingAnimation}
          className="absolute bottom-20 -left-20 w-72 h-72 rounded-full bg-gradient-to-tr from-blue-50/30 to-gray-100/40 dark:from-blue-900/10 dark:to-gray-800/20 blur-3xl"
        ></motion.div>
      </div>

      {/* Нейтральные световые эффекты */}
      <div className="absolute inset-0 -z-30">
        <div className="absolute -top-20 left-1/3 w-1 h-1 bg-blue-400 rounded-full shadow-[0_0_100px_40px_rgba(59,130,246,0.15)] opacity-10 dark:opacity-15"></div>
        <div className="absolute top-1/2 right-10 w-1 h-1 bg-blue-400 rounded-full shadow-[0_0_150px_60px_rgba(59,130,246,0.15)] opacity-10 dark:opacity-15"></div>
        <div className="absolute bottom-40 left-1/4 w-1 h-1 bg-blue-400 rounded-full shadow-[0_0_120px_50px_rgba(59,130,246,0.15)] opacity-10 dark:opacity-15"></div>
      </div>

      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16 md:mb-20"
        >
          {/* Современный бейдж с нейтральным фоном */}
          <motion.div
            variants={itemVariants}
            className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-sm font-medium mb-6 
              ${
                isDark
                  ? `bg-gray-800/80 border border-gray-700/50 backdrop-blur-md`
                  : `bg-white/90 border border-gray-200 backdrop-blur-sm`
              } 
              ${BRAND_COLORS.primary.text.light} dark:${
              BRAND_COLORS.primary.text.dark
            } shadow-lg`}
          >
            <div
              className={`flex items-center justify-center w-6 h-6 rounded-full ${BRAND_COLORS.primary.bg.gradient} text-white/90 shadow-md`}
            >
              <Search className="w-3.5 h-3.5" />
            </div>
            <span className="tracking-wide">Примеры внедрения</span>
          </motion.div>

          {/* Заголовок с современными эффектами */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight leading-tight"
          >
            Как чат-боты{" "}
            <span className="relative inline-block">
              <span
                className={`relative z-10 bg-clip-text text-transparent bg-gradient-to-r ${BRAND_COLORS.primary.grad.from} ${BRAND_COLORS.primary.grad.via} ${BRAND_COLORS.primary.grad.to}`}
              >
                трансформируют бизнес
              </span>
              <span
                className={`absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-r ${BRAND_COLORS.primary.grad.from}/10 ${BRAND_COLORS.primary.grad.via}/10 ${BRAND_COLORS.primary.grad.to}/10 blur-lg -z-10`}
              ></span>
            </span>
          </motion.h2>

          {/* Подзаголовок */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed font-normal"
          >
            Изучите реальные примеры внедрения нейросетевых чат-ботов и
            результаты, которые достигают наши клиенты в разных отраслях.
          </motion.p>
        </motion.div>

        {/* Современные карточки кейсов - с нейтральным фоном */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16 md:mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-7">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={() => setActiveTab(index)}
                className={`relative group rounded-xl transition-all duration-300 overflow-hidden cursor-pointer
                  ${
                    activeTab === index
                      ? `${
                          isDark
                            ? "bg-gray-800/90 border border-gray-700 backdrop-blur-md"
                            : "bg-white border border-gray-200/80 backdrop-blur-md"
                        } ring-1 ring-blue-500/30 shadow-xl`
                      : isDark
                      ? `bg-gray-900/40 hover:bg-gray-800/60 backdrop-blur-sm border border-gray-700/60 hover:border-gray-600/70 shadow-md hover:shadow-lg`
                      : `bg-white/80 hover:bg-white/90 backdrop-blur-md border border-gray-200/40 hover:border-gray-300/60 shadow-md hover:shadow-lg`
                  }`}
              >
                {/* Тонкий градиентный бордер при активности */}
                {activeTab === index && (
                  <div className="absolute inset-0 rounded-xl p-px -z-10 bg-gradient-to-b from-blue-500/20 via-blue-500/5 to-transparent"></div>
                )}

                {/* Эффект свечения при наведении */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-blue-50/5 to-blue-100/5 dark:from-blue-900/5 dark:to-blue-800/5 rounded-xl transition-opacity duration-300 -z-10"></div>

                {/* Индикатор активного таба */}
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${
                    useCase.accentGradient
                  } ${
                    activeTab === index
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-50"
                  } transition-opacity duration-300`}
                ></div>

                <div className="relative p-6 md:p-7 z-10">
                  <div className="flex items-center gap-4 mb-5">
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
                        isDark ? "bg-blue-800/50" : "bg-blue-100"
                      } ${BRAND_COLORS.primary.text.light} dark:${
                        BRAND_COLORS.primary.text.dark
                      } group-hover/stat:scale-110 transition-transform`}
                    >
                      {useCase.icon}
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white tracking-tight">
                        {useCase.title}
                      </h3>
                      {/* Убираем кнопку "Подробнее" */}
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed line-clamp-2 mb-6 font-normal">
                    {useCase.description}
                  </p>

                  {/* Стильные метрики с квадратными иконками */}
                  <div className="grid grid-cols-3 gap-3">
                    {useCase.stats.map((stat, i) => (
                      <div
                        key={i}
                        className={`p-3 rounded-xl 
                          ${
                            isDark
                              ? "bg-blue-900/30 backdrop-blur-sm border border-blue-800/30"
                              : "bg-blue-50/70 backdrop-blur-sm border border-blue-100/60"
                          } 
                          flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-all group/stat`}
                      >
                        <div
                          className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
                            isDark ? "bg-blue-800/50" : "bg-blue-100"
                          } ${BRAND_COLORS.primary.text.light} dark:${
                            BRAND_COLORS.primary.text.dark
                          } group-hover/stat:scale-110 transition-transform mb-4`}
                        >
                          {stat.icon}
                        </div>
                        <div
                          className={`text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${BRAND_COLORS.primary.bg.gradient}`}
                        >
                          {stat.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Расширенная информация об активном кейсе */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.98 }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
            className={`relative overflow-hidden rounded-xl ${
              isDark
                ? "bg-gray-900/40 backdrop-blur-lg border border-blue-900/40"
                : "bg-white/90 backdrop-blur-lg border border-blue-200/40"
            } shadow-2xl`}
          >
            {/* Тонкий градиентный фон */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${
                isDark
                  ? `from-blue-900/10 to-blue-800/5`
                  : `from-blue-50/30 to-blue-100/10`
              } -z-10`}
            ></div>

            {/* Футуристический LED индикатор */}
            <div
              className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${BRAND_COLORS.primary.bg.gradient}`}
            >
              <div
                className="absolute inset-0 animate-pulse opacity-60"
                style={{ animationDuration: "2s" }}
              ></div>
            </div>

            {/* Основной контент */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 p-7 md:p-10 lg:p-12">
              {/* Левая колонка - Текст и статистика */}
              <div className="flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-center gap-5 mb-8">
                    <motion.div
                      initial="initial"
                      animate="animate"
                      variants={pulseAnimation}
                      className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-r ${BRAND_COLORS.primary.bg.gradient} text-white/90 shadow-md relative overflow-hidden`}
                    >
                      <div className="relative z-10 scale-110">
                        {useCases[activeTab].icon}
                      </div>
                      <div className="absolute inset-0 bg-white/25 origin-bottom-right -rotate-12"></div>
                      <div className="absolute -inset-1.5 bg-gradient-to-tr from-white/0 via-white/40 to-white/0 opacity-0 animate-shine"></div>
                    </motion.div>
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight whitespace-nowrap">
                        {useCases[activeTab].title}
                      </h3>
                      <div
                        className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-xl text-xs font-medium bg-blue-100 dark:bg-blue-900/30 ${BRAND_COLORS.primary.text.light} dark:${BRAND_COLORS.primary.text.dark}`}
                      >
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Оптимальное решение</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg leading-relaxed font-normal">
                    {useCases[activeTab].description}
                  </p>

                  {/* Модернизированная статистика с квадратными иконками */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
                    {useCases[activeTab].stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                        className={`flex flex-col p-4 md:p-5 rounded-xl ${
                          isDark
                            ? "bg-gradient-to-b from-blue-900/30 to-blue-800/20 backdrop-blur-sm border border-blue-800/30"
                            : "bg-gradient-to-b from-blue-50/90 to-blue-100/50 backdrop-blur-sm border border-blue-100/60"
                        } shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden`}
                      >
                        {/* Блик */}
                        <div className="absolute -inset-1 bg-gradient-to-tr from-transparent via-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                        <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-blue-500 to-blue-600 opacity-50"></div>

                        <div className="flex items-center gap-3 mb-4">
                          <div
                            className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
                              isDark ? "bg-blue-800/50" : "bg-blue-100"
                            }`}
                          >
                            <div
                              className={`${BRAND_COLORS.primary.text.light} dark:${BRAND_COLORS.primary.text.dark} scale-110`}
                            >
                              {stat.icon}
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-blue-200 font-medium">
                            {stat.label}
                          </p>
                        </div>
                        <p
                          className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${BRAND_COLORS.primary.bg.gradient}`}
                        >
                          {stat.value}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Модернизированные фичи с квадратными элементами */}
                <div
                  className={`rounded-xl ${
                    isDark
                      ? "bg-gradient-to-b from-blue-900/30 to-blue-800/20 backdrop-blur-sm border border-blue-800/30"
                      : "bg-gradient-to-b from-blue-50/90 to-blue-100/50 backdrop-blur-sm border border-blue-100/60"
                  } p-7 shadow-xl`}
                >
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-5 flex items-center gap-3">
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-r ${BRAND_COLORS.primary.bg.gradient} text-white/90 shadow-md relative overflow-hidden`}
                    >
                      <BrainCircuit className="w-5 h-5 text-white relative z-10 scale-110" />
                      <div className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                      <div className="absolute inset-0 animate-shine opacity-30"></div>
                    </div>
                    Ключевые особенности решения
                  </h4>
                  <ul className="space-y-4">
                    {useCases[activeTab].features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        className="flex items-start gap-3 group"
                      >
                        <div
                          className={`p-1.5 rounded-xl mt-0.5 bg-blue-50 dark:bg-blue-900/20 group-hover:bg-blue-600 dark:group-hover:bg-blue-600 transition-colors`}
                        >
                          <CheckCircle
                            className={`w-5 h-5 ${BRAND_COLORS.primary.text.light} dark:${BRAND_COLORS.primary.text.dark} group-hover:text-white transition-colors`}
                          />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300 text-base leading-relaxed font-normal">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Правая колонка - Модернизированная иллюстрация */}
              <div className="flex items-center justify-center">
                <div className="relative w-full h-[400px] lg:h-[550px] rounded-xl overflow-hidden shadow-2xl group/image">
                  {/* Эффекты наложения */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-700/20 dark:from-blue-600/30 dark:to-blue-700/30 mix-blend-overlay z-20"></div>

                  {/* Современная рамка с эффектом свечения */}
                  <div className="absolute inset-0 border border-white/30 rounded-xl z-30 pointer-events-none group-hover/image:border-blue-500/30 transition-colors duration-500"></div>

                  <Image
                    src={useCases[activeTab].image}
                    alt={useCases[activeTab].title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover/image:scale-105"
                  />

                  <div className="absolute bottom-8 left-8 right-8 z-40 text-center md:text-left">
                    <p className="text-white text-xl font-semibold mb-4 drop-shadow-lg">
                      Узнайте, как это работает
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 items-center justify-center md:justify-start">
                      <motion.a
                        variants={staggerButtonAnimation}
                        initial="initial"
                        animate="animate"
                        custom={0}
                        href="#contact"
                        className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:brightness-110 shadow-lg hover:shadow-xl shadow-blue-700/20 transition-all duration-300 text-white font-semibold text-base w-full sm:w-auto"
                      >
                        <span>Получить демо</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                      </motion.a>
                      <motion.a
                        variants={staggerButtonAnimation}
                        initial="initial"
                        animate="animate"
                        custom={1}
                        href="#features"
                        className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 backdrop-blur-md shadow-sm hover:shadow-md transition-all duration-300 text-white font-semibold text-base border border-blue-500/30 w-full sm:w-auto"
                      >
                        <span>Возможности</span>
                        <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}
