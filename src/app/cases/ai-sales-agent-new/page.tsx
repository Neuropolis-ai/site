"use client";

import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { useRef, useEffect, useState } from "react";

// Импортируем компоненты кейса
import CaseHero from "@/components/case-study/CaseHero";
import CaseTask from "@/components/case-study/CaseTask";
import CaseProblem from "@/components/case-study/CaseProblem";
import CaseSolution from "@/components/case-study/CaseSolution";
import CaseImplementation from "@/components/case-study/CaseImplementation";
import CaseResults from "@/components/case-study/CaseResults";
import CaseTechnologies from "@/components/case-study/CaseTechnologies";
import CaseTestimonial from "@/components/case-study/CaseTestimonial";
import CaseLongTermImpact from "@/components/case-study/CaseLongTermImpact";
import CaseFAQ from "@/components/case-study/CaseFAQ";
import AISalesAgentFAQ from "@/components/cases/ai-sales-agent-new/AISalesAgentFAQ";

import {
  FiGlobe,
  FiSettings,
  FiDatabase,
  FiCpu,
  FiCheckSquare,
  FiSearch,
  FiEdit,
  FiMessageCircle,
  FiUsers,
  FiTrendingUp,
} from "react-icons/fi";

// Компонент-обертка для секций с контентом (не отвечает за фон)
const SectionWrapper = ({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) => (
  <div 
    id={id} 
    className={`relative py-16 md:py-20 overflow-hidden ${className || ""}`}
  >
    {children}
  </div>
);

// Отдельный компонент для управления фоном секций
const SectionBackgroundLayer = ({
  active,
  section
}: {
  active: boolean;
  section: string;
}) => {
  const backgroundClass = active 
    ? "opacity-100 transition-opacity duration-700" 
    : "opacity-0 transition-opacity duration-700";

  // Выбираем разные варианты градиентов для разных секций
  let gradientStyle;
  
  if (section === 'implementation') {
    gradientStyle = (
      <>
        {/* Градиентный оверлей для секции "Процесс внедрения" - с фиолетовым оттенком */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-white via-blue-50 to-indigo-100/40"></div>
        
        {/* Анимированные градиентные блоки - более интенсивные цвета */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-indigo-200/30 to-purple-300/30 rounded-full blur-3xl animate-[pulse_5s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-tr from-blue-200/30 to-indigo-300/30 rounded-full blur-3xl animate-[pulse_6s_ease-in-out_1.5s_infinite]"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tr from-blue-200/30 to-blue-300/30 rounded-full blur-3xl animate-[pulse_4s_ease-in-out_3s_infinite]"></div>
      </>
    );
  } else {
    // Стандартный стиль для анализа проблемы и других секций
    gradientStyle = (
      <>
        {/* Градиентный оверлей */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white via-blue-50 to-blue-100/30"></div>
        
        {/* Анимированные градиентные блоки */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-blue-400/30 rounded-full blur-3xl animate-[pulse_4s_ease-in-out_infinite]"></div>
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-gradient-to-tr from-blue-200/30 to-blue-400/30 rounded-full blur-3xl animate-[pulse_5s_ease-in-out_1s_infinite]"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-indigo-200/30 to-indigo-400/30 rounded-full blur-3xl animate-[pulse_6s_ease-in-out_2s_infinite]"></div>
      </>
    );
  }

  return (
    <div 
      data-section={section}
      className={`fixed inset-0 pointer-events-none ${backgroundClass}`} 
      style={{zIndex: -10}}
    >
      {gradientStyle}
    </div>
  );
};

export default function CasePage() {
  const { isDark: _ } = useTheme();
  const analysisRef = useRef<HTMLDivElement>(null);
  const implementationRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState('none');

  // Использование IntersectionObserver для определения активных секций
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id === 'analysis-section') {
              setActiveSection('analysis');
            } else if (entry.target.id === 'implementation-section') {
              setActiveSection('implementation');
            }
          } else {
            // Убираем активную секцию только если наблюдаемая секция перестала быть видимой
            if (
              (entry.target.id === 'analysis-section' && activeSection === 'analysis') ||
              (entry.target.id === 'implementation-section' && activeSection === 'implementation')
            ) {
              setActiveSection('none');
            }
          }
        });
      },
      { threshold: 0.3 } // Секция считается видимой, когда 30% её площади в области просмотра
    );

    // Начинаем наблюдение за секциями
    if (analysisRef.current) {
      observer.observe(analysisRef.current);
    }
    if (implementationRef.current) {
      observer.observe(implementationRef.current);
    }

    // Очистка при размонтировании
    return () => {
      if (analysisRef.current) {
        observer.unobserve(analysisRef.current);
      }
      if (implementationRef.current) {
        observer.unobserve(implementationRef.current);
      }
    };
  }, [activeSection]);

  // Данные для секции Задача
  const taskData = {
    description:
      "B2B SaaS-компания в сфере финтеха столкнулась с серьезной проблемой в отделе продаж. Несмотря на значительные инвестиции в маркетинг и генерацию лидов, эффективность конверсии оставалась низкой. Основные проблемы:",
    challenges: [
      {
        text: "Более 40 лидов ежедневно, что превышало возможности имеющегося штата менеджеров по продажам",
        className: "text-base",
      },
      {
        text: "Среднее время ответа на запросы потенциальных клиентов - более 2 часов",
        className: "text-base",
      },
      {
        text: "До 30% лидов оставались без ответа или получали ответ слишком поздно",
        className: "text-base",
      },
      {
        text: "Неравномерное распределение нагрузки между сотрудниками отдела продаж",
        className: "text-base",
      },
      {
        text: "Отсутствие единого стандарта первичной квалификации и сбора данных о потенциальных клиентах",
        className: "text-base",
      },
    ],
  };

  // Данные для секции Анализ проблемы
  const problemData = {
    description:
      "Анализ процесса работы с входящими лидами выявил несколько ключевых проблем:",
    problemPoints: [
      "Первичный контакт занимал в среднем 2 часа, хотя исследования показывают, что 78% сделок закрываются тем, кто первым выходит на связь с клиентом",
      "Менеджеры тратили до 35% рабочего времени на первичную квалификацию и сбор базовой информации, вместо фокуса на закрытии сделок",
      "Отсутствие стандартизированного подхода к работе с лидами приводило к разному качеству обработки и потере ценной информации",
      "80% вопросов от потенциальных клиентов на начальном этапе были типовыми, но требовали участия живого менеджера",
      "Неравномерный поток входящих заявок создавал периоды перегрузки, когда некоторые лиды могли ждать ответа более 4 часов",
    ],
    conclusion:
      "Стало очевидно, что компании нужно автоматизировать процесс первичной обработки лидов, сохраняя при этом персонализированный подход и высокое качество коммуникации.",
  };

  // Данные для секции Решение
  const solutionData = {
    description:
      "Мы разработали специализированного ИИ-агента по продажам, который взял на себя задачи первичной коммуникации с потенциальными клиентами и их квалификации:",
    features: [
      {
        title: "Мгновенное взаимодействие с лидами",
        items: [
          "Круглосуточный доступ через Telegram и веб-виджет на сайте",
          "Моментальный отклик на любой запрос (15 секунд в среднем)",
          "Естественная коммуникация на уровне опытного менеджера по продажам",
          "Персонализация общения на основе данных о компании и контактном лице",
        ],
        icon: FiMessageCircle,
      },
      {
        title: "Квалификация и анализ потребностей",
        items: [
          "Сбор ключевой информации о потенциальном клиенте",
          "Определение степени готовности к покупке и временных рамок",
          "Выявление бюджета и лиц, принимающих решения",
          "Идентификация основных болей и потребностей бизнеса",
        ],
        icon: FiUsers,
      },
    ],
    technicalDetails:
      "Технически решение представляет собой комплексную систему с использованием современных подходов искусственного интеллекта и автоматизации бизнес-процессов:",
    techPoints: [
      "<strong>ИИ-ядро на GPT-4</strong> с тонкой настройкой под специфику продаж B2B-продуктов",
      "<strong>Система управления контекстом разговора</strong>, позволяющая вести длительные многоэтапные диалоги",
      "<strong>RAG-механизм</strong> для доступа к актуальной информации о продуктах, ценах и условиях",
      "<strong>Интеграции с CRM и бизнес-процессами</strong> для передачи квалифицированных лидов живым менеджерам",
      "<strong>Аналитическая система</strong> для оценки эффективности диалогов и непрерывного улучшения качества коммуникации",
    ],
  };

  // Данные для секции Процесс внедрения
  const implementationData = {
    stages: [
      {
        number: "1",
        title: "Сбор и анализ данных",
        duration: "2 недели",
        icon: FiDatabase,
        details:
          "Анализ текущих скриптов продаж, интервью с менеджерами, изучение типичных вопросов клиентов, анализ существующих диалогов и выявление сильных сторон лучших менеджеров по продажам.",
      },
      {
        number: "2",
        title: "Разработка ИИ-агента",
        duration: "3 недели",
        icon: FiCpu,
        details:
          "Создание и обучение ИИ-модели с учетом специфики продаж B2B SaaS, интеграция с корпоративными системами (CRM, базы знаний), разработка алгоритмов квалификации лидов и системы приоритизации.",
      },
      {
        number: "3",
        title: "Тестирование и оптимизация",
        duration: "2 недели",
        icon: FiCheckSquare,
        details:
          "A/B тестирование различных сценариев коммуникации, оптимизация процесса квалификации, настройка интеграций с существующими бизнес-процессами и создание аналитического дашборда для отслеживания эффективности.",
      },
    ],
    additionalInfo:
      "Ключевым фактором успеха стало активное вовлечение действующих менеджеров по продажам в процесс разработки. Это позволило не только перенести лучшие практики в ИИ-систему, но и значительно снизить сопротивление изменениям со стороны команды продаж, которая увидела в агенте помощника, а не замену.",
  };

  // Данные для секции Результаты
  const resultsData = {
    metrics: [
      { number: "15 сек", label: "Среднее время отклика" },
      { number: "27%", label: "Рост конверсии в продажи" },
      { number: "35%", label: "Увеличение эффективности менеджеров" },
      { number: "1000+", label: "Автоматизированных диалогов в месяц" },
    ],
    intro:
      "Внедрение ИИ-агента по продажам привело к значительному улучшению ключевых бизнес-показателей:",
    results: [
      {
        text: "Сокращение времени первого отклика с <b>2 часов до 15 секунд</b> (в режиме 24/7)",
      },
      {
        text: "Увеличение конверсии из лида в квалифицированную возможность на <b>27%</b>",
      },
      { text: "Рост производительности менеджеров по продажам на <b>35%</b> за счет фокуса на работе с квалифицированными лидами" },
      { text: "Повышение NPS на этапе первичного контакта с <b>+12 до +47</b>" },
      {
        text: "Экономия более <b>120 человеко-часов</b> ежемесячно на рутинных операциях",
      },
      {
        text: "Рост среднего чека на <b>18%</b> благодаря более качественной квалификации и сегментации клиентов",
      },
    ],
  };

  // Данные для секции Технологии
  const technologiesData = {
    technologies: [
      "GPT-4",
      "Telegram Bot API",
      "Supabase",
      "n8n",
      "RAG",
      "LangChain",
      "VectorDB",
      "FastAPI",
    ],
  };

  // Данные для секции Отзыв клиента
  const testimonialData = {
    text: "ИИ-агент по продажам полностью трансформировал наш отдел продаж. Вместо того чтобы тратить драгоценное время на первичную квалификацию, наши менеджеры теперь получают подготовленных лидов с полным контекстом потребностей. Это как будто у нас появились дополнительные сотрудники, только без зарплаты и отпусков, работающие круглосуточно. Клиенты часто даже не понимают, что общаются с ИИ, настолько естественным выглядит диалог. В результате команда стала продавать больше, а рутинная часть работы исчезла - идеальная ситуация для всех!",
    authorName: "Александр Васильев",
    authorPosition: "Коммерческий директор, FinTech Solutions",
    authorInitials: "АВ",
  };

  // Данные для секции Долгосрочное влияние
  const longTermImpactData = {
    description:
      "За 6 месяцев использования ИИ-агента по продажам компания добилась устойчивых стратегических преимуществ:",
    impactPoints: [
      "Масштабирование продаж без пропорционального увеличения штата - рост выручки на 43% при сохранении размера отдела продаж",
      "Стандартизация процесса квалификации лидов и сбора данных, что значительно улучшило аналитику и прогнозирование продаж",
      "Получение ценных инсайтов из автоматизированных диалогов для оптимизации маркетинговых кампаний и продуктовых предложений",
      "Сокращение срока обучения новых менеджеров по продажам на 40% благодаря использованию записей успешных диалогов ИИ-агента",
    ],
  };

  const pageVariants = {
    hidden: { opacity: 0.9 },
    show: {
      opacity: 1,
      transition: { duration: 0.7, ease: "easeInOut" },
    },
  };

  return (
    <>
      {/* Фиксированные фоновые слои для разных секций */}
      <SectionBackgroundLayer active={activeSection === 'analysis'} section="analysis" />
      <SectionBackgroundLayer active={activeSection === 'implementation'} section="implementation" />
      
      <motion.div
        className="relative text-gray-800"
        variants={pageVariants}
        initial="hidden"
        animate="show"
      >
        <CaseHero
          title="ИИ-агент в отделе продаж"
          subtitle="Как мы сократили время отклика с 2 часов до 15 секунд и повысили конверсию на 27%"
          imagePath="/assets/images/cases/sale.jpg"
          imageAlt="AI-агент в отделе продаж"
        />

        <SectionWrapper className="relative overflow-hidden">
          {/* Фоновые элементы */}
          <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50/80 dark:from-gray-950 dark:to-blue-950/10 -z-10"></div>
          
          {/* Анимированные градиентные окружности */}
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-blue-400/30 rounded-full blur-3xl animate-[pulse_4s_ease-in-out_infinite] -z-10"></div>
          <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-gradient-to-tr from-blue-200/30 to-blue-400/30 rounded-full blur-3xl animate-[pulse_5s_ease-in-out_2s_infinite] -z-10"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-indigo-200/30 to-indigo-400/30 rounded-full blur-3xl animate-[pulse_6s_ease-in-out_4s_infinite] -z-10"></div>
          
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <CaseTask
              description={taskData.description}
              challenges={taskData.challenges}
              transparent={true}
            />
          </div>
        </SectionWrapper>

        <div id="analysis-section" ref={analysisRef}>
          <SectionWrapper className="">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">
              <CaseProblem
                description={problemData.description}
                problemPoints={problemData.problemPoints}
                conclusion={problemData.conclusion}
                transparent={true}
              />
            </div>
          </SectionWrapper>
        </div>

        <SectionWrapper className="relative overflow-hidden">
          {/* Фоновые элементы */}
          <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50/80 dark:from-gray-950 dark:to-blue-950/10 -z-10"></div>
          
          {/* Анимированные градиентные окружности */}
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-blue-400/30 rounded-full blur-3xl animate-[pulse_4s_ease-in-out_infinite] -z-10"></div>
          <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-gradient-to-tr from-blue-200/30 to-blue-400/30 rounded-full blur-3xl animate-[pulse_5s_ease-in-out_2s_infinite] -z-10"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-indigo-200/30 to-indigo-400/30 rounded-full blur-3xl animate-[pulse_6s_ease-in-out_4s_infinite] -z-10"></div>
          
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <CaseSolution
              description={solutionData.description}
              features={solutionData.features}
              technicalDetails={solutionData.technicalDetails}
              techPoints={solutionData.techPoints}
              transparent={true}
            />
          </div>
        </SectionWrapper>

        <div id="implementation-section" ref={implementationRef}>
          <SectionWrapper className="">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">
              <CaseImplementation
                stages={implementationData.stages}
                additionalInfo={implementationData.additionalInfo}
                transparent={true}
              />
            </div>
          </SectionWrapper>
        </div>

        <SectionWrapper className="relative overflow-hidden">
          {/* Фоновые элементы */}
          <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50/80 dark:from-gray-950 dark:to-blue-950/10 -z-10"></div>
          
          {/* Анимированные градиентные окружности */}
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-blue-400/30 rounded-full blur-3xl animate-[pulse_4s_ease-in-out_infinite] -z-10"></div>
          <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-gradient-to-tr from-blue-200/30 to-blue-400/30 rounded-full blur-3xl animate-[pulse_5s_ease-in-out_2s_infinite] -z-10"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-indigo-200/30 to-indigo-400/30 rounded-full blur-3xl animate-[pulse_6s_ease-in-out_4s_infinite] -z-10"></div>
          
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <CaseResults
              metrics={resultsData.metrics}
              intro={resultsData.intro}
              results={resultsData.results}
              transparent={true}
            />

            {/* Дополнительный блок */}
            <div className="mt-16 px-6 sm:px-8 py-10 sm:py-12 rounded-2xl border border-blue-200/40 bg-gradient-to-br from-white/80 to-blue-50/80 dark:from-gray-900/80 dark:to-blue-950/80 backdrop-blur-sm shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 text-center">
                Как работает ИИ-агент по продажам на практике
              </h3>
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200/80 dark:border-gray-700/80 shadow-md transform transition-transform hover:-translate-y-1 duration-300">
                  <div className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4 flex items-center">
                    <span className="inline-block w-3 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mr-2"></span>
                    Традиционный процесс
                  </div>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-3 font-medium">
                    <li className="flex items-center">
                      <span className="text-gray-500 dark:text-gray-400 mr-2">•</span>
                      <span style={{ fontSize: "16px", lineHeight: "26px", fontWeight: "normal" }}>Клиент оставляет заявку и ждет несколько часов</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-gray-500 dark:text-gray-400 mr-2">•</span>
                      <span style={{ fontSize: "16px", lineHeight: "26px", fontWeight: "normal" }}>Менеджер тратит время на первичный скрининг</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-gray-500 dark:text-gray-400 mr-2">•</span>
                      <span style={{ fontSize: "16px", lineHeight: "26px", fontWeight: "normal" }}>Значительная часть лидов теряется из-за задержек</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-gray-500 dark:text-gray-400 mr-2">•</span>
                      <span style={{ fontSize: "16px", lineHeight: "26px", fontWeight: "normal" }}>Непоследовательная квалификация лидов</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/40 dark:to-blue-800/40 p-6 rounded-xl border border-blue-200/80 dark:border-blue-700/50 shadow-md transform transition-transform hover:-translate-y-1 duration-300">
                  <div className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-4 flex items-center">
                    <span className="inline-block w-3 h-3 bg-blue-500 dark:bg-blue-400 rounded-full mr-2"></span>
                    Процесс с ИИ-агентом
                  </div>
                  <ul className="text-gray-700 dark:text-blue-100 space-y-3 font-medium">
                    <li className="flex items-center">
                      <span className="text-blue-500 dark:text-blue-400 mr-2">•</span>
                      <span style={{ fontSize: "16px", lineHeight: "26px", fontWeight: "normal" }}>Мгновенный ответ и начало диалога (15 сек)</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-500 dark:text-blue-400 mr-2">•</span>
                      <span style={{ fontSize: "16px", lineHeight: "26px", fontWeight: "normal" }}>Структурированный сбор всей необходимой информации</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-500 dark:text-blue-400 mr-2">•</span>
                      <span style={{ fontSize: "16px", lineHeight: "26px", fontWeight: "normal" }}>Квалификация и оценка потенциала в реальном времени</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-500 dark:text-blue-400 mr-2">•</span>
                      <span style={{ fontSize: "16px", lineHeight: "26px", fontWeight: "normal" }}>Передача менеджеру подготовленного лида с полным контекстом</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="text-center mt-10">
                <Link
                  href="/contact"
                  className={`inline-flex items-center justify-center px-8 py-4 rounded-xl
                       bg-gradient-to-r from-[#0167F3] to-[#399AFC] text-white font-semibold text-[18px]
                       hover:opacity-90 transition-all duration-300 hover:-translate-y-0.5
                       shadow-lg`}
                >
                  Обсудить внедрение ИИ-агента
                  <BsArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper className="relative overflow-hidden">
          {/* Фоновые элементы */}
          <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50/80 dark:from-gray-950 dark:to-blue-950/10 -z-10"></div>
          
          {/* Анимированные градиентные окружности */}
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-blue-400/30 rounded-full blur-3xl animate-[pulse_4s_ease-in-out_infinite] -z-10"></div>
          <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-gradient-to-tr from-blue-200/30 to-blue-400/30 rounded-full blur-3xl animate-[pulse_5s_ease-in-out_2s_infinite] -z-10"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-indigo-200/30 to-indigo-400/30 rounded-full blur-3xl animate-[pulse_6s_ease-in-out_4s_infinite] -z-10"></div>
          
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <CaseTechnologies technologies={technologiesData.technologies} transparent={true} />
          </div>
        </SectionWrapper>

        <SectionWrapper className="relative overflow-hidden">
          {/* Фоновые элементы */}
          <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50/80 dark:from-gray-950 dark:to-blue-950/10 -z-10"></div>
          
          {/* Анимированные градиентные окружности */}
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-blue-400/30 rounded-full blur-3xl animate-[pulse_4s_ease-in-out_infinite] -z-10"></div>
          <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-gradient-to-tr from-blue-200/30 to-blue-400/30 rounded-full blur-3xl animate-[pulse_5s_ease-in-out_2s_infinite] -z-10"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-indigo-200/30 to-indigo-400/30 rounded-full blur-3xl animate-[pulse_6s_ease-in-out_4s_infinite] -z-10"></div>
          
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <CaseTestimonial
              text={testimonialData.text}
              authorName={testimonialData.authorName}
              authorPosition={testimonialData.authorPosition}
              authorInitials={testimonialData.authorInitials}
              textClassName="text-sm sm:text-base"
              transparent={true}
            />
          </div>
        </SectionWrapper>

        <SectionWrapper className="relative overflow-hidden">
          {/* Фоновые элементы */}
          <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50/80 dark:from-gray-950 dark:to-blue-950/10 -z-10"></div>
          
          {/* Анимированные градиентные окружности */}
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-blue-400/30 rounded-full blur-3xl animate-[pulse_4s_ease-in-out_infinite] -z-10"></div>
          <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-gradient-to-tr from-blue-200/30 to-blue-400/30 rounded-full blur-3xl animate-[pulse_5s_ease-in-out_2s_infinite] -z-10"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-indigo-200/30 to-indigo-400/30 rounded-full blur-3xl animate-[pulse_6s_ease-in-out_4s_infinite] -z-10"></div>
          
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <CaseLongTermImpact
              description={longTermImpactData.description}
              impactPoints={longTermImpactData.impactPoints}
              transparent={true}
            />
          </div>
        </SectionWrapper>

        <SectionWrapper className="relative overflow-hidden">
          {/* Фоновые элементы */}
          <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50/80 dark:from-gray-950 dark:to-blue-950/10 -z-10"></div>
          
          {/* Анимированные градиентные окружности */}
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-blue-400/30 rounded-full blur-3xl animate-[pulse_4s_ease-in-out_infinite] -z-10"></div>
          <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-gradient-to-tr from-blue-200/30 to-blue-400/30 rounded-full blur-3xl animate-[pulse_5s_ease-in-out_2s_infinite] -z-10"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-indigo-200/30 to-indigo-400/30 rounded-full blur-3xl animate-[pulse_6s_ease-in-out_4s_infinite] -z-10"></div>
          
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <AISalesAgentFAQ />
          </div>
        </SectionWrapper>
      </motion.div>
    </>
  );
} 