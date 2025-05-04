"use client";

import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import { BsArrowRight, BsCheck2Circle } from "react-icons/bs";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { supabase } from "@/lib/supabase";

export default function ContactPage() {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
  };

  const sendToTelegram = async () => {
    try {
      const BACKUP_BOT_TOKEN = "8020073798:AAHmXxi9XijA0z1k9JY2DzNpDI7j6ICqthI";
      const BACKUP_CHAT_ID = "-1002655068247";

      const botToken =
        process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN || BACKUP_BOT_TOKEN;
      const chatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID || BACKUP_CHAT_ID;

      if (!botToken || !chatId) {
        console.error(
          "Не настроены переменные окружения для Telegram и отсутствуют резервные значения"
        );
        return {
          ok: false,
          error: "Не настроены параметры Telegram-бота",
        };
      }

      const text = `\n📩 Новая заявка (Страница Контактов):\n👤 Имя: ${
        formData.name
      }\n🏢 Компания: ${formData.company || "Не указана"}\n📞 Телефон: ${
        formData.phone || "Не указан"
      }\n✉️ Email: ${formData.email}\n💬 Сообщение: ${
        formData.message || "Не указано"
      }\n`;

      const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
      const requestData = {
        chat_id: chatId,
        text: text,
        parse_mode: "Markdown",
      };

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);

      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(requestData),
          signal: controller.signal,
        });

        clearTimeout(timeoutId);

        const responseText = await response.text();

        if (!response.ok) {
          console.error("Telegram API Error Response:", responseText);
          return {
            ok: false,
            error: `Ошибка HTTP: ${response.status} ${response.statusText}. Ответ: ${responseText}`,
          };
        }

        try {
          const data = JSON.parse(responseText);
          if (!data.ok) {
            return {
              ok: false,
              error: `Ошибка API Telegram: ${
                data.description || "Неизвестная ошибка"
              }`,
            };
          }
          return { ok: true, data };
        } catch (parseError) {
          console.error("Error parsing Telegram response:", parseError);
          return {
            ok: false,
            error: `Ошибка парсинга ответа Telegram: ${
              (parseError as Error).message
            }`,
          };
        }
      } catch (fetchError) {
        clearTimeout(timeoutId);
        if ((fetchError as Error).name === "AbortError") {
          return {
            ok: false,
            error: "Превышено время ожидания при отправке сообщения в Telegram",
          };
        }
        return {
          ok: false,
          error: `Сетевая ошибка при отправке в Telegram: ${
            (fetchError as Error).message
          }`,
        };
      }
    } catch (error) {
      return {
        ok: false,
        error: `Непредвиденная ошибка при отправке в Telegram: ${
          (error as Error).message
        }`,
      };
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      if (!formData.name || !formData.email) {
        setSubmitStatus({
          type: "error",
          message: "Пожалуйста, заполните обязательные поля (имя и email).",
        });
        setIsSubmitting(false);
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        setSubmitStatus({
          type: "error",
          message: "Пожалуйста, введите корректный email адрес.",
        });
        setIsSubmitting(false);
        return;
      }

      const { error: supabaseError } = await supabase.from("contacts").insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone || null,
          company: formData.company || null,
          message: formData.message || null,
          created_at: new Date().toISOString(),
        },
      ]);

      if (supabaseError) {
        console.error("Supabase insert error:", supabaseError);
        throw new Error(
          `Ошибка сохранения в базе данных: ${supabaseError.message}`
        );
      }

      const telegramResult = await sendToTelegram();
      if (!telegramResult.ok) {
        console.error("Ошибка отправки в Telegram:", telegramResult.error);
      }

      setSubmitStatus({
        type: "success",
        message:
          "Ваше сообщение успешно отправлено! Мы свяжемся с вами в ближайшее время.",
      });
      resetForm();
    } catch (error) {
      console.error("Ошибка при отправке формы:", error);
      setSubmitStatus({
        type: "error",
        message: `Произошла ошибка при отправке: ${
          (error as Error).message
        }. Попробуйте еще раз позже.`,
      });
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

  // Стандартизированные классы для полей ввода
  const inputClasses = `block w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 
    focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 bg-white dark:bg-gray-800/50 
    dark:text-white text-lg transition-colors duration-200 placeholder:text-gray-400 dark:placeholder:text-gray-500`;

  const labelClasses = `block text-base font-medium text-gray-700 dark:text-gray-300 mb-1.5`;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <motion.main
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex-grow"
      >
        {/* Hero section */}
        <motion.section
          initial="hidden"
          animate="show"
          className="relative pt-32 md:pt-36 pb-16 md:pb-20 overflow-hidden"
        >
          <div className="absolute inset-0 z-0 opacity-40 dark:opacity-20">
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-blue-400/20 dark:from-blue-500/10 dark:to-blue-700/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-indigo-200/20 to-indigo-400/20 dark:from-indigo-500/10 dark:to-indigo-700/10 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 max-w-screen-lg relative z-10">
            <motion.header
              variants={itemVariants}
              className="text-center mb-16"
            >
              <h1
                className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 ${
                  isDark ? "text-white" : "text-black"
                }`}
              >
                Свяжитесь с нами
              </h1>
              <p
                className={`text-xl md:text-2xl max-w-3xl mx-auto ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Готовы обсудить ваши идеи и проекты? Заполните форму, и мы
                свяжемся с вами в ближайшее время.
              </p>
            </motion.header>
          </div>
        </motion.section>

        {/* Contact section */}
        <div className="relative pb-20 overflow-hidden">
          <div className="absolute inset-0 -z-10 opacity-50 dark:opacity-100">
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-blue-200/15 to-blue-400/15 dark:from-blue-500/10 dark:to-blue-700/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-indigo-200/15 to-indigo-400/15 dark:from-indigo-500/10 dark:to-indigo-700/10 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 max-w-screen-lg">
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12"
            >
              {/* Колонка с формой обратной связи */}
              <motion.div variants={itemVariants} className="lg:col-span-12">
                <div className="rounded-2xl p-8 backdrop-blur-lg relative overflow-hidden">
                  <div className="absolute inset-0 border border-white/20 dark:border-gray-700/30 rounded-2xl -z-10"></div>
                  <div
                    className={`absolute inset-0 -z-10 ${
                      isDark ? "bg-gray-900/50" : "bg-white/60"
                    } rounded-2xl`}
                  ></div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 dark:from-blue-600/10 dark:to-indigo-600/10 rounded-full blur-xl -z-10"></div>
                  <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-r from-indigo-400/10 to-blue-400/10 dark:from-indigo-600/10 dark:to-blue-600/10 rounded-full blur-xl -z-10"></div>

                  <h2
                    className={`text-2xl font-bold mb-6 ${
                      isDark ? "text-white" : "text-gray-800"
                    }`}
                  >
                    Отправить сообщение
                  </h2>

                  {/* Статус отправки - ошибка */}
                  {submitStatus.type === "error" && (
                    <div className="mb-6 p-4 rounded-lg flex items-start bg-red-100 text-red-800 dark:bg-red-800/20 dark:text-red-300">
                      <svg
                        className="flex-shrink-0 w-5 h-5 mt-0.5 mr-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{submitStatus.message}</span>
                    </div>
                  )}

                  {/* Статус отправки - успех */}
                  {submitStatus.type === "success" ? (
                    <motion.div
                      className="text-center py-10 px-6"
                      initial="hidden"
                      animate="visible"
                      variants={successAnimation}
                    >
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-[#0167F3] to-[#399AFC] text-white mb-6">
                        <BsCheck2Circle className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white mb-3">
                        Спасибо за заявку!
                      </h3>
                      <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto leading-relaxed">
                        {submitStatus.message}
                      </p>
                      <motion.button
                        onClick={() =>
                          setSubmitStatus({ type: null, message: "" })
                        }
                        className="inline-flex items-center justify-center px-6 py-3 border-0 text-lg font-semibold rounded-xl 
                                text-white bg-gradient-to-r from-[#0167F3] to-[#399AFC] hover:opacity-90 shadow-lg 
                                transition-opacity duration-300"
                      >
                        Отправить новую заявку
                      </motion.button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className={labelClasses}>
                            Имя <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className={inputClasses}
                            placeholder="Ваше имя"
                          />
                        </div>

                        <div>
                          <label htmlFor="email" className={labelClasses}>
                            Email <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className={inputClasses}
                            placeholder="Ваш email"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
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
                            placeholder="+7 (___) ___-__-__"
                          />
                        </div>

                        <div>
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
                            placeholder="Название компании"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className={labelClasses}>
                          Сообщение
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          className={inputClasses}
                          placeholder="Опишите ваш запрос или проект..."
                        />
                      </div>

                      <div className="text-center">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className={`inline-flex items-center justify-center px-8 py-4 rounded-xl
                            bg-gradient-to-r from-[#0167F3] to-[#399AFC] text-white font-semibold text-xl
                            hover:opacity-90 transition-all duration-300 hover:-translate-y-0.5
                            shadow-lg ${
                              isSubmitting
                                ? "opacity-70 cursor-not-allowed"
                                : ""
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
                            <>
                              Отправить сообщение
                              <BsArrowRight className="ml-2 w-6 h-6" />
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </motion.div>

              {/* Колонка с контактной информацией */}
              <motion.div variants={itemVariants} className="lg:col-span-12">
                <div className="rounded-2xl p-8 backdrop-blur-lg relative overflow-hidden">
                  <div className="absolute inset-0 border border-white/20 dark:border-gray-700/30 rounded-2xl -z-10"></div>
                  <div
                    className={`absolute inset-0 -z-10 ${
                      isDark ? "bg-gray-900/50" : "bg-white/60"
                    } rounded-2xl`}
                  ></div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 dark:from-blue-600/10 dark:to-indigo-600/10 rounded-full blur-xl -z-10"></div>
                  <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-r from-indigo-400/10 to-blue-400/10 dark:from-indigo-600/10 dark:to-blue-600/10 rounded-full blur-xl -z-10"></div>

                  <h2
                    className={`text-2xl font-bold mb-6 ${
                      isDark ? "text-white" : "text-gray-800"
                    }`}
                  >
                    Контактная информация
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex items-start">
                      <div
                        className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center mr-4 shadow-sm ${
                          isDark
                            ? "bg-gradient-to-br from-blue-800/40 to-blue-900/40 text-blue-300 border border-blue-700/20"
                            : "bg-gradient-to-br from-blue-100 to-blue-200/70 text-blue-600 border border-blue-200/50"
                        }`}
                      >
                        <FiMail className="w-6 h-6" />
                      </div>
                      <div>
                        <h3
                          className={`text-lg font-semibold mb-1 ${
                            isDark ? "text-gray-200" : "text-gray-800"
                          }`}
                        >
                          Email
                        </h3>
                        <a
                          href="mailto:info@neuropolis.ai"
                          className={`hover:underline ${
                            isDark ? "text-blue-400" : "text-blue-600"
                          }`}
                        >
                          info@neuropolis.ai
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div
                        className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center mr-4 shadow-sm ${
                          isDark
                            ? "bg-gradient-to-br from-blue-800/40 to-blue-900/40 text-blue-300 border border-blue-700/20"
                            : "bg-gradient-to-br from-blue-100 to-blue-200/70 text-blue-600 border border-blue-200/50"
                        }`}
                      >
                        <FiPhone className="w-6 h-6" />
                      </div>
                      <div>
                        <h3
                          className={`text-lg font-semibold mb-1 ${
                            isDark ? "text-gray-200" : "text-gray-800"
                          }`}
                        >
                          Телефон
                        </h3>
                        <a
                          href="tel:+79991234567"
                          className={`hover:underline ${
                            isDark ? "text-blue-400" : "text-blue-600"
                          }`}
                        >
                          +7 (999) 123-45-67
                        </a>
                        <p
                          className={`text-sm ${
                            isDark ? "text-gray-400" : "text-gray-500"
                          } mt-1`}
                        >
                          Пн-Пт, 10:00 - 19:00 МСК
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div
                        className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center mr-4 shadow-sm ${
                          isDark
                            ? "bg-gradient-to-br from-blue-800/40 to-blue-900/40 text-blue-300 border border-blue-700/20"
                            : "bg-gradient-to-br from-blue-100 to-blue-200/70 text-blue-600 border border-blue-200/50"
                        }`}
                      >
                        <FiMapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <h3
                          className={`text-lg font-semibold mb-1 ${
                            isDark ? "text-gray-200" : "text-gray-800"
                          }`}
                        >
                          Адрес
                        </h3>
                        <p
                          className={isDark ? "text-gray-300" : "text-gray-600"}
                        >
                          Москва, Инновационный центр Сколково
                        </p>
                        <a
                          href="#"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`text-sm inline-flex items-center ${
                            isDark ? "text-blue-400" : "text-blue-600"
                          } hover:underline mt-1`}
                        >
                          Посмотреть на карте{" "}
                          <BsArrowRight className="ml-1 h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.main>

      <Footer />
    </div>
  );
}
