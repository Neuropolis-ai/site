"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface PageTransitionWrapperProps {
  children: ReactNode;
}

export const PageTransitionWrapper: React.FC<PageTransitionWrapperProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}; 