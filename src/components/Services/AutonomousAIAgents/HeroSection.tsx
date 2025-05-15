"use client";

import { useTheme } from "@/context/ThemeContext";
import "@/style/hero.css";
import { BsArrowRight } from "react-icons/bs";
import ButtonLink from "@/components/ui/buttonLink";
import Container from "@/components/ui/Container";
import Breadcrumbs, { BreadcrumbItem } from "@/components/ui/Breadcrumbs";

// Helper function for smooth scrolling
const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const HeroSection = () => {
  const { isDark } = useTheme();
  
  // Настраиваем хлебные крошки
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: "Главная", href: "/" },
    { label: "Услуги", href: "/services" },
    { label: "ИИ-агенты", href: "/services/autonomous-ai-agents", isCurrentPage: true }
  ];
  
  return (
    <div
      id="hero"
      className="relative flex items-center justify-center overflow-hidden pt-30 sm:pt-[150px] md:pt-[180px] lg:pt-[200px] pb-16 md:pb-24"
    >
      {/* Background Video */}
      <div className="video-container o">
        <div className="video-content">
          <video autoPlay loop muted playsInline className="video-one">
            <source src="/assets/video/hero-bg.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Content */}
      <Container>
        <div className="relative z-20 text-center max-w-90p sm:max-w-[85%] md:max-w-[80%] lg:max-w-[900px] mx-auto px-4">
          <div className="mb-4">
            <Breadcrumbs items={breadcrumbItems} className="justify-center" />
          </div>

          <div>
            <h1 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[50px] font-bold dark:text-white text-black mb-4 sm:mb-5 md:mb-6">
              Откройте будущее с <br />
              <span className="text-gradient">ИИ-агентами</span> от
              Neuropolis.ai
            </h1>
          </div>

          <p
            className={`text-base sm:text-lg mb-6 sm:mb-8 max-[425px]:text-[14px] text-gray-800 dark:text-[#919191] leading-relaxed`}
          >
            Мы создаем интеллектуальные решения, которые трансформируют
            бизнес-процессы и открывают новые возможности для вашего бизнеса.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <ButtonLink
              variantBtn="btn"
              onClick={() => scrollToSection("contact")}
              className="w-full sm:w-auto bg-gradient-to-r from-[#0167F3] to-[#399AFC] text-white rounded-[10px] px-6 py-3 hover:opacity-90 transition-opacity"
            >
              Связаться с экспертом
              <BsArrowRight className="ml-2" />
            </ButtonLink>

            <ButtonLink
              variantBtn="link"
              onClick={() => scrollToSection("resources")}
              className="w-full sm:w-auto border border-gray-300 dark:border-[#363636] text-gray-800 dark:text-[#F2F2F2] bg-transparent dark:bg-[#050505] rounded-[10px] px-6 py-3 hover:bg-gray-100 dark:hover:bg-[#111111] transition-colors"
            >
              Скачать бесплатное руководство
            </ButtonLink>
          </div>

          <div className="mt-8 flex items-center justify-center">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-white dark:border-black overflow-hidden"
                >
                  <img
                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                    alt="User"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="ml-4">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                      fill="#FFD700"
                    />
                  </svg>
                ))}
              </div>
              <p className="text-sm dark:text-gray-400 text-gray-600 mt-0.5">
                от 100+ довольных клиентов
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
