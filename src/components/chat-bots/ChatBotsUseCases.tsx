"use client";

import {
  motion,
  AnimatePresence,
  useAnimation,
  useInView,
} from "framer-motion";
import Container from "@/components/ui/Container";
import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Heading } from "@/components/ui/heading";
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
  DollarSign,
} from "lucide-react";
import Subheading from "@/components/ui/subheading";
import Badge from "@/components/ui/Badge";

// Определяем интерфейс для структуры данных useCases
interface UseCaseItem {
  title: string;
  description: string;
  stats: { value: string; label: string }[];
  detailedDescription: string[];
  features: string[];
  icon: React.ReactNode;
  colorBg: string;
  colorText: string;
  colorLight: string;
  gradientFrom: string;
  gradientTo: string;
  bgDark: string;
  borderDark: string;
  bgLight: string;
  borderLight: string;
}

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

  // Данные о кейсах использования чат-ботов
  const useCases: UseCaseItem[] = [
    {
      title: "Автоматизация клиентской поддержки",
      description:
        "Интеллектуальный чат-бот мгновенно отвечает на запросы клиентов 24/7, повышая удовлетворенность и снижая нагрузку на операторов.",
      stats: [
        { value: "24/7", label: "Непрерывная работа" },
        { value: "3 сек", label: "Время ответа" },
        { value: "70%", label: "Автоматизация" },
      ],
      detailedDescription: [
        "Мгновенные ответы на типовые вопросы клиентов в любое время суток",
        "Интеллектуальная маршрутизация сложных запросов к профильным специалистам",
        "Автоматический сбор и анализ обратной связи от клиентов",
        "Проактивное информирование о статусе заказов и обращений"
      ],
      features: [
        "Глубокая интеграция с CRM для персонализированного обслуживания",
        "Автоматическая эскалация сложных запросов на операторов",
        "Аналитическая панель с метриками эффективности в реальном времени",
        "Мультиязычность и адаптация к региональным особенностям",
      ],
      icon: <MessageSquareHeart className="w-5 h-5" />,
      colorBg: "bg-[#0167F3]",
      colorText: "text-[#0167F3]",
      colorLight: "text-[#399AFC]",
      gradientFrom: "from-[#0167F3]",
      gradientTo: "to-[#399AFC]",
      bgDark: "bg-blue-900/30",
      borderDark: "border-blue-800/30",
      bgLight: "bg-blue-50/80",
      borderLight: "border-blue-200",
    },
    {
      title: "Генерация и квалификация лидов",
      description:
        "Конверсионный бот проактивно взаимодействует с посетителями, собирает данные и квалифицирует потенциальных клиентов для вашего отдела продаж.",
      stats: [
        { value: "35%", label: "Рост конверсии" },
        { value: "300+", label: "Лидов ежемесячно" },
        { value: "45%", label: "Экономия времени" },
      ],
      detailedDescription: [
        "Проактивное взаимодействие с посетителями сайта в момент проявления интереса",
        "Интеллектуальный сбор и анализ данных о потенциальных клиентах",
        "Автоматическая квалификация лидов по заданным критериям",
        "Бесшовная передача данных в CRM-систему отдела продаж"
      ],
      features: [
        "Прогностический анализ для оценки потенциала клиента",
        "Бесшовная интеграция с воронкой продаж в CRM-системе",
        "Интерактивные опросы для сбора квалификационной информации",
        "Автоматическая сегментация лидов на основе интересов",
      ],
      icon: <TrendingUp className="w-5 h-5" />,
      colorBg: "bg-[#0167F3]",
      colorText: "text-[#0167F3]",
      colorLight: "text-[#399AFC]",
      gradientFrom: "from-[#0167F3]",
      gradientTo: "to-[#399AFC]",
      bgDark: "bg-blue-900/30",
      borderDark: "border-blue-800/30",
      bgLight: "bg-blue-50/80",
      borderLight: "border-blue-200",
    },
    {
      title: "Внутренние коммуникации",
      description:
        "Корпоративный ассистент-бот оптимизирует внутренние процессы, предоставляет мгновенный доступ к документации и автоматизирует рабочие процессы.",
      stats: [
        { value: "60%", label: "Снижение нагрузки" },
        { value: "85%", label: "Удовлетворенность" },
        { value: "5ч", label: "Экономия в неделю" },
      ],
      detailedDescription: [
        "Мгновенный доступ к корпоративной информации через естественные запросы",
        "Автоматизация рутинных задач и внутренних бизнес-процессов",
        "Упрощение коммуникации между отделами и сотрудниками",
        "Ускорение адаптации новых сотрудников и обучения персонала"
      ],
      features: [
        "Единая база знаний с самообучающимся рекомендательным алгоритмом",
        "Цифровые ассистенты для каждого отдела с уникальной экспертизой",
        "Интеграция с корпоративными системами документооборота",
        "Проактивные уведомления о важных событиях и дедлайнах",
      ],
      icon: <Building2 className="w-5 h-5" />,
      colorBg: "bg-[#0167F3]",
      colorText: "text-[#0167F3]",
      colorLight: "text-[#399AFC]",
      gradientFrom: "from-[#0167F3]",
      gradientTo: "to-[#399AFC]",
      bgDark: "bg-blue-900/30",
      borderDark: "border-blue-800/30",
      bgLight: "bg-blue-50/80",
      borderLight: "border-blue-200",
    },
    {
      title: "Омниканальное обслуживание",
      description:
        "Единый чат-бот работает на всех платформах: сайт, мессенджеры, социальные сети, мобильные приложения, обеспечивая целостный клиентский опыт.",
      stats: [
        { value: "8+", label: "Каналов связи" },
        { value: "90%", label: "Единый опыт" },
        { value: "50%", label: "Рост охвата" },
      ],
      detailedDescription: [
        "Единая точка контакта для клиентов на всех цифровых платформах",
        "Бесшовный переход между каналами коммуникации без потери контекста",
        "Персонализированное взаимодействие на основе истории клиента",
        "Автоматическое масштабирование под нагрузку в пиковые периоды"
      ],
      features: [
        "Интеграция со всеми популярными мессенджерами и социальными сетями",
        "Сохранение контекста диалога при смене канала коммуникации",
        "Адаптивный интерфейс для разных платформ и устройств",
        "Единая аналитика эффективности по всем каналам",
      ],
      icon: <Globe className="w-5 h-5" />,
      colorBg: "bg-[#0167F3]",
      colorText: "text-[#0167F3]",
      colorLight: "text-[#399AFC]",
      gradientFrom: "from-[#0167F3]",
      gradientTo: "to-[#399AFC]",
      bgDark: "bg-blue-900/30",
      borderDark: "border-blue-800/30",
      bgLight: "bg-blue-50/80",
      borderLight: "border-blue-200",
    },
  ];

  const getTabClassName = (index: number): string => {
    if (activeTab === index) {
      return `${useCases[index].colorBg} text-white shadow-lg ${
        isDark ? "shadow-blue-900/30" : "shadow-blue-500/30"
      }`;
    }
    return isDark
      ? "bg-gray-800/80 backdrop-blur-sm text-gray-300 hover:bg-gray-800 border border-gray-700 hover:border-blue-800/30"
      : "bg-white/90 backdrop-blur-sm text-gray-700 hover:bg-blue-50 border border-gray-200 hover:border-blue-200";
  };

  const getStatClassName = (index: number): string => {
    return isDark
      ? `${useCases[activeTab].bgDark} border ${useCases[activeTab].borderDark} backdrop-blur-sm`
      : `${useCases[activeTab].bgLight} border ${useCases[activeTab].borderLight}`;
  };

  return (
    <div
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
        <div className="absolute -top-20 left-1/3 w-1 h-1 bg-blue-400 rounded-full shadow-lg opacity-10 dark:opacity-15"></div>
        <div className="absolute top-1/2 right-10 w-1 h-1 bg-blue-400 rounded-full shadow-lg opacity-10 dark:opacity-15"></div>
        <div className="absolute bottom-40 left-1/4 w-1 h-1 bg-blue-400 rounded-full shadow-lg opacity-10 dark:opacity-15"></div>
      </div>

      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16 md:mb-20"
        >
          {/* Современный бейдж с нейтральным фоном */}
          <motion.div variants={itemVariants}>
            <Badge>Примеры внедрения</Badge>
          </motion.div>

          {/* Заголовок */}
          <motion.div
            variants={itemVariants}
            className="mb-6 tracking-tight leading-tight"
          >
            <Heading
              level={2}
              align="center"
              className="text-gray-900 dark:text-white tracking-tight leading-tight"
            >
              Как чат-боты{" "}
              <span className="relative inline-block">
                <span
                  className={`relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-light`}
                >
                  трансформируют бизнес
                </span>
                <span
                  className={`absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-r from-primary/10 to-primary-light/10 blur-lg -z-10`}
                ></span>
              </span>
            </Heading>
          </motion.div>

          {/* Подзаголовок */}
          <motion.div variants={itemVariants}>
            <Subheading
              align="center"
              className="md:text-xl max-w-3xl mx-auto leading-relaxed font-normal"
            >
              Изучите реальные примеры внедрения нейросетевых чат-ботов и
              результаты, которые достигают наши клиенты в разных отраслях.
            </Subheading>
          </motion.div>
        </motion.div>

        {/* Современные карточки кейсов - с нейтральным фоном */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-12 md:mb-16 lg:mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-7">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={() => setActiveTab(index)}
                className={`relative group rounded-2xl transition-all duration-500 overflow-hidden cursor-pointer ${
                  activeTab === index
                    ? `${
                        isDark
                          ? "bg-gray-800/70 border-2 border-primary/50 shadow-lg shadow-primary/10"
                          : "bg-white border-2 border-primary/30 shadow-lg shadow-primary/5"
                      }`
                    : isDark
                    ? `bg-gray-900/40 hover:bg-gray-800/60 border border-gray-700/50 hover:border-primary/30`
                    : `bg-white hover:shadow-xl border border-gray-200/70 hover:border-primary/20`
                }`}
              >
                {/* Градиентная полоса при активности */}
                <div
                  className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary to-primary-light ${
                    activeTab === index
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-70"
                  } transition-opacity duration-300`}
                ></div>

                {/* Эффект свечения при наведении */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-light/5 dark:from-primary/10 dark:to-primary-light/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

                {/* Декоративные элементы */}
                <div className="absolute -right-16 -bottom-16 w-48 h-48 bg-gradient-to-br from-primary/5 to-primary-light/5 dark:from-primary/10 dark:to-primary-light/10 rounded-full opacity-0 group-hover:opacity-80 blur-2xl transition-opacity duration-500"></div>

                <div className="relative p-5 md:p-6 lg:p-7 z-10">
                  <div className="flex items-center gap-4 mb-5">
                    <div
                      className={`relative w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-r from-primary to-primary-light text-white shadow-lg group-hover:shadow-xl transition-all duration-300 transform ${
                        activeTab === index ? "scale-110" : "group-hover:scale-105"
                      }`}
                    >
                      {useCase.icon}
                      <div className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div>
                      <Heading
                        level={3}
                        className={`text-lg md:text-xl lg:text-2xl tracking-tight font-bold ${
                          activeTab === index
                            ? "text-primary dark:text-primary-light"
                            : "text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-primary-light"
                        } transition-colors duration-300`}
                      >
                        {useCase.title}
                      </Heading>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed mb-6 font-normal line-clamp-3">
                    {useCase.description}
                  </p>

                  {/* Улучшенные метрики */}
                  <div className="grid grid-cols-3 gap-3">
                    {useCase.stats.map((stat, i) => (
                      <div
                        key={i}
                        className={`p-3 rounded-xl ${
                          isDark
                            ? activeTab === index 
                              ? "bg-gray-700/70 border border-primary/20" 
                              : "bg-gray-800/50 border border-gray-700/50 group-hover:border-primary/10"
                            : activeTab === index 
                              ? "bg-gray-50 border border-primary/20" 
                              : "bg-white border border-gray-200 group-hover:border-primary/10"
                        } 
                        hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center text-center`}
                      >
                        <div
                          className={`mb-2 p-2 rounded-lg ${
                            activeTab === index
                              ? "bg-gradient-to-br from-[#0167F3] to-[#399AFC] text-white shadow-md"
                              : "bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400"
                          } transition-colors duration-300`}
                        >
                          {index === 0 && <Clock className="w-5 h-5" />}
                          {index === 1 && <Zap className="w-5 h-5" />}
                          {index === 2 && <BarChart2 className="w-5 h-5" />}
                        </div>
                        <div
                          className={`text-xl font-bold ${
                            activeTab === index
                              ? "text-primary dark:text-primary-light"
                              : "bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-light"
                          } transition-colors duration-300`}
                        >
                          {stat.value}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-medium">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Индикатор выбора */}
                  <div className={`mt-5 pt-4 border-t border-gray-100 dark:border-gray-700/50 flex justify-end ${
                    activeTab === index ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  } transition-opacity duration-300`}>
                    <button className="inline-flex items-center text-sm font-medium text-primary dark:text-primary-light">
                      {activeTab === index ? "Выбрано" : "Выбрать"}
                      <ArrowRight className={`ml-1.5 w-4 h-4 transition-all duration-300 ${
                        activeTab === index ? "translate-x-1" : "group-hover:translate-x-1"
                      }`} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Расширенная информация об активном кейсе */}
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
          } shadow-lg`}
        >
          {/* Тонкий градиентный фон */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${
              isDark
                ? `from-blue-900/10 to-blue-800/5`
                : `from-blue-200/10 to-blue-100/5`
            }`}
          ></div>
        </motion.div>
      </Container>
    </div>
  );
}