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
import AIContentAssistantFAQ from "@/components/cases/ai-content-assistant/AIContentAssistantFAQ";

import {
  FiGlobe,
  FiSettings,
  FiDatabase,
  FiCpu,
  FiCheckSquare,
  FiSearch,
  FiEdit,
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
      "Популярный блогер-предприниматель с аудиторией более 100 тысяч подписчиков на различных платформах (YouTube, Instagram, Telegram) столкнулся с серьезными вызовами в создании контента:",
    challenges: [
      {
        text: "Нерегулярность публикаций из-за нехватки времени на создание качественного контента",
        className: "text-base",
      },
      {
        text: "Снижение охватов и вовлеченности аудитории из-за недостаточной частоты выхода материалов",
        className: "text-base",
      },
      {
        text: "Сложность поддержания узнаваемого авторского стиля при привлечении сторонних копирайтеров",
        className: "text-base",
      },
      {
        text: "Трудности с генерацией новых идей для контента, соответствующих актуальным трендам",
        className: "text-base",
      },
      {
        text: "Высокие затраты на команду копирайтеров и редакторов",
        className: "text-base",
      },
    ],
  };

  // Данные для секции Анализ проблемы
  const problemData = {
    description:
      "Наш анализ показал, что процесс создания контента для блогера включал несколько трудоёмких этапов:",
    problemPoints: [
      "Изучение трендов и генерация идей для новых материалов (25% времени)",
      "Исследование темы и сбор информации для публикации (30% времени)",
      "Написание черновой версии текста (20% времени)",
      "Редактирование для соответствия авторскому стилю (15% времени)",
      "Финальная корректура и оптимизация для различных платформ (10% времени)",
    ],
    conclusion:
      "Большую часть этих этапов можно было автоматизировать с помощью ИИ-решения, при этом сохранив узнаваемый авторский стиль и качество контента.",
  };

  // Данные для секции Решение
  const solutionData = {
    description:
      "Мы разработали персонализированного ИИ-ассистента для создания контента, который интегрируется с рабочими процессами блогера:",
    features: [
      {
        title: "Анализ стиля и контента",
        items: [
          "Обучение на существующих материалах блогера",
          "Выявление ключевых особенностей авторского стиля",
          "Анализ успешности предыдущих публикаций",
          "Определение оптимальной структуры и тональности",
        ],
        icon: FiSearch,
      },
      {
        title: "Генерация контента",
        items: [
          "Мониторинг трендов в выбранных нишах",
          "Предложение релевантных идей для новых материалов",
          "Создание черновиков статей и постов",
          "Адаптация контента для разных платформ",
        ],
        icon: FiEdit,
      },
    ],
    technicalDetails:
      "Ядро системы — комплекс ИИ-алгоритмов для анализа текста, выявления стилистических паттернов и генерации контента с использованием современных языковых моделей и инструментов автоматического поиска.",
    techPoints: [
      "<strong>Анализатор авторского стиля</strong> на основе методов NLP и трансформеров",
      "<strong>Система мониторинга трендов</strong> с веб-скрейпингом и обработкой данных соцсетей",
      "<strong>Генератор контента</strong> на основе LLM с тонкой настройкой под стиль блогера",
      "<strong>Механизмы проверки фактов</strong> для обеспечения достоверности информации",
      "<strong>Интерфейс взаимодействия</strong> для совместной доработки и редактирования материалов",
    ],
  };

  // Данные для секции Процесс внедрения
  const implementationData = {
    stages: [
      {
        number: "1",
        title: "Анализ и обучение",
        duration: "2 недели",
        icon: FiDatabase,
        details:
          "Сбор и анализ существующего контента блогера, интервьюирование для понимания целевой аудитории и особенностей стиля, выявление ключевых критериев успешных материалов.",
      },
      {
        number: "2",
        title: "Разработка ИИ-модели",
        duration: "3 недели",
        icon: FiCpu,
        details:
          "Создание и обучение ИИ-модели на основе GPT-4, настройка системы мониторинга трендов, разработка механизмов проверки фактов и адаптации под разные платформы.",
      },
      {
        number: "3",
        title: "Тестирование и настройка",
        duration: "2 недели",
        icon: FiCheckSquare,
        details:
          "Создание тестовых материалов, получение обратной связи от блогера, итеративная настройка системы для точного воспроизведения авторского стиля и улучшения качества контента.",
      },
    ],
    additionalInfo:
      "Интересной особенностью проекта стала необходимость настройки тонкого баланса между узнаваемостью авторского стиля и свежестью подачи. Мы разработали специальный алгоритм, который сохранял ключевые стилистические особенности, но при этом вносил контролируемую вариативность для избежания ощущения «шаблонности» у читателей.",
  };

  // Данные для секции Результаты
  const resultsData = {
    metrics: [
      { number: "230%", label: "Рост частоты публикаций" },
      { number: "45%", label: "Рост вовлеченности" },
      { number: "74%", label: "Экономия времени" },
      { number: "38%", label: "Увеличение охватов" },
    ],
    intro:
      "Внедрение ИИ-ассистента для создания контента привело к значительным результатам:",
    results: [
      {
        text: "Увеличение регулярности публикаций на <b>230%</b> (с 3-4 до 10-12 материалов в месяц)",
      },
      {
        text: "Рост вовлеченности аудитории на <b>45%</b> (лайки, комментарии, шеры)",
      },
      { text: "Сокращение времени на создание контента на <b>74%</b>" },
      { text: "Увеличение органических охватов на <b>38%</b>" },
      {
        text: "Экономия <b>$7,200</b> в год на услугах сторонних копирайтеров и редакторов",
      },
      {
        text: "Повышение монетизации контента на <b>52%</b> за счет роста охватов и вовлеченности",
      },
    ],
  };

  // Данные для секции Технологии
  const technologiesData = {
    technologies: [
      "GPT-4",
      "Claude 3",
      "Langchain",
      "NLP",
      "Stable Diffusion",
      "BERT",
      "Python",
      "FastAPI",
    ],
  };

  // Данные для секции Отзыв клиента
  const testimonialData = {
    text: "ИИ-ассистент кардинально изменил мой подход к созданию контента. Больше никакого творческого блока или недель простоя между публикациями! Система не просто генерирует тексты — она действительно улавливает мой стиль и тональность, предлагает актуальные идеи и создает материалы, которые кажутся написанными мной. Моя аудитория заметно выросла, вовлеченность повысилась, а я могу сосредоточиться на других аспектах развития бизнеса, не беспокоясь о регулярности публикаций. При этом я сохраняю полный контроль над контентом и всегда могу внести свои коррективы.",
    authorName: "Ольга С.",
    authorPosition: "Бизнес-блогер, предприниматель",
    authorInitials: "ОС",
  };

  // Данные для секции Долгосрочное влияние
  const longTermImpactData = {
    description:
      "Через 3 месяца после внедрения ИИ-ассистента мы провели анализ долгосрочного влияния на деятельность блогера:",
    impactPoints: [
      "Расширение аудитории на 35% благодаря регулярным и качественным публикациям",
      "Появление дополнительного времени для развития других направлений бизнеса и создания новых продуктов",
      "Запуск двух новых тематических рубрик на основе анализа трендов, предложенных ИИ-системой",
      "Повышение качества прямых эфиров и видеоконтента благодаря заблаговременной подготовке структуры и тезисов",
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
          title="ИИ-ассистент для создания контента"
          subtitle="Как мы помогли блогеру увеличить регулярность публикаций на 230% и поднять вовлеченность на 45%"
          imagePath="/assets/images/cases/ssm.jpg"
          imageAlt="ИИ-ассистент для создания контента: кейс Neuropolis"
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
          
          <AIContentAssistantFAQ />
        </SectionWrapper>
      </motion.div>
    </>
  );
}
