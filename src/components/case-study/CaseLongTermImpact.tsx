"use client";

import CaseSection from "./CaseSection";
import { motion } from "framer-motion";
import { FiTrendingUp, FiHeart, FiRefreshCw, FiUsers } from "react-icons/fi"; // Иконки для влияния
import { useTheme } from "@/context/ThemeContext";

interface CaseLongTermImpactProps {
  description: string;
  impactPoints: string[];
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

// Примерная функция для выбора иконки на основе текста влияния
const getImpactIcon = (
  text: string
): React.ComponentType<{ className?: string }> => {
  const lowerText = text.toLowerCase();
  if (lowerText.includes("лояльности") || lowerText.includes("среднего чека"))
    return FiHeart;
  if (lowerText.includes("рост базы") || lowerText.includes("отзывам"))
    return FiTrendingUp;
  if (
    lowerText.includes("снижение возвратов") ||
    lowerText.includes("консультациям")
  )
    return FiRefreshCw;
  if (
    lowerText.includes("формирование команды") ||
    lowerText.includes("специалистов")
  )
    return FiUsers;
  return FiTrendingUp; // Иконка по умолчанию
};

export default function CaseLongTermImpact({
  description,
  impactPoints,
  transparent = false,
}: CaseLongTermImpactProps) {
  const { isDark } = useTheme();

  return (
    <CaseSection title="📈 Долгосрочное влияние" transparent={transparent}>
      <motion.p
        variants={itemVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="mb-8 text-lg leading-relaxed"
      >
        {description}
      </motion.p>

      {impactPoints.length > 0 && (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {impactPoints.map((point, index) => {
            const Icon = getImpactIcon(point);
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={`p-6 rounded-2xl flex items-start space-x-4 transition-all duration-300 border shadow-sm ${
                  isDark
                    ? "bg-gray-800/30 border-gray-700/40 hover:border-teal-700/60 hover:bg-gray-800/50 backdrop-blur-sm"
                    : "bg-white/30 border-gray-200/50 hover:border-teal-300/60 hover:bg-white/40 backdrop-blur-sm"
                }`}
              >
                <div
                  className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center mt-1 ${
                    isDark
                      ? "bg-teal-900/50 text-teal-400"
                      : "bg-teal-100/80 text-teal-600"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <span className={isDark ? "text-gray-300" : "text-gray-700"}>
                  {point}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      )}
    </CaseSection>
  );
}
