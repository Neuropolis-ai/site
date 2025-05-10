"use client";

import { motion } from "framer-motion";
import ChatBotsHero from "./ChatBotsHero";
import ChatBotsProblems from "./ChatBotsProblems";
import ChatBotsSolution from "./ChatBotsSolution";
import ChatBotsUseCases from "./ChatBotsUseCases";
import ChatBotsProcess from "./ChatBotsProcess";
import ChatBotsWhyUs from "./ChatBotsWhyUs";
import ChatBotsFAQ from "./ChatBotsFAQ";
import ChatBotsContactEnhanced from "./ChatBotsContactEnhanced";

export default function ChatBotsPage() {
  // Анимация для плавного появления страницы
  const pageFadeIn = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      className="bg-gray-50 text-gray-800 font-sans dark:bg-black dark:text-white"
      variants={pageFadeIn}
      initial="hidden"
      animate="show"
    >
      <ChatBotsHero />
      <ChatBotsProblems />
      <ChatBotsSolution />
      <ChatBotsUseCases />
      <ChatBotsProcess />
      <ChatBotsWhyUs />
      <ChatBotsFAQ />
      <ChatBotsContactEnhanced />
    </motion.div>
  );
}
