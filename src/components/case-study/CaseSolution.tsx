"use client";

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
  return (
    <CaseSection title="🤖 Предложенное решение">
      <motion.p
        animate={{ opacity: 1 }}
        className="mb-10 text-base text-blue-600 leading-relaxed max-w-3xl font-medium"
      >
        {description}
      </motion.p>

      {features.length > 0 && (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
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
                  boxShadow: `0 15px 30px rgba(0, 0, 0, 0.1), 0 0 15px rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, 0.15)`,
                }}
                className={`p-7 rounded-2xl flex flex-col transition-all duration-300 border shadow-md h-full bg-gradient-to-br from-white to-gray-50/95 border-gray-200/70 hover:border-blue-400`}
              >
                <div className="flex items-center mb-5">
                  <div
                    className={`flex-shrink-0 w-14 h-14 rounded-lg flex items-center justify-center mr-5 transform transition-all duration-300 shadow-sm 
                      ${index === 0
                        ? "bg-gradient-to-br from-blue-500/20 to-indigo-600/20 text-blue-600 border border-blue-500/30"
                        : "bg-gradient-to-br from-cyan-500/20 to-blue-600/20 text-cyan-600 border border-cyan-500/30"
                      }`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-bold text-xl text-gray-900">
                    {feature.title}
                  </h3>
                </div>
                <ul className="list-none pl-0 space-y-4 text-sm flex-grow text-gray-600 ml-16">
                  {feature.items.map((item, idx) => (
                    <li key={idx} className="flex items-center group">
                      <div
                        className={`flex-shrink-0 w-7 h-7 rounded-md flex items-center justify-center mr-3 transform transition-all shadow-sm
                          ${index === 0
                            ? "bg-blue-500/10 text-blue-600 group-hover:bg-blue-500/20"
                            : "bg-cyan-500/10 text-cyan-600 group-hover:bg-cyan-500/20"
                          }`}
                      >
                        <svg
                          width="16"
                          height="16"
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
                      <span className="text-base group-hover:translate-x-1 transition-transform duration-300">{item}</span>
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
          className="relative mt-16 mb-16 overflow-hidden rounded-2xl shadow-lg border bg-gradient-to-br from-[#0167F3]/5 to-[#399AFC]/5 border-[#0167F3]/20"
        >
          {/* Декоративные элементы фона */}
          <div className="absolute inset-0 overflow-hidden -z-10">
            <div className="absolute w-[500px] h-[500px] rounded-full blur-3xl bg-[#0167F3]/15 -top-20 -right-20"></div>
            <div className="absolute w-[500px] h-[500px] rounded-full blur-3xl bg-[#399AFC]/15 -bottom-20 -left-20"></div>
          </div>

          {/* Заголовок с иконкой */}
          <div className="text-center pt-10 pb-8">
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="inline-flex w-14 h-14 rounded-lg items-center justify-center bg-gradient-to-br from-blue-500/20 to-cyan-500/20 text-blue-600 border border-blue-500/30">
                <FiServer className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Ключевые технические особенности
              </h3>
            </div>

            {/* Основное описание */}
            <motion.p
              animate={{ opacity: 1 }}
              className="mt-4 mb-12 text-lg max-w-3xl mx-auto px-8 text-blue-600"
            >
              {technicalDetails}
            </motion.p>
          </div>

          {/* Технические пункты */}
          {techPoints && techPoints.length > 0 && (
            <div className="px-8 pb-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {techPoints.map((point, index) => {
                  const IconComponent = techIconMap[index % techIconMap.length];
                  const colors = [
                    { icon: "text-blue-600", bg: "from-blue-500/15 to-blue-600/10", border: "border-blue-500/30" },
                    { icon: "text-cyan-600", bg: "from-cyan-500/15 to-cyan-600/10", border: "border-cyan-500/30" },
                    { icon: "text-indigo-600", bg: "from-indigo-500/15 to-indigo-600/10", border: "border-indigo-500/30" },
                    { icon: "text-purple-600", bg: "from-purple-500/15 to-purple-600/10", border: "border-purple-500/30" },
                    { icon: "text-sky-600", bg: "from-sky-500/15 to-sky-600/10", border: "border-sky-500/30" }
                  ];
                  
                  const colorIndex = index % colors.length;
                  
                  return (
                    <motion.div
                      key={index}
                      animate={{ opacity: 1 }}
                      whileHover={{
                        y: -3,
                        transition: { duration: 0.2 },
                        boxShadow: `0 10px 25px rgba(0, 0, 0, 0.08), 0 0 8px rgba(${primaryRGB.r}, ${primaryRGB.g}, ${primaryRGB.b}, 0.1)`,
                      }}
                      className={`p-5 rounded-xl border shadow-sm flex items-center bg-white/90 border-gray-200/70 hover:border-${colors[colorIndex].border}`}
                    >
                      <div
                        className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center mr-4 bg-gradient-to-br ${colors[colorIndex].bg} ${colors[colorIndex].icon} ${colors[colorIndex].border}`}
                      >
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <p
                          className="text-base leading-relaxed text-gray-700"
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