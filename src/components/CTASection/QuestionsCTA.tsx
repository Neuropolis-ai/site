import React from "react";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";

interface QuestionsCTAProps {
  className?: string;
}

const QuestionsCTA: React.FC<QuestionsCTAProps> = ({ className = "" }) => {
  const { isDark } = useTheme();

  return (
    <div
      className={`bg-white dark:bg-gray-900 rounded-2xl overflow-hidden p-6 max-w-3xl mx-auto border border-gray-200 dark:border-gray-800 shadow-md ${className}`}
    >
      <h3
        className="text-lg font-semibold text-gray-900 dark:text-white mb-2"
        style={{ fontSize: "18px" }}
      >
        Остались вопросы?
      </h3>
      <p
        className="text-base text-gray-600 dark:text-gray-300 mb-4"
        style={{ fontSize: "16px" }}
      >
        Свяжитесь с нами для получения бесплатной консультации. Наши эксперты
        подробно расскажут о возможностях для вашего бизнеса.
      </p>
      <Link
        href="#contact"
        className="inline-block bg-gradient-to-r from-[#0167F3] to-[#399AFC] text-white font-semibold py-2 px-6 rounded-lg transition-transform hover:-translate-y-1"
      >
        Получить консультацию
      </Link>
    </div>
  );
};

export default QuestionsCTA;
