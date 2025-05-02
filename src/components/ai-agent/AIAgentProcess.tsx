"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AIAgentProcess() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.section
      id="process"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="py-20 md:py-28 px-4 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900 -z-10"></div>
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-blue-400/20 dark:from-blue-500/10 dark:to-blue-700/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-indigo-200/20 to-indigo-400/20 dark:from-indigo-500/10 dark:to-indigo-700/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto relative z-10">
        <motion.h2
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-16 md:mb-20 text-gray-800 dark:text-white"
        >
          Наш Процесс Разработки: Прозрачно и Эффективно
        </motion.h2>

        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-blue-200 dark:bg-blue-800/60 hidden md:block"></div>

          <motion.div
            variants={itemVariants}
            className="relative pl-12 md:pl-14 pb-10"
          >
            <div className="absolute left-0 top-0 flex items-center justify-center w-9 h-9 bg-gradient-to-br from-[#0167F3] to-[#399AFC] text-white rounded-full font-medium text-sm shadow-md">
              1
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-2 text-gray-800 dark:text-white">
              Анализ и Консультация
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">
              Глубоко погружаемся в ваши бизнес-цели, текущие процессы и
              доступные данные. Определяем ключевые метрики (KPI) для оценки
              успеха будущего ИИ-агента. Результат: четкое понимание задачи и
              ожиданий.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative pl-12 md:pl-14 pb-10"
          >
            <div className="absolute left-0 top-0 flex items-center justify-center w-9 h-9 bg-gradient-to-br from-[#0167F3] to-[#399AFC] text-white rounded-full font-medium text-sm shadow-md">
              2
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-2 text-gray-800 dark:text-white">
              Проектирование Решения
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">
              Разрабатываем детальную архитектуру ИИ-агента. Определяем
              необходимые интеграции, источники данных, алгоритмы обработки
              информации и механизмы принятия решений. Результат: подробный план
              разработки.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative pl-12 md:pl-14 pb-10"
          >
            <div className="absolute left-0 top-0 flex items-center justify-center w-9 h-9 bg-gradient-to-br from-[#0167F3] to-[#399AFC] text-white rounded-full font-medium text-sm shadow-md">
              3
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-2 text-gray-800 dark:text-white">
              Прототипирование и Валидация
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">
              Создаем минимально жизнеспособную версию ИИ-агента и тестируем его
              на реальных или смоделированных данных. Итеративно улучшаем на
              основе обратной связи. Результат: работающий прототип с базовой
              функциональностью.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative pl-12 md:pl-14 pb-10"
          >
            <div className="absolute left-0 top-0 flex items-center justify-center w-9 h-9 bg-gradient-to-br from-[#0167F3] to-[#399AFC] text-white rounded-full font-medium text-sm shadow-md">
              4
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-2 text-gray-800 dark:text-white">
              Полная Разработка и Интеграция
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">
              Реализуем полную функциональность ИИ-агента, включая интеграции с
              вашими системами, обработку данных, пользовательский интерфейс и
              систему отчетности. Результат: полностью функциональный ИИ-агент.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative pl-12 md:pl-14 pb-10"
          >
            <div className="absolute left-0 top-0 flex items-center justify-center w-9 h-9 bg-gradient-to-br from-[#0167F3] to-[#399AFC] text-white rounded-full font-medium text-sm shadow-md">
              5
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-2 text-gray-800 dark:text-white">
              Тестирование и Оптимизация
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">
              Проводим комплексное тестирование в условиях, максимально
              приближенных к реальным. Оптимизируем производительность, точность
              и надежность агента. Результат: стабильное и эффективное решение.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative pl-12 md:pl-14"
          >
            <div className="absolute left-0 top-0 flex items-center justify-center w-9 h-9 bg-gradient-to-br from-[#0167F3] to-[#399AFC] text-white rounded-full font-medium text-sm shadow-md">
              6
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-2 text-gray-800 dark:text-white">
              Внедрение и Сопровождение
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">
              Запускаем ИИ-агента в производственную среду, обучаем вашу
              команду, настраиваем мониторинг и предоставляем техническую
              поддержку. Результат: полностью работающее решение, приносящее
              реальные результаты.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
