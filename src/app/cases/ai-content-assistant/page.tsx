"use client";

import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

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

// Импортируем компоненты призыва к действию
import CostReduceCTA from "@/components/CTASection/CostReduceCTA";
import AutomationCTA from "@/components/CTASection/AutomationCTA";

import {
  FiGlobe,
  FiSettings,
  FiDatabase,
  FiCpu,
  FiCheckSquare,
  FiSearch,
  FiEdit,
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
    <div className="absolute inset-0 -z-10 opacity-50">
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-blue-200/15 to-blue-400/15 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-indigo-200/15 to-indigo-400/15 rounded-full blur-3xl"></div>
    </div>
    {children}
  </div>
);

export default function CasePage() {
  const { isDark: _ } = useTheme();

  // Данные для секции Задача
  const taskData = {
    description:
      "Популярный блогер-предприниматель с аудиторией более 500 тысяч подписчиков на различных платформах (YouTube, Instagram, Telegram) столкнулся с серьезными вызовами в создании контента:",
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
        text: "Экономия <b>$25,000</b> в год на услугах сторонних копирайтеров и редакторов",
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
    authorName: "Алексей Миронов",
    authorPosition: "Бизнес-блогер, предприниматель",
    authorInitials: "АМ",
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

  // Данные для кнопок действия
  const actionButtonsData = {
    buttons: [
      {
        text: "Хочу ИИ-ассистента для контента",
        url: "/contact",
        isPrimary: true,
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
      <motion.div
        className="bg-gradient-to-b from-white to-gray-50 text-gray-800"
        variants={pageVariants}
        initial="hidden"
        animate="show"
      >
        <CaseHero
          title="ИИ-ассистент для создания контента"
          subtitle="Как мы помогли блогеру увеличить регулярность публикаций на 230% и поднять вовлеченность на 45%"
          imagePath="/assets/images/cases/ssm.jpg"
          imageAlt="ИИ-ассистент для создания контента"
        />

        <SectionWrapper className="bg-white/50">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <CaseTask
              description={taskData.description}
              challenges={taskData.challenges}
            />
          </div>
        </SectionWrapper>

        <SectionWrapper className="bg-gray-100/60">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <CaseProblem
              description={problemData.description}
              problemPoints={problemData.problemPoints}
              conclusion={problemData.conclusion}
            />
          </div>
        </SectionWrapper>

        <SectionWrapper className="bg-white/50">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <CaseSolution
              description={solutionData.description}
              features={solutionData.features}
              technicalDetails={solutionData.technicalDetails}
              techPoints={solutionData.techPoints}
            />
          </div>
        </SectionWrapper>

        <SectionWrapper className="bg-gray-100/60">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <CaseImplementation
              stages={implementationData.stages}
              additionalInfo={implementationData.additionalInfo}
            />
          </div>
        </SectionWrapper>

        <SectionWrapper className="bg-white/50">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <CaseResults
              metrics={resultsData.metrics}
              intro={resultsData.intro}
              results={resultsData.results}
            />

            {/* Дополнительный блок */}
            <div className="mt-16 px-4 sm:px-6 py-8 sm:py-10 rounded-2xl border border-blue-200/30 bg-white/50 backdrop-blur-sm shadow-sm">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-900">
                Примеры улучшения контента с помощью ИИ
              </h3>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-xl border border-gray-200/80">
                  <div className="text-sm font-medium text-gray-500 mb-2">
                    До внедрения
                  </div>
                  <ul className="text-gray-700 space-y-2">
                    <li>• 3-4 публикации в месяц</li>
                    <li>• 4-8 часов на создание одного материала</li>
                    <li>• Частые периоды без новых публикаций</li>
                    <li>• Неполное использование актуальных трендов</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200/80">
                  <div className="text-sm font-medium text-blue-600 mb-2">
                    После внедрения
                  </div>
                  <ul className="text-gray-700 space-y-2">
                    <li>• 10-12 публикаций в месяц</li>
                    <li>• 1-2 часа на создание и редактирование материала</li>
                    <li>• Стабильный график выхода контента</li>
                    <li>• Оперативная реакция на тренды и события</li>
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
                  Обсудить внедрение ИИ-ассистента
                  <BsArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper className="bg-gray-100/60">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <CaseTechnologies technologies={technologiesData.technologies} />
          </div>
        </SectionWrapper>

        <SectionWrapper className="bg-white/50">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <CaseTestimonial
              text={testimonialData.text}
              authorName={testimonialData.authorName}
              authorPosition={testimonialData.authorPosition}
              authorInitials={testimonialData.authorInitials}
            />
          </div>
        </SectionWrapper>

        <SectionWrapper className="bg-gray-100/60">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <CaseLongTermImpact
              description={longTermImpactData.description}
              impactPoints={longTermImpactData.impactPoints}
            />
          </div>
        </SectionWrapper>

        {/* FAQ раздел */}
        <SectionWrapper className="bg-white/50">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <CaseFAQ 
              faqs={[
                {
                  question: "Как ИИ-ассистент имитирует авторский стиль?",
                  answer:
                    "ИИ-ассистент обучается на существующих материалах автора, выявляя характерные языковые паттерны, стилистические приёмы, тональность и структуру повествования. Система анализирует десятки параметров, включая длину предложений, словарный запас, ритмику текста и особенности построения аргументации. На основе этого анализа создаётся индивидуальный стилистический профиль, который применяется при генерации нового контента."
                },
                {
                  question: "Какие типы контента может создавать система?",
                  answer:
                    "Система способна генерировать разнообразные форматы контента: информационные и аналитические статьи, обзоры, интервью, новостные заметки, лонгриды, посты для социальных сетей, e-mail рассылки, сценарии для видео и подкастов. ИИ-ассистент также адаптирует один и тот же материал под различные платформы, учитывая их специфику и особенности восприятия аудитории."
                },
                {
                  question: "Насколько оригинален контент, созданный ИИ?",
                  answer:
                    "Контент, генерируемый нашей системой, полностью оригинален и проходит автоматическую проверку на уникальность. ИИ-ассистент не копирует существующие тексты, а создаёт новый материал на основе анализа тренда и темы. Система включает модуль проверки фактов, который верифицирует информацию по надёжным источникам и создаёт уникальную структуру повествования. При этом сохраняется авторский стиль и тональность."
                },
                {
                  question: "Как происходит интеграция ИИ в рабочий процесс?",
                  answer:
                    "Интеграция происходит поэтапно. Сначала система обучается на существующих материалах и формирует стилистический профиль. Затем настраивается рабочий процесс: ИИ может предлагать идеи для контента на основе анализа трендов, создавать черновики по выбранным темам, или автоматически адаптировать материал для разных платформ. Автор всегда сохраняет контроль над процессом и может редактировать, корректировать или полностью переписывать предложенные ИИ тексты."
                },
                {
                  question: "Как обеспечивается фактическая точность контента?",
                  answer:
                    "Система использует многоуровневый подход к проверке фактов. Первый уровень — это встроенные знания языковой модели о мире. Второй — специализированная база знаний по тематике блога. Третий — автоматизированная система поиска и верификации данных по внешним источникам в реальном времени. Все утверждения фактического характера проверяются и снабжаются внутренними метками достоверности, чтобы автор мог легко идентифицировать информацию, требующую дополнительной проверки."
                },
              ]}
              title="Вопросы об ИИ-ассистенте для контента"
              subtitle="Ответы на самые популярные вопросы о внедрении и использовании ИИ для создания контента"
            />
          </div>
        </SectionWrapper>

        {/* Кнопки и связанные кейсы */}
        <div className="container mx-auto px-4 md:px-8 max-w-7xl py-16">
          <CaseActionButtons buttons={actionButtonsData.buttons} />
        </div>
      </motion.div>
    </>
  );
}
