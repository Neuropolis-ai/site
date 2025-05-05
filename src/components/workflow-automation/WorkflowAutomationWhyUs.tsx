"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { useTheme } from "@/context/ThemeContext";
import { useState } from "react";
import { FiCheckCircle } from "react-icons/fi";

export default function WorkflowAutomationWhyUs() {
  const { isDark } = useTheme();
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

  // Ключевые преимущества компании
  const advantages = [
    {
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
    <section id="workflow-why-us" className="py-16 md:py-24 relative">
      {/* Градиентный фон */}
      <div
        className={`absolute inset-0 ${
          isDark
            ? "bg-gradient-to-b from-gray-900 to-black"
            : "bg-gradient-to-b from-gray-50 to-white"
        } -z-10`}
      ></div>

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
            className={`inline-block px-4 py-1 rounded-full text-sm mb-4 switch-box ${
              !isDark && "light-switch-box"
            }`}
          >
            Почему мы
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-4"
          >
            Почему клиенты выбирают{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA]">
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
                    className={`p-4 rounded-lg cursor-pointer transition-all ${
                      activeFeature === index
                        ? isDark
                          ? "bg-purple-900/30 border border-purple-800/50"
                          : "bg-purple-50 border border-purple-200"
                        : isDark
                        ? "bg-gray-800/50 hover:bg-gray-800 border border-gray-700"
                        : "bg-white hover:bg-gray-50 border border-gray-200"
                    }`}
                  >
                    <h3
                      className={`text-xl font-semibold ${
                        activeFeature === index
                          ? "text-purple-500 dark:text-purple-400"
                          : "text-gray-800 dark:text-white"
                      }`}
                    >
                      {advantage.title}
                    </h3>
                    {activeFeature === index && (
                      <p className="text-gray-600 dark:text-gray-300 mt-2">
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
              className={`p-6 rounded-xl ${
                isDark
                  ? "bg-gray-800/50 border border-gray-700"
                  : "bg-white border border-gray-200"
              }`}
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                {advantages[activeFeature].title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {advantages[activeFeature].description}
              </p>
              <div className="space-y-3">
                {advantages[activeFeature].points.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <FiCheckCircle className="text-purple-500 text-xl flex-shrink-0 mt-0.5" />
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
                className={`p-4 rounded-lg border ${
                  isDark
                    ? "bg-gray-800/50 border-gray-700"
                    : "bg-white border-gray-200"
                }`}
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() =>
                    setActiveFeature(activeFeature === index ? -1 : index)
                  }
                >
                  <h3
                    className={`text-xl font-semibold ${
                      activeFeature === index
                        ? "text-purple-500 dark:text-purple-400"
                        : "text-gray-800 dark:text-white"
                    }`}
                  >
                    {advantage.title}
                  </h3>
                  <span
                    className={`text-2xl transition-transform ${
                      activeFeature === index ? "transform rotate-180" : ""
                    }`}
                  >
                    ↓
                  </span>
                </div>
                {activeFeature === index && (
                  <div className="mt-4">
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {advantage.description}
                    </p>
                    <div className="space-y-3">
                      {advantage.points.map((point, pointIndex) => (
                        <div
                          key={pointIndex}
                          className="flex items-start gap-3"
                        >
                          <FiCheckCircle className="text-purple-500 text-xl flex-shrink-0 mt-0.5" />
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

        {/* Клиенты */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-20"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center"
          >
            Нам доверяют
          </motion.h3>
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-10 md:gap-16 items-center opacity-70"
          >
            {/* Здесь будут логотипы клиентов */}
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className={`w-32 h-12 md:w-40 md:h-16 rounded-lg flex items-center justify-center ${
                  isDark ? "bg-gray-800" : "bg-gray-100"
                }`}
              >
                <p className="text-gray-500">Логотип клиента</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
