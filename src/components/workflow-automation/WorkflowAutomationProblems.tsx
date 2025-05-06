"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { useTheme } from "@/context/ThemeContext";
import {
  FiClock,
  FiTrendingDown,
  FiUsers,
  FiAlertCircle,
  FiDollarSign,
  FiBarChart2,
  FiArrowRight,
} from "react-icons/fi";

export default function WorkflowAutomationProblems() {
  const { isDark } = useTheme();

  // Анимации
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

  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Данные о проблемах
  const problems = [
    {
      icon: <FiClock className="w-7 h-7" />,
      title: "Трата времени на рутинные задачи",
      description:
        "Сотрудники тратят до 60% своего рабочего времени на выполнение повторяющихся операций, которые не требуют творческого мышления",
      stat: "60%",
      statDesc: "времени уходит на рутину",
    },
    {
      icon: <FiTrendingDown className="w-7 h-7" />,
      title: "Разрозненность бизнес-систем",
      description:
        "Отсутствие интеграции между программными платформами приводит к дублированию данных и критическим ошибкам",
      stat: "40%",
      statDesc: "ошибок из-за ручного ввода",
    },
    {
      icon: <FiUsers className="w-7 h-7" />,
      title: "Неэффективное распределение ресурсов",
      description:
        "Высококвалифицированные специалисты вынуждены заниматься задачами, которые может выполнять автоматизированная система",
      stat: "35%",
      statDesc: "потери продуктивности",
    },
    {
      icon: <FiAlertCircle className="w-7 h-7" />,
      title: "Задержки в обработке данных",
      description:
        "Медленная и неэффективная обработка информации приводит к задержкам в принятии решений и упущенным возможностям",
      stat: "45%",
      statDesc: "снижение скорости принятия решений",
    },
    {
      icon: <FiDollarSign className="w-7 h-7" />,
      title: "Высокие операционные расходы",
      description:
        "Ручная обработка данных и управление процессами требуют больше сотрудников и увеличивают операционные расходы",
      stat: "30%",
      statDesc: "избыточных затрат",
    },
    {
      icon: <FiBarChart2 className="w-7 h-7" />,
      title: "Отсутствие аналитики в реальном времени",
      description:
        "Невозможность получить актуальные данные о процессах компании затрудняет оперативное реагирование на меняющиеся условия",
      stat: "70%",
      statDesc: "компаний не имеют данных в реальном времени",
    },
  ];

  return (
    <section
      id="workflow-problems"
      className="py-16 md:py-24 relative overflow-hidden"
    >
      {/* Градиентный фон */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50 dark:from-gray-950 dark:to-blue-950/10 -z-10"></div>

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

      {/* Декоративные элементы */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br from-blue-200/30 to-blue-400/30 dark:from-blue-500/10 dark:to-blue-700/10 rounded-full blur-3xl -z-5"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-gradient-to-tr from-sky-200/30 to-sky-400/30 dark:from-sky-500/10 dark:to-sky-700/10 rounded-full blur-3xl -z-5"></div>

      {/* Анимированные элементы */}
      <motion.div
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        className="absolute top-[15%] right-[10%] w-12 h-12 bg-blue-400/20 dark:bg-blue-600/30 rounded-full backdrop-blur-md z-0"
      ></motion.div>
      <motion.div
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        className="absolute bottom-[15%] left-[7%] w-16 h-16 bg-sky-400/20 dark:bg-sky-600/30 rounded-full backdrop-blur-md z-0"
        style={{ animationDelay: "1.5s" }}
      ></motion.div>

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
            className="inline-flex items-center justify-center border border-blue-300 dark:border-blue-800 gap-2 px-4 py-1 rounded-full text-sm mb-4 bg-blue-500/10 text-blue-600 dark:text-blue-400"
          >
            Проблемы бизнеса
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-5 tracking-tight"
          >
            С какими проблемами сталкивается ваш бизнес{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-sky-400">
              без автоматизации?
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -5,
                transition: { duration: 0.3 },
                boxShadow: isDark
                  ? "0 10px 30px rgba(30, 64, 175, 0.2)"
                  : "0 10px 30px rgba(59, 130, 246, 0.15)",
              }}
              className={`p-6 rounded-xl transition-all ${
                isDark
                  ? "bg-gray-800/50 backdrop-blur-sm border border-gray-700"
                  : "bg-white border border-gray-200 hover:border-blue-200"
              }`}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start mb-4">
                  <div
                    className={`w-12 h-12 rounded-lg mr-4 flex items-center justify-center 
                    ${
                      isDark
                        ? "bg-gradient-to-br from-blue-600/20 to-sky-600/20 text-blue-400"
                        : "bg-gradient-to-br from-blue-50 to-sky-50 text-blue-500"
                    }`}
                  >
                    {problem.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {problem.title}
                  </h3>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4 grow">
                  {problem.description}
                </p>

                <div
                  className={`flex items-center py-3 px-4 rounded-lg ${
                    isDark
                      ? "bg-blue-900/20 text-white"
                      : "bg-blue-50 text-gray-800"
                  }`}
                >
                  <div className="rounded-full w-12 h-12 flex-shrink-0 mr-3 bg-gradient-to-r from-blue-500 to-sky-400 flex items-center justify-center text-white">
                    <span className="text-lg font-bold">{problem.stat}</span>
                  </div>
                  <span className="text-sm">{problem.statDesc}</span>
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
          className="mt-20 text-center"
        >
          <motion.div
            variants={itemVariants}
            whileHover={{
              y: -5,
              transition: { duration: 0.3 },
              boxShadow: isDark
                ? "0 20px 40px rgba(30, 64, 175, 0.25)"
                : "0 20px 40px rgba(59, 130, 246, 0.2)",
            }}
            className={`p-8 rounded-xl max-w-4xl mx-auto transition-all ${
              isDark
                ? "bg-gradient-to-br from-blue-900/30 to-blue-800/20 backdrop-blur-sm border border-blue-800/30"
                : "bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-100"
            }`}
          >
            <div className="flex flex-col items-center mb-5">
              <div className="w-16 h-16 mb-5 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-sky-400 shadow-xl shadow-blue-500/20">
                <FiArrowRight className="w-8 h-8 text-white" />
              </div>
              <div className="h-0.5 w-20 bg-gradient-to-r from-blue-500 to-sky-400"></div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Решение есть!
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Современные технологии автоматизации рабочих процессов на базе
              искусственного интеллекта способны решить все эти проблемы,
              обеспечивая бесперебойную работу систем, интеграцию данных и
              значительное повышение эффективности бизнес-процессов.
            </p>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href="#workflow-solution"
              className="inline-block bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold py-3 px-6 rounded-xl transition-all hover:shadow-lg hover:shadow-blue-500/20 dark:hover:shadow-blue-600/20"
            >
              Узнать о решении
            </motion.a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
