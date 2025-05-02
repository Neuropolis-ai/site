"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AIAgentWhyUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
      id="why-us"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="py-20 md:py-28 px-4 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900 -z-10"></div>
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-blue-400/20 dark:from-blue-500/10 dark:to-blue-700/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-indigo-200/20 to-indigo-400/20 dark:from-indigo-500/10 dark:to-indigo-700/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto relative z-10">
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-16 md:mb-20 text-gray-800 dark:text-white"
        >
          Почему выбирают нас?
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-6"
          >
            <motion.div
              variants={itemVariants}
              whileHover={{
                y: -4,
                transition: { type: "spring", stiffness: 300, damping: 15 },
              }}
              className="group backdrop-blur-lg bg-white/60 dark:bg-gray-900/50 p-6 rounded-2xl border border-white/20 dark:border-gray-700/30 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start gap-4 mb-3">
                <div className="flex-shrink-0 bg-gradient-to-br from-[#0167F3] to-[#399AFC] p-2 rounded-xl shadow-md w-10 h-10 flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white"
                  >
                    <path
                      d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white mt-1">
                  Специализация на бизнес-процессах
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                Мы не просто технари, мы понимаем бизнес и создаем ИИ-агентов,
                которые решают конкретные бизнес-задачи: от лидогенерации до
                оптимизации расходов.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{
                y: -4,
                transition: { type: "spring", stiffness: 300, damping: 15 },
              }}
              className="group backdrop-blur-lg bg-white/60 dark:bg-gray-900/50 p-6 rounded-2xl border border-white/20 dark:border-gray-700/30 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start gap-4 mb-3">
                <div className="flex-shrink-0 bg-gradient-to-br from-[#0167F3] to-[#399AFC] p-2 rounded-xl shadow-md w-10 h-10 flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white"
                  >
                    <path
                      d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5M12 12H15M12 16H15M9 12H9.01M9 16H9.01"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white mt-1">
                  Полный цикл разработки
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                От анализа потребностей до внедрения и поддержки. Мы берем на
                себя весь процесс создания ИИ-агента: консультации,
                проектирование, разработку, тестирование и сопровождение.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{
                y: -4,
                transition: { type: "spring", stiffness: 300, damping: 15 },
              }}
              className="group backdrop-blur-lg bg-white/60 dark:bg-gray-900/50 p-6 rounded-2xl border border-white/20 dark:border-gray-700/30 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start gap-4 mb-3">
                <div className="flex-shrink-0 bg-gradient-to-br from-[#0167F3] to-[#399AFC] p-2 rounded-xl shadow-md w-10 h-10 flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white"
                  >
                    <path
                      d="M13 10V3L4 14H11V21L20 10H13Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white mt-1">
                  Передовые технологии
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                Мы используем самые современные модели ИИ (Claude, GPT-4), LLM
                Frameworks и облачные технологии для создания
                высокопроизводительных и масштабируемых решений, адаптированных
                под ваши уникальные потребности.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{
                y: -4,
                transition: { type: "spring", stiffness: 300, damping: 15 },
              }}
              className="group backdrop-blur-lg bg-white/60 dark:bg-gray-900/50 p-6 rounded-2xl border border-white/20 dark:border-gray-700/30 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start gap-4 mb-3">
                <div className="flex-shrink-0 bg-gradient-to-br from-[#0167F3] to-[#399AFC] p-2 rounded-xl shadow-md w-10 h-10 flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white"
                  >
                    <path
                      d="M19.13 16.58C19.459 16.1441 19.9466 15.8861 20.4822 15.8568C21.0179 15.8275 21.5421 16.0311 21.91 16.42L22 16.5C22.3788 16.9078 22.5966 17.4388 22.5966 17.99C22.5966 18.5412 22.3788 19.0722 22 19.48L21.91 19.58C21.5823 19.9865 21.0971 20.2498 20.5649 20.3145C20.0327 20.3792 19.4957 20.2382 19.09 19.93L19 19.87C18.5404 19.4656 17.9027 19.2771 17.26 19.35C16.6173 19.4229 16.0596 19.7488 15.73 20.24L15.69 20.31C15.361 20.7459 14.8734 21.0039 14.3378 21.0332C13.8021 21.0625 13.2779 20.8589 12.91 20.47L12.83 20.37C12.4512 19.9622 12.2334 19.4312 12.2334 18.88C12.2334 18.3288 12.4512 17.7978 12.83 17.39L12.91 17.29C13.2377 16.8835 13.7229 16.6202 14.2551 16.5555C14.7873 16.4908 15.3243 16.6318 15.73 16.94L15.81 17C16.2696 17.4044 16.9073 17.5929 17.55 17.51C18.1927 17.4371 18.7504 17.1112 19.07 16.61L19.13 16.58Z M4.87 7.42C4.54096 7.85594 4.0534 8.11388 3.51777 8.14318C2.98214 8.17248 2.45794 7.96889 2.09 7.58L2 7.5C1.62122 7.09215 1.40338 6.56115 1.40338 6.01C1.40338 5.45879 1.62122 4.92779 2 4.52L2.09 4.42C2.41769 4.01352 2.9029 3.75019 3.43508 3.6855C3.96726 3.62081 4.5043 3.76182 4.91 4.07L5 4.13C5.45955 4.53436 6.09729 4.72289 6.74 4.65C7.38271 4.57711 7.94036 4.25118 8.27 3.76L8.31 3.69C8.63904 3.25406 9.1266 2.99612 9.66223 2.96682C10.1979 2.93752 10.7221 3.14111 11.09 3.53L11.17 3.63C11.5488 4.03779 11.7666 4.56879 11.7666 5.12C11.7666 5.67121 11.5488 6.20221 11.17 6.61L11.09 6.71C10.7623 7.11648 10.2771 7.37981 9.74492 7.4445C9.21274 7.50919 8.6757 7.36818 8.27 7.06L8.19 7C7.73045 6.59564 7.09271 6.40711 6.45 6.48C5.80729 6.55289 5.24964 6.87882 4.93 7.37L4.87 7.42Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white mt-1">
                  Гибкость и масштабируемость
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                Создаем решения, которые растут вместе с вашим бизнесом. Начните
                с небольшого проекта и расширяйте функциональность по мере
                необходимости без необходимости переписывать код.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
