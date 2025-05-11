"use client";

import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

// Импортируем стандартные компоненты
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

// Импортируем компоненты кейса
import CaseHero, { gradientBackgroundStyles, brandColors } from "@/components/case-study/CaseHero";
import CaseTask from "@/components/case-study/CaseTask";
import CaseProblem from "@/components/case-study/CaseProblem";
import CaseSolution from "@/components/case-study/CaseSolution";
import CaseImplementation from "@/components/case-study/CaseImplementation";
import CaseResults from "@/components/case-study/CaseResults";
import CaseTechnologies from "@/components/case-study/CaseTechnologies";
import CaseTestimonial from "@/components/case-study/CaseTestimonial";
import CaseLongTermImpact from "@/components/case-study/CaseLongTermImpact";
import CaseActionButtons from "@/components/case-study/CaseActionButtons";

// Импортируем компоненты призыва к действию
import CostReduceCTA from "@/components/CTASection/CostReduceCTA";
import AutomationCTA from "@/components/CTASection/AutomationCTA";

import {
  FiGlobe,
  FiSettings,
  FiDatabase,
  FiCpu,
  FiCheckSquare,
} from "react-icons/fi";

// Компонент-обертка для секций с фоном (без центрирования)
const SectionWrapper = ({
  children,
  className,
  isAlternate = false,
}: {
  children: React.ReactNode;
  className?: string;
  isAlternate?: boolean;
}) => {
  const { isDark } = useTheme();
  return (
    <div className={`relative py-16 md:py-20 overflow-hidden ${className || ""} 
      ${isAlternate 
        ? `${gradientBackgroundStyles.lightGradient} ${gradientBackgroundStyles.darkGradient}` 
        : isDark 
          ? "bg-gradient-to-b from-gray-900 to-gray-950"
          : "bg-gradient-to-b from-gray-50 to-white"
      }`}>
      {/* Улучшенный фоновый эффект */}
      <div className={`absolute inset-0 ${gradientBackgroundStyles.overlay} -z-10 overflow-hidden`}>
        <div className={`absolute top-0 right-0 w-full h-full ${gradientBackgroundStyles.grid}`}></div>
      </div>
      
      {/* Градиентные пятна */}
      <div className={`absolute -top-40 -right-40 w-96 h-96 ${gradientBackgroundStyles.glowEffects}`}></div>
      <div
        className={`absolute top-1/3 left-1/4 w-80 h-80 ${gradientBackgroundStyles.secondaryGlowEffects}`}
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className={`absolute -bottom-40 -left-40 w-96 h-96 ${gradientBackgroundStyles.secondaryGlowEffects}`}
        style={{ animationDelay: "4s" }}
      ></div>
      
      {children}
    </div>
  );
};

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
    <div className={`${gradientBackgroundStyles.lightGradient} ${gradientBackgroundStyles.darkGradient} min-h-screen`}>
      <Header />
      
      {/* Hero секция */}
      <CaseHero
        title="ИИ-ассистент для поддержки клиентов"
        subtitle="Как мы автоматизировали 82% обращений в службу поддержки e-commerce площадки и сократили время ответа в 480 раз"
        imagePath="/assets/images/cases/ai-customer-support/hero.jpg"
        imageAlt="ИИ-ассистент для поддержки клиентов"
      />

      {/* Основные секции кейса с чередующимся фоном */}
      <SectionWrapper>
        <CaseTask
          description={taskData.description}
          challenges={taskData.challenges}
        />
      </SectionWrapper>

      <SectionWrapper isAlternate={true}>
        <CaseProblem
          description={problemData.description}
          problemPoints={problemData.problemPoints}
          conclusion={problemData.conclusion}
        />
      </SectionWrapper>

      <SectionWrapper>
        <CaseSolution
          description={solutionData.description}
          features={solutionData.features}
          technicalDetails={solutionData.technicalDetails}
          techPoints={solutionData.techPoints}
        />
      </SectionWrapper>

      <SectionWrapper isAlternate={true}>
        <CaseImplementation
          stages={implementationData.stages}
          additionalInfo={implementationData.additionalInfo}
        />
      </SectionWrapper>

      <SectionWrapper>
        <CaseResults
          metrics={resultsData.metrics}
          intro={resultsData.intro}
          results={resultsData.results}
        />
      </SectionWrapper>

      <SectionWrapper isAlternate={true}>
        <CaseTechnologies technologies={technologiesData.technologies} />
      </SectionWrapper>

      <SectionWrapper>
        <CaseTestimonial
          text={testimonialData.text}
          authorName={testimonialData.authorName}
          authorPosition={testimonialData.authorPosition}
          authorInitials={testimonialData.authorInitials}
        />
      </SectionWrapper>

      <SectionWrapper isAlternate={true}>
        <CaseLongTermImpact
          description={longTermImpactData.description}
          impactPoints={longTermImpactData.impactPoints}
        />
      </SectionWrapper>

      <SectionWrapper className="pb-24 md:pb-32">
        <CaseActionButtons buttons={actionButtonsData.buttons} />
      </SectionWrapper>

      {/* Блоки CTA */}
      <SectionWrapper isAlternate={true}>
        <CostReduceCTA />
      </SectionWrapper>

      <SectionWrapper>
        <AutomationCTA />
      </SectionWrapper>

      <Footer />
    </div>
  );
}
