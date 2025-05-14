"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { ArrowRight, Brain, Zap, BarChart, Code, Sparkles, Bot } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";
import { Heading } from "@/components/ui/heading";
import Subheading from "@/components/ui/subheading";
import Badge from "@/components/ui/Badge";
import "@/style/hero.css";
import "@/style/text-animations.css";

// Helper function for smooth scrolling
const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const ClientHero = () => {
  const { isDark } = useTheme();

  // Анимации
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const floatAnimation = {
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-[100px] sm:pt-30 md:pt-[140px] lg:pt-[160px] pb-16 md:pb-24 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900"
    >
      {/* Улучшенный фон с эффектами морфинга */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white via-blue-50 to-indigo-50 dark:from-gray-950 dark:via-blue-950/10 dark:to-indigo-950/10 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[url('/assets/images/grid-pattern.svg')] opacity-[0.03] dark:opacity-[0.07]"></div>
      </div>

      {/* Современные 3D градиенты */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-blue-400/20 dark:from-blue-500/10 dark:to-blue-700/10 rounded-full blur-3xl -z-5 animate-pulse"></div>
      <div
        className="absolute top-1/3 left-1/4 w-80 h-80 bg-gradient-to-tr from-indigo-200/20 to-indigo-400/20 dark:from-indigo-500/10 dark:to-indigo-700/10 rounded-full blur-3xl -z-5 animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-indigo-200/20 to-indigo-400/20 dark:from-indigo-500/10 dark:to-indigo-700/10 rounded-full blur-3xl -z-5 animate-pulse"
        style={{ animationDelay: "4s" }}
      ></div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Левая колонка - Текст */}
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 max-w-2xl lg:max-w-none mx-auto lg:mx-0"
          >
            <motion.div variants={fadeIn}>
              <Badge>Искусственный интеллект для бизнеса</Badge>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Heading
                level={1}
                className="text-gray-900 dark:text-white mb-8 leading-tight"
              >
                Автоматизация и разработка{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0167F3] to-[#399AFC] relative">
                  ИИ-решений
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
                </span>{" "}
                для бизнеса
              </Heading>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Subheading className="mb-12">
                Повышайте эффективность, автоматизируйте процессы и снижайте издержки
                с помощью индивидуальных ИИ-решений. Освободите команду от рутины и
                направьте фокус на ключевые стратегические цели.
              </Subheading>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <button
                onClick={() => scrollToSection("contact")}
                className="group relative bg-gradient-to-r from-[#0167F3] to-[#399AFC] text-white font-semibold py-3.5 px-7 rounded-lg flex items-center justify-center overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
                <span className="relative flex items-center">
                  Узнать, как внедрить ИИ в мой бизнес{" "}
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="group relative bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-200 dark:border-gray-700 font-semibold py-3.5 px-7 rounded-lg flex items-center justify-center overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full bg-gray-100 dark:bg-gray-700 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
                <span className="relative">Наши решения</span>
              </button>
            </motion.div>

            {/* Преимущества с современными иконками */}
            <motion.div
              variants={fadeIn}
              className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-4"
            >
              <div className="flex items-center">
                <div className="flex-shrink-0 w-12 h-12 aspect-square rounded-full bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 dark:from-blue-900/40 dark:via-blue-800/40 dark:to-blue-900/40 flex items-center justify-center mr-3 shadow-md">
                  <Zap size={20} strokeWidth={2.5} className="text-blue-600 dark:text-blue-400" />
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  Автоматизация до 80% рутины
                </p>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0 w-12 h-12 aspect-square rounded-full bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 dark:from-blue-900/40 dark:via-blue-800/40 dark:to-blue-900/40 flex items-center justify-center mr-3 shadow-md">
                  <BarChart size={20} strokeWidth={2.5} className="text-blue-600 dark:text-blue-400" />
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  Снижение затрат на персонал
                </p>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0 w-12 h-12 aspect-square rounded-full bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 dark:from-blue-900/40 dark:via-blue-800/40 dark:to-blue-900/40 flex items-center justify-center mr-3 shadow-md">
                  <Brain size={20} strokeWidth={2.5} className="text-blue-600 dark:text-blue-400" />
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  Рост эффективности процессов
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Правая колонка - Интерактивная иллюстрация */}
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 relative"
          >
            <div className="relative w-full h-[480px] flex items-center justify-center lg:justify-end">
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="relative z-10 w-full h-full flex items-center justify-center"
              >
                {/* ИИ-система иллюстрация */}
                <div className="relative w-[360px] h-[460px] rounded-2xl bg-white dark:bg-gray-800 shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
                  {/* Заголовок */}
                  <div className="w-full h-14 bg-gradient-to-r from-[#0167F3] to-[#399AFC] flex items-center px-5">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                        <Brain size={24} className="text-white" />
                      </div>
                      <div className="text-white font-medium">
                        Нейрополис ИИ
                      </div>
                    </div>
                  </div>

                  {/* Главная область */}
                  <div className="p-4 h-[calc(460px-56px)] bg-gray-50 dark:bg-gray-850 overflow-y-auto">
                    {/* Карточки решений */}
                    <div className="flex flex-col space-y-4 relative">
                      {/* Декоративная линия */}
                      <div className="absolute left-4 top-8 bottom-8 w-0.5 bg-gradient-to-b from-blue-300/0 via-blue-300 to-blue-300/0 dark:from-blue-700/0 dark:via-blue-700 dark:to-blue-700/0"></div>
                      
                      {/* Заголовок */}
                      <div className="text-center mb-2">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">ИИ-решения для бизнеса</h3>
                      </div>
                      
                      {/* Решение 1 */}
                      <div className="ml-6 pl-4 relative">
                        <div className="absolute left-[-16.5px] top-3 w-3 h-3 rounded-full bg-blue-500 transform -translate-x-[0.5px]"></div>
                        <div className="bg-white dark:bg-gray-700 rounded-xl p-4 shadow-sm">
                          <div className="flex items-center mb-2">
                            <Bot size={18} className="text-blue-500 mr-2" />
                            <h3 className="font-medium text-gray-800 dark:text-white">ИИ-ассистенты</h3>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300 text-sm">
                            Интеллектуальные помощники для автоматизации коммуникаций и рутинных задач
                          </p>
                        </div>
                      </div>
                      
                      {/* Решение 2 */}
                      <div className="ml-6 pl-4 relative">
                        <div className="absolute left-[-16.5px] top-3 w-3 h-3 rounded-full bg-indigo-500 transform -translate-x-[0.5px]"></div>
                        <div className="bg-white dark:bg-gray-700 rounded-xl p-4 shadow-sm">
                          <div className="flex items-center mb-2">
                            <Code size={18} className="text-indigo-500 mr-2" />
                            <h3 className="font-medium text-gray-800 dark:text-white">Интеграция с бизнес-системами</h3>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300 text-sm">
                            Подключение ИИ к CRM, ERP и другим корпоративным системам
                          </p>
                        </div>
                      </div>
                      
                      {/* Решение 3 */}
                      <div className="ml-6 pl-4 relative">
                        <div className="absolute left-[-16.5px] top-3 w-3 h-3 rounded-full bg-teal-500 transform -translate-x-[0.5px]"></div>
                        <div className="bg-white dark:bg-gray-700 rounded-xl p-4 shadow-sm">
                          <div className="flex items-center mb-2">
                            <Sparkles size={18} className="text-teal-500 mr-2" />
                            <h3 className="font-medium text-gray-800 dark:text-white">Генерация контента</h3>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300 text-sm">
                            Автоматическое создание маркетинговых и продуктовых материалов
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Декоративные элементы вокруг карточки */}
                <div className="absolute top-10 -right-4 w-20 h-20 aspect-square rounded-full bg-gradient-to-br from-blue-400/10 via-blue-500/20 to-blue-400/10 dark:from-blue-500/10 dark:via-blue-600/20 dark:to-blue-500/10 backdrop-blur-md z-20 flex items-center justify-center shadow-lg">
                  <Brain
                    size={28}
                    strokeWidth={2}
                    className="text-blue-500/80 dark:text-blue-400"
                  />
                </div>
                <div className="absolute bottom-20 -left-5 w-16 h-16 aspect-square rounded-full bg-gradient-to-br from-indigo-400/10 via-indigo-500/20 to-indigo-400/10 dark:from-indigo-500/10 dark:via-indigo-600/20 dark:to-indigo-500/10 backdrop-blur-md z-20 flex items-center justify-center shadow-lg">
                  <Sparkles
                    size={22}
                    strokeWidth={2}
                    className="text-indigo-500/80 dark:text-indigo-400"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default ClientHero;
