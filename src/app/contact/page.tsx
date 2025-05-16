"use client";

import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";
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
        {/* Основной раздел страницы */}
        <div className="relative py-24 md:py-32 overflow-hidden">
          {/* Используем компонент WorkflowAutomationContactForm */}
          <WorkflowAutomationContactForm
            title="Начните внедрять ИИ уже сегодня"
            subtitle="Получите бесплатную консультацию по внедрению ИИ-решений в ваши бизнес-процессы. Наши эксперты помогут определить оптимальные сценарии применения."
            submitButtonText="Получить консультацию"
            showCompanyField={true}
            showPhoneField={true}
            showFeatures={true}
            showConfidentiality={true}
            useContainer={false}
            fullWidth={true}
            formId="contact-form"
            features={[
              {
                icon: <FiMail />,
                title: "ИИ-решения под ключ",
                description:
                  "Разработаем и внедрим специализированных ИИ-агентов, учитывающих уникальные потребности вашего бизнеса.",
              },
              {
                icon: <FiPhone />,
                title: "Комплексная автоматизация",
                description:
                  "Автоматизируем рутинные задачи, обработку данных и бизнес-процессы, освобождая время для ключевых задач.",
              },
              {
                icon: <FiMapPin />,
                title: "Масштабируемость",
                description:
                  "Создаем решения, которые растут вместе с вашей компанией и адаптируются к меняющимся требованиям бизнеса.",
              },
            ]}
            confidentialityText="Мы ценим ваше доверие и гарантируем полную конфиденциальность всей информации, которую вы предоставляете нам. Ваши данные защищены в соответствии с законодательством."
            onSubmitSuccess={(formData) => {
              console.log("Форма успешно отправлена:", formData);
            }}
            customSubmit={async (formData) => {
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

              // Отправка в Telegram
              try {
                const BACKUP_BOT_TOKEN = "8020073798:AAHmXxi9XijA0z1k9JY2DzNpDI7j6ICqthI";
                const BACKUP_CHAT_ID = "-1002655068247";

                const botToken =
                  process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN || BACKUP_BOT_TOKEN;
                const chatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID || BACKUP_CHAT_ID;

                if (!botToken || !chatId) {
                  console.error("Не настроены параметры Telegram-бота");
                  return;
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

                const response = await fetch(url, {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                  },
                  body: JSON.stringify(requestData),
                });

                if (!response.ok) {
                  console.error("Ошибка отправки в Telegram:", response.statusText);
                }
              } catch (error) {
                console.error("Ошибка при отправке в Telegram:", error);
              }
            }}
            backgroundColor={
              isDark ? "rgba(15, 23, 42, 0.5)" : "rgba(255, 255, 255, 0.7)"
            }
            privacyPolicyUrl="/privacy-policy"
            requirePhoneField={true}
          />
        </div>
      </motion.main>
    </div>
  );
}
