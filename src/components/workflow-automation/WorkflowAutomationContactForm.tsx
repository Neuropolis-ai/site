"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { useTheme } from "@/context/ThemeContext";
import { useState } from "react";

export default function WorkflowAutomationContactForm() {
  const { isDark } = useTheme();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    agreement: false,
  });

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      agreement: e.target.checked,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log("Form submitted:", formState);
    // Сброс формы после отправки
    setFormState({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
      agreement: false,
    });
    // Показать сообщение об успешной отправке
    alert("Спасибо за заявку! Мы свяжемся с вами в ближайшее время.");
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative">
      {/* Градиентный фон */}
      <div
        className={`absolute inset-0 ${
          isDark
            ? "bg-gradient-to-b from-gray-900 to-black"
            : "bg-gradient-to-b from-gray-50 to-white"
        } -z-10`}
      ></div>

      {/* Декоративные элементы */}
      <div className="absolute -top-24 right-0 w-64 h-64 bg-gradient-to-br from-purple-200/20 to-purple-400/20 dark:from-purple-500/10 dark:to-purple-700/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-24 left-0 w-64 h-64 bg-gradient-to-tr from-indigo-200/20 to-indigo-400/20 dark:from-indigo-500/10 dark:to-indigo-700/10 rounded-full blur-3xl -z-10"></div>

      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center"
        >
          {/* Левая колонка - Текст */}
          <motion.div variants={itemVariants}>
            <div className="mb-8">
              <motion.div
                variants={itemVariants}
                className={`inline-block px-4 py-1 rounded-full text-sm mb-4 switch-box ${
                  !isDark && "light-switch-box"
                }`}
              >
                Связаться с нами
              </motion.div>
              <motion.h2
                variants={itemVariants}
                className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-4"
              >
                Готовы{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA]">
                  автоматизировать
                </span>{" "}
                ваш бизнес?
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-600 dark:text-gray-300"
              >
                Оставьте заявку, и наши эксперты свяжутся с вами в течение
                одного рабочего дня для обсуждения вашего проекта и
                предоставления бесплатной консультации.
              </motion.p>
            </div>

            {/* Преимущества обращения */}
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-start gap-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    isDark ? "bg-purple-900/30" : "bg-purple-100"
                  }`}
                >
                  <svg
                    className="w-5 h-5 text-purple-600 dark:text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    Бесплатный аудит процессов
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Проведем предварительный анализ ваших бизнес-процессов и
                    определим возможности для автоматизации.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    isDark ? "bg-purple-900/30" : "bg-purple-100"
                  }`}
                >
                  <svg
                    className="w-5 h-5 text-purple-600 dark:text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    Индивидуальное решение
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Разработаем персонализированное решение, учитывающее
                    специфику вашего бизнеса и существующую инфраструктуру.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    isDark ? "bg-purple-900/30" : "bg-purple-100"
                  }`}
                >
                  <svg
                    className="w-5 h-5 text-purple-600 dark:text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    Команда экспертов
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    С вами будут работать опытные специалисты с многолетним
                    опытом в автоматизации процессов различной сложности.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Правая колонка - Форма */}
          <motion.div
            variants={itemVariants}
            className={`p-6 md:p-8 rounded-xl ${
              isDark
                ? "bg-gray-800/50 border border-gray-700"
                : "bg-white border border-gray-200 shadow-lg"
            }`}
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Заполните форму
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Ваше имя <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-2 rounded-lg border ${
                    isDark
                      ? "bg-gray-700 border-gray-600 text-white"
                      : "bg-white border-gray-300 text-gray-900"
                  } focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
                  placeholder="Иван Иванов"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-2 rounded-lg border ${
                    isDark
                      ? "bg-gray-700 border-gray-600 text-white"
                      : "bg-white border-gray-300 text-gray-900"
                  } focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
                  placeholder="ivan@company.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Телефон
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formState.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    isDark
                      ? "bg-gray-700 border-gray-600 text-white"
                      : "bg-white border-gray-300 text-gray-900"
                  } focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
                  placeholder="+7 (999) 123-45-67"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Компания
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={formState.company}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    isDark
                      ? "bg-gray-700 border-gray-600 text-white"
                      : "bg-white border-gray-300 text-gray-900"
                  } focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
                  placeholder="ООО Компания"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Сообщение
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    isDark
                      ? "bg-gray-700 border-gray-600 text-white"
                      : "bg-white border-gray-300 text-gray-900"
                  } focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
                  placeholder="Расскажите о вашем проекте или задайте вопрос"
                ></textarea>
              </div>

              <div className="flex items-start">
                <input
                  id="agreement"
                  name="agreement"
                  type="checkbox"
                  checked={formState.agreement}
                  onChange={handleCheckboxChange}
                  required
                  className="mt-1 h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="agreement"
                  className="ml-2 block text-sm text-gray-600 dark:text-gray-300"
                >
                  Я согласен с{" "}
                  <a
                    href="/privacy-policy"
                    className="text-purple-600 dark:text-purple-400 hover:underline"
                  >
                    политикой конфиденциальности
                  </a>{" "}
                  и обработкой персональных данных
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] text-white font-semibold py-3 px-6 rounded-lg transition-opacity hover:opacity-90"
              >
                Отправить заявку
              </button>
            </form>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
