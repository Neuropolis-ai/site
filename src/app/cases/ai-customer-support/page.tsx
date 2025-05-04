"use client";

import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";

// Импортируем стандартные компоненты
// import Navbar from "@/components/layout/Navbar";
// import Footer from "@/components/layout/Footer";

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
import CaseRelated from "@/components/case-study/CaseRelated";

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
    {children} {/* Убрали внутренний div.container */}
  </div>
);

export default function CasePage() {
  const { isDark } = useTheme();

  // Данные для секции Задача
  const taskData = {
    description:
      "Крупный e-commerce маркетплейс с ассортиментом более 500,000 товаров и ежемесячной аудиторией более 2 миллионов уникальных посетителей столкнулся с серьезными вызовами в обслуживании клиентов:",
    challenges: [
      "Среднее время ожидания ответа на запрос составляло 24 часа",
      "Команда из 30 операторов не справлялась с потоком из 5000+ обращений в день",
      "Высокая текучка кадров из-за рутинных и однотипных запросов",
      "Низкие оценки удовлетворенности (NPS 34 из 100)",
      "Упущенные продажи из-за медленных ответов на предпродажные вопросы",
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
    technicalDetails: "Ключевые технические особенности решения:",
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
      },
      {
        number: "2",
        title: "Разработка и обучение ИИ",
        duration: "4 недели",
        icon: FiCpu,
      },
      {
        number: "3",
        title: "Интеграция и тестирование",
        duration: "3 недели",
        icon: FiCheckSquare,
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
      {
        text: "Другие кейсы",
        url: "/cases",
        isPrimary: false,
      },
    ],
  };

  // Данные для связанных кейсов
  const relatedCasesData = {
    cases: [
      {
        title: "AI-агент в отделе продаж",
        description:
          "Как мы сократили время отклика с 2 часов до 15 секунд и повысили конверсию на 27%",
        url: "/cases/ai-sales-agent",
      },
      {
        title: "Узнать больше о ИИ-агентах",
        description:
          "Подробное описание возможностей ИИ-агентов и как они могут помочь вашему бизнесу",
        url: "/ai-agent",
      },
    ],
  };

  const pageVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <>
      {/* <Navbar /> */}
      <motion.div
        className={`bg-gradient-to-b ${
          isDark ? "from-black to-gray-900" : "from-white to-gray-50"
        } text-gray-800 dark:text-white`}
        variants={pageVariants}
        initial="hidden"
        animate="show"
      >
        {/* Обложка (Hero) - фон и центрирование внутри компонента */}
        <CaseHero
          title="ИИ-ассистент для службы поддержки клиентов"
          subtitle="Как мы сократили время ожидания ответа с 24 часов до 3 минут и повысили удовлетворенность клиентов на 68%"
          imagePath="/assets/images/ai-customer-support.jpg"
          imageAlt="ИИ-ассистент поддержки клиентов в действии"
        />

        {/* Оборачиваем остальные секции в SectionWrapper с чередующимися фонами */}
        <SectionWrapper className={isDark ? "bg-black/30" : "bg-white/50"}>
          <CaseTask
            description={taskData.description}
            challenges={taskData.challenges}
          />
        </SectionWrapper>

        <SectionWrapper
          className={isDark ? "bg-gray-900/40" : "bg-gray-100/60"}
        >
          <CaseProblem
            description={problemData.description}
            problemPoints={problemData.problemPoints}
            conclusion={problemData.conclusion}
          />
        </SectionWrapper>

        <SectionWrapper className={isDark ? "bg-black/30" : "bg-white/50"}>
          <CaseSolution
            description={solutionData.description}
            features={solutionData.features}
            technicalDetails={solutionData.technicalDetails}
            techPoints={solutionData.techPoints}
          />
        </SectionWrapper>

        <SectionWrapper
          className={isDark ? "bg-gray-900/40" : "bg-gray-100/60"}
        >
          <CaseImplementation
            stages={implementationData.stages}
            additionalInfo={implementationData.additionalInfo}
          />
        </SectionWrapper>

        <SectionWrapper className={isDark ? "bg-black/30" : "bg-white/50"}>
          <CaseResults
            metrics={resultsData.metrics}
            intro={resultsData.intro}
            results={resultsData.results}
          />
        </SectionWrapper>

        <SectionWrapper
          className={isDark ? "bg-gray-900/40" : "bg-gray-100/60"}
        >
          <CaseTechnologies technologies={technologiesData.technologies} />
        </SectionWrapper>

        <SectionWrapper className={isDark ? "bg-black/30" : "bg-white/50"}>
          <CaseTestimonial
            text={testimonialData.text}
            authorName={testimonialData.authorName}
            authorPosition={testimonialData.authorPosition}
            authorInitials={testimonialData.authorInitials}
          />
        </SectionWrapper>

        <SectionWrapper
          className={isDark ? "bg-gray-900/40" : "bg-gray-100/60"}
        >
          <CaseLongTermImpact
            description={longTermImpactData.description}
            impactPoints={longTermImpactData.impactPoints}
          />
        </SectionWrapper>

        {/* Кнопки и связанные кейсы - фон и центрирование внутри */}
        <CaseActionButtons buttons={actionButtonsData.buttons} />
        <CaseRelated cases={relatedCasesData.cases} />
      </motion.div>
      {/* <Footer /> */}
    </>
  );
}
