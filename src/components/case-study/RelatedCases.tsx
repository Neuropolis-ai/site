"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import CaseImage from "./CaseImage";

type RelatedCase = {
  id: string;
  title: string;
  subtitle: string;
  imagePath: string;
  url: string;
};

interface RelatedCasesProps {
  title?: string;
  subtitle?: string;
  cases: RelatedCase[];
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

const RelatedCases: React.FC<RelatedCasesProps> = ({
  title = "Похожие кейсы",
  subtitle = "Другие примеры внедрения ИИ-решений для бизнеса",
  cases
}) => {
  // Создаем данные для структурированной разметки релевантных статей
  const relatedCasesSchemaData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": cases.map((caseItem, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Article",
        "url": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://neuropolis.ai'}${caseItem.url}`,
        "name": caseItem.title,
        "description": caseItem.subtitle,
        "image": caseItem.imagePath
      }
    }))
  };

  return (
    <div className="w-full" id="related-cases" itemScope itemType="https://schema.org/ItemList">
      {/* Добавляем структурированную разметку Schema.org в виде JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(relatedCasesSchemaData)
        }}
      />
      
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold mb-4" itemProp="name">{title}</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto" itemProp="description">
          {subtitle}
        </p>
      </div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {cases.map((caseItem, index) => (
          <motion.div
            key={caseItem.id}
            variants={item}
            className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800/30 border border-gray-100 dark:border-gray-700"
            itemScope
            itemType="https://schema.org/Article"
            itemProp="itemListElement"
          >
            <meta itemProp="position" content={`${index + 1}`} />
            <Link href={caseItem.url} itemProp="url">
              <div className="relative h-48 overflow-hidden">
                <CaseImage
                  src={caseItem.imagePath}
                  alt={caseItem.title}
                  className="object-cover transform hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                />
                <meta itemProp="image" content={caseItem.imagePath} />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2 line-clamp-2" itemProp="headline">{caseItem.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 line-clamp-3" itemProp="description">
                  {caseItem.subtitle}
                </p>
                <div className="mt-4 text-blue-600 dark:text-blue-400 font-medium flex items-center">
                  Подробнее
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default RelatedCases; 