"use client";

import CaseSection from "./CaseSection";
import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi"; // Иконка для пунктов анализа
import { useTheme } from "@/context/ThemeContext";

interface CaseProblemProps {
  description: string;
  problemPoints: string[];
  conclusion?: string;
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

export default function CaseProblem({
  description,
  problemPoints,
  conclusion,
}: CaseProblemProps) {
  const { isDark } = useTheme();

  return (
    <CaseSection title="🔍 Анализ проблемы">
      <motion.p
        variants={itemVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="mb-8 text-lg leading-relaxed"
      >
        {description}
      </motion.p>

      {problemPoints.length > 0 && (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {problemPoints.map((point, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className={`p-6 rounded-2xl flex items-start space-x-4 transition-all duration-300 border shadow-sm ${
                isDark
                  ? "bg-gray-800/30 border-gray-700/40 hover:border-indigo-700/60 hover:bg-gray-800/50"
                  : "bg-white/40 border-gray-200/70 hover:border-gray-300 hover:bg-white/60"
              }`}
            >
              <div
                className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center mt-1 ${
                  isDark
                    ? "bg-indigo-900/50 text-indigo-400"
                    : "bg-indigo-100/80 text-indigo-600"
                }`}
              >
                <FiCheckCircle className="w-5 h-5" />
              </div>
              <span className={isDark ? "text-gray-300" : "text-gray-700"}>
                {point}
              </span>
            </motion.div>
          ))}
        </motion.div>
      )}

      {conclusion && (
        <motion.p
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className={`mt-6 p-4 rounded-xl text-base border ${
            isDark
              ? "bg-indigo-900/30 border-indigo-800/50 text-indigo-200"
              : "bg-indigo-50/80 border-indigo-200/80 text-indigo-800"
          }`}
        >
          {conclusion}
        </motion.p>
      )}
    </CaseSection>
  );
}
