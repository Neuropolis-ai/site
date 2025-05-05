"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { ArrowRight } from "lucide-react";
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
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Градиентный фон */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50 dark:from-black dark:to-blue-950/10 -z-10"></div>

      {/* Декоративные элементы */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-blue-400/20 dark:from-blue-500/10 dark:to-blue-700/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-gradient-to-tr from-purple-200/20 to-purple-400/20 dark:from-purple-500/10 dark:to-purple-700/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-gradient-to-tr from-indigo-200/20 to-indigo-400/20 dark:from-indigo-500/10 dark:to-indigo-700/10 rounded-full blur-3xl -z-10"></div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Левая колонка - Текст */}
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.div
              variants={fadeIn}
              className={`inline-block px-4 py-1 rounded-full text-sm mb-6 switch-box ${
                !isDark && "light-switch-box"
              }`}
            >
              Разработка чат-ботов
            </motion.div>

            <motion.h1
              variants={fadeIn}
              className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 dark:text-white mb-6"
            >
              Интеллектуальные{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0167F3] to-[#399AFC]">
                чат-боты
              </span>{" "}
              для вашего бизнеса
            </motion.h1>

            <motion.p
              variants={fadeIn}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8"
            >
              Автоматизируйте коммуникации с клиентами и оптимизируйте
              бизнес-процессы с помощью современных чат-ботов на базе
              искусственного интеллекта. Решения под ключ для любых задач и
              платформ.
            </motion.p>

            <motion.div
              variants={fadeIn}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <Link
                href="/contact"
                className="bg-gradient-to-r from-[#0167F3] to-[#399AFC] text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center transition-transform hover:-translate-y-1"
              >
                Обсудить проект <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="#chatbots-cases"
                className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-200 dark:border-gray-700 font-semibold py-3 px-6 rounded-xl flex items-center justify-center transition-transform hover:-translate-y-1"
              >
                Примеры решений
              </Link>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="grid grid-cols-2 sm:grid-cols-3 gap-4"
            >
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center mr-3">
                  <span className="text-blue-600 dark:text-blue-400 text-lg font-bold">
                    ✓
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">Telegram</p>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center mr-3">
                  <span className="text-blue-600 dark:text-blue-400 text-lg font-bold">
                    ✓
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">WhatsApp</p>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center mr-3">
                  <span className="text-blue-600 dark:text-blue-400 text-lg font-bold">
                    ✓
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">Web-сайты</p>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center mr-3">
                  <span className="text-blue-600 dark:text-blue-400 text-lg font-bold">
                    ✓
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">VK</p>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center mr-3">
                  <span className="text-blue-600 dark:text-blue-400 text-lg font-bold">
                    ✓
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">Viber</p>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center mr-3">
                  <span className="text-blue-600 dark:text-blue-400 text-lg font-bold">
                    ✓
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">CRM</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Правая колонка - Иллюстрация */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center"
          >
            <div className="absolute top-0 right-0 w-full h-full">
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="relative w-full h-full"
              >
                <Image
                  src="/assets/images/chatbot-illustration.png"
                  alt="AI чат-бот интерфейс"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
