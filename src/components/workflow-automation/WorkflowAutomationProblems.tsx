"use client";

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
} from "lucide-react";
import { ReactNode } from "react";

// Компонент карточки для переиспользования
interface ProblemCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  stat: string;
  statDesc: string;
}

function ProblemCard({ icon, title, description, stat, statDesc }: ProblemCardProps) {
  return (
    <div className="relative group p-7 rounded-2xl transition-all duration-500 overflow-hidden bg-white dark:bg-gray-800/50 hover:shadow-xl border border-gray-200 dark:border-gray-700/50">
      <div className="absolute inset-0 bg-gradient-to-tr from-[#0167F3]/5 to-[#399AFC]/5 dark:from-[#0167F3]/10 dark:to-[#399AFC]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-5"></div>
      <div className="absolute -right-8 -bottom-8 w-24 h-24 rounded-full bg-[#0167F3]/10 dark:bg-[#0167F3]/20 opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
      
      <div className="flex flex-col relative z-10">
        <div className="w-14 h-14 rounded-xl mb-5 flex items-center justify-center bg-[#0167F3]/10 dark:bg-[#0167F3]/20">
          {icon}
        </div>
        
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          {title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-grow">
          {description}
        </p>
        
        <div className="flex items-center space-x-3 pt-3 border-t border-gray-200 dark:border-gray-700/50">
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0167F3] to-[#399AFC]">
            {stat}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {statDesc}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function WorkflowAutomationProblems() {
  const { isDark } = useTheme();

  // Данные о проблемах
  const problems = [
    {
      icon: <Clock className="w-6 h-6 text-[#0167F3]" />,
      title: "Трата времени на рутинные задачи",
      description:
        "Сотрудники тратят до 60% своего рабочего времени на выполнение повторяющихся операций, которые не требуют творческого мышления",
      stat: "60%",
      statDesc: "времени уходит на рутину",
    },
    {
      icon: <TrendingDown className="w-6 h-6 text-[#0167F3]" />,
      title: "Разрозненность бизнес-систем",
      description:
        "Отсутствие интеграции между программными платформами приводит к дублированию данных и критическим ошибкам",
      stat: "40%",
      statDesc: "ошибок из-за ручного ввода",
    },
    {
      icon: <Users className="w-6 h-6 text-[#0167F3]" />,
      title: "Неэффективное распределение ресурсов",
      description:
        "Высококвалифицированные специалисты вынуждены заниматься задачами, которые может выполнять автоматизированная система",
      stat: "35%",
      statDesc: "потери продуктивности",
    },
    {
      icon: <AlertCircle className="w-6 h-6 text-[#0167F3]" />,
      title: "Задержки в обработке данных",
      description:
        "Медленная и неэффективная обработка информации приводит к задержкам в принятии решений и упущенным возможностям",
      stat: "45%",
      statDesc: "снижение скорости принятия решений",
    },
    {
      icon: <DollarSign className="w-6 h-6 text-[#0167F3]" />,
      title: "Высокие операционные расходы",
      description:
        "Ручная обработка данных и управление процессами требуют больше сотрудников и увеличивают операционные расходы",
      stat: "30%",
      statDesc: "избыточных затрат",
    },
    {
      icon: <BarChart2 className="w-6 h-6 text-[#0167F3]" />,
      title: "Отсутствие аналитики в реальном времени",
      description:
        "Невозможность получить актуальные данные о процессах компании затрудняет оперативное реагирование на меняющиеся условия",
      stat: "70%",
      statDesc: "компаний не имеют данных в реальном времени",
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
      id="workflow-problems"
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
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            С какими проблемами сталкивается{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0167F3] to-[#399AFC] relative">
              ваш бизнес?
              <svg
                className="absolute -bottom-1.5 left-0 w-full h-1.5 text-[#0167F3]/20"
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
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Узнайте, как интеллектуальная автоматизация рабочих процессов
            помогает решить типичные проблемы современного бизнеса и повысить
            эффективность.
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
            <motion.div key={index} variants={itemVariants}>
              <ProblemCard 
                icon={problem.icon}
                title={problem.title}
                description={problem.description}
                stat={problem.stat}
                statDesc={problem.statDesc}
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
