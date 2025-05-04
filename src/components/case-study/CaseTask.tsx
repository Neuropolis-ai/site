"use client";

import CaseSection from "./CaseSection";
import { motion } from "framer-motion";
import { FiAlertTriangle } from "react-icons/fi"; // Пример иконки для задач
import { useTheme } from "@/context/ThemeContext";

interface CaseTaskProps {
  description: string;
  challenges: string[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export default function CaseTask({ description, challenges }: CaseTaskProps) {
  const { isDark } = useTheme();

  return (
    <div className="relative">
      {/* Фоновые элементы */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -left-20 top-20 w-72 h-72 bg-gradient-to-tr from-blue-200/20 to-blue-400/20 dark:from-blue-500/10 dark:to-blue-700/10 rounded-full blur-3xl"></div>
        <div className="absolute -right-20 bottom-20 w-72 h-72 bg-gradient-to-tl from-indigo-200/20 to-indigo-400/20 dark:from-indigo-500/10 dark:to-indigo-700/10 rounded-full blur-3xl"></div>
      </div>

      <CaseSection title="📌 Задача клиента">
        <motion.p
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mb-8 text-lg leading-relaxed"
        >
          {description}
        </motion.p>

        {challenges.length > 0 && (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={`p-6 rounded-2xl flex items-start space-x-4 transition-all duration-300 ${
                  isDark
                    ? "bg-gradient-to-br from-gray-800/50 to-gray-900/70 border border-gray-700/50 shadow-lg hover:shadow-blue-900/20 hover:border-blue-700/60"
                    : "bg-gradient-to-br from-white to-gray-50/90 border border-gray-200/80 shadow-md hover:shadow-lg hover:border-gray-300"
                }`}
              >
                <div
                  className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center mt-1 ${
                    isDark
                      ? "bg-blue-900/50 text-blue-400"
                      : "bg-blue-100/80 text-blue-600"
                  }`}
                >
                  <FiAlertTriangle className="w-5 h-5" />
                </div>
                <span className={isDark ? "text-gray-300" : "text-gray-700"}>
                  {challenge}
                </span>
              </motion.div>
            ))}
          </motion.div>
        )}
      </CaseSection>
    </div>
  );
}
