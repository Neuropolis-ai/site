"use client";

import React, { useState } from "react";
import Container from "@/components/ui/Container";
import { useTheme } from "@/context/ThemeContext";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiHome,
  FiMessageSquare,
  FiShield,
  FiCheckCircle,
  FiSearch,
  FiSettings,
  FiUsers,
  FiSend,
  FiArrowRight,
} from "react-icons/fi";
import { IconType } from "react-icons";
import { Heading } from "@/components/ui/heading";
import Subheading from "@/components/ui/subheading";
import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";

// Функция для форматирования номера телефона
const formatPhoneNumber = (value: string): string => {
  // Удаляем все нецифровые символы
  const digits = value.replace(/\D/g, "");

  // Форматируем номер по маске +7 (XXX) XXX-XX-XX
  if (digits.length === 0) return "";
  if (digits.length <= 1) return `+${digits}`;
  if (digits.length <= 4) return `+${digits.slice(0, 1)} (${digits.slice(1)}`;
  if (digits.length <= 7)
    return `+${digits.slice(0, 1)} (${digits.slice(1, 4)}) ${digits.slice(4)}`;
  if (digits.length <= 9)
    return `+${digits.slice(0, 1)} (${digits.slice(1, 4)}) ${digits.slice(
      4,
      7
    )}-${digits.slice(7)}`;

  return `+${digits.slice(0, 1)} (${digits.slice(1, 4)}) ${digits.slice(
    4,
    7
  )}-${digits.slice(7, 9)}-${digits.slice(9, 11)}`;
};

export default function ChatBotsContactForm() {
  const { theme } = useTheme();
  const isDark = theme !== "light";
  
  // Анимации для motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  // Состояние формы
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
  const [error, setError] = useState("");

  // Обработчики формы
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // Применяем маску к номеру телефона
    if (name === "phone") {
      setFormState({
        ...formState,
        [name]: formatPhoneNumber(value),
      });
    } else {
      setFormState({
        ...formState,
        [name]: value,
      });
    }
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
    setError("");

    try {
      // Имитация отправки формы с задержкой для показа состояния загрузки
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form submitted:", formState);
      setIsSubmitted(true);
      setFormState({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
        agreement: false,
      });
    } catch (err) {
      console.error("Error submitting form:", err);
      setError("Произошла ошибка при отправке формы. Пожалуйста, попробуйте снова.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Особенности для формы контакта
  const features = [
    {
      Icon: FiMessageSquare,
      title: "Бесплатная консультация",
      description:
        "Проведем детальный анализ ваших бизнес-процессов и коммуникационных потребностей для определения оптимального решения.",
    },
    {
      Icon: FiSettings,
      title: "Индивидуальный подход",
      description:
        "Разработаем персонализированного чат-бота, учитывающего специфику вашего бизнеса, целевую аудиторию и корпоративный стиль.",
    },
    {
      Icon: FiUsers,
      title: "Команда экспертов",
      description:
        "С вами будут работать опытные разработчики, лингвисты и специалисты по машинному обучению с большим опытом создания ИИ-решений.",
    },
  ];

  // Стили для полей ввода
  const inputStyle = `w-full px-4 py-3 rounded-xl border transition-all duration-200 ${
    isDark
      ? "bg-gray-800/50 border-gray-700 text-white focus:border-[#399AFC] focus:bg-gray-800/70 placeholder-gray-400"
      : "bg-white/90 border-gray-200 text-gray-900 focus:border-[#0167F3] focus:bg-white placeholder-gray-400"
  } focus:ring-3 focus:ring-[#0167F3]/20 focus:outline-none`;

  return (
    <section
      id="chatbots-contact"
      className="py-20 md:py-28 relative overflow-hidden"
    >
      {/* Градиентный фон */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50/80 dark:from-gray-950 dark:to-blue-950/10 -z-10"></div>

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
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/10 dark:bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-400/10 dark:bg-indigo-500/5 rounded-full blur-3xl -z-10"></div>

      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="max-w-5xl mx-auto"
        >
          {/* Заголовок секции */}
          <motion.div variants={itemVariants} className="text-center mb-14">
            <Badge>Свяжитесь с нами</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 mt-2">
              Готовы создать умного{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0167F3] to-[#399AFC]">
                чат-бота
              </span>{" "}
              для вашего бизнеса?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Оставьте заявку, и наши эксперты свяжутся с вами в течение одного
              рабочего дня для обсуждения вашего проекта и предоставления бесплатной
              консультации.
            </p>
          </motion.div>

          <div
            className={`rounded-2xl overflow-hidden shadow-lg ${
              isDark
                ? "bg-gray-800/50 border border-gray-700 shadow-blue-900/10"
                : "bg-white/90 backdrop-blur-sm border border-gray-200 shadow-blue-200/30"
            }`}
          >
            <div className="flex flex-col lg:flex-row">
              {/* Левая колонка с преимуществами */}
              <motion.div
                variants={itemVariants}
                className={`lg:w-[40%] p-8 md:p-10 ${
                  isDark
                    ? "bg-gradient-to-br from-gray-800 to-gray-900/80 border-r border-gray-700"
                    : "bg-gradient-to-br from-gray-50/80 to-white border-r border-gray-100"
                }`}
              >
                <h3
                  className={`text-xl font-semibold mb-8 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  Почему стоит выбрать нас?
                </h3>

                <div className="space-y-8">
                  {features.map((feature, index) => (
                    <div key={index} className="flex gap-4">
                      <div
                        className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                          isDark
                            ? "bg-blue-900/30 text-[#399AFC]"
                            : "bg-blue-50 text-[#0167F3]"
                        }`}
                      >
                        <feature.Icon className={isDark ? "text-[#399AFC]" : "text-[#0167F3]"} />
                      </div>
                      <div>
                        <h4
                          className={`text-base font-semibold mb-1.5 ${
                            isDark ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {feature.title}
                        </h4>
                        <p
                          className={`text-sm ${
                            isDark ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-700/50">
                  <p
                    className={`text-sm mb-4 ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Мы гарантируем конфиденциальность ваших данных
                  </p>
                  <div
                    className={`flex items-start gap-3 p-4 rounded-lg ${
                      isDark
                        ? "bg-gray-800/80 border border-gray-700"
                        : "bg-gray-50 border border-gray-100"
                    }`}
                  >
                    <FiShield
                      className={`flex-shrink-0 mt-1 ${
                        isDark ? "text-[#399AFC]" : "text-[#0167F3]"
                      }`}
                    />
                    <p
                      className={`text-xs ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Мы ценим ваше доверие и гарантируем полную конфиденциальность всей информации, которую вы предоставляете нам. Ваши данные защищены в соответствии с законодательством.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Правая колонка с формой */}
              <div className="lg:w-[60%] p-8 md:p-10">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="h-full flex flex-col items-center justify-center text-center py-8"
                  >
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${
                        isDark
                          ? "bg-green-900/30 text-green-400"
                          : "bg-green-100 text-green-600"
                      }`}
                    >
                      <FiCheckCircle className="w-8 h-8" />
                    </div>
                    <h3
                      className={`text-2xl font-semibold mb-4 ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Спасибо за заявку!
                    </h3>
                    <p
                      className={`text-base mb-8 max-w-md ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      Ваше сообщение успешно отправлено. Наши эксперты свяжутся с вами в ближайшее время для обсуждения вашего проекта.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-3 bg-gradient-to-r from-[#0167F3] to-[#399AFC] text-white rounded-lg hover:opacity-90 transition-opacity"
                    >
                      Отправить новую заявку
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                      <span className="inline-block p-1.5 rounded-full bg-[#0167F3]/10 dark:bg-blue-900/30">
                        <FiMessageSquare className="w-5 h-5 text-[#0167F3] dark:text-[#399AFC]" />
                      </span>
                      Заполните форму
                    </h3>
                    
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 flex items-center gap-1.5"
                        >
                          <FiUser className="w-4 h-4 text-[#0167F3] dark:text-[#399AFC]" />
                          Ваше имя <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          className={inputStyle}
                          placeholder="Иван Иванов"
                          required
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 flex items-center gap-1.5"
                        >
                          <FiMail className="w-4 h-4 text-[#0167F3] dark:text-[#399AFC]" />
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          className={inputStyle}
                          placeholder="ivan@company.com"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 flex items-center gap-1.5"
                          >
                            <FiPhone className="w-4 h-4 text-[#0167F3] dark:text-[#399AFC]" />
                            Телефон
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formState.phone}
                            onChange={handleChange}
                            className={inputStyle}
                            placeholder="+7 (999) 123-45-67"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="company"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 flex items-center gap-1.5"
                          >
                            <FiHome className="w-4 h-4 text-[#0167F3] dark:text-[#399AFC]" />
                            Компания
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formState.company}
                            onChange={handleChange}
                            className={inputStyle}
                            placeholder="ООО Компания"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 flex items-center gap-1.5"
                        >
                          <FiMessageSquare className="w-4 h-4 text-[#0167F3] dark:text-[#399AFC]" />
                          Сообщение
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formState.message}
                          onChange={handleChange}
                          rows={4}
                          className={`${inputStyle} resize-none`}
                          placeholder="Расскажите о вашем проекте или задайте вопрос"
                        ></textarea>
                      </div>

                      {error && (
                        <div className="p-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg text-sm">
                          {error}
                        </div>
                      )}

                      <div className="flex items-start pt-2">
                        <div className="flex h-5">
                          <input
                            id="agreement"
                            name="agreement"
                            type="checkbox"
                            checked={formState.agreement}
                            onChange={handleCheckboxChange}
                            required
                            className="h-5 w-5 rounded text-[#0167F3] focus:ring-[#0167F3] border-gray-300 focus:ring-2 focus:ring-offset-1 transition-colors"
                          />
                        </div>
                        <label
                          htmlFor="agreement"
                          className="ml-3 block text-sm text-gray-600 dark:text-gray-300"
                        >
                          Я согласен с{" "}
                          <a
                            href="/privacy-policy"
                            className="text-[#0167F3] dark:text-[#399AFC] hover:underline"
                          >
                            политикой конфиденциальности
                          </a>{" "}
                          и обработкой персональных данных
                        </label>
                      </div>

                      <div className="mt-8">
                        <button
                          type="submit"
                          disabled={isSubmitting || !formState.agreement}
                          className={`w-full py-3 px-6 rounded-xl flex items-center justify-center text-white font-medium
                            bg-gradient-to-r from-[#0167F3] to-[#399AFC] hover:opacity-90 transition-opacity
                            disabled:opacity-70 disabled:cursor-not-allowed`}
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
                              <FiArrowRight className="ml-2" />
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
