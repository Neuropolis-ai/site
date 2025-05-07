"use client";

import React, { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface HeroButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
}

const HeroButton = ({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  icon,
  iconPosition = "right",
  fullWidth = false,
}: HeroButtonProps) => {
  const baseStyles =
    "font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 px-6 py-3 text-base";

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-[#0167F3] to-[#399AFC] hover:from-[#0157D3] hover:to-[#2988E8] text-white shadow-lg hover:shadow-blue-500/20 dark:hover:shadow-blue-700/10",
    outline:
      "bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 shadow-md hover:shadow-lg",
    ghost:
      "bg-transparent hover:bg-blue-50 dark:hover:bg-blue-900/20 text-gray-800 dark:text-white",
  };

  const widthStyle = fullWidth ? "w-full" : "";
  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${widthStyle} ${className}`;

  const content = (
    <>
      {icon && iconPosition === "left" && icon}
      {children}
      {icon && iconPosition === "right" && icon}
    </>
  );

  const buttonVariants = {
    initial: { scale: 0.95, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    hover: {
      scale: 1.03,
      boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)",
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.97 },
  };

  if (href) {
    return (
      <motion.div
        initial="initial"
        animate="animate"
        whileHover="hover"
        whileTap="tap"
        variants={buttonVariants}
      >
        <Link href={href} className={combinedClassName}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={combinedClassName}
      initial="initial"
      animate="animate"
      whileHover="hover"
      whileTap="tap"
      variants={buttonVariants}
    >
      {content}
    </motion.button>
  );
};

export default HeroButton;
