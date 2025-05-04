"use client";

import { useTheme } from "@/context/ThemeContext";
import CaseSection from "./CaseSection";
// import MetricCard from "./MetricCard"; // Удаляем, так как дизайн метрик будет встроен
import { motion } from "framer-motion";
import {
  FiCheck,
  FiTrendingUp,
  FiClock,
  FiUsers,
  FiDollarSign,
  FiBarChart2,
} from "react-icons/fi"; // Иконки для результатов

interface Metric {
  number: string;
  label: string;
}

interface ResultPoint {
  text: string;
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
      staggerChildren: 0.12,
      delayChildren: 0.1,
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

// Функция для выбора иконки на основе текста результата
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
      {/* Обновленные карточки метрик */}
      {metrics.length > 0 && (
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
                boxShadow: isDark
                  ? "0 15px 30px rgba(0, 0, 0, 0.4), 0 0 15px rgba(21, 101, 192, 0.2)"
                  : "0 15px 30px rgba(0, 0, 0, 0.1), 0 0 15px rgba(66, 153, 225, 0.15)",
              }}
              className={`p-6 rounded-2xl text-center transition-all duration-300 border shadow-lg backdrop-blur-sm ${
                isDark
                  ? "bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border-blue-800/30 hover:border-blue-700/50"
                  : "bg-gradient-to-br from-blue-50/70 to-indigo-50/50 border-blue-100/60 hover:border-blue-200/80"
              }`}
            >
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 shadow-md ${
                  isDark
                    ? "bg-gradient-to-br from-blue-700/50 to-blue-800/50 text-blue-200 border border-blue-600/30"
                    : "bg-gradient-to-br from-blue-100 to-blue-200 text-blue-600 border border-blue-200/50"
                }`}
              >
                <FiBarChart2 className="w-6 h-6" />
              </div>
              <div
                className={`text-3xl md:text-4xl font-bold mb-1 ${
                  isDark
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300"
                    : "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"
                }`}
              >
                {metric.number}
              </div>
              <p
                className={`text-sm font-medium ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                {metric.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Вводный текст и список результатов */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className={`p-8 rounded-3xl shadow-xl border backdrop-blur-md ${
          isDark
            ? "bg-gradient-to-br from-gray-900/70 to-[#121929]/70 border-gray-700/40"
            : "bg-gradient-to-br from-white/90 to-gray-50/80 border-gray-200/70"
        }`}
      >
        {intro && (
          <p className="mb-8 text-lg leading-relaxed max-w-4xl">{intro}</p>
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
                  whileHover={{
                    x: 5,
                    transition: { duration: 0.2 },
                    boxShadow: isDark
                      ? "0 8px 20px rgba(0, 0, 0, 0.3)"
                      : "0 8px 20px rgba(0, 0, 0, 0.07)",
                  }}
                  className={`flex items-start p-4 rounded-xl transition-all duration-300 border transform ${
                    isDark
                      ? "bg-gray-800/60 border-gray-700/50 hover:border-blue-700/50"
                      : "bg-white/80 border-gray-200/80 hover:border-blue-300/70"
                  }`}
                >
                  <div
                    className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center mr-4 shadow-sm ${
                      isDark
                        ? "bg-gradient-to-br from-blue-800/40 to-blue-900/40 text-blue-300 border border-blue-700/20"
                        : "bg-gradient-to-br from-blue-100 to-blue-200/70 text-blue-600 border border-blue-200/50"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span
                    className={`flex-1 text-base leading-relaxed mt-1 ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}
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
      </motion.div>
    </CaseSection>
  );
}
