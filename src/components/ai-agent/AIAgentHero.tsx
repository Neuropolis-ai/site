"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { ArrowRight, Bot, Brain, Zap, BarChart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";
import { Heading } from "@/components/ui/heading";
import Subheading from "@/components/ui/subheading";
import Badge from "@/components/ui/Badge";

export default function AIAgentHero() {
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
    <section className="relative overflow-hidden pt-[100px] sm:pt-30 md:pt-[140px] lg:pt-[160px] pb-16 md:pb-24 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900">
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
              <Badge>ИИ-агенты для бизнеса</Badge>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Heading
                level={1}
                className="text-gray-900 dark:text-white mb-8 leading-tight"
              >
                Создаем{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-light relative">
                  ИИ-агентов
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-2 text-primary/20"
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
                , которые автоматизируют рутину и увеличивают прибыль вашего бизнеса
              </Heading>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Subheading className="mb-12">
                Разрабатываем интеллектуальных помощников на базе ИИ, которые берут на
                себя повторяющиеся задачи, оптимизируют процессы и высвобождают время
                ваших сотрудников для стратегических целей.
              </Subheading>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <Link
                href="#cta"
                className="group relative bg-gradient-to-r from-primary to-primary-light text-white font-semibold py-3.5 px-7 rounded-lg flex items-center justify-center overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
                <span className="relative flex items-center">
                  Получить бесплатную консультацию{" "}
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
              <Link
                href="#use-cases"
                className="group relative bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-200 dark:border-gray-700 font-semibold py-3.5 px-7 rounded-lg flex items-center justify-center overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full bg-gray-100 dark:bg-gray-700 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
                <span className="relative">Посмотреть примеры</span>
              </Link>
            </motion.div>

            {/* Преимущества с современными иконками */}
            <motion.div
              variants={fadeIn}
              className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-4"
            >
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/40 dark:to-blue-800/40 flex items-center justify-center mr-3 shadow-sm">
                  <Zap size={20} className="text-blue-600 dark:text-blue-400" />
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  Автоматизация до 80% рутины
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/40 dark:to-blue-800/40 flex items-center justify-center mr-3 shadow-sm">
                  <BarChart size={20} className="text-blue-600 dark:text-blue-400" />
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  Снижение затрат на персонал
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/40 dark:to-blue-800/40 flex items-center justify-center mr-3 shadow-sm">
                  <Brain size={20} className="text-blue-600 dark:text-blue-400" />
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
                {/* Интерфейс ИИ-агента */}
                <div className="relative w-[360px] h-[460px] rounded-2xl bg-white dark:bg-gray-800 shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
                  {/* Заголовок агента */}
                  <div className="w-full h-14 bg-gradient-to-r from-primary to-primary-light flex items-center px-5">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                        <Bot size={24} className="text-white" />
                      </div>
                      <div className="text-white font-medium">
                        Нейрополис Агент
                      </div>
                    </div>
                  </div>

                  {/* Область рабочего стола агента */}
                  <div className="p-4 h-[calc(460px-56px)] bg-gray-50 dark:bg-gray-850 overflow-y-auto">
                    {/* Задачи агента */}
                    <div className="flex flex-col space-y-4">
                      <div className="bg-white dark:bg-gray-700 rounded-xl p-4 shadow-sm">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="text-green-500">
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                            </div>
                            <span className="font-medium text-gray-800 dark:text-white">Задача выполнена</span>
                          </div>
                          <span className="text-xs text-gray-500 dark:text-gray-400">10:15</span>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          Создан отчет по продажам за последний квартал. Найдены перспективные направления.
                        </p>
                      </div>

                      <div className="bg-white dark:bg-gray-700 rounded-xl p-4 shadow-sm">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="text-blue-500">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                              </svg>
                            </div>
                            <span className="font-medium text-gray-800 dark:text-white">Задача в процессе</span>
                          </div>
                          <span className="text-xs text-gray-500 dark:text-gray-400">11:30</span>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          Анализ обращений клиентов и формирование рекомендаций по улучшению сервиса.
                        </p>
                      </div>

                      <div className="bg-white dark:bg-gray-700 rounded-xl p-4 shadow-sm">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center">
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="text-orange-500">
                                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                                <line x1="12" y1="9" x2="12" y2="13"></line>
                                <line x1="12" y1="17" x2="12.01" y2="17"></line>
                              </svg>
                            </div>
                            <span className="font-medium text-gray-800 dark:text-white">Требует внимания</span>
                          </div>
                          <span className="text-xs text-gray-500 dark:text-gray-400">12:45</span>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          Найдены аномалии в данных по расходам на рекламу. Требуется проверка человеком.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Декоративные элементы вокруг карточки */}
                <div className="absolute top-10 -right-4 w-20 h-20 bg-blue-400/10 dark:bg-blue-500/20 rounded-full backdrop-blur-md z-20 flex items-center justify-center">
                  <Bot
                    size={24}
                    className="text-blue-500/80 dark:text-blue-400"
                  />
                </div>
                <div className="absolute bottom-20 -left-5 w-16 h-16 bg-indigo-400/10 dark:bg-indigo-500/20 rounded-full backdrop-blur-md z-20 flex items-center justify-center">
                  <Brain
                    size={20}
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
}
