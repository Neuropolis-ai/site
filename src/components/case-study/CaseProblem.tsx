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
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.p
          variants={itemVariants}
          className="mb-8 text-lg leading-relaxed"
        >
          {description}
        </motion.p>

        <motion.ul className="space-y-4 mb-8">
          {problemPoints.map((point, index) => (
            <motion.li
              key={index}
              variants={itemVariants}
              className="flex items-start"
            >
              <div
                className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center mr-4 shadow-sm ${
                  isDark
                    ? "bg-gradient-to-br from-blue-800/40 to-blue-900/40 text-blue-300 border border-blue-700/20"
                    : "bg-gradient-to-br from-blue-100 to-blue-200/70 text-blue-600 border border-blue-200/50"
                }`}
              >
                <FiCheckCircle className="w-5 h-5" />
              </div>
              <span
                className={`flex-1 text-base leading-relaxed mt-1.5 ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {point}
              </span>
            </motion.li>
          ))}
        </motion.ul>

        {conclusion && (
          <motion.p
            variants={itemVariants}
            className={`text-base leading-relaxed ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            {conclusion}
          </motion.p>
        )}
      </motion.div>
    </CaseSection>
  );
}
