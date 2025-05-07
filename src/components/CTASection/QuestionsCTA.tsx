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
      className={`bg-white dark:bg-gray-900 rounded-2xl overflow-hidden p-6 max-w-3xl mx-auto border border-gray-200 dark:border-gray-800 shadow-md text-center ${className}`}
    >
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        Остались вопросы?
      </h3>
      <p className="text-base text-gray-600 dark:text-gray-300 mb-6 mx-auto max-w-2xl">
        Свяжитесь с нами для получения бесплатной консультации. Наши эксперты
        подробно расскажут о возможностях для вашего бизнеса.
      </p>
      <Link
        href="#contact"
        className="inline-block bg-[#0167F3] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#0156cc] transition-colors"
      >
        Получить консультацию
      </Link>
    </div>
  );
};

export default QuestionsCTA;
