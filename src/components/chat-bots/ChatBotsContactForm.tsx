"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { useTheme } from "@/context/ThemeContext";
import { useState } from "react";

export default function ChatBotsContactForm() {
  const { isDark } = useTheme();
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

  // Обработчик отправки формы
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Имитация отправки формы с задержкой
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section id="chatbots-contact" className="py-16 md:py-24 relative">
      {/* Градиентный фон */}
      <div
        className={`absolute inset-0 ${
          isDark
            ? "bg-gradient-to-b from-black to-blue-950/20"
            : "bg-gradient-to-b from-white to-blue-50"
        } -z-10`}
      ></div>

      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-12"
        >
          <motion.div
            variants={itemVariants}
            className={`inline-block px-4 py-1 rounded-full text-sm mb-4 switch-box ${
              !isDark && "light-switch-box"
            }`}
          >
            Свяжитесь с нами
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-4"
          >
            Готовы{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0167F3] to-[#399AFC]">
              автоматизировать коммуникации
            </span>{" "}
            в вашем бизнесе?
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Оставьте заявку, и наши эксперты проведут бесплатную консультацию по
            возможностям и внедрению чат-ботов в вашу компанию.
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Левая колонка с контактами */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <motion.div
                variants={itemVariants}
                className={`p-6 rounded-xl h-full ${
                  isDark
                    ? "bg-gray-800/50 border border-gray-700"
                    : "bg-white border border-gray-200"
                }`}
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Контактная информация
                </h3>

                <div className="space-y-6">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                      Телефон
                    </p>
                    <a
                      href="tel:+7 (495) 123-45-67"
                      className="text-lg font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      +7 (495) 123-45-67
                    </a>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:info@neuropolis.ru"
                      className="text-lg font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      info@neuropolis.ru
                    </a>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                      Адрес
                    </p>
                    <p className="text-lg font-medium text-gray-900 dark:text-white">
                      г. Москва, ул. Тверская, д. 1
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                      Часы работы
                    </p>
                    <p className="text-lg font-medium text-gray-900 dark:text-white">
                      Пн-Пт: 9:00 - 18:00
                    </p>
                  </div>

                  <div className="pt-4">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                      Мы в социальных сетях
                    </p>
                    <div className="flex space-x-4">
                      <a
                        href="https://t.me/neuropolis"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          isDark
                            ? "bg-gray-700 hover:bg-gray-600"
                            : "bg-gray-100 hover:bg-gray-200"
                        } transition-colors`}
                      >
                        <span className="text-blue-600">Tg</span>
                      </a>
                      <a
                        href="https://vk.com/neuropolis"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          isDark
                            ? "bg-gray-700 hover:bg-gray-600"
                            : "bg-gray-100 hover:bg-gray-200"
                        } transition-colors`}
                      >
                        <span className="text-blue-600">VK</span>
                      </a>
                      <a
                        href="https://www.youtube.com/neuropolis"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          isDark
                            ? "bg-gray-700 hover:bg-gray-600"
                            : "bg-gray-100 hover:bg-gray-200"
                        } transition-colors`}
                      >
                        <span className="text-red-600">YT</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Правая колонка с формой */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <motion.div
                variants={itemVariants}
                className={`p-6 rounded-xl ${
                  isDark
                    ? "bg-gray-800/50 border border-gray-700"
                    : "bg-white border border-gray-200"
                }`}
              >
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        >
                          Имя*
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Ваше имя"
                          required
                          className={`w-full px-4 py-3 rounded-lg ${
                            isDark
                              ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                              : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500"
                          } border focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors`}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        >
                          Email*
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="your@email.com"
                          required
                          className={`w-full px-4 py-3 rounded-lg ${
                            isDark
                              ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                              : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500"
                          } border focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors`}
                        />
                      </div>
                    </div>

                    <div className="mb-6">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Телефон*
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="+7 (___) ___-__-__"
                        required
                        className={`w-full px-4 py-3 rounded-lg ${
                          isDark
                            ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                            : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500"
                        } border focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors`}
                      />
                    </div>

                    <div className="mb-6">
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Компания
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        placeholder="Название вашей компании"
                        className={`w-full px-4 py-3 rounded-lg ${
                          isDark
                            ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                            : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500"
                        } border focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors`}
                      />
                    </div>

                    <div className="mb-6">
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Сообщение
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="Опишите ваш запрос или задачу, которую планируете решить с помощью чат-бота"
                        className={`w-full px-4 py-3 rounded-lg ${
                          isDark
                            ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                            : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500"
                        } border focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors`}
                      ></textarea>
                    </div>

                    <div className="mb-6">
                      <label className="flex items-start">
                        <input type="checkbox" required className="mt-1 mr-2" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          Я согласен с{" "}
                          <a
                            href="/privacy-policy"
                            className="text-blue-600 dark:text-blue-400 hover:underline"
                          >
                            Политикой конфиденциальности
                          </a>{" "}
                          и обработкой персональных данных
                        </span>
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-3 px-6 rounded-xl text-white font-medium ${
                        isSubmitting
                          ? "bg-gray-500 cursor-not-allowed"
                          : "bg-gradient-to-r from-[#0167F3] to-[#399AFC] hover:shadow-lg transform transition-transform hover:-translate-y-1"
                      }`}
                    >
                      {isSubmitting ? "Отправка..." : "Отправить заявку"}
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-8 h-8 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                      Спасибо за обращение!
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Ваша заявка успешно отправлена. Наши специалисты свяжутся
                      с вами в ближайшее время для консультации.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Отправить новую заявку
                    </button>
                  </div>
                )}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
