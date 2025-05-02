"use client";

import { motion } from "framer-motion";
import React from "react";

export default function AIAgentSolutionNew() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.section
      id="solution"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="py-20 md:py-28 px-4 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900 -z-10"></div>
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-gradient-to-br from-blue-200/20 to-blue-400/20 dark:from-blue-500/10 dark:to-blue-700/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-200/20 to-indigo-400/20 dark:from-indigo-500/10 dark:to-indigo-700/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto max-w-[1280px] relative z-10 space-y-16 md:space-y-20">
        <motion.div
          variants={itemVariants}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 dark:text-white leading-tight">
            Решение:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0167F3] to-[#399AFC]">
              Ваши персональные ИИ-агенты
            </span>
          </h2>
          <p className="mt-6 text-gray-600 dark:text-gray-300 text-base md:text-xl leading-relaxed">
            Автоматизируйте рутинные задачи и увеличьте эффективность с помощью
            интеллектуальных ассистентов
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="max-w-6xl mx-auto rounded-2xl border border-white/20 dark:border-gray-700/30 backdrop-blur-lg bg-white/60 dark:bg-gray-900/50 p-8 md:p-12 space-y-10"
        >
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-5 text-gray-800 dark:text-white">
              Что такое{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0167F3] to-[#399AFC]">
                ИИ-агент
              </span>
              ?
            </h3>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Это программа, использующая искусственный интеллект для
              автономного выполнения конкретных бизнес-задач. Он может
              взаимодействовать с вашими системами (CRM, ERP, Email, базы
              данных), общаться с клиентами или сотрудниками, анализировать
              данные и обучаться на основе полученного опыта для повышения
              эффективности.
            </p>
          </div>

          <hr className="border-blue-100/50 dark:border-blue-800/40" />

          <div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800 dark:text-white">
              Как это работает:
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-5"
            >
              <motion.div
                variants={itemVariants}
                className="flex gap-4 p-4 rounded-xl bg-blue-500/5 dark:bg-blue-900/20 border border-blue-100/50 dark:border-blue-800/40"
              >
                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-xl bg-gradient-to-br from-[#0167F3] to-[#399AFC] text-white font-semibold text-sm shadow-md">
                  01
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">
                    Получение задачи
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-base">
                    Агент получает триггер или команду (например, новое письмо,
                    запись в CRM, время по расписанию).
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex gap-4 p-4 rounded-xl bg-blue-500/5 dark:bg-blue-900/20 border border-blue-100/50 dark:border-blue-800/40"
              >
                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-xl bg-gradient-to-br from-[#0167F3] to-[#399AFC] text-white font-semibold text-sm shadow-md">
                  02
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">
                    Анализ и планирование
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-base">
                    ИИ анализирует задачу, данные и определяет
                    последовательность действий.
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex gap-4 p-4 rounded-xl bg-blue-500/5 dark:bg-blue-900/20 border border-blue-100/50 dark:border-blue-800/40"
              >
                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-xl bg-gradient-to-br from-[#0167F3] to-[#399AFC] text-white font-semibold text-sm shadow-md">
                  03
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">
                    Взаимодействие
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-base">
                    Агент подключается к нужным системам, извлекает или вносит
                    информацию.
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex gap-4 p-4 rounded-xl bg-blue-500/5 dark:bg-blue-900/20 border border-blue-100/50 dark:border-blue-800/40"
              >
                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-xl bg-gradient-to-br from-[#0167F3] to-[#399AFC] text-white font-semibold text-sm shadow-md">
                  04
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">
                    Выполнение действия
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-base">
                    Отправляет отчет, отвечает клиенту, обновляет статус заказа
                    и т.д.
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex gap-4 p-4 rounded-xl bg-blue-500/5 dark:bg-blue-900/20 border border-blue-100/50 dark:border-blue-800/40"
              >
                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-xl bg-gradient-to-br from-[#0167F3] to-[#399AFC] text-white font-semibold text-sm shadow-md">
                  05
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">
                    Обучение и отчет
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-base">
                    Запоминает результат, формирует отчет и улучшает свою работу
                    в будущем.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <hr className="border-blue-100/50 dark:border-blue-800/40" />

          <div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800 dark:text-white">
              Ключевые характеристики:
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              <motion.div
                variants={itemVariants}
                className="flex items-start gap-3 p-4 rounded-xl bg-blue-500/5 dark:bg-blue-900/20 border border-blue-100/50 dark:border-blue-800/40"
              >
                <svg
                  className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <div>
                  <strong className="text-gray-800 dark:text-gray-100 block font-medium">
                    Автономность
                  </strong>
                  <span className="text-base text-gray-600 dark:text-gray-300">
                    Работают самостоятельно по заданным правилам и целям.
                  </span>
                </div>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex items-start gap-3 p-4 rounded-xl bg-blue-500/5 dark:bg-blue-900/20 border border-blue-100/50 dark:border-blue-800/40"
              >
                <svg
                  className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <div>
                  <strong className="text-gray-800 dark:text-gray-100 block font-medium">
                    Обучаемость
                  </strong>
                  <span className="text-base text-gray-600 dark:text-gray-300">
                    Способны адаптироваться и улучшать производительность со
                    временем.
                  </span>
                </div>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex items-start gap-3 p-4 rounded-xl bg-blue-500/5 dark:bg-blue-900/20 border border-blue-100/50 dark:border-blue-800/40"
              >
                <svg
                  className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <div>
                  <strong className="text-gray-800 dark:text-gray-100 block font-medium">
                    Интеграция
                  </strong>
                  <span className="text-base text-gray-600 dark:text-gray-300">
                    Подключаются к любым системам через API или прямой доступ к
                    БД.
                  </span>
                </div>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex items-start gap-3 p-4 rounded-xl bg-blue-500/5 dark:bg-blue-900/20 border border-blue-100/50 dark:border-blue-800/40"
              >
                <svg
                  className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <div>
                  <strong className="text-gray-800 dark:text-gray-100 block font-medium">
                    Масштабируемость
                  </strong>
                  <span className="text-base text-gray-600 dark:text-gray-300">
                    Легко масштабируются под возрастающие объемы и новые задачи.
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start"
        >
          <motion.div
            variants={itemVariants}
            className="backdrop-blur-lg bg-white/60 dark:bg-gray-900/50 border border-white/20 dark:border-gray-700/30 rounded-2xl p-8 md:p-10 shadow-lg relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-60 h-60 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-full blur-2xl -z-0 translate-x-1/2 -translate-y-1/2 opacity-70 dark:opacity-50"></div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 relative z-10 text-gray-800 dark:text-white">
              Проблемы, которые решают ИИ-агенты
            </h3>
            <ul className="space-y-4 relative z-10 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-base">
                  Снижение операционных расходов
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-base">
                  Освобождение времени сотрудников от рутины
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-base">
                  Ускорение ответов на запросы клиентов
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-base">
                  Автоматизация обработки данных и отчетности
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-base">
                  Повышение точности и снижение ошибок
                </span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="backdrop-blur-lg bg-white/60 dark:bg-gray-900/50 border border-white/20 dark:border-gray-700/30 rounded-2xl p-8 md:p-10 shadow-lg relative overflow-hidden"
          >
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-gradient-to-tr from-indigo-500/10 to-blue-500/10 rounded-full blur-2xl -z-0 -translate-x-1/2 translate-y-1/2 opacity-70 dark:opacity-50"></div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800 dark:text-white relative z-10">
              Возможности для вашего бизнеса
            </h3>
            <ul className="space-y-4 text-gray-700 dark:text-gray-300 relative z-10">
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-base">
                  Концентрация команды на стратегических задачах
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-base">
                  Рост прибыли за счет оптимизации
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-base">
                  Повышение удовлетворенности клиентов
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-base">
                  Принятие решений на основе данных, а не интуиции
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-base">
                  Масштабирование бизнеса без роста штата
                </span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
