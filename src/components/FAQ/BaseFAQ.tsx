"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDownIcon } from "lucide-react";
import Badge from "@/components/ui/Badge";

export interface FAQItem {
  id?: number;
  question: string;
  answer: string;
}

export interface BaseFAQProps {
  faqItems: FAQItem[];
  title?: string;
  subtitle?: string;
  sectionId?: string;
  contactLink?: string;
  contactText?: string;
}

// Компонент для SEO-разметки FAQ
export function FAQSchema({ faqs }: { faqs: FAQItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function BaseFAQ({
  faqItems,
  title = "Часто задаваемые вопросы",
  subtitle = "Ответы на самые популярные вопросы о наших ИИ-решениях и услугах",
  sectionId = "faq",
  contactLink = "/contact",
  contactText = "Получить консультацию",
}: BaseFAQProps) {
  const [openItem, setOpenItem] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.section
      id={sectionId}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="relative py-20 md:py-28 px-4 overflow-hidden"
    >
      {/* Градиентный фон */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900 -z-10"></div>
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-blue-400/20 dark:from-blue-500/10 dark:to-blue-700/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-indigo-200/20 to-indigo-400/20 dark:from-indigo-500/10 dark:to-indigo-700/10 rounded-full blur-3xl -z-10"></div>

      <div className="container relative mx-auto max-w-5xl">
        <FAQSchema faqs={faqItems} />

        <motion.div
          variants={itemVariants}
          className="text-center mb-16 md:mb-20"
        >
          <div className="text-center mb-16">
            <Badge>FAQ</Badge>
            <h2 className="text-[36px] font-bold text-gray-900 dark:text-white mb-4">
              {title.includes("вопросы") ? (
                <>
                  {title.split("вопросы")[0]}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0167F3] to-[#399AFC]">
                    вопросы
                  </span>
                </>
              ) : (
                title
              )}
            </h2>
          </div>
          <motion.p className="homepage-subheading text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </motion.p>
        </motion.div>

        <div className="grid gap-3">
          {faqItems.map((faq, index) => (
            <motion.div
              key={faq.id || index}
              variants={itemVariants}
              className="group"
            >
              <div className="relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden transition-all duration-300 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md">
                <button
                  onClick={() => toggleItem(index)}
                  className="flex justify-between items-center w-full p-4 md:p-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 rounded-2xl"
                  aria-expanded={openItem === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span
                    className="font-semibold text-base text-gray-900 dark:text-white pr-4"
                    style={{ fontSize: "16px" }}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full ${
                      openItem === index
                        ? "bg-blue-500 text-white"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400"
                    }`}
                  >
                    <ChevronDownIcon
                      className={`w-4 h-4 transition-transform duration-300 ${
                        openItem === index ? "transform rotate-180" : ""
                      }`}
                    />
                  </div>
                </button>

                {openItem === index && (
                  <div
                    id={`faq-answer-${index}`}
                    className="px-4 md:px-5 pb-4 md:pb-5 text-gray-600 dark:text-gray-300 text-base"
                    style={{ fontSize: "16px" }}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
