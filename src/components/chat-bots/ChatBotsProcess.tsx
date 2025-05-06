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
  Sparkles,
  Settings2,
  ShieldCheck,
  Code,
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

  // Улучшенные этапы процесса с новыми градиентами и иконками
  const processSteps = [
    {
      number: "01",
      title: "Аналитическое исследование",
      description:
        "Проводим глубокий анализ ваших бизнес-процессов, выявляем ключевые точки автоматизации и формируем концепцию чат-бота на основе ваших бизнес-целей.",
      duration: "1-2 недели",
      icon: <LineChart className="w-6 h-6" strokeWidth={2.5} />,
      secondaryIcon: (
        <Sparkles className="w-14 h-14 opacity-10 absolute top-2 right-2" />
      ),
      gradient: "from-indigo-500 to-violet-600",
      bgGradient: "from-indigo-50/10 via-violet-50/5 to-indigo-50/10",
      darkBgGradient: "from-indigo-950/20 via-violet-950/15 to-indigo-950/20",
      animationDelay: 0,
    },
    {
      number: "02",
      title: "Проектирование ИИ-диалогов",
      description:
        "Разрабатываем интеллектуальные сценарии коммуникации, проектируем нейронные связи решений и создаем уникальный персонаж чат-бота с адаптивной коммуникационной стратегией.",
      duration: "2-3 недели",
      icon: <Braces className="w-6 h-6" strokeWidth={2.5} />,
      secondaryIcon: (
        <Layers className="w-14 h-14 opacity-10 absolute top-2 right-2" />
      ),
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50/10 via-cyan-50/5 to-blue-50/10",
      darkBgGradient: "from-blue-950/20 via-cyan-950/15 to-blue-950/20",
      animationDelay: 0.2,
    },
    {
      number: "03",
      title: "ML-разработка и обучение",
      description:
        "Применяем передовые технологии машинного обучения, настраиваем трансформерные модели и проводим обучение на специализированных датасетах для максимальной релевантности ответов.",
      duration: "3-5 недель",
      icon: <Cpu className="w-6 h-6" strokeWidth={2.5} />,
      secondaryIcon: (
        <Code className="w-14 h-14 opacity-10 absolute top-2 right-2" />
      ),
      gradient: "from-teal-500 to-emerald-500",
      bgGradient: "from-teal-50/10 via-emerald-50/5 to-teal-50/10",
      darkBgGradient: "from-teal-950/20 via-emerald-950/15 to-teal-950/20",
      animationDelay: 0.4,
    },
    {
      number: "04",
      title: "Тестирование и оптимизация",
      description:
        "Проводим многоступенчатое тестирование с применением сценарного моделирования, выполняем A/B тесты и оптимизируем алгоритмы для повышения точности и скорости обработки запросов.",
      duration: "1-2 недели",
      icon: <Code2 className="w-6 h-6" strokeWidth={2.5} />,
      secondaryIcon: (
        <Settings2 className="w-14 h-14 opacity-10 absolute top-2 right-2" />
      ),
      gradient: "from-amber-500 to-orange-500",
      bgGradient: "from-amber-50/10 via-orange-50/5 to-amber-50/10",
      darkBgGradient: "from-amber-950/20 via-orange-950/15 to-amber-950/20",
      animationDelay: 0.6,
    },
    {
      number: "05",
      title: "Внедрение и сопровождение",
      description:
        "Запускаем чат-бота в продакшн, обеспечиваем плавную интеграцию в вашу экосистему и предоставляем непрерывный мониторинг с автоматическими улучшениями на основе эксплуатационных данных.",
      duration: "Постоянно",
      icon: <ShieldCheck className="w-6 h-6" strokeWidth={2.5} />,
      secondaryIcon: (
        <Zap className="w-14 h-14 opacity-10 absolute top-2 right-2" />
      ),
      gradient: "from-fuchsia-500 to-pink-600",
      bgGradient: "from-fuchsia-50/10 via-pink-50/5 to-fuchsia-50/10",
      darkBgGradient: "from-fuchsia-950/20 via-pink-950/15 to-fuchsia-950/20",
      animationDelay: 0.8,
    },
  ];

  return (
    <section
      id="chatbots-process"
      className="py-20 md:py-28 relative overflow-hidden"
    >
      {/* Улучшенный градиентный фон с коническим градиентом */}
      <div className="absolute inset-0 bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-white via-gray-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 -z-10"></div>

      {/* Декоративные графические элементы */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-200/10 to-indigo-300/10 dark:from-blue-500/10 dark:to-indigo-600/10 rounded-full blur-3xl -z-5 animate-pulse"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-violet-200/10 to-fuchsia-300/10 dark:from-violet-500/10 dark:to-fuchsia-600/10 rounded-full blur-3xl -z-5 animate-pulse"></div>

      {/* Современный SVG паттерн для фона */}
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
              width="8"
              height="8"
              patternUnits="userSpaceOnUse"
              className="text-gray-200 dark:text-gray-800"
            >
              <path
                d="M0 0L8 8M8 0L0 8"
                stroke="currentColor"
                strokeWidth="0.5"
                fill="none"
                opacity="0.3"
              />
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
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-4 bg-gradient-to-r from-indigo-500/10 to-violet-600/10 text-indigo-600 dark:text-indigo-400 border border-indigo-200/50 dark:border-indigo-700/50 backdrop-blur-sm shadow-sm"
          >
            <div className="flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 text-white">
              <Layers className="w-3 h-3" />
            </div>
            Процесс создания
          </motion.div>

          {/* Улучшенный заголовок с 3D-эффектом и современным градиентом */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            <span className="relative inline-block">
              <span className="relative z-10 text-gray-900 dark:text-white">
                Как мы{" "}
              </span>
            </span>
            <span className="relative inline-block">
              <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-blue-600 to-violet-600 dark:from-indigo-400 dark:via-blue-400 dark:to-violet-400">
                создаем интеллектуальных ботов
              </span>
              <span className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-indigo-500/20 via-blue-400/20 to-violet-500/20 blur-sm -z-10"></span>
            </span>
          </motion.h2>

          {/* Улучшенное описание с более современным шрифтом */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-light tracking-wide"
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
          {/* Улучшенная стильная вертикальная линия с градиентом цепи */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={gradientPulse}
            className="absolute left-1/2 top-8 bottom-8 w-0.5 bg-gradient-to-b from-indigo-500 via-blue-500 to-violet-600 dark:from-indigo-500 dark:via-blue-600 dark:to-violet-700 transform -translate-x-1/2 hidden md:block"
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
                    whileHover={{
                      y: -5,
                      scale: 1.01,
                      transition: { duration: 0.2 },
                    }}
                    className={`relative group overflow-hidden ${
                      isDark ? "bg-gray-900/60" : "bg-white/80"
                    } backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-xl border ${
                      isDark ? "border-gray-800/50" : "border-gray-100/50"
                    } transition-all duration-300 hover:shadow-2xl hover:border-${step.gradient
                      .split(" ")[1]
                      .replace("to-", "")}/50`}
                  >
                    {/* Градиентный фон при наведении */}
                    <div
                      className="absolute inset-0 bg-gradient-to-br dark:bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-5
                      ${isDark ? step.darkBgGradient : step.bgGradient}"
                    ></div>

                    {/* Декоративные элементы */}
                    <div
                      className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br opacity-10 dark:opacity-20 blur-xl -z-10
                      ${step.gradient}"
                    ></div>
                    {step.secondaryIcon}

                    {/* Мобильная версия */}
                    <div className="md:hidden flex items-center gap-4 mb-5">
                      <motion.div
                        initial="initial"
                        animate="animate"
                        variants={floatAnimation}
                        className={`w-14 h-14 flex-shrink-0 rounded-2xl bg-gradient-to-br ${
                          step.gradient
                        } flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-${step.gradient
                          .split(" ")[1]
                          .replace("to-", "")}/20 dark:shadow-${step.gradient
                          .split(" ")[1]
                          .replace("to-", "")}/10`}
                      >
                        {step.number}
                      </motion.div>
                      <div className="flex flex-col">
                        <div className="text-xl font-bold text-gray-900 dark:text-white mb-1.5">
                          {step.title}
                        </div>
                        <div className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs bg-gradient-to-r from-${step.gradient.split(' ')[0].replace('from-', '')}/10 to-${step.gradient.split(' ')[1].replace('to-', '')}/10 text-${step.gradient.split(' ')[1].replace('to-', '')}/90 dark:text-${step.gradient.split(' ')[1].replace('to-', '')}/70 font-medium">
                          {step.duration}
                        </div>
                      </div>
                    </div>

                    {/* Десктопная версия - номер и продолжительность */}
                    <div className="hidden md:flex items-center justify-end gap-3 mb-5">
                      <div className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs bg-gradient-to-r from-${step.gradient.split(' ')[0].replace('from-', '')}/10 to-${step.gradient.split(' ')[1].replace('to-', '')}/10 text-${step.gradient.split(' ')[1].replace('to-', '')}/90 dark:text-${step.gradient.split(' ')[1].replace('to-', '')}/70 font-medium">
                        {step.duration}
                      </div>
                      <motion.div
                        initial="initial"
                        animate="animate"
                        variants={floatAnimation}
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${
                          step.gradient
                        } flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-${step.gradient
                          .split(" ")[1]
                          .replace("to-", "")}/20 dark:shadow-${step.gradient
                          .split(" ")[1]
                          .replace("to-", "")}/10`}
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
                        className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br ${step.gradient} text-white shadow-lg`}
                      >
                        {step.icon}
                      </div>
                    </div>

                    {/* Описание */}
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed md:text-right font-medium tracking-wide">
                      {step.description}
                    </p>

                    {/* Улучшенный круг на временной линии */}
                    <div className="absolute top-1/2 right-0 w-9 h-9 bg-gradient-to-br ${step.gradient} rounded-full transform translate-x-1/2 -translate-y-1/2 border-4 border-white dark:border-gray-900 hidden md:flex items-center justify-center text-white shadow-md">
                      <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    whileHover={{
                      y: -5,
                      scale: 1.01,
                      transition: { duration: 0.2 },
                    }}
                    className={`relative group overflow-hidden ${
                      isDark ? "bg-gray-900/60" : "bg-white/80"
                    } backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-xl border ${
                      isDark ? "border-gray-800/50" : "border-gray-100/50"
                    } transition-all duration-300 hover:shadow-2xl hover:border-${step.gradient
                      .split(" ")[1]
                      .replace("to-", "")}/50 md:hidden`}
                  >
                    {/* Градиентный фон при наведении */}
                    <div
                      className="absolute inset-0 bg-gradient-to-br dark:bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-5
                      ${isDark ? step.darkBgGradient : step.bgGradient}"
                    ></div>

                    {/* Декоративные элементы */}
                    <div
                      className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br opacity-10 dark:opacity-20 blur-xl -z-10
                      ${step.gradient}"
                    ></div>
                    {step.secondaryIcon}

                    {/* Мобильная версия */}
                    <div className="flex items-center gap-4 mb-5">
                      <motion.div
                        initial="initial"
                        animate="animate"
                        variants={floatAnimation}
                        className={`w-14 h-14 flex-shrink-0 rounded-2xl bg-gradient-to-br ${
                          step.gradient
                        } flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-${step.gradient
                          .split(" ")[1]
                          .replace("to-", "")}/20 dark:shadow-${step.gradient
                          .split(" ")[1]
                          .replace("to-", "")}/10`}
                      >
                        {step.number}
                      </motion.div>
                      <div className="flex flex-col">
                        <div className="text-xl font-bold text-gray-900 dark:text-white mb-1.5">
                          {step.title}
                        </div>
                        <div className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs bg-gradient-to-r from-${step.gradient.split(' ')[0].replace('from-', '')}/10 to-${step.gradient.split(' ')[1].replace('to-', '')}/10 text-${step.gradient.split(' ')[1].replace('to-', '')}/90 dark:text-${step.gradient.split(' ')[1].replace('to-', '')}/70 font-medium">
                          {step.duration}
                        </div>
                      </div>
                    </div>

                    {/* Описание */}
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed font-medium tracking-wide">
                      {step.description}
                    </p>
                  </motion.div>
                )}

                {/* Для нечетных индексов контент справа */}
                {index % 2 !== 0 ? (
                  <motion.div
                    whileHover={{
                      y: -5,
                      scale: 1.01,
                      transition: { duration: 0.2 },
                    }}
                    className={`relative group overflow-hidden ${
                      isDark ? "bg-gray-900/60" : "bg-white/80"
                    } backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-xl border ${
                      isDark ? "border-gray-800/50" : "border-gray-100/50"
                    } transition-all duration-300 hover:shadow-2xl hover:border-${step.gradient
                      .split(" ")[1]
                      .replace("to-", "")}/50 hidden md:block`}
                  >
                    {/* Градиентный фон при наведении */}
                    <div
                      className="absolute inset-0 bg-gradient-to-br dark:bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-5
                      ${isDark ? step.darkBgGradient : step.bgGradient}"
                    ></div>

                    {/* Декоративные элементы */}
                    <div
                      className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-gradient-to-br opacity-10 dark:opacity-20 blur-xl -z-10
                      ${step.gradient}"
                    ></div>
                    {step.secondaryIcon}

                    {/* Номер с градиентом и продолжительность */}
                    <div className="flex items-center gap-3 mb-5">
                      <motion.div
                        initial="initial"
                        animate="animate"
                        variants={floatAnimation}
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${
                          step.gradient
                        } flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-${step.gradient
                          .split(" ")[1]
                          .replace("to-", "")}/20 dark:shadow-${step.gradient
                          .split(" ")[1]
                          .replace("to-", "")}/10`}
                      >
                        {step.number}
                      </motion.div>
                      <div className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs bg-gradient-to-r from-${step.gradient.split(' ')[0].replace('from-', '')}/10 to-${step.gradient.split(' ')[1].replace('to-', '')}/10 text-${step.gradient.split(' ')[1].replace('to-', '')}/90 dark:text-${step.gradient.split(' ')[1].replace('to-', '')}/70 font-medium">
                        {step.duration}
                      </div>
                    </div>

                    {/* Заголовок и иконка */}
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br ${step.gradient} text-white shadow-lg`}
                      >
                        {step.icon}
                      </div>
                      <h4 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                        {step.title}
                      </h4>
                    </div>

                    {/* Описание */}
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed font-medium tracking-wide">
                      {step.description}
                    </p>

                    {/* Улучшенный круг на временной линии */}
                    <div className="absolute top-1/2 left-0 w-9 h-9 bg-gradient-to-br ${step.gradient} rounded-full transform -translate-x-1/2 -translate-y-1/2 border-4 border-white dark:border-gray-900 hidden md:flex items-center justify-center text-white shadow-md">
                      <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
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
              className="w-14 h-14 bg-gradient-to-br from-indigo-500 via-blue-600 to-violet-600 rounded-full flex items-center justify-center shadow-lg shadow-indigo-500/20 dark:shadow-indigo-500/10"
            >
              <Zap className="w-7 h-7 text-white" strokeWidth={2.5} />
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
