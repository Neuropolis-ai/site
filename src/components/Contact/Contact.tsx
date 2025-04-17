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
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const resetForm = () => {
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

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
    try {
      // Hardcoded значения для режима production (для надежности)
      const BACKUP_BOT_TOKEN = "8020073798:AAHmXxi9XijA0z1k9JY2DzNpDI7j6ICqthI";
      const BACKUP_CHAT_ID = "-1002655068247";

      // Получаем значения из env или используем backup
      const botToken =
        process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN || BACKUP_BOT_TOKEN;
      const chatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID || BACKUP_CHAT_ID;

      console.log("Детальная диагностика для Telegram:");
      console.log(
        "- botToken: ",
        botToken ? "Установлен (длина: " + botToken.length + ")" : "Отсутствует"
      );
      console.log("- chatId: ", chatId || "Отсутствует");
      console.log(
        "- Используем токен из .env? ",
        botToken === process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN
      );
      console.log(
        "- Используем ID из .env? ",
        chatId === process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID
      );
      console.log(
        "- Используем резервный токен? ",
        botToken === BACKUP_BOT_TOKEN
      );
      console.log("- Используем резервный ID? ", chatId === BACKUP_CHAT_ID);

      if (!botToken || !chatId) {
        console.error(
          "Не настроены переменные окружения для Telegram и отсутствуют резервные значения"
        );
        return {
          ok: false,
          error: "Не настроены параметры Telegram-бота",
        };
      }

      // ВАЖНЫЙ ШАГ - проверяем валидность токена бота
      if (!botToken.includes(":") || botToken.length < 20) {
        console.error(
          "Токен бота имеет неверный формат:",
          botToken.substring(0, 5) + "***"
        );
        return {
          ok: false,
          error: "Неверный формат токена бота",
        };
      }

      // Форматируем сообщение для Telegram
      const text = `\n📩 Новая заявка:\n👤 Имя: ${formData.name}\n📞 Телефон: ${
        formData.phone
      }\n✉️ Email: ${formData.email || "Не указан"}\n💬 Сообщение: ${
        formData.message || "Не указано"
      }\n`;

      console.log("Отправка сообщения в Telegram...");
      console.log("Текст сообщения:", text);

      // Прямой запрос к API Telegram
      const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
      console.log(
        "Создаем запрос на URL:",
        url.replace(botToken, botToken.substring(0, 5) + "***")
      );

      // Подготовка данных для запроса
      const requestData = {
        chat_id: chatId,
        text: text,
      };
      console.log(
        "Отправляемые данные:",
        JSON.stringify(requestData).replace(chatId, "***")
      );

      // Добавляем таймаут для запроса
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 секунд таймаут

      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          body: JSON.stringify(requestData),
          signal: controller.signal,
        });

        // Очищаем таймаут, так как запрос завершен
        clearTimeout(timeoutId);

        console.log("Получен ответ со статусом:", response.status);
        console.log("Статус ответа:", response.statusText);

        // Получаем текст ответа для диагностики
        let responseText;
        try {
          responseText = await response.text();
          console.log("Ответ API в текстовом формате:", responseText);
        } catch (e) {
          console.error("Не удалось получить текст ответа:", e);
          return {
            ok: false,
            error: `Не удалось прочитать ответ: ${(e as Error).message}`,
          };
        }

        if (!response.ok) {
          const statusText = response.statusText;
          console.error(`Ошибка HTTP: ${response.status} ${statusText}`);
          console.error("Детали ошибки:", responseText);

          return {
            ok: false,
            error: `Ошибка HTTP: ${response.status} ${statusText}. Детали: ${responseText}`,
          };
        }

        // Парсим JSON-ответ от API Telegram
        let data;
        try {
          data = JSON.parse(responseText);
          console.log("Ответ от API Telegram (объект):", data);
        } catch (jsonError) {
          console.error("Ошибка при парсинге JSON-ответа:", jsonError);
          return {
            ok: false,
            error: `Невозможно прочитать ответ от API Telegram: ${responseText}`,
          };
        }

        // Проверяем успешность операции по данным от API
        if (!data.ok) {
          console.error("Ошибка API Telegram:", data);
          return {
            ok: false,
            error: `Ошибка API Telegram: ${
              data.description || "Неизвестная ошибка"
            }`,
          };
        }

        console.log("Сообщение успешно отправлено в Telegram!");
        return { ok: true, data };
      } catch (fetchError) {
        console.error("Ошибка при выполнении fetch-запроса:", fetchError);

        // Проверяем, была ли ошибка вызвана таймаутом
        if ((fetchError as Error).name === "AbortError") {
          return {
            ok: false,
            error: "Превышено время ожидания при отправке сообщения",
          };
        }

        return {
          ok: false,
          error: `Ошибка сети: ${(fetchError as Error).message}`,
        };
      }
    } catch (error) {
      console.error("Исключение при отправке в Telegram:", error);
      return {
        ok: false,
        error: `Исключение при отправке в Telegram: ${
          (error as Error).message || "Неизвестная ошибка"
        }`,
      };
    }
  };

  // Обработчик отправки формы
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Сбрасываем состояния ошибок и загрузки
    setError("");
    setIsLoading(true);
    setSuccessMessage("");
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      console.log("Начинаем обработку формы...");

      // Проверяем заполнение обязательных полей
      if (!formData.name || !formData.phone) {
        console.error("Не заполнены обязательные поля");
        setError("Пожалуйста, заполните обязательные поля (имя и телефон)");
        setIsLoading(false);
        setIsSubmitting(false);
        return;
      }

      console.log("Форма валидна, пытаемся сохранить данные в Supabase...");

      // Сохраняем контакт в Supabase
      const { data: contact, error: supabaseError } = await supabase
        .from("contacts")
        .insert([
          {
            name: formData.name,
            phone: formData.phone,
            email: formData.email || null,
            message: formData.message || null,
          },
        ])
        .select();

      // Обрабатываем ошибку Supabase, если она возникла
      if (supabaseError) {
        console.error("Ошибка при сохранении в Supabase:", supabaseError);
        setError(
          `Ошибка при сохранении: ${
            supabaseError.message || "Неизвестная ошибка"
          }`
        );
        setSubmitStatus({
          type: "error",
          message: `Ошибка при сохранении: ${
            supabaseError.message || "Неизвестная ошибка"
          }`,
        });
        setIsLoading(false);
        setIsSubmitting(false);
        return;
      }

      console.log("Данные успешно сохранены в Supabase:", contact);

      // Сначала пытаемся отправить через серверный API
      console.log("Пытаемся отправить через серверный API...");
      let telegramResult = await sendViaServerApi();

      // Если серверный API не сработал, пробуем клиентский метод
      if (!telegramResult.ok) {
        console.log("Серверный метод не сработал, пробуем клиентский...");
        console.log("Ошибка серверного метода:", telegramResult.error);
        telegramResult = await sendToTelegram();
      }

      // Проверяем, успешно ли отправлено сообщение в Telegram
      if (!telegramResult.ok) {
        console.error(
          "Сообщение сохранено в базе данных, но не отправлено в Telegram:",
          telegramResult.error
        );
        setError(
          `Ваше сообщение сохранено в базе данных, но не отправлено администратору. Пожалуйста, свяжитесь с нами по телефону.`
        );
        setSubmitStatus({
          type: "error",
          message:
            "Ваше сообщение сохранено в базе данных, но не отправлено администратору. Пожалуйста, свяжитесь с нами по телефону.",
        });
        setIsLoading(false);
        setIsSubmitting(false);
        return;
      }

      console.log("Сообщение успешно отправлено в Telegram:", telegramResult);

      // Очищаем форму и показываем сообщение об успехе
      resetForm();
      setSuccessMessage("Ваше сообщение успешно отправлено!");
      setSubmitStatus({
        type: "success",
        message:
          "Ваше сообщение успешно отправлено! Мы свяжемся с вами в ближайшее время.",
      });
    } catch (error) {
      console.error("Неожиданная ошибка при обработке формы:", error);
      setError(
        `Произошла ошибка: ${(error as Error).message || "Неизвестная ошибка"}`
      );
      setSubmitStatus({
        type: "error",
        message: `Произошла ошибка: ${
          (error as Error).message || "Неизвестная ошибка"
        }`,
      });
    } finally {
      setIsLoading(false);
      setIsSubmitting(false);
    }
  };

  // Функция для отправки сообщения через серверный API
  const sendViaServerApi = async () => {
    try {
      console.log("Отправка через серверный API...");

      const response = await fetch("/api/telegram", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("Статус ответа API:", response.status);

      // Получаем текст ответа для диагностики
      let responseText;
      try {
        responseText = await response.text();
        console.log("Ответ API (текст):", responseText);
      } catch (e) {
        console.error("Не удалось получить текст ответа:", e);
      }

      // Парсим JSON, если возможно
      let data;
      try {
        data = JSON.parse(responseText || "{}");
        console.log("Ответ API (объект):", data);
      } catch (e) {
        console.error("Ошибка парсинга JSON:", e);
        return {
          ok: false,
          error: `Ошибка обработки ответа: ${responseText || "Пустой ответ"}`,
        };
      }

      if (!response.ok) {
        console.error("Ошибка API:", data);
        return {
          ok: false,
          error: data.error || "Ошибка при отправке сообщения",
        };
      }

      console.log("Успешный ответ от API:", data);
      return { ok: true, data };
    } catch (error) {
      console.error("Ошибка при вызове API:", error);
      return {
        ok: false,
        error: `Ошибка при вызове API: ${(error as Error).message}`,
      };
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
