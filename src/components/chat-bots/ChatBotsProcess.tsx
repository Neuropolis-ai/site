"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { useTheme } from "@/context/ThemeContext";

export default function ChatBotsProcess() {
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

  // Этапы процесса
  const processSteps = [
    {
      number: "01",
      title: "Анализ и планирование",
      description:
        "Изучаем ваши бизнес-процессы, определяем цели и задачи, которые должен решать чат-бот. Разрабатываем техническое задание и планируем архитектуру решения.",
      duration: "1-2 недели",
    },
    {
      number: "02",
      title: "Проектирование диалогов",
      description:
        "Создаем сценарии диалогов, дерево принятия решений, определяем необходимые интеграции с внешними системами. Разрабатываем персонажа чат-бота, его тон и стиль общения.",
      duration: "2-3 недели",
    },
    {
      number: "03",
      title: "Разработка и обучение",
      description:
        "Программируем чат-бота, настраиваем нейросетевые модели, обучаем его на ваших данных. Интегрируем с CRM, платежными системами и другими сервисами.",
      duration: "3-5 недель",
    },
    {
      number: "04",
      title: "Тестирование и оптимизация",
      description:
        "Проводим тщательное тестирование чат-бота, выявляем и исправляем ошибки, оптимизируем работу. Улучшаем точность ответов и скорость работы.",
      duration: "1-2 недели",
    },
    {
      number: "05",
      title: "Внедрение и поддержка",
      description:
        "Запускаем чат-бота в работу, обучаем ваших сотрудников работе с системой. Обеспечиваем техническую поддержку, мониторинг и постоянное совершенствование бота.",
      duration: "Постоянно",
    },
  ];

  return (
    <section
      id="chatbots-process"
      className="py-16 md:py-24 relative overflow-hidden"
    >
      {/* Градиентный фон */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900 -z-10"></div>

      {/* Декоративные элементы */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-blue-400/20 dark:from-blue-500/10 dark:to-blue-700/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-indigo-200/20 to-indigo-400/20 dark:from-indigo-500/10 dark:to-indigo-700/10 rounded-full blur-3xl -z-10"></div>

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
            Процесс разработки
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-4"
          >
            Как мы{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0167F3] to-[#399AFC]">
              создаем чат-ботов
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Узнайте о нашем прозрачном и эффективном процессе разработки
            интеллектуальных чат-ботов для бизнеса, от первоначального анализа
            до запуска и поддержки.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="relative"
        >
          {/* Вертикальная линия */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-indigo-600 dark:from-blue-500 dark:to-indigo-700 transform -translate-x-1/2 hidden md:block"></div>

          {/* Этапы процесса */}
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative mb-16 md:mb-24 last:mb-0 ${
                index % 2 === 0 ? "md:pr-8 lg:pr-12" : "md:pl-8 lg:pl-12"
              }`}
            >
              <div
                className={`grid grid-cols-1 md:grid-cols-2 items-center ${
                  index % 2 === 0 ? "md:text-right" : ""
                }`}
              >
                {/* Для четных индексов контент слева */}
                {index % 2 === 0 && (
                  <div
                    className={`relative ${
                      isDark ? "bg-gray-800/50" : "bg-white"
                    } p-6 md:p-8 rounded-2xl shadow-lg border ${
                      isDark ? "border-gray-700" : "border-gray-200"
                    }`}
                  >
                    <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                      {step.number}
                    </h3>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {step.description}
                    </p>
                    <div className="inline-block px-3 py-1 rounded-full text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                      {step.duration}
                    </div>

                    {/* Круг на временной линии */}
                    <div className="absolute top-1/2 right-0 w-6 h-6 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-full transform translate-x-1/2 -translate-y-1/2 border-4 border-white dark:border-gray-900 hidden md:block"></div>
                  </div>
                )}

                {/* Пустая колонка для выравнивания */}
                {index % 2 === 0 ? <div></div> : <div></div>}

                {/* Для нечетных индексов контент справа */}
                {index % 2 !== 0 && (
                  <div
                    className={`relative ${
                      isDark ? "bg-gray-800/50" : "bg-white"
                    } p-6 md:p-8 rounded-2xl shadow-lg border ${
                      isDark ? "border-gray-700" : "border-gray-200"
                    }`}
                  >
                    <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                      {step.number}
                    </h3>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {step.description}
                    </p>
                    <div className="inline-block px-3 py-1 rounded-full text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                      {step.duration}
                    </div>

                    {/* Круг на временной линии */}
                    <div className="absolute top-1/2 left-0 w-6 h-6 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-full transform -translate-x-1/2 -translate-y-1/2 border-4 border-white dark:border-gray-900 hidden md:block"></div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
