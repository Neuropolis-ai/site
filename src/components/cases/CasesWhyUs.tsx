"use client";

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
  FiDatabase,
  FiSettings,
} from "react-icons/fi";
import Badge from "@/components/ui/Badge";
import Image from "next/image";

export default function CasesWhyUs() {
  const { theme } = useTheme();
  const isDark = theme !== "light";
  const [activeAdvantage, setActiveAdvantage] = useState(0);

  // Преимущества компании в формате, похожем на use cases
  const companyAdvantages = [
    {
      title: "Глубокий анализ бизнес-задач",
      description:
        "Мы детально анализируем ваши бизнес-процессы, выявляем ключевые проблемы и определяем, как ИИ-решения могут максимально эффективно их решить. Такой подход позволяет создавать целевые решения, которые приносят конкретные измеримые результаты.",
      features: [
        { icon: <FiTarget />, label: "Бизнес-ориентированный подход", description: "Фокус на достижении конкретных бизнес-целей" },
        { icon: <FiUsers />, label: "Глубокое погружение в процессы", description: "Детальное изучение специфики бизнеса" },
        { icon: <FiTrendingUp />, label: "Измеримые результаты", description: "Чёткие KPI и метрики успеха проекта" },
      ],
      detailedDescription: [
        "Комплексный аудит текущих бизнес-процессов и болевых точек",
        "Определение ключевых метрик эффективности для каждого проекта",
        "Разработка стратегии внедрения ИИ с учетом особенностей бизнеса",
        "Прогнозирование ROI и сроков достижения результатов"
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
      icon: <FiAward />,
    },
    {
      title: "Передовые ИИ-инструменты",
      description:
        "В каждом проекте мы используем самые современные технологии искусственного интеллекта, тщательно подбирая оптимальные инструменты под конкретные задачи. Это позволяет достигать высокой точности, эффективности и производительности ИИ-решений.",
      stats: [
        { value: "99.2%", label: "Точность решений" },
        { value: "5-10x", label: "Рост эффективности" },
        { value: "24/7", label: "Непрерывная работа" },
      ],
      detailedDescription: [
        "Использование продвинутых языковых моделей для обработки естественного языка",
        "Применение технологий машинного обучения для предиктивной аналитики",
        "Внедрение алгоритмов компьютерного зрения в релевантных проектах",
        "Оптимизация архитектуры решений под конкретные бизнес-задачи"
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
      icon: <FiCode />,
    },
    {
      title: "Отраслевая экспертиза",
      description:
        "Наша команда включает специалистов с опытом работы в различных отраслях, что позволяет нам глубоко понимать специфику бизнеса клиентов и создавать решения, учитывающие уникальные требования каждой индустрии.",
      stats: [
        { value: "12+", label: "Отраслей" },
        { value: "85+", label: "Реализованных проектов" },
        { value: "95%", label: "Довольных клиентов" },
      ],
      detailedDescription: [
        "Специализированные решения для финансового сектора, ритейла, производства и других отраслей",
        "Учет отраслевых регуляторных требований и стандартов",
        "Использование накопленного опыта для быстрого старта новых проектов",
        "Постоянное изучение лучших практик и инноваций в каждой отрасли"
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
      icon: <FiLayers />,
    },
    {
      title: "Комплексная поддержка",
      description:
        "Мы обеспечиваем полный цикл сопровождения внедренных ИИ-решений, включая техническую поддержку, обучение персонала, мониторинг эффективности и постоянное совершенствование решений на основе обратной связи и новых данных.",
      stats: [
        { value: "24/7", label: "Техническая поддержка" },
        { value: "100%", label: "Обучение команды" },
        { value: "30 дней", label: "Бесплатное сопровождение" },
      ],
      detailedDescription: [
        "Круглосуточная техническая поддержка внедренных решений",
        "Комплексное обучение сотрудников работе с новыми ИИ-инструментами",
        "Регулярный анализ эффективности решений и их оптимизация",
        "Масштабирование успешных решений на другие подразделения компании"
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
      icon: <FiLifeBuoy />,
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
      id="cases-why-us"
      className="py-20 md:py-24 relative overflow-hidden"
    >
      {/* Статический градиентный фон */}
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

      <Container>
        <div className="text-center mb-14">
          <div>
            {/* eslint-disable-next-line */}
            <Badge children="Наш подход" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Как мы создаем{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0167F3] to-[#399AFC]">
              успешные ИИ-проекты
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mx-auto">
            Наш подход к разработке ИИ-решений основан на глубоком понимании бизнес-процессов, 
            использовании передовых технологий и обеспечении измеримых результатов 
            для каждого проекта.
          </p>
        </div>

        {/* Табы для переключения между преимуществами */}
        <div className="mb-10">
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 px-4 sm:px-0">
            {companyAdvantages.map((advantage, index) => (
              <button
                key={index}
                onClick={() => setActiveAdvantage(index)}
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
              </button>
            ))}
          </div>
        </div>

        {/* Контент активного преимущества */}
        <div
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
                  {companyAdvantages[0].features?.map((feature, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg backdrop-blur-sm ${getStatClassName(index)} transition-all duration-300`}
                    >
                      <div className="flex items-center gap-3">
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
                    </div>
                  ))}
                </div>
              ) : (
                // Статистика для остальных блоков
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  {companyAdvantages[activeAdvantage].stats?.map((stat, index) => (
                    <div
                      key={index}
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
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Правая колонка - Подробное описание преимущества */}
            <div
              className={`${
                isDark ? "bg-gray-800/70" : "bg-blue-50/50"
              } p-6 md:p-8 flex flex-col justify-center`}
            >
              <div className="mb-5">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <span className="inline-block p-1.5 rounded-lg bg-blue-500/20 dark:bg-blue-400/20 text-blue-600 dark:text-blue-400">
                    <FiBookOpen />
                  </span>
                  <span className="translate-y-[1px]">Преимущества для бизнеса</span>
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-base">
                  {activeAdvantage === 0 
                    ? "Наш подход к проектам позволяет создавать ИИ-решения, которые действительно работают и приносят ощутимую пользу бизнесу. Мы фокусируемся не на технологиях ради технологий, а на достижении конкретных бизнес-целей."
                    : `Благодаря нашему опыту в ${companyAdvantages[activeAdvantage].title.toLowerCase()}, мы помогаем компаниям из разных отраслей получать максимальную отдачу от инвестиций в ИИ, внедряя решения, которые реально работают.`
                  }
                </p>
              </div>
              
              {/* Подробное описание преимущества */}
              <div className="space-y-5">
                {companyAdvantages[activeAdvantage].detailedDescription.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                      {index === 0 && <FiUsers />}
                      {index === 1 && <FiGitBranch />}
                      {index === 2 && <FiHeadphones />}
                      {index === 3 && <FiBarChart />}
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
                  {activeAdvantage === 0 ? "Результаты, которых мы достигаем:" : "Ключевые результаты"}
                </h5>
                {activeAdvantage === 0 ? (
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2">
                      <span className="text-blue-600 dark:text-blue-400">
                        <FiTrendingUp />
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-300 translate-y-[1px]">Повышение эффективности процессов до 5-10 раз</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-600 dark:text-blue-400">
                        <FiClock />
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-300 translate-y-[1px]">Сокращение времени на рутинные операции на 70-90%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-600 dark:text-blue-400">
                        <FiUsers />
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-300 translate-y-[1px]">Улучшение качества обслуживания клиентов на 40-60%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-600 dark:text-blue-400">
                        <FiDollarSign />
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-300 translate-y-[1px]">Снижение операционных затрат на 30-50%</span>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2">
                      <span className="text-blue-600 dark:text-blue-400">
                        <FiTrendingUp />
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-300 translate-y-[1px]">Повышение эффективности бизнеса</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-600 dark:text-blue-400">
                        <FiClock />
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-300 translate-y-[1px]">Ускорение бизнес-процессов</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-600 dark:text-blue-400">
                        <FiDollarSign />
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-300 translate-y-[1px]">Снижение операционных затрат</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-600 dark:text-blue-400">
                        <FiCheckCircle />
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-300 translate-y-[1px]">Быстрая окупаемость инвестиций</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Призыв к действию */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <a
              className="px-5 sm:px-6 py-3 rounded-lg bg-gradient-to-r from-[#0167F3] to-[#399AFC] text-white font-medium shadow-lg shadow-blue-500/20 dark:shadow-blue-600/20 flex items-center justify-center gap-2 w-full sm:w-auto"
              href="/contact"
            >
              <span>Обсудить ваш проект</span>
              <FiArrowRight />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
} 