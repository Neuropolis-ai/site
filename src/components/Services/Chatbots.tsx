"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";

const Chatbots = () => {
  const { isDark } = useTheme();

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Чат-боты на базе{" "}
            <span className="text-[#0167F3]">искусственного интеллекта</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Интеллектуальные чат-боты для автоматизации коммуникации с клиентами
            и сотрудниками
          </p>
        </div>
      </div>
    </section>
  );
};

export default Chatbots;
