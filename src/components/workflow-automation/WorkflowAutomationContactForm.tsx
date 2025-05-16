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
} from "react-icons/fi";
import { Heading } from "@/components/ui/heading";
import Subheading from "@/components/ui/subheading";
import { motion } from "framer-motion";

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

export interface ContactFormProps {
  title?: string;
  subtitle?: string;
  submitButtonText?: string;
  showCompanyField?: boolean;
  showPhoneField?: boolean;
  showFeatures?: boolean;
  showConfidentiality?: boolean;
  useContainer?: boolean;
  className?: string;
  fullWidth?: boolean;
  formId?: string;
  features?: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
  confidentialityText?: string;
  formLabels?: {
    name?: string;
    email?: string;
    phone?: string;
    company?: string;
    message?: string;
    agreement?: string;
  };
  placeholders?: {
    name?: string;
    email?: string;
    phone?: string;
    company?: string;
    message?: string;
  };
  successMessage?: {
    title?: string;
    text?: string;
  };
  onSubmitSuccess?: (formData: any) => void;
  onSubmitError?: (error: any) => void;
  customSubmit?: (formData: any) => Promise<void>;
  backgroundColor?: string;
  privacyPolicyUrl?: string;
  requirePhoneField?: boolean;
}

const defaultFeatures = [
  {
    icon: <FiSearch />,
    title: "Бесплатный аудит процессов",
    description:
      "Проведем предварительный анализ ваших бизнес-процессов и определим возможности для автоматизации.",
  },
  {
    icon: <FiSettings />,
    title: "Индивидуальное решение",
    description:
      "Разработаем персонализированное решение, учитывающее специфику вашего бизнеса и существующую инфраструктуру.",
  },
  {
    icon: <FiUsers />,
    title: "Команда экспертов",
    description:
      "С вами будут работать опытные специалисты с многолетним опытом в автоматизации процессов различной сложности.",
  },
];

export default function ContactForm({
  title = "Готовы автоматизировать ваш бизнес?",
  subtitle = "Оставьте заявку, и наши эксперты свяжутся с вами в течение одного рабочего дня для обсуждения вашего проекта и предоставления бесплатной консультации.",
  submitButtonText = "Отправить заявку",
  showCompanyField = true,
  showPhoneField = true,
  showFeatures = true,
  showConfidentiality = true,
  useContainer = false,
  className = "",
  fullWidth = true,
  formId = "contact-form",
  features = defaultFeatures,
  confidentialityText = "Мы ценим ваше доверие и гарантируем полную конфиденциальность всей информации, которую вы предоставляете нам. Ваши данные защищены в соответствии с законодательством.",
  formLabels = {
    name: "Ваше имя",
    email: "Email",
    phone: "Телефон",
    company: "Компания",
    message: "Сообщение",
    agreement:
      "Я согласен с политикой конфиденциальности и обработкой персональных данных",
  },
  placeholders = {
    name: "Иван Иванов",
    email: "ivan@company.com",
    phone: "+7 (999) 123-45-67",
    company: "ООО Компания",
    message: "Расскажите о вашем проекте или задайте вопрос",
  },
  successMessage = {
    title: "Спасибо за заявку!",
    text: "Ваше сообщение успешно отправлено. Наши эксперты свяжутся с вами в ближайшее время.",
  },
  onSubmitSuccess,
  onSubmitError,
  customSubmit,
  backgroundColor,
  privacyPolicyUrl = "/privacy-policy",
  requirePhoneField = false,
}: ContactFormProps) {
  const { isDark } = useTheme();
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

    try {
      // Если предоставлена функция кастомной отправки формы, используем её
      if (customSubmit) {
        await customSubmit(formState);
      } else {
        // Имитация отправки формы с задержкой для показа состояния загрузки
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log("Form submitted:", formState);
      }

      setIsSubmitted(true);

      // Вызов колбэка при успешной отправке
      if (onSubmitSuccess) {
        onSubmitSuccess(formState);
      }

      // Сброс формы через некоторое время
      setTimeout(() => {
        setIsSubmitted(false);
        setFormState({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
          agreement: false,
        });
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      // Вызов колбэка при ошибке
      if (onSubmitError) {
        onSubmitError(error);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Стили для иконок, соответствующие основному дизайну сайта
  const iconStyle = `w-6 h-6 ${isDark ? "text-[#399AFC]" : "text-[#0167F3]"}`;

  // Стили для контейнеров иконок
  const iconContainerStyle = `w-12 h-12 rounded-lg flex items-center justify-center ${
    isDark
      ? "bg-gray-800 text-[#399AFC]"
      : "bg-blue-50 text-[#0167F3]"
  }`;

  // Стили для полей ввода
  const inputStyle = `w-full px-4 py-3 rounded-lg border ${
    isDark
      ? "bg-gray-800 border-gray-700 text-white focus:border-[#399AFC] focus:outline-none placeholder-gray-400"
      : "bg-white border-gray-200 text-gray-900 focus:border-[#0167F3] focus:outline-none placeholder-gray-400"
  }`;

  // Основной фон, соответствующий дизайну сайта
  const bgStyle = backgroundColor
    ? { backgroundColor }
    : className && className.includes("from-") 
      ? className
      : "bg-gradient-to-b from-white/80 to-gray-50/90 dark:from-gray-900 dark:to-gray-950";

  const content = (
    <section
      id="contact"
      className={`py-16 md:py-20 relative ${
        fullWidth ? "w-full" : "w-full"
      }`}
    >
      {/* Статический градиентный фон */}
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
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-blue-400/30 dark:from-blue-500/10 dark:to-blue-700/10 rounded-full blur-3xl -z-5"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-blue-200/30 to-blue-400/30 dark:from-blue-500/10 dark:to-blue-700/10 rounded-full blur-3xl -z-5"></div>

      <div className="w-full mx-auto relative z-10">
        <div className="container mx-auto">
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start px-4 md:px-6 relative z-10"
          >
            {/* Левая колонка - Текст */}
            {(showFeatures || title || subtitle) && (
              <div>
                {(title || subtitle) && (
                  <div className="mb-10">
                    <div
                      className="inline-block px-4 py-1 rounded-full text-sm mb-4 bg-[#0167F3]/10 text-[#0167F3] dark:bg-blue-900/30 dark:text-blue-400"
                    >
                      Связаться с нами
                    </div>
                    {title && (
                      <div>
                        <Heading
                          level={2}
                          className="text-left font-bold text-gray-900 dark:text-white mb-4 text-3xl md:text-4xl"
                        >
                          {title.includes("автоматизировать") ? (
                            <>
                              Начните{" "}
                              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0167F3] to-[#399AFC]">
                                цифровую
                              </span>{" "}
                              трансформацию сегодня
                            </>
                          ) : title.includes("внедрять ИИ") ? (
                            <div className="leading-normal tracking-tight space-y-1">
                              <span className="block">
                                Начните <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0167F3] to-[#399AFC]">внедрять ИИ</span>
                              </span>
                              <span className="block">
                                уже <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0167F3] to-[#399AFC]">сегодня</span>
                              </span>
                            </div>
                          ) : (
                            title
                          )}
                        </Heading>
                      </div>
                    )}
                    {subtitle && (
                      <p
                        className="text-lg text-gray-600 dark:text-gray-300"
                      >
                        {subtitle}
                      </p>
                    )}
                  </div>
                )}

                {/* Преимущества обращения */}
                {showFeatures && features && features.length > 0 && (
                  <div className="space-y-6">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div
                          className={iconContainerStyle}
                          style={{ aspectRatio: "1/1" }}
                        >
                          {React.cloneElement(
                            feature.icon as React.ReactElement,
                            {
                              className: iconStyle,
                            }
                          )}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {feature.title}
                          </h3>
                          <p className="text-base text-gray-600 dark:text-gray-300 mt-1">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Дополнительная информация */}
                {showConfidentiality && (
                  <div
                    className="mt-10 p-6 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-1.5 rounded-full bg-[#0167F3]/10 dark:bg-blue-900/30">
                        <FiShield className="w-5 h-5 text-[#0167F3] dark:text-[#399AFC]" />
                      </div>
                      <span className="text-base font-medium text-gray-900 dark:text-white">
                        Гарантия конфиденциальности
                      </span>
                    </div>
                    <p className="text-base text-gray-600 dark:text-gray-300">
                      {confidentialityText}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Правая колонка - Форма */}
            <div
              className={`p-8 rounded-lg backdrop-blur-sm relative overflow-hidden ${
                isDark
                  ? "bg-gray-800/90 border border-gray-700"
                  : "bg-white/90 border border-gray-200 shadow-sm"
              }`}
            >
              {isSubmitted ? (
                <div
                  className="text-center py-10"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#0167F3] dark:bg-[#399AFC] text-white mb-6">
                    <FiCheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {successMessage.title}
                  </h3>
                  <p className="text-base text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
                    {successMessage.text}
                  </p>
                </div>
              ) : (
                <>
                  <div className="relative">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                      <span className="inline-block p-1.5 rounded-full bg-[#0167F3]/10 dark:bg-blue-900/30">
                        <FiMessageSquare className="w-5 h-5 text-[#0167F3] dark:text-[#399AFC]" />
                      </span>
                      Заполните форму
                    </h3>
                    <form
                      onSubmit={handleSubmit}
                      id={formId}
                      className="space-y-5"
                    >
                      <div>
                        <label
                          htmlFor={`${formId}-name`}
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 flex items-center gap-1.5"
                        >
                          <FiUser className="w-4 h-4 text-[#0167F3] dark:text-[#399AFC]" />
                          {formLabels.name}{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <input
                          id={`${formId}-name`}
                          name="name"
                          type="text"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className={inputStyle}
                          placeholder={placeholders.name}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor={`${formId}-email`}
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 flex items-center gap-1.5"
                        >
                          <FiMail className="w-4 h-4 text-[#0167F3] dark:text-[#399AFC]" />
                          {formLabels.email}{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <input
                          id={`${formId}-email`}
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className={inputStyle}
                          placeholder={placeholders.email}
                        />
                      </div>

                      <div
                        className={`grid grid-cols-1 ${
                          showPhoneField && showCompanyField
                            ? "md:grid-cols-2"
                            : ""
                        } gap-5`}
                      >
                        {showPhoneField && (
                          <div>
                            <label
                              htmlFor={`${formId}-phone`}
                              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 flex items-center gap-1.5"
                            >
                              <FiPhone className="w-4 h-4 text-[#0167F3] dark:text-[#399AFC]" />
                              {formLabels.phone}
                              {requirePhoneField && <span className="text-red-500">*</span>}
                            </label>
                            <input
                              id={`${formId}-phone`}
                              name="phone"
                              type="tel"
                              value={formState.phone}
                              onChange={handleChange}
                              className={inputStyle}
                              placeholder={placeholders.phone}
                              required={requirePhoneField}
                            />
                          </div>
                        )}

                        {showCompanyField && (
                          <div>
                            <label
                              htmlFor={`${formId}-company`}
                              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 flex items-center gap-1.5"
                            >
                              <FiHome className="w-4 h-4 text-[#0167F3] dark:text-[#399AFC]" />
                              {formLabels.company}
                            </label>
                            <input
                              id={`${formId}-company`}
                              name="company"
                              type="text"
                              value={formState.company}
                              onChange={handleChange}
                              className={inputStyle}
                              placeholder={placeholders.company}
                            />
                          </div>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor={`${formId}-message`}
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 flex items-center gap-1.5"
                        >
                          <FiMessageSquare className="w-4 h-4 text-[#0167F3] dark:text-[#399AFC]" />
                          {formLabels.message}
                        </label>
                        <textarea
                          id={`${formId}-message`}
                          name="message"
                          rows={4}
                          value={formState.message}
                          onChange={handleChange}
                          className={inputStyle}
                          placeholder={placeholders.message}
                        ></textarea>
                      </div>

                      <div className="flex items-start pt-2">
                        <div className="flex h-5">
                          <input
                            id={`${formId}-agreement`}
                            name="agreement"
                            type="checkbox"
                            checked={formState.agreement}
                            onChange={handleCheckboxChange}
                            required
                            className="h-5 w-5 rounded text-[#0167F3] focus:ring-[#0167F3] border-gray-300"
                          />
                        </div>
                        <label
                          htmlFor={`${formId}-agreement`}
                          className="ml-3 block text-sm text-gray-600 dark:text-gray-300"
                        >
                          {formLabels.agreement?.includes(
                            "политикой конфиденциальности"
                          ) ? (
                            <>
                              Я согласен с{" "}
                              <a
                                href={privacyPolicyUrl}
                                className="text-[#0167F3] dark:text-[#399AFC] hover:underline"
                              >
                                политикой конфиденциальности
                              </a>{" "}
                              и обработкой персональных данных
                            </>
                          ) : (
                            formLabels.agreement
                          )}
                        </label>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full mt-4 bg-[#0167F3] dark:bg-[#399AFC] text-white font-semibold py-3 px-6 rounded-lg transition-opacity ${
                          isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                        }`}
                      >
                        {isSubmitting ? (
                          <>
                            <svg
                              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block"
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
                          <span className="flex items-center justify-center">
                            {submitButtonText} <FiSend className="ml-2 w-5 h-5" />
                          </span>
                        )}
                      </button>
                    </form>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  return useContainer ? <Container>{content}</Container> : content;
}
