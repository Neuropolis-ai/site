"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { useTheme } from "@/context/ThemeContext";
import {
  Target,
  Code2,
  Database,
  Users,
  Cpu,
  ShieldCheck,
  Sparkles,
  BadgeCheck,
  Lightbulb,
  Rocket,
} from "lucide-react";

export default function ChatBotsWhyUs() {
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

  const iconFloatAnimation = {
    initial: { y: 0 },
    animate: {
      y: [0, -5, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "loop" as const,
      },
    },
  };

  const pulseAnimation = {
    initial: { scale: 1, opacity: 0.8 },
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.8, 1, 0.8],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "loop" as const,
      },
    },
  };

  // Обновленные преимущества с фирменными цветами Neuropolis
  const advantages = [
    {
      icon: <Target className="w-6 h-6" strokeWidth={2.5} />,
      secondaryIcon: (
        <Sparkles className="w-10 h-10 opacity-10 absolute top-3 right-3" />
      ),
      title: "Индивидуальный подход",
      description:
        "Разрабатываем решения под конкретные задачи вашего бизнеса с учетом отраслевой специфики и требований",
      gradient: "from-[#8B5CF6] to-[#4F46E5]",
      darkGradient: "from-[#8B5CF6] to-[#4F46E5]",
      bgGradient: "from-purple-50/10 via-blue-50/5 to-purple-50/10",
      darkBgGradient: "from-purple-950/20 via-blue-950/15 to-purple-950/20",
    },
    {
      icon: <Code2 className="w-6 h-6" strokeWidth={2.5} />,
      secondaryIcon: (
        <Code2 className="w-10 h-10 opacity-10 absolute top-3 right-3" />
      ),
      title: "Опытная команда разработчиков",
      description:
        "Наши специалисты имеют 5+ лет опыта в создании интеллектуальных чат-ботов для различных отраслей",
      gradient: "from-[#4F46E5] to-[#0EA5E9]",
      darkGradient: "from-[#4F46E5] to-[#0EA5E9]",
      bgGradient: "from-blue-50/10 via-cyan-50/5 to-blue-50/10",
      darkBgGradient: "from-blue-950/20 via-cyan-950/15 to-blue-950/20",
    },
    {
      icon: <Database className="w-6 h-6" strokeWidth={2.5} />,
      secondaryIcon: (
        <Database className="w-10 h-10 opacity-10 absolute top-3 right-3" />
      ),
      title: "Работа с любыми объемами данных",
      description:
        "Создаем решения, способные обрабатывать большие массивы информации и эффективно использовать базы знаний",
      gradient: "from-[#0EA5E9] to-[#4F46E5]",
      darkGradient: "from-[#0EA5E9] to-[#4F46E5]",
      bgGradient: "from-cyan-50/10 via-blue-50/5 to-cyan-50/10",
      darkBgGradient: "from-cyan-950/20 via-blue-950/15 to-cyan-950/20",
    },
    {
      icon: <Users className="w-6 h-6" strokeWidth={2.5} />,
      secondaryIcon: (
        <Users className="w-10 h-10 opacity-10 absolute top-3 right-3" />
      ),
      title: "Обучение и поддержка персонала",
      description:
        "Проводим полное обучение сотрудников работе с чат-ботом и обеспечиваем техническую поддержку 24/7",
      gradient: "from-[#8B5CF6] to-[#0EA5E9]",
      darkGradient: "from-[#8B5CF6] to-[#0EA5E9]",
      bgGradient: "from-purple-50/10 via-blue-50/5 to-purple-50/10",
      darkBgGradient: "from-purple-950/20 via-blue-950/15 to-purple-950/20",
    },
    {
      icon: <Cpu className="w-6 h-6" strokeWidth={2.5} />,
      secondaryIcon: (
        <Cpu className="w-10 h-10 opacity-10 absolute top-3 right-3" />
      ),
      title: "Современные технологии ИИ",
      description:
        "Используем передовые нейросетевые модели и алгоритмы машинного обучения для создания интеллектуальных решений",
      gradient: "from-[#4F46E5] to-[#8B5CF6]",
      darkGradient: "from-[#4F46E5] to-[#8B5CF6]",
      bgGradient: "from-blue-50/10 via-purple-50/5 to-blue-50/10",
      darkBgGradient: "from-blue-950/20 via-purple-950/15 to-blue-950/20",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" strokeWidth={2.5} />,
      secondaryIcon: (
        <ShieldCheck className="w-10 h-10 opacity-10 absolute top-3 right-3" />
      ),
      title: "Безопасность и надежность",
      description:
        "Обеспечиваем высокий уровень защиты данных, соответствие требованиям GDPR и российскому законодательству",
      gradient: "from-[#0EA5E9] to-[#8B5CF6]",
      darkGradient: "from-[#0EA5E9] to-[#8B5CF6]",
      bgGradient: "from-cyan-50/10 via-purple-50/5 to-cyan-50/10",
      darkBgGradient: "from-cyan-950/20 via-purple-950/15 to-cyan-950/20",
    },
  ];

  // Улучшенные данные статистики с фирменными цветами
  const stats = [
    {
      value: "5+",
      label: "Лет опыта разработки чат-ботов",
      icon: <BadgeCheck className="w-6 h-6" strokeWidth={2.5} />,
      gradient: "from-[#8B5CF6] to-[#4F46E5]",
    },
    {
      value: "50+",
      label: "Успешно реализованных проектов",
      icon: <Lightbulb className="w-6 h-6" strokeWidth={2.5} />,
      gradient: "from-[#4F46E5] to-[#0EA5E9]",
    },
    {
      value: "15",
      label: "Экспертов в команде",
      icon: <Users className="w-6 h-6" strokeWidth={2.5} />,
      gradient: "from-[#8B5CF6] to-[#0EA5E9]",
    },
    {
      value: "97%",
      label: "Удовлетворенность клиентов",
      icon: <Rocket className="w-6 h-6" strokeWidth={2.5} />,
      gradient: "from-[#0EA5E9] to-[#8B5CF6]",
    },
  ];

  return (
    <section
      id="chatbots-why-us"
      className="py-20 md:py-28 relative overflow-hidden"
    >
      {/* Фирменный градиентный фон */}
      <div className="absolute inset-0 bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-white via-gray-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 -z-10"></div>

      {/* Декоративные графические элементы в фирменных цветах */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-[#8B5CF6]/10 to-[#4F46E5]/10 dark:from-[#8B5CF6]/10 dark:to-[#4F46E5]/10 rounded-full blur-3xl -z-5 animate-pulse"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tr from-[#4F46E5]/10 to-[#0EA5E9]/10 dark:from-[#4F46E5]/10 dark:to-[#0EA5E9]/10 rounded-full blur-3xl -z-5 animate-pulse"></div>

      {/* Современный SVG паттерн для фона */}
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
              id="grid-pattern-whyus"
              width="8"
              height="8"
              patternUnits="userSpaceOnUse"
              className="text-gray-200 dark:text-gray-800"
            >
              <path
                d="M0 0L8 8M8 0L0 8"
                stroke="currentColor"
                strokeWidth="0.5"
                fill="none"
                opacity="0.3"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern-whyus)" />
        </svg>
      </div>

      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-16 md:mb-20"
        >
          {/* Улучшенный бейдж в фирменных цветах */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-4 bg-gradient-to-r from-[#8B5CF6]/10 to-[#0EA5E9]/10 text-[#8B5CF6] dark:text-[#8B5CF6] border border-[#8B5CF6]/50 dark:border-[#8B5CF6]/50 backdrop-blur-sm shadow-sm"
          >
            <div className="flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#0EA5E9] text-white">
              <Sparkles className="w-3 h-3" />
            </div>
            Преимущества
          </motion.div>

          {/* Улучшенный заголовок с фирменным градиентом */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            <span className="relative inline-block">
              <span className="relative z-10 text-gray-900 dark:text-white">
                Почему{" "}
              </span>
            </span>
            <span className="relative inline-block">
              <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] via-[#4F46E5] to-[#0EA5E9] dark:from-[#8B5CF6] dark:via-[#4F46E5] dark:to-[#0EA5E9]">
                выбирают нас
              </span>
              <span className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#8B5CF6]/20 via-[#4F46E5]/20 to-[#0EA5E9]/20 blur-sm -z-10"></span>
            </span>
          </motion.h2>

          {/* Улучшенное описание с более современным шрифтом */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-light tracking-wide"
          >
            Наша компания сочетает глубокую экспертизу в области искусственного
            интеллекта с пониманием бизнес-процессов различных отраслей.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className={`relative group p-6 md:p-8 overflow-hidden backdrop-blur-md rounded-2xl border 
                ${
                  isDark
                    ? "bg-gray-900/60 border-gray-800/50"
                    : "bg-white/80 border-gray-100/50"
                }
                transition-all duration-300 hover:shadow-2xl hover:border-[#8B5CF6]/50`}
            >
              {/* Градиентный фон при наведении */}
              <div
                className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-5
                  ${isDark ? advantage.darkBgGradient : advantage.bgGradient}`}
              ></div>

              {/* Декоративные элементы */}
              <div
                className={`absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br opacity-10 dark:opacity-20 blur-xl -z-10
                  ${advantage.gradient}`}
              ></div>
              {advantage.secondaryIcon}

              {/* Иконка с градиентом и анимацией */}
              <motion.div
                initial="initial"
                animate="animate"
                variants={iconFloatAnimation}
                className={`w-16 h-16 rounded-2xl mb-5 flex items-center justify-center shadow-lg shadow-[#8B5CF6]/20 dark:shadow-[#8B5CF6]/10 bg-gradient-to-br ${advantage.gradient} text-white group-hover:shadow-xl transition-all duration-300`}
              >
                {advantage.icon}
                <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>

              {/* Заголовок */}
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#8B5CF6] group-hover:to-[#0EA5E9] transition-all duration-500">
                {advantage.title}
              </h3>

              {/* Описание */}
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-medium tracking-wide">
                {advantage.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Улучшенная статистика с фирменными цветами */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -5,
                scale: 1.03,
                transition: { duration: 0.2 },
              }}
              className={`relative group p-6 md:p-8 text-center backdrop-blur-md rounded-2xl border
                ${
                  isDark
                    ? "bg-gray-900/60 border-gray-800/50"
                    : "bg-white/80 border-gray-100/50"
                }
                transition-all duration-300 hover:shadow-2xl hover:border-[#8B5CF6]/50`}
            >
              {/* Градиентный фон при наведении */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-[#8B5CF6]/5 to-[#0EA5E9]/5 dark:from-[#8B5CF6]/10 dark:to-[#0EA5E9]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>

              {/* Иконка */}
              <motion.div
                initial="initial"
                animate="animate"
                variants={pulseAnimation}
                className={`w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center bg-gradient-to-br ${stat.gradient} text-white shadow-lg shadow-[#8B5CF6]/20 dark:shadow-[#8B5CF6]/10`}
              >
                {stat.icon}
              </motion.div>

              {/* Значение */}
              <p
                className={`text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${stat.gradient} mb-2 group-hover:scale-110 transition-transform duration-300`}
              >
                {stat.value}
              </p>

              {/* Лейбл */}
              <p className="text-gray-600 dark:text-gray-300 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
