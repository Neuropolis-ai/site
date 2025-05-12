"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import InputMask from "react-input-mask";
import { supabase } from "@/lib/supabase";


export default function ChatBotsContactCTA() {
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
  }>({
    type: null,
    message: "",
  });
  const [privacyAccepted, setPrivacyAccepted] = useState(false);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
    setPrivacyAccepted(false);
  };


  const sendToTelegram = async () => {
    try {
      const botToken = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN || "8020073798:AAHmXxi9XijA0z1k9JY2DzNpDI7j6ICqthI";
      const chatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID || "-1002655068247";
      
      const text = `\n📩 Новая заявка с сайта (чат-боты CTA):\n👤 Имя: ${formData.name}\n🏢 Компания: ${formData.company || "Не указана"}\n📞 Телефон: ${formData.phone}\n✉️ Email: ${formData.email || "Не указан"}\n Сообщение: ${formData.message || "Не указано"}\n`;
      
      const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
        }),
      });

      if (!response.ok) {
        return { ok: false, error: `Ошибка HTTP: ${response.status}` };
      }

      return { ok: true };
    } catch (error) {
      return { ok: false, error: `Ошибка: ${error instanceof Error ? error.message : String(error)}` };
    }
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!privacyAccepted) {
      setSubmitStatus({
        type: "error",
        message: "Необходимо согласиться с политикой конфиденциальности",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      if (!formData.name || !formData.email) {
        throw new Error("Пожалуйста, заполните обязательные поля (имя и email)");
      }

      const { error: supabaseError } = await supabase.from("contacts").insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: formData.message,
          source: "chat-bots-cta",
        },
      ]);

      if (supabaseError) {
        throw new Error(`Ошибка записи в базу данных: ${supabaseError.message}`);
      }

      const telegramResult = await sendToTelegram();

      setSubmitStatus({
        type: "success",
        message: "Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.",
      });
      resetForm();
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: `Произошла ошибка: ${error instanceof Error ? error.message : String(error)}`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <section className="py-16 bg-gray-50 dark:bg-black">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Левая колонка */}
          <div className="w-full md:w-1/2">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="bg-blue-100 text-blue-600 text-sm py-1 px-3 rounded-full">
                  Связаться с нами
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">
                Начните <span className="text-blue-500">цифровую</span> трансформацию сегодня
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg">
                Получите бесплатную консультацию по внедрению ИИ-агентов в ваши бизнес-процессы. Наши эксперты помогут определить оптимальные сценарии применения.
              </p>

              <div className="space-y-6 mt-12">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">ИИ-решения под ключ</h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">
                      Разрабатываем и внедрим специализированных ИИ-агентов, учитывающих уникальные потребности вашего бизнеса.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M8 2v4"></path>
                      <path d="M16 2v4"></path>
                      <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                      <path d="M3 10h18"></path>
                      <path d="m8 14 2 2 4-4"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Комплексная автоматизация</h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">
                      Автоматизируем рутинные задачи, обработку данных и бизнес-процессы, освобождая время для ключевых задач.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 16c1.2-1.2 2-2.8 2-4.5 0-3.6-3-6.5-6.5-6.5S5 7.9 5 11.5c0 1.7.8 3.3 2 4.5"></path>
                      <path d="M4 17c.9-1.2 2.1-2 3.5-2 2.1 0 3.9 1.6 4.5 3.5"></path>
                      <path d="M12 17c.6-1.9 2.4-3.5 4.5-3.5 1.4 0 2.6.8 3.5 2"></path>
                      <path d="M12 19h.01"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Масштабируемость</h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">
                      Создаем решения, которые растут вместе с вашей компанией и адаптируются к меняющимся требованиям бизнеса.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 border border-blue-100 dark:border-blue-900/50 bg-white/80 dark:bg-gray-900/80 rounded-lg backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold">Гарантия конфиденциальности</h3>
                </div>
                <p className="mt-3 text-gray-600 dark:text-gray-400">
                  Мы ценим ваше доверие и гарантируем полную конфиденциальность всей информации, которую вы предоставляете нам. Ваши данные защищены в соответствии с законодательством.
                </p>
              </div>
            </div>
          </div>

          {/* Правая колонка - форма */}
          <div className="w-full md:w-1/2">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-sm">
              <div className="mb-6 flex items-center">
                <svg className="w-6 h-6 text-blue-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <h3 className="text-xl font-semibold">Заполните форму</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Ваше имя <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Иван Иванов"
                    required
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="ivan@company.com"
                    required
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Телефон
                    </label>
                    <InputMask
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      mask="+7 (999) 999-99-99"
                      placeholder="+7 (999) 123-45-67"
                      className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Компания
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="ООО Компания"
                      className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Расскажите о вашем проекте или задайте вопрос"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                  />
                </div>

                <div className="flex items-start">
                  <input
                    id="privacy"
                    type="checkbox"
                    checked={privacyAccepted}
                    onChange={(e) => setPrivacyAccepted(e.target.checked)}
                    className="w-4 h-4 mt-1 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="privacy" className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                    Я согласен с <a href="/privacy" className="text-blue-500 hover:underline">политикой конфиденциальности</a> и обработкой персональных данных
                  </label>
                </div>

                {submitStatus.type && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-3 rounded-lg ${
                      submitStatus.type === "success" 
                        ? "bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400" 
                        : "bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                    }`}
                  >
                    {submitStatus.message}
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Отправка...
                    </>
                  ) : (
                    <>
                      Получить консультацию 
                      <svg className="ml-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
