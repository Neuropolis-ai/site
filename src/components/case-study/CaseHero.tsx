"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { Heading } from "@/components/ui/heading";
import Subheading from "@/components/ui/subheading";
import Badge from "@/components/ui/Badge";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { ReactNode, useState, useEffect } from "react";

// Общие стили градиентного фона, которые можно применить к любому компоненту
export const gradientBackgroundStyles = {
  lightGradient: "bg-gradient-to-b from-white via-blue-50/30 to-gray-50 dark:from-gray-900 dark:via-blue-900/10 dark:to-gray-900",
  overlay: "bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white via-blue-50 to-blue-100/30 dark:from-gray-900 dark:via-blue-950/20 dark:to-gray-950/50",
  grid: "bg-[url('/assets/images/grid-pattern.svg')] opacity-[0.03] dark:opacity-[0.05]",
  glowEffects: "animate-pulse bg-gradient-to-br from-blue-200/20 to-blue-400/20 dark:from-blue-800/10 dark:to-blue-600/10 rounded-full blur-3xl -z-5",
  secondaryGlowEffects: "animate-pulse bg-gradient-to-tr from-blue-200/20 to-blue-400/20 dark:from-blue-800/10 dark:to-blue-600/10 rounded-full blur-3xl -z-5"
};

// Фирменные цвета для градиентов
export const brandColors = {
  primary: "#0167F3",  // Начало градиента
  secondary: "#399AFC" // Конец градиента
};

interface CaseHeroProps {
  title: string | ReactNode;
  subtitle: string;
  imagePath: string;
  imageAlt: string;
  pageNavigation?: { label: string; href: string }[];
}

export default function CaseHero({
  title,
  subtitle,
  imagePath,
  imageAlt,
  pageNavigation = [],
}: CaseHeroProps) {
  // Стандартная навигация для кейсов, если не передана специфическая
  const defaultNavigation = [
    { label: "Задача", href: "#task-section" },
    { label: "Анализ проблемы", href: "#analysis-section" },
    { label: "Решение", href: "#solution-section" },
    { label: "Внедрение", href: "#implementation-section" },
    { label: "Результаты", href: "#results-section" },
    { label: "Отзыв", href: "#testimonial-section" },
    { label: "FAQ", href: "#faq-section" },
  ];

  const navigation = pageNavigation.length > 0 ? pageNavigation : defaultNavigation;
  
  // Состояние для активного раздела
  const [activeSection, setActiveSection] = useState<string>("");
  
  // Отслеживание активного раздела при скролле
  useEffect(() => {
    const handleScroll = () => {
      const sections = navigation.map(item => item.href.replace('#', ''));
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Если раздел видим на экране и его верхняя граница выше центра экрана
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Инициализация при загрузке
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navigation]);

  // Функция для плавного скролла к разделу
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      // Плавный скролл к элементу
      element.scrollIntoView({ behavior: 'smooth' });
      // Обновляем URL
      window.history.pushState(null, '', `#${sectionId}`);
      // Обновляем активный раздел
      setActiveSection(sectionId);
    }
  };

  return (
    <section 
      className={`relative overflow-hidden pt-[100px] sm:pt-30 md:pt-[140px] lg:pt-[160px] pb-16 md:pb-24 ${gradientBackgroundStyles.lightGradient}`}
      itemScope
      itemType="https://schema.org/WebPageElement"
    >
      {/* Хлебные крошки в верхней части Hero с отступами */}
      <div className="absolute top-[80px] sm:top-[100px] left-0 w-full z-10">
        <Container>
          <div className="pl-4 md:pl-8 opacity-80 hover:opacity-100 transition-opacity">
            <Breadcrumbs className="text-xs sm:text-sm py-2" />
          </div>
        </Container>
      </div>

      {/* Улучшенный фон с эффектами морфинга */}
      <div className={`absolute inset-0 ${gradientBackgroundStyles.overlay} -z-10 overflow-hidden`}>
        <div className={`absolute top-0 right-0 w-full h-full ${gradientBackgroundStyles.grid}`}></div>
      </div>

      {/* Современные 3D градиенты */}
      <div className={`absolute -top-40 -right-40 w-96 h-96 ${gradientBackgroundStyles.glowEffects}`}></div>
      <div
        className={`absolute top-1/3 left-1/4 w-80 h-80 ${gradientBackgroundStyles.secondaryGlowEffects}`}
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className={`absolute -bottom-40 -left-40 w-96 h-96 ${gradientBackgroundStyles.secondaryGlowEffects}`}
        style={{ animationDelay: "4s" }}
      ></div>

      <Container>
        <motion.div
          animate={{ opacity: 1 }}
          className="text-center mb-12 md:mb-16 mx-auto"
        >
          <motion.div animate={{ opacity: 1 }}>
            <Badge>Кейс</Badge>
          </motion.div>

          <motion.div animate={{ opacity: 1 }}>
            {typeof title === 'string' ? (
              <Heading
                level={1}
                align="center"
                className="text-gray-900 mb-8 leading-tight"
                itemProp="headline"
              >
                <span className="text-gray-900 relative">
                  {title.includes("ИИ-ассистент") ? (
                    <>
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0167F3] to-[#399AFC]">ИИ-ассистент</span>
                      {title.replace("ИИ-ассистент", "")}
                    </>
                  ) : (
                    title
                  )}
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-2 text-[#0167F3]/20"
                    viewBox="0 0 100 15"
                    preserveAspectRatio="none"
                    strokeWidth={2}
                  >
                    <path
                      d="M0,5 Q25,0 50,5 T100,5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </Heading>
            ) : (
              title
            )}
          </motion.div>

          <motion.div animate={{ opacity: 1 }}>
            <Subheading align="center" className="max-w-3xl mx-auto" itemProp="description">
              {subtitle}
            </Subheading>
          </motion.div>
        </motion.div>

        {/* Основное изображение кейса - уменьшенный размер */}
        <motion.div
          animate={{ opacity: 1 }}
          className="relative rounded-2xl overflow-hidden shadow-[0_15px_30px_-15px_rgba(0,0,0,0.2)] max-w-[800px] mx-auto"
          itemProp="image"
          itemScope
          itemType="https://schema.org/ImageObject"
        >
          <meta itemProp="url" content={imagePath} />
          <meta itemProp="contentUrl" content={imagePath} />
          <meta itemProp="caption" content={imageAlt} />
          <meta itemProp="description" content={`Изображение для кейса: ${title} - ${subtitle}`} />
          <meta itemProp="representativeOfPage" content="true" />
          <div className="relative h-[240px] sm:h-[300px] md:h-[360px] lg:h-[400px] max-w-[800px] mx-auto w-full">
            <Image 
              src={imagePath} 
              alt={imageAlt} 
              fill 
              className="object-cover" 
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 800px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </motion.div>
      </Container>

      {/* Навигация по странице, расположенная внизу хедера */}
      <div className="relative max-w-[800px] mx-auto mt-6 mb-0 px-4 z-10">
        <div className="rounded-lg bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-lg border border-gray-200/80 dark:border-gray-800/80 overflow-hidden">
          <div className="flex overflow-x-auto scrollbar-hide gap-1 sm:gap-2 justify-start md:justify-center py-3 px-2 sm:px-4">
            {navigation.map((item, index) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a 
                  key={index}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, sectionId)}
                  className={`text-sm whitespace-nowrap px-2.5 py-1.5 rounded-md transition-all transform hover:scale-105 ${
                    isActive 
                    ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium shadow-sm" 
                    : "text-gray-700 dark:text-gray-300 hover:bg-blue-50/70 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
