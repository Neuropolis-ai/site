"use client";

import { motion } from "framer-motion";

export default function AIAgentSolutionNew() {
  return (
    <section
      id="solution"
      className="py-20 md:py-28 px-4 relative overflow-hidden"
    >
      {/* Фоновые элементы */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-50/80 to-indigo-50/50 dark:from-gray-900/80 dark:to-blue-950/30 -z-10"></div>
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-gradient-to-br from-blue-300/20 to-indigo-400/20 dark:from-blue-500/10 dark:to-indigo-700/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-300/20 to-blue-400/20 dark:from-indigo-500/10 dark:to-blue-700/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto max-w-[1280px] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white leading-tight">
            Решение:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              Ваши Персональные ИИ-Агенты
            </span>
          </h2>
          <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg md:text-xl">
            Автоматизируйте рутинные задачи и увеличьте эффективность с помощью
            интеллектуальных ассистентов
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-start justify-center gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:w-1/2 text-gray-700 dark:text-gray-300 backdrop-blur-sm bg-white/40 dark:bg-gray-900/40 rounded-2xl p-8 border border-blue-100/30 dark:border-blue-900/30 shadow-xl shadow-blue-100/20 dark:shadow-blue-900/10"
          >
            <p className="text-lg mb-8 leading-relaxed">
              <strong className="text-blue-600 dark:text-blue-400 text-xl">
                ИИ-агент
              </strong>{" "}
              – это программа, использующая искусственный интеллект для
              автономного выполнения конкретных бизнес-задач. Он может
              взаимодействовать с вашими системами (CRM, ERP, Email, базы
              данных), общаться с клиентами или сотрудниками, анализировать
              данные и обучаться на основе полученного опыта для повышения
              эффективности.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-2xl font-semibold mb-5 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                Как это работает:
              </h3>
              <div className="space-y-4 mb-10">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  className="flex gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-50/50 to-indigo-50/50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-100/30 dark:border-blue-900/30"
                >
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-semibold text-sm shadow-md">
                    01
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">
                      Получение задачи
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Агент получает триггер или команду (например, новое
                      письмо, запись в CRM, время по расписанию).
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                  className="flex gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-50/50 to-indigo-50/50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-100/30 dark:border-blue-900/30"
                >
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-semibold text-sm shadow-md">
                    02
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">
                      Анализ и планирование
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      ИИ анализирует задачу, данные и определяет
                      последовательность действий.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.7 }}
                  className="flex gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-50/50 to-indigo-50/50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-100/30 dark:border-blue-900/30"
                >
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-semibold text-sm shadow-md">
                    03
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">
                      Взаимодействие
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Агент подключается к нужным системам, извлекает или вносит
                      информацию.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.8 }}
                  className="flex gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-50/50 to-indigo-50/50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-100/30 dark:border-blue-900/30"
                >
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-semibold text-sm shadow-md">
                    04
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">
                      Выполнение действия
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Отправляет отчет, отвечает клиенту, обновляет статус
                      заказа и т.д.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.9 }}
                  className="flex gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-50/50 to-indigo-50/50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-100/30 dark:border-blue-900/30"
                >
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-semibold text-sm shadow-md">
                    05
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">
                      Обучение и отчет
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Запоминает результат, формирует отчет и улучшает свою
                      работу в будущем.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-gradient-to-br from-blue-50/70 to-indigo-50/70 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-2xl p-6 border border-blue-100/50 dark:border-blue-900/30"
            >
              <h3 className="text-2xl font-semibold mb-5 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                Ключевые характеристики:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-lg text-gray-700 dark:text-gray-300">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.8 }}
                  className="flex items-start gap-3"
                >
                  <svg
                    className="w-6 h-6 text-green-500 mt-1 flex-shrink-0"
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
                    <strong className="text-gray-800 dark:text-gray-100 block">
                      Автономность
                    </strong>
                    <span className="text-sm">
                      Работают самостоятельно по заданным правилам и целям.
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.9 }}
                  className="flex items-start gap-3"
                >
                  <svg
                    className="w-6 h-6 text-green-500 mt-1 flex-shrink-0"
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
                    <strong className="text-gray-800 dark:text-gray-100 block">
                      Обучаемость
                    </strong>
                    <span className="text-sm">
                      Способны адаптироваться и улучшать производительность со
                      временем.
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 1.0 }}
                  className="flex items-start gap-3"
                >
                  <svg
                    className="w-6 h-6 text-green-500 mt-1 flex-shrink-0"
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
                    <strong className="text-gray-800 dark:text-gray-100 block">
                      Интегрируемость
                    </strong>
                    <span className="text-sm">
                      Легко подключаются к существующим ИТ-системам и API.
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Правая колонка с визуализацией */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:w-1/2 mt-12 lg:mt-0"
          >
            <div className="relative">
              {/* Фоновый градиент для карточки */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/10 dark:from-blue-900/20 dark:to-indigo-900/30 backdrop-blur-lg rounded-2xl shadow-xl border border-blue-100/50 dark:border-blue-900/30 z-0"></div>

              <div className="relative z-10 p-8 md:p-10 rounded-2xl">
                <h3 className="text-2xl font-semibold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                  Визуализация Работы Агента
                </h3>

                <div className="relative">
                  {/* Вертикальная линия */}
                  <div className="absolute h-full w-0.5 bg-gradient-to-b from-blue-400 via-indigo-500 to-green-500 rounded-full left-[9px] top-0 z-0"></div>

                  <div className="space-y-12 pl-8 py-2 relative z-10">
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.7 }}
                      className="relative"
                    >
                      <div className="absolute w-[18px] h-[18px] rounded-full -left-[27px] top-1 shadow-lg shadow-blue-400/30 dark:shadow-blue-700/30 z-10 flex items-center justify-center">
                        <div className="w-[18px] h-[18px] bg-gradient-to-br from-blue-400 to-indigo-600 dark:from-blue-500 dark:to-indigo-700 rounded-full"></div>
                        <div className="absolute w-[24px] h-[24px] bg-blue-400/20 dark:bg-blue-500/20 rounded-full animate-ping"></div>
                      </div>
                      <div className="flex flex-col">
                        <h4 className="font-medium text-lg text-blue-600 dark:text-blue-400">
                          Задача
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                          (Email, CRM)
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.9 }}
                      className="relative"
                    >
                      <div className="absolute w-[18px] h-[18px] rounded-full -left-[27px] top-1 shadow-lg shadow-blue-400/30 dark:shadow-blue-700/30 z-10 flex items-center justify-center">
                        <div className="w-[18px] h-[18px] bg-gradient-to-br from-blue-400 to-indigo-600 dark:from-blue-500 dark:to-indigo-700 rounded-full"></div>
                        <div className="absolute w-[24px] h-[24px] bg-blue-400/20 dark:bg-blue-500/20 rounded-full animate-ping"></div>
                      </div>
                      <div className="flex flex-col">
                        <h4 className="font-medium text-lg text-blue-600 dark:text-blue-400">
                          ИИ-Агент
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                          Анализ → Доступ к Данным
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 1.1 }}
                      className="relative"
                    >
                      <div className="absolute w-[18px] h-[18px] rounded-full -left-[27px] top-1 shadow-lg shadow-blue-400/30 dark:shadow-blue-700/30 z-10 flex items-center justify-center">
                        <div className="w-[18px] h-[18px] bg-gradient-to-br from-blue-400 to-indigo-600 dark:from-blue-500 dark:to-indigo-700 rounded-full"></div>
                        <div className="absolute w-[24px] h-[24px] bg-blue-400/20 dark:bg-blue-500/20 rounded-full animate-ping"></div>
                      </div>
                      <div className="flex flex-col">
                        <h4 className="font-medium text-lg text-blue-600 dark:text-blue-400">
                          Взаимодействие
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                          CRM, ERP, Базы данных
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 1.3 }}
                      className="relative"
                    >
                      <div className="absolute w-[18px] h-[18px] rounded-full -left-[27px] top-1 shadow-lg shadow-blue-400/30 dark:shadow-blue-700/30 z-10 flex items-center justify-center">
                        <div className="w-[18px] h-[18px] bg-gradient-to-br from-blue-400 to-indigo-600 dark:from-blue-500 dark:to-indigo-700 rounded-full"></div>
                        <div className="absolute w-[24px] h-[24px] bg-blue-400/20 dark:bg-blue-500/20 rounded-full animate-ping"></div>
                      </div>
                      <div className="flex flex-col">
                        <h4 className="font-medium text-lg text-blue-600 dark:text-blue-400">
                          Действие
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                          Ответ, Отчет, Обновление
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 1.5 }}
                      className="relative"
                    >
                      <div className="absolute w-[18px] h-[18px] rounded-full -left-[27px] top-1 shadow-lg shadow-green-400/30 dark:shadow-green-700/30 z-10 flex items-center justify-center">
                        <div className="w-[18px] h-[18px] bg-gradient-to-br from-green-400 to-emerald-600 dark:from-green-500 dark:to-emerald-700 rounded-full"></div>
                        <div className="absolute w-[24px] h-[24px] bg-green-400/20 dark:bg-green-500/20 rounded-full animate-ping"></div>
                      </div>
                      <div className="flex flex-col">
                        <h4 className="font-medium text-lg text-green-600 dark:text-green-400">
                          Результат
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                          (Эффективность ↑, Затраты ↓)
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.7 }}
                  className="mt-12 rounded-xl overflow-hidden"
                >
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-3 font-medium">
                    Ключевые преимущества
                  </div>
                  <div className="bg-gradient-to-br from-blue-50/80 to-indigo-50/80 dark:from-blue-900/30 dark:to-indigo-900/30 p-5 border-t border-blue-100 dark:border-blue-800/30">
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4 text-blue-600 dark:text-blue-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>
                          Автоматизация до <strong>80%</strong> рутинных задач
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4 text-blue-600 dark:text-blue-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>
                          Снижение операционных затрат на{" "}
                          <strong>15-30%</strong>
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4 text-blue-600 dark:text-blue-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>
                          Повышение скорости обработки в{" "}
                          <strong>5-10 раз</strong>
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4 text-blue-600 dark:text-blue-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>
                          Круглосуточная работа <strong>без выходных</strong>
                        </span>
                      </li>
                    </ul>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 1.9 }}
                  className="mt-8 flex justify-center"
                >
                  <a
                    href="#use-cases"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg shadow-blue-600/20 dark:shadow-blue-900/30"
                  >
                    <span>Узнать о применении</span>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
