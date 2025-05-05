"use client";

import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";

// Данные о кейсах
const casesData = [
  {
    id: 1,
    category: "Поддержка клиентов",
    title: "Улучшение клиентского сервиса с ИИ-агентами",
    description:
      "Разработали чат-бот на основе ИИ, который автоматизирует обработку запросов от клиентов. Чат-бот 24/7 решает 70% запросов без участия человека, сокращая время ожидания и повышая удовлетворенность клиентов на 40%.",
    image: "/assets/images/callcenter.jpg",
    link: "/cases/ai-customer-support",
    metrics: [
      { number: "3 мин", label: "Среднее время ответа" },
      { number: "68%", label: "Рост NPS" },
      { number: "82%", label: "Автоматизация обращений" },
    ],
  },
  {
    id: 2,
    category: "Продажи",
    title: "AI-агент в отделе продаж",
    description:
      "Внедрили ИИ-агента для квалификации и первичной обработки лидов в B2B SaaS-компании. Это позволило сократить время отклика с 2 часов до 15 секунд и повысить конверсию на 27%.",
    image:
      "https://framerusercontent.com/images/ZpI3KG6axlIk98Y3TLt8CBGEJ0.jpg",
    link: "/cases/ai-sales-agent",
    metrics: [
      { number: "15 сек", label: "Время отклика" },
      { number: "27%", label: "Рост конверсии" },
      { number: "24/7", label: "Доступность" },
    ],
  },
  {
    id: 3,
    category: "Контент-маркетинг",
    title: "ИИ-ассистент для создания контента",
    description:
      "Разработали ИИ-агента для блогера с аудиторией 500K+ подписчиков, который анализирует стиль, исследует актуальные темы и генерирует тексты контента. Это увеличило регулярность публикаций на 230% и повысило вовлеченность аудитории на 45%.",
    image: "/assets/images/ai-consultation.jpg",
    link: "/cases/ai-content-assistant",
    metrics: [
      { number: "230%", label: "Рост частоты публикаций" },
      { number: "45%", label: "Увеличение вовлеченности" },
      { number: "5x", label: "Ускорение работы" },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
  hover: {
    y: -8,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

export default function CasesPage() {
  const { isDark } = useTheme();

  return (
    <>
      <Header />
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="py-20 md:py-28 px-4 relative overflow-hidden"
      >
        {/* Градиентный фон */}
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900 -z-10"></div>
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-gradient-to-br from-blue-200/20 to-blue-400/20 dark:from-blue-500/10 dark:to-blue-700/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-200/20 to-indigo-400/20 dark:from-indigo-500/10 dark:to-indigo-700/10 rounded-full blur-3xl -z-10"></div>

        <Container>
          <div className="text-center mb-16">
            <div
              className={`inline-block px-4 py-1 rounded-full text-sm mb-4 switch-box ${
                !isDark && "light-switch-box"
              }`}
            >
              Кейсы
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 dark:text-white mb-6">
              Наши успешные{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0167F3] to-[#399AFC]">
                ИИ-проекты
              </span>
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
              Каждый из этих проектов демонстрирует, как ИИ может обеспечить
              измеримые результаты в различных отраслях и принести реальную
              пользу бизнесу.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {casesData.map((caseItem, index) => (
              <motion.div
                key={caseItem.id}
                variants={cardVariants}
                whileHover="hover"
                className="relative w-full rounded-2xl overflow-hidden backdrop-blur-lg bg-white/60 dark:bg-gray-900/50 border border-white/20 dark:border-gray-700/30 shadow-md transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="relative h-[240px] md:h-auto md:w-2/5">
                    <Image
                      src={caseItem.image}
                      alt={caseItem.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-between p-6 md:w-3/5">
                    <div>
                      <div className="inline-block px-3 py-1 rounded-full text-xs mb-4 bg-blue-500/10 text-blue-600 dark:text-blue-400 font-medium">
                        {caseItem.category}
                      </div>
                      <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                        {caseItem.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-6">
                        {caseItem.description}
                      </p>

                      {/* Метрики */}
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        {caseItem.metrics.map((metric, i) => (
                          <div key={i} className="text-center">
                            <div className="text-xl font-bold text-blue-600 dark:text-blue-400">
                              {metric.number}
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <motion.div whileHover={{ x: 5 }}>
                      <Link
                        href={caseItem.link}
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium"
                      >
                        Подробнее <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl 
              bg-gradient-to-r from-[#0167F3] to-[#399AFC] hover:from-[#0157D3] hover:to-[#2988E8]
              text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Обсудить ваш проект
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </Container>
      </motion.section>
      <Footer />
    </>
  );
}
