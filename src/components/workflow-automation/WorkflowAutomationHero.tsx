"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { ArrowRight, Activity, Workflow, Zap, BarChart, GitBranch, RefreshCw } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";
import { Heading } from "@/components/ui/Heading";
import Subheading from "@/components/ui/subheading";
import Badge from "@/components/ui/Badge";

export default function WorkflowAutomationHero() {
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
    <section className="relative overflow-hidden pt-[100px] sm:pt-30 md:pt-[140px] lg:pt-[160px] pb-16 md:pb-24 bg-gradient-to-b from-white to-blue-50 dark:from-gray-950 dark:to-gray-900">
      {/* Улучшенный фон с эффектами морфинга */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white via-blue-50 to-sky-50 dark:from-gray-950 dark:via-blue-950/10 dark:to-sky-950/10 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[url('/assets/images/grid-pattern.svg')] opacity-[0.03] dark:opacity-[0.07]"></div>
      </div>

      {/* Современные 3D градиенты */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-blue-400/20 dark:from-blue-500/10 dark:to-blue-700/10 rounded-full blur-3xl -z-5 animate-pulse"></div>
      <div
        className="absolute top-1/3 left-1/4 w-80 h-80 bg-gradient-to-tr from-sky-200/20 to-sky-400/20 dark:from-sky-500/10 dark:to-sky-700/10 rounded-full blur-3xl -z-5 animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-sky-200/20 to-sky-400/20 dark:from-sky-500/10 dark:to-sky-700/10 rounded-full blur-3xl -z-5 animate-pulse"
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
              <Badge>Автоматизация бизнес-процессов</Badge>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Heading
                level={1}
                className="text-gray-900 dark:text-white mb-8 leading-tight"
              >
                Интеллектуальная{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-sky-400 relative">
                  автоматизация процессов
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-2 text-blue-500/20"
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
                для эффективного бизнеса
              </Heading>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Subheading className="mb-12">
                Интегрируем инструменты ИИ в ваши существующие программные платформы,
                CRM-системы и маркетинговые каналы, оптимизируя рабочие процессы и
                повышая эффективность вашего бизнеса.
              </Subheading>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <Link
                href="#cta"
                className="group relative bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold py-3.5 px-7 rounded-lg flex items-center justify-center overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
                <span className="relative flex items-center">
                  Получить бесплатную консультацию{" "}
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
              <Link
                href="#workflow-solution"
                className="group relative bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-200 dark:border-gray-700 font-semibold py-3.5 px-7 rounded-lg flex items-center justify-center overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full bg-gray-100 dark:bg-gray-700 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
                <span className="relative">Узнать больше</span>
              </Link>
            </motion.div>

            {/* Преимущества с современными иконками */}
            <motion.div
              variants={fadeIn}
              className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-4"
            >
              <div className="flex items-center">
                <div className="flex-shrink-0 w-12 h-12 aspect-square rounded-full bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 dark:from-blue-900/40 dark:via-blue-800/40 dark:to-blue-900/40 flex items-center justify-center mr-3 shadow-md">
                  <GitBranch size={20} strokeWidth={2.5} className="text-blue-600 dark:text-blue-400" />
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  Бесшовная интеграция с CRM
                </p>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0 w-12 h-12 aspect-square rounded-full bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 dark:from-blue-900/40 dark:via-blue-800/40 dark:to-blue-900/40 flex items-center justify-center mr-3 shadow-md">
                  <Activity size={20} strokeWidth={2.5} className="text-blue-600 dark:text-blue-400" />
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  Повышение продуктивности до 40%
                </p>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0 w-12 h-12 aspect-square rounded-full bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 dark:from-blue-900/40 dark:via-blue-800/40 dark:to-blue-900/40 flex items-center justify-center mr-3 shadow-md">
                  <BarChart size={20} strokeWidth={2.5} className="text-blue-600 dark:text-blue-400" />
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  Оптимизация затрат на персонал
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
                {/* Интерфейс автоматизации процессов */}
                <div className="relative w-[360px] h-[460px] rounded-2xl bg-white dark:bg-gray-800 shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
                  {/* Заголовок интерфейса */}
                  <div className="w-full h-14 bg-gradient-to-r from-blue-600 to-blue-500 flex items-center px-5">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                        <Workflow size={24} className="text-white" />
                      </div>
                      <div className="text-white font-medium">
                        Автоматизация процессов
                      </div>
                    </div>
                  </div>

                  {/* Область визуализации рабочих процессов */}
                  <div className="p-4 h-[calc(460px-56px)] bg-gray-50 dark:bg-gray-850 overflow-y-auto">
                    {/* Визуализация рабочего процесса */}
                    <div className="flex flex-col space-y-6">
                      {/* Заголовок процесса */}
                      <div className="text-center py-2">
                        <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Рабочий процесс</div>
                        <div className="text-lg font-semibold text-gray-800 dark:text-white">Обработка заявок клиентов</div>
                      </div>
                      
                      {/* Визуализация этапов */}
                      <div className="relative">
                        {/* Вертикальная линия */}
                        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-800"></div>
                        
                        {/* Этап 1 */}
                        <div className="relative pl-12 pb-8">
                          <div className="absolute left-0 top-1.5 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold z-10">1</div>
                          <div className="bg-white dark:bg-gray-700 rounded-xl p-4 shadow-sm border border-blue-100 dark:border-blue-800">
                            <div className="flex justify-between items-start mb-2">
                              <span className="font-medium text-gray-800 dark:text-white">Получение заявки</span>
                              <div className="flex items-center">
                                <span className="text-xs text-green-500 bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded-full">
                                  Автоматизировано
                                </span>
                              </div>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                              Система автоматически регистрирует входящие заявки из всех каналов связи
                            </p>
                          </div>
                        </div>
                        
                        {/* Этап 2 */}
                        <div className="relative pl-12 pb-8">
                          <div className="absolute left-0 top-1.5 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold z-10">2</div>
                          <div className="bg-white dark:bg-gray-700 rounded-xl p-4 shadow-sm border border-blue-100 dark:border-blue-800">
                            <div className="flex justify-between items-start mb-2">
                              <span className="font-medium text-gray-800 dark:text-white">Анализ приоритета</span>
                              <div className="flex items-center">
                                <span className="text-xs text-blue-500 bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded-full">
                                  ИИ
                                </span>
                              </div>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                              ИИ определяет приоритет запроса на основе его содержания и контекста
                            </p>
                          </div>
                        </div>
                        
                        {/* Этап 3 */}
                        <div className="relative pl-12">
                          <div className="absolute left-0 top-1.5 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold z-10">3</div>
                          <div className="bg-white dark:bg-gray-700 rounded-xl p-4 shadow-sm border border-blue-100 dark:border-blue-800">
                            <div className="flex justify-between items-start mb-2">
                              <span className="font-medium text-gray-800 dark:text-white">Распределение</span>
                              <div className="flex items-center">
                                <RefreshCw size={16} className="text-amber-500 animate-spin mr-1" />
                                <span className="text-xs text-amber-500">В процессе</span>
                              </div>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                              Маршрутизация заявки в нужный отдел с учетом нагрузки сотрудников
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Декоративные элементы вокруг карточки */}
                <div className="absolute top-10 -right-4 w-20 h-20 aspect-square rounded-full bg-gradient-to-br from-blue-400/10 via-blue-500/20 to-blue-400/10 dark:from-blue-500/10 dark:via-blue-600/20 dark:to-blue-500/10 backdrop-blur-md z-20 flex items-center justify-center shadow-lg">
                  <Workflow
                    size={28}
                    strokeWidth={2}
                    className="text-blue-500/80 dark:text-blue-400"
                  />
                </div>
                <div className="absolute bottom-20 -left-5 w-16 h-16 aspect-square rounded-full bg-gradient-to-br from-sky-400/10 via-sky-500/20 to-sky-400/10 dark:from-sky-500/10 dark:via-sky-600/20 dark:to-sky-500/10 backdrop-blur-md z-20 flex items-center justify-center shadow-lg">
                  <Zap
                    size={22}
                    strokeWidth={2}
                    className="text-sky-500/80 dark:text-sky-400"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
