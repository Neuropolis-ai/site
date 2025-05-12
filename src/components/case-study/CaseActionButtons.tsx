"use client";

import { useTheme } from "@/context/ThemeContext";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

interface ActionButton {
  text: string;
  url: string;
  isPrimary: boolean;
}

interface CaseActionButtonsProps {
  buttons: ActionButton[];
}

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
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function CaseActionButtons({ buttons }: CaseActionButtonsProps) {
  const { isDark } = useTheme();

  return (
    <div className="relative py-16 md:py-20 overflow-hidden">
      {/* Фоновые элементы */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900"></div>
        <div className="absolute top-32 -left-32 w-96 h-96 bg-gradient-to-tr from-blue-200/20 to-blue-400/20 dark:from-blue-500/10 dark:to-blue-700/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -right-32 w-96 h-96 bg-gradient-to-tl from-indigo-200/20 to-indigo-400/20 dark:from-indigo-500/10 dark:to-indigo-700/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 max-w-screen-md relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative p-8 md:p-10 rounded-2xl text-center backdrop-blur-sm"
        >
          <div className="absolute inset-0 border border-white/20 dark:border-gray-700/30 rounded-2xl -z-10"></div>
          <div
            className={`absolute inset-0 -z-10 ${
              isDark ? "bg-gray-900/50" : "bg-white/60"
            } rounded-2xl`}
          ></div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 dark:from-blue-600/10 dark:to-indigo-600/10 rounded-full blur-xl -z-10"></div>
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-r from-indigo-400/10 to-blue-400/10 dark:from-indigo-600/10 dark:to-blue-600/10 rounded-full blur-xl -z-10"></div>

          <motion.h3
            variants={itemVariants}
            className={`text-2xl md:text-3xl font-bold mb-4 ${
              isDark
                ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300"
                : "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"
            }`}
          >
            Готовы автоматизировать клиентскую поддержку?
          </motion.h3>

          <motion.p
            variants={itemVariants}
            className={`text-base md:text-lg max-w-2xl mx-auto mb-8 ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Современный ИИ-ассистент может обрабатывать до 82% запросов без
            участия оператора. Увеличьте NPS и сократите расходы уже через 2
            месяца после внедрения.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center"
          >
            {buttons.map((button, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Link
                  href={button.url}
                  className={`flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-lg font-semibold transition-all duration-300 ease-in-out ${
                    button.isPrimary
                      ? `text-white bg-gradient-to-r from-[#0167F3] to-[#399AFC] shadow-lg hover:opacity-90 hover:-translate-y-0.5`
                      : isDark
                      ? "text-blue-300 bg-gray-800/60 border border-blue-800/70 hover:bg-gray-700/80 hover:border-blue-700/80 hover:-translate-y-0.5"
                      : "text-blue-700 bg-white border border-blue-200 hover:bg-blue-50/80 hover:border-blue-300 hover:-translate-y-0.5"
                  }`}
                >
                  {button.text}
                  {button.isPrimary && (
                    <BsArrowRight className="ml-2 w-5 h-5" />
                  )}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
