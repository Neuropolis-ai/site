"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { useTheme } from "@/context/ThemeContext";
import {
  Clock,
  TrendingDown,
  Users,
  AlertCircle,
  DollarSign,
  BarChart2,
  ArrowRight,
  BrainCircuit,
} from "lucide-react";

export default function ChatBotsProblems() {
  const { theme } = useTheme();
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Данные о проблемах
  const problems = [
    {
      icon: <Clock className="w-6 h-6 text-[#0167F3]" />,
      title: "Ограниченная доступность",
      description:
        "Клиентам приходится ждать ответа в рабочие часы, что приводит к потере потенциальных клиентов в нерабочее время",
      stat: "25%",
      statDesc: "потерянных обращений",
    },
    {
      icon: <TrendingDown className="w-6 h-6 text-[#0167F3]" />,
      title: "Низкая скорость ответа",
      description:
        "Долгое время ожидания ответа от операторов негативно влияет на удовлетворенность клиентов",
      stat: "15 мин",
      statDesc: "среднее время ожидания",
    },
    {
      icon: <Users className="w-6 h-6 text-[#0167F3]" />,
      title: "Нагрузка на операторов",
      description:
        "Операторы тратят много времени на повторяющиеся вопросы вместо решения сложных запросов",
      stat: "70%",
      statDesc: "вопросов - типовые",
    },
    {
      icon: <AlertCircle className="w-6 h-6 text-[#0167F3]" />,
      title: "Человеческий фактор",
      description:
        "Усталость и эмоциональное выгорание операторов приводят к ошибкам и снижению качества обслуживания",
      stat: "35%",
      statDesc: "снижение эффективности к концу дня",
    },
    {
      icon: <DollarSign className="w-6 h-6 text-[#0167F3]" />,
      title: "Высокие затраты на персонал",
      description:
        "Содержание штата специалистов поддержки требует значительных расходов на зарплату, обучение и рабочие места",
      stat: "45%",
      statDesc: "экономии на персонале",
    },
    {
      icon: <BarChart2 className="w-6 h-6 text-[#0167F3]" />,
      title: "Отсутствие аналитики обращений",
      description:
        "Сложно отследить и проанализировать типичные проблемы клиентов, тренды и качество обслуживания",
      stat: "90%",
      statDesc: "отсутствие системного анализа",
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

  return (
    <section
      id="chatbots-problems"
      className="py-20 md:py-28 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-gray-100 -z-10"></div>

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-5">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#0167F3]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-24 -left-24 w-80 h-80 bg-[#399AFC]/10 rounded-full blur-3xl"></div>

        <svg
          className="absolute top-1/4 right-0 w-full h-48 text-[#0167F3]/10 opacity-20"
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
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm mb-4 bg-[#0167F3]/10 text-[#0167F3] border border-[#0167F3]/20 backdrop-blur-sm"
          >
            <svg
              width={15}
              height={15}
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#0167F3]"
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
            className="text-[36px] font-bold text-gray-900 mb-6"
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
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Узнайте, как интеллектуальные чат-боты помогают решить типичные
            проблемы коммуникации с клиентами и оптимизировать бизнес-процессы.
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
              className="relative group p-7 rounded-2xl transition-all duration-500 overflow-hidden bg-white hover:shadow-xl border border-gray-200"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0167F3]/5 to-[#399AFC]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-5"></div>

              <div className="absolute -right-8 -bottom-8 w-24 h-24 rounded-full bg-[#0167F3]/10 opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>

              <div className="flex flex-col relative z-10">
                <h3 className="text-[18px] font-semibold text-gray-900 mb-3 relative z-10">
                  {problem.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                  {problem.description}
                </p>
                <div className="flex items-center space-x-3 pt-3 border-t border-gray-200">
                  <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0167F3] to-[#399AFC]">
                    {problem.stat}
                  </span>
                  <span className="text-sm text-gray-500">
                    {problem.statDesc}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-16 text-center"
        >
          <motion.div
            variants={itemVariants}
            className="p-8 rounded-xl max-w-4xl mx-auto transition-all bg-gradient-to-br from-[#0167F3]/10 to-[#399AFC]/10 border border-[#0167F3]/20 backdrop-blur-sm"
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center bg-gradient-to-r from-[#0167F3] to-[#399AFC] shadow-lg shadow-[#0167F3]/20">
              <BrainCircuit className="w-8 h-8 text-white" />
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Решение есть!
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
              Современные чат-боты на базе искусственного интеллекта
              способны решить все эти проблемы, обеспечивая круглосуточную
              поддержку и глубокую аналитику коммуникаций.
            </p>

            <motion.a
              whileHover={{ scale: 1.03, y: -3 }}
              whileTap={{ scale: 0.98 }}
              href="#chatbots-solution"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0167F3] to-[#399AFC] text-white font-medium py-3 px-6 rounded-lg transition-all hover:shadow-lg hover:shadow-[#0167F3]/20"
            >
              Узнать о решении
              <ArrowRight className="w-5 h-5 ml-1" />
            </motion.a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
} 