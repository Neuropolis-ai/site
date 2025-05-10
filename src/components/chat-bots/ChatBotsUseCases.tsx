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
import { useState, useEffect, useRef } from "react";
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
  const sectionRef = useRef<HTMLDivElement>(null);

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

    const section = sectionRef.current;
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

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
    <section
      ref={sectionRef}
      id="chatbots-cases"
      className="py-20 md:py-24 relative overflow-hidden"
    >
      {/* Градиентный фон */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50/80 dark:from-gray-950 dark:to-blue-950/10 -z-10"></div>

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
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-gradient-to-br from-blue-200/30 to-blue-400/30 dark:from-blue-500/10 dark:to-blue-700/10 rounded-full blur-3xl -z-5"></div>
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-gradient-to-tr from-blue-200/30 to-blue-400/30 dark:from-blue-500/10 dark:to-blue-700/10 rounded-full blur-3xl -z-5"></div>

      {/* Анимированные элементы */}
      <motion.div
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        className="absolute top-[35%] left-[10%] w-14 h-14 bg-blue-400/20 dark:bg-blue-600/30 rounded-full backdrop-blur-md z-0"
      ></motion.div>
      <motion.div
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        className="absolute bottom-[25%] right-[7%] w-20 h-20 bg-blue-400/20 dark:bg-blue-600/30 rounded-full backdrop-blur-md z-0"
        style={{ animationDelay: "1.5s" }}
      ></motion.div>

      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-14"
        >
          <motion.div variants={itemVariants}>
            <Badge>Примеры внедрения</Badge>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Как чат-боты{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0167F3] to-[#399AFC]">
              трансформируют
            </span>{" "}
            бизнес
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Изучите реальные примеры внедрения нейросетевых чат-ботов и
            результаты, которые достигают наши клиенты в разных отраслях.
          </motion.p>
        </motion.div>

        {/* Табы для переключения между кейсами */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 px-4 sm:px-0">
            {useCases.map((useCase, index) => (
              <motion.button
                key={index}
                variants={itemVariants}
                onClick={() => setActiveTab(index)}
                whileHover={{
                  y: -2,
                  transition: { duration: 0.2 },
                }}
                className={`px-4 py-3 sm:py-2.5 rounded-lg text-sm font-medium transition-all w-full sm:w-auto ${getTabClassName(
                  index
                )}`}
              >
                <div className="flex items-center justify-start gap-2">
                  <div className="flex items-center justify-center">
                    {useCase.icon}
                  </div>
                  <span className="translate-y-[1px]">{useCase.title}</span>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Контент активного кейса */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`rounded-xl overflow-hidden shadow-lg ${
            isDark
              ? "bg-gray-800/50 border border-gray-700 shadow-blue-900/10"
              : "bg-white/90 backdrop-blur-sm border border-gray-200 shadow-blue-200/30"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
            {/* Левая колонка - Текст */}
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center 
                  ${
                    isDark
                      ? `bg-gradient-to-br ${useCases[activeTab].gradientFrom}/20 ${useCases[activeTab].gradientTo}/20 ${useCases[activeTab].colorLight}`
                      : `bg-gradient-to-br ${useCases[activeTab].gradientFrom}/10 ${useCases[activeTab].gradientTo}/10 ${useCases[activeTab].colorText}`
                  }`}
                >
                  {useCases[activeTab].icon}
                </div>
                <h3
                  className={`text-xl md:text-2xl font-semibold ${useCases[activeTab].colorText}`}
                >
                  {useCases[activeTab].title}
                </h3>
              </div>

              <div className="mb-8">
                <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                  {useCases[activeTab].description}
                </p>
              </div>

              {/* Статистика */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {useCases[activeTab].stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                    className={`p-4 rounded-lg backdrop-blur-sm ${getStatClassName(
                      index
                    )} transition-all duration-300`}
                  >
                    <div
                      className={`text-2xl md:text-3xl font-bold ${useCases[activeTab].colorText} mb-1`}
                    >
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Детали реализации */}
              <div
                className={`p-5 rounded-lg backdrop-blur-sm ${
                  isDark
                    ? `${useCases[activeTab].bgDark} border ${useCases[activeTab].borderDark}`
                    : `${useCases[activeTab].bgLight} border ${useCases[activeTab].borderLight}`
                }`}
              >
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                  Ключевые интеграции
                </h4>
                <ul className="space-y-3">
                  {useCases[activeTab].features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span
                        className={`${useCases[activeTab].colorText} bg-blue-100 dark:bg-blue-900/40 p-1 rounded-full flex-shrink-0`}
                      >
                        <CheckCircle className="w-4 h-4" />
                      </span>
                      <span className="text-gray-600 dark:text-gray-300 translate-y-[1px]">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Правая колонка - Подробное описание процесса автоматизации */}
            <div
              className={`${
                isDark ? "bg-gray-800/70" : "bg-blue-50/50"
              } p-6 md:p-8 flex flex-col justify-center`}
            >
              <div className="mb-5">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <span className="inline-block p-1.5 rounded-lg bg-blue-500/20 dark:bg-blue-400/20">
                    <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </span>
                  <span className="translate-y-[1px]">Как работает чат-бот</span>
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-base">
                  Внедрение нейросетевых чат-ботов позволяет автоматизировать коммуникацию с клиентами, 
                  повышая качество обслуживания и оптимизируя бизнес-процессы.
                </p>
              </div>
              
              {/* Подробное описание процесса */}
              <div className="space-y-5">
                {useCases[activeTab].detailedDescription.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center">
                      {index === 0 && <Users className="w-4 h-4 text-blue-600 dark:text-blue-400" />}
                      {index === 1 && <BarChart2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />}
                      {index === 2 && <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400" />}
                      {index === 3 && <DollarSign className="w-4 h-4 text-blue-600 dark:text-blue-400" />}
                    </div>
                    <div>
                      <p className="text-gray-700 dark:text-gray-300 translate-y-[1px]">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Преимущества */}
              <div className="mt-8 p-4 rounded-lg bg-white/70 dark:bg-gray-800/70 border border-blue-100 dark:border-blue-800/30">
                <h5 className="font-medium text-gray-900 dark:text-white mb-3">
                  Ключевые преимущества
                </h5>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-blue-600 dark:text-blue-400 w-4 h-4 flex-shrink-0" />
                    <span className="text-sm text-gray-600 dark:text-gray-300 translate-y-[1px]">Экономия времени</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-blue-600 dark:text-blue-400 w-4 h-4 flex-shrink-0" />
                    <span className="text-sm text-gray-600 dark:text-gray-300 translate-y-[1px]">Снижение ошибок</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-blue-600 dark:text-blue-400 w-4 h-4 flex-shrink-0" />
                    <span className="text-sm text-gray-600 dark:text-gray-300 translate-y-[1px]">Масштабируемость</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-blue-600 dark:text-blue-400 w-4 h-4 flex-shrink-0" />
                    <span className="text-sm text-gray-600 dark:text-gray-300 translate-y-[1px]">Круглосуточная работа</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Призыв к действию */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <motion.div variants={itemVariants} className="inline-flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-5 sm:px-6 py-3 rounded-lg bg-gradient-to-r from-[#0167F3] to-[#399AFC] text-white font-medium shadow-lg shadow-blue-500/20 dark:shadow-blue-600/20 flex items-center justify-center gap-2 w-full sm:w-auto"
              href="#contact"
            >
              <span>Обсудить ваш проект</span>
              <ArrowRight className="w-4 h-4" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-5 sm:px-6 py-3 rounded-lg border border-blue-300 dark:border-blue-700 text-blue-600 dark:text-blue-400 font-medium w-full sm:w-auto"
              href="#chatbot-solution"
            >
              Узнать больше
            </motion.a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}