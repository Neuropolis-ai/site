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

  // Обновленные этапы процесса с фирменными цветами Neuropolis
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
      gradient: "from-[#0167F3] to-[#399AFC]",
      bgGradient: "from-[#0167F3]/5 via-[#399AFC]/3 to-[#0167F3]/5",
      darkBgGradient: "from-[#0167F3]/10 via-[#399AFC]/8 to-[#0167F3]/10",
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
      gradient: "from-[#0167F3]/90 to-[#399AFC]/90",
      bgGradient: "from-[#0167F3]/5 via-[#399AFC]/3 to-[#0167F3]/5",
      darkBgGradient: "from-[#0167F3]/10 via-[#399AFC]/8 to-[#0167F3]/10",
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
      gradient: "from-[#399AFC]/90 to-[#0167F3]/90",
      bgGradient: "from-[#399AFC]/5 via-[#0167F3]/3 to-[#399AFC]/5",
      darkBgGradient: "from-[#399AFC]/10 via-[#0167F3]/8 to-[#399AFC]/10",
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
      gradient: "from-[#0167F3] to-[#399AFC]",
      bgGradient: "from-[#0167F3]/5 via-[#399AFC]/3 to-[#0167F3]/5",
      darkBgGradient: "from-[#0167F3]/10 via-[#399AFC]/8 to-[#0167F3]/10",
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
      gradient: "from-[#0167F3]/80 to-[#399AFC]/80",
      bgGradient: "from-[#0167F3]/5 via-[#399AFC]/3 to-[#0167F3]/5",
      darkBgGradient: "from-[#0167F3]/10 via-[#399AFC]/8 to-[#0167F3]/10",
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

      {/* Декоративные графические элементы в фирменных цветах */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-[#0167F3]/10 to-[#399AFC]/10 dark:from-[#0167F3]/10 dark:to-[#399AFC]/10 rounded-full blur-3xl -z-5 animate-pulse"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-[#0167F3]/10 to-[#399AFC]/10 dark:from-[#0167F3]/10 dark:to-[#399AFC]/10 rounded-full blur-3xl -z-5 animate-pulse"></div>

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
          {/* Улучшенный бейдж в фирменных цветах */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-4 bg-gradient-to-r from-[#0167F3]/10 to-[#399AFC]/10 text-[#0167F3] dark:text-[#399AFC] border border-[#0167F3]/20 dark:border-[#399AFC]/50 backdrop-blur-sm shadow-sm"
          >
            <div className="flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-br from-[#0167F3] to-[#399AFC] text-white">
              <Layers className="w-3 h-3" />
            </div>
            Процесс создания
          </motion.div>

          {/* Улучшенный заголовок с фирменным градиентом */}
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
              <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-[#0167F3] via-[#2C81F6] to-[#399AFC] dark:from-[#0167F3] dark:via-[#2C81F6] dark:to-[#399AFC]">
                создаем интеллектуальных ботов
              </span>
              <span className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#0167F3]/20 via-[#2C81F6]/20 to-[#399AFC]/20 blur-sm -z-10"></span>
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
          {/* Улучшенная стильная вертикальная линия с фирменным градиентом */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={gradientPulse}
            className="absolute left-1/2 top-8 bottom-8 w-0.5 bg-gradient-to-b from-[#0167F3] via-[#2C81F6] to-[#399AFC] dark:from-[#0167F3] dark:via-[#2C81F6] dark:to-[#399AFC] transform -translate-x-1/2 hidden md:block"
            style={{
              backgroundSize: "200% 200%",
            }}
          ></motion.div>

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
                    } transition-all duration-300 hover:shadow-2xl hover:border-[#0167F3]/50`}
                  >
                    {/* Градиентный фон при наведении */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br dark:bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-5
                      ${isDark ? step.darkBgGradient : step.bgGradient}`}
                    ></div>

                    {/* Декоративные элементы */}
                    <div
                      className={`absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br opacity-10 dark:opacity-20 blur-xl -z-10
                      ${step.gradient}`}
                    ></div>
                    {step.secondaryIcon}

                    {/* Мобильная версия */}
                    <div className="md:hidden flex items-center gap-4 mb-5">
                      <motion.div
                        initial="initial"
                        animate="animate"
                        variants={floatAnimation}
                        className={`w-14 h-14 flex-shrink-0 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-[#0167F3]/20 dark:shadow-[#0167F3]/10`}
                      >
                        {step.number}
                      </motion.div>
                      <div className="flex flex-col">
                        <div className="text-xl font-bold text-gray-900 dark:text-white mb-1.5">
                          {step.title}
                        </div>
                        <div className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs bg-gradient-to-r from-[#0167F3]/10 to-[#399AFC]/10 text-[#0167F3] dark:text-[#399AFC]/70 font-medium">
                          {step.duration}
                        </div>
                      </div>
                    </div>

                    {/* Десктопная версия - номер и продолжительность */}
                    <div className="hidden md:flex items-center justify-end gap-3 mb-5">
                      <div className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs bg-gradient-to-r from-[#0167F3]/10 to-[#399AFC]/10 text-[#0167F3] dark:text-[#399AFC]/70 font-medium">
                        {step.duration}
                      </div>
                      <motion.div
                        initial="initial"
                        animate="animate"
                        variants={floatAnimation}
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-[#0167F3]/20 dark:shadow-[#0167F3]/10`}
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
                    <div className="absolute top-1/2 right-0 w-9 h-9 bg-gradient-to-br from-[#0167F3] to-[#399AFC] rounded-full transform translate-x-1/2 -translate-y-1/2 border-4 border-white dark:border-gray-900 hidden md:flex items-center justify-center text-white shadow-md">
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
                    } transition-all duration-300 hover:shadow-2xl hover:border-[#0167F3]/50 md:hidden`}
                  >
                    {/* Градиентный фон при наведении */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br dark:bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-5
                      ${isDark ? step.darkBgGradient : step.bgGradient}`}
                    ></div>

                    {/* Декоративные элементы */}
                    <div
                      className={`absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br opacity-10 dark:opacity-20 blur-xl -z-10
                      ${step.gradient}`}
                    ></div>
                    {step.secondaryIcon}

                    {/* Мобильная версия */}
                    <div className="flex items-center gap-4 mb-5">
                      <motion.div
                        initial="initial"
                        animate="animate"
                        variants={floatAnimation}
                        className={`w-14 h-14 flex-shrink-0 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-[#0167F3]/20 dark:shadow-[#0167F3]/10`}
                      >
                        {step.number}
                      </motion.div>
                      <div className="flex flex-col">
                        <div className="text-xl font-bold text-gray-900 dark:text-white mb-1.5">
                          {step.title}
                        </div>
                        <div className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs bg-gradient-to-r from-[#0167F3]/10 to-[#399AFC]/10 text-[#0167F3] dark:text-[#399AFC]/70 font-medium">
                          {step.duration}
                        </div>
                      </div>
                    </div>

                    {/* Описание */}
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-medium tracking-wide">
                      {step.description}
                    </p>
                  </motion.div>
                )}

                {/* Для нечетных индексов контент справа - только на десктопе */}
                {index % 2 !== 0 && (
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
                    } transition-all duration-300 hover:shadow-2xl hover:border-[#0167F3]/50 hidden md:block`}
                  >
                    {/* Градиентный фон при наведении */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br dark:bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-5
                      ${isDark ? step.darkBgGradient : step.bgGradient}`}
                    ></div>

                    {/* Декоративные элементы */}
                    <div
                      className={`absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br opacity-10 dark:opacity-20 blur-xl -z-10
                      ${step.gradient}`}
                    ></div>
                    {step.secondaryIcon}

                    {/* Десктоп - номер и продолжительность */}
                    <div className="flex items-center gap-3 mb-5">
                      <motion.div
                        initial="initial"
                        animate="animate"
                        variants={floatAnimation}
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-[#0167F3]/20 dark:shadow-[#0167F3]/10`}
                      >
                        {step.number}
                      </motion.div>
                      <div className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs bg-gradient-to-r from-[#0167F3]/10 to-[#399AFC]/10 text-[#0167F3] dark:text-[#399AFC]/70 font-medium">
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
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-medium tracking-wide">
                      {step.description}
                    </p>

                    {/* Улучшенный круг на временной линии */}
                    <div className="absolute top-1/2 left-0 w-9 h-9 bg-gradient-to-br from-[#0167F3] to-[#399AFC] rounded-full transform -translate-x-1/2 -translate-y-1/2 border-4 border-white dark:border-gray-900 hidden md:flex items-center justify-center text-white shadow-md">
                      <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
