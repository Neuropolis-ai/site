"use client";

import { useTheme } from "@/context/ThemeContext";
import CaseSection from "./CaseSection";
import { motion } from "framer-motion";
import { FiMessageSquare } from "react-icons/fi";

interface CaseTestimonialProps {
  text: string;
  authorName: string;
  authorPosition: string;
  authorInitials: string;
  textClassName?: string;
  transparent?: boolean;
}

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

export default function CaseTestimonial({
  text,
  authorName,
  authorPosition,
  authorInitials,
  textClassName = "text-lg md:text-xl",
  transparent = false,
}: CaseTestimonialProps) {
  const { isDark } = useTheme();

  return (
    <CaseSection title="💬 Отзыв клиента" transparent={transparent}>
      <motion.div
        variants={itemVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className={`relative p-8 rounded-3xl shadow-xl border backdrop-blur-md ${
          transparent
            ? "bg-gradient-to-br from-white/40 to-gray-50/20 border-gray-200/50"
            : "bg-gradient-to-br from-white/90 to-gray-50/80 border-gray-200/70"
        }`}
      >
        <FiMessageSquare
          className={`absolute top-4 left-4 w-10 h-10 ${
            isDark ? "text-blue-700/30" : "text-blue-200/60"
          } opacity-50 z-0`}
        />
        <blockquote
          className={`relative z-10 italic leading-relaxed mb-6 pl-8 ${
            textClassName
          } ${isDark ? "text-gray-200" : "text-gray-700"}`}
        >
          {text}
        </blockquote>

        <div className="flex items-center mt-6 relative z-10">
          <div
            className={`h-14 w-14 rounded-full flex items-center justify-center text-xl font-semibold mr-4 ${
              isDark
                ? "bg-blue-800/50 text-blue-200"
                : "bg-blue-100/80 text-blue-600"
            }`}
          >
            {authorInitials}
          </div>
          <div>
            <div
              className={`font-semibold text-base ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              {authorName}
            </div>
            <div
              className={`text-sm ${
                isDark ? "text-blue-300/80" : "text-blue-600/90"
              }`}
            >
              {authorPosition}
            </div>
          </div>
        </div>
      </motion.div>
    </CaseSection>
  );
}
