"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { useTheme } from "@/context/ThemeContext";

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
    <section id="workflow-process" className="py-16 md:py-24 relative">
      {/* Градиентный фон */}
      <div
        className={`absolute inset-0 ${
          isDark
            ? "bg-gradient-to-b from-black to-gray-900"
            : "bg-gradient-to-b from-white to-gray-50"
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
            Как мы работаем
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-4"
          >
            Процесс{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA]">
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
          className="space-y-12"
        >
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative grid grid-cols-1 lg:grid-cols-5 gap-6 items-start ${
                index !== processSteps.length - 1
                  ? `after:content-[''] after:absolute after:left-8 after:top-20 after:bottom-0 after:w-0.5 
                    ${
                      isDark
                        ? "after:bg-gradient-to-b after:from-purple-600 after:to-transparent"
                        : "after:bg-gradient-to-b after:from-purple-200 after:to-transparent"
                    } lg:after:hidden`
                  : ""
              }`}
            >
              {/* Номер шага */}
              <div className="col-span-1 flex flex-col items-center lg:items-start">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold relative z-10 ${
                    isDark
                      ? "bg-purple-900/50 text-purple-300 border border-purple-700"
                      : "bg-purple-100 text-purple-700 border border-purple-200"
                  }`}
                >
                  {step.number}
                </div>
              </div>

              {/* Содержимое шага */}
              <div className="col-span-4 lg:col-span-4">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {step.description}
                </p>
                <div
                  className={`grid grid-cols-1 md:grid-cols-2 gap-3 p-4 rounded-lg ${
                    isDark
                      ? "bg-gray-800/50"
                      : "bg-white border border-gray-200"
                  }`}
                >
                  {step.details.map((detail, detailIndex) => (
                    <div
                      key={detailIndex}
                      className="flex items-start space-x-2"
                    >
                      <span className="text-purple-500 mt-1">•</span>
                      <span className="text-gray-600 dark:text-gray-300">
                        {detail}
                      </span>
                    </div>
                  ))}
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
          className="mt-20 text-center"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-semibold text-gray-900 dark:text-white mb-6"
          >
            Результат нашей работы
          </motion.h3>
          <motion.div
            variants={itemVariants}
            className={`max-w-3xl mx-auto p-6 rounded-xl ${
              isDark
                ? "bg-purple-900/20 border border-purple-800/30"
                : "bg-purple-50 border border-purple-100"
            }`}
          >
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Благодаря нашему подходу вы получаете полностью интегрированную
              экосистему бизнес-процессов, где ручная работа минимизирована, а
              ваши сотрудники могут сфокусироваться на действительно важных
              задачах. Автоматизация не только ускоряет рабочие процессы, но и
              существенно снижает количество ошибок, обеспечивает прозрачность и
              предоставляет ценные аналитические данные для стратегического
              планирования.
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
