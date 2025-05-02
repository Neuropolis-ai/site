"use client";
import { useTheme } from "@/context/ThemeContext";
import { supabase } from "@/lib/supabase";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, AlertTriangle, Mail, Phone, MapPin } from "lucide-react";
import "../../style/card-line.css";
import Container from "../ui/Container";
import InputMask from "react-input-mask";

const Contact = () => {
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
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const resetForm = () => {
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
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
      const text = `\n📩 Новая заявка:\n👤 Имя: ${
        formData.name
      }\n🏢 Компания: ${formData.company || "Не указана"}\n📞 Телефон: ${
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
      if (!formData.name || !formData.email) {
        console.error("Не заполнены обязательные поля");
        setError("Пожалуйста, заполните обязательные поля (имя и email)");
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
            company: formData.company || null,
            phone: formData.phone || null,
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

  // Стандартизированные классы для полей ввода
  const inputClasses = `block w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 
    focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 bg-white/80 dark:bg-gray-800/50 
    dark:text-white text-lg transition-colors duration-200 placeholder:text-gray-400 dark:placeholder:text-gray-500`;

  const labelClasses = `block text-base font-medium text-gray-700 dark:text-gray-300 mb-1.5`;

  return (
    <motion.section
      className="relative py-20 md:py-28 px-4 overflow-hidden"
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Стандартный фон */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900 -z-10"></div>
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-blue-400/20 dark:from-blue-500/10 dark:to-blue-700/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-indigo-200/20 to-indigo-400/20 dark:from-indigo-500/10 dark:to-indigo-700/10 rounded-full blur-3xl -z-10"></div>

      <Container>
        {/* Микроразметка Organization */}
        <OrganizationSchema />
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="inline-block px-5 py-1.5 rounded-full text-sm font-medium mb-6 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600 dark:from-blue-900/20 dark:to-indigo-900/20 dark:text-blue-400 border border-blue-100 dark:border-blue-800/20 shadow-sm">
            Контакты
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 dark:text-white mb-4">
            Готовы{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0167F3] to-[#399AFC]">
              автоматизировать
            </span>{" "}
            ваш бизнес <br className="hidden md:block" />с помощью ИИ?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            Получите бесплатную консультацию по внедрению ИИ-агентов в ваши
            бизнес-процессы. Наши эксперты помогут определить оптимальные
            сценарии применения.
          </p>
        </motion.div>

        <motion.div
          className="relative backdrop-blur-lg bg-white/60 dark:bg-gray-900/50 rounded-2xl p-8 md:p-10 max-w-4xl mx-auto
                     border border-white/20 dark:border-gray-700/30 shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {submitStatus.type === "success" ? (
            <motion.div
              className="text-center py-10 px-6"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 150, damping: 20 }}
            >
              {/* Стандартный контейнер иконки */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-[#0167F3] to-[#399AFC] text-white mb-6">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              {/* Стандартная типографика */}
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white mb-3">
                Спасибо за заявку!
              </h3>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto leading-relaxed">
                Мы свяжемся с вами в ближайшее время для обсуждения деталей и
                бесплатной консультации.
              </p>
              {/* Стандартная кнопка */}
              <motion.button
                onClick={() => setSubmitStatus({ type: null, message: "" })}
                className="inline-flex items-center justify-center px-6 py-3 border-0 text-lg font-semibold rounded-xl 
                           text-white bg-gradient-to-r from-[#0167F3] to-[#399AFC] hover:opacity-90 shadow-lg 
                           transition-opacity duration-300"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                Отправить новую заявку
              </motion.button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Используем общий containerVariants для stagger полей */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 gap-x-6 md:gap-x-8 gap-y-6"
              >
                {/* Поле Имя */}
                <motion.div variants={itemVariants}>
                  <label htmlFor="name" className={labelClasses}>
                    Имя*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                    placeholder="Иван Иванов"
                  />
                </motion.div>

                {/* Поле Email */}
                <motion.div variants={itemVariants}>
                  <label htmlFor="email" className={labelClasses}>
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                    placeholder="ivan.ivanov@example.com"
                  />
                </motion.div>

                {/* Поле Телефон */}
                <motion.div variants={itemVariants}>
                  <label htmlFor="phone" className={labelClasses}>
                    Телефон
                  </label>
                  <InputMask
                    mask="+7 (999) 999-99-99"
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="+7 (999) 123-45-67"
                  />
                </motion.div>

                {/* Поле Компания */}
                <motion.div variants={itemVariants}>
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
                    placeholder="ООО 'Ромашка'"
                  />
                </motion.div>

                {/* Поле Сообщение (на всю ширину) */}
                <motion.div variants={itemVariants} className="md:col-span-2">
                  <label htmlFor="message" className={labelClasses}>
                    Ваше сообщение
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="Расскажите кратко о вашей задаче или вопросе..."
                  />
                </motion.div>
              </motion.div>

              {/* Ошибка отправки */}
              {submitStatus.type === "error" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="p-4 rounded-xl flex items-center bg-red-50/70 text-red-700 dark:bg-red-900/20 dark:text-red-400 border border-red-200/70 dark:border-red-800/30"
                >
                  <div className="mr-3 flex-shrink-0">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <div>{submitStatus.message}</div>
                </motion.div>
              )}

              {/* Кнопка отправки */}
              <motion.div variants={itemVariants} className="text-center pt-2">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center px-8 py-3 border-0 text-lg font-semibold rounded-xl 
                    text-white bg-gradient-to-r from-[#0167F3] to-[#399AFC] shadow-lg transition-opacity duration-300 
                    hover:opacity-90"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
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
                    "Получить бесплатную консультацию"
                  )}
                </motion.button>
              </motion.div>
            </form>
          )}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
            <div className="flex items-center">
              <div className="flex-shrink-0 mr-4 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/40 dark:to-blue-800/40 flex items-center justify-center shadow-md">
                <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </h4>
                <a
                  href="mailto:agent@neuropolis.ai"
                  className="text-blue-600 dark:text-blue-400 text-lg hover:underline transition-all"
                >
                  agent@neuropolis.ai
                </a>
              </div>
            </div>

            <div className="flex items-center">
              <div className="flex-shrink-0 mr-4 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/40 dark:to-blue-800/40 flex items-center justify-center shadow-md">
                <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Телефон
                </h4>
                <a
                  href="tel:+79601078900"
                  className="text-blue-600 dark:text-blue-400 text-lg hover:underline transition-all"
                >
                  +7 960 107-89-00
                </a>
              </div>
            </div>

            <div className="flex items-center">
              <div className="flex-shrink-0 mr-4 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/40 dark:to-blue-800/40 flex items-center justify-center shadow-md">
                <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Адрес
                </h4>
                <p className="text-gray-800 dark:text-gray-200 text-lg">
                  Россия, Воронеж
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </motion.section>
  );
};

export default Contact;
