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
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center"
        >
          {buttons.map((button, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Link
                href={button.url}
                className={`flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-lg font-semibold transition-all duration-300 ease-in-out shadow-md hover:shadow-lg ${
                  button.isPrimary
                    ? `text-white bg-gradient-to-r from-[#0167F3] to-[#399AFC] hover:from-[#015ae0] hover:to-[#2a8ce7] hover:-translate-y-0.5`
                    : isDark
                    ? "text-blue-300 bg-gray-800/60 border border-blue-800/70 hover:bg-gray-700/80 hover:border-blue-700/80 hover:-translate-y-0.5"
                    : "text-blue-700 bg-white border border-blue-200 hover:bg-blue-50/80 hover:border-blue-300 hover:-translate-y-0.5"
                }`}
              >
                {button.text}
                {button.isPrimary && <BsArrowRight className="ml-1 w-5 h-5" />}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
