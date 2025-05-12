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
  FiMessageSquare,
  FiArrowRight,
  FiTarget,
  FiLayers,
} from "react-icons/fi";
import Badge from "@/components/ui/Badge";

export default function ChatBotsWhyUs() {
  const { theme } = useTheme();
  const isDark = theme !== "light";
  const [activeAdvantage, setActiveAdvantage] = useState(0);

  // Преимущества компании в формате, похожем на use cases
  const companyAdvantages = [
    {
      title: "Экспертиза в разработке",
      description:
        "Мы специализируемся на разработке интеллектуальных чат-ботов более 5 лет и создали десятки успешных решений для различных отраслей. Наша команда включает экспертов в области NLP, машинного обучения и разработки конверсационных интерфейсов.",
      features: [
        { icon: <FiTarget className="w-4 h-4" />, label: "Опыт более 5 лет в разработке чат-ботов", description: "Десятки реализованных проектов в разных отраслях" },
        { icon: <FiUsers className="w-4 h-4" />, label: "Команда NLP-специалистов", description: "Эксперты в области обработки естественного языка" },
        { icon: <FiTrendingUp className="w-4 h-4" />, label: "Постоянное развитие технологий", description: "Внедрение новейших моделей и алгоритмов" },
      ],
      detailedDescription: [
        "Экспертиза в обработке естественного языка",
        "Опыт интеграции с корпоративными системами",
        "Разработка чат-ботов для различных платформ",
        "Глубокое понимание пользовательского опыта"
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

              {/* Кейсы использования или статистика */}
              {activeAdvantage === 0 ? (
                <div className="grid grid-cols-1 gap-4">
                  {companyAdvantages[activeAdvantage].features?.map(
                    (feature, idx) => (
                      <div
                        key={idx}
                        className={`p-4 rounded-lg ${
                          isDark
                            ? "bg-gray-800 border border-gray-700"
                            : "bg-gray-50 border border-gray-100"
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className={`flex items-center justify-center rounded-lg p-2 mt-0.5 ${
                              isDark
                                ? `${companyAdvantages[activeAdvantage].bgDark} ${companyAdvantages[activeAdvantage].colorLight}`
                                : `${companyAdvantages[activeAdvantage].bgLight} ${companyAdvantages[activeAdvantage].colorText}`
                            }`}
                          >
                            {feature.icon}
                          </div>
                          <div>
                            <h4
                              className={`font-medium mb-1 ${
                                isDark ? "text-white" : "text-gray-800"
                              }`}
                            >
                              {feature.label}
                            </h4>
                            <p
                              className={`text-sm ${
                                isDark ? "text-gray-400" : "text-gray-600"
                              }`}
                            >
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {companyAdvantages[activeAdvantage].stats?.map(
                    (stat, idx) => (
                      <div
                        key={idx}
                        className={`p-4 rounded-lg ${getStatClassName(
                          activeAdvantage
                        )}`}
                      >
                        <div className="text-center">
                          <p
                            className={`text-2xl md:text-3xl font-bold mb-1 ${
                              isDark
                                ? companyAdvantages[activeAdvantage].colorLight
                                : companyAdvantages[activeAdvantage].colorText
                            }`}
                          >
                            {stat.value}
                          </p>
                          <p
                            className={`text-sm ${
                              isDark ? "text-gray-400" : "text-gray-600"
                            }`}
                          >
                            {stat.label}
                          </p>
                        </div>
                      </div>
                    )
                  )}
                </div>
              )}
            </div>

            {/* Правая колонка - Иллюстрация/Детали */}
            <div
              className={`p-6 md:p-8 ${
                isDark
                  ? "bg-gradient-to-br from-gray-800 to-gray-900/80 border-l border-gray-700"
                  : "bg-gradient-to-br from-gray-50 to-white border-l border-gray-100"
              }`}
            >
              <div
                className={`border-l-2 pl-4 mb-6 ${
                  isDark
                    ? `border-${companyAdvantages[activeAdvantage].colorText}/30`
                    : `border-${companyAdvantages[activeAdvantage].colorText}`
                }`}
              >
                <h4
                  className={`text-lg font-medium mb-2 ${
                    isDark ? "text-white" : "text-gray-800"
                  }`}
                >
                  Что мы предлагаем
                </h4>
                <p
                  className={`text-sm ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Наш подход к разработке чат-ботов
                </p>
              </div>

              <div className="space-y-4">
                {companyAdvantages[activeAdvantage].detailedDescription?.map(
                  (item, idx) => (
                    <div
                      key={idx}
                      className={`flex items-start gap-3 p-3 rounded-lg ${
                        isDark
                          ? "bg-gray-800/50 border border-gray-700"
                          : "bg-white border border-gray-100"
                      }`}
                    >
                      <div
                        className={`flex-shrink-0 text-lg ${
                          isDark
                            ? companyAdvantages[activeAdvantage].colorLight
                            : companyAdvantages[activeAdvantage].colorText
                        }`}
                      >
                        <FiCheckCircle className="w-5 h-5" />
                      </div>
                      <p
                        className={`text-sm ${
                          isDark ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {item}
                      </p>
                    </div>
                  )
                )}
              </div>

              <div className="mt-8">
                <a
                  href="/contact"
                  className={`inline-flex items-center group ${
                    isDark
                      ? companyAdvantages[activeAdvantage].colorLight
                      : companyAdvantages[activeAdvantage].colorText
                  }`}
                >
                  <span className="mr-2 font-medium">
                    Узнать больше о наших решениях
                  </span>
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
} 