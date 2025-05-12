"use client";

import React from "react";
import Link from "next/link";

// Интерфейс для пропсов кнопки
export interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  isLoading?: boolean;
  disabled?: boolean;
  asChild?: boolean;
  onClick?: () => void;
  [key: string]: any; // Для прочих HTML атрибутов
}

// Варианты стилей для кнопки
export const buttonVariants = {
  variant: {
    primary:
      "bg-gradient-to-r from-primary-light to-primary text-white hover:from-primary hover:to-primary-dark shadow",
    secondary: "bg-muted text-foreground hover:bg-muted/80",
    ghost: "bg-transparent hover:bg-accent/20",
  },
  size: {
    sm: "px-4 py-2 text-sm rounded-md",
    md: "px-6 py-3 text-base rounded-lg",
    lg: "px-8 py-4 text-lg rounded-lg",
  },
};

// Экспорт для старого API
export const button = buttonVariants;

// Компонент кнопки
export const Button = ({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  iconLeft,
  iconRight,
  isLoading = false,
  disabled,
  asChild = false,
  onClick,
  ...props
}: ButtonProps) => {
  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-70 disabled:cursor-not-allowed";

  const classes = `${baseClasses} ${buttonVariants.variant[variant]} ${buttonVariants.size[size]} ${className}`;

  const content = (
    <>
      {isLoading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      {iconLeft && <span className={children ? "mr-2" : ""}>{iconLeft}</span>}
      {children}
      {iconRight && <span className={children ? "ml-2" : ""}>{iconRight}</span>}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      disabled={isLoading || disabled}
      onClick={onClick}
      {...props}
    >
      {content}
    </button>
  );
};

// Добавляем оба типа экспорта для совместимости
export default Button;
