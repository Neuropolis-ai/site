"use client";
import { useTheme } from "@/context/ThemeContext";
import { supabase } from "@/lib/supabase";
import { useState } from "react";
import "../../style/card-line.css";
import Container from "../ui/Container";
import InputMask from "react-input-mask";

const Contact = () => {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Функция для отправки сообщения в Telegram
  const sendToTelegram = async () => {
    const botToken = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
    const chatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      console.error("Не настроены переменные окружения для Telegram");
      return {
        ok: false,
        error: "Не настроены переменные окружения для Telegram",
      };
    }

    const text = `\n📩 Новая заявка:\n👤 Имя: ${formData.name}\n📞 Телефон: ${formData.phone}\n✉️ Email: ${formData.email}\n💬 Сообщение: ${formData.message}\n    `;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: text,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        console.error("Ошибка отправки в Telegram:", data);
        return {
          ok: false,
          error: `Ошибка отправки в Telegram: ${
            data.description || "Неизвестная ошибка"
          }`,
        };
      }

      return { ok: true, data };
    } catch (error) {
      console.error("Ошибка при отправке в Telegram:", error);
      return {
        ok: false,
        error: "Ошибка при отправке в Telegram. Проверьте соединение.",
      };
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // Проверяем соединение с Supabase
      const { error: connectionError } = await supabase
        .from("contacts")
        .select("id")
        .limit(1);

      if (connectionError && connectionError.code !== "PGRST116") {
        // PGRST116 - это ошибка "результаты не найдены", что нормально
        console.error("Ошибка соединения с Supabase:", connectionError);
        throw new Error(
          `Не удалось подключиться к базе данных: ${connectionError.message}`
        );
      }

      // Сохраняем в Supabase
      const { error } = await supabase.from("contacts").insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          created_at: new Date().toISOString(),
        },
      ]);

      if (error) {
        console.error("Ошибка сохранения в Supabase:", error);
        // Если ошибка связана с отсутствием таблицы
        if (error.code === "42P01") {
          throw new Error(
            "Таблица 'contacts' не существует. Пожалуйста, настройте базу данных согласно инструкции."
          );
        }
        throw new Error(`Ошибка сохранения данных: ${error.message}`);
      }

      // Отправляем в Telegram
      const telegramResult = await sendToTelegram();

      // Даже если отправка в Telegram не удалась, мы всё равно считаем форму отправленной,
      // т.к. данные сохранены в базе
      if (!telegramResult.ok) {
        console.warn(
          "Предупреждение: данные сохранены, но уведомление не отправлено",
          telegramResult.error
        );
      }

      setSubmitStatus({
        type: "success",
        message: "Спасибо! Ваше сообщение успешно отправлено.",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error: any) {
      console.error("Error submitting form:", error);
      setSubmitStatus({
        type: "error",
        message:
          error.message ||
          "Произошла ошибка при отправке. Пожалуйста, попробуйте позже.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  function OrganizationSchema() {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Neuropolis.ai",
      url: "https://neuropolis.ai",
      logo: "https://neuropolis.ai/logo.png",
      address: {
        "@type": "PostalAddress",
        streetAddress: "ул. Примерная, д. 1",
        addressLocality: "Москва",
        postalCode: "123456",
        addressCountry: "RU",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+7-495-123-45-67",
          contactType: "customer support",
          areaServed: "RU",
          availableLanguage: ["Russian"],
        },
      ],
    };
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    );
  }

  return (
    <section className="py-20 bg-white dark:bg-black" id="contact">
      <Container>
        {/* Микроразметка Organization */}
        <OrganizationSchema />
        <div className="text-center mb-10">
          <div
            className={`inline-block px-4 py-1 rounded-full text-sm mb-4 switch-box ${
              !isDark && "light-switch-box"
            }`}
          >
            Контакты
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
            Свяжитесь с нами
          </h2>
          <p className="dark:text-[#919191] text-gray-600 max-w-2xl mx-auto max-[425px]:text-[14px]">
            Есть вопросы о наших услугах или вы готовы преобразовать свой бизнес
            с помощью ИИ? Мы здесь, чтобы помочь!
          </p>
        </div>
        <div
          className={`p-[20px] border max-[425px]:p-[10px] ${
            isDark
              ? "contact-card border-[#00185e]!important"
              : "bg-gray-50 border-gray-200"
          }`}
        >
          <div className="flex max-[1024px]:flex-col max-[1024px]:flex-col-reverse gap-10 max-[425px]:gap-[20px]">
            <div className="md:w-1/2">
              {submitStatus.type && (
                <div
                  className={`mb-4 p-3 rounded-lg ${
                    submitStatus.type === "success"
                      ? "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                      : "bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}
              <form onSubmit={handleSubmit} className="rounded-xl">
                <div className="flex w-full gap-[10px] max-[1024px]:flex-col mb-3">
                  <div className="w-1/2 max-[1024px]:w-full">
                    <input
                      type="text"
                      name="name"
                      placeholder="Имя"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full p-3 rounded-[10px] outline-none max-[425px]:text-[12px] ${
                        isDark
                          ? "bg-[#060811] border-[#262626] text-white"
                          : "bg-white border-gray-300 text-gray-800"
                      } border`}
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="w-1/2 max-[1024px]:w-full">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full p-3 rounded-[10px] outline-none max-[425px]:text-[12px] ${
                        isDark
                          ? "bg-[#060811] border-[#262626] text-white"
                          : "bg-white border-gray-300 text-gray-800"
                      } border`}
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <InputMask
                    mask="+7 (999) 999-99-99"
                    type="tel"
                    name="phone"
                    placeholder="Телефон"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className={`w-full p-3 rounded-[10px] outline-none max-[425px]:text-[12px] ${
                      isDark
                        ? "bg-[#060811] border-[#262626] text-white"
                        : "bg-white border-gray-300 text-gray-800"
                    } border`}
                    disabled={isSubmitting}
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    name="message"
                    placeholder="Сообщение"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className={`w-full p-3 rounded-[10px] outline-none max-[425px]:text-[12px] ${
                      isDark
                        ? "bg-[#060811] border-[#262626] text-white"
                        : "bg-white border-gray-300 text-gray-800"
                    } border`}
                    disabled={isSubmitting}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className={`w-full bg-[#153aa1] text-white py-[13px] px-6 rounded-[10px] hover:bg-[#102a71] transition-colors max-[425px]:text-[12px] ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Отправка..." : "Отправить сообщение"}
                </button>
              </form>
            </div>

            <div
              className={`md:w-1/2 p-8 max-[425px]:p-[15px] rounded-xl border ${
                isDark
                  ? "bg-[#05060a] border-[#040b23]"
                  : "bg-white border-gray-200"
              }`}
            >
              <div className="mb-8">
                <h3
                  className={`${
                    isDark ? "text-[#919191]" : "text-gray-500"
                  } mb-2`}
                >
                  Email:
                </h3>
                <a
                  href="mailto:agent@neuropolis.ai"
                  className={`${
                    isDark ? "text-white" : "text-gray-800"
                  } text-xl font-medium max-[1024px]:text-base`}
                >
                  agent@neuropolis.ai
                </a>
              </div>

              <div className="mb-8">
                <h3
                  className={`${
                    isDark ? "text-[#919191]" : "text-gray-500"
                  } mb-2`}
                >
                  Телефон:
                </h3>
                <a
                  href="tel:+79601078900"
                  className={`${
                    isDark ? "text-white" : "text-gray-800"
                  } text-xl font-medium max-[1024px]:text-base`}
                >
                  +7 960 107-89-00
                </a>
              </div>

              <div className="mb-8">
                <h3
                  className={`${
                    isDark ? "text-[#919191]" : "text-gray-500"
                  } mb-2`}
                >
                  Адрес:
                </h3>
                <p
                  className={`${
                    isDark ? "text-white" : "text-gray-800"
                  } text-xl font-medium max-[1024px]:text-base`}
                >
                  Россия, Воронеж
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
