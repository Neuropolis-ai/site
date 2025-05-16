"use client";

import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { useRef, useEffect, useState } from "react";
import React from "react";

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
import AISalesAgentFAQ from "@/components/cases/ai-sales-agent-new2/AISalesAgentFAQ";

import {
  FiGlobe,
  FiSettings,
  FiDatabase,
  FiCpu,
  FiCheckSquare,
  FiSearch,
  FiEdit,
  FiMessageSquare,
  FiUserCheck,
} from "react-icons/fi";

// Исправляем компонент SectionWrapper для поддержки ref
const SectionWrapper = React.forwardRef<HTMLDivElement, {
  children: React.ReactNode;
  className?: string;
  id?: string;
}>(({ children, className, id }, ref) => (
  <div 
    id={id} 
    ref={ref}
    className={`relative py-16 md:py-20 overflow-hidden ${className || ""}`}
  >
    {children}
  </div>
));

// Устанавливаем displayName для правила ESLint react/display-name
SectionWrapper.displayName = "SectionWrapper";

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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-white via-blue-50 to-indigo-100/40 dark:from-gray-900 dark:via-blue-950/20 dark:to-indigo-950/40"></div>
        
        {/* Анимированные градиентные блоки - более интенсивные цвета */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-indigo-200/30 to-purple-300/30 dark:from-indigo-800/20 dark:to-purple-800/20 rounded-full blur-3xl animate-[pulse_5s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-tr from-blue-200/30 to-indigo-300/30 dark:from-blue-800/20 dark:to-indigo-800/20 rounded-full blur-3xl animate-[pulse_6s_ease-in-out_1.5s_infinite]"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tr from-blue-200/30 to-blue-300/30 dark:from-blue-800/20 dark:to-blue-800/20 rounded-full blur-3xl animate-[pulse_4s_ease-in-out_3s_infinite]"></div>
      </>
    );
  } else {
    // Стандартный стиль для анализа проблемы и других секций
    gradientStyle = (
      <>
        {/* Градиентный оверлей */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white via-blue-50 to-blue-100/30 dark:from-gray-900 dark:via-blue-950/20 dark:to-blue-950/30"></div>
        
        {/* Анимированные градиентные блоки */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-blue-400/30 dark:from-blue-800/20 dark:to-blue-600/20 rounded-full blur-3xl animate-[pulse_4s_ease-in-out_infinite]"></div>
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-gradient-to-tr from-blue-200/30 to-blue-400/30 dark:from-blue-800/20 dark:to-blue-600/20 rounded-full blur-3xl animate-[pulse_5s_ease-in-out_1s_infinite]"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-indigo-200/30 to-indigo-400/30 dark:from-indigo-800/20 dark:to-indigo-600/20 rounded-full blur-3xl animate-[pulse_6s_ease-in-out_2s_infinite]"></div>
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
          "Естественная коммуникация на уровне опытного менеджера по продаж",
          "Персонализация общения на основе данных о компании и контактном лице",
        ],
        icon: FiMessageSquare,
      },
      {
        title: "Квалификация и анализ потребностей",
        items: [
          "Сбор ключевой информации о потенциальном клиенте",
          "Определение степени готовности к покупке и временных рамок",
          "Выявление бюджета и лиц, принимающих решения",
          "Идентификация основных болей и потребностей бизнеса",
        ],
        icon: FiUserCheck,
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
      { number: "15", label: "сек. время отклика" },
      { number: "27%", label: "Рост конверсии" },
      { number: "35%", label: "Рост эффективности" },
      { number: "1000+", label: "Диалогов в месяц" },
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
      { 
        text: "Рост производительности менеджеров по продажам на <b>35%</b> за счет фокуса на работе с квалифицированными лидами" 
      },
      { 
        text: "Повышение NPS на этапе первичного контакта с <b>+12 до +47</b>" 
      },
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
      {/* Фоновые слои для анимации при скролле */}
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
          imageAlt="ИИ-агент в отделе продаж: кейс Neuropolis"
        />

        <SectionWrapper id="task-section" className="relative overflow-hidden">
          {/* Фоновые элементы */}
          <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50/80 dark:from-gray-950 dark:to-blue-950/10 -z-10"></div>
          
          {/* Анимированные градиентные окружности */}
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-blue-400/30 rounded-full blur-3xl animate-[pulse_4s_ease-in-out_infinite] -z-10"></div>
          <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-gradient-to-tr from-blue-200/30 to-blue-400/30 rounded-full blur-3xl animate-[pulse_5s_ease-in-out_2s_infinite] -z-10"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-indigo-200/30 to-indigo-400/30 rounded-full blur-3xl animate-[pulse_6s_ease-in-out_4s_infinite] -z-10"></div>
          
          <CaseTask
            description={taskData.description}
            challenges={taskData.challenges}
          />
        </SectionWrapper>

        <SectionWrapper id="analysis-section" ref={analysisRef} className="relative overflow-hidden">
          {/* Фоновые элементы - более светлые для контраста */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white/80 dark:from-gray-900 dark:to-gray-950/80 -z-10"></div>
          
          <CaseProblem
            description={problemData.description}
            problemPoints={problemData.problemPoints}
            conclusion={problemData.conclusion}
          />
        </SectionWrapper>

        <SectionWrapper id="solution-section" className="relative overflow-hidden">
          {/* Фоновые элементы */}
          <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50/80 dark:from-gray-950 dark:to-blue-950/10 -z-10"></div>
          
          {/* Анимированные градиентные окружности */}
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-blue-400/30 rounded-full blur-3xl animate-[pulse_4s_ease-in-out_infinite] -z-10"></div>
          <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-gradient-to-tr from-blue-200/30 to-blue-400/30 rounded-full blur-3xl animate-[pulse_5s_ease-in-out_2s_infinite] -z-10"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-indigo-200/30 to-indigo-400/30 rounded-full blur-3xl animate-[pulse_6s_ease-in-out_4s_infinite] -z-10"></div>
          
          <CaseSolution
            description={solutionData.description}
            features={solutionData.features}
            technicalDetails={solutionData.technicalDetails}
            techPoints={solutionData.techPoints}
          />
        </SectionWrapper>

        <SectionWrapper id="implementation-section" ref={implementationRef} className="relative overflow-hidden">
          {/* Фоновые элементы - более светлые для контраста */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white/80 dark:from-gray-900 dark:to-gray-950/80 -z-10"></div>
          
          <CaseImplementation
            stages={implementationData.stages}
            additionalInfo={implementationData.additionalInfo}
          />
        </SectionWrapper>

        <SectionWrapper id="results-section" className="relative overflow-hidden">
          {/* Фоновые элементы */}
          <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50/80 dark:from-gray-950 dark:to-blue-950/10 -z-10"></div>
          
          {/* Анимированные градиентные окружности */}
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-blue-400/30 rounded-full blur-3xl animate-[pulse_4s_ease-in-out_infinite] -z-10"></div>
          <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-gradient-to-tr from-blue-200/30 to-blue-400/30 rounded-full blur-3xl animate-[pulse_5s_ease-in-out_2s_infinite] -z-10"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-indigo-200/30 to-indigo-400/30 rounded-full blur-3xl animate-[pulse_6s_ease-in-out_4s_infinite] -z-10"></div>
          
          <CaseResults
            metrics={resultsData.metrics}
            intro={resultsData.intro}
            results={resultsData.results}
          />
        </SectionWrapper>

        <SectionWrapper id="testimonial-section" className="relative overflow-hidden">
          {/* Фоновые элементы - более светлые для контраста */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white/80 dark:from-gray-900 dark:to-gray-950/80 -z-10"></div>
          
          <CaseTestimonial
            text={testimonialData.text}
            authorName={testimonialData.authorName}
            authorPosition={testimonialData.authorPosition}
            authorInitials={testimonialData.authorInitials}
            textClassName="text-sm sm:text-base"
          />
        </SectionWrapper>

        <SectionWrapper className="relative overflow-hidden">
          {/* Фоновые элементы */}
          <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50/80 dark:from-gray-950 dark:to-blue-950/10 -z-10"></div>
          
          {/* Анимированные градиентные окружности */}
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-blue-400/30 rounded-full blur-3xl animate-[pulse_4s_ease-in-out_infinite] -z-10"></div>
          <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-gradient-to-tr from-blue-200/30 to-blue-400/30 rounded-full blur-3xl animate-[pulse_5s_ease-in-out_2s_infinite] -z-10"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-indigo-200/30 to-indigo-400/30 rounded-full blur-3xl animate-[pulse_6s_ease-in-out_4s_infinite] -z-10"></div>
          
          <CaseLongTermImpact
            description={longTermImpactData.description}
            impactPoints={longTermImpactData.impactPoints}
          />
        </SectionWrapper>

        <SectionWrapper className="relative overflow-hidden">
          {/* Фоновые элементы - более светлые для контраста */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white/80 dark:from-gray-900 dark:to-gray-950/80 -z-10"></div>
          
          <CaseTechnologies technologies={technologiesData.technologies} />
        </SectionWrapper>

        <SectionWrapper id="faq-section" className="relative overflow-hidden">
          {/* Фоновые элементы */}
          <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50/80 dark:from-gray-950 dark:to-blue-950/10 -z-10"></div>
          
          {/* Анимированные градиентные окружности */}
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-blue-400/30 rounded-full blur-3xl animate-[pulse_4s_ease-in-out_infinite] -z-10"></div>
          <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-gradient-to-tr from-blue-200/30 to-blue-400/30 rounded-full blur-3xl animate-[pulse_5s_ease-in-out_2s_infinite] -z-10"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-indigo-200/30 to-indigo-400/30 rounded-full blur-3xl animate-[pulse_6s_ease-in-out_4s_infinite] -z-10"></div>
          
          <AISalesAgentFAQ />
        </SectionWrapper>
      </motion.div>
    </>
  );
} 