"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";

type FAQItem = {
  question: string;
  answer: string;
};

interface CaseFAQProps {
  title?: string;
  subtitle?: string;
  faqs: FAQItem[];
}

const CaseFAQ: React.FC<CaseFAQProps> = ({
  title = "Часто задаваемые вопросы",
  subtitle = "Ответы на популярные вопросы о внедрении ИИ-ассистентов для поддержки клиентов",
  faqs
}) => {
  // State to track which FAQ item is open
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Создаем данные для структурированной разметки FAQ
  const faqSchemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="w-full" id="faq">
      {/* Добавляем структурированную разметку Schema.org в виде JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchemaData)
        }}
      />
      
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>

      <div className="space-y-4 max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden
                        transition-all duration-300 
                        ${openIndex === index ? "bg-blue-50 dark:bg-blue-900/20" : "bg-white dark:bg-gray-800/30"}`}
            itemScope
            itemType="https://schema.org/Question"
          >
            <button
              className="flex justify-between items-center w-full p-5 text-left"
              onClick={() => handleToggle(index)}
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              <span className="text-lg font-medium" itemProp="name">{faq.question}</span>
              <IoIosArrowDown
                className={`w-5 h-5 transition-transform duration-300 ${
                  openIndex === index ? "transform rotate-180" : ""
                }`}
              />
            </button>
            
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  id={`faq-answer-${index}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                  itemScope
                  itemType="https://schema.org/Answer"
                  itemProp="acceptedAnswer"
                >
                  <div className="p-5 pt-0 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-gray-600 dark:text-gray-300" itemProp="text">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseFAQ; 