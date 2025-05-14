"use client";
import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Container from "../ui/Container";
import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";

const projectsData = [
  {
    id: 1,
    category: "Поддержка клиентов",
    title: "Улучшение клиентского сервиса с ИИ-агентами",
    description:
      "Разработали чат-бот на основе ИИ, который автоматизирует обработку запросов от клиентов. Чат-бот 24/7 решает 70% запросов без участия человека, сокращая время ожидания и повышая удовлетворенность клиентов на 40%.",
    image: "/assets/images/ai-customer-support-new.jpg",
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
    image: "/assets/images/cases/sale.jpg",
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
    image: "/assets/images/cases/ssm.jpg",
    link: "/cases/ai-content-assistant",
    metrics: [
      { number: "230%", label: "Рост частоты публикаций" },
      { number: "45%", label: "Увеличение вовлеченности" },
      { number: "5x", label: "Ускорение работы" },
    ],
  },
];

const Projects = () => {
  const { isDark } = useTheme();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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
      boxShadow:
        "0 20px 30px rgba(0, 0, 0, 0.1), 0 10px 15px rgba(0, 103, 243, 0.08)",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 10;

      // Reset scroll to beginning when reaching the end
      if (isAtEnd) {
        setTimeout(() => {
          if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo({
              left: 0,
              behavior: "smooth",
            });
          }
        }, 1000);
      }
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      return () => scrollContainer.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <motion.section
      id="projects"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="py-16 md:py-24 px-4 relative overflow-hidden"
    >
      {/* Градиентный фон */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900 -z-10"></div>
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-gradient-to-br from-blue-200/20 to-blue-400/20 dark:from-blue-500/10 dark:to-blue-700/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-200/20 to-indigo-400/20 dark:from-indigo-500/10 dark:to-indigo-700/10 rounded-full blur-3xl -z-10"></div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] md:gap-[40px] lg:gap-[60px]">
          {/* Left side - Fixed content */}
          <motion.div
            variants={itemVariants}
            className="lg:sticky lg:top-20"
            style={{ height: "fit-content" }}
          >
            <div className="p-4 sm:p-6 md:p-8">
              <div className="max-[425px]:flex max-[425px]:justify-center">
                <div
                  className={`inline-block px-4 py-1 rounded-full text-sm mb-4 bg-blue-50 text-blue-600 dark:bg-blue-900/40 dark:text-blue-300 font-medium border border-blue-100 dark:border-blue-800/60 ${
                    !isDark && "light-switch-box"
                  }`}
                >
                  Проекты
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-gray-900 dark:text-white mb-6 max-[425px]:text-center leading-tight">
                Реальные кейсы{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0167F3] to-[#399AFC]">
                  внедрения ИИ
                </span>
              </h2>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-xl max-[425px]:text-[14px] leading-relaxed">
                Каждый проект — это доказательство того, как искусственный интеллект помогает компаниям 
                достигать ощутимых результатов, повышать эффективность и открывать новые возможности 
                в самых разных сферах.
              </p>
            </div>
          </motion.div>

          {/* Right side - Scrollable cards */}
          <div>
            <div
              ref={scrollContainerRef}
              className="flex flex-col pb-8 gap-6 hide-scrollbar"
              style={{ scrollBehavior: "smooth" }}
            >
              {projectsData.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={cardVariants}
                  whileHover="hover"
                  className="relative flex-shrink-0 w-full overflow-hidden backdrop-blur-sm 
                  bg-white/95 dark:bg-gray-900/90 rounded-2xl
                  border border-blue-100/60 dark:border-blue-900/40
                  shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link href={project.link} className="block">
                    <div className="flex flex-col h-full">
                      <div className="relative w-full h-[220px]">
                        <Image
                          src={project.image}
                          alt={project.title}
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
                            {project.category}
                          </div>
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">
                            {project.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-2 md:line-clamp-3">
                            {project.description}
                          </p>

                          {/* Метрики */}
                          <div className="grid grid-cols-3 gap-4">
                            {project.metrics.map((metric, i) => (
                              <div
                                key={i}
                                className="text-center bg-blue-50/50 dark:bg-blue-900/20 p-2 rounded-lg border border-blue-100/50 dark:border-blue-800/40"
                              >
                                <div className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-0.5">
                                  {metric.number}
                                </div>
                                <div className="text-xs text-gray-600 dark:text-gray-400 tracking-tight">
                                  {metric.label}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </motion.section>
  );
};

export default Projects;
