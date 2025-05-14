"use client";

import React from "react";
import Breadcrumbs, { BreadcrumbItem } from "@/components/ui/Breadcrumbs";
import { Heading } from "@/components/ui/heading";

interface PageContainerProps {
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  breadcrumbs?: BreadcrumbItem[];
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

/**
 * Универсальный контейнер для страниц с заголовком, описанием и хлебными крошками
 */
const PageContainer: React.FC<PageContainerProps> = ({
  title,
  description,
  breadcrumbs,
  children,
  className = "",
  containerClassName = "max-w-7xl",
}) => {
  return (
    <main className={`flex-grow pt-32 pb-20 ${className}`}>
      <div className={`container mx-auto px-4 ${containerClassName}`}>
        <Breadcrumbs items={breadcrumbs} />
        
        <div className="mb-12">
          {typeof title === "string" ? (
            <Heading level={1} className="mb-4 text-gray-900 dark:text-white">
              {title}
            </Heading>
          ) : (
            title
          )}
          
          {description && (
            typeof description === "string" ? (
              <p className="text-lg text-gray-600 dark:text-gray-400">
                {description}
              </p>
            ) : (
              description
            )
          )}
        </div>
        
        {children}
      </div>
    </main>
  );
};

export default PageContainer; 