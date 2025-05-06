"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  SendIcon,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send as BrandTelegram,
  Youtube as YoutubeIcon,
  MessageSquare,
} from "lucide-react";

export default function ChatBotsContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    subject: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // Анимации
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
        duration: 0.5,
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
        stiffness: 150,
        damping: 20,
      },
    },
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Обработчик отправки формы
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      // Имитация отправки формы с задержкой
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form submitted:", formData);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
        subject: "",
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

  // Классы для элементов формы
  const inputClasses = `block w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 
    focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 bg-white dark:bg-gray-800/50 
    dark:text-white text-lg transition-colors duration-200 placeholder:text-gray-400 dark:placeholder:text-gray-500`;

  const labelClasses = `block text-base font-medium text-gray-700 dark:text-gray-300 mb-1.5`;

  return (
    <motion.section
      id="contact"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="py-20 md:py-28 px-4 relative overflow-hidden"
    >
      {/* Фоновые градиенты */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900 -z-10"></div>
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-blue-400/20 dark:from-blue-500/10 dark:to-blue-700/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-indigo-200/20 to-indigo-400/20 dark:from-indigo-500/10 dark:to-indigo-700/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          variants={itemVariants}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-gray-800 dark:text-white leading-tight">
            Готовы{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0167F3] to-[#399AFC]">
              автоматизировать коммуникации
            </span>{" "}
            в вашем бизнесе?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Получите бесплатную консультацию по внедрению чат-ботов в ваши
            бизнес-процессы. Наши эксперты помогут определить оптимальные
            сценарии применения.
          </p>
        </motion.div>

        <div className="relative backdrop-blur-lg bg-white/60 dark:bg-gray-900/50 rounded-2xl shadow-xl p-8 md:p-10 max-w-4xl mx-auto border border-white/20 dark:border-gray-700/30">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Левая колонка с контактами */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="lg:col-span-2"
            >
              <div className="h-full flex flex-col">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">
                  Контактная информация
                </h3>

                <div className="space-y-6 flex-grow">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-[#0167F3]">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                        Телефон
                      </p>
                      <a
                        href="tel:+7 (495) 123-45-67"
                        className="text-lg font-medium text-gray-900 dark:text-white hover:text-[#0167F3] dark:hover:text-[#399AFC] transition-colors"
                      >
                        +7 (495) 123-45-67
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-[#0167F3]">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                        Email
                      </p>
                      <a
                        href="mailto:info@neuropolis.ru"
                        className="text-lg font-medium text-gray-900 dark:text-white hover:text-[#0167F3] dark:hover:text-[#399AFC] transition-colors"
                      >
                        info@neuropolis.ru
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-[#0167F3]">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                        Адрес
                      </p>
                      <p className="text-lg font-medium text-gray-900 dark:text-white">
                        г. Москва, ул. Тверская, д. 1
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-[#0167F3]">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                        Часы работы
                      </p>
                      <p className="text-lg font-medium text-gray-900 dark:text-white">
                        Пн-Пт: 9:00 - 18:00
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    Мы в социальных сетях
                  </p>
                  <div className="flex space-x-3">
                    <a
                      href="https://t.me/neuropolis"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-100 hover:bg-blue-200 dark:bg-blue-900/30 dark:hover:bg-blue-800/40 text-[#0167F3] transition-colors"
                    >
                      <BrandTelegram className="w-5 h-5" />
                    </a>
                    <a
                      href="https://vk.com/neuropolis"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-100 hover:bg-blue-200 dark:bg-blue-900/30 dark:hover:bg-blue-800/40 text-[#0167F3] transition-colors"
                    >
                      <MessageSquare className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.youtube.com/neuropolis"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full flex items-center justify-center bg-red-100 hover:bg-red-200 dark:bg-red-900/30 dark:hover:bg-red-800/40 text-red-600 transition-colors"
                    >
                      <YoutubeIcon className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Правая колонка с формой */}
            <motion.div variants={containerVariants} className="lg:col-span-3">
              {isSubmitted ? (
                <motion.div
                  className="text-center py-10 px-6"
                  initial="hidden"
                  animate="visible"
                  variants={successAnimation}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-[#0167F3] to-[#399AFC] text-white mb-6">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white mb-3">
                    Спасибо за заявку!
                  </h3>
                  <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto leading-relaxed">
                    Мы свяжемся с вами в ближайшее время для обсуждения деталей
                    и бесплатной консультации.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="inline-flex items-center justify-center px-6 py-3 border-0 text-lg font-semibold rounded-xl 
                              text-white bg-gradient-to-r from-[#0167F3] to-[#399AFC] hover:opacity-90 shadow-lg 
                              transition-opacity duration-300"
                  >
                    Отправить новую заявку
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
                    <motion.div variants={itemVariants}>
                      <label htmlFor="name" className={labelClasses}>
                        Имя*
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Ваше имя"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={inputClasses}
                      />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <label htmlFor="email" className={labelClasses}>
                        Email*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="example@mail.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={inputClasses}
                      />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <label htmlFor="phone" className={labelClasses}>
                        Телефон
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="+7 (___) ___-__-__"
                        value={formData.phone}
                        onChange={handleChange}
                        className={inputClasses}
                      />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <label htmlFor="company" className={labelClasses}>
                        Компания
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        placeholder="Название компании"
                        value={formData.company}
                        onChange={handleChange}
                        className={inputClasses}
                      />
                    </motion.div>
                  </div>

                  <motion.div variants={itemVariants}>
                    <label htmlFor="subject" className={labelClasses}>
                      Тема
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={inputClasses}
                    >
                      <option value="">Выберите тему обращения</option>
                      <option value="Разработка чат-бота">
                        Разработка чат-бота
                      </option>
                      <option value="Интеграция чат-бота">
                        Интеграция чат-бота
                      </option>
                      <option value="Поддержка чат-бота">
                        Поддержка чат-бота
                      </option>
                      <option value="Другое">Другое</option>
                    </select>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label htmlFor="message" className={labelClasses}>
                      Сообщение
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Расскажите о вашем проекте..."
                      value={formData.message}
                      onChange={handleChange}
                      className={inputClasses}
                    ></textarea>
                  </motion.div>

                  {submitError && (
                    <motion.div
                      variants={itemVariants}
                      className="text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 p-3 rounded-lg text-sm"
                    >
                      {submitError}
                    </motion.div>
                  )}

                  <motion.div variants={itemVariants} className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-xl text-lg font-semibold
                        text-white bg-gradient-to-r from-[#0167F3] to-[#399AFC] hover:opacity-90
                        transition-opacity duration-300 disabled:opacity-70 ${
                          isSubmitting ? "cursor-not-allowed" : ""
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
                              d="M4 12a8 8 0 018-8v8H4z"
                            ></path>
                          </svg>
                          Отправка...
                        </>
                      ) : (
                        <>
                          Получить консультацию
                          <SendIcon className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </button>
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    className="text-center text-sm text-gray-500 dark:text-gray-400"
                  >
                    Нажимая кнопку, вы соглашаетесь с{" "}
                    <a
                      href="/policy"
                      className="text-[#0167F3] hover:underline"
                    >
                      политикой обработки персональных данных
                    </a>
                  </motion.div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
