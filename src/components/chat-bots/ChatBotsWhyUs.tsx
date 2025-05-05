"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { useTheme } from "@/context/ThemeContext";
import {
  FiTarget,
  FiCode,
  FiDatabase,
  FiUsers,
  FiCpu,
  FiShield,
} from "react-icons/fi";

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

  // Данные о преимуществах команды
  const advantages = [
    {
      icon: <FiTarget className="w-6 h-6" />,
      title: "Индивидуальный подход",
      description:
        "Разрабатываем решения под конкретные задачи вашего бизнеса с учетом отраслевой специфики и требований",
    },
    {
      icon: <FiCode className="w-6 h-6" />,
      title: "Опытная команда разработчиков",
      description:
        "Наши специалисты имеют 5+ лет опыта в создании интеллектуальных чат-ботов для различных отраслей",
    },
    {
      icon: <FiDatabase className="w-6 h-6" />,
      title: "Работа с любыми объемами данных",
      description:
        "Создаем решения, способные обрабатывать большие массивы информации и эффективно использовать базы знаний",
    },
    {
      icon: <FiUsers className="w-6 h-6" />,
      title: "Обучение и поддержка персонала",
      description:
        "Проводим полное обучение сотрудников работе с чат-ботом и обеспечиваем техническую поддержку 24/7",
    },
    {
      icon: <FiCpu className="w-6 h-6" />,
      title: "Современные технологии ИИ",
      description:
        "Используем передовые нейросетевые модели и алгоритмы машинного обучения для создания интеллектуальных решений",
    },
    {
      icon: <FiShield className="w-6 h-6" />,
      title: "Безопасность и надежность",
      description:
        "Обеспечиваем высокий уровень защиты данных, соответствие требованиям GDPR и российскому законодательству",
    },
  ];

  return (
    <section id="chatbots-why-us" className="py-16 md:py-24 relative">
      {/* Градиентный фон */}
      <div
        className={`absolute inset-0 ${
          isDark
            ? "bg-gradient-to-b from-gray-900 to-gray-950"
            : "bg-gradient-to-b from-gray-50 to-gray-100"
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
            Преимущества
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-4"
          >
            Почему{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0167F3] to-[#399AFC]">
              выбирают нас
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
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
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className={`p-6 rounded-xl border ${
                isDark
                  ? "bg-gray-800/50 border-gray-700"
                  : "bg-white border-gray-200 hover:shadow-lg"
              }`}
            >
              <div
                className={`w-14 h-14 rounded-lg mb-4 flex items-center justify-center ${
                  isDark ? "bg-blue-900/20" : "bg-blue-50"
                }`}
              >
                <span className="text-blue-600 dark:text-blue-400">
                  {advantage.icon}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {advantage.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {advantage.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Статистика */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          <motion.div
            variants={itemVariants}
            className={`p-6 rounded-xl ${
              isDark
                ? "bg-gray-800/50 border border-gray-700"
                : "bg-white border border-gray-200"
            }`}
          >
            <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0167F3] to-[#399AFC] mb-2">
              5+
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Лет опыта разработки чат-ботов
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className={`p-6 rounded-xl ${
              isDark
                ? "bg-gray-800/50 border border-gray-700"
                : "bg-white border border-gray-200"
            }`}
          >
            <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0167F3] to-[#399AFC] mb-2">
              50+
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Успешно реализованных проектов
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className={`p-6 rounded-xl ${
              isDark
                ? "bg-gray-800/50 border border-gray-700"
                : "bg-white border border-gray-200"
            }`}
          >
            <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0167F3] to-[#399AFC] mb-2">
              15
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Экспертов в команде
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className={`p-6 rounded-xl ${
              isDark
                ? "bg-gray-800/50 border border-gray-700"
                : "bg-white border border-gray-200"
            }`}
          >
            <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0167F3] to-[#399AFC] mb-2">
              97%
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Удовлетворенность клиентов
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
