"use client";
import { useTheme } from "@/context/ThemeContext";
import { supabase } from "@/lib/supabase";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, AlertTriangle, Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import Container from "../ui/Container";
import InputMask from "react-input-mask";
import { Heading } from "../ui/Heading";
import Badge from "../ui/Badge";
import Subheading from "../ui/subheading";

const ChatBotsContactEnhanced = () => {
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
      const text = `\n📩 Новая заявка с сайта (чат-боты):\n👤 Имя: ${
        formData.name
      }\n🏢 Компания: ${formData.company || "Не указана"}\n📞 Телефон: ${
        formData.phone
      }\n✉️ Email: ${formData.email || "Не указан"}\n💬 Сообщение: ${
        formData.message || "Не указано"
      }\n`;

      // Прямой запрос к API Telegram
      const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

      // Подготовка данных для запроса
      const requestData = {
        chat_id: chatId,
        text: text,
      };

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

        // Получаем текст ответа для диагностики
        let responseText;
        try {
          responseText = await response.text();
        } catch (e) {
          return {
            ok: false,
            error: `Не удалось прочитать ответ: ${(e as Error).message}`,
          };
        }

        if (!response.ok) {
          const statusText = response.statusText;
          return {
            ok: false,
            error: `Ошибка HTTP: ${response.status} ${statusText}. Детали: ${responseText}`,
          };
        }

        // Парсим JSON-ответ от API Telegram
        let data;
        try {
          data = JSON.parse(responseText);
        } catch (jsonError) {
          return {
            ok: false,
            error: `Невозможно прочитать ответ от API Telegram: ${responseText}`,
          };
        }

        // Проверяем успешность операции по данным от API
        if (!data.ok) {
          return {
            ok: false,
            error: `Ошибка API Telegram: ${
              data.description || "Неизвестная ошибка"
            }`,
          };
        }

        return { ok: true, data };
      } catch (fetchError) {
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
      // Проверяем заполнение обязательных полей
      if (!formData.name || !formData.email) {
        setError("Пожалуйста, заполните обязательные поля (имя и email)");
        setIsLoading(false);
        setIsSubmitting(false);
        return;
      }

      // Сохраняем заявку в Supabase
      const { error: supabaseError } = await supabase.from("contacts").insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: formData.message,
          source: "chat-bots-page",
        },
      ]);

      if (supabaseError) {
        throw new Error(
          `Ошибка записи в базу данных: ${supabaseError.message}`
        );
      }

      // Пытаемся отправить в Telegram
      const telegramResult = await sendToTelegram();

      if (!telegramResult.ok) {
        console.warn(
          "Предупреждение: сохранено в базу данных, но не удалось отправить в Telegram:",
          telegramResult.error
        );
      }

      // Форма успешно отправлена
      setSuccessMessage(
        "Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время."
      );
      setSubmitStatus({
        type: "success",
        message:
          "Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.",
      });
      resetForm();
    } catch (error) {
      setError(`Произошла ошибка: ${(error as Error).message}`);
      setSubmitStatus({
        type: "error",
        message: `Произошла ошибка: ${(error as Error).message}`,
      });
    } finally {
      setIsLoading(false);
      setIsSubmitting(false);
    }
  };

  // Анимации для элементов формы
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
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.section
      id="contact"
      className="py-24 md:py-32 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      {/* Современный градиентный фон */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900 -z-10"></div>

      {/* Декоративные элементы */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-200/20 to-blue-400/20 dark:from-blue-500/10 dark:to-blue-700/10 rounded-full blur-3xl -z-5"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-indigo-200/20 to-indigo-400/20 dark:from-indigo-500/10 dark:to-indigo-700/10 rounded-full blur-3xl -z-5"></div>

      <Container>
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <Badge>Связаться с нами</Badge>
          <Heading level={2} align="center" className="mb-6">
            Готовы{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-light">
              автоматизировать коммуникации
            </span>{" "}
            в вашем бизнесе?
          </Heading>
          <Subheading align="center" className="max-w-3xl mx-auto">
            Получите бесплатную консультацию по внедрению чат-ботов в ваши бизнес-процессы. 
            Наши эксперты помогут определить оптимальные сценарии применения.
          </Subheading>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Контактная информация */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-1 bg-white/60 dark:bg-gray-900/50 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-white/20 dark:border-gray-800/30"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-8">
              Контактная информация
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-primary to-primary-light text-white shadow-md">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Телефон</p>
                  <a 
                    href="tel:+74951234567" 
                    className="text-lg font-medium text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary-light transition-colors"
                  >
                    +7 (495) 123-45-67
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-primary to-primary-light text-white shadow-md">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Email</p>
                  <a 
                    href="mailto:info@neuropolis.ai" 
                    className="text-lg font-medium text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary-light transition-colors"
                  >
                    info@neuropolis.ai
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-primary to-primary-light text-white shadow-md">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Адрес</p>
                  <p className="text-lg font-medium text-gray-900 dark:text-white">
                    г. Москва, ул. Тверская, д. 1
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700/50">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Мы в мессенджерах
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://t.me/neuropolis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-200 dark:border-gray-700 p-3 rounded-full flex items-center justify-center overflow-hidden hover:shadow-md transition-all duration-300"
                >
                  <MessageSquare className="w-5 h-5 text-primary dark:text-primary-light transition-transform group-hover:scale-110" />
                </a>
                <a 
                  href="https://wa.me/79124567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-200 dark:border-gray-700 p-3 rounded-full flex items-center justify-center overflow-hidden hover:shadow-md transition-all duration-300"
                >
                  <MessageSquare className="w-5 h-5 text-primary dark:text-primary-light transition-transform group-hover:scale-110" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Форма обратной связи */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-2 bg-white/60 dark:bg-gray-900/50 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-white/20 dark:border-gray-800/30"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-8">
              Отправить сообщение
            </h3>
            
            <AnimatePresence mode="wait">
              {submitStatus.type === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800/30 rounded-xl p-6 mb-8 text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-800/30 rounded-full mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Сообщение отправлено!
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {submitStatus.message}
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {submitStatus.type === "error" && (
                    <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/30 rounded-xl p-4 mb-6 flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                      <p className="text-red-600 dark:text-red-400">
                        {submitStatus.message}
                      </p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Имя *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="block w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary"
                        placeholder="Ваше имя"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="block w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary"
                        placeholder="email@example.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Телефон
                      </label>
                      <InputMask
                        id="phone"
                        name="phone"
                        mask="+7 (999) 999-99-99"
                        value={formData.phone}
                        onChange={handleChange}
                        className="block w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary"
                        placeholder="+7 (___) ___-__-__"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Компания
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        className="block w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary"
                        placeholder="Название компании"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Сообщение
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="block w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary resize-none"
                      placeholder="Опишите ваш запрос или задайте вопрос..."
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-primary to-primary-light text-white font-semibold py-3.5 px-7 rounded-lg flex items-center justify-center overflow-hidden hover:shadow-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Отправка...
                        </span>
                      ) : (
                        "Отправить заявку"
                      )}
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </Container>
    </motion.section>
  );
};

export default ChatBotsContactEnhanced; 