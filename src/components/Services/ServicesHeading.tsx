"use client";

import React from "react";
import { motion } from "framer-motion";

interface ServicesHeadingProps {
  title: string;
  subtitle: string;
  label?: string;
}

const ServicesHeading: React.FC<ServicesHeadingProps> = ({
  title,
  subtitle,
  label = "Услуги",
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

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

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="text-center max-w-screen-lg mx-auto mb-16 relative z-10"
    >
      <motion.div variants={itemVariants}>
        <span className="inline-flex items-center justify-center border border-blue-300 gap-2 px-4 py-1.5 rounded-full text-sm mb-4 bg-blue-500/10 text-blue-600">
          {label}
        </span>
      </motion.div>

      <motion.h2
        variants={itemVariants}
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
      >
        <span className="bg-gradient-to-r from-[#0167F3] to-[#399AFC] bg-clip-text text-transparent">
          {title}
        </span>
      </motion.h2>

      <motion.p
        variants={itemVariants}
        className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600 leading-relaxed"
      >
        {subtitle}
      </motion.p>
    </motion.div>
  );
};

export default ServicesHeading;
