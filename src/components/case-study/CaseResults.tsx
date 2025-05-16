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
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14"
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
                  y: -5,
                  transition: { duration: 0.3 },
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)"
                }}
                className="p-6 rounded-2xl text-center transition-all duration-300 border shadow-lg backdrop-blur-sm bg-gradient-to-br from-blue-50/70 to-blue-50/50 border-blue-100/60 hover:border-blue-200/80"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 shadow-md bg-gradient-to-br from-blue-100 to-blue-200 text-blue-600 border border-blue-200/50">
                  <MetricIcon className="w-6 h-6" />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-1 text-gray-900">
                  {metric.number}
                </div>
                <p className="text-sm font-medium text-gray-500">
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
        className="p-8 rounded-3xl shadow-xl border backdrop-blur-md bg-gradient-to-br from-white/90 to-gray-50/80 border-gray-200/70"
      >
        {intro && (
          <motion.p 
            className="mb-8 text-lg leading-relaxed max-w-4xl"
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
                    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.07)"
                  }}
                  className="flex items-start p-4 rounded-xl transition-all duration-300 border transform bg-white/80 border-gray-200/80 hover:border-blue-300/70"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center mr-4 shadow-sm bg-gradient-to-br from-blue-100 to-blue-200/70 text-blue-600 border border-blue-200/50">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span
                    className="flex-1 text-base leading-relaxed mt-1 text-gray-700"
                    dangerouslySetInnerHTML={{
                      __html: result.text.replace(
                        /<b>(.*?)<\/b>/g,
                        '<strong class="font-semibold text-gray-900">$1</strong>'
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
