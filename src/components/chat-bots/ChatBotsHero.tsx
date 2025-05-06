"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import {
  ArrowRight,
  MessageSquare,
  Zap,
  Star,
  Shield,
  BarChart,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";

export default function ChatBotsHero() {
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
    <section className="relative overflow-hidden pt-[120px] sm:pt-[150px] md:pt-[180px] lg:pt-[200px] pb-16 md:pb-24 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900">
      {/* Улучшенный фон с эффектами морфинга */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white via-blue-50 to-indigo-50 dark:from-gray-950 dark:via-blue-950/10 dark:to-indigo-950/10 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[url('/assets/images/grid-pattern.svg')] opacity-[0.03] dark:opacity-[0.07]"></div>
      </div>

      {/* Современные 3D градиенты */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-blue-400/30 dark:from-blue-500/10 dark:to-blue-700/10 rounded-full blur-3xl -z-5 animate-pulse"></div>
      <div
        className="absolute top-1/3 left-1/4 w-80 h-80 bg-gradient-to-tr from-purple-200/30 to-purple-400/30 dark:from-purple-500/10 dark:to-purple-700/10 rounded-full blur-3xl -z-5 animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-indigo-200/30 to-indigo-400/30 dark:from-indigo-500/10 dark:to-indigo-700/10 rounded-full blur-3xl -z-5 animate-pulse"
        style={{ animationDelay: "4s" }}
      ></div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Левая колонка - Текст (увеличена до 7 колонок) */}
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 max-w-2xl lg:max-w-none mx-auto lg:mx-0"
          >
            <motion.div
              variants={fadeIn}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm mb-0.5 bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800/50 backdrop-blur-sm"
            >
              <svg
                width={15}
                height={15}
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-blue-600 dark:text-blue-400"
              >
                <path
                  opacity="0.2"
                  d="M14.0063 8.11585L9.82259 9.6371L8.30133 13.8208C8.26582 13.9165 8.20186 13.9991 8.11807 14.0573C8.03428 14.1156 7.93465 14.1469 7.83258 14.1469C7.73052 14.1469 7.63089 14.1156 7.5471 14.0573C7.4633 13.9991 7.39935 13.9165 7.36383 13.8208L5.84508 9.6371L1.66133 8.11585C1.56565 8.08033 1.48312 8.01638 1.42484 7.93258C1.36656 7.84879 1.33533 7.74917 1.33533 7.6471C1.33533 7.54503 1.36656 7.44541 1.42484 7.36161C1.48312 7.27782 1.56565 7.21387 1.66133 7.17835L5.84508 5.6596L7.36633 1.47585C7.40185 1.38016 7.4658 1.29763 7.5496 1.23936C7.63339 1.18108 7.73302 1.14984 7.83508 1.14984C7.93715 1.14984 8.03678 1.18108 8.12057 1.23936C8.20436 1.29763 8.26832 1.38016 8.30383 1.47585L9.82508 5.6596L14.0088 7.18085C14.1036 7.21708 14.1851 7.28129 14.2425 7.36495C14.2999 7.44861 14.3305 7.54775 14.3303 7.64921C14.33 7.75067 14.2989 7.84965 14.241 7.933C14.1831 8.01635 14.1013 8.08012 14.0063 8.11585Z"
                  fill="currentColor"
                />
                <path
                  d="M14.1776 6.71085L10.2126 5.2696L8.77134 1.3046C8.7003 1.11323 8.5724 0.948173 8.40481 0.831617C8.23722 0.715062 8.03797 0.652588 7.83384 0.652588C7.6297 0.652588 7.43046 0.715062 7.26287 0.831617C7.09528 0.948173 6.96737 1.11323 6.89634 1.3046L5.45509 5.2696L1.49009 6.71085C1.29871 6.78189 1.13366 6.90979 1.0171 7.07738C0.900548 7.24497 0.838074 7.44422 0.838074 7.64835C0.838074 7.85249 0.900548 8.05173 1.0171 8.21932C1.13366 8.38691 1.29871 8.51482 1.49009 8.58585L5.45509 10.0277L6.89634 13.9921C6.96737 14.1835 7.09528 14.3485 7.26287 14.4651C7.43046 14.5816 7.6297 14.6441 7.83384 14.6441C8.03797 14.6441 8.23722 14.5816 8.40481 14.4651C8.5724 14.3485 8.7003 14.1835 8.77134 13.9921L10.2132 10.0271L14.1776 8.58585C14.369 8.51482 14.534 8.38691 14.6506 8.21932C14.7671 8.05173 14.8296 7.85249 14.8296 7.64835C14.8296 7.44422 14.7671 7.24497 14.6506 7.07738C14.534 6.90979 14.369 6.78189 14.1776 6.71085ZM9.65134 9.1671C9.58275 9.19208 9.52047 9.23176 9.46886 9.28337C9.41725 9.33498 9.37756 9.39727 9.35259 9.46585L7.83384 13.6421L6.31509 9.46585C6.29012 9.39727 6.25043 9.33498 6.19882 9.28337C6.14721 9.23176 6.08492 9.19208 6.01634 9.1671L1.84009 7.64835L6.01634 6.1296C6.08492 6.10463 6.14721 6.06494 6.19882 6.01333C6.25043 5.96172 6.29012 5.89944 6.31509 5.83085L7.83384 1.6546L9.35259 5.83085C9.37756 5.89944 9.41725 5.96172 9.46886 6.01333C9.52047 6.06494 9.58275 6.10463 9.65134 6.1296L13.8276 7.64835L9.65134 9.1671Z"
                  fill="currentColor"
                />
              </svg>{" "}
              Разработка чат-ботов нового поколения
            </motion.div>

            <motion.h1
              variants={fadeIn}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight -mt-[15px]"
            >
              Интеллектуальные{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0167F3] via-[#2C81F6] to-[#399AFC] relative">
                чат-боты
                <svg
                  className="absolute -bottom-2 left-0 w-full h-2 text-blue-500/20"
                  viewBox="0 0 100 15"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,5 Q25,0 50,5 T100,5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                </svg>
              </span>{" "}
              для бизнеса будущего
            </motion.h1>

            <motion.p
              variants={fadeIn}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
            >
              Автоматизируйте рутинные процессы и выстраивайте
              персонализированный диалог с клиентами 24/7 с помощью ИИ-ботов.
              Наши решения повышают эффективность бизнеса на всех уровнях
              взаимодействия.
            </motion.p>

            <motion.div
              variants={fadeIn}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <Link
                href="/contact"
                className="group relative bg-gradient-to-r from-[#0167F3] to-[#399AFC] text-white font-semibold py-3.5 px-7 rounded-xl flex items-center justify-center overflow-hidden shadow-lg shadow-blue-500/20 dark:shadow-blue-700/10"
              >
                <span className="absolute inset-0 w-full h-full bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
                <span className="relative flex items-center">
                  Обсудить проект{" "}
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
              <Link
                href="#chatbots-cases"
                className="group relative bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-200 dark:border-gray-700 font-semibold py-3.5 px-7 rounded-xl flex items-center justify-center overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                <span className="absolute inset-0 w-full h-full bg-gray-100 dark:bg-gray-700 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
                <span className="relative">Посмотреть примеры</span>
              </Link>
            </motion.div>

            {/* Преимущества с современными иконками */}
            <motion.div
              variants={fadeIn}
              className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-4"
            >
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/40 dark:to-blue-800/40 flex items-center justify-center mr-3 shadow-sm">
                  <MessageSquare
                    size={18}
                    className="text-blue-600 dark:text-blue-400"
                  />
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  Telegram
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/40 dark:to-blue-800/40 flex items-center justify-center mr-3 shadow-sm">
                  <MessageSquare
                    size={18}
                    className="text-blue-600 dark:text-blue-400"
                  />
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  WhatsApp
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/40 dark:to-blue-800/40 flex items-center justify-center mr-3 shadow-sm">
                  <Zap size={18} className="text-blue-600 dark:text-blue-400" />
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  Web-сайты
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/40 dark:to-blue-800/40 flex items-center justify-center mr-3 shadow-sm">
                  <MessageSquare
                    size={18}
                    className="text-blue-600 dark:text-blue-400"
                  />
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  VK
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/40 dark:to-blue-800/40 flex items-center justify-center mr-3 shadow-sm">
                  <MessageSquare
                    size={18}
                    className="text-blue-600 dark:text-blue-400"
                  />
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  Viber
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/40 dark:to-blue-800/40 flex items-center justify-center mr-3 shadow-sm">
                  <BarChart
                    size={18}
                    className="text-blue-600 dark:text-blue-400"
                  />
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  CRM
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Правая колонка - Иллюстрация (уменьшена до 5 колонок) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 relative h-[400px] md:h-[500px] w-full flex items-center justify-center"
          >
            {/* Заменяем изображение на 3D композицию модели чат-бота */}
            <div className="relative w-full h-full max-w-lg mx-auto">
              {/* Декоративный круг с градиентом */}
              <div className="absolute w-64 h-64 md:w-80 md:h-80 bg-gradient-to-tr from-blue-400/20 to-indigo-400/20 dark:from-blue-400/10 dark:to-indigo-400/10 rounded-full blur-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

              {/* Основная модель бота */}
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
                {/* Интерфейс чат-бота в виде карточек */}
                <div className="relative w-[360px] h-[460px] rounded-2xl bg-white dark:bg-gray-800 shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
                  {/* Заголовок чат-бота */}
                  <div className="w-full h-14 bg-gradient-to-r from-[#0167F3] to-[#399AFC] flex items-center px-5">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                          />
                        </svg>
                      </div>
                      <div className="text-white font-medium">
                        Нейрополис Бот
                      </div>
                    </div>
                  </div>

                  {/* Тело чата */}
                  <div className="p-4 h-[calc(460px-56px)] bg-gray-50 dark:bg-gray-850 overflow-y-auto">
                    {/* Сообщения */}
                    <div className="flex flex-col space-y-4">
                      {/* Сообщение бота */}
                      <div className="flex items-start space-x-2.5">
                        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                            />
                          </svg>
                        </div>
                        <div className="bg-white dark:bg-gray-700 rounded-2xl rounded-tl-none p-3.5 shadow-sm max-w-[85%]">
                          <p className="text-gray-700 dark:text-gray-200">
                            Здравствуйте! Я ваш персональный ассистент. Чем я
                            могу вам помочь сегодня?
                          </p>
                        </div>
                      </div>

                      {/* Сообщение пользователя */}
                      <div className="flex items-start justify-end space-x-2.5">
                        <div className="bg-blue-500 rounded-2xl rounded-tr-none p-3.5 shadow-sm max-w-[85%]">
                          <p className="text-white">
                            Мне нужна информация о ваших услугах
                          </p>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center flex-shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-gray-600 dark:text-gray-300"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                        </div>
                      </div>

                      {/* Сообщение бота */}
                      <div className="flex items-start space-x-2.5">
                        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                            />
                          </svg>
                        </div>
                        <div className="bg-white dark:bg-gray-700 rounded-2xl rounded-tl-none p-3.5 shadow-sm max-w-[85%]">
                          <p className="text-gray-700 dark:text-gray-200">
                            Конечно! Мы предлагаем разработку чат-ботов для
                            различных платформ, включая Telegram, WhatsApp и
                            веб-сайты.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Индикатор печати */}
                    <div className="mt-4 flex items-start space-x-2.5">
                      <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                          />
                        </svg>
                      </div>
                      <div className="bg-white dark:bg-gray-700 rounded-2xl rounded-tl-none px-4 py-3.5 shadow-sm">
                        <div className="flex space-x-1.5">
                          <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500 animate-bounce"></div>
                          <div
                            className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500 animate-bounce"
                            style={{ animationDelay: "0.2s" }}
                          ></div>
                          <div
                            className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500 animate-bounce"
                            style={{ animationDelay: "0.4s" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Декоративные элементы вокруг модели */}
                <div className="absolute top-10 -right-4 w-20 h-20 bg-purple-400/10 dark:bg-purple-500/20 rounded-full backdrop-blur-md z-20 flex items-center justify-center">
                  <Star
                    size={24}
                    className="text-purple-500/80 dark:text-purple-400"
                  />
                </div>
                <div className="absolute bottom-20 -left-5 w-16 h-16 bg-blue-400/10 dark:bg-blue-500/20 rounded-full backdrop-blur-md z-20 flex items-center justify-center">
                  <Shield
                    size={20}
                    className="text-blue-500/80 dark:text-blue-400"
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
