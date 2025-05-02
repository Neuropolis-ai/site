"use client";
import { useTheme } from "@/context/ThemeContext";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "lucide-react";
import Container from "../ui/Container";

const faqData = [
  {
    id: 1,
    question: "Какие услуги вы предоставляете?",
    answer:
      "Мы специализируемся на решениях на основе ИИ, включая автоматизацию, предиктивную аналитику, генерацию контента с ИИ, чат-ботов и кастомные модели машинного обучения для различных отраслей. Наша цель — помочь бизнесу улучшить процессы и принимать решения на основе данных.",
  },
  {
    id: 2,
    question: "Как работает ежемесячная подписка?",
    answer:
      "Наша модель подписки предоставляет постоянную поддержку и оптимизацию ИИ, а также оплату используемых API.  Каждый тариф включает регулярные обновления, мониторинг производительности и приоритетную поддержку. Вы можете выбрать один из планов — в зависимости от потребностей вашего бизнеса.",
  },
  {
    id: 3,
    question: "Сколько времени занимает внедрение ИИ-решения?",
    answer:
      "Время внедрения зависит от сложности проекта. Базовые решения могут занять несколько недель, в то время как более сложные интеграции ИИ могут потребовать несколько месяцев. Мы всегда предоставляем четкий график работ на этапе анализа.",
  },
  {
    id: 4,
    question: "Можете ли вы интегрировать ИИ в наши существующие системы?",
    answer:
      "Безусловно! Мы специализируемся на бесшовной интеграции ИИ. Будь то ваша CRM, маркетинговые платформы или инструменты автоматизации рабочих процессов, мы гарантируем, что наши решения будут работать в гармонии с вашей существующей инфраструктурой.",
  },
  {
    id: 5,
    question: "Какие отрасли могут извлечь пользу из ваших ИИ-решений?",
    answer:
      "Мы работаем с различными отраслями, включая здравоохранение, e-commerce, финансы, маркетинг, медиа, производство и другие. Наши ИИ-решения адаптируются под уникальные потребности каждой индустрии.",
  },
];

function FAQSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
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

const FAQ = () => {
  const { isDark } = useTheme();
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
      id="faq"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="relative py-20 md:py-28 px-4 overflow-hidden"
    >
      {/* Градиентный фон */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900 -z-10"></div>
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-gradient-to-br from-blue-200/20 to-blue-400/20 dark:from-blue-500/10 dark:to-blue-700/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-200/20 to-indigo-400/20 dark:from-indigo-500/10 dark:to-indigo-700/10 rounded-full blur-3xl -z-10"></div>

      <Container>
        <FAQSchema faqs={faqData} />

        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={itemVariants}
            className="text-center mb-12 md:mb-16"
          >
            <div className="inline-block px-4 py-1 rounded-full text-sm mb-4 switch-box light-switch-box dark:bg-gray-800/60 dark:text-gray-300">
              FAQs
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 dark:text-white">
              Часто Задаваемые{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0167F3] to-[#399AFC]">
                Вопросы
              </span>
            </h2>

            <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mt-6">
              Ответы на самые популярные вопросы о наших ИИ-решениях и услугах.
              Если вы не нашли ответ на свой вопрос, свяжитесь с нами через
              форму обратной связи.
            </p>
          </motion.div>

          <div className="grid gap-4">
            {faqData.map((faq, index) => (
              <motion.div
                key={faq.id}
                variants={itemVariants}
                className="group"
              >
                <div
                  className={`relative backdrop-blur-lg bg-white/60 dark:bg-gray-900/50 rounded-2xl overflow-hidden transition-all duration-300 border border-white/20 dark:border-gray-700/30 shadow-sm hover:shadow-md`}
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="flex justify-between items-center w-full p-5 md:p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 rounded-2xl"
                    aria-expanded={openItem === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span className="font-semibold text-lg md:text-xl text-gray-900 dark:text-white pr-4">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openItem === index ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-blue-500/10 dark:bg-blue-900/20"
                    >
                      <ChevronDownIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {openItem === index && (
                      <motion.div
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                          open: {
                            opacity: 1,
                            height: "auto",
                            transition: {
                              duration: 0.3,
                              ease: [0.04, 0.62, 0.23, 0.98],
                            },
                          },
                          collapsed: {
                            opacity: 0,
                            height: 0,
                            transition: {
                              duration: 0.2,
                              ease: [0.04, 0.62, 0.23, 0.98],
                            },
                          },
                        }}
                        id={`faq-answer-${index}`}
                        className="overflow-hidden"
                      >
                        <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-12 md:mt-16 text-center"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl 
              bg-gradient-to-r from-[#0167F3] to-[#399AFC] hover:from-[#0157D3] hover:to-[#2988E8]
              text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Получить консультацию
            </a>
          </motion.div>
        </div>
      </Container>
    </motion.section>
  );
};

export default FAQ;
