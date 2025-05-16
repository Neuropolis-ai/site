"use client";

import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { useRef, useEffect, useState } from "react";
import React from "react";
import Image from "next/image";

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
import AICustomerSupportFAQ from "@/components/cases/ai-customer-support-new/AICustomerSupportFAQ";

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
      "Крупный e-commerce маркетплейс с ассортиментом более 500,000 товаров и ежемесячной аудиторией более 2 миллионов уникальных посетителей столкнулся с серьезными вызовами в обслуживании клиентов:",
    challenges: [
      {
        text: "Среднее время ожидания ответа на запрос составляло 24 часа",
      },
      {
        text: "Команда из 30 операторов не справлялась с потоком из 5000+ обращений в день",
      },
      {
        text: "Высокая текучка кадров из-за рутинных и однотипных запросов",
      },
      {
        text: "Низкие оценки удовлетворенности (NPS 34 из 100)",
      },
      {
        text: "Упущенные продажи из-за медленных ответов на предпродажные вопросы",
      },
    ],
  };

  // Данные для секции Анализ проблемы
  const problemData = {
    description:
      "Наш анализ показал, что более 78% всех обращений относились к типовым сценариям:",
    problemPoints: [
      "Вопросы о статусе заказа и доставке (42%)",
      "Запросы на отмену или изменение заказа (16%)",
      "Вопросы о возврате товара и возмещении средств (14%)",
      "Предпродажные вопросы о характеристиках товаров (20%)",
      "Прочие запросы (8%)",
    ],
    conclusion:
      "Эти обращения можно было автоматизировать, освободив операторов для решения более сложных и нестандартных задач.",
  };

  // Данные для секции Решение
  const solutionData = {
    description:
      "Мы разработали комплексного ИИ-агента для поддержки клиентов, интегрированного во все каналы коммуникации:",
    features: [
      {
        title: "Многоканальное присутствие",
        items: [
          "Чат на сайте",
          "Мессенджеры (WhatsApp, Telegram)",
          "Email-поддержка",
          "Колл-центр (голосовой ассистент)",
        ],
        icon: FiGlobe,
      },
      {
        title: "Основные функции",
        items: [
          "Автоматические ответы на типовые вопросы",
          "Отслеживание статуса заказа в реальном времени",
          "Автоматическое инициирование возврата",
          "Предоставление детальной информации о товарах",
        ],
        icon: FiSettings,
      },
    ],
    technicalDetails:
      "Под капотом — экосистема ИИ‑модулей: RAG‑ядро, семантический поиск, многоуровневое NLU и глубокие CRM/ERP‑интеграции, которые вместе обеспечивают мгновенные точные ответы и умную эскалацию сложных запросов.",
    techPoints: [
      "<strong>RAG-система</strong> на основе базы знаний о товарах и FAQ",
      "<strong>Интеграция с CRM и ERP</strong> для доступа к актуальным данным о заказах и клиентах",
      "<strong>Многоступенчатая система распознавания намерений</strong> пользователя",
      "<strong>Семантический поиск</strong> по каталогу товаров",
      "<strong>Механизм эскалации</strong> сложных запросов на операторов",
    ],
  };

  // Данные для секции Процесс внедрения
  const implementationData = {
    stages: [
      {
        number: "1",
        title: "Анализ и подготовка данных",
        duration: "3 недели",
        icon: FiDatabase,
        details:
          "Погружение в бизнес-процессы, анализ существующих каналов и данных (FAQ, логи), сбор и структурирование базы знаний для ИИ.",
      },
      {
        number: "2",
        title: "Разработка и обучение ИИ",
        duration: "4 недели",
        icon: FiCpu,
        details:
          "Выбор LLM (GPT-4o), разработка архитектуры агента, системы распознавания намерений, обучение модели на данных клиента.",
      },
      {
        number: "3",
        title: "Интеграция и тестирование",
        duration: "4 недели",
        icon: FiCheckSquare,
        details:
          "Развертывание на платформах (сайт, мессенджеры), интеграция с CRM/ERP, комплексное тестирование и UAT.",
      }
    ],
    additionalInfo: 
      "Интересно, что во время внедрения мы столкнулись с проблемой интеграции с устаревшей CRM-системой клиента. Решением стало создание промежуточного API-слоя, который позволил бесшовно соединить нашего ИИ-ассистента с существующей инфраструктурой без необходимости полной миграции данных.",
  };

  // Данные для секции Результаты
  const resultsData = {
    metrics: [
      {
        number: "3 мин",
        label: "Среднее время ответа",
      },
      {
        number: "82%",
        label: "Автоматизация обращений",
      },
      {
        number: "87",
        label: "Индекс NPS",
      },
      {
        number: "43%",
        label: "Рост конверсии",
      },
    ],
    intro:
      "Внедрение ИИ-агента привело к значительным бизнес-результатам:",
    results: [
      {
        text: "Сокращение среднего времени ответа с <strong>24 часов до 3 минут</strong>"
      },
      {
        text: "Увеличение NPS с 34 до 87 пунктов (<strong>+68%</strong>)"
      },
      {
        text: "<strong>82%</strong> всех обращений решаются без участия человека"
      },
      {
        text: "Рост конверсии предпродажных запросов на <strong>43%</strong>"
      },
      {
        text: "Сокращение штата операторов с 30 до 12 человек с перераспределением их на стратегические задачи"
      }
    ],
  };

  // Технологии использованные в проекте
  const techData = [
    "GPT-4o",
    "Langchain",
    "Pinecone",
    "Websockets",
    "RAG",
    "FastAPI",
  ];

  return (
    <>
      {/* Фоновые слои для анимации при скролле */}
      <SectionBackgroundLayer active={activeSection === 'analysis'} section="analysis" />
      <SectionBackgroundLayer active={activeSection === 'implementation'} section="implementation" />
      
      <motion.div
        className="relative text-gray-800"
        variants={{
          hidden: { opacity: 0.9 },
          show: {
            opacity: 1,
            transition: { duration: 0.7, ease: "easeInOut" },
          }
        }}
        initial="hidden"
        animate="show"
      >
              {/* Секция Hero */}
      <CaseHero
        title="ИИ-агент для службы поддержки"
        subtitle="Как мы автоматизировали 82% обращений в службу поддержки e-commerce площадки и сократили время ответа в 480 раз"
        imagePath="/assets/images/cases/ai-customer-support-bg.webp"
        imageAlt="ИИ-агент для службы поддержки e-commerce маркетплейса"
      />

        {/* Секция Задача */}
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

        {/* Секция Анализ проблемы */}
        <SectionWrapper id="analysis-section" ref={analysisRef} className="relative overflow-hidden">
          {/* Фоновые элементы - более светлые для контраста */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white/80 dark:from-gray-900 dark:to-gray-950/80 -z-10"></div>
          
          <CaseProblem
            description={problemData.description}
            problemPoints={problemData.problemPoints}
            conclusion={problemData.conclusion}
          />
        </SectionWrapper>

        {/* Секция Решение */}
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

        {/* Секция Процесс внедрения */}
        <SectionWrapper id="implementation-section" ref={implementationRef} className="relative overflow-hidden">
          {/* Фоновые элементы - более светлые для контраста */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white/80 dark:from-gray-900 dark:to-gray-950/80 -z-10"></div>
          
          <CaseImplementation
            stages={implementationData.stages}
            additionalInfo={implementationData.additionalInfo}
          />
        </SectionWrapper>

        {/* Секция Результаты */}
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

                {/* Секция Технологии */}
        <SectionWrapper className="relative overflow-hidden">
          {/* Фоновые элементы - более светлые для контраста */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white/80 dark:from-gray-900 dark:to-gray-950/80 -z-10"></div>
          
          <CaseTechnologies technologies={techData} />
        </SectionWrapper>
        
        <SectionWrapper id="faq-section" className="relative overflow-hidden">
          {/* Фоновые элементы */}
          <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50/80 dark:from-gray-950 dark:to-blue-950/10 -z-10"></div>
          
          {/* Анимированные градиентные окружности */}
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-blue-400/30 rounded-full blur-3xl animate-[pulse_4s_ease-in-out_infinite] -z-10"></div>
          <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-gradient-to-tr from-blue-200/30 to-blue-400/30 rounded-full blur-3xl animate-[pulse_5s_ease-in-out_2s_infinite] -z-10"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-indigo-200/30 to-indigo-400/30 rounded-full blur-3xl animate-[pulse_6s_ease-in-out_4s_infinite] -z-10"></div>
          
          <AICustomerSupportFAQ />
        </SectionWrapper>

        {/* Секция Похожие кейсы */}
        <div className="max-w-5xl mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Похожие кейсы</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-auto">
            {/* Кейс 1 - AI-агент в отделе продаж */}
            <div className="relative flex-shrink-0 w-full overflow-hidden backdrop-blur-sm 
                  bg-white/95 dark:bg-gray-900/90 rounded-2xl
                  border border-blue-100/60 dark:border-blue-900/40
                  shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <Link href="/cases/ai-sales-agent-new2" className="block">
                <div className="flex flex-col h-full">
                  <div className="relative w-full h-[220px]">
                    <Image
                      src="/assets/images/cases/sale.jpg"
                      alt="AI-агент в отделе продаж"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 100%"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 dark:to-black/60"></div>
                  </div>
                  <div className="flex flex-col justify-between p-5 flex-grow">
                    <div>
                      <div
                        className="inline-block px-3 py-1 rounded-full text-xs mb-3 font-medium tracking-wide
                          bg-blue-50 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300
                          border border-blue-200/80 dark:border-blue-800/50"
                      >
                        Продажи
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">
                        AI-агент в отделе продаж
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-2 md:line-clamp-3">
                        Как мы сократили время отклика с 2 часов до 15 секунд и повысили конверсию на 27%
                      </p>

                      {/* Метрики */}
                      <div className="grid grid-cols-3 gap-4">
                        <div
                          className="text-center bg-blue-50/50 dark:bg-blue-900/20 p-2 rounded-lg border border-blue-100/50 dark:border-blue-800/40"
                        >
                          <div className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-0.5">
                            15 сек
                          </div>
                          <div className="text-xs text-gray-600 dark:text-gray-400 tracking-tight">
                            Время отклика
                          </div>
                        </div>
                        <div
                          className="text-center bg-blue-50/50 dark:bg-blue-900/20 p-2 rounded-lg border border-blue-100/50 dark:border-blue-800/40"
                        >
                          <div className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-0.5">
                            27%
                          </div>
                          <div className="text-xs text-gray-600 dark:text-gray-400 tracking-tight">
                            Рост конверсии
                          </div>
                        </div>
                        <div
                          className="text-center bg-blue-50/50 dark:bg-blue-900/20 p-2 rounded-lg border border-blue-100/50 dark:border-blue-800/40"
                        >
                          <div className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-0.5">
                            24/7
                          </div>
                          <div className="text-xs text-gray-600 dark:text-gray-400 tracking-tight">
                            Доступность
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Кейс 2 - ИИ-ассистент для создания контента */}
            <div className="relative flex-shrink-0 w-full overflow-hidden backdrop-blur-sm 
                  bg-white/95 dark:bg-gray-900/90 rounded-2xl
                  border border-blue-100/60 dark:border-blue-900/40
                  shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <Link href="/cases/ai-content-assistant" className="block">
                <div className="flex flex-col h-full">
                  <div className="relative w-full h-[220px]">
                    <Image
                      src="/assets/images/cases/ssm.jpg"
                      alt="ИИ-ассистент для создания контента"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 100%"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 dark:to-black/60"></div>
                  </div>
                  <div className="flex flex-col justify-between p-5 flex-grow">
                    <div>
                      <div
                        className="inline-block px-3 py-1 rounded-full text-xs mb-3 font-medium tracking-wide
                          bg-blue-50 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300
                          border border-blue-200/80 dark:border-blue-800/50"
                      >
                        Контент-маркетинг
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">
                        ИИ-ассистент для создания контента
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-2 md:line-clamp-3">
                        Как увеличить регулярность публикаций на 230% и повысить вовлеченность аудитории
                      </p>

                      {/* Метрики */}
                      <div className="grid grid-cols-3 gap-4">
                        <div
                          className="text-center bg-blue-50/50 dark:bg-blue-900/20 p-2 rounded-lg border border-blue-100/50 dark:border-blue-800/40"
                        >
                          <div className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-0.5">
                            230%
                          </div>
                          <div className="text-xs text-gray-600 dark:text-gray-400 tracking-tight">
                            Рост публикаций
                          </div>
                        </div>
                        <div
                          className="text-center bg-blue-50/50 dark:bg-blue-900/20 p-2 rounded-lg border border-blue-100/50 dark:border-blue-800/40"
                        >
                          <div className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-0.5">
                            45%
                          </div>
                          <div className="text-xs text-gray-600 dark:text-gray-400 tracking-tight">
                            Вовлеченность
                          </div>
                        </div>
                        <div
                          className="text-center bg-blue-50/50 dark:bg-blue-900/20 p-2 rounded-lg border border-blue-100/50 dark:border-blue-800/40"
                        >
                          <div className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-0.5">
                            5x
                          </div>
                          <div className="text-xs text-gray-600 dark:text-gray-400 tracking-tight">
                            Ускорение
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* CTA Секция */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Готовы автоматизировать службу поддержки?</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto" style={{ lineHeight: '26px', fontSize: '18px' }}>
              Современный ИИ-агент может обрабатывать до 82% запросов без участия оператора. 
              Увеличьте NPS и сократите расходы уже через 2 месяца после внедрения автоматизированного 
              решения на основе искусственного интеллекта.
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
            >
              Хочу ИИ-агента для своего бизнеса
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
} 