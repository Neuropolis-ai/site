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
  BotMessageSquare,
  Check,
  Send,
  RefreshCw,
  Globe,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";
import { Heading } from "@/components/ui/Heading";
import Subheading from "@/components/ui/subheading";
import Badge from "@/components/ui/Badge";

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
          {/* Левая колонка - Текст (увеличена до 7 колонок) */}
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 max-w-2xl lg:max-w-none mx-auto lg:mx-0"
          >
            <motion.div variants={fadeIn}>
              <Badge>Чат-боты на основе ИИ</Badge>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Heading
                level={1}
                className="text-gray-900 dark:text-white mb-8 leading-tight"
              >
                Интеллектуальные{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-sky-400 relative">
                  чат-боты
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
                для бизнеса будущего
              </Heading>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Subheading className="mb-12">
                Автоматизируйте рутинные процессы и выстраивайте
                персонализированный диалог с клиентами 24/7 с помощью ИИ-ботов.
                Наши решения повышают эффективность бизнеса на всех уровнях
                взаимодействия.
              </Subheading>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <Link
                href="/contact"
                className="group relative bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold py-3.5 px-7 rounded-lg flex items-center justify-center overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
                <span className="relative flex items-center">
                  Обсудить проект{" "}
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
              <Link
                href="#chatbots-cases"
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
                <div className="flex-shrink-0 w-12 h-12 aspect-square rounded-full bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 dark:from-blue-900/40 dark:via-blue-800/40 dark:to-blue-900/40 flex items-center justify-center mr-3 shadow-md">
                  {/* Telegram */}
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 32 32"
                    className="text-[#2AABEE]"
                    fill="none"
                    strokeWidth={2}
                  >
                    <circle cx="16" cy="16" r="14" fill="currentColor" />
                    <path
                      d="M22.9866 10.2088C23.1112 9.40332 22.3454 8.76755 21.6292 9.082L7.36482 15.3448C6.85123 15.5703 6.8888 16.3483 7.42147 16.5179L10.3631 17.4547C10.9246 17.6335 11.5325 17.541 12.0228 17.2023L18.655 12.6203C18.855 12.4821 19.073 12.7665 18.9021 12.9426L14.1281 17.8646C13.665 18.3421 13.7569 19.1512 14.314 19.5005L19.659 22.8523C20.2585 23.2282 21.0297 22.8506 21.1418 22.1261L22.9866 10.2088Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  Telegram
                </p>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0 w-12 h-12 aspect-square rounded-full bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 dark:from-blue-900/40 dark:via-blue-800/40 dark:to-blue-900/40 flex items-center justify-center mr-3 shadow-md">
                  {/* WhatsApp */}
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    className="text-[#25D366]"
                    fill="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  WhatsApp
                </p>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0 w-12 h-12 aspect-square rounded-full bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 dark:from-blue-900/40 dark:via-blue-800/40 dark:to-blue-900/40 flex items-center justify-center mr-3 shadow-md">
                  <Globe size={20} strokeWidth={2.5} className="text-blue-600 dark:text-blue-400" />
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  Web-сайты
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
                {/* Интерфейс чат-бота */}
                <div className="relative w-[360px] h-[460px] rounded-2xl bg-white dark:bg-gray-800 shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
                  {/* Заголовок чат-бота */}
                  <div className="w-full h-14 bg-gradient-to-r from-blue-600 to-blue-500 flex items-center px-5">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                        <BotMessageSquare size={24} className="text-white" />
                      </div>
                      <div className="text-white font-medium">
                        Чат с ИИ-ботом
                      </div>
                    </div>
                  </div>

                  {/* Область чата */}
                  <div className="p-4 h-[calc(460px-56px-60px)] bg-gray-50 dark:bg-gray-850 overflow-y-auto">
                    {/* Заголовок сценария */}
                    <div className="text-center py-2 mb-4">
                      <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Пример работы</div>
                      <div className="text-lg font-semibold text-gray-800 dark:text-white">Поддержка клиентов</div>
                    </div>
                    
                    {/* Сообщение пользователя */}
                    <div className="flex justify-end mb-4">
                      <div className="bg-blue-100 dark:bg-blue-900/40 rounded-xl rounded-tr-none p-3 max-w-[80%]">
                        <p className="text-gray-800 dark:text-gray-200 text-sm">Добрый день! Хочу уточнить статус моего заказа #12345</p>
                      </div>
                    </div>
                    
                    {/* Ответ бота с индикатором печати */}
                    <div className="flex mb-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mr-2">
                        <BotMessageSquare size={16} className="text-white" />
                      </div>
                      <div className="bg-white dark:bg-gray-700 rounded-xl rounded-tl-none p-3 max-w-[80%] border border-gray-100 dark:border-gray-600">
                        <p className="text-gray-800 dark:text-gray-200 text-sm">Здравствуйте! Проверяю статус вашего заказа #12345...</p>
                      </div>
                    </div>
                    
                    {/* Ответ бота с результатом */}
                    <div className="flex mb-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mr-2">
                        <BotMessageSquare size={16} className="text-white" />
                      </div>
                      <div className="bg-white dark:bg-gray-700 rounded-xl rounded-tl-none p-3 max-w-[80%] border border-gray-100 dark:border-gray-600">
                        <p className="text-gray-800 dark:text-gray-200 text-sm mb-2">Ваш заказ №12345 был отправлен курьерской службой вчера. Ожидаемая дата доставки: завтра с 14:00 до 18:00.</p>
                        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 pt-1 border-t border-gray-100 dark:border-gray-600">
                          <span>
                            <Check size={12} className="text-green-500 inline-block mr-1" />
                            Актуальная информация
                          </span>
                          <span>12:05</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Сообщение пользователя */}
                    <div className="flex justify-end mb-4">
                      <div className="bg-blue-100 dark:bg-blue-900/40 rounded-xl rounded-tr-none p-3 max-w-[80%]">
                        <p className="text-gray-800 dark:text-gray-200 text-sm">Спасибо за информацию! Можно ли изменить время доставки?</p>
                      </div>
                    </div>
                    
                    {/* Ответ бота */}
                    <div className="flex">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mr-2">
                        <BotMessageSquare size={16} className="text-white" />
                      </div>
                      <div className="bg-white dark:bg-gray-700 rounded-xl rounded-tl-none p-3 max-w-[80%] border border-gray-100 dark:border-gray-600">
                        <p className="text-gray-800 dark:text-gray-200 text-sm mb-2">Да, конечно! Для изменения времени доставки вам нужно:</p>
                        <ol className="list-decimal pl-5 text-gray-800 dark:text-gray-200 text-sm space-y-1">
                          <li>Позвонить в службу доставки</li>
                          <li>Указать номер заказа</li>
                          <li>Выбрать удобное время</li>
                        </ol>
                        <div className="flex items-center mt-2 text-xs text-blue-600 dark:text-blue-400 font-medium">
                          <button className="flex items-center">
                            <MessageSquare size={12} className="mr-1" />
                            Связаться с оператором
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Поле ввода сообщения */}
                  <div className="absolute bottom-0 left-0 right-0 h-[60px] bg-white dark:bg-gray-750 border-t border-gray-200 dark:border-gray-700 p-3 flex items-center">
                    <input 
                      type="text" 
                      className="flex-1 bg-gray-100 dark:bg-gray-700 rounded-lg px-4 py-2 text-gray-800 dark:text-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Напишите сообщение..." 
                    />
                    <button className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center ml-2">
                      <Send size={18} className="text-white" />
                    </button>
                  </div>
                </div>

                {/* Декоративные элементы вокруг карточки */}
                <div className="absolute top-10 -right-4 w-20 h-20 aspect-square rounded-full bg-gradient-to-br from-blue-400/10 via-blue-500/20 to-blue-400/10 dark:from-blue-500/10 dark:via-blue-600/20 dark:to-blue-500/10 backdrop-blur-md z-20 flex items-center justify-center shadow-lg">
                  <MessageSquare 
                    size={28} 
                    strokeWidth={2} 
                    className="text-blue-500/80 dark:text-blue-400" 
                  />
                </div>
                <div className="absolute bottom-20 -left-5 w-16 h-16 aspect-square rounded-full bg-gradient-to-br from-sky-400/10 via-sky-500/20 to-sky-400/10 dark:from-sky-500/10 dark:via-sky-600/20 dark:to-sky-500/10 backdrop-blur-md z-20 flex items-center justify-center shadow-lg">
                  <BotMessageSquare 
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
