"use client";

import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

// Импортируем стандартные компоненты
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

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

import {
  FiGlobe,
  FiSettings,
  FiDatabase,
  FiCpu,
  FiCheckSquare,
} from "react-icons/fi";

// Импортируем компонент CTA
import AutomationCTA from "@/components/CTASection/AutomationCTA";

// Компонент-обертка для секций с фоном (без центрирования)
const SectionWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={`relative py-16 md:py-20 overflow-hidden ${className || ""}`}>
    {/* Фоновые элементы */}
    <div className="absolute inset-0 -z-10 opacity-50 dark:opacity-100">
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-blue-200/15 to-blue-400/15 dark:from-blue-500/10 dark:to-blue-700/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-indigo-200/15 to-indigo-400/15 dark:from-indigo-500/10 dark:to-indigo-700/10 rounded-full blur-3xl"></div>
    </div>
    {children}
  </div>
);

export default function CasePage() {
  const { isDark } = useTheme();

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
      <Header />
      <motion.div
        className={`bg-gradient-to-b ${
          isDark ? "from-black to-gray-900" : "from-white to-gray-50"
        } text-gray-800 dark:text-white`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {/* Hero секция */}
        <CaseHero
          title="ИИ-ассистент для поддержки клиентов"
          subtitle="Как мы автоматизировали 82% обращений в службу поддержки e-commerce площадки и сократили время ответа в 480 раз"
          imagePath="/assets/images/cases/ai-customer-support-cover.jpg"
          imageAlt="ИИ-ассистент для поддержки клиентов"
        />

        {/* Задача клиента */}
        <SectionWrapper className={isDark ? "bg-black/30" : "bg-white/50"}>
          <div className="container mx-auto px-4 max-w-screen-lg">
            <CaseTask 
              description={taskData.description}
              challenges={taskData.challenges}
            />
          </div>
        </SectionWrapper>

        {/* Анализ проблемы */}
        <SectionWrapper className={isDark ? "bg-gray-900/40" : "bg-gray-100/60"}>
          <div className="container mx-auto px-4 max-w-screen-lg">
            <CaseProblem
              description={problemData.description}
              problemPoints={problemData.problemPoints}
              conclusion={problemData.conclusion}
            />
          </div>
        </SectionWrapper>

        {/* Решение */}
        <SectionWrapper className={isDark ? "bg-black/30" : "bg-white/50"}>
          <div className="container mx-auto px-4 max-w-screen-lg">
            <CaseSolution
              description={solutionData.description}
              features={solutionData.features}
              technicalDetails={solutionData.technicalDetails}
              techPoints={solutionData.techPoints}
            />
          </div>
        </SectionWrapper>

        {/* Процесс внедрения */}
        <SectionWrapper className={isDark ? "bg-gray-900/40" : "bg-gray-100/60"}>
          <div className="container mx-auto px-4 max-w-screen-lg">
            <CaseImplementation
              stages={implementationData.stages}
              additionalInfo={implementationData.additionalInfo}
            />
          </div>
        </SectionWrapper>

        {/* Результаты */}
        <SectionWrapper className={isDark ? "bg-black/30" : "bg-white/50"}>
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

        {/* Технологии */}
        <SectionWrapper className={isDark ? "bg-gray-900/40" : "bg-gray-100/60"}>
          <div className="container mx-auto px-4 max-w-screen-lg">
            <CaseTechnologies technologies={technologiesData.technologies} />
          </div>
        </SectionWrapper>

        {/* Отзыв клиента */}
        <SectionWrapper className={isDark ? "bg-black/30" : "bg-white/50"}>
          <div className="container mx-auto px-4 max-w-screen-lg">
            <CaseTestimonial
              text={testimonialData.text}
              authorName={testimonialData.authorName}
              authorPosition={testimonialData.authorPosition}
              authorInitials={testimonialData.authorInitials}
            />
          </div>
        </SectionWrapper>

        {/* Долгосрочное влияние */}
        <SectionWrapper className={isDark ? "bg-gray-900/40" : "bg-gray-100/60"}>
          <div className="container mx-auto px-4 max-w-screen-lg">
            <CaseLongTermImpact
              description={longTermImpactData.description}
              impactPoints={longTermImpactData.impactPoints}
            />
          </div>
        </SectionWrapper>

        {/* Кнопки действия */}
        <div className="container mx-auto px-4 max-w-screen-lg py-16">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Готовы автоматизировать клиентскую поддержку?</h3>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Современный ИИ-ассистент может обрабатывать до 82% запросов без участия оператора. Увеличьте NPS и сократите расходы уже через 2 месяца после внедрения.
            </p>
            <Link
              href="/contact"
              className={`inline-flex items-center justify-center px-8 py-4 rounded-xl
                 bg-gradient-to-r from-[#0167F3] to-[#399AFC] text-white font-semibold text-[18px]
                 hover:opacity-90 transition-all duration-300 hover:-translate-y-0.5
                 shadow-lg`}
            >
              Хочу ИИ-ассистента для своего бизнеса
              <BsArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
}
