"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { useTheme } from "@/context/ThemeContext";
import {
  FiClock,
  FiTrendingDown,
  FiUsers,
  FiAlertCircle,
  FiDollarSign,
  FiBarChart2,
} from "react-icons/fi";

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
      icon: <FiClock className="w-7 h-7 text-red-500" />,
      title: "Длительное время ожидания ответа",
      description:
        "Клиенты ждут ответа часами или днями, что приводит к снижению удовлетворенности и потере потенциальных сделок",
      stat: "80%",
      statDesc: "клиентов ожидают ответ менее 10 минут",
    },
    {
      icon: <FiTrendingDown className="w-7 h-7 text-red-500" />,
      title: "Низкая конверсия посетителей в клиентов",
      description:
        "Отсутствие моментального ответа на вопросы потенциальных клиентов снижает вероятность совершения покупки",
      stat: "67%",
      statDesc: "посетителей уходят без ответа",
    },
    {
      icon: <FiUsers className="w-7 h-7 text-red-500" />,
      title: "Высокая нагрузка на службу поддержки",
      description:
        "Операторы тратят большую часть времени на однотипные вопросы вместо решения сложных задач",
      stat: "70%",
      statDesc: "вопросов - типовые",
    },
    {
      icon: <FiAlertCircle className="w-7 h-7 text-red-500" />,
      title: "Человеческий фактор",
      description:
        "Усталость и эмоциональное выгорание операторов приводят к ошибкам и снижению качества обслуживания",
      stat: "35%",
      statDesc: "снижение эффективности к концу дня",
    },
    {
      icon: <FiDollarSign className="w-7 h-7 text-red-500" />,
      title: "Высокие затраты на персонал",
      description:
        "Содержание штата специалистов поддержки требует значительных расходов на зарплату, обучение и рабочие места",
      stat: "45%",
      statDesc: "экономии на персонале",
    },
    {
      icon: <FiBarChart2 className="w-7 h-7 text-red-500" />,
      title: "Отсутствие аналитики обращений",
      description:
        "Сложно отследить и проанализировать типичные проблемы клиентов, тренды и качество обслуживания",
      stat: "90%",
      statDesc: "отсутствие системного анализа",
    },
  ];

  return (
    <section id="chatbots-problems" className="py-16 md:py-24 relative">
      {/* Градиентный фон */}
      <div
        className={`absolute inset-0 ${
          isDark
            ? "bg-gradient-to-b from-black to-gray-900"
            : "bg-gradient-to-b from-gray-50 to-gray-100"
        } -z-10`}
      ></div>

      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-12"
        >
          <motion.div
            variants={itemVariants}
            className={`inline-block px-4 py-1 rounded-full text-sm mb-4 switch-box ${
              !isDark && "light-switch-box"
            }`}
          >
            Проблемы бизнеса
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-4"
          >
            С какими проблемами сталкивается ваш бизнес{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0167F3] to-[#399AFC]">
              прямо сейчас?
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`p-6 rounded-xl transition-all duration-300 ${
                isDark
                  ? "bg-gray-800/50 hover:bg-gray-800/80 border border-gray-700"
                  : "bg-white hover:shadow-lg border border-gray-200"
              }`}
            >
              <div className="flex items-start">
                <div
                  className={`w-12 h-12 rounded-lg mr-4 flex items-center justify-center ${
                    isDark ? "bg-red-900/20" : "bg-red-50"
                  }`}
                >
                  {problem.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {problem.description}
                  </p>
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-red-500 mr-2">
                      {problem.stat}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {problem.statDesc}
                    </span>
                  </div>
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
          className="mt-16 text-center"
        >
          <motion.div
            variants={itemVariants}
            className={`p-6 rounded-xl max-w-3xl mx-auto ${
              isDark
                ? "bg-blue-900/20 border border-blue-800/30"
                : "bg-blue-50 border border-blue-100"
            }`}
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Решение есть!
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Современные чат-боты на базе искусственного интеллекта способны
              решить все эти проблемы, обеспечивая круглосуточную поддержку,
              моментальные ответы и значительную экономию ресурсов.
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
