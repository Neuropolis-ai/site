"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

// Импортируем компоненты кейса из отдельных файлов
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

import {
  FiGlobe,
  FiSettings,
  FiDatabase,
  FiCpu,
  FiCheckSquare,
  FiMessageSquare,
  FiUsers,
  FiBarChart2,
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
      {
        text: "Рост производительности менеджеров по продажам на <b>35%</b> за счет фокуса на работе с квалифицированными лидами",
      },
      {
        text: "Повышение NPS на этапе первичного контакта с <b>+12 до +47</b>",
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

  // Данные для кнопок действия
  const actionButtonsData = {
    buttons: [
      {
        text: "Хочу такого же AI-агента",
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
          title="ИИ-агент в отделе продаж"
          subtitle="Как мы сократили время отклика с 2 часов до 15 секунд и повысили конверсию на 27%"
          imagePath="/assets/images/cases/sale.jpg"
          imageAlt="AI-агент в отделе продаж"
        />

        <SectionWrapper className="bg-white/50">
          <div className="container mx-auto px-4">
            <CaseTask
              description={taskData.description}
              challenges={taskData.challenges}
            />
          </div>
        </SectionWrapper>

        <SectionWrapper className="bg-gray-100/60">
          <div className="container mx-auto px-4">
            <CaseProblem
              description={problemData.description}
              problemPoints={problemData.problemPoints}
              conclusion={problemData.conclusion}
            />
          </div>
        </SectionWrapper>

        <SectionWrapper className="bg-white/50">
          <div className="container mx-auto px-4">
            <CaseSolution
              description={solutionData.description}
              features={solutionData.features}
              technicalDetails={solutionData.technicalDetails}
              techPoints={solutionData.techPoints}
            />
          </div>
        </SectionWrapper>

        <SectionWrapper className="bg-gray-100/60">
          <div className="container mx-auto px-4">
            <CaseImplementation
              stages={implementationData.stages}
              additionalInfo={implementationData.additionalInfo}
            />
          </div>
        </SectionWrapper>

        <SectionWrapper className="bg-white/50">
          <div className="container mx-auto px-4">
            <CaseResults
              metrics={resultsData.metrics}
              intro={resultsData.intro}
              results={resultsData.results}
            />

            {/* Дополнительный блок */}
            <div className="mt-16 px-4 sm:px-6 py-8 sm:py-10 rounded-2xl border border-blue-200/30 bg-white/50 shadow-sm">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-900">
                Как работает ИИ-агент по продажам на практике
              </h3>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-xl border border-gray-200">
                  <div className="text-sm font-medium text-gray-500 mb-2">
                    Традиционный процесс
                  </div>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Клиент оставляет заявку и ждет несколько часов</li>
                    <li>• Менеджер тратит время на первичный скрининг</li>
                    <li>• Значительная часть лидов теряется из-за задержек</li>
                    <li>• Непоследовательная квалификация лидов</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200">
                  <div className="text-sm font-medium text-blue-600 mb-2">
                    Процесс с ИИ-агентом
                  </div>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Мгновенный ответ и начало диалога (15 сек)</li>
                    <li>
                      • Структурированный сбор всей необходимой информации
                    </li>
                    <li>
                      • Квалификация и оценка потенциала в реальном времени
                    </li>
                    <li>
                      • Передача менеджеру подготовленного лида с полным
                      контекстом
                    </li>
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
                  Обсудить внедрение ИИ-агента
                  <BsArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper className="bg-gray-100/60">
          <div className="container mx-auto px-4">
            <CaseTechnologies technologies={technologiesData.technologies} />
          </div>
        </SectionWrapper>

        <SectionWrapper className="bg-white/50">
          <div className="container mx-auto px-4">
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
                  question: "Как ИИ-агент определяет приоритетность лидов?",
                  answer:
                    "ИИ-агент использует комплексную систему оценки, которая учитывает несколько факторов: потенциальный бюджет клиента, срочность потребности, стадию принятия решения, размер компании и соответствие профилю идеального клиента. Алгоритм машинного обучения постоянно улучшает эту оценку на основе исторических данных и результатов предыдущих взаимодействий.",
                },
                {
                  question: "Может ли ИИ-агент адаптироваться к специфике нашего бизнеса?",
                  answer:
                    "Да, это ключевое преимущество решения. ИИ-агент обучается на ваших данных, включая успешные продажи, скрипты, информацию о продуктах и типичные возражения клиентов. Чем дольше он используется, тем лучше понимает уникальные аспекты вашего бизнеса. Кроме того, система регулярно обновляется с учетом изменений в ассортименте, ценах и стратегии продаж.",
                },
                {
                  question: "Какое техническое обеспечение требуется для внедрения?",
                  answer:
                    "Решение работает в облаке и не требует установки дополнительного оборудования или программного обеспечения. Для интеграции с существующими системами (CRM, телефония, мессенджеры) используются стандартные API. В большинстве случаев внедрение занимает 4-6 недель, включая настройку, обучение и тестирование. Мы также предоставляем подробную документацию и обучение для вашей команды.",
                },
                {
                  question: "Как ИИ-агент передает лида живому менеджеру?",
                  answer:
                    "Процесс передачи лида полностью автоматизирован. Когда ИИ-агент определяет, что лид квалифицирован и готов к следующему этапу, он автоматически создает карточку в CRM с полной информацией о клиенте и контекстом разговора. Система назначает наиболее подходящего менеджера, учитывая его специализацию и текущую загрузку. Менеджер получает уведомление с кратким резюме и может сразу продолжить общение с клиентом, имея всю необходимую информацию.",
                },
                {
                  question: "Насколько сложно масштабировать решение при росте бизнеса?",
                  answer:
                    "Система изначально спроектирована для масштабирования. Облачная инфраструктура автоматически адаптируется к увеличению нагрузки, будь то рост числа лидов или расширение географии. Вы можете легко добавлять новые каналы коммуникации, продукты и сценарии взаимодействия. Архитектура решения позволяет обрабатывать от нескольких десятков до тысяч лидов ежедневно без потери в качестве обслуживания.",
                },
              ]}
              title="Вопросы об ИИ-агенте продаж"
              subtitle="Ответы на самые популярные вопросы о внедрении и использовании ИИ-агентов в отделе продаж"
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
