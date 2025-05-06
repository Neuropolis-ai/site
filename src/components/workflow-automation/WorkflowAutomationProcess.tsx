"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { useTheme } from "@/context/ThemeContext";
import {
  FiCheckCircle,
  FiClock,
  FiCode,
  FiDatabase,
  FiUsers,
  FiSettings,
  FiServer,
} from "react-icons/fi";

export default function WorkflowAutomationProcess() {
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

  const lineVariants = {
    hidden: { height: 0 },
    visible: {
      height: "100%",
      transition: { duration: 1.5, ease: "easeInOut" },
    },
  };

  // Иконки для шагов
  const stepIcons = [
    <FiDatabase key="1" />,
    <FiSettings key="2" />,
    <FiCode key="3" />,
    <FiCheckCircle key="4" />,
    <FiUsers key="5" />,
    <FiServer key="6" />,
  ];

  // Этапы процесса интеграции и автоматизации
  const processSteps = [
    {
      number: "01",
      title: "Анализ бизнес-процессов",
      description:
        "Изучаем ваши существующие рабочие процессы, выявляем узкие места и определяем задачи, которые можно автоматизировать для достижения максимальной эффективности.",
      details: [
        "Интервью с ключевыми сотрудниками",
        "Аудит используемых систем и инструментов",
        "Картирование процессов и потоков данных",
        "Выявление приоритетных задач для автоматизации",
      ],
    },
    {
      number: "02",
      title: "Разработка стратегии автоматизации",
      description:
        "Создаем детальный план внедрения автоматизации, включающий выбор технологических решений, определение необходимых интеграций и оценку ресурсов.",
      details: [
        "Проектирование архитектуры решения",
        "Выбор инструментов и платформ",
        "Расчет ROI от внедрения автоматизации",
        "Формирование дорожной карты проекта",
      ],
    },
    {
      number: "03",
      title: "Разработка и интеграция",
      description:
        "Разрабатываем решение по автоматизации, настраиваем необходимые интеграции между системами и обеспечиваем бесперебойную передачу данных.",
      details: [
        "Настройка API-интеграций",
        "Создание автоматизированных рабочих процессов",
        "Разработка пользовательских интерфейсов",
        "Интеграция с существующими системами",
      ],
    },
    {
      number: "04",
      title: "Тестирование и оптимизация",
      description:
        "Тщательно тестируем все компоненты автоматизированной системы и оптимизируем ее работу для достижения максимальной производительности.",
      details: [
        "Функциональное тестирование",
        "Стресс-тестирование под нагрузкой",
        "Проверка безопасности данных",
        "Оптимизация производительности",
      ],
    },
    {
      number: "05",
      title: "Внедрение и обучение",
      description:
        "Запускаем автоматизированные процессы в работу и проводим обучение ваших сотрудников для эффективного использования новой системы.",
      details: [
        "Поэтапное внедрение решения",
        "Проведение тренингов для персонала",
        "Подготовка документации и инструкций",
        "Сопровождение на начальном этапе использования",
      ],
    },
    {
      number: "06",
      title: "Поддержка и развитие",
      description:
        "Обеспечиваем постоянную поддержку внедренного решения, мониторинг его работы и дальнейшее развитие с учетом меняющихся потребностей бизнеса.",
      details: [
        "Техническая поддержка 24/7",
        "Мониторинг работоспособности системы",
        "Анализ эффективности и KPI",
        "Регулярные обновления и улучшения",
      ],
    },
  ];

  return (
    <section
      id="workflow-process"
      className="py-16 md:py-24 relative overflow-hidden"
    >
      {/* Градиентный фон */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/10 dark:to-gray-900 -z-10"></div>

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
        className="absolute top-[25%] right-[10%] w-12 h-12 bg-blue-400/20 dark:bg-blue-600/30 rounded-full backdrop-blur-md z-0"
      ></motion.div>
      <motion.div
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        className="absolute bottom-[30%] left-[8%] w-16 h-16 bg-sky-400/20 dark:bg-sky-600/30 rounded-full backdrop-blur-md z-0"
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
            Как мы работаем
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-4 tracking-tight"
          >
            Процесс{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-sky-400">
              внедрения автоматизации
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Мы следуем структурированному подходу к автоматизации рабочих
            процессов, обеспечивая плавный переход и максимальную эффективность
            внедрения.
          </motion.p>
        </motion.div>

        {/* Шаги процесса */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="relative"
        >
          {/* Центральная вертикальная линия для десктопа */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2">
            <motion.div
              variants={lineVariants}
              className="h-full w-full bg-gradient-to-b from-blue-400 via-blue-500 to-sky-400"
            ></motion.div>
          </div>

          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative mb-20 last:mb-0 ${
                index % 2 === 0 ? "lg:pr-[50%] lg:text-right" : "lg:pl-[50%]"
              }`}
            >
              {/* Вертикальная линия для мобильной версии */}
              {index !== processSteps.length - 1 && (
                <div className="lg:hidden absolute left-8 top-20 bottom-0 w-0.5">
                  <motion.div
                    variants={lineVariants}
                    className="h-full w-full bg-gradient-to-b from-blue-400 to-transparent"
                  ></motion.div>
                </div>
              )}

              {/* Блок шага */}
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                {/* Номер и иконка шага */}
                <div
                  className={`flex ${
                    index % 2 === 0 ? "lg:justify-end" : "lg:order-1"
                  }`}
                >
                  <div className="relative">
                    {/* Круг с номером */}
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold relative z-10
                      bg-gradient-to-br from-blue-500 to-sky-400 text-white shadow-lg
                      ${isDark ? "shadow-blue-500/20" : "shadow-blue-500/30"}`}
                    >
                      {step.number}
                    </div>

                    {/* Иконка */}
                    <div
                      className={`absolute -bottom-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center
                      bg-white dark:bg-gray-800 text-blue-500 dark:text-blue-400 shadow-md border border-blue-100 dark:border-blue-900`}
                    >
                      {stepIcons[index]}
                    </div>

                    {/* Соединительная линия для десктопа */}
                    <div
                      className={`hidden lg:block absolute top-1/2 w-[50px] h-0.5 bg-gradient-to-r from-blue-500 to-sky-400
                      ${index % 2 === 0 ? "left-full" : "right-full"}`}
                    ></div>
                  </div>
                </div>

                {/* Содержимое шага */}
                <div
                  className={`flex-1 ${index % 2 === 0 ? "" : "lg:order-0"}`}
                >
                  <motion.div
                    whileHover={{
                      y: -5,
                      transition: { duration: 0.3 },
                      boxShadow: isDark
                        ? "0 10px 30px rgba(30, 64, 175, 0.2)"
                        : "0 10px 30px rgba(59, 130, 246, 0.15)",
                    }}
                    className={`p-6 rounded-xl transition-all ${
                      isDark
                        ? "bg-gray-800/50 backdrop-blur-sm border border-gray-700"
                        : "bg-white border border-gray-200 hover:border-blue-200"
                    }`}
                  >
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {step.description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {step.details.map((detail, detailIndex) => (
                        <div
                          key={detailIndex}
                          className="flex items-start space-x-2"
                        >
                          <div className="mt-1.5 w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-sky-400 flex-shrink-0"></div>
                          <span className="text-gray-600 dark:text-gray-300">
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Результаты */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-24 text-center"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-semibold text-gray-900 dark:text-white mb-6"
          >
            Результат нашей работы
          </motion.h3>
          <motion.div
            variants={itemVariants}
            whileHover={{
              y: -5,
              transition: { duration: 0.3 },
              boxShadow: isDark
                ? "0 20px 40px rgba(30, 64, 175, 0.2)"
                : "0 20px 40px rgba(59, 130, 246, 0.15)",
            }}
            className={`max-w-4xl mx-auto p-8 rounded-xl transition-all ${
              isDark
                ? "bg-gradient-to-br from-blue-900/30 to-blue-800/20 backdrop-blur-sm border border-blue-800/30"
                : "bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-100"
            }`}
          >
            <div className="flex flex-col items-center mb-5">
              <div className="w-20 h-20 mb-5 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-sky-400 shadow-xl shadow-blue-500/20">
                <FiClock className="w-10 h-10 text-white" />
              </div>
              <div className="h-0.5 w-24 bg-gradient-to-r from-blue-500 to-sky-400"></div>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Благодаря нашему подходу вы получаете полностью интегрированную
              экосистему бизнес-процессов, где ручная работа минимизирована, а
              ваши сотрудники могут сфокусироваться на действительно важных
              задачах. Автоматизация не только ускоряет рабочие процессы, но и
              существенно снижает количество ошибок, обеспечивает прозрачность и
              предоставляет ценные аналитические данные для стратегического
              планирования.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
                <span className="font-semibold">+40%</span>
                <span>продуктивности</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
                <span className="font-semibold">-60%</span>
                <span>ручных операций</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
                <span className="font-semibold">24/7</span>
                <span>автоматизированная работа</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
