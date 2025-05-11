"use client";

import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { Heading } from "@/components/ui/heading";
import Subheading from "@/components/ui/subheading";
import Badge from "@/components/ui/Badge";

// Общие стили градиентного фона, которые можно применить к любому компоненту
export const gradientBackgroundStyles = {
  lightGradient: "bg-gradient-to-b from-white via-blue-50/30 to-gray-50",
  darkGradient: "dark:bg-gradient-to-b dark:from-black dark:via-blue-950/10 dark:to-gray-900",
  overlay: "bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white via-blue-50 to-blue-100/30 dark:from-gray-950 dark:via-blue-950/10 dark:to-blue-900/10",
  grid: "bg-[url('/assets/images/grid-pattern.svg')] opacity-[0.03] dark:opacity-[0.07]",
  glowEffects: "animate-pulse bg-gradient-to-br from-blue-200/20 to-blue-400/20 dark:from-blue-500/10 dark:to-blue-700/10 rounded-full blur-3xl -z-5",
  secondaryGlowEffects: "animate-pulse bg-gradient-to-tr from-blue-200/20 to-blue-400/20 dark:from-blue-500/10 dark:to-blue-700/10 rounded-full blur-3xl -z-5"
};

// Фирменные цвета для градиентов
export const brandColors = {
  primary: "#0167F3",  // Начало градиента
  secondary: "#399AFC" // Конец градиента
};

interface CaseHeroProps {
  title: string;
  subtitle: string;
  imagePath: string;
  imageAlt: string;
}

export default function CaseHero({
  title,
  subtitle,
  imagePath,
  imageAlt,
}: CaseHeroProps) {
  const { isDark } = useTheme();

  return (
    <section className={`relative overflow-hidden pt-[100px] sm:pt-30 md:pt-[140px] lg:pt-[160px] pb-16 md:pb-24 ${gradientBackgroundStyles.lightGradient} ${gradientBackgroundStyles.darkGradient}`}>
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
          className="text-center mb-12 md:mb-16"
        >
          <motion.div animate={{ opacity: 1 }}>
            <Badge>Кейс</Badge>
          </motion.div>

          <motion.div animate={{ opacity: 1 }}>
            <Heading
              level={1}
              align="center"
              className="text-gray-900 dark:text-white mb-8 leading-tight"
            >
              <span className={`bg-clip-text text-transparent bg-gradient-to-r from-[${brandColors.primary}] to-[${brandColors.secondary}] relative`}>
                {title}
                <svg
                  className={`absolute -bottom-2 left-0 w-full h-2 text-[${brandColors.primary}]/20`}
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
          </motion.div>

          <motion.div animate={{ opacity: 1 }}>
            <Subheading align="center" className="max-w-3xl mx-auto">
              {subtitle}
            </Subheading>
          </motion.div>
        </motion.div>

        {/* Основное изображение кейса - уменьшенный размер */}
        <motion.div
          animate={{ opacity: 1 }}
          className="relative rounded-2xl overflow-hidden shadow-[0_15px_30px_-15px_rgba(0,0,0,0.2)] dark:shadow-[0_15px_30px_-15px_rgba(0,0,0,0.5)] max-w-4xl mx-auto"
        >
          <div className="relative h-[200px] sm:h-[280px] md:h-[350px] lg:h-[400px] w-full">
            <Image 
              src={imagePath} 
              alt={imageAlt} 
              fill 
              className="object-cover" 
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
