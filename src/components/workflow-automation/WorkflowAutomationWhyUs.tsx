"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { useTheme } from "@/context/ThemeContext";
import { useState } from "react";
import {
  FiCheckCircle,
  FiAward,
  FiUsers,
  FiCode,
  FiLifeBuoy,
  FiTrendingUp,
  FiBarChart,
  FiClock,
  FiDollarSign,
  FiBookOpen,
  FiHeadphones,
  FiGitBranch,
  FiArrowRight,
  FiTarget,
  FiLayers,
} from "react-icons/fi";
import Badge from "@/components/ui/Badge";
import Image from "next/image";

export default function WorkflowAutomationWhyUs() {
  const { theme } = useTheme();
  const isDark = theme !== "light";
  const [activeAdvantage, setActiveAdvantage] = useState(0);

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

  // Преимущества компании в формате, похожем на use cases
  const companyAdvantages = [
    {
      title: "Подход, создающий ценность",
      description:
        "Мы не просто внедряем технологии — мы думаем как предприниматели и создаём решения, которые работают на рост вашего бизнеса. Вместо формального внедрения автоматизации мы начинаем с бизнес-задач, вникаем в контекст и подбираем индивидуальный путь к результату.",
      features: [
        { icon: <FiTarget className="w-4 h-4" />, label: "Практический опыт в бизнес-решениях", description: "Создаём решения, которые приносят реальный эффект" },
        { icon: <FiUsers className="w-4 h-4" />, label: "Индивидуальный подход к каждому проекту", description: "Глубокое погружение в задачи клиента" },
        { icon: <FiTrendingUp className="w-4 h-4" />, label: "Рост и развитие вместе с клиентами", description: "Строим долгосрочные отношения и ценность" },
      ],
      detailedDescription: [
        "Погружение в бизнес-контекст и цели",
        "Совместная проработка решений и гипотез",
        "Гибкая архитектура под рост и изменения",
        "Быстрый запуск, постепенное масштабирование"
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
      icon: <FiAward className="w-5 h-5" />,
    },
    {
      title: "Индивидуальный подход",
      description:
        "Мы не используем шаблонные решения. Каждый проект начинается с тщательного анализа бизнес-процессов клиента для создания уникального решения, которое идеально подойдет именно вашему бизнесу, учитывая его особенности и требования.",
      stats: [
        { value: "100%", label: "Индивидуальных решений" },
        { value: "3x", label: "Рост эффективности" },
        { value: "60%", label: "Экономия ресурсов" },
      ],
      detailedDescription: [
        "Предпроектный анализ и аудит текущих процессов",
        "Адаптация решения под бизнес-модель клиента",
        "Учет существующей IT-инфраструктуры и интеграция с ней",
        "Масштабируемость для будущего роста компании"
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
      title: "Инновационные технологии",
      description:
        "Мы применяем передовые технологии искусственного интеллекта, машинного обучения и облачных вычислений, чтобы создавать прогрессивные решения, которые не просто автоматизируют процессы, но и позволяют бизнесу развиваться в условиях цифровой трансформации.",
      stats: [
        { value: "AI", label: "Искусственный интеллект" },
        { value: "ML", label: "Машинное обучение" },
        { value: "API", label: "Первый подход к разработке" },
      ],
      detailedDescription: [
        "Нейросети для автоматического распознавания и обработки данных",
        "Предиктивная аналитика для прогнозирования бизнес-трендов",
        "Облачная инфраструктура для гибкого масштабирования",
        "Автоматизированное тестирование для обеспечения надежности"
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
      icon: <FiCode className="w-5 h-5" />,
    },
    {
      title: "Полный цикл услуг",
      description:
        "Мы предоставляем комплексное обслуживание: от анализа и разработки стратегии автоматизации до внедрения, обучения персонала и оказания последующей технической поддержки. Наша многоуровневая система позволяет обеспечить бесперебойную работу всех внедренных решений.",
      stats: [
        { value: "24/7", label: "Техническая поддержка" },
        { value: "100%", label: "Покрытие жизненного цикла" },
        { value: "90%", label: "SLA выполнения запросов" },
      ],
      detailedDescription: [
        "Детальный аудит и планирование автоматизации",
        "Профессиональная разработка и внедрение решений",
        "Комплексное обучение персонала компании-клиента",
        "Многоуровневая система технической поддержки"
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
      icon: <FiLifeBuoy className="w-5 h-5" />,
    },
  ];

  const getTabClassName = (index: number): string => {
    if (activeAdvantage === index) {
      return `${companyAdvantages[index].colorBg} text-white shadow-lg ${
        isDark ? "shadow-blue-900/30" : "shadow-blue-500/30"
      }`;
    }
    return isDark
      ? "bg-gray-800/80 backdrop-blur-sm text-gray-300 hover:bg-gray-800 border border-gray-700 hover:border-blue-800/30"
      : "bg-white/90 backdrop-blur-sm text-gray-700 hover:bg-blue-50 border border-gray-200 hover:border-blue-200";
  };

  const getStatClassName = (index: number): string => {
    return isDark
      ? `${companyAdvantages[activeAdvantage].bgDark} border ${companyAdvantages[activeAdvantage].borderDark} backdrop-blur-sm`
      : `${companyAdvantages[activeAdvantage].bgLight} border ${companyAdvantages[activeAdvantage].borderLight}`;
  };

  return (
    <section
      id="workflow-why-us"
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
            <Badge>Почему мы</Badge>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Почему клиенты выбирают{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0167F3] to-[#399AFC]">
              Нейрополис
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Мы создаём интеллектуальные системы автоматизации, которые не просто оптимизируют процессы, 
            но и обеспечивают конкурентное преимущество вашему бизнесу в эпоху цифровой трансформации.
          </motion.p>
        </motion.div>

        {/* Табы для переключения между преимуществами */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 px-4 sm:px-0">
            {companyAdvantages.map((advantage, index) => (
              <motion.button
                key={index}
                variants={itemVariants}
                onClick={() => setActiveAdvantage(index)}
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
                    {advantage.icon}
                  </div>
                  <span className="translate-y-[1px]">{advantage.title}</span>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Контент активного преимущества */}
        <motion.div
          key={activeAdvantage}
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
                      ? `bg-gradient-to-br ${companyAdvantages[activeAdvantage].gradientFrom}/20 ${companyAdvantages[activeAdvantage].gradientTo}/20 ${companyAdvantages[activeAdvantage].colorLight}`
                      : `bg-gradient-to-br ${companyAdvantages[activeAdvantage].gradientFrom}/10 ${companyAdvantages[activeAdvantage].gradientTo}/10 ${companyAdvantages[activeAdvantage].colorText}`
                  }`}
                >
                  {companyAdvantages[activeAdvantage].icon}
                </div>
                <h3
                  className={`text-xl md:text-2xl font-semibold ${companyAdvantages[activeAdvantage].colorText}`}
                >
                  {companyAdvantages[activeAdvantage].title}
                </h3>
              </div>

              <div className="mb-8">
                <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                  {companyAdvantages[activeAdvantage].description}
                </p>
              </div>

              {activeAdvantage === 0 ? (
                // Новые карточки для первого блока
                <div className="grid grid-cols-1 gap-4 mb-8">
                  {companyAdvantages[0].features.map((feature, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -2, transition: { duration: 0.2 } }}
                      className={`p-4 rounded-lg backdrop-blur-sm ${getStatClassName(index)} transition-all duration-300`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`flex-shrink-0 p-2 rounded-lg bg-blue-100 dark:bg-blue-900/40 ${companyAdvantages[activeAdvantage].colorText}`}>
                          {feature.icon}
                        </div>
                        <div>
                          <div className={`font-semibold mb-1 ${companyAdvantages[activeAdvantage].colorText}`}>
                            {feature.label}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            {feature.description}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                // Статистика для остальных блоков
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  {companyAdvantages[activeAdvantage].stats?.map((stat, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -3, transition: { duration: 0.2 } }}
                      className={`p-4 rounded-lg backdrop-blur-sm ${getStatClassName(
                        index
                      )} transition-all duration-300`}
                    >
                      <div
                        className={`text-2xl md:text-3xl font-bold ${companyAdvantages[activeAdvantage].colorText} mb-1`}
                      >
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Дополнительная информация */}
              <div
                className={`p-5 rounded-lg backdrop-blur-sm ${
                  isDark
                    ? `${companyAdvantages[activeAdvantage].bgDark} border ${companyAdvantages[activeAdvantage].borderDark}`
                    : `${companyAdvantages[activeAdvantage].bgLight} border ${companyAdvantages[activeAdvantage].borderLight}`
                }`}
              >
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                  {activeAdvantage === 0 ? "Ключевые особенности подхода" : "Ключевые особенности"}
                </h4>
                <ul className="space-y-3">
                  {activeAdvantage === 0 ? (
                    <>
                      <li className="flex items-start gap-3">
                        <span
                          className={`${companyAdvantages[activeAdvantage].colorText} bg-blue-100 dark:bg-blue-900/40 p-1 rounded-full flex-shrink-0`}
                        >
                          <FiCheckCircle className="w-4 h-4" />
                        </span>
                        <span className="text-gray-600 dark:text-gray-300 translate-y-[1px]">
                          Понимание целей бизнеса, а не только технических задач
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span
                          className={`${companyAdvantages[activeAdvantage].colorText} bg-blue-100 dark:bg-blue-900/40 p-1 rounded-full flex-shrink-0`}
                        >
                          <FiCheckCircle className="w-4 h-4" />
                        </span>
                        <span className="text-gray-600 dark:text-gray-300 translate-y-[1px]">
                          Гибкие решения, адаптируемые под изменения
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span
                          className={`${companyAdvantages[activeAdvantage].colorText} bg-blue-100 dark:bg-blue-900/40 p-1 rounded-full flex-shrink-0`}
                        >
                          <FiCheckCircle className="w-4 h-4" />
                        </span>
                        <span className="text-gray-600 dark:text-gray-300 translate-y-[1px]">
                          Эволюция продукта вместе с вашим бизнесом
                        </span>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="flex items-start gap-3">
                        <span
                          className={`${companyAdvantages[activeAdvantage].colorText} bg-blue-100 dark:bg-blue-900/40 p-1 rounded-full flex-shrink-0`}
                        >
                          <FiCheckCircle className="w-4 h-4" />
                        </span>
                        <span className="text-gray-600 dark:text-gray-300 translate-y-[1px]">
                          Проверенные методологии и подходы к автоматизации
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span
                          className={`${companyAdvantages[activeAdvantage].colorText} bg-blue-100 dark:bg-blue-900/40 p-1 rounded-full flex-shrink-0`}
                        >
                          <FiCheckCircle className="w-4 h-4" />
                        </span>
                        <span className="text-gray-600 dark:text-gray-300 translate-y-[1px]">
                          Гибкость решений и возможность адаптации под изменения
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span
                          className={`${companyAdvantages[activeAdvantage].colorText} bg-blue-100 dark:bg-blue-900/40 p-1 rounded-full flex-shrink-0`}
                        >
                          <FiCheckCircle className="w-4 h-4" />
                        </span>
                        <span className="text-gray-600 dark:text-gray-300 translate-y-[1px]">
                          Непрерывная поддержка и развитие внедренных систем
                        </span>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>

            {/* Правая колонка - Подробное описание преимущества */}
            <div
              className={`${
                isDark ? "bg-gray-800/70" : "bg-blue-50/50"
              } p-6 md:p-8 flex flex-col justify-center`}
            >
              <div className="mb-5">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <span className="inline-block p-1.5 rounded-lg bg-blue-500/20 dark:bg-blue-400/20">
                    <FiBookOpen className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </span>
                  <span className="translate-y-[1px]">Что это означает для вашего бизнеса</span>
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-base">
                  {activeAdvantage === 0 
                    ? "Наш подход — это не просто автоматизация ради технологии, а инструмент для создания стратегических преимуществ. Мы работаем с бизнесом как партнёры, создавая решения, которые масштабируются и адаптируются вместе с вами."
                    : `Наш подход к ${companyAdvantages[activeAdvantage].title.toLowerCase()} обеспечивает не только эффективную автоматизацию, но и создает долгосрочную ценность для вашей компании через инновационные решения и стратегическое партнерство.`
                  }
                </p>
              </div>
              
              {/* Подробное описание преимущества */}
              <div className="space-y-5">
                {companyAdvantages[activeAdvantage].detailedDescription.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center">
                      {index === 0 && <FiUsers className="w-4 h-4 text-blue-600 dark:text-blue-400" />}
                      {index === 1 && <FiGitBranch className="w-4 h-4 text-blue-600 dark:text-blue-400" />}
                      {index === 2 && <FiHeadphones className="w-4 h-4 text-blue-600 dark:text-blue-400" />}
                      {index === 3 && <FiBarChart className="w-4 h-4 text-blue-600 dark:text-blue-400" />}
                    </div>
                    <div>
                      <p className="text-gray-700 dark:text-gray-300 translate-y-[1px]">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Бизнес-результаты */}
              <div className="mt-8 p-4 rounded-lg bg-white/70 dark:bg-gray-800/70 border border-blue-100 dark:border-blue-800/30">
                <h5 className="font-medium text-gray-900 dark:text-white mb-3">
                  {activeAdvantage === 0 ? "Что вы получаете:" : "Ключевые результаты"}
                </h5>
                {activeAdvantage === 0 ? (
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2">
                      <FiTrendingUp className="text-blue-600 dark:text-blue-400 w-4 h-4 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-300 translate-y-[1px]">Решения, которые работают на рост прибыли</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiClock className="text-blue-600 dark:text-blue-400 w-4 h-4 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-300 translate-y-[1px]">Уменьшение операционной нагрузки</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiUsers className="text-blue-600 dark:text-blue-400 w-4 h-4 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-300 translate-y-[1px]">Продукт, понятный вашей команде</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiLayers className="text-blue-600 dark:text-blue-400 w-4 h-4 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-300 translate-y-[1px]">Технологический фундамент под масштабирование</span>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2">
                      <FiTrendingUp className="text-blue-600 dark:text-blue-400 w-4 h-4 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-300 translate-y-[1px]">Повышение производительности</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiClock className="text-blue-600 dark:text-blue-400 w-4 h-4 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-300 translate-y-[1px]">Сокращение временных затрат</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiDollarSign className="text-blue-600 dark:text-blue-400 w-4 h-4 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-300 translate-y-[1px]">Оптимизация расходов</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiCheckCircle className="text-blue-600 dark:text-blue-400 w-4 h-4 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-300 translate-y-[1px]">Повышение качества</span>
                    </div>
                  </div>
                )}
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
              href="#workflow-process"
            >
              Узнать о процессе внедрения
            </motion.a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
