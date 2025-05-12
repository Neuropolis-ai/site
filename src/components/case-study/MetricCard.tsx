"use client";

import { useTheme } from "@/context/ThemeContext";

interface MetricCardProps {
  number: string;
  label: string;
}

export default function MetricCard({ number, label }: MetricCardProps) {
  const { isDark } = useTheme();

  return (
    <div
      className={`p-6 rounded-xl flex flex-col items-center text-center ${
        isDark ? "bg-[#0d1635]" : "bg-blue-50"
      }`}
    >
      <span
        className={`text-3xl font-bold mb-2 ${
          isDark ? "text-blue-400" : "text-blue-600"
        }`}
      >
        {number}
      </span>
      <span className={isDark ? "text-gray-300" : "text-gray-700"}>
        {label}
      </span>
    </div>
  );
}
