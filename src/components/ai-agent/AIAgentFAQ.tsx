"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDownIcon } from "lucide-react";

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

  return (
    <section
      id="faq"
      className="relative py-24 md:py-32 px-4 bg-gradient-to-br from-[#F8F9FA] to-white dark:from-gray-900 dark:to-gray-950 overflow-hidden"
    >
      {/* Стеклянный фоновый эффект с шумом */}
      <div className="absolute inset-0 bg-white/20 dark:bg-gray-900/20 backdrop-blur-[100px] [mask-image:url('/noise.svg')] opacity-50"></div>

      {/* Декоративные элементы */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#3DF5C2]/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#4F9CFF]/10 rounded-full blur-3xl"></div>

      <div className="container relative mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-800 dark:text-white tracking-tight"
        >
          Часто Задаваемые Вопросы
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center text-gray-600 dark:text-gray-300 mb-16 max-w-2xl mx-auto text-lg tracking-[0.02em]"
        >
          Ответы на самые популярные вопросы о технологии ИИ-агентов и нашем
          подходе к их разработке
        </motion.p>

        <div className="grid gap-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group"
            >
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
                className={`relative bg-white dark:bg-gray-800 backdrop-blur-md rounded-2xl overflow-hidden transition-all duration-300
                  shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.12)]
                  before:absolute before:inset-0 before:w-full before:h-full before:bg-gradient-to-r before:from-transparent 
                  before:to-transparent before:opacity-0 before:transition-opacity before:duration-300 
                  before:pointer-events-none group-hover:before:opacity-100 
                  before:group-hover:from-transparent before:group-hover:via-[#4F9CFF]/5 before:group-hover:to-transparent
                  ${
                    openItem === index
                      ? "ring-1 ring-[#4F9CFF]/20 dark:ring-[#3DF5C2]/20"
                      : ""
                  }`}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="flex justify-between items-center w-full p-6 md:p-8 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F9CFF] dark:focus-visible:ring-[#3DF5C2] rounded-2xl"
                  aria-expanded={openItem === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-medium text-xl tracking-[0.02em] text-gray-900 dark:text-white pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openItem === index ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#4F9CFF]/10 dark:bg-[#3DF5C2]/10"
                  >
                    <ArrowDownIcon className="w-4 h-4 text-[#4F9CFF] dark:text-[#3DF5C2]" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openItem === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      id={`faq-answer-${index}`}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0 text-gray-600 dark:text-gray-300 text-base leading-relaxed tracking-[0.02em]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
