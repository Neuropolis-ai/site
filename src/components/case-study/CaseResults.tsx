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
  FiPieChart,
  FiTarget,
  FiPercent,
  FiAward
} from "react-icons/fi"; // Расширенный набор иконок
import { brandColors } from "./CaseHero"; // Импортируем фирменные цвета

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

// Функция для выбора иконки на основе текста результата и метрики
const getResultIcon = (
  text: string
): React.ComponentType<{ className?: string }> => {
  const lowerText = text.toLowerCase();
  if (lowerText.includes("рост") || lowerText.includes("увеличение") || lowerText.includes("повышение"))
    return FiTrendingUp;
  if (lowerText.includes("время") || lowerText.includes("сокращение") || lowerText.includes("часов"))
    return FiClock;
  if (lowerText.includes("аудитори") || lowerText.includes("клиент") || lowerText.includes("пользоват"))
    return FiUsers;
  if (lowerText.includes("экономия") || lowerText.includes("$") || lowerText.includes("монетизац"))
    return FiDollarSign;
  if (lowerText.includes("охват") || lowerText.includes("публикац"))
    return FiTarget;
  if (lowerText.includes("вовлеченност"))
    return FiAward;
  return FiCheck; // Иконка по умолчанию
};

// Функция для выбора иконки метрики на основе её названия
const getMetricIcon = (label: string): React.ComponentType<{ className?: string }> => {
  const lowerLabel = label.toLowerCase();
  if (lowerLabel.includes("рост") || lowerLabel.includes("увеличение"))
    return FiTrendingUp;
  if (lowerLabel.includes("публикац"))
    return FiTarget;
  if (lowerLabel.includes("вовлеченност") || lowerLabel.includes("рост вовлеченности"))
    return FiAward;
  if (lowerLabel.includes("время") || lowerLabel.includes("экономия времени"))
    return FiClock;
  if (lowerLabel.includes("охват") || lowerLabel.includes("увеличение охватов"))
    return FiPieChart;
  return FiBarChart2; // Иконка по умолчанию
};

// Анимации
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20
    }
  }
};

// Функция для преобразования HEX-цвета в RGB компоненты
const hexToRgb = (hex: string) => {
  const r = parseInt(hex.substring(1, 3), 16);
  const g = parseInt(hex.substring(3, 5), 16);
  const b = parseInt(hex.substring(5, 7), 16);
  return { r, g, b };
};

// RGB-компоненты для основного цвета бренда
const primaryRGB = hexToRgb("#0167F3");

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
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-14"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {metrics.map((metric, index) => {
            const MetricIcon = getMetricIcon(metric.label);
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 },
                  boxShadow: isDark
                    ? `0 15px 30px rgba(0, 0, 0, 0.4), 0 0 15px rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, 0.3)`
                    : `0 15px 30px rgba(0, 0, 0, 0.1), 0 0 15px rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, 0.2)`,
                }}
                className={`p-6 md:p-7 rounded-2xl text-center transition-all duration-300 border shadow-lg backdrop-blur-sm ${
                  isDark
                    ? "bg-gradient-to-br from-blue-900/30 to-blue-800/30 border-blue-700/40 hover:border-blue-600/60"
                    : "bg-gradient-to-br from-blue-50/80 to-white/90 border-blue-100/70 hover:border-blue-200/90"
                }`}
              >
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5 shadow-lg transform transition-transform duration-300 ${
                    isDark
                      ? "bg-gradient-to-br from-blue-500 to-blue-600 text-white border border-blue-400/50"
                      : "bg-gradient-to-br from-blue-500 to-blue-600 text-white border border-blue-400/50"
                  }`}
                >
                  <MetricIcon className="w-7 h-7" />
                </div>
                <div
                  className={`text-3xl md:text-4xl font-extrabold mb-2 bg-clip-text text-transparent bg-gradient-to-r ${
                    isDark 
                      ? "from-blue-300 via-blue-200 to-blue-300" 
                      : "from-blue-600 via-blue-500 to-blue-600"
                  }`}
                >
                  {metric.number}
                </div>
                <p
                  className={`text-sm font-semibold uppercase tracking-wide ${
                    isDark ? "text-blue-100" : "text-blue-700"
                  }`}
                >
                  {metric.label}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      )}

      {/* Вводный текст и список результатов */}
      <motion.div
        animate={{ opacity: 1 }}
        className={`p-8 rounded-3xl shadow-xl border backdrop-blur-md relative overflow-hidden ${
          isDark
            ? "bg-gradient-to-br from-gray-900/70 to-[#121929]/70 border-gray-700/40"
            : "bg-gradient-to-br from-white/90 to-gray-50/80 border-gray-200/70"
        }`}
      >
        {/* Фоновые декоративные элементы */}
        <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-200/5 to-blue-400/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-indigo-200/5 to-indigo-400/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        {intro && (
          <motion.p 
            className="mb-10 text-lg md:text-xl leading-relaxed max-w-4xl font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {intro}
          </motion.p>
        )}

        {results.length > 0 && (
          <motion.ul
            className="space-y-5"
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
                  className={`flex items-start p-5 rounded-xl transition-all duration-300 border transform ${
                    isDark
                      ? "bg-gray-800/60 border-gray-700/50 hover:border-blue-700/50"
                      : "bg-white/80 border-gray-200/80 hover:border-blue-300/70"
                  }`}
                >
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center mr-5 shadow-md ${
                      isDark
                        ? "bg-gradient-to-br from-blue-500 to-blue-600 text-white border border-blue-400/30"
                        : "bg-gradient-to-br from-blue-500 to-blue-600 text-white border border-blue-400/30"
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span
                    className={`flex-1 text-base md:text-lg font-medium leading-relaxed ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                    dangerouslySetInnerHTML={{
                      __html: result.text.replace(
                        /<b>(.*?)<\/b>/g,
                        '<strong class="font-bold ' +
                          (isDark 
                            ? "text-blue-300" 
                            : "text-blue-600") +
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
