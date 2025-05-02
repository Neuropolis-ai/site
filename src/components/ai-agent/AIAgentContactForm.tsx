"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function AIAgentContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    industry: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form submitted:", formData);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
        industry: "",
      });
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitError(
        "Произошла ошибка при отправке формы. Пожалуйста, попробуйте снова."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Стандартные варианты анимации
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Немного медленнее для полей формы
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5, // Чуть медленнее
        ease: "easeInOut",
      },
    },
  };

  const successAnimation = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 150, // Мягче
        damping: 20,
      },
    },
  };

  // Стандартизированные классы для полей ввода
  const inputClasses = `block w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 
    focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 bg-white dark:bg-gray-800/50 
    dark:text-white text-lg transition-colors duration-200 placeholder:text-gray-400 dark:placeholder:text-gray-500`;

  const labelClasses = `block text-base font-medium text-gray-700 dark:text-gray-300 mb-1.5`; // Уменьшен mb

  return (
    <motion.section // Анимируем всю секцию
      id="cta"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="py-20 md:py-28 px-4 relative overflow-hidden"
    >
      {/* Стандартный фон */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900 -z-10"></div>
      {/* Стандартные декоративные элементы */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-blue-400/20 dark:from-blue-500/10 dark:to-blue-700/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-indigo-200/20 to-indigo-400/20 dark:from-indigo-500/10 dark:to-indigo-700/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Анимируем заголовок */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-16 md:mb-20"
        >
          {/* Стандартизируем H2 и градиент */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-gray-800 dark:text-white leading-tight">
            Готовы{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0167F3] to-[#399AFC]">
              автоматизировать
            </span>{" "}
            ваш бизнес <br className="hidden md:block" />с помощью ИИ?
          </h2>
          {/* Стандартизируем подзаголовок */}
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Получите бесплатную консультацию по внедрению ИИ-агентов в ваши
            бизнес-процессы. Наши эксперты помогут определить оптимальные
            сценарии применения.
          </p>
        </motion.div>

        {/* Анимируем контейнер формы + применяем Glassmorphism */}
        <motion.div
          variants={itemVariants} // Анимируем как один элемент
          className="relative backdrop-blur-lg bg-white/60 dark:bg-gray-900/50 rounded-2xl shadow-xl p-8 md:p-10 max-w-4xl mx-auto
                     border border-white/20 dark:border-gray-700/30"
        >
          {submitSuccess ? (
            <motion.div
              className="text-center py-10 px-6"
              initial="hidden"
              animate="visible"
              variants={successAnimation}
            >
              {/* Стандартный контейнер иконки */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-[#0167F3] to-[#399AFC] text-white mb-6">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              {/* Стандартная типографика */}
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white mb-3">
                Спасибо за заявку!
              </h3>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto leading-relaxed">
                Мы свяжемся с вами в ближайшее время для обсуждения деталей и
                бесплатной консультации.
              </p>
              {/* Стандартная кнопка */}
              <motion.button
                onClick={() => setSubmitSuccess(false)}
                className="inline-flex items-center justify-center px-6 py-3 border-0 text-base font-semibold rounded-xl 
                           text-white bg-gradient-to-r from-[#0167F3] to-[#399AFC] hover:opacity-90 shadow-lg 
                           transition-opacity duration-300"
              >
                Отправить новую заявку
              </motion.button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {" "}
              {/* Уменьшен space-y */}
              {/* Используем общий containerVariants для stagger полей */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show" // Поля появляются сразу
                className="grid grid-cols-1 md:grid-cols-2 gap-x-6 md:gap-x-8 gap-y-6" // Добавлен gap-y
              >
                {/* Поле Имя */}
                <motion.div variants={itemVariants}>
                  <label htmlFor="name" className={labelClasses}>
                    Имя*
                  </label>
                  <input // Убираем motion с input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                    placeholder="Иван Иванов"
                  />
                </motion.div>

                {/* Поле Email */}
                <motion.div variants={itemVariants}>
                  <label htmlFor="email" className={labelClasses}>
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                    placeholder="ivan.ivanov@example.com"
                  />
                </motion.div>

                {/* Поле Телефон */}
                <motion.div variants={itemVariants}>
                  <label htmlFor="phone" className={labelClasses}>
                    Телефон
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="+7 (999) 123-45-67"
                  />
                </motion.div>

                {/* Поле Компания */}
                <motion.div variants={itemVariants}>
                  <label htmlFor="company" className={labelClasses}>
                    Компания
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="ООО 'Ромашка'"
                  />
                </motion.div>

                {/* Поле Сообщение (на всю ширину) */}
                <motion.div variants={itemVariants} className="md:col-span-2">
                  <label htmlFor="message" className={labelClasses}>
                    Ваше сообщение
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="Расскажите кратко о вашей задаче или вопросе..."
                  />
                </motion.div>
              </motion.div>
              {/* Ошибка отправки */}
              {submitError && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-sm text-red-600 dark:text-red-400 text-center"
                >
                  {submitError}
                </motion.p>
              )}
              {/* Кнопка отправки */}
              <motion.div variants={itemVariants} className="text-center pt-2">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`inline-flex items-center justify-center px-8 py-3 border-0 text-base font-semibold rounded-xl 
                    text-white bg-gradient-to-r from-[#0167F3] to-[#399AFC] shadow-lg transition-opacity duration-300 
                    ${
                      isSubmitting
                        ? "opacity-60 cursor-not-allowed"
                        : "hover:opacity-90"
                    }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Отправка...
                    </>
                  ) : (
                    "Получить бесплатную консультацию"
                  )}
                </motion.button>
              </motion.div>
            </form>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
}
