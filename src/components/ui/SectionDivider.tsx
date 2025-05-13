import React from "react";

interface SectionDividerProps {
  className?: string;
}

const SectionDivider: React.FC<SectionDividerProps> = ({ className = "" }) => {
  return (
    <div className={`w-full py-12 ${className}`}>
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent"></div>
    </div>
  );
};

export default SectionDivider; 