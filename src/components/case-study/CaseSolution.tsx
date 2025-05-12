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

// Функция для преобразования HEX-цвета в RGB компоненты
const hexToRgb = (hex: string) => {
  const r = parseInt(hex.substring(1, 3), 16);
  const g = parseInt(hex.substring(3, 5), 16);
  const b = parseInt(hex.substring(5, 7), 16);
  return { r, g, b };
};

// RGB компоненты для фирменных цветов
const primaryRGB = hexToRgb("#0167F3");

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
        className="mb-8 text-base leading-relaxed max-w-3xl text-blue-600 dark:text-blue-400"
      >
        {description}
      </motion.p>

      {features.length > 0 && (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
          animate={{ opacity: 1 }}
        >
          {features.map((feature, index) => {
            const Icon =
              feature.icon ||
              featureIconMap[feature.title] ||
              featureIconMap.Default;
            return (
              <motion.div
                key={index}
                animate={{ opacity: 1 }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 },
                  boxShadow: isDark
                    ? `0 15px 30px rgba(0, 0, 0, 0.5), 0 0 12px rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, 0.25)`
                    : `0 15px 30px rgba(0, 0, 0, 0.1), 0 0 15px rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, 0.15)`,
                }}
                className={`p-6 rounded-xl flex flex-col transition-all duration-300 border shadow-md h-full ${
                  isDark
                    ? "bg-gradient-to-br from-gray-800/90 to-gray-900/90 border-gray-700/40 hover:border-blue-600/70"
                    : "bg-gradient-to-br from-white to-gray-50/95 border-gray-200/70 hover:border-blue-400"
                }`}
              >
                <div className="flex items-center mb-5">
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center mr-4 transform transition-all duration-300 shadow-sm ${
                      isDark
                        ? index === 0 
                          ? "bg-gradient-to-br from-blue-500/60 to-indigo-600/40 text-white border border-blue-500/40"
                          : "bg-gradient-to-br from-cyan-500/60 to-blue-600/40 text-white border border-cyan-500/40"
                        : index === 0
                          ? "bg-gradient-to-br from-blue-500/20 to-indigo-600/20 text-blue-600 border border-blue-500/30"
                          : "bg-gradient-to-br from-cyan-500/20 to-blue-600/20 text-cyan-600 border border-cyan-500/30"
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3
                    className={`font-bold text-lg ${
                      isDark 
                        ? "text-gray-100" 
                        : "text-gray-900"
                    }`}
                  >
                    {feature.title}
                  </h3>
                </div>
                <ul
                  className={`list-none pl-0 space-y-3 text-sm flex-grow ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  } ml-16`}
                >
                  {feature.items.map((item, idx) => (
                    <li key={idx} className="flex items-center group">
                      <div
                        className={`flex-shrink-0 w-6 h-6 rounded-md flex items-center justify-center mr-3 transform transition-all shadow-sm ${
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
                          width="14"
                          height="14"
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
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{item}</span>
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
          className={`relative mt-16 mb-16 overflow-hidden rounded-2xl shadow-lg border ${
            isDark
              ? "bg-gradient-to-br from-[#121929] to-[#0d1117] border-[#0167F3]/40"
              : "bg-gradient-to-br from-[#0167F3]/5 to-[#399AFC]/5 border-[#0167F3]/20"
          }`}
        >
          {/* Декоративные элементы фона */}
          <div className="absolute inset-0 overflow-hidden -z-10">
            <div
              className={`absolute w-[400px] h-[400px] rounded-full blur-3xl ${
                isDark ? "bg-[#0167F3]/8" : "bg-[#0167F3]/15"
              } -top-20 -right-20`}
            ></div>
            <div
              className={`absolute w-[400px] h-[400px] rounded-full blur-3xl ${
                isDark ? "bg-[#399AFC]/8" : "bg-[#399AFC]/15"
              } -bottom-20 -left-20`}
            ></div>
          </div>

          {/* Заголовок с иконкой */}
          <div className="text-center pt-10 pb-8">
            <div className="flex items-center justify-center gap-3 mb-2">
              <div
                className={`inline-flex w-12 h-12 rounded-lg items-center justify-center ${
                  isDark
                    ? "bg-gradient-to-br from-blue-500/30 to-cyan-500/20 text-cyan-300 border border-blue-500/30"
                    : "bg-gradient-to-br from-blue-500/20 to-cyan-500/20 text-blue-600 border border-blue-500/30"
                }`}
              >
                <FiServer className="w-6 h-6" />
              </div>
              <h3
                className={`text-2xl font-bold ${
                  isDark ? "text-gray-100" : "text-gray-900"
                }`}
              >
                Ключевые технические особенности
              </h3>
            </div>

            {/* Основное описание */}
            <motion.p
              animate={{ opacity: 1 }}
              className={`mt-4 mb-10 text-base max-w-3xl mx-auto px-8 ${
                isDark ? "text-blue-400" : "text-blue-600"
              }`}
            >
              {technicalDetails}
            </motion.p>
          </div>

          {/* Технические пункты */}
          {techPoints && techPoints.length > 0 && (
            <div className="px-6 pb-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
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
                        y: -3,
                        transition: { duration: 0.2 },
                        boxShadow: isDark
                          ? `0 10px 25px rgba(0, 0, 0, 0.3), 0 0 8px rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, 0.2)`
                          : `0 10px 25px rgba(0, 0, 0, 0.08), 0 0 8px rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, 0.1)`,
                      }}
                      className={`p-4 rounded-lg border shadow-sm flex items-center ${
                        isDark
                          ? "bg-gray-800/70 border-gray-700/50 hover:border-" + colors[colorIndex].border
                          : "bg-white/90 border-gray-200/70 hover:border-" + colors[colorIndex].border
                      }`}
                    >
                      <div
                        className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center mr-4 ${
                          isDark
                            ? "bg-gradient-to-br " + colors[colorIndex].bg + " " + colors[colorIndex].icon + " " + colors[colorIndex].border
                            : "bg-gradient-to-br " + colors[colorIndex].bg.replace(/\/40/g, '/15').replace(/\/30/g, '/10') + " " + colors[colorIndex].icon.replace(/400/g, '600') + " " + colors[colorIndex].border
                        }`}
                      >
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <p
                          className={`text-sm leading-relaxed ${
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