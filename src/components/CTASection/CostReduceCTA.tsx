import React from "react";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import { BsArrowRight } from "react-icons/bs";

interface CostReduceCTAProps {
  className?: string;
}

const CostReduceCTA: React.FC<CostReduceCTAProps> = ({ className = "" }) => {
  const { isDark } = useTheme();

  return (
    <div
      className={`max-w-4xl mx-auto px-8 py-10 rounded-2xl relative overflow-hidden backdrop-blur-lg ${className}`}
    >
      <div className="absolute inset-0 bg-white/60 dark:bg-gray-900/50 -z-10"></div>
      <div className="absolute inset-0 border border-white/20 dark:border-gray-700/30 rounded-2xl -z-10"></div>
      <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 dark:from-blue-600/10 dark:to-indigo-600/10 rounded-full blur-xl -z-10"></div>
      <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-r from-indigo-400/10 to-blue-400/10 dark:from-indigo-600/10 dark:to-blue-600/10 rounded-full blur-xl -z-10"></div>

      <div className="relative z-10 text-center">
        <h3
          className={`text-h2 ${
            isDark
              ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300"
              : "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"
          }`}
        >
          Сократите затраты на поддержку и увеличьте лояльность
        </h3>
        <p
          className={`text-base md:text-lg mb-8 max-w-3xl mx-auto ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}
        >
          ИИ-ассистент сокращает время ответа клиентам в десятки раз и улучшает
          качество обслуживания. Агент никогда не устаёт, не болеет и всегда
          доступен 24/7 для вашего бизнеса.
        </p>
        <div className="flex justify-center">
          <Link
            href="/contact"
            className={`inline-flex items-center justify-center px-8 py-4 rounded-full text-lg ${
              isDark
                ? "bg-white/10 text-white border-2 border-blue-400 hover:bg-white/20"
                : "bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50"
            } shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
          >
            Узнать стоимость внедрения
            <BsArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
        <div className="flex justify-center mt-4">
          <Link
            href="/contact"
            className={`inline-flex items-center justify-center px-8 py-4 rounded-full text-lg ${
              isDark
                ? "bg-white/10 text-white border-2 border-blue-400 hover:bg-white/20"
                : "bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50"
            } shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
          >
            Хочу ИИ-ассистента для бизнеса
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CostReduceCTA;
