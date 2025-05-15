"use client";

import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { useState, useEffect, useRef } from "react";

// Импортируем утилиты аналитики
import { trackABTestVariant, trackABTestConversion, setupScrollDepthTracking } from "@/utils/analytics";

// Расширяем интерфейс Window для включения gtag
declare global {
  interface Window {
    gtag: (
      command: string,
      action: string,
      params: {
        [key: string]: any;
      }
    ) => void;
  }
}

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
import CaseActionButtons from "@/components/case-study/CaseActionButtons";
import CaseFAQ from "@/components/case-study/CaseFAQ";
import RelatedCases from "@/components/case-study/RelatedCases";
import SocialShareButtons from "@/components/case-study/SocialShareButtons";

import {
  FiGlobe,
  FiSettings,
  FiDatabase,
  FiCpu,
  FiCheckSquare,
} from "react-icons/fi";

// Импортируем компонент CTA
import AutomationCTA from "@/components/CTASection/AutomationCTA";

// Компонент для A/B тестирования заголовков
const ABTestHeadline = ({ 
  headlines, 
  onHeadlineSelect, 
  className = "" 
}: { 
  headlines: string[], 
  onHeadlineSelect?: (headline: string, index: number) => void,
  className?: string
}) => {
  const [selectedHeadline, setSelectedHeadline] = useState<string | null>(null);

  useEffect(() => {
    // При первой загрузке выбираем случайный заголовок из вариантов
    if (!selectedHeadline && headlines.length > 0) {
      // Проверяем, есть ли сохраненный вариант в localStorage
      const savedVariant = typeof window !== 'undefined' 
        ? localStorage.getItem('ab_test_headline') 
        : null;
        
      let randomIndex: number;
      let headline: string;
      
      if (savedVariant) {
        try {
          const data = JSON.parse(savedVariant);
          headline = data.variant;
          randomIndex = data.index;
          
          // Проверяем, что сохраненный вариант все еще существует в текущих вариантах
          if (!headlines.includes(headline)) {
            randomIndex = Math.floor(Math.random() * headlines.length);
            headline = headlines[randomIndex];
          }
        } catch (e) {
          randomIndex = Math.floor(Math.random() * headlines.length);
          headline = headlines[randomIndex];
        }
      } else {
        randomIndex = Math.floor(Math.random() * headlines.length);
        headline = headlines[randomIndex];
      }
      
      setSelectedHeadline(headline);
      
      // Вызываем callback с информацией о выбранном заголовке
      if (onHeadlineSelect) {
        onHeadlineSelect(headline, randomIndex);
      }
      
      // Используем нашу новую утилиту для отслеживания A/B тестирования
      trackABTestVariant('headline', headline, randomIndex);
    }
  }, [headlines, selectedHeadline, onHeadlineSelect]);

  // Если заголовок еще не выбран, показываем пустой контейнер такой же высоты
  if (!selectedHeadline) {
    return <div className={className} style={{ minHeight: '2.25rem' }}></div>;
  }

  return (
    <h1 className={className}>{selectedHeadline}</h1>
  );
};

// Компонент-обертка для секций с фоном (без центрирования)
const SectionWrapper = ({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) => (
  <div className={`relative py-16 md:py-20 overflow-hidden ${className || ""}`} id={id}>
    {/* Фоновые элементы */}
    <div className="absolute inset-0 -z-10 opacity-50 dark:opacity-100">
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-blue-200/15 to-blue-400/15 dark:from-blue-500/10 dark:to-blue-700/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-indigo-200/15 to-indigo-400/15 dark:from-indigo-500/10 dark:to-indigo-700/10 rounded-full blur-3xl"></div>
    </div>
    {children}
  </div>
);

// Компонент прогресс-бара чтения
const ReadingProgressBar = () => {
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    const updateProgressBar = () => {
      // Вычисляем высоту всего документа
      const documentHeight = document.documentElement.scrollHeight;
      // Вычисляем высоту видимой области
      const windowHeight = window.innerHeight;
      // Текущее положение скролла
      const scrollTop = window.scrollY;
      
      // Вычисляем прогресс прокрутки в процентах
      const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
      
      setWidth(scrollPercentage);
    };
    
    // Подписываемся на событие прокрутки
    window.addEventListener('scroll', updateProgressBar);
    // Вызываем один раз при монтировании
    updateProgressBar();
    
    // Отписываемся при размонтировании
    return () => window.removeEventListener('scroll', updateProgressBar);
  }, []);
  
  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-800 z-50">
      <div 
        className="h-full bg-gradient-to-r from-blue-500 to-blue-700"
        style={{ width: `${width}%` }}
      />
    </div>
  );
};

export default function CasePage() {
  const { theme: _ } = useTheme();
  const [activeHeadline, setActiveHeadline] = useState<string | null>(null);
  const [headlineVariantIndex, setHeadlineVariantIndex] = useState<number | null>(null);
  
  // Варианты заголовков для A/B тестирования
  const headlineVariants = [
    "ИИ-ассистент для поддержки клиентов",
    "Автоматизация клиентской поддержки с помощью ИИ", 
    "Сокращение времени ответа в 480 раз с помощью ИИ",
    "Как автоматизировать 82% обращений в поддержку с ИИ"
  ];
  
  // Настраиваем отслеживание прокрутки при монтировании
  useEffect(() => {
    setupScrollDepthTracking([25, 50, 75, 90, 100], 'article');
  }, []);
  
  // Функция для отслеживания конверсий с разных заголовков
  const trackHeadlineConversion = (headline: string, index: number) => {
    setActiveHeadline(headline);
    setHeadlineVariantIndex(index);
  };
  
  // Функция для отслеживания клика на CTA с учетом выбранного заголовка
  const handleCtaClick = (ctaText: string) => {
    // Используем нашу новую утилиту для отслеживания конверсии
    trackABTestConversion('headline', 'cta_click', {
      cta_text: ctaText
    });
    
    console.log(`CTA clicked! Headline: ${activeHeadline}, CTA: ${ctaText}`);
  };

  // Данные для секции Задача
  const taskData = {
    description:
      "Крупный e-commerce маркетплейс с ассортиментом более 500,000 товаров и ежемесячной аудиторией более 2 миллионов уникальных посетителей столкнулся с серьезными вызовами в обслуживании клиентов:",
    challenges: [
      {
        text: "Среднее время ожидания ответа на запрос составляло 24 часа",
        className: "text-base",
      },
      {
        text: "Команда из 30 операторов не справлялась с потоком из 5000+ обращений в день",
        className: "text-base",
      },
      {
        text: "Высокая текучка кадров из-за рутинных и однотипных запросов",
        className: "text-base",
      },
      {
        text: "Низкие оценки удовлетворенности (NPS 34 из 100)",
        className: "text-base",
      },
      {
        text: "Упущенные продажи из-за медленных ответов на предпродажные вопросы",
        className: "text-base",
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
      "Мы разработали комплексного ИИ-ассистента поддержки клиентов, интегрированного во все каналы коммуникации:",
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
        duration: "2 недели",
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
        duration: "3 недели",
        icon: FiCheckSquare,
        details:
          "Развертывание на платформах (сайт, мессенджеры), интеграция с CRM/ERP, комплексное тестирование и UAT.",
      },
    ],
    additionalInfo:
      "Интересно, что во время внедрения мы столкнулись с проблемой интеграции с устаревшей CRM-системой клиента. Решением стало создание промежуточного API-слоя, который позволил бесшовно соединить нашего ИИ-ассистента с существующей инфраструктурой без необходимости полной миграции данных.",
  };

  // Данные для секции Результаты
  const resultsData = {
    metrics: [
      { number: "3 мин", label: "Среднее время ответа" },
      { number: "68%", label: "Рост NPS" },
      { number: "82%", label: "Автоматизация обращений" },
      { number: "43%", label: "Рост конверсии" },
    ],
    intro: "Внедрение ИИ-ассистента привело к значительным бизнес-результатам:",
    results: [
      {
        text: "Сокращение среднего времени ответа с <b>24 часов до 3 минут</b>",
      },
      { text: "Увеличение NPS с 34 до 87 пунктов (<b>+68%</b>)" },
      { text: "<b>82%</b> всех обращений решаются без участия человека" },
      { text: "Рост конверсии предпродажных запросов на <b>43%</b>" },
      {
        text: "Сокращение штата операторов с 30 до 12 человек с перераспределением их на стратегические задачи",
      },
      { text: "Экономия в размере <b>~$350,000</b> в годовом выражении" },
    ],
    beforeAfter: {
      before: [
        "• Среднее время ответа — 24 часа",
        "• Необходимость в 30 операторах",
        "• NPS на уровне 34",
        "• Высокая текучка кадров",
        "• Упущенные продажи из-за медленной реакции",
      ],
      after: [
        "• Среднее время ответа — 3 минуты",
        "• Необходимость только в 12 опытных операторах",
        "• NPS повысился до 87",
        "• Повышение удовлетворенности сотрудников",
        "• Рост конверсии на 43%",
      ],
    },
  };

  // Данные для секции Технологии
  const technologiesData = {
    technologies: [
      "GPT-4o",
      "Langchain",
      "Pinecone",
      "Websockets",
      "RAG",
      "FastAPI",
      "Whisper API",
    ],
  };

  // Данные для секции Отзыв клиента
  const testimonialData = {
    text: "Внедрение ИИ-ассистента полностью преобразило наш клиентский сервис. Мы не только смогли значительно сократить расходы, но и вывели качество обслуживания на совершенно новый уровень. Клиенты отмечают мгновенные ответы и точность информации, а наши сотрудники наконец могут сосредоточиться на действительно сложных и интересных задачах вместо рутинных ответов. Нейрополис не просто поставил нам технологию — они полностью погрузились в специфику нашего бизнеса и создали решение, которое предвосхищает потребности клиентов.",
    authorName: "Андрей Камский",
    authorPosition: "Директор по клиентскому сервису",
    authorInitials: "АК",
  };

  // Данные для секции Долгосрочное влияние
  const longTermImpactData = {
    description:
      "Спустя 6 месяцев после внедрения мы провели глубокий анализ влияния решения на бизнес клиента:",
    impactPoints: [
      "Повышение лояльности клиентов и увеличение среднего чека на 17%",
      "Ежемесячный органический рост базы клиентов благодаря положительным отзывам о сервисе",
      "Снижение возвратов товара на 23% благодаря более точным предпродажным консультациям",
      "Формирование новой команды специалистов по стратегическому развитию клиентского сервиса из бывших операторов",
    ],
  };

  // Данные для кнопок действия
  const actionButtonsData = {
    buttons: [
      {
        text: "Хочу ИИ-ассистента для своего бизнеса",
        url: "/contact",
        isPrimary: true,
      },
    ],
  };

  return (
    <>
      <ReadingProgressBar />
      <motion.div
        className={`bg-gradient-to-b ${
          false ? "from-black to-gray-900" : "from-white to-gray-50"
        } text-gray-800 dark:text-white`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <article itemScope itemType="https://schema.org/Article" className="case-study ai-customer-support-case">
          <meta itemProp="headline" content="ИИ-ассистент для поддержки клиентов" />
          <meta itemProp="description" content="Как внедрение ИИ-ассистента сократило время ответа с 24 часов до 3 минут и повысило удовлетворенность клиентов на 68% для крупного e-commerce маркетплейса" />
          <meta itemProp="keywords" content="ИИ-ассистент, поддержка клиентов, автоматизация обращений, чат-бот для e-commerce, повышение NPS, служба поддержки, клиентское обслуживание, искусственный интеллект, машинное обучение, RAG" />
          <meta itemProp="author" content="Neuropolis.ai" />
      
          {/* Hero секция с A/B тестированием заголовка */}
          <header className="page-header">
            <CaseHero
              title={
                <ABTestHeadline 
                  headlines={headlineVariants} 
                  onHeadlineSelect={trackHeadlineConversion}
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6"
                />
              }
              subtitle="Как мы автоматизировали 82% обращений в службу поддержки e-commerce площадки и сократили время ответа в 480 раз"
              imagePath="/assets/images/ai-customer-support-new.jpg"
              imageAlt="ИИ-ассистент для поддержки клиентов"
            />
          </header>

          <main itemProp="articleBody">
            {/* Задача клиента */}
            <section itemProp="hasPart" itemScope itemType="https://schema.org/WebPageElement">
              <meta itemProp="name" content="Задача клиента" />
              <SectionWrapper className={false ? "bg-black/30" : "bg-white/50"} id="task">
                <div className="container mx-auto px-4 max-w-screen-lg">
                  <CaseTask 
                    description={taskData.description}
                    challenges={taskData.challenges}
                  />
                </div>
              </SectionWrapper>
            </section>

            {/* Анализ проблемы */}
            <section itemProp="hasPart" itemScope itemType="https://schema.org/WebPageElement">
              <meta itemProp="name" content="Анализ проблемы" />
              <SectionWrapper className={false ? "bg-gray-900/40" : "bg-gray-100/60"} id="problem">
                <div className="container mx-auto px-4 max-w-screen-lg">
                  <CaseProblem
                    description={problemData.description}
                    problemPoints={problemData.problemPoints}
                    conclusion={problemData.conclusion}
                  />
                </div>
              </SectionWrapper>
            </section>

            {/* Решение */}
            <section itemProp="hasPart" itemScope itemType="https://schema.org/WebPageElement">
              <meta itemProp="name" content="Предложенное решение" />
              <SectionWrapper className={false ? "bg-black/30" : "bg-white/50"} id="solution">
                <div className="container mx-auto px-4 max-w-screen-lg">
                  <CaseSolution
                    description={solutionData.description}
                    features={solutionData.features}
                    technicalDetails={solutionData.technicalDetails}
                    techPoints={solutionData.techPoints}
                  />
                </div>
              </SectionWrapper>
            </section>

            {/* Процесс внедрения */}
            <section itemProp="hasPart" itemScope itemType="https://schema.org/WebPageElement">
              <meta itemProp="name" content="Процесс внедрения" />
              <SectionWrapper className={false ? "bg-gray-900/40" : "bg-gray-100/60"} id="implementation">
                <div className="container mx-auto px-4 max-w-screen-lg">
                  <CaseImplementation
                    stages={implementationData.stages}
                    additionalInfo={implementationData.additionalInfo}
                  />
                </div>
              </SectionWrapper>
            </section>

            {/* Результаты */}
            <section itemProp="hasPart" itemScope itemType="https://schema.org/WebPageElement">
              <meta itemProp="name" content="Достигнутые результаты" />
              <SectionWrapper className={false ? "bg-black/30" : "bg-white/50"} id="results">
                <div className="container mx-auto px-4 max-w-screen-lg">
                  <CaseResults
                    metrics={resultsData.metrics}
                    intro={resultsData.intro}
                    results={resultsData.results}
                  />
                  
                  {/* Примеры улучшения обслуживания */}
                  <div className="mt-16 px-4 sm:px-6 py-8 sm:py-10 rounded-2xl border border-blue-200/30 dark:border-blue-700/30 bg-white/50 dark:bg-blue-900/20 backdrop-blur-sm shadow-sm">
                    <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                      Примеры улучшения обслуживания с помощью ИИ
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                      <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/70 dark:to-gray-900/80 p-4 rounded-xl border border-gray-200/80 dark:border-gray-700/50">
                        <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                          До внедрения
                        </div>
                        <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                          {resultsData.beforeAfter.before.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 p-4 rounded-xl border border-blue-200/80 dark:border-blue-700/50">
                        <div className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2">
                          После внедрения
                        </div>
                        <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                          {resultsData.beforeAfter.after.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="text-center mt-16">
                      <Link
                        href="/contact"
                        onClick={() => handleCtaClick("Узнать стоимость внедрения")}
                        className={`inline-flex items-center justify-center px-8 py-4 rounded-xl
                          bg-gradient-to-r from-[#0167F3] to-[#399AFC] text-white font-semibold text-[18px]
                          hover:opacity-90 transition-all duration-300 hover:-translate-y-0.5
                          shadow-lg`}
                      >
                        Узнать стоимость внедрения
                        <BsArrowRight className="ml-2 w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </SectionWrapper>
            </section>

            {/* Технологии */}
            <section itemProp="hasPart" itemScope itemType="https://schema.org/WebPageElement">
              <meta itemProp="name" content="Используемые технологии" />
              <SectionWrapper className={false ? "bg-gray-900/40" : "bg-gray-100/60"} id="technologies">
                <div className="container mx-auto px-4 max-w-screen-lg">
                  <CaseTechnologies technologies={technologiesData.technologies} />
                </div>
              </SectionWrapper>
            </section>

            {/* Отзыв клиента */}
            <section itemProp="hasPart" itemScope itemType="https://schema.org/WebPageElement">
              <meta itemProp="name" content="Отзыв клиента" />
              <SectionWrapper className={false ? "bg-black/30" : "bg-white/50"} id="testimonial">
                <div className="container mx-auto px-4 max-w-screen-lg">
                  <CaseTestimonial
                    text={testimonialData.text}
                    authorName={testimonialData.authorName}
                    authorPosition={testimonialData.authorPosition}
                    authorInitials={testimonialData.authorInitials}
                  />
                </div>
              </SectionWrapper>
            </section>

            {/* Долгосрочное влияние */}
            <section itemProp="hasPart" itemScope itemType="https://schema.org/WebPageElement">
              <meta itemProp="name" content="Долгосрочное влияние" />
              <SectionWrapper className={false ? "bg-gray-900/40" : "bg-gray-100/60"} id="long-term-impact">
                <div className="container mx-auto px-4 max-w-screen-lg">
                  <CaseLongTermImpact
                    description={longTermImpactData.description}
                    impactPoints={longTermImpactData.impactPoints}
                  />
                </div>
              </SectionWrapper>
            </section>

            {/* FAQ раздел */}
            <section itemProp="hasPart" itemScope itemType="https://schema.org/WebPageElement">
              <meta itemProp="name" content="Часто задаваемые вопросы" />
              <SectionWrapper className={false ? "bg-black/30" : "bg-white/50"} id="faq">
                <div className="container mx-auto px-4 max-w-screen-lg">
                  <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Часто задаваемые вопросы</h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                      Ответы на самые популярные вопросы о разработке и интеграции ИИ-ассистентов для поддержки клиентов
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-5xl mx-auto">
                    <div className="bg-white dark:bg-gray-800/50 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700/50">
                      <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white flex items-start">
                        <span className="text-blue-600 dark:text-blue-400 mr-2 text-2xl leading-none">→</span>
                        Сколько времени занимает внедрение ИИ-ассистента для поддержки клиентов?
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Стандартный срок внедрения составляет 2-3 месяца в зависимости от сложности проекта, интеграций и существующих систем. Первая MVP-версия может быть запущена уже через 4-6 недель. Интеграция с системами CRM и базами знаний обычно занимает большую часть времени проекта.
                      </p>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800/50 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700/50">
                      <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white flex items-start">
                        <span className="text-blue-600 dark:text-blue-400 mr-2 text-2xl leading-none">→</span>
                        Какие системы нужно интегрировать с ИИ-ассистентом?
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Для максимальной эффективности ИИ-ассистента рекомендуется интегрировать его с CRM-системой, системой управления заказами, базой знаний, системой аналитики и телефонией. Конкретный набор интеграций зависит от специфики вашего бизнеса и требований к автоматизации клиентской поддержки.
                      </p>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800/50 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700/50">
                      <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white flex items-start">
                        <span className="text-blue-600 dark:text-blue-400 mr-2 text-2xl leading-none">→</span>
                        Какой процент запросов сможет обрабатывать ИИ-ассистент?
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        В зависимости от отрасли и типов запросов, современные ИИ-ассистенты могут автоматизировать 70-85% всех обращений. Остальные запросы, требующие нестандартного подхода или человеческого участия, передаются операторам. Технология RAG (Retrieval Augmented Generation) значительно повышает точность ответов и процент автоматизируемых запросов.
                      </p>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800/50 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700/50">
                      <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white flex items-start">
                        <span className="text-blue-600 dark:text-blue-400 mr-2 text-2xl leading-none">→</span>
                        Как будет происходить обучение ИИ-ассистента?
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Обучение происходит в несколько этапов: 1) Анализ существующих диалогов и FAQ; 2) Создание базы знаний и сценариев; 3) Обучение на ваших данных; 4) Тестирование и доработка; 5) Постоянное улучшение на основе новых взаимодействий. Мы используем методы машинного обучения и глубокой настройки языковых моделей для точного воспроизведения стиля коммуникации компании.
                      </p>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800/50 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700/50 md:col-span-2">
                      <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white flex items-start">
                        <span className="text-blue-600 dark:text-blue-400 mr-2 text-2xl leading-none">→</span>
                        Сколько стоит внедрение ИИ-ассистента для поддержки клиентов?
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Стоимость зависит от масштаба проекта, необходимых интеграций и функциональности. Базовое решение начинается от 1,5 млн рублей. Мы предлагаем гибкую модель оплаты и поэтапное внедрение для оптимизации бюджета. ROI от внедрения ИИ-ассистента обычно достигается за 6-12 месяцев за счет сокращения расходов на поддержку и повышения конверсии.
                      </p>
                    </div>
                  </div>
                  
                  <div className="text-center mt-12">
                    <Link
                      href="/contact"
                      onClick={() => handleCtaClick("Задать вопрос о внедрении ИИ-ассистента")}
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline"
                    >
                      Задать свой вопрос
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </SectionWrapper>
            </section>
          </main>

          {/* Похожие кейсы */}
          <aside>
            <SectionWrapper className={false ? "bg-gray-900/40" : "bg-gray-100/60"} id="related-cases">
              <div className="container mx-auto px-4 max-w-screen-lg">
                <RelatedCases 
                  title="Похожие кейсы"
                  subtitle="Другие примеры внедрения ИИ для автоматизации бизнес-процессов"
                  cases={[
                    {
                      id: "1",
                      title: "ИИ-ассистент для HR-отдела",
                      subtitle: "Автоматизация процесса найма и онбординга сотрудников с помощью искусственного интеллекта",
                      imagePath: "/assets/images/cases/ssm.jpg",
                      url: "/cases/ai-content-assistant"
                    },
                    {
                      id: "2",
                      title: "Система предиктивной аналитики продаж",
                      subtitle: "Как мы увеличили точность прогнозов продаж на 78% с помощью машинного обучения",
                      imagePath: "/assets/images/cases/sale.jpg",
                      url: "/cases/ai-sales-agent"
                    },
                    {
                      id: "3",
                      title: "Чат-бот для финансовой организации",
                      subtitle: "Автоматизация 92% запросов клиентов банка с помощью мультиязычного чат-бота",
                      imagePath: "/assets/images/placeholder.jpg",
                      url: "/cases/bank-chatbot"
                    }
                  ]}
                />
              </div>
            </SectionWrapper>
          </aside>

          {/* Кнопки социальных сетей */}
          <SectionWrapper className={false ? "bg-black/30" : "bg-white/50"} id="share">
            <div className="container mx-auto px-4 max-w-screen-lg">
              <SocialShareButtons 
                title="ИИ-ассистент для поддержки клиентов: сокращение времени ответа с 24 часов до 3 минут"
                url="/cases/ai-customer-support"
                description="Узнайте как автоматизировать 82% обращений в службу поддержки e-commerce площадки с помощью ИИ-ассистента и сократить время ответа в 480 раз."
              />
            </div>
          </SectionWrapper>

          {/* Кнопки действия - CTA */}
          <footer className="container mx-auto px-4 max-w-screen-lg py-16">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Революция в клиентской поддержке с ИИ-ассистентом!</h2>
              <p className="text-lg mb-8 max-w-3xl mx-auto">
                Современный ИИ-ассистент может обрабатывать до 82% запросов без участия оператора. Увеличьте NPS и сократите расходы уже через 2 месяца после внедрения автоматизированного решения на основе искусственного интеллекта.
              </p>
              <Link
                href="/contact"
                onClick={() => handleCtaClick("Хочу ИИ-ассистента для своего бизнеса")}
                className={`inline-flex items-center justify-center px-8 py-4 rounded-xl
                   bg-gradient-to-r from-[#0167F3] to-[#399AFC] text-white font-semibold text-[18px]
                   hover:opacity-90 transition-all duration-300 hover:-translate-y-0.5
                   shadow-lg`}
              >
                Хочу ИИ-ассистента для своего бизнеса
                <BsArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </footer>
        </article>
      </motion.div>
    </>
  );
}
