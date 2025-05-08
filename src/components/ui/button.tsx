'use client';

import React, { ReactNode } from "react";
import Link from "next/link";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
}

const Button = ({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  icon,
  iconPosition = "right",
  fullWidth = false,
}: ButtonProps) => {
  const baseStyles =
    "font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2";

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-[#0167F3] to-[#399AFC] hover:from-[#0157D3] hover:to-[#2988E8] text-white shadow-lg hover:shadow-blue-500/20 dark:hover:shadow-blue-700/10",
    outline:
      "bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 shadow-md hover:shadow-lg",
    ghost:
      "bg-transparent hover:bg-blue-50 dark:hover:bg-blue-900/20 text-gray-800 dark:text-white",
  };

  const widthStyle = fullWidth ? "w-full" : "";

  const content = (
    <>
      {icon && iconPosition === "left" && icon}
      {children}
      {icon && iconPosition === "right" && icon}
    </>
  );

  const combinedClassName = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyle} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {content}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={combinedClassName}
    >
      {content}
    </button>
  );
};

export default Button; 