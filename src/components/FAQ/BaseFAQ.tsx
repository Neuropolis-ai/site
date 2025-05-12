"use client";

import { useState } from "react";
import { ChevronDownIcon } from "lucide-react";
import Badge from "@/components/ui/Badge";
import { Heading } from "@/components/ui/heading";

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

  return (
    <section
      id={sectionId}
      className="relative py-20 md:py-28 px-4"
    >
      {/* Статический градиентный фон */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50/80 dark:from-gray-950 dark:to-blue-950/10 -z-10"></div>
      
      {/* Сетка-фон */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02] -z-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: "url('/grid-pattern.svg')",
            backgroundSize: "24px 24px",
            backgroundRepeat: "repeat",
          }}
        ></div>
      </div>

      <div className="container relative mx-auto max-w-5xl">
        <FAQSchema faqs={faqItems} />

        <div className="text-center mb-16 md:mb-20">
          <div className="text-center mb-4">
            <Badge>FAQ</Badge>
            <Heading
              level={2}
              align="center"
              className="text-gray-900 dark:text-white mb-4"
            >
              {title.includes("вопросы") ? (
                <>
                  {title.split("вопросы")[0]}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0167F3] to-[#399AFC]">
                    вопросы
                  </span>
                </>
              ) : (
                <>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0167F3] to-[#399AFC]">
                    FAQ
                  </span>{" "}
                  {title.replace(/FAQ/i, "")}
                </>
              )}
            </Heading>
          </div>
          <p className="section-subtitle text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid gap-3 relative">
          {faqItems.map((faq, index) => (
            <div
              key={faq.id || index}
              className="group"
            >
              <div className="relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-300 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md">
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
                    className={`px-4 md:px-5 pb-4 md:pb-5 ${
                      openItem === index ? "max-h-[1000px]" : "max-h-0"
                    }`}
                  >
                    <div
                      className={`answer mt-2 card-text ${
                        openItem === index
                          ? "text-gray-600 dark:text-gray-300"
                          : "text-gray-600 dark:text-gray-300"
                      }`}
                    >
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
