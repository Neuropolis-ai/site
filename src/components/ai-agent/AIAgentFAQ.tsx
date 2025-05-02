"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "lucide-react";

export default function AIAgentFAQ() {
  const [openItem, setOpenItem] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  const faqs = [
    {
      question: "Что такое ИИ-агент?",
      answer:
        "ИИ-агент — это автономная программа, использующая искусственный интеллект для выполнения конкретных задач от имени пользователя или бизнеса. В отличие от простых скриптов или автоматизаций, ИИ-агенты способны анализировать данные, принимать решения, адаптироваться к изменениям и обучаться на основе опыта, что делает их намного более гибкими и эффективными.",
    },
    {
      question: "Какие задачи могут решать ИИ-агенты?",
      answer:
        "ИИ-агенты могут автоматизировать широкий спектр задач: квалификацию лидов, поддержку клиентов, анализ данных и отчетность, оптимизацию логистики, мониторинг конкурентов, обработку документов, подбор персонала, обнаружение мошенничества и многое другое. Практически любой повторяющийся процесс, требующий принятия решений на основе данных, можно оптимизировать с помощью ИИ-агента.",
    },
    {
      question: "Сколько времени занимает создание ИИ-агента?",
      answer:
        "Типичный проект по созданию базового ИИ-агента занимает от 2 до 6 недель в зависимости от сложности задачи, необходимых интеграций и объема данных для обучения. Простые агенты для определенных задач могут быть созданы быстрее, а более сложные решения, интегрирующиеся с множеством систем, могут занять больше времени. Мы всегда предоставляем подробную оценку сроков после анализа вашей задачи.",
    },
    {
      question: "Как интегрируются ИИ-агенты с существующими системами?",
      answer:
        "ИИ-агенты интегрируются с вашими существующими системами через различные методы: API, webhook-интеграции, прямые подключения к базам данных или даже через эмуляцию действий пользователя (RPA). Мы поддерживаем большинство популярных корпоративных систем (CRM, ERP, HRM) и сервисов. В случае отсутствия готовых интеграций, мы разрабатываем кастомные решения под ваши уникальные потребности.",
    },
    {
      question: "Требуется ли специальное оборудование для работы ИИ-агентов?",
      answer:
        "Нет, большинство наших ИИ-агентов размещаются в облаке и не требуют специального оборудования с вашей стороны. Мы используем современные облачные платформы (AWS, Azure, Google Cloud) для обеспечения высокой доступности, безопасности и масштабируемости. Если у вас есть особые требования к размещению (например, on-premise решение), мы можем обсудить варианты реализации.",
    },
    {
      question: "Как обеспечивается безопасность данных при работе ИИ-агентов?",
      answer:
        "Безопасность — наш приоритет. Мы используем шифрование данных как при передаче, так и при хранении, строгое разграничение прав доступа, двухфакторную аутентификацию и регулярный аудит безопасности. Все наши решения соответствуют требованиям GDPR и ФЗ-152. По запросу мы можем предоставить детальную документацию по безопасности и подписать соглашение о конфиденциальности (NDA).",
    },
    {
      question:
        "Можно ли обучить ИИ-агента под конкретные бизнес-процессы нашей компании?",
      answer:
        "Да, это ключевое преимущество наших решений. Мы создаем ИИ-агентов с учетом специфики вашего бизнеса, отрасли и уникальных процессов. Агент обучается на ваших данных и документах, изучает особенности вашего бизнеса и адаптируется под ваши требования. Чем дольше он работает, тем лучше понимает контекст и специфику вашей компании, постоянно повышая эффективность.",
    },
    {
      question: "Как измерить эффективность внедрения ИИ-агентов?",
      answer:
        "Мы устанавливаем четкие KPI в начале проекта и создаем систему мониторинга для отслеживания результатов. Типичные метрики включают: сокращение времени на выполнение задач, снижение операционных расходов, повышение точности обработки данных, рост конверсии, улучшение удовлетворенности клиентов. Мы предоставляем регулярные отчеты об эффективности и помогаем оптимизировать работу агентов для достижения максимальных результатов.",
    },
  ];

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
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900 -z-10"></div>
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-blue-400/20 dark:from-blue-500/10 dark:to-blue-700/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-indigo-200/20 to-indigo-400/20 dark:from-indigo-500/10 dark:to-indigo-700/10 rounded-full blur-3xl -z-10"></div>

      <div className="container relative mx-auto max-w-5xl">
        <motion.div
          variants={itemVariants}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-6 text-gray-800 dark:text-white tracking-tight">
            Часто Задаваемые Вопросы
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            Ответы на самые популярные вопросы о технологии ИИ-агентов и нашем
            подходе к их разработке
          </p>
        </motion.div>

        <div className="grid gap-4">
          {faqs.map((faq, index) => (
            <motion.div key={index} variants={itemVariants} className="group">
              <div
                className={`relative backdrop-blur-lg bg-white/60 dark:bg-gray-900/50 rounded-2xl overflow-hidden transition-all duration-300 border border-white/20 dark:border-gray-700/30 shadow-md`}
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
      </div>
    </motion.section>
  );
}
