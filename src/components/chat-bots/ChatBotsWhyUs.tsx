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
  FiMessageSquare,
} from "react-icons/fi";
import Badge from "@/components/ui/Badge";
import Image from "next/image";

export default function ChatBotsWhyUs() {
  const { theme } = useTheme();
  const isDark = theme !== "light";
  const [activeAdvantage, setActiveAdvantage] = useState(0);

  // Преимущества компании в формате, похожем на use cases
  const companyAdvantages = [
    {
      title: "Подход, создающий ценность",
      description:
        "Мы не просто разрабатываем чат-ботов — мы думаем как предприниматели и создаём решения, которые работают на рост вашего бизнеса. Вместо формального внедрения интеллектуальных ассистентов мы начинаем с бизнес-задач, вникаем в контекст и подбираем индивидуальный путь к результату.",
      features: [
        { icon: <FiTarget className="w-4 h-4" />, label: "Практический опыт в бизнес-решениях", description: "Создаём решения, которые приносят реальный эффект" },
        { icon: <FiUsers className="w-4 h-4" />, label: "Индивидуальный подход к каждому проекту", description: "Глубокое погружение в задачи клиента" },
        { icon: <FiTrendingUp className="w-4 h-4" />, label: "Рост и развитие вместе с клиентами", description: "Строим долгосрочные отношения и ценность" },
      ],
      detailedDescription: [
        "Погружение в бизнес-контекст и цели",
        "Совместная проработка сценариев и гипотез",
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
      title: "Индивидуальные решения",
      description:
        "Каждый чат-бот разрабатывается с учетом специфики вашего бизнеса, целевой аудитории и конкретных бизнес-процессов. Мы не используем шаблонные решения – ваш бот будет уникальным инструментом, максимально адаптированным под ваши потребности.",
      stats: [
        { value: "100%", label: "Индивидуальная настройка" },
        { value: "85%", label: "Точность распознавания" },
        { value: "24/7", label: "Непрерывная работа" },
      ],
      detailedDescription: [
        "Анализ бизнес-процессов и сценариев общения",
        "Настройка персонализированных диалоговых сценариев",
        "Адаптация под корпоративный стиль и тон коммуникации",
        "Интеграция с вашими бизнес-системами"
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
      title: "Современные технологии",
      description:
        "Наши чат-боты используют передовые технологии искусственного интеллекта и машинного обучения. Мы применяем современные языковые модели, которые обеспечивают естественное общение и высокую точность понимания запросов пользователей на разных языках.",
      stats: [
        { value: "GPT", label: "Передовые языковые модели" },
        { value: "NLP", label: "Обработка естественного языка" },
        { value: "ML", label: "Самообучающиеся алгоритмы" },
      ],
      detailedDescription: [
        "Использование современных языковых моделей",
        "Понимание контекста и поддержание диалога",
        "Постоянное обучение на основе новых данных",
        "Многоязычная поддержка и распознавание речи"
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
      title: "Полный цикл разработки",
      description:
        "Мы предоставляем комплексные услуги: от анализа потребностей и проектирования диалоговых сценариев до разработки, интеграции, тестирования и дальнейшей поддержки. После запуска мы помогаем улучшать бота на основе обратной связи от пользователей.",
      stats: [
        { value: "24/7", label: "Техническая поддержка" },
        { value: "100%", label: "Сопровождение проекта" },
        { value: "95%", label: "Удовлетворенность клиентов" },
      ],
      detailedDescription: [
        "Детальный анализ потребностей и проектирование",
        "Разработка и интеграция с существующими системами",
        "Тщательное тестирование и обучение персонала",
        "Мониторинг, анализ и постоянное улучшение"
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
      id="chatbots-why-us"
      className="py-20 pb-10 md:py-24 md:pb-12 relative overflow-hidden"
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
            <Badge>Почему мы</Badge>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Почему клиенты выбирают{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0167F3] to-[#399AFC]">
              Нейрополис
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Мы создаём умных чат-ботов, которые не просто отвечают на вопросы, но и решают бизнес-задачи, 
            повышая эффективность коммуникации с клиентами и оптимизируя внутренние процессы.
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
                  className={`text-xl md:text-2xl font-semibold ${
                    isDark ? "text-white" : companyAdvantages[activeAdvantage].colorText
                  }`}
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
                      <li className="flex items-center gap-3">
                        <span
                          className={`${companyAdvantages[activeAdvantage].colorText} bg-blue-100 dark:bg-blue-900/40 p-1 rounded-full flex-shrink-0`}
                        >
                          <FiCheckCircle className="w-4 h-4" />
                        </span>
                        <span className="text-gray-600 dark:text-gray-300 translate-y-[1px]">
                          Понимание целей бизнеса, а не только технических задач
                        </span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span
                          className={`${companyAdvantages[activeAdvantage].colorText} bg-blue-100 dark:bg-blue-900/40 p-1 rounded-full flex-shrink-0`}
                        >
                          <FiCheckCircle className="w-4 h-4" />
                        </span>
                        <span className="text-gray-600 dark:text-gray-300 translate-y-[1px]">
                          Гибкие решения, адаптируемые под изменения
                        </span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span
                          className={`${companyAdvantages[activeAdvantage].colorText} bg-blue-100 dark:bg-blue-900/40 p-1 rounded-full flex-shrink-0`}
                        >
                          <FiCheckCircle className="w-4 h-4" />
                        </span>
                        <span className="text-gray-600 dark:text-gray-300 translate-y-[1px]">
                          Эволюция бота вместе с вашим бизнесом
                        </span>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="flex items-center gap-3">
                        <span
                          className={`${companyAdvantages[activeAdvantage].colorText} bg-blue-100 dark:bg-blue-900/40 p-1 rounded-full flex-shrink-0`}
                        >
                          <FiCheckCircle className="w-4 h-4" />
                        </span>
                        <span className="text-gray-600 dark:text-gray-300 translate-y-[1px]">
                          Проверенные методологии и подходы к разработке чат-ботов
                        </span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span
                          className={`${companyAdvantages[activeAdvantage].colorText} bg-blue-100 dark:bg-blue-900/40 p-1 rounded-full flex-shrink-0`}
                        >
                          <FiCheckCircle className="w-4 h-4" />
                        </span>
                        <span className="text-gray-600 dark:text-gray-300 translate-y-[1px]">
                          Гибкость интерфейса и возможность адаптации под изменения
                        </span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span
                          className={`${companyAdvantages[activeAdvantage].colorText} bg-blue-100 dark:bg-blue-900/40 p-1 rounded-full flex-shrink-0`}
                        >
                          <FiCheckCircle className="w-4 h-4" />
                        </span>
                        <span className="text-gray-600 dark:text-gray-300 translate-y-[1px]">
                          Непрерывное обучение и улучшение чат-бота
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
                    ? "Наш подход — это не просто чат-бот ради технологии, а инструмент для создания стратегических преимуществ. Мы работаем с бизнесом как партнёры, создавая решения, которые масштабируются и адаптируются вместе с вами."
                    : `Наш подход к ${companyAdvantages[activeAdvantage].title.toLowerCase()} обеспечивает не только эффективную коммуникацию, но и создает долгосрочную ценность для вашей компании через интеллектуальную автоматизацию и стратегическое партнерство.`
                  }
                </p>
              </div>
              
              {/* Подробное описание преимущества */}
              <div className="space-y-5">
                {companyAdvantages[activeAdvantage].detailedDescription.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center">
                      {index === 0 && <FiUsers className="w-4 h-4 text-blue-600 dark:text-blue-400" />}
                      {index === 1 && <FiMessageSquare className="w-4 h-4 text-blue-600 dark:text-blue-400" />}
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
                      <span className="text-sm text-gray-600 dark:text-gray-300 translate-y-[1px]">Сокращение времени обслуживания клиентов</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiUsers className="text-blue-600 dark:text-blue-400 w-4 h-4 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-300 translate-y-[1px]">Чат-бот, понятный вашим клиентам</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiMessageSquare className="text-blue-600 dark:text-blue-400 w-4 h-4 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-300 translate-y-[1px]">Интеллектуальное распознавание запросов</span>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2">
                      <FiTrendingUp className="text-blue-600 dark:text-blue-400 w-4 h-4 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-300 translate-y-[1px]">Улучшение клиентского опыта</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiClock className="text-blue-600 dark:text-blue-400 w-4 h-4 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-300 translate-y-[1px]">Круглосуточное обслуживание</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiDollarSign className="text-blue-600 dark:text-blue-400 w-4 h-4 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-300 translate-y-[1px]">Сокращение операционных затрат</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiCheckCircle className="text-blue-600 dark:text-blue-400 w-4 h-4 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-300 translate-y-[1px]">Повышение конверсии</span>
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
              href="#chatbots-contact"
            >
              <span>Обсудить ваш проект</span>
              <FiArrowRight className="w-4 h-4" />
            </a>
            <a
              className="px-5 sm:px-6 py-3 rounded-lg border border-blue-300 dark:border-blue-700 text-blue-600 dark:text-blue-400 font-medium w-full sm:w-auto"
              href="#chatbots-process"
            >
              Узнать о процессе разработки
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
} 