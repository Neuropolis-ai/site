"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";
import { Fragment } from "react";

export interface BreadcrumbItem {
  label: string;
  href: string;
  isCurrentPage?: boolean;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
  homePath?: string;
  homeLabel?: string;
  className?: string;
}

/**
 * Компонент хлебных крошек с микроразметкой Schema.org
 */
const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items = [],
  homePath = "/",
  homeLabel = "Главная",
  className = "",
}) => {
  const pathname = usePathname();
  
  // Если не передали элементы, формируем автоматически из текущего пути
  const breadcrumbItems = items.length > 0 
    ? items 
    : generateBreadcrumbsFromPath(pathname, homePath, homeLabel);
  
  if (breadcrumbItems.length <= 1) return null;
  
  return (
    <nav 
      aria-label="breadcrumbs" 
      className={`text-sm py-4 ${className}`}
    >
      <ol 
        className="flex flex-wrap items-center text-gray-600 dark:text-gray-400"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {breadcrumbItems.map((item, index) => {
          const isLast = index === breadcrumbItems.length - 1;
          
          return (
            <Fragment key={item.href}>
              <li 
                className="flex items-center"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                {index === 0 && (
                  <Home size={14} className="mr-1.5 inline-block" />
                )}
                
                {item.isCurrentPage || isLast ? (
                  <span 
                    className="text-gray-800 dark:text-gray-300 font-medium"
                    itemProp="name"
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link 
                    href={item.href}
                    className="hover:text-blue-600 dark:hover:text-blue-400 hover:underline transition-colors"
                    itemProp="item"
                  >
                    <span itemProp="name">{item.label}</span>
                  </Link>
                )}
                
                <meta itemProp="position" content={`${index + 1}`} />
              </li>
              
              {!isLast && (
                <li className="mx-2 text-gray-400">
                  <ChevronRight size={14} />
                </li>
              )}
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
};

/**
 * Генерирует хлебные крошки из текущего пути
 */
function generateBreadcrumbsFromPath(
  pathname: string, 
  homePath: string, 
  homeLabel: string
): BreadcrumbItem[] {
  const pathSegments = pathname.split('/').filter(Boolean);
  
  // Начинаем со ссылки на главную
  const breadcrumbs: BreadcrumbItem[] = [
    { label: homeLabel, href: homePath }
  ];
  
  // Строим хлебные крошки для каждого сегмента пути
  let currentPath = '';
  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    
    // Преобразуем сегмент URL в читаемую метку
    const label = segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    breadcrumbs.push({
      label,
      href: currentPath,
      isCurrentPage: index === pathSegments.length - 1
    });
  });
  
  return breadcrumbs;
}

export default Breadcrumbs; 