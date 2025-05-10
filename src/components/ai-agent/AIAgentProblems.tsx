"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import { useTheme } from "@/context/ThemeContext";
import {
  Clock,
  RefreshCcw,
  TrendingDown,
  Search,
  FileText,
  BarChart2,
  CheckCircle,
} from "lucide-react";

export default function AIAgentProblems() {
  const { isDark } = useTheme();
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

  const problems = [
    {
      icon: <Clock className="w-6 h-6 text-[#0167F3]" />,
      title: "Сотрудники тонут в рутине?",
      description:
        "Ценные специалисты тратят до 60% времени на повторяющиеся задачи вместо стратегических инициатив.",
      stat: "80%",
      statDesc: "повышение эффективности с ИИ-агентами",
      solution:
        "ИИ-агент берет на себя до 80% рутинных операций, высвобождая время специалистов для значимых задач.",
    },
    {
      icon: <TrendingDown className="w-6 h-6 text-[#0167F3]" />,
      title: "Расходы растут быстрее прибыли?",
      description:
        "Поддержка клиентов и обработка данных требуют постоянного увеличения штата и бюджета.",
      stat: "30%",
      statDesc: "снижение операционных затрат",
      solution:
        "ИИ-агенты снижают операционные расходы на 15-30%, автоматизируя рутинные процессы без необходимости расширения команды.",
    },
    {
      icon: <RefreshCcw className="w-6 h-6 text-[#0167F3]" />,
      title: "Не справляетесь с масштабированием?",
      description:
        "Увеличение объема работы требует пропорционального найма сотрудников и усложняет управление.",
      stat: "5x",
      statDesc: "рост объемов без увеличения штата",
      solution:
        "ИИ-агенты масштабируются вместе с вашим бизнесом без дополнительных затрат, справляясь с растущей нагрузкой автоматически.",
    },
    {
      icon: <Search className="w-6 h-6 text-[#0167F3]" />,
      title: "Теряете клиентов из-за медленной реакции?",
      description:
        "Задержка в ответах на запросы снижает конверсию и отталкивает потенциальных клиентов.",
      stat: "40%",
      statDesc: "рост конверсии благодаря мгновенным ответам",
      solution:
        "ИИ-агенты реагируют мгновенно 24/7, увеличивая конверсию на 20-40% и повышая удовлетворенность клиентов.",
    },
    {
      icon: <FileText className="w-6 h-6 text-[#0167F3]" />,
      title: "Ваши данные не работают на вас?",
      description:
        "Огромные массивы информации не анализируются должным образом, скрывая ценные инсайты.",
      stat: "60%",
      statDesc: "больше полезных инсайтов из данных",
      solution:
        "ИИ-агенты автоматически обрабатывают и анализируют большие объемы данных, предоставляя готовые отчеты с ключевыми инсайтами.",
    },
    {
      icon: <BarChart2 className="w-6 h-6 text-[#0167F3]" />,
      title: "Упускаете действия конкурентов?",
      description:
        "Без систематического мониторинга вы реагируете на рынок с опозданием, теряя позиции.",
      stat: "90%",
      statDesc: "увеличение скорости реакции на изменения",
      solution:
        "ИИ-агент круглосуточно мониторит конкурентов, отслеживая изменения цен, акции и упоминания, предоставляя вам стратегическое преимущество.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
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
      id="ai-agent-problems"
      className="py-20 md:py-28 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-900/90 -z-10"></div>

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-5">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#0167F3]/10 dark:bg-[#0167F3]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-24 -left-24 w-80 h-80 bg-[#399AFC]/10 dark:bg-[#399AFC]/5 rounded-full blur-3xl"></div>

        <svg
          className="absolute top-1/4 right-0 w-full h-48 text-[#0167F3]/10 dark:text-[#0167F3]/5 opacity-20"
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
        >
          <path
            d="M0,50 Q300,100 600,50 T1200,100"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          ></path>
          <path
            d="M0,100 Q300,50 600,100 T1200,50"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          ></path>
        </svg>
      </div>

      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm mb-4 bg-[#0167F3]/10 text-[#0167F3] dark:text-[#399AFC] border border-[#0167F3]/20 dark:border-[#399AFC]/50 backdrop-blur-sm"
          >
            <svg
              width={15}
              height={15}
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#0167F3] dark:text-[#399AFC]"
            >
              <path
                d="M7.5 15C11.6421 15 15 11.6421 15 7.5C15 3.35786 11.6421 0 7.5 0C3.35786 0 0 3.35786 0 7.5C0 11.6421 3.35786 15 7.5 15ZM6.5 4C6.5 3.44772 6.94772 3 7.5 3C8.05228 3 8.5 3.44772 8.5 4V8C8.5 8.55228 8.05228 9 7.5 9C6.94772 9 6.5 8.55228 6.5 8V4ZM8.5 11C8.5 11.5523 8.05228 12 7.5 12C6.94772 12 6.5 11.5523 6.5 11C6.5 10.4477 6.94772 10 7.5 10C8.05228 10 8.5 10.4477 8.5 11Z"
                fill="currentColor"
              />
            </svg>
            Проблемы бизнеса
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Эти проблемы сдерживают{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0167F3] to-[#399AFC] relative">
              ваш бизнес?
              <svg
                className="absolute -bottom-1 left-0 w-full h-1.5 text-[#0167F3]/20"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,5 Q25,0 50,5 T100,5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                />
              </svg>
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Большинство компаний сталкиваются с похожими вызовами. Мы помогаем
            превратить их в возможности для роста с помощью ИИ-агентов.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative group p-7 rounded-2xl transition-all duration-500 overflow-hidden ${
                isDark
                  ? "bg-gray-800/50 hover:bg-gray-800/70 border border-gray-700/50"
                  : "bg-white hover:shadow-xl border border-gray-200"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0167F3]/5 to-[#399AFC]/5 dark:from-[#0167F3]/10 dark:to-[#399AFC]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-5"></div>

              <div className="absolute -right-8 -bottom-8 w-24 h-24 rounded-full bg-[#0167F3]/10 dark:bg-[#0167F3]/20 opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>

              <div className="flex flex-col relative z-10">
                <div
                  className={`w-14 h-14 rounded-xl mb-5 flex items-center justify-center ${
                    isDark ? "bg-[#0167F3]/30" : "bg-[#0167F3]/10"
                  }`}
                >
                  {problem.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {problem.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-grow">
                  {problem.description}
                </p>
                <div className="flex items-center space-x-3 pt-3 border-t border-gray-200 dark:border-gray-700/50">
                  <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0167F3] to-[#399AFC]">
                    {problem.stat}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {problem.statDesc}
                  </span>
                </div>
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
              <h3 className="text-3xl md:text-4xl font-semibold text-gray-800 dark:text-white mb-4">
                Трансформируйте эти вызовы в возможности для роста
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 text-xl leading-relaxed">
                Узнайте, как ИИ-агенты решают эти задачи и освобождают ресурсы
                для развития вашего бизнеса
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#solution"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl
                         bg-gradient-to-r from-[#0167F3] to-[#399AFC] text-white font-semibold text-lg
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
                         backdrop-blur-sm rounded-xl font-medium text-lg
                         transition-colors"
                >
                  Получить демонстрацию
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
