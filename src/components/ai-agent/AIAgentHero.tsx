"use client";

import { motion } from "framer-motion";

export default function AIAgentHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="relative flex items-center justify-center overflow-hidden pt-[120px] sm:pt-[150px] md:pt-[180px] lg:pt-[200px] pb-16 md:pb-24 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900"
    >
      <div className="absolute inset-0 z-0 opacity-40 dark:opacity-20">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-blue-400/20 dark:from-blue-500/10 dark:to-blue-700/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-indigo-200/20 to-indigo-400/20 dark:from-indigo-500/10 dark:to-indigo-700/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-20 text-center max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[900px] mx-auto px-4">
        <motion.div variants={itemVariants}>
          <span className="inline-flex items-center justify-center border border-blue-300 dark:border-blue-800 gap-2 px-4 py-1 rounded-full text-sm mb-4 bg-blue-500/10 text-blue-600 dark:text-blue-400">
            <svg
              width={15}
              height={15}
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-blue-600 dark:text-blue-400"
            >
              <path
                opacity="0.2"
                d="M14.0063 8.11585L9.82259 9.6371L8.30133 13.8208C8.26582 13.9165 8.20186 13.9991 8.11807 14.0573C8.03428 14.1156 7.93465 14.1469 7.83258 14.1469C7.73052 14.1469 7.63089 14.1156 7.5471 14.0573C7.4633 13.9991 7.39935 13.9165 7.36383 13.8208L5.84508 9.6371L1.66133 8.11585C1.56565 8.08033 1.48312 8.01638 1.42484 7.93258C1.36656 7.84879 1.33533 7.74917 1.33533 7.6471C1.33533 7.54503 1.36656 7.44541 1.42484 7.36161C1.48312 7.27782 1.56565 7.21387 1.66133 7.17835L5.84508 5.6596L7.36633 1.47585C7.40185 1.38016 7.4658 1.29763 7.5496 1.23936C7.63339 1.18108 7.73302 1.14984 7.83508 1.14984C7.93715 1.14984 8.03678 1.18108 8.12057 1.23936C8.20436 1.29763 8.26832 1.38016 8.30383 1.47585L9.82508 5.6596L14.0088 7.18085C14.1036 7.21708 14.1851 7.28129 14.2425 7.36495C14.2999 7.44861 14.3305 7.54775 14.3303 7.64921C14.33 7.75067 14.2989 7.84965 14.241 7.933C14.1831 8.01635 14.1013 8.08012 14.0063 8.11585Z"
                fill="currentColor"
              />
              <path
                d="M14.1776 6.71085L10.2126 5.2696L8.77134 1.3046C8.7003 1.11323 8.5724 0.948173 8.40481 0.831617C8.23722 0.715062 8.03797 0.652588 7.83384 0.652588C7.6297 0.652588 7.43046 0.715062 7.26287 0.831617C7.09528 0.948173 6.96737 1.11323 6.89634 1.3046L5.45509 5.2696L1.49009 6.71085C1.29871 6.78189 1.13366 6.90979 1.0171 7.07738C0.900548 7.24497 0.838074 7.44422 0.838074 7.64835C0.838074 7.85249 0.900548 8.05173 1.0171 8.21932C1.13366 8.38691 1.29871 8.51482 1.49009 8.58585L5.45509 10.0277L6.89634 13.9921C6.96737 14.1835 7.09528 14.3485 7.26287 14.4651C7.43046 14.5816 7.6297 14.6441 7.83384 14.6441C8.03797 14.6441 8.23722 14.5816 8.40481 14.4651C8.5724 14.3485 8.7003 14.1835 8.77134 13.9921L10.2132 10.0271L14.1776 8.58585C14.369 8.51482 14.534 8.38691 14.6506 8.21932C14.7671 8.05173 14.8296 7.85249 14.8296 7.64835C14.8296 7.44422 14.7671 7.24497 14.6506 7.07738C14.534 6.90979 14.369 6.78189 14.1776 6.71085ZM9.65134 9.1671C9.58275 9.19208 9.52047 9.23176 9.46886 9.28337C9.41725 9.33498 9.37756 9.39727 9.35259 9.46585L7.83384 13.6421L6.31509 9.46585C6.29012 9.39727 6.25043 9.33498 6.19882 9.28337C6.14721 9.23176 6.08492 9.19208 6.01634 9.1671L1.84009 7.64835L6.01634 6.1296C6.08492 6.10463 6.14721 6.06494 6.19882 6.01333C6.25043 5.96172 6.29012 5.89944 6.31509 5.83085L7.83384 1.6546L9.35259 5.83085C9.37756 5.89944 9.41725 5.96172 9.46886 6.01333C9.52047 6.06494 9.58275 6.10463 9.65134 6.1296L13.8276 7.64835L9.65134 9.1671Z"
                fill="currentColor"
              />
            </svg>{" "}
            Neuropolis.ai
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4 sm:mb-5 md:mb-6"
        >
          Создаем
          <span className="bg-gradient-to-r from-[#0167F3] to-[#399AFC] text-transparent bg-clip-text">
            {" "}
            ИИ-агентов
          </span>
          , которые автоматизируют рутину и увеличивают прибыль вашего бизнеса
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-600 dark:text-gray-300 leading-relaxed"
        >
          Разрабатываем интеллектуальных помощников на базе ИИ, которые берут на
          себя повторяющиеся задачи, оптимизируют процессы и высвобождают время
          ваших сотрудников для стратегических целей.
        </motion.p>

        <motion.a
          variants={itemVariants}
          href="#cta"
          className="inline-block w-full sm:w-auto bg-gradient-to-r from-[#0167F3] to-[#399AFC] text-white font-semibold py-3 px-6 rounded-xl text-base transition-opacity hover:opacity-90 shadow-lg"
        >
          Получить бесплатную консультацию
        </motion.a>

        <motion.div
          variants={itemVariants}
          className="mt-12 flex flex-row justify-center items-center gap-y-3 gap-x-6 sm:gap-x-8 md:gap-x-10 text-gray-700 dark:text-gray-300 text-sm md:text-base"
        >
          <div className="flex items-center space-x-1.5">
            <svg
              className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="text-base whitespace-nowrap">
              Автоматизация до 80% рутины
            </span>
          </div>
          <div className="flex items-center space-x-1.5">
            <svg
              className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="text-base whitespace-nowrap">
              Снижение затрат на персонал
            </span>
          </div>
          <div className="flex items-center space-x-1.5">
            <svg
              className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="text-base whitespace-nowrap">
              Рост эффективности процессов
            </span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
