"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { useTheme } from "@/context/ThemeContext";
import {
  Clock,
  TrendingDown,
  Users,
  AlertCircle,
  DollarSign,
  BarChart2,
  ArrowRight,
  Shield,
  BrainCircuit,
} from "lucide-react";

export default function ChatBotsProblems() {
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

  // Данные о проблемах
  const problems = [
    {
      icon: <Clock className="w-6 h-6 text-red-500" />,
      title: "Длительное время ожидания ответа",
      description:
        "Клиенты ждут ответа часами или днями, что приводит к снижению удовлетворенности и потере потенциальных сделок",
      stat: "80%",
      statDesc: "клиентов ожидают ответ менее 10 минут",
    },
    {
      icon: <TrendingDown className="w-6 h-6 text-red-500" />,
      title: "Низкая конверсия посетителей в клиентов",
      description:
        "Отсутствие моментального ответа на вопросы потенциальных клиентов снижает вероятность совершения покупки",
      stat: "67%",
      statDesc: "посетителей уходят без ответа",
    },
    {
      icon: <Users className="w-6 h-6 text-red-500" />,
      title: "Высокая нагрузка на службу поддержки",
      description:
        "Операторы тратят большую часть времени на однотипные вопросы вместо решения сложных задач",
      stat: "70%",
      statDesc: "вопросов - типовые",
    },
    {
      icon: <AlertCircle className="w-6 h-6 text-red-500" />,
      title: "Человеческий фактор",
      description:
        "Усталость и эмоциональное выгорание операторов приводят к ошибкам и снижению качества обслуживания",
      stat: "35%",
      statDesc: "снижение эффективности к концу дня",
    },
    {
      icon: <DollarSign className="w-6 h-6 text-red-500" />,
      title: "Высокие затраты на персонал",
      description:
        "Содержание штата специалистов поддержки требует значительных расходов на зарплату, обучение и рабочие места",
      stat: "45%",
      statDesc: "экономии на персонале",
    },
    {
      icon: <BarChart2 className="w-6 h-6 text-red-500" />,
      title: "Отсутствие аналитики обращений",
      description:
        "Сложно отследить и проанализировать типичные проблемы клиентов, тренды и качество обслуживания",
      stat: "90%",
      statDesc: "отсутствие системного анализа",
    },
  ];

  return (
    <section
      id="chatbots-problems"
      className="py-20 md:py-28 relative overflow-hidden"
    >
      {/* Современные градиенты и фоновые элементы */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-900/90 -z-10"></div>

      {/* Декоративные элементы */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-5">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-red-200/20 dark:bg-red-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-24 -left-24 w-80 h-80 bg-blue-200/20 dark:bg-blue-900/10 rounded-full blur-3xl"></div>

        {/* Абстрактные линии */}
        <svg
          className="absolute top-1/4 right-0 w-full h-48 text-gray-200 dark:text-gray-800 opacity-20"
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
        >
          <path
            d="M0,50 Q300,100 600,50 T1200,100"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          ></path>
          <path
            d="M0,100 Q300,50 600,100 T1200,50"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          ></path>
        </svg>
      </div>

      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm mb-4 bg-red-500/10 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800/50 backdrop-blur-sm"
          >
            <svg
              width={15}
              height={15}
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-red-600 dark:text-red-400"
            >
              <path
                d="M7.5 15C11.6421 15 15 11.6421 15 7.5C15 3.35786 11.6421 0 7.5 0C3.35786 0 0 3.35786 0 7.5C0 11.6421 3.35786 15 7.5 15ZM6.5 4C6.5 3.44772 6.94772 3 7.5 3C8.05228 3 8.5 3.44772 8.5 4V8C8.5 8.55228 8.05228 9 7.5 9C6.94772 9 6.5 8.55228 6.5 8V4ZM8.5 11C8.5 11.5523 8.05228 12 7.5 12C6.94772 12 6.5 11.5523 6.5 11C6.5 10.4477 6.94772 10 7.5 10C8.05228 10 8.5 10.4477 8.5 11Z"
                fill="currentColor"
              />
            </svg>
            Проблемы бизнеса
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            С какими проблемами сталкивается ваш бизнес{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-600 relative">
              прямо сейчас?
              <svg
                className="absolute -bottom-1 left-0 w-full h-1.5 text-red-500/20"
                viewBox="0 0 100 10"
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
            Узнайте, как интеллектуальные чат-боты помогают решить типичные
            проблемы коммуникации с клиентами и оптимизировать бизнес-процессы.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative group p-7 rounded-2xl transition-all duration-500 overflow-hidden ${
                isDark
                  ? "bg-gray-800/50 hover:bg-gray-800/70 border border-gray-700/50"
                  : "bg-white hover:shadow-xl border border-gray-200"
              }`}
            >
              {/* Градиентный фон при наведении */}
              <div className="absolute inset-0 bg-gradient-to-tr from-red-500/5 to-red-600/5 dark:from-red-500/10 dark:to-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-5"></div>

              {/* Декоративный элемент */}
              <div className="absolute -right-8 -bottom-8 w-24 h-24 rounded-full bg-red-100 dark:bg-red-900/20 opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>

              <div className="flex flex-col relative z-10">
                <div
                  className={`w-14 h-14 rounded-xl mb-5 flex items-center justify-center ${
                    isDark ? "bg-red-900/30" : "bg-red-50"
                  }`}
                >
                  {problem.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {problem.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-grow">
                  {problem.description}
                </p>
                <div className="flex items-center space-x-3 pt-3 border-t border-gray-200 dark:border-gray-700/50">
                  <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-600">
                    {problem.stat}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {problem.statDesc}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-20"
        >
          <motion.div
            variants={itemVariants}
            className="relative overflow-hidden p-8 rounded-2xl max-w-4xl mx-auto bg-gradient-to-r from-blue-500/10 to-blue-600/10 dark:from-blue-500/20 dark:to-blue-600/20 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/30"
          >
            {/* Декоративные элементы */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-400/40 dark:bg-blue-400/20 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-300/40 dark:bg-blue-500/20 rounded-full blur-3xl opacity-30"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 text-left">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-blue-600 flex-shrink-0 flex items-center justify-center">
                <BrainCircuit className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                  Решение есть!
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-5 leading-relaxed">
                  Современные чат-боты на базе искусственного интеллекта
                  способны решить все эти проблемы, обеспечивая круглосуточную
                  поддержку, моментальные ответы и значительную экономию
                  ресурсов.
                </p>
                <a
                  href="#chatbots-solution"
                  className="inline-flex items-center group text-blue-600 dark:text-blue-400 font-medium"
                >
                  Узнать подробнее
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
