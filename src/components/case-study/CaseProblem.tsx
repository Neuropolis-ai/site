"use client";

import CaseSection from "./CaseSection";
import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi"; // Иконка для пунктов анализа
import { useTheme } from "@/context/ThemeContext";
import { brandColors } from "./CaseHero"; // Импортируем фирменные цвета

interface CaseProblemProps {
  description: string;
  problemPoints: string[];
  conclusion?: string;
  transparent?: boolean;
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
  transparent = false,
}: CaseProblemProps) {
  const { isDark } = useTheme();

  return (
    <CaseSection title="🔍 Анализ проблемы" transparent={transparent}>
      <motion.div
        animate={{ opacity: 1 }}
        className="rounded-2xl p-6 bg-white/60 dark:bg-gray-900/60 border border-gray-200/70 dark:border-gray-700/30 shadow-md backdrop-blur-sm"
      >
        <motion.p
          animate={{ opacity: 1 }}
          className="mb-8 text-lg leading-relaxed"
        >
          {description}
        </motion.p>

        <motion.ul className="space-y-4 mb-8">
          {problemPoints.map((point, index) => (
            <motion.li
              key={index}
              animate={{ opacity: 1 }}
              className="flex items-start"
            >
              <div
                className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center mr-4 shadow-sm ${
                  isDark
                    ? "bg-gradient-to-br from-[#0167F3]/20 to-[#399AFC]/10 text-[#399AFC] border border-[#0167F3]/10"
                    : "bg-gradient-to-br from-[#0167F3]/10 to-[#399AFC]/5 text-[#0167F3] border border-[#0167F3]/10"
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
            animate={{ opacity: 1 }}
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
