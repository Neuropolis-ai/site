"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { useTheme } from "@/context/ThemeContext";
import { useState } from "react";
import { FiTarget, FiMessageSquare, FiBarChart, FiSearch, FiEye, FiUsers, FiCheckCircle, FiArrowRight, FiClock, FiDollarSign } from "react-icons/fi";
import Badge from "@/components/ui/Badge";

export default function AIAgentUseCases() {
  const { isDark } = useTheme();
  const [activeTab, setActiveTab] = useState(0);

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

  // Данные о кейсах с цветами сайта
  const useCases = [
    {
      title: "ИИ-Агент для Квалификации Лидов",
      description:
        "Автоматически анализирует входящие заявки, обогащает данные из открытых источников, оценивает потенциал лида и передает самых горячих менеджерам по продажам.",
      stats: [
        { value: "90%", label: "Ускорение реакции" },
        { value: "25%", label: "Рост конверсии" },
        { value: "60%", label: "Экономия времени" },
      ],
      detailedDescription: [
        "Мгновенная обработка и анализ входящих заявок с сайта и других каналов",
        "Автоматическое обогащение профилей лидов данными из открытых источников",
        "Интеллектуальная оценка потенциала и вероятности конверсии",
        "Приоритизация и маршрутизация лидов к подходящим менеджерам"
      ],
      colorBg: "bg-[#0167F3]",
      colorText: "text-[#0167F3]",
      colorLight: "text-[#399AFC]",
      gradientFrom: "from-[#0167F3]",
      gradientTo: "to-[#399AFC]",
      bgDark: "bg-blue-900/30",
      borderDark: "border-blue-800/30",
      bgLight: "bg-blue-50/80",
      borderLight: "border-blue-200",
      icon: <FiTarget className="w-5 h-5" />,
    },
    {
      title: "Автоматизация Клиентской Поддержки",
      description:
        "Отвечает на частые вопросы клиентов 24/7, решает типовые проблемы, маршрутизирует сложные запросы к нужным специалистам, собирает обратную связь.",
      stats: [
        { value: "60%", label: "Снижение нагрузки" },
        { value: "24/7", label: "Доступность" },
        { value: "85%", label: "Удовлетворенность" },
      ],
      detailedDescription: [
        "Мгновенные ответы на типовые вопросы клиентов в любое время суток",
        "Интеллектуальная маршрутизация сложных запросов к профильным специалистам",
        "Автоматический сбор и анализ обратной связи от клиентов",
        "Проактивное информирование о статусе заказов и обращений"
      ],
      colorBg: "bg-[#0167F3]",
      colorText: "text-[#0167F3]",
      colorLight: "text-[#399AFC]",
      gradientFrom: "from-[#0167F3]",
      gradientTo: "to-[#399AFC]",
      bgDark: "bg-blue-900/30",
      borderDark: "border-blue-800/30",
      bgLight: "bg-blue-50/80",
      borderLight: "border-blue-200",
      icon: <FiMessageSquare className="w-5 h-5" />,
    },
    {
      title: "Интеллектуальный Анализ Отчетов",
      description:
        "Автоматически собирает данные из разных источников (Excel, базы данных, API), формирует сводные отчеты, выявляет аномалии и ключевые тренды.",
      stats: [
        { value: "70%", label: "Экономия времени" },
        { value: "95%", label: "Точность анализа" },
        { value: "3x", label: "Скорость обработки" },
      ],
      detailedDescription: [
        "Автоматический сбор и консолидация данных из разрозненных источников",
        "Интеллектуальное выявление аномалий, трендов и скрытых закономерностей",
        "Генерация наглядных интерактивных отчетов и дашбордов",
        "Предиктивная аналитика для прогнозирования ключевых показателей"
      ],
      colorBg: "bg-[#0167F3]",
      colorText: "text-[#0167F3]",
      colorLight: "text-[#399AFC]",
      gradientFrom: "from-[#0167F3]",
      gradientTo: "to-[#399AFC]",
      bgDark: "bg-blue-900/30",
      borderDark: "border-blue-800/30",
      bgLight: "bg-blue-50/80",
      borderLight: "border-blue-200",
      icon: <FiBarChart className="w-5 h-5" />,
    },
    {
      title: "Мониторинг и Анализ Конкурентов",
      description:
        "Автоматически отслеживает цены, акции, новости и упоминания конкурентов в сети, предоставляя сводные отчеты для принятия стратегических решений.",
      stats: [
        { value: "24/7", label: "Постоянный мониторинг" },
        { value: "85%", label: "Полнота данных" },
        { value: "40%", label: "Рост конкурентоспособности" },
      ],
      detailedDescription: [
        "Непрерывный мониторинг цен, акций и ассортимента конкурентов",
        "Анализ упоминаний конкурентов в СМИ, соцсетях и отзывах",
        "Выявление новых игроков на рынке и изменений в стратегиях конкурентов",
        "Формирование рекомендаций по корректировке собственной стратегии"
      ],
      colorBg: "bg-[#0167F3]",
      colorText: "text-[#0167F3]",
      colorLight: "text-[#399AFC]",
      gradientFrom: "from-[#0167F3]",
      gradientTo: "to-[#399AFC]",
      bgDark: "bg-blue-900/30",
      borderDark: "border-blue-800/30",
      bgLight: "bg-blue-50/80",
      borderLight: "border-blue-200",
      icon: <FiEye className="w-5 h-5" />,
    },
    {
      title: "Автоматизация HR-Процессов",
      description:
        "Помогает в скрининге резюме, назначении собеседований, онбординге новых сотрудников, ответах на типовые вопросы персонала.",
      stats: [
        { value: "75%", label: "Ускорение найма" },
        { value: "50%", label: "Снижение нагрузки на HR" },
        { value: "90%", label: "Улучшение онбординга" },
      ],
      detailedDescription: [
        "Интеллектуальный скрининг и ранжирование резюме кандидатов",
        "Автоматизация рутинных задач по организации собеседований",
        "Персонализированный онбординг новых сотрудников",
        "Круглосуточная поддержка персонала по вопросам HR и корпоративных политик"
      ],
      colorBg: "bg-[#0167F3]",
      colorText: "text-[#0167F3]",
      colorLight: "text-[#399AFC]",
      gradientFrom: "from-[#0167F3]",
      gradientTo: "to-[#399AFC]",
      bgDark: "bg-blue-900/30",
      borderDark: "border-blue-800/30",
      bgLight: "bg-blue-50/80",
      borderLight: "border-blue-200",
      icon: <FiUsers className="w-5 h-5" />,
    },
    {
      title: "Оптимизация Поиска Информации",
      description:
        "Создает умную систему поиска по внутренним документам, базам знаний и корпоративным ресурсам, обеспечивая мгновенный доступ к нужной информации.",
      stats: [
        { value: "80%", label: "Экономия времени" },
        { value: "95%", label: "Точность поиска" },
        { value: "5x", label: "Ускорение доступа" },
      ],
      detailedDescription: [
        "Семантический поиск по всем корпоративным источникам данных",
        "Интеллектуальное ранжирование результатов по релевантности",
        "Автоматическое извлечение ключевой информации из документов",
        "Персонализация результатов поиска с учетом роли и задач пользователя"
      ],
      colorBg: "bg-[#0167F3]",
      colorText: "text-[#0167F3]",
      colorLight: "text-[#399AFC]",
      gradientFrom: "from-[#0167F3]",
      gradientTo: "to-[#399AFC]",
      bgDark: "bg-blue-900/30",
      borderDark: "border-blue-800/30",
      bgLight: "bg-blue-50/80",
      borderLight: "border-blue-200",
      icon: <FiSearch className="w-5 h-5" />,
    },
  ];

  const getTabClassName = (index: number): string => {
    if (activeTab === index) {
      return `${useCases[index].colorBg} text-white shadow-lg ${
        isDark ? "shadow-blue-900/30" : "shadow-blue-500/30"
      }`;
    }
    return isDark
      ? "bg-gray-800/80 backdrop-blur-sm text-gray-300 hover:bg-gray-800 border border-gray-700 hover:border-blue-800/30"
      : "bg-white/90 backdrop-blur-sm text-gray-700 hover:bg-blue-50 border border-gray-200 hover:border-blue-200";
  };

  const getStatClassName = (index: number): string => {
    return isDark
      ? `${useCases[activeTab].bgDark} border ${useCases[activeTab].borderDark} backdrop-blur-sm`
      : `${useCases[activeTab].bgLight} border ${useCases[activeTab].borderLight}`;
  };

  return (
    <section
      id="ai-agent-cases"
      className="py-20 md:py-24 relative overflow-hidden"
    >
      {/* Градиентный фон */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50/80 dark:from-gray-950 dark:to-blue-950/10 -z-10"></div>

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
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-gradient-to-br from-blue-200/30 to-blue-400/30 dark:from-blue-500/10 dark:to-blue-700/10 rounded-full blur-3xl -z-5"></div>
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-gradient-to-tr from-blue-200/30 to-blue-400/30 dark:from-blue-500/10 dark:to-blue-700/10 rounded-full blur-3xl -z-5"></div>

      {/* Анимированные элементы */}
      <motion.div
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        className="absolute top-[35%] left-[10%] w-14 h-14 bg-blue-400/20 dark:bg-blue-600/30 rounded-full backdrop-blur-md z-0"
      ></motion.div>
      <motion.div
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        className="absolute bottom-[25%] right-[7%] w-20 h-20 bg-blue-400/20 dark:bg-blue-600/30 rounded-full backdrop-blur-md z-0"
        style={{ animationDelay: "1.5s" }}
      ></motion.div>

      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-14"
        >
          <motion.div variants={itemVariants}>
            <Badge>Примеры использования</Badge>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Где ИИ-Агенты{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0167F3] to-[#399AFC]">
              Усилят
            </span>{" "}
            Ваш Бизнес?
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Исследуйте возможности интеллектуальной автоматизации для вашей
            компании с помощью передовых ИИ-агентов
          </motion.p>
        </motion.div>

        {/* Табы для переключения между кейсами */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 px-4 sm:px-0">
            {useCases.map((useCase, index) => (
              <motion.button
                key={index}
                variants={itemVariants}
                onClick={() => setActiveTab(index)}
                whileHover={{
                  y: -2,
                  transition: { duration: 0.2 },
                }}
                className={`px-4 py-3 sm:py-2.5 rounded-lg text-sm font-medium transition-all w-full sm:w-auto ${getTabClassName(
                  index
                )}`}
              >
                <div className="flex items-center justify-start gap-2">
                  <div className="flex items-center justify-center">
                    {useCase.icon}
                  </div>
                  <span className="translate-y-[1px]">{useCase.title}</span>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Контент активного кейса */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`rounded-xl overflow-hidden shadow-lg ${
            isDark
              ? "bg-gray-800/50 border border-gray-700 shadow-blue-900/10"
              : "bg-white/90 backdrop-blur-sm border border-gray-200 shadow-blue-200/30"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
            {/* Левая колонка - Текст */}
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center 
                  ${
                    isDark
                      ? `bg-gradient-to-br ${useCases[activeTab].gradientFrom}/20 ${useCases[activeTab].gradientTo}/20 ${useCases[activeTab].colorLight}`
                      : `bg-gradient-to-br ${useCases[activeTab].gradientFrom}/10 ${useCases[activeTab].gradientTo}/10 ${useCases[activeTab].colorText}`
                  }`}
                >
                  {useCases[activeTab].icon}
                </div>
                <h3
                  className={`text-xl md:text-2xl font-semibold ${useCases[activeTab].colorText}`}
                >
                  {useCases[activeTab].title}
                </h3>
              </div>

              <div className="mb-8">
                <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                  {useCases[activeTab].description}
                </p>
              </div>

              {/* Статистика */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {useCases[activeTab].stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                    className={`p-4 rounded-lg backdrop-blur-sm ${getStatClassName(
                      index
                    )} transition-all duration-300`}
                  >
                    <div
                      className={`text-2xl md:text-3xl font-bold ${useCases[activeTab].colorText} mb-1`}
                    >
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Детали реализации */}
              <div
                className={`p-5 rounded-lg backdrop-blur-sm ${
                  isDark
                    ? `${useCases[activeTab].bgDark} border ${useCases[activeTab].borderDark}`
                    : `${useCases[activeTab].bgLight} border ${useCases[activeTab].borderLight}`
                }`}
              >
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                  Ключевые интеграции
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span
                      className={`${useCases[activeTab].colorText} bg-blue-100 dark:bg-blue-900/40 p-1 rounded-full flex-shrink-0`}
                    >
                      <FiCheckCircle className="w-4 h-4" />
                    </span>
                    <span className="text-gray-600 dark:text-gray-300 translate-y-[1px]">
                      Интеграция с CRM-системой для централизованного управления
                      данными
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span
                      className={`${useCases[activeTab].colorText} bg-blue-100 dark:bg-blue-900/40 p-1 rounded-full flex-shrink-0`}
                    >
                      <FiCheckCircle className="w-4 h-4" />
                    </span>
                    <span className="text-gray-600 dark:text-gray-300 translate-y-[1px]">
                      Автоматическая синхронизация данных между всеми
                      платформами
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span
                      className={`${useCases[activeTab].colorText} bg-blue-100 dark:bg-blue-900/40 p-1 rounded-full flex-shrink-0`}
                    >
                      <FiCheckCircle className="w-4 h-4" />
                    </span>
                    <span className="text-gray-600 dark:text-gray-300 translate-y-[1px]">
                      Аналитическая панель для отслеживания ключевых показателей
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Правая колонка - Подробное описание процесса автоматизации */}
            <div
              className={`${
                isDark ? "bg-gray-800/70" : "bg-blue-50/50"
              } p-6 md:p-8 flex flex-col justify-center`}
            >
              <div className="mb-5">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <span className="inline-block p-1.5 rounded-lg bg-blue-500/20 dark:bg-blue-400/20">
                    <FiClock className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </span>
                  <span className="translate-y-[1px]">Как работает ИИ-агент</span>
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-base">
                  Внедрение ИИ-агентов позволяет автоматизировать сложные бизнес-процессы, 
                  повышая эффективность работы и качество обслуживания клиентов.
                </p>
              </div>
              
              {/* Подробное описание процесса */}
              <div className="space-y-5">
                {useCases[activeTab].detailedDescription.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center">
                      {index === 0 && <FiUsers className="w-4 h-4 text-blue-600 dark:text-blue-400" />}
                      {index === 1 && <FiBarChart className="w-4 h-4 text-blue-600 dark:text-blue-400" />}
                      {index === 2 && <FiClock className="w-4 h-4 text-blue-600 dark:text-blue-400" />}
                      {index === 3 && <FiDollarSign className="w-4 h-4 text-blue-600 dark:text-blue-400" />}
                    </div>
                    <div>
                      <p className="text-gray-700 dark:text-gray-300 translate-y-[1px]">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Преимущества */}
              <div className="mt-8 p-4 rounded-lg bg-white/70 dark:bg-gray-800/70 border border-blue-100 dark:border-blue-800/30">
                <h5 className="font-medium text-gray-900 dark:text-white mb-3">
                  Ключевые преимущества
                </h5>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2">
                    <FiCheckCircle className="text-blue-600 dark:text-blue-400 w-4 h-4 flex-shrink-0" />
                    <span className="text-sm text-gray-600 dark:text-gray-300 translate-y-[1px]">Экономия времени</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiCheckCircle className="text-blue-600 dark:text-blue-400 w-4 h-4 flex-shrink-0" />
                    <span className="text-sm text-gray-600 dark:text-gray-300 translate-y-[1px]">Снижение ошибок</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiCheckCircle className="text-blue-600 dark:text-blue-400 w-4 h-4 flex-shrink-0" />
                    <span className="text-sm text-gray-600 dark:text-gray-300 translate-y-[1px]">Масштабируемость</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiCheckCircle className="text-blue-600 dark:text-blue-400 w-4 h-4 flex-shrink-0" />
                    <span className="text-sm text-gray-600 dark:text-gray-300 translate-y-[1px]">Круглосуточная работа</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Призыв к действию */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <motion.div variants={itemVariants} className="inline-flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-5 sm:px-6 py-3 rounded-lg bg-gradient-to-r from-[#0167F3] to-[#399AFC] text-white font-medium shadow-lg shadow-blue-500/20 dark:shadow-blue-600/20 flex items-center justify-center gap-2 w-full sm:w-auto"
              href="#contact"
            >
              <span>Обсудить ваш проект</span>
              <FiArrowRight className="w-4 h-4" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-5 sm:px-6 py-3 rounded-lg border border-blue-300 dark:border-blue-700 text-blue-600 dark:text-blue-400 font-medium w-full sm:w-auto"
              href="#ai-agent-solution"
            >
              Узнать больше
            </motion.a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
