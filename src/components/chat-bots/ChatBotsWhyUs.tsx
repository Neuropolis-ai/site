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

  // Современные данные о преимуществах команды
  const advantages = [
    {
      icon: <Target className="w-6 h-6" strokeWidth={2.5} />,
      secondaryIcon: (
        <Sparkles className="w-10 h-10 opacity-10 absolute top-3 right-3" />
      ),
      title: "Индивидуальный подход",
      description:
        "Разрабатываем решения под конкретные задачи вашего бизнеса с учетом отраслевой специфики и требований",
      gradient: "from-indigo-500 to-violet-600",
      darkGradient: "from-indigo-600 to-violet-700",
      bgGradient: "from-indigo-50/10 via-violet-50/5 to-indigo-50/10",
      darkBgGradient: "from-indigo-950/20 via-violet-950/15 to-indigo-950/20",
    },
    {
      icon: <Code2 className="w-6 h-6" strokeWidth={2.5} />,
      secondaryIcon: (
        <Code2 className="w-10 h-10 opacity-10 absolute top-3 right-3" />
      ),
      title: "Опытная команда разработчиков",
      description:
        "Наши специалисты имеют 5+ лет опыта в создании интеллектуальных чат-ботов для различных отраслей",
      gradient: "from-blue-500 to-cyan-500",
      darkGradient: "from-blue-600 to-cyan-600",
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
      gradient: "from-cyan-500 to-teal-500",
      darkGradient: "from-cyan-600 to-teal-600",
      bgGradient: "from-cyan-50/10 via-teal-50/5 to-cyan-50/10",
      darkBgGradient: "from-cyan-950/20 via-teal-950/15 to-cyan-950/20",
    },
    {
      icon: <Users className="w-6 h-6" strokeWidth={2.5} />,
      secondaryIcon: (
        <Users className="w-10 h-10 opacity-10 absolute top-3 right-3" />
      ),
      title: "Обучение и поддержка персонала",
      description:
        "Проводим полное обучение сотрудников работе с чат-ботом и обеспечиваем техническую поддержку 24/7",
      gradient: "from-teal-500 to-emerald-500",
      darkGradient: "from-teal-600 to-emerald-600",
      bgGradient: "from-teal-50/10 via-emerald-50/5 to-teal-50/10",
      darkBgGradient: "from-teal-950/20 via-emerald-950/15 to-teal-950/20",
    },
    {
      icon: <Cpu className="w-6 h-6" strokeWidth={2.5} />,
      secondaryIcon: (
        <Cpu className="w-10 h-10 opacity-10 absolute top-3 right-3" />
      ),
      title: "Современные технологии ИИ",
      description:
        "Используем передовые нейросетевые модели и алгоритмы машинного обучения для создания интеллектуальных решений",
      gradient: "from-amber-500 to-orange-500",
      darkGradient: "from-amber-600 to-orange-600",
      bgGradient: "from-amber-50/10 via-orange-50/5 to-amber-50/10",
      darkBgGradient: "from-amber-950/20 via-orange-950/15 to-amber-950/20",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" strokeWidth={2.5} />,
      secondaryIcon: (
        <ShieldCheck className="w-10 h-10 opacity-10 absolute top-3 right-3" />
      ),
      title: "Безопасность и надежность",
      description:
        "Обеспечиваем высокий уровень защиты данных, соответствие требованиям GDPR и российскому законодательству",
      gradient: "from-fuchsia-500 to-pink-600",
      darkGradient: "from-fuchsia-600 to-pink-700",
      bgGradient: "from-fuchsia-50/10 via-pink-50/5 to-fuchsia-50/10",
      darkBgGradient: "from-fuchsia-950/20 via-pink-950/15 to-fuchsia-950/20",
    },
  ];

  // Улучшенные данные статистики
  const stats = [
    {
      value: "5+",
      label: "Лет опыта разработки чат-ботов",
      icon: <BadgeCheck className="w-6 h-6" strokeWidth={2.5} />,
      gradient: "from-indigo-500 to-violet-600",
    },
    {
      value: "50+",
      label: "Успешно реализованных проектов",
      icon: <Lightbulb className="w-6 h-6" strokeWidth={2.5} />,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      value: "15",
      label: "Экспертов в команде",
      icon: <Users className="w-6 h-6" strokeWidth={2.5} />,
      gradient: "from-teal-500 to-emerald-500",
    },
    {
      value: "97%",
      label: "Удовлетворенность клиентов",
      icon: <Rocket className="w-6 h-6" strokeWidth={2.5} />,
      gradient: "from-amber-500 to-orange-500",
    },
  ];

  return (
    <section
      id="chatbots-why-us"
      className="py-20 md:py-28 relative overflow-hidden"
    >
      {/* Современный градиентный фон */}
      <div className="absolute inset-0 bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-white via-gray-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 -z-10"></div>

      {/* Декоративные графические элементы */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-violet-200/10 to-indigo-300/10 dark:from-violet-500/10 dark:to-indigo-600/10 rounded-full blur-3xl -z-5 animate-pulse"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tr from-blue-200/10 to-cyan-300/10 dark:from-blue-500/10 dark:to-cyan-600/10 rounded-full blur-3xl -z-5 animate-pulse"></div>

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
          {/* Улучшенный бейдж */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-4 bg-gradient-to-r from-indigo-500/10 to-violet-600/10 text-indigo-600 dark:text-indigo-400 border border-indigo-200/50 dark:border-indigo-700/50 backdrop-blur-sm shadow-sm"
          >
            <div className="flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 text-white">
              <Sparkles className="w-3 h-3" />
            </div>
            Преимущества
          </motion.div>

          {/* Улучшенный заголовок с 3D-эффектом и современным градиентом */}
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
              <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-blue-600 to-violet-600 dark:from-indigo-400 dark:via-blue-400 dark:to-violet-400">
                выбирают нас
              </span>
              <span className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-indigo-500/20 via-blue-400/20 to-violet-500/20 blur-sm -z-10"></span>
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
                transition-all duration-300 hover:shadow-2xl hover:border-${advantage.gradient
                  .split(" ")[1]
                  .replace("to-", "")}/50`}
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
                className={`w-16 h-16 rounded-2xl mb-5 flex items-center justify-center shadow-lg shadow-${advantage.gradient
                  .split(" ")[1]
                  .replace("to-", "")}/20 dark:shadow-${advantage.gradient
                  .split(" ")[1]
                  .replace("to-", "")}/10 bg-gradient-to-br ${
                  advantage.gradient
                } text-white group-hover:shadow-xl transition-all duration-300`}
              >
                {advantage.icon}
                <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>

              {/* Заголовок */}
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-${advantage.gradient.split(' ')[0].replace('from-', '')} group-hover:to-${advantage.gradient.split(' ')[1].replace('to-', '')} transition-all duration-500">
                {advantage.title}
              </h3>

              {/* Описание */}
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-medium tracking-wide">
                {advantage.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Улучшенная статистика */}
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
                transition-all duration-300 hover:shadow-2xl hover:border-${stat.gradient
                  .split(" ")[1]
                  .replace("to-", "")}/50`}
            >
              {/* Градиентный фон при наведении */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-${stat.gradient
                  .split(" ")[0]
                  .replace("from-", "")}/5 to-${stat.gradient
                  .split(" ")[1]
                  .replace("to-", "")}/5 dark:from-${stat.gradient
                  .split(" ")[0]
                  .replace("from-", "")}/10 dark:to-${stat.gradient
                  .split(" ")[1]
                  .replace(
                    "to-",
                    ""
                  )}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>

              {/* Иконка */}
              <motion.div
                initial="initial"
                animate="animate"
                variants={pulseAnimation}
                className={`w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center bg-gradient-to-br ${
                  stat.gradient
                } text-white shadow-lg shadow-${stat.gradient
                  .split(" ")[1]
                  .replace("to-", "")}/20 dark:shadow-${stat.gradient
                  .split(" ")[1]
                  .replace("to-", "")}/10`}
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
