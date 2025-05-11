"use client";

import { useTheme } from "@/context/ThemeContext";
import CaseSection from "./CaseSection";
import { motion } from "framer-motion";
import {
  FiZap,
  FiSettings,
  FiTerminal,
  FiBox,
  FiMessageSquare,
  FiPhoneCall,
  FiMail,
  FiGlobe,
  FiArrowRight,
  FiCode,
  FiServer,
  FiDatabase,
  FiCpu,
} from "react-icons/fi"; // Иконки
import { brandColors } from "./CaseHero"; // Импортируем фирменные цвета

interface SolutionFeature {
  title: string;
  items: string[];
  icon: React.ComponentType<{ className?: string }>; // Тип для иконки
}

interface TechPoint {
  title: string;
  description: string;
}

interface CaseSolutionProps {
  description: string;
  features: SolutionFeature[];
  technicalDetails?: string;
  techPoints?: string[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
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

const techSectionVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// Маппинг для иконок Features
const featureIconMap: {
  [key: string]: React.ComponentType<{ className?: string }>;
} = {
  "Многоканальное присутствие": FiGlobe,
  "Основные функции": FiSettings,
  Default: FiBox, // Иконка по умолчанию
};

// Маппинг для иконок технических особенностей
const techIconMap: React.ComponentType<{ className?: string }>[] = [
  FiServer,
  FiDatabase,
  FiCode,
  FiCpu,
  FiTerminal,
];

export default function CaseSolution({
  description,
  features,
  technicalDetails,
  techPoints,
}: CaseSolutionProps) {
  const { isDark } = useTheme();

  return (
    <CaseSection title="🤖 Предложенное решение">
      <motion.p
        animate={{ opacity: 1 }}
        className="mb-12 text-lg leading-relaxed max-w-4xl"
      >
        {description}
      </motion.p>

      {features.length > 0 && (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20"
          animate={{ opacity: 1 }}
        >
          {features.map((feature, index) => {
            const Icon =
              feature.icon ||
              featureIconMap[feature.title] ||
              featureIconMap.Default; // Используем переданную иконку или маппинг
            return (
              <motion.div
                key={index}
                animate={{ opacity: 1 }}
                whileHover={{
                  y: -12,
                  scale: 1.03,
                  transition: { duration: 0.4 },
                  boxShadow: isDark
                    ? `0 20px 40px rgba(0, 0, 0, 0.6), 0 0 15px rgba(${parseInt(brandColors.primary.substring(1, 3), 16)}, ${parseInt(brandColors.primary.substring(3, 5), 16)}, ${parseInt(brandColors.primary.substring(5, 7), 16)}, 0.3)`
                    : `0 20px 40px rgba(0, 0, 0, 0.15), 0 0 20px rgba(${parseInt(brandColors.primary.substring(1, 3), 16)}, ${parseInt(brandColors.primary.substring(3, 5), 16)}, ${parseInt(brandColors.primary.substring(5, 7), 16)}, 0.2)`,
                }}
                className={`p-10 rounded-2xl flex flex-col transition-all duration-300 border shadow-lg h-full ${
                  isDark
                    ? "bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-gray-700/40 hover:border-blue-600/70"
                    : "bg-gradient-to-br from-white to-gray-50/90 border-gray-200/70 hover:border-blue-400"
                }`}
              >
                <div className="flex items-center mb-8">
                  <div
                    className={`flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center mr-5 transform transition-all duration-500 shadow-md ${
                      isDark
                        ? index === 0 
                          ? "bg-gradient-to-br from-blue-500/60 to-indigo-600/40 text-white border border-blue-500/40"
                          : "bg-gradient-to-br from-cyan-500/60 to-blue-600/40 text-white border border-cyan-500/40"
                        : index === 0
                          ? "bg-gradient-to-br from-blue-500/20 to-indigo-600/20 text-blue-600 border border-blue-500/30"
                          : "bg-gradient-to-br from-cyan-500/20 to-blue-600/20 text-cyan-600 border border-cyan-500/30"
                    }`}
                  >
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3
                    className={`font-bold text-2xl ${
                      isDark 
                        ? index === 0 
                          ? "text-blue-300"
                          : "text-cyan-300"
                        : index === 0 
                          ? "text-blue-600" 
                          : "text-cyan-600"
                    }`}
                  >
                    {feature.title}
                  </h3>
                </div>
                <ul
                  className={`list-none pl-0 space-y-5 text-base flex-grow ${
                    isDark ? "text-gray-200" : "text-gray-600"
                  }`}
                >
                  {feature.items.map((item, idx) => (
                    <li key={idx} className="flex items-start group">
                      <div
                        className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center mr-4 transform transition-all shadow-sm ${
                          isDark 
                            ? index === 0
                              ? "bg-blue-500/20 text-blue-300 group-hover:bg-blue-500/40"
                              : "bg-cyan-500/20 text-cyan-300 group-hover:bg-cyan-500/40"
                            : index === 0
                              ? "bg-blue-500/10 text-blue-600 group-hover:bg-blue-500/20"
                              : "bg-cyan-500/10 text-cyan-600 group-hover:bg-cyan-500/20"
                        }`}
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="transition-transform duration-300 group-hover:scale-110"
                        >
                          <path
                            d="M5.33333 8L7.33333 10L10.6667 6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <circle
                            cx="8"
                            cy="8"
                            r="7"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />
                        </svg>
                      </div>
                      <span className="mt-1.5 group-hover:translate-x-1 transition-transform duration-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      )}

      {technicalDetails && (
        <motion.div
          animate={{ opacity: 1 }}
          className={`relative mt-24 mb-20 overflow-hidden rounded-3xl shadow-xl border ${
            isDark
              ? `bg-gradient-to-br from-[#121929] to-[#0d1117] border-[${brandColors.primary}]/40`
              : `bg-gradient-to-br from-[${brandColors.primary}]/5 to-[${brandColors.secondary}]/5 border-[${brandColors.primary}]/20`
          }`}
        >
          {/* Декоративные элементы фона */}
          <div className="absolute inset-0 overflow-hidden -z-10">
            <div
              className={`absolute w-[500px] h-[500px] rounded-full blur-3xl ${
                isDark ? `bg-[${brandColors.primary}]/8` : `bg-[${brandColors.primary}]/15`
              } -top-20 -right-20`}
            ></div>
            <div
              className={`absolute w-[500px] h-[500px] rounded-full blur-3xl ${
                isDark ? `bg-[${brandColors.secondary}]/8` : `bg-[${brandColors.secondary}]/15`
              } -bottom-20 -left-20`}
            ></div>
          </div>

          {/* Заголовок с иконкой */}
          <div className="text-center pt-14 pb-10">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div
                className={`inline-flex w-18 h-18 rounded-xl items-center justify-center ${
                  isDark
                    ? "bg-gradient-to-br from-blue-500/30 to-cyan-500/20 text-cyan-300 border border-blue-500/30"
                    : "bg-gradient-to-br from-blue-500/20 to-cyan-500/20 text-blue-600 border border-blue-500/30"
                }`}
              >
                <FiServer className="w-9 h-9" />
              </div>
              <h3
                className={`text-4xl font-bold ${
                  isDark ? "text-blue-300" : "text-blue-600"
                }`}
              >
                Ключевые технические особенности
              </h3>
            </div>

            {/* Основное описание */}
            <motion.p
              animate={{ opacity: 1 }}
              className={`mt-6 mb-14 text-xl max-w-4xl mx-auto px-10 ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {technicalDetails}
            </motion.p>
          </div>

          {/* Технические пункты */}
          {techPoints && techPoints.length > 0 && (
            <div className="px-10 pb-14">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {techPoints.map((point, index) => {
                  const IconComponent = techIconMap[index % techIconMap.length];
                  const colors = [
                    { icon: "text-blue-400", bg: "from-blue-500/40 to-blue-600/30", border: "border-blue-500/30" },
                    { icon: "text-cyan-400", bg: "from-cyan-500/40 to-cyan-600/30", border: "border-cyan-500/30" },
                    { icon: "text-indigo-400", bg: "from-indigo-500/40 to-indigo-600/30", border: "border-indigo-500/30" },
                    { icon: "text-purple-400", bg: "from-purple-500/40 to-purple-600/30", border: "border-purple-500/30" },
                    { icon: "text-sky-400", bg: "from-sky-500/40 to-sky-600/30", border: "border-sky-500/30" }
                  ];
                  
                  const colorIndex = index % colors.length;
                  
                  return (
                    <motion.div
                      key={index}
                      animate={{ opacity: 1 }}
                      whileHover={{
                        y: -5,
                        transition: { duration: 0.2 },
                        boxShadow: isDark
                          ? `0 15px 30px rgba(0, 0, 0, 0.4), 0 0 10px rgba(${parseInt(brandColors.primary.substring(1, 3), 16)}, ${parseInt(brandColors.primary.substring(3, 5), 16)}, ${parseInt(brandColors.primary.substring(5, 7), 16)}, 0.2)`
                          : `0 15px 30px rgba(0, 0, 0, 0.1), 0 0 10px rgba(${parseInt(brandColors.primary.substring(1, 3), 16)}, ${parseInt(brandColors.primary.substring(3, 5), 16)}, ${parseInt(brandColors.primary.substring(5, 7), 16)}, 0.15)`,
                      }}
                      className={`p-7 rounded-xl border shadow-md flex items-start ${
                        isDark
                          ? `bg-gray-800/60 border-gray-700/50 hover:border-${colors[colorIndex].border}`
                          : `bg-white/90 border-gray-200/70 hover:${colors[colorIndex].border}`
                      }`}
                    >
                      <div
                        className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center mr-5 ${
                          isDark
                            ? `bg-gradient-to-br ${colors[colorIndex].bg} ${colors[colorIndex].icon} ${colors[colorIndex].border}`
                            : `bg-gradient-to-br ${colors[colorIndex].bg.replace(/\/40/g, '/15').replace(/\/30/g, '/10')} ${colors[colorIndex].icon.replace(/400/g, '600')} ${colors[colorIndex].border}`
                        }`}
                      >
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="flex-1 pt-0.5">
                        <p
                          className={`text-base leading-relaxed ${
                            isDark ? "text-gray-200" : "text-gray-700"
                          }`}
                          dangerouslySetInnerHTML={{ __html: point }}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}
        </motion.div>
      )}
    </CaseSection>
  );
}
