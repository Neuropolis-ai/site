"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { useTheme } from "@/context/ThemeContext";
import { useState } from "react";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiBriefcase,
  FiMessageSquare,
  FiShield,
  FiCheckCircle,
  FiBriefcase as FiAudit,
  FiSettings,
  FiUsers,
} from "react-icons/fi";

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Имитация отправки формы с задержкой для показа состояния загрузки
    setTimeout(() => {
      console.log("Form submitted:", formState);
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Сброс формы через некоторое время
      setTimeout(() => {
        setIsSubmitted(false);
        setFormState({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
          agreement: false,
        });
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden">
      {/* Градиентный фон */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 to-white dark:from-blue-950/10 dark:to-gray-950 -z-10"></div>

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
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center"
        >
          {/* Левая колонка - Текст */}
          <motion.div variants={itemVariants}>
            <div className="mb-10">
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center justify-center border border-blue-300 dark:border-blue-800 gap-2 px-4 py-1 rounded-full text-sm mb-4 bg-blue-500/10 text-blue-600 dark:text-blue-400"
              >
                Связаться с нами
              </motion.div>
              <motion.h2
                variants={itemVariants}
                className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-4"
              >
                Готовы{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-sky-400">
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
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    isDark
                      ? "bg-gradient-to-br from-blue-600/20 to-sky-600/20 text-blue-400"
                      : "bg-gradient-to-br from-blue-50 to-sky-50 text-blue-500"
                  }`}
                >
                  <FiAudit className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    Бесплатный аудит процессов
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">
                    Проведем предварительный анализ ваших бизнес-процессов и
                    определим возможности для автоматизации.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    isDark
                      ? "bg-gradient-to-br from-blue-600/20 to-sky-600/20 text-blue-400"
                      : "bg-gradient-to-br from-blue-50 to-sky-50 text-blue-500"
                  }`}
                >
                  <FiSettings className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    Индивидуальное решение
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">
                    Разработаем персонализированное решение, учитывающее
                    специфику вашего бизнеса и существующую инфраструктуру.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    isDark
                      ? "bg-gradient-to-br from-blue-600/20 to-sky-600/20 text-blue-400"
                      : "bg-gradient-to-br from-blue-50 to-sky-50 text-blue-500"
                  }`}
                >
                  <FiUsers className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    Команда экспертов
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">
                    С вами будут работать опытные специалисты с многолетним
                    опытом в автоматизации процессов различной сложности.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Дополнительная информация */}
            <motion.div
              variants={itemVariants}
              className="mt-10 p-6 rounded-xl border border-blue-100 dark:border-blue-800/30 bg-gradient-to-br from-blue-50/50 to-white dark:from-blue-900/20 dark:to-blue-800/10 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-3">
                <FiShield className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  Гарантия конфиденциальности
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Мы ценим ваше доверие и гарантируем полную конфиденциальность
                всей информации, которую вы предоставляете нам. Ваши данные
                защищены в соответствии с законодательством.
              </p>
            </motion.div>
          </motion.div>

          {/* Правая колонка - Форма */}
          <motion.div
            variants={itemVariants}
            whileHover={{
              y: -5,
              transition: { duration: 0.3 },
              boxShadow: isDark
                ? "0 20px 40px rgba(30, 64, 175, 0.25)"
                : "0 20px 40px rgba(59, 130, 246, 0.15)",
            }}
            className={`p-8 rounded-xl backdrop-blur-sm ${
              isDark
                ? "bg-gray-800/50 border border-gray-700"
                : "bg-white/80 border border-gray-200 shadow-lg shadow-blue-100"
            }`}
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-sky-400 text-white mb-6">
                  <FiCheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Спасибо за заявку!
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  Ваше сообщение успешно отправлено. Наши эксперты свяжутся с
                  вами в ближайшее время.
                </p>
              </motion.div>
            ) : (
              <>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                  <span className="inline-block p-1 rounded-full bg-blue-500/20 dark:bg-blue-400/20">
                    <FiMessageSquare className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                  </span>
                  Заполните форму
                </h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 flex items-center gap-1.5"
                    >
                      <FiUser className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                      Ваше имя <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-2.5 rounded-lg border ${
                        isDark
                          ? "bg-gray-700/70 border-gray-600 text-white focus:border-blue-500 focus:bg-gray-700"
                          : "bg-white/70 border-gray-300 text-gray-900 focus:border-blue-400 focus:bg-white"
                      } focus:ring-2 focus:ring-blue-500/30 focus:outline-none transition-colors`}
                      placeholder="Иван Иванов"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 flex items-center gap-1.5"
                    >
                      <FiMail className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-2.5 rounded-lg border ${
                        isDark
                          ? "bg-gray-700/70 border-gray-600 text-white focus:border-blue-500 focus:bg-gray-700"
                          : "bg-white/70 border-gray-300 text-gray-900 focus:border-blue-400 focus:bg-white"
                      } focus:ring-2 focus:ring-blue-500/30 focus:outline-none transition-colors`}
                      placeholder="ivan@company.com"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 flex items-center gap-1.5"
                      >
                        <FiPhone className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                        Телефон
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formState.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-2.5 rounded-lg border ${
                          isDark
                            ? "bg-gray-700/70 border-gray-600 text-white focus:border-blue-500 focus:bg-gray-700"
                            : "bg-white/70 border-gray-300 text-gray-900 focus:border-blue-400 focus:bg-white"
                        } focus:ring-2 focus:ring-blue-500/30 focus:outline-none transition-colors`}
                        placeholder="+7 (999) 123-45-67"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 flex items-center gap-1.5"
                      >
                        <FiBriefcase className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                        Компания
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={formState.company}
                        onChange={handleChange}
                        className={`w-full px-4 py-2.5 rounded-lg border ${
                          isDark
                            ? "bg-gray-700/70 border-gray-600 text-white focus:border-blue-500 focus:bg-gray-700"
                            : "bg-white/70 border-gray-300 text-gray-900 focus:border-blue-400 focus:bg-white"
                        } focus:ring-2 focus:ring-blue-500/30 focus:outline-none transition-colors`}
                        placeholder="ООО Компания"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 flex items-center gap-1.5"
                    >
                      <FiMessageSquare className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                      Сообщение
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formState.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-2.5 rounded-lg border ${
                        isDark
                          ? "bg-gray-700/70 border-gray-600 text-white focus:border-blue-500 focus:bg-gray-700"
                          : "bg-white/70 border-gray-300 text-gray-900 focus:border-blue-400 focus:bg-white"
                      } focus:ring-2 focus:ring-blue-500/30 focus:outline-none transition-colors`}
                      placeholder="Расскажите о вашем проекте или задайте вопрос"
                    ></textarea>
                  </div>

                  <div className="flex items-start pt-1">
                    <div className="flex items-center h-5">
                      <input
                        id="agreement"
                        name="agreement"
                        type="checkbox"
                        checked={formState.agreement}
                        onChange={handleCheckboxChange}
                        required
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                    </div>
                    <label
                      htmlFor="agreement"
                      className="ml-3 block text-sm text-gray-600 dark:text-gray-300"
                    >
                      Я согласен с{" "}
                      <a
                        href="/privacy-policy"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        политикой конфиденциальности
                      </a>{" "}
                      и обработкой персональных данных
                    </label>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full mt-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold py-3 px-6 rounded-xl transition-all hover:shadow-lg hover:shadow-blue-500/20 dark:hover:shadow-blue-600/20 flex items-center justify-center ${
                      isSubmitting ? "opacity-70 cursor-not-allowed" : ""
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
                      "Отправить заявку"
                    )}
                  </motion.button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
