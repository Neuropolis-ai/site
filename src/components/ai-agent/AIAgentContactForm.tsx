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
  const [noise, setNoise] = useState("");

  // Генерация SVG шума для фона
  useEffect(() => {
    const generateNoise = () => {
      let result =
        '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">';
      for (let i = 0; i < 100; i++) {
        const x = Math.random() * 200;
        const y = Math.random() * 200;
        const size = Math.random() * 0.5;
        const opacity = Math.random() * 0.05;
        result += `<circle cx="${x}" cy="${y}" r="${size}" fill="currentColor" opacity="${opacity}" />`;
      }
      result += "</svg>";
      return `data:image/svg+xml;base64,${btoa(result)}`;
    };

    setNoise(generateNoise());
  }, []);

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
      // В реальном проекте здесь был бы код для отправки данных на сервер
      // Имитация задержки отправки
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

  // Варианты анимации для элементов
  const fadeIn = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  const successAnimation = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.3,
      },
    },
  };

  // Стили для input и select элементов
  const inputClasses = `block w-full px-5 py-3.5 rounded-2xl border border-[#E2E8F0] dark:border-[#2D3748] 
    shadow-sm focus:ring-[#4F9CFF] focus:border-[#4F9CFF] bg-white dark:bg-[#1A202C] 
    dark:text-white text-base tracking-[0.02em] transition-all duration-300 
    hover:border-[#4F9CFF] dark:hover:border-[#4F9CFF] backdrop-blur-sm`;

  return (
    <section
      id="cta"
      className="py-20 md:py-28 px-4 relative overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(to bottom right, rgba(248, 249, 250, 0.8), rgba(255, 255, 255, 0.9)), 
          url("${noise}")
        `,
        backgroundSize: "cover",
      }}
    >
      {/* Декоративные элементы дизайна */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-b from-[#3DF5C2]/10 to-transparent rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-t from-[#4F9CFF]/10 to-transparent rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5 },
            },
          }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white tracking-tight leading-tight">
            Готовы <span className="text-[#4F9CFF]">автоматизировать</span> ваш
            бизнес <br className="hidden md:block" />с помощью ИИ?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto tracking-[0.02em] leading-relaxed">
            Получите бесплатную консультацию по внедрению ИИ-агентов в ваши
            бизнес-процессы. Наши эксперты помогут определить оптимальные
            сценарии применения.
          </p>
        </motion.div>

        <motion.div
          className="relative backdrop-blur-md bg-white/70 dark:bg-gray-900/70 rounded-3xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto
            border border-white/50 dark:border-gray-800/50 before:absolute before:inset-0 before:bg-white/5 before:backdrop-blur-lg
            before:rounded-3xl before:-z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                delay: 0.2,
              },
            },
          }}
        >
          {/* Глянцевый эффект верхней части карточки */}
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white/30 to-transparent rounded-t-3xl pointer-events-none dark:from-white/5"></div>

          {submitSuccess ? (
            <motion.div
              className="text-center py-12 px-6"
              initial="hidden"
              animate="visible"
              variants={successAnimation}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-[#3DF5C2] to-[#4F9CFF] text-white mb-8">
                <svg
                  className="w-10 h-10"
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
              <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 tracking-tight">
                Спасибо за заявку!
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 tracking-[0.02em] max-w-lg mx-auto">
                Мы свяжемся с вами в ближайшее время для обсуждения деталей и
                бесплатной консультации.
              </p>
              <motion.button
                onClick={() => setSubmitSuccess(false)}
                className="inline-flex items-center justify-center px-8 py-3.5 border-0 text-base font-medium rounded-full 
                  text-white bg-gradient-to-r from-[#4F9CFF] to-[#3DF5C2] hover:from-[#4F9CFF] hover:to-[#4F9CFF] shadow-lg 
                  shadow-blue-500/20 dark:shadow-blue-500/10 transition-all duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Отправить новую заявку
              </motion.button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <motion.div variants={fadeIn}>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 tracking-[0.02em]"
                  >
                    Имя*
                  </label>
                  <motion.input
                    whileHover={{ scale: 1.01 }}
                    whileFocus={{ scale: 1.01 }}
                    transition={{ duration: 0.3 }}
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

                <motion.div variants={fadeIn}>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 tracking-[0.02em]"
                  >
                    Email*
                  </label>
                  <motion.input
                    whileHover={{ scale: 1.01 }}
                    whileFocus={{ scale: 1.01 }}
                    transition={{ duration: 0.3 }}
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                    placeholder="ivanov@example.com"
                  />
                </motion.div>

                <motion.div variants={fadeIn}>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 tracking-[0.02em]"
                  >
                    Телефон
                  </label>
                  <motion.input
                    whileHover={{ scale: 1.01 }}
                    whileFocus={{ scale: 1.01 }}
                    transition={{ duration: 0.3 }}
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="+7 (___) ___-__-__"
                  />
                </motion.div>

                <motion.div variants={fadeIn}>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 tracking-[0.02em]"
                  >
                    Компания
                  </label>
                  <motion.input
                    whileHover={{ scale: 1.01 }}
                    whileFocus={{ scale: 1.01 }}
                    transition={{ duration: 0.3 }}
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="ООО 'Компания'"
                  />
                </motion.div>
              </div>

              <motion.div variants={fadeIn}>
                <label
                  htmlFor="industry"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 tracking-[0.02em]"
                >
                  Отрасль
                </label>
                <motion.select
                  whileHover={{ scale: 1.01 }}
                  whileFocus={{ scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                  id="industry"
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  className={inputClasses}
                >
                  <option value="">Выберите отрасль</option>
                  <option value="retail">Розничная торговля</option>
                  <option value="manufacturing">Производство</option>
                  <option value="finance">Финансы и страхование</option>
                  <option value="healthcare">Здравоохранение</option>
                  <option value="tech">IT и разработка ПО</option>
                  <option value="education">Образование</option>
                  <option value="logistics">Логистика и транспорт</option>
                  <option value="other">Другое</option>
                </motion.select>
              </motion.div>

              <motion.div variants={fadeIn}>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 tracking-[0.02em]"
                >
                  Опишите вашу задачу или вопрос
                </label>
                <motion.textarea
                  whileHover={{ scale: 1.01 }}
                  whileFocus={{ scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={inputClasses}
                  placeholder="Расскажите кратко о вашей задаче или проблеме, которую хотите решить с помощью ИИ-агентов"
                ></motion.textarea>
              </motion.div>

              {submitError && (
                <motion.div
                  className="text-red-500 text-sm py-3 px-4 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-100 dark:border-red-800/30"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {submitError}
                </motion.div>
              )}

              <div className="flex items-center justify-between flex-col md:flex-row gap-4">
                <motion.p
                  className="text-sm text-gray-500 dark:text-gray-400 tracking-[0.02em]"
                  variants={fadeIn}
                >
                  * Обязательные поля
                </motion.p>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`inline-flex items-center justify-center px-8 py-3.5 border-0 text-base font-medium rounded-full 
                    text-white bg-gradient-to-r from-[#4F9CFF] to-[#3DF5C2] hover:from-[#4F9CFF] hover:to-[#4F9CFF] shadow-lg 
                    shadow-blue-500/20 dark:shadow-blue-500/10 transition-all duration-300 transform ${
                      isSubmitting
                        ? "opacity-70 cursor-not-allowed"
                        : "hover:scale-105"
                    }`}
                  whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  variants={fadeIn}
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
                    "Получить консультацию"
                  )}
                </motion.button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
