"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AIAgentProblems() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const problemCards = [
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current"
        >
          <path
            d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      ),
      title: "Сотрудники тонут в рутине?",
      description:
        "Ценные специалисты тратят до 60% времени на повторяющиеся задачи вместо стратегических инициатив.",
      tagline: "Высвободите потенциал вашей команды.",
      solution:
        "ИИ-агент берет на себя до 80% рутинных операций, высвобождая время специалистов для значимых задач.",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current"
        >
          <path
            d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      ),
      title: "Расходы растут быстрее прибыли?",
      description:
        "Поддержка клиентов и обработка данных требуют постоянного увеличения штата и бюджета.",
      tagline: "Оптимизируйте затраты без потери качества.",
      solution:
        "ИИ-агенты снижают операционные расходы на 15-30%, автоматизируя рутинные процессы без необходимости расширения команды.",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current"
        >
          <path
            d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      ),
      title: "Не справляетесь с масштабированием?",
      description:
        "Увеличение объема работы требует пропорционального найма сотрудников и усложняет управление.",
      tagline: "Растите без увеличения сложности.",
      solution:
        "ИИ-агенты масштабируются вместе с вашим бизнесом без дополнительных затрат, справляясь с растущей нагрузкой автоматически.",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current"
        >
          <path
            d="M9.17157 14.8284L12 12M12 12L14.8284 9.17157M12 12L9.17157 9.17157M12 12L14.8284 14.8284M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      ),
      title: "Теряете клиентов из-за медленной реакции?",
      description:
        "Задержка в ответах на запросы снижает конверсию и отталкивает потенциальных клиентов.",
      tagline: "Превратите скорость в конкурентное преимущество.",
      solution:
        "ИИ-агенты реагируют мгновенно 24/7, увеличивая конверсию на 20-40% и повышая удовлетворенность клиентов.",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current"
        >
          <path
            d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5M12 12H15M12 16H15M9 12H9.01M9 16H9.01"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      ),
      title: "Ваши данные не работают на вас?",
      description:
        "Огромные массивы информации не анализируются должным образом, скрывая ценные инсайты.",
      tagline: "Превратите данные в стратегическое преимущество.",
      solution:
        "ИИ-агенты автоматически обрабатывают и анализируют большие объемы данных, предоставляя готовые отчеты с ключевыми инсайтами.",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current"
        >
          <path
            d="M16 8V16M12 11V16M8 14V16M6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      ),
      title: "Упускаете действия конкурентов?",
      description:
        "Без систематического мониторинга вы реагируете на рынок с опозданием, теряя позиции.",
      tagline: "Будьте на шаг впереди рынка.",
      solution:
        "ИИ-агент круглосуточно мониторит конкурентов, отслеживая изменения цен, акции и упоминания, предоставляя вам стратегическое преимущество.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 25,
      },
    },
    hover: {
      y: -5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    },
    tap: {
      scale: 0.98,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15,
      },
    },
  };

  const solutionVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        height: {
          type: "spring",
          stiffness: 200,
          damping: 25,
        },
        opacity: { duration: 0.3, ease: "easeInOut" },
      },
    },
  };

  return (
    <section
      id="problems"
      className="py-20 md:py-28 px-4 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900 -z-10"></div>
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-blue-400/20 dark:from-blue-500/10 dark:to-blue-700/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-indigo-200/20 to-indigo-400/20 dark:from-indigo-500/10 dark:to-indigo-700/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto max-w-[1280px] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-gray-800 dark:text-white leading-tight">
            Эти проблемы сдерживают
            <br className="hidden md:block" /> ваш бизнес?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            Большинство компаний сталкиваются с похожими вызовами.
            <br className="hidden md:block" />
            Мы помогаем превратить их в возможности для роста.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {problemCards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
              className={`
                relative overflow-hidden rounded-2xl
                backdrop-blur-lg transition-all duration-300
                cursor-pointer group
              `}
              onClick={() => animationComplete && toggleCard(index)}
            >
              <div className="absolute inset-0 bg-white/60 dark:bg-gray-900/50 -z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent dark:from-gray-800/20 -z-10"></div>
              <div className="absolute inset-0 border border-white/20 dark:border-gray-700/30 rounded-2xl -z-10"></div>
              <div
                className={`
                absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0167F3] to-[#399AFC]
                translate-y-full group-hover:translate-y-0 transition-transform duration-300
              `}
              ></div>

              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`
                    rounded-xl flex items-center justify-center flex-shrink-0
                    bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20
                    p-2 transition-colors duration-300
                    text-blue-600 dark:text-blue-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400
                  `}
                  >
                    {card.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white leading-tight mt-1">
                    {card.title}
                  </h3>
                </div>

                <p className="text-base leading-relaxed ml-[48px] text-gray-600 dark:text-gray-300 mb-5">
                  {card.description}
                </p>

                <div className="ml-[48px] flex justify-between items-center mt-auto">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      animationComplete && toggleCard(index);
                    }}
                    className={`
                      text-sm font-medium flex items-center
                      transition-colors duration-300
                      text-blue-600 dark:text-blue-400
                      hover:text-indigo-600 dark:hover:text-indigo-400
                    `}
                  >
                    {expandedCard === index ? "Скрыть" : "Решение"}
                    <svg
                      className={`
                        w-4 h-4 ml-1 transition-transform duration-300
                        ${expandedCard === index ? "rotate-180" : ""}
                      `}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>

                <AnimatePresence>
                  {expandedCard === index && (
                    <motion.div
                      variants={solutionVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="mt-4 ml-[48px] bg-gradient-to-br from-blue-50/60 to-indigo-50/60
                                dark:from-blue-900/30 dark:to-indigo-900/30
                                p-4 rounded-xl border border-blue-100/50 dark:border-blue-800/40"
                    >
                      <div className="flex">
                        <svg
                          className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <p className="text-base text-gray-700 dark:text-gray-200">
                          {card.solution}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
          className="mt-20 text-center"
        >
          <div className="max-w-3xl mx-auto px-8 py-10 rounded-2xl relative overflow-hidden backdrop-blur-lg">
            <div className="absolute inset-0 bg-white/60 dark:bg-gray-900/50 -z-10"></div>
            <div className="absolute inset-0 border border-white/20 dark:border-gray-700/30 rounded-2xl -z-10"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 dark:from-blue-600/10 dark:to-indigo-600/10 rounded-full blur-xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-r from-indigo-400/10 to-blue-400/10 dark:from-indigo-600/10 dark:to-blue-600/10 rounded-full blur-xl -z-10"></div>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white mb-4">
                Трансформируйте эти вызовы в возможности для роста
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed">
                Узнайте, как ИИ-агенты решают эти задачи и освобождают ресурсы
                для развития вашего бизнеса
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#solution"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl
                         bg-gradient-to-r from-[#0167F3] to-[#399AFC] text-white font-semibold text-base
                         hover:opacity-90 transition-opacity duration-300
                         shadow-lg"
                >
                  Узнать о решении
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </a>
                <a
                  href="#cta"
                  className="inline-flex items-center justify-center px-6 py-3
                         border border-blue-200 dark:border-gray-700/30
                         text-blue-600 dark:text-blue-400
                         bg-white/50 dark:bg-gray-900/40 hover:bg-blue-500/10 dark:hover:bg-blue-500/10
                         backdrop-blur-sm rounded-xl font-medium text-base
                         transition-colors"
                >
                  Получить демонстрацию
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
