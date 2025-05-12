"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { useTheme } from "@/context/ThemeContext";
import { useState } from "react";
import {
  FiCheckCircle,
  FiAward,
  FiUsers,
  FiCode,
  FiLifeBuoy,
  FiTrendingUp,
} from "react-icons/fi";

export default function WorkflowAutomationWhyUs() {
  const { theme } = useTheme();
  const isDark = theme !== "light";
  const [activeFeature, setActiveFeature] = useState(0);

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

  // Ключевые преимущества компании
  const advantages = [
    {
      icon: <FiAward className="w-6 h-6" />,
      title: "Опыт и экспертиза",
      description:
        "Наша команда состоит из сертифицированных экспертов с многолетним опытом в области автоматизации бизнес-процессов и разработки интеграционных решений для различных отраслей.",
      points: [
        "Более 50 успешно реализованных проектов",
        "Команда сертифицированных разработчиков",
        "Опыт работы с компаниями разного масштаба",
        "Глубокое понимание бизнес-процессов",
      ],
    },
    {
      icon: <FiUsers className="w-6 h-6" />,
      title: "Индивидуальный подход",
      description:
        "Мы не предлагаем шаблонных решений. Каждый проект автоматизации разрабатывается индивидуально под конкретные задачи и особенности вашего бизнеса.",
      points: [
        "Детальное изучение потребностей клиента",
        "Адаптация решений под специфику бизнеса",
        "Учет существующей IT-инфраструктуры",
        "Масштабируемость под будущие изменения",
      ],
    },
    {
      icon: <FiCode className="w-6 h-6" />,
      title: "Современные технологии",
      description:
        "В разработке решений мы используем передовые технологии искусственного интеллекта, машинного обучения и облачных вычислений для создания эффективных и инновационных систем автоматизации.",
      points: [
        "Алгоритмы искусственного интеллекта",
        "Облачные решения для масштабирования",
        "API-первый подход к разработке",
        "Технологии обработки больших данных",
      ],
    },
    {
      icon: <FiLifeBuoy className="w-6 h-6" />,
      title: "Полный цикл услуг",
      description:
        "Мы предоставляем полный спектр услуг: от анализа и разработки стратегии до внедрения, обучения персонала и последующей технической поддержки.",
      points: [
        "Аудит и анализ бизнес-процессов",
        "Разработка и внедрение решений",
        "Обучение пользователей системы",
        "Техническая поддержка 24/7",
      ],
    },
  ];

  return (
    <section
      id="workflow-why-us"
      className="py-16 md:py-24 relative overflow-hidden"
    >
      {/* Градиентный фон */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 to-white dark:from-blue-950/20 dark:to-gray-950 -z-10"></div>

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
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br from-blue-200/30 to-blue-400/30 dark:from-blue-500/10 dark:to-blue-700/10 rounded-full blur-3xl -z-5"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-gradient-to-tr from-sky-200/30 to-sky-400/30 dark:from-sky-500/10 dark:to-sky-700/10 rounded-full blur-3xl -z-5"></div>

      {/* Анимированные элементы */}
      <motion.div
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        className="absolute top-[15%] right-[10%] w-12 h-12 bg-blue-400/20 dark:bg-blue-600/30 rounded-full backdrop-blur-md z-0"
      ></motion.div>
      <motion.div
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        className="absolute bottom-[15%] left-[7%] w-16 h-16 bg-sky-400/20 dark:bg-sky-600/30 rounded-full backdrop-blur-md z-0"
        style={{ animationDelay: "1.5s" }}
      ></motion.div>

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
            className="inline-flex items-center justify-center border border-blue-300 dark:border-blue-800 gap-2 px-4 py-1 rounded-full text-sm mb-4 bg-blue-500/10 text-blue-600 dark:text-blue-400"
          >
            Почему мы
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-4"
          >
            Почему клиенты выбирают{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-sky-400">
              Нейрополис
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Мы не просто автоматизируем процессы — мы создаем интеллектуальные
            системы, которые развиваются вместе с вашим бизнесом.
          </motion.p>
        </motion.div>

        {/* Планшеты и больше - интерактивная версия */}
        <div className="hidden md:block">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Левая колонка - Навигация */}
            <motion.div variants={itemVariants}>
              <div className="space-y-4">
                {advantages.map((advantage, index) => (
                  <div
                    key={index}
                    onClick={() => setActiveFeature(index)}
                    className={`p-5 rounded-xl cursor-pointer transition-all ${
                      activeFeature === index
                        ? isDark
                          ? "bg-blue-900/30 border border-blue-800/50 shadow-lg shadow-blue-900/10"
                          : "bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-200 shadow-md shadow-blue-200/30"
                        : isDark
                        ? "bg-gray-800/50 hover:bg-gray-800 backdrop-blur-sm border border-gray-700 hover:border-blue-700/40"
                        : "bg-white hover:bg-blue-50/30 border border-gray-200 hover:border-blue-200"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          activeFeature === index
                            ? isDark
                              ? "bg-blue-600/30 text-blue-400"
                              : "bg-blue-500/20 text-blue-500"
                            : isDark
                            ? "bg-gray-700/50 text-gray-400"
                            : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        {advantage.icon}
                      </div>
                      <h3
                        className={`text-xl font-semibold ${
                          activeFeature === index
                            ? "text-blue-500 dark:text-blue-400"
                            : "text-gray-800 dark:text-white"
                        }`}
                      >
                        {advantage.title}
                      </h3>
                    </div>
                    {activeFeature === index && (
                      <p className="text-gray-600 dark:text-gray-300 mt-3 pl-[52px]">
                        {advantage.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Правая колонка - Детали */}
            <motion.div
              variants={itemVariants}
              whileHover={{
                y: -5,
                transition: { duration: 0.3 },
                boxShadow: isDark
                  ? "0 10px 30px rgba(30, 64, 175, 0.2)"
                  : "0 10px 30px rgba(59, 130, 246, 0.15)",
              }}
              className={`p-8 rounded-xl ${
                isDark
                  ? "bg-gray-800/50 backdrop-blur-sm border border-gray-700"
                  : "bg-white border border-gray-200 hover:border-blue-200"
              }`}
            >
              <div className="flex items-center mb-6">
                <div
                  className={`w-14 h-14 rounded-xl mr-4 flex items-center justify-center 
                  ${
                    isDark
                      ? "bg-gradient-to-br from-blue-600/20 to-sky-600/20 text-blue-400"
                      : "bg-gradient-to-br from-blue-50 to-sky-50 text-blue-500"
                  }`}
                >
                  {advantages[activeFeature].icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {advantages[activeFeature].title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-8 border-b border-gray-200 dark:border-gray-700 pb-6">
                {advantages[activeFeature].description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {advantages[activeFeature].points.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50"
                  >
                    <FiCheckCircle className="text-blue-500 text-xl flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Мобильная версия - аккордеон */}
        <div className="md:hidden">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-4"
          >
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`p-5 rounded-xl border ${
                  isDark
                    ? "bg-gray-800/50 backdrop-blur-sm border-gray-700"
                    : "bg-white border-gray-200"
                } ${
                  activeFeature === index
                    ? isDark
                      ? "shadow-lg shadow-blue-900/10"
                      : "shadow-md shadow-blue-200/30"
                    : ""
                }`}
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() =>
                    setActiveFeature(activeFeature === index ? -1 : index)
                  }
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        activeFeature === index
                          ? isDark
                            ? "bg-blue-600/30 text-blue-400"
                            : "bg-blue-500/20 text-blue-500"
                          : isDark
                          ? "bg-gray-700/50 text-gray-400"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {advantage.icon}
                    </div>
                    <h3
                      className={`text-lg font-semibold ${
                        activeFeature === index
                          ? "text-blue-500 dark:text-blue-400"
                          : "text-gray-800 dark:text-white"
                      }`}
                    >
                      {advantage.title}
                    </h3>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                      activeFeature === index
                        ? isDark
                          ? "bg-blue-900/50 text-blue-300"
                          : "bg-blue-100 text-blue-500"
                        : isDark
                        ? "bg-gray-700"
                        : "bg-gray-100"
                    }`}
                  >
                    <span
                      className={`transition-transform ${
                        activeFeature === index ? "transform rotate-180" : ""
                      }`}
                    >
                      ↓
                    </span>
                  </div>
                </div>
                {activeFeature === index && (
                  <div className="mt-4 space-y-4">
                    <p className="text-gray-600 dark:text-gray-300">
                      {advantage.description}
                    </p>
                    <div className="space-y-3 pt-3 border-t border-gray-100 dark:border-gray-700">
                      {advantage.points.map((point, pointIndex) => (
                        <div
                          key={pointIndex}
                          className="flex items-start gap-3"
                        >
                          <FiCheckCircle className="text-blue-500 text-lg flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 dark:text-gray-300">
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
