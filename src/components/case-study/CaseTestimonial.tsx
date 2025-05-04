"use client";

import { useTheme } from "@/context/ThemeContext";
import CaseSection from "./CaseSection";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

interface CaseTestimonialProps {
  text: string;
  authorName: string;
  authorPosition: string;
  authorInitials: string;
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
}: CaseTestimonialProps) {
  const { isDark } = useTheme();

  return (
    <CaseSection title="💬 Отзыв клиента">
      <motion.div
        variants={itemVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className={`p-6 md:p-8 rounded-2xl relative overflow-hidden border shadow-sm ${
          isDark
            ? "bg-gray-800/30 border-gray-700/40"
            : "bg-white/40 border-gray-200/70"
        }`}
      >
        <FaQuoteLeft
          className={`absolute top-4 left-4 w-10 h-10 ${
            isDark ? "text-blue-700/30" : "text-blue-200/60"
          } opacity-50`}
        />
        <blockquote
          className={`relative z-10 italic text-lg md:text-xl leading-relaxed mb-6 ${
            isDark ? "text-gray-200" : "text-gray-700"
          }`}
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
              className={`font-semibold text-lg ${
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
