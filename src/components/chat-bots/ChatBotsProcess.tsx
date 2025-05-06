"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { useTheme } from "@/context/ThemeContext";
import {
  Braces,
  Code2,
  Cpu,
  Layers,
  LineChart,
  MessageSquareText,
  Settings,
  ShieldCheck,
  Terminal,
  Zap,
} from "lucide-react";

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

  const gradientPulse = {
    initial: { backgroundPosition: "0% 0%" },
    animate: {
      backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
      transition: {
        duration: 8,
        repeat: Infinity,
        repeatType: "loop" as const,
      },
    },
  };

  const floatAnimation = {
    initial: { y: 0 },
    animate: {
      y: [0, -6, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "loop" as const,
      },
    },
  };

  // Этапы процесса с улучшенными описаниями и иконками
  const processSteps = [
    {
      number: "01",
      title: "Аналитическое исследование",
      description:
        "Проводим глубокий анализ ваших бизнес-процессов, выявляем ключевые точки автоматизации и формируем концепцию чат-бота на основе ваших бизнес-целей.",
      duration: "1-2 недели",
      icon: <LineChart className="w-6 h-6" />,
      secondaryIcon: (
        <MessageSquareText className="w-10 h-10 opacity-10 absolute top-3 right-3" />
      ),
      gradient: "from-blue-500 to-blue-600",
      animationDelay: 0,
    },
    {
      number: "02",
      title: "Проектирование ИИ-диалогов",
      description:
        "Разрабатываем интеллектуальные сценарии коммуникации, проектируем нейронные связи решений и создаем уникальный персонаж чат-бота с адаптивной коммуникационной стратегией.",
      duration: "2-3 недели",
      icon: <Braces className="w-6 h-6" />,
      secondaryIcon: (
        <Layers className="w-10 h-10 opacity-10 absolute top-3 right-3" />
      ),
      gradient: "from-blue-500 to-blue-600",
      animationDelay: 0.2,
    },
    {
      number: "03",
      title: "ML-разработка и обучение",
      description:
        "Применяем передовые технологии машинного обучения, настраиваем трансформерные модели и проводим обучение на специализированных датасетах для максимальной релевантности ответов.",
      duration: "3-5 недель",
      icon: <Cpu className="w-6 h-6" />,
      secondaryIcon: (
        <Code2 className="w-10 h-10 opacity-10 absolute top-3 right-3" />
      ),
      gradient: "from-blue-500 to-blue-600",
      animationDelay: 0.4,
    },
    {
      number: "04",
      title: "Тестирование и оптимизация",
      description:
        "Проводим многоступенчатое тестирование с применением сценарного моделирования, выполняем A/B тесты и оптимизируем алгоритмы для повышения точности и скорости обработки запросов.",
      duration: "1-2 недели",
      icon: <Terminal className="w-6 h-6" />,
      secondaryIcon: (
        <Settings className="w-10 h-10 opacity-10 absolute top-3 right-3" />
      ),
      gradient: "from-blue-500 to-blue-600",
      animationDelay: 0.6,
    },
    {
      number: "05",
      title: "Внедрение и сопровождение",
      description:
        "Запускаем чат-бота в продакшн, обеспечиваем плавную интеграцию в вашу экосистему и предоставляем непрерывный мониторинг с автоматическими улучшениями на основе эксплуатационных данных.",
      duration: "Постоянно",
      icon: <ShieldCheck className="w-6 h-6" />,
      secondaryIcon: (
        <Zap className="w-10 h-10 opacity-10 absolute top-3 right-3" />
      ),
      gradient: "from-blue-500 to-blue-600",
      animationDelay: 0.8,
    },
  ];

  return (
    <section
      id="chatbots-process"
      className="py-20 md:py-28 relative overflow-hidden"
    >
      {/* Улучшенный градиентный фон */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-gray-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 -z-10"></div>

      {/* Декоративные графические элементы */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-200/10 to-blue-300/10 dark:from-blue-500/10 dark:to-blue-600/10 rounded-full blur-3xl -z-5 animate-pulse"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-200/10 to-blue-300/10 dark:from-blue-500/10 dark:to-blue-600/10 rounded-full blur-3xl -z-5 animate-pulse"></div>

      {/* SVG паттерн для фона */}
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
              id="grid-pattern-process"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
              className="text-gray-200 dark:text-gray-800"
            >
              <circle cx="1" cy="1" r="0.7" fill="currentColor" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern-process)" />
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
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-4 bg-gradient-to-r from-blue-500/10 to-blue-600/10 text-blue-600 dark:text-blue-400 border border-blue-200/50 dark:border-blue-700/50 backdrop-blur-sm shadow-sm"
          >
            <div className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-500 dark:bg-blue-600 text-white">
              <Layers className="w-3 h-3" />
            </div>
            Процесс создания
          </motion.div>

          {/* Улучшенный заголовок с 3D-эффектом */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            <span className="relative inline-block">
              <span className="relative z-10">Как мы </span>
            </span>
            <span className="relative inline-block">
              <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-[#0167F3] via-[#2C81F6] to-[#399AFC]">
                создаем интеллектуальных ботов
              </span>
              <span className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500/20 via-blue-400/20 to-blue-500/20 blur-sm -z-10"></span>
            </span>
          </motion.h2>

          {/* Улучшенное описание */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Наш прозрачный и структурированный процесс разработки нейросетевых
            ассистентов обеспечивает превосходные результаты и предсказуемые
            сроки на каждом этапе проекта.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Стильная вертикальная линия с градиентной анимацией */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={gradientPulse}
            className="absolute left-1/2 top-8 bottom-8 w-0.5 bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600 dark:from-blue-500 dark:via-blue-600 dark:to-blue-700 transform -translate-x-1/2 hidden md:block"
            style={{
              backgroundSize: "200% 200%",
            }}
          ></motion.div>

          {/* Этапы процесса с улучшенной визуализацией */}
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              custom={index}
              transition={{ delay: step.animationDelay }}
              className={`relative mb-16 md:mb-24 last:mb-0 ${
                index % 2 === 0
                  ? "md:pr-8 lg:pr-12 md:ml-auto md:mr-[calc(50%+20px)]"
                  : "md:pl-8 lg:pl-12 md:ml-[calc(50%+20px)] md:mr-auto"
              }`}
            >
              <div className="md:max-w-[calc(100%-30px)]">
                {/* Для четных индексов контент слева */}
                {index % 2 === 0 ? (
                  <motion.div
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className={`relative group overflow-hidden ${
                      isDark ? "bg-gray-900/70" : "bg-white"
                    } p-6 md:p-8 rounded-2xl shadow-lg border ${
                      isDark ? "border-gray-800" : "border-gray-100"
                    } transition-all duration-300 hover:shadow-xl hover:border-blue-300/50 dark:hover:border-blue-700/50`}
                  >
                    {/* Градиентный фон при наведении */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/5 dark:from-blue-500/10 dark:to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-5"></div>

                    {/* Мобильная версия */}
                    <div className="md:hidden flex items-center gap-4 mb-5">
                      <motion.div
                        initial="initial"
                        animate="animate"
                        variants={floatAnimation}
                        className={`w-14 h-14 flex-shrink-0 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/20 dark:shadow-blue-500/10`}
                      >
                        {step.number}
                      </motion.div>
                      <div className="flex flex-col">
                        <div className="text-xl font-bold text-gray-900 dark:text-white mb-1.5">
                          {step.title}
                        </div>
                        <div className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 self-start">
                          {step.duration}
                        </div>
                      </div>
                    </div>

                    {/* Десктопная версия - номер и продолжительность */}
                    <div className="hidden md:flex items-center justify-end gap-3 mb-5">
                      <div className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                        {step.duration}
                      </div>
                      <motion.div
                        initial="initial"
                        animate="animate"
                        variants={floatAnimation}
                        className={`w-14 h-14 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/20 dark:shadow-blue-500/10`}
                      >
                        {step.number}
                      </motion.div>
                    </div>

                    {/* Десктопная версия - заголовок и иконка */}
                    <div className="hidden md:flex items-center justify-end gap-3 mb-4">
                      <h4 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                        {step.title}
                      </h4>
                      <div
                        className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br ${step.gradient} text-white shadow-md`}
                      >
                        {step.icon}
                      </div>
                    </div>

                    {/* Описание */}
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed md:text-right">
                      {step.description}
                    </p>

                    {/* Круг на временной линии */}
                    <div className="absolute top-1/2 right-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full transform translate-x-1/2 -translate-y-1/2 border-4 border-white dark:border-gray-900 hidden md:flex items-center justify-center text-white shadow-md">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className={`relative group overflow-hidden ${
                      isDark ? "bg-gray-900/70" : "bg-white"
                    } p-6 md:p-8 rounded-2xl shadow-lg border ${
                      isDark ? "border-gray-800" : "border-gray-100"
                    } transition-all duration-300 hover:shadow-xl hover:border-blue-300/50 dark:hover:border-blue-700/50 md:hidden`}
                  >
                    {/* Градиентный фон при наведении */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/5 dark:from-blue-500/10 dark:to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-5"></div>

                    {/* Мобильная версия */}
                    <div className="flex items-center gap-4 mb-5">
                      <motion.div
                        initial="initial"
                        animate="animate"
                        variants={floatAnimation}
                        className={`w-14 h-14 flex-shrink-0 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/20 dark:shadow-blue-500/10`}
                      >
                        {step.number}
                      </motion.div>
                      <div className="flex flex-col">
                        <div className="text-xl font-bold text-gray-900 dark:text-white mb-1.5">
                          {step.title}
                        </div>
                        <div className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 self-start">
                          {step.duration}
                        </div>
                      </div>
                    </div>

                    {/* Описание */}
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                )}

                {/* Для нечетных индексов контент справа */}
                {index % 2 !== 0 ? (
                  <motion.div
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className={`relative group overflow-hidden ${
                      isDark ? "bg-gray-900/70" : "bg-white"
                    } p-6 md:p-8 rounded-2xl shadow-lg border ${
                      isDark ? "border-gray-800" : "border-gray-100"
                    } transition-all duration-300 hover:shadow-xl hover:border-blue-300/50 dark:hover:border-blue-700/50 hidden md:block`}
                  >
                    {/* Градиентный фон при наведении */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/5 dark:from-blue-500/10 dark:to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-5"></div>

                    {/* Номер с градиентом и продолжительность */}
                    <div className="flex items-center gap-3 mb-5">
                      <motion.div
                        initial="initial"
                        animate="animate"
                        variants={floatAnimation}
                        className={`w-14 h-14 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/20 dark:shadow-blue-500/10`}
                      >
                        {step.number}
                      </motion.div>
                      <div className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                        {step.duration}
                      </div>
                    </div>

                    {/* Заголовок и иконка */}
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br ${step.gradient} text-white shadow-md`}
                      >
                        {step.icon}
                      </div>
                      <h4 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                        {step.title}
                      </h4>
                    </div>

                    {/* Описание */}
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Круг на временной линии */}
                    <div className="absolute top-1/2 left-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full transform -translate-x-1/2 -translate-y-1/2 border-4 border-white dark:border-gray-900 hidden md:flex items-center justify-center text-white shadow-md">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </motion.div>
                ) : (
                  <div className="hidden md:block"></div>
                )}
              </div>
            </motion.div>
          ))}

          {/* Финальный элемент */}
          <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 hidden md:block">
            <motion.div
              initial={{ scale: 0.8, opacity: 0.5 }}
              animate={{
                scale: [0.8, 1.2, 0.8],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/20 dark:shadow-blue-500/10"
            >
              <Zap className="w-6 h-6 text-white" />
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
