"use client";

import Container from "@/components/ui/Container";
import { useTheme } from "@/context/ThemeContext";
import { useState } from "react";
import { FiBarChart, FiCheckCircle, FiTrendingUp, FiArrowRight } from "react-icons/fi";
import Image from "next/image";
import Badge from "@/components/ui/Badge";

export default function WorkflowAutomationUseCases() {
  const { isDark } = useTheme();
  const [activeTab, setActiveTab] = useState(0);

  // Обновленные данные о кейсах с цветами сайта
  const useCases = [
    {
      title: "Автоматизация маркетинговых процессов",
      description:
        "Интеграция CRM-системы, email-маркетинга и социальных сетей для создания единого маркетингового центра. Автоматическая сегментация клиентов, персонализированные рассылки и анализ эффективности кампаний.",
      stats: [
        { value: "68%", label: "Рост конверсии" },
        { value: "45%", label: "Экономия времени" },
        { value: "3x", label: "Увеличение охвата" },
      ],
      detailedDescription: [
        "Автоматическая сегментация аудитории на основе поведения и предпочтений",
        "Персонализированные email-кампании с динамическим контентом",
        "Автоматический анализ эффективности маркетинговых каналов",
        "Интеграция с CRM для отслеживания полного пути клиента"
      ],
      image: "/assets/images/workflow-marketing.png",
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
      title: "Автоматизация продаж",
      description:
        "Интеграция всех каналов продаж в единую систему. Автоматическое создание коммерческих предложений, отслеживание статуса сделок, напоминания о задачах и автоматические отчеты для руководства.",
      stats: [
        { value: "32%", label: "Рост продаж" },
        { value: "60%", label: "Снижение ручной работы" },
        { value: "24ч", label: "Ускорение обработки заявок" },
      ],
      detailedDescription: [
        "Автоматическое создание и отправка коммерческих предложений",
        "Система напоминаний о важных этапах сделки",
        "Автоматическая квалификация лидов на основе их поведения",
        "Интеграция с платежными системами и документооборотом"
      ],
      image: "/assets/images/workflow-sales.png",
      colorBg: "bg-[#0167F3]",
      colorText: "text-[#0167F3]",
      colorLight: "text-[#399AFC]",
      gradientFrom: "from-[#0167F3]",
      gradientTo: "to-[#399AFC]",
      bgDark: "bg-blue-900/30",
      borderDark: "border-blue-800/30",
      bgLight: "bg-blue-50/80",
      borderLight: "border-blue-200",
      icon: <FiTrendingUp className="w-5 h-5" />,
    },
    {
      title: "Автоматизация финансовых процессов",
      description:
        "Интеграция бухгалтерских систем с банками и платежными системами. Автоматическое формирование счетов, отслеживание платежей, формирование финансовой отчетности и налоговых деклараций.",
      stats: [
        { value: "40%", label: "Сокращение ошибок" },
        { value: "75%", label: "Экономия времени" },
        { value: "12ч", label: "Ускорение закрытия месяца" },
      ],
      detailedDescription: [
        "Автоматическая сверка банковских выписок и учетных данных",
        "Формирование и отправка счетов клиентам по расписанию",
        "Отслеживание просроченных платежей и автоматические напоминания",
        "Подготовка финансовой отчетности для руководства и контролирующих органов"
      ],
      image: "/assets/images/workflow-finance.png",
      colorBg: "bg-[#0167F3]",
      colorText: "text-[#0167F3]",
      colorLight: "text-[#399AFC]",
      gradientFrom: "from-[#0167F3]",
      gradientTo: "to-[#399AFC]",
      bgDark: "bg-blue-900/30",
      borderDark: "border-blue-800/30",
      bgLight: "bg-blue-50/80",
      borderLight: "border-blue-200",
      icon: <FiCheckCircle className="w-5 h-5" />,
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
      id="workflow-cases"
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

      {/* Декоративные элементы */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-gradient-to-br from-blue-200/30 to-blue-400/30 dark:from-blue-500/10 dark:to-blue-700/10 rounded-full blur-3xl -z-5"></div>
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-gradient-to-tr from-blue-200/30 to-blue-400/30 dark:from-blue-500/10 dark:to-blue-700/10 rounded-full blur-3xl -z-5"></div>

      <Container>
        <div className="text-center mb-14">
          <div>
            <Badge>Примеры использования</Badge>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Возможности{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0167F3] to-[#399AFC]">
              интеграции
            </span>{" "}
            с различными системами
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Наша платформа легко интегрируется с любыми существующими бизнес-системами и автоматизирует ключевые процессы, позволяя достичь максимальной эффективности
          </p>
        </div>

        {/* Табы для переключения между примерами */}
        <div className="mb-10">
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 px-4 sm:px-0">
            {useCases.map((useCase, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
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
              </button>
            ))}
          </div>
        </div>

        {/* Контент активного таба */}
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
                  <div
                    key={index}
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
                  </div>
                ))}
              </div>

              {/* Подробная информация */}
              <div
                className={`p-5 rounded-lg backdrop-blur-sm ${
                  isDark
                    ? `${useCases[activeTab].bgDark} border ${useCases[activeTab].borderDark}`
                    : `${useCases[activeTab].bgLight} border ${useCases[activeTab].borderLight}`
                }`}
              >
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                  Ключевые возможности
                </h4>
                <ul className="space-y-3">
                  {useCases[activeTab].detailedDescription.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span
                        className={`${useCases[activeTab].colorText} bg-blue-100 dark:bg-blue-900/40 p-1 rounded-full flex-shrink-0`}
                      >
                        <FiCheckCircle className="w-4 h-4" />
                      </span>
                      <span className="text-gray-600 dark:text-gray-300 translate-y-[1px]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Правая колонка - Изображение */}
            <div
              className={`${
                isDark ? "bg-gray-800/70" : "bg-blue-50/50"
              } p-6 md:p-8 flex flex-col justify-center items-center`}
            >
              <div className="relative w-full max-w-md mx-auto">
                <Image
                  src={useCases[activeTab].image}
                  alt={useCases[activeTab].title}
                  width={500}
                  height={350}
                  className="rounded-lg shadow-lg"
                  style={{ objectFit: "contain" }}
                  priority={activeTab === 0}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Призыв к действию */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <a
              className="px-5 sm:px-6 py-3 rounded-lg bg-gradient-to-r from-[#0167F3] to-[#399AFC] text-white font-medium shadow-lg shadow-blue-500/20 dark:shadow-blue-600/20 flex items-center justify-center gap-2 w-full sm:w-auto"
              href="#contact"
            >
              <span>Обсудить ваш проект</span>
              <FiArrowRight className="w-4 h-4" />
            </a>
            <a
              className="px-5 sm:px-6 py-3 rounded-lg border border-blue-300 dark:border-blue-700 text-blue-600 dark:text-blue-400 font-medium w-full sm:w-auto"
              href="#workflow-process"
            >
              Узнать о процессе внедрения
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
