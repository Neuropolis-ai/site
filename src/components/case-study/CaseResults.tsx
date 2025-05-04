"use client";

import { useTheme } from "@/context/ThemeContext";
import CaseSection from "./CaseSection";
import MetricCard from "./MetricCard";
import { motion } from "framer-motion";
import {
  FiCheck,
  FiTrendingUp,
  FiClock,
  FiUsers,
  FiDollarSign,
} from "react-icons/fi"; // Иконки для результатов

interface Metric {
  number: string;
  label: string;
}

interface ResultPoint {
  text: string;
  // isBold?: boolean; // Убираем, будем стилизовать через dangerouslySetInnerHTML
}

interface CaseResultsProps {
  metrics: Metric[];
  intro?: string;
  results: ResultPoint[];
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

// Примерная функция для выбора иконки на основе текста результата
const getResultIcon = (
  text: string
): React.ComponentType<{ className?: string }> => {
  const lowerText = text.toLowerCase();
  if (lowerText.includes("nps") || lowerText.includes("конверси"))
    return FiTrendingUp;
  if (
    lowerText.includes("время") ||
    lowerText.includes("минут") ||
    lowerText.includes("часов")
  )
    return FiClock;
  if (
    lowerText.includes("обращений") ||
    lowerText.includes("человека") ||
    lowerText.includes("штата")
  )
    return FiUsers;
  if (lowerText.includes("экономия") || lowerText.includes("$"))
    return FiDollarSign;
  return FiCheck; // Иконка по умолчанию
};

export default function CaseResults({
  metrics,
  intro,
  results,
}: CaseResultsProps) {
  const { isDark } = useTheme();

  return (
    <CaseSection title="📊 Достигнутые результаты">
      {metrics.length > 0 && (
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {metrics.map((metric, index) => (
            <motion.div key={index} variants={itemVariants}>
              <MetricCard number={metric.number} label={metric.label} />
            </motion.div>
          ))}
        </motion.div>
      )}

      {intro && (
        <motion.p
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mb-6 text-lg leading-relaxed"
        >
          {intro}
        </motion.p>
      )}

      {results.length > 0 && (
        <motion.ul
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {results.map((result, index) => {
            const Icon = getResultIcon(result.text);
            return (
              <motion.li
                key={index}
                variants={itemVariants}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className={`flex items-start p-4 rounded-xl transition-colors duration-200 border ${
                  isDark
                    ? "bg-gray-800/30 border-gray-700/40 hover:bg-gray-800/50 hover:border-gray-700/60"
                    : "bg-white/40 border-gray-200/70 hover:bg-white/60 hover:border-gray-300/90"
                }`}
              >
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center mr-4 mt-1 ${
                    isDark
                      ? "bg-green-900/50 text-green-400"
                      : "bg-green-100/80 text-green-600"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <span
                  className={`${
                    isDark ? "text-gray-300" : "text-gray-700"
                  } text-base leading-relaxed`}
                  dangerouslySetInnerHTML={{
                    __html: result.text.replace(
                      /<b>(.*?)<\/b>/g,
                      '<strong class="font-semibold ' +
                        (isDark ? "text-white" : "text-gray-900") +
                        '">$1</strong>'
                    ),
                  }}
                />
              </motion.li>
            );
          })}
        </motion.ul>
      )}
    </CaseSection>
  );
}
