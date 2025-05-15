"use client";

import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import { BsArrowRight, BsCheck2Circle } from "react-icons/bs";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { supabase } from "@/lib/supabase";
import WorkflowAutomationContactForm from "@/components/workflow-automation/WorkflowAutomationContactForm";

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
      <motion.main
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex-grow bg-gradient-to-b from-blue-50/50 to-white dark:from-blue-950/10 dark:to-gray-950"
      >
        {/* Hero section */}
        <motion.section
          initial="hidden"
          animate="show"
          className="relative pt-32 md:pt-36 pb-16 md:pb-20 overflow-hidden"
        >
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
          {/* Вставляем компонент формы для автоматизации вместо стандартной формы */}
          <WorkflowAutomationContactForm
            title="Готовы начать проект вместе с нами?"
            subtitle="Оставьте заявку, и наши эксперты свяжутся с вами в течение одного рабочего дня для обсуждения вашего проекта и предоставления консультации."
            submitButtonText="Отправить заявку"
            showCompanyField={true}
            showPhoneField={true}
            showFeatures={true}
            showConfidentiality={true}
            useContainer={false}
            fullWidth={true}
            formId="workflow-contact-form"
            features={[
              {
                icon: <FiMail />,
                title: "Быстрый ответ",
                description:
                  "Мы реагируем на все запросы в течение 24 часов и готовы ответить на любые ваши вопросы.",
              },
              {
                icon: <FiPhone />,
                title: "Персональная консультация",
                description:
                  "Получите индивидуальную консультацию от наших экспертов по разработке и внедрению AI-решений.",
              },
              {
                icon: <FiMapPin />,
                title: "Гибкий подход",
                description:
                  "Мы адаптируем наши решения под ваши конкретные потребности и существующую инфраструктуру.",
              },
            ]}
            confidentialityText="Мы гарантируем конфиденциальность всей информации, которую вы предоставляете. Ваши данные надежно защищены и не будут переданы третьим лицам."
            onSubmitSuccess={(formData) => {
              console.log("Форма успешно отправлена:", formData);
              // Можно добавить дополнительную логику после успешной отправки
            }}
            customSubmit={async (formData) => {
              // Имитация отправки с задержкой
              await new Promise((resolve) => setTimeout(resolve, 1500));

              // Отправка данных в Supabase
              const { error: supabaseError } = await supabase
                .from("contacts")
                .insert([
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
                console.error("Ошибка сохранения в Supabase:", supabaseError);
                throw new Error(`Ошибка сохранения: ${supabaseError.message}`);
              }

              // Отправка в Telegram можно добавить при необходимости
              // Сейчас не добавляем, чтобы избежать дублирования сообщений
            }}
            backgroundColor={
              isDark ? "rgba(15, 23, 42, 0.5)" : "rgba(255, 255, 255, 0.7)"
            }
          />

          {/* Контактная информация */}
          <div className="container mx-auto px-4 max-w-screen-lg mt-24">
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12"
            >
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
                        className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center mr-4 shadow-sm ${
                          isDark
                            ? "bg-gradient-to-br from-blue-800/40 to-blue-900/40 text-blue-300 border border-blue-700/20"
                            : "bg-gradient-to-br from-blue-100 to-blue-200/70 text-blue-600 border border-blue-200/50"
                        }`}
                        style={{ aspectRatio: "1/1" }}
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
                        className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center mr-4 shadow-sm ${
                          isDark
                            ? "bg-gradient-to-br from-blue-800/40 to-blue-900/40 text-blue-300 border border-blue-700/20"
                            : "bg-gradient-to-br from-blue-100 to-blue-200/70 text-blue-600 border border-blue-200/50"
                        }`}
                        style={{ aspectRatio: "1/1" }}
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
                        className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center mr-4 shadow-sm ${
                          isDark
                            ? "bg-gradient-to-br from-blue-800/40 to-blue-900/40 text-blue-300 border border-blue-700/20"
                            : "bg-gradient-to-br from-blue-100 to-blue-200/70 text-blue-600 border border-blue-200/50"
                        }`}
                        style={{ aspectRatio: "1/1" }}
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
    </div>
  );
}
