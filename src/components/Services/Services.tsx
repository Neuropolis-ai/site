/*
 * Компонент Services с обновленной стилизацией и текстом сообщения ИИ-агента
 * Ветка: 050525-4
 */
"use client";
import { useTheme } from "@/context/ThemeContext";
import { useEffect, useRef, useState } from "react";
import "../../style/card-line.css";
import "../../style/hero.css";
import "../../style/services.css";
import Container from "../ui/Container";
import Workflow from "./Workflow";
import { Heading } from "@/components/ui/Heading";
import Badge from "@/components/ui/Badge";
import { motion, useInView, useSpring } from "framer-motion";
import Subheading from "@/components/ui/subheading";

const Services = () => {
  const { isDark } = useTheme();
  const [isChartVisible, setIsChartVisible] = useState(false);
  const chartRef = useRef(null);
  const [isChatVisible, setIsChatVisible] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const chatRef = useRef(null);
  const [aiLinesVisible, setAiLinesVisible] = useState(false);
  const aiAgentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsChartVisible(true);
            // Once triggered, we can disconnect the observer
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.3, // Trigger when at least 30% of the element is visible
      }
    );

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Чат-анимация
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Когда чат становится видимым, запускаем анимацию
        if (entry.isIntersecting) {
          setTimeout(() => setIsChatVisible(true), 500);
          setTimeout(() => setIsTyping(true), 1000);
          setTimeout(() => {
            setIsTyping(false);
          }, 3000);
        }
      },
      { threshold: 0.3 }
    );

    const currentRef = chatRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // AI линии анимация
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Когда AI-агент становится видимым, запускаем анимацию линий
        if (entry.isIntersecting) {
          setTimeout(() => setAiLinesVisible(true), 300);
        }
      },
      { threshold: 0.3 }
    );

    const currentRef = aiAgentRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section id="services" className="services-section pt-24 md:pt-32 pb-14">
      <Container>
        <div className="text-center mb-16 relative z-10">
          <div className="inline-flex items-center justify-center border border-blue-300 dark:border-blue-800 gap-2 px-4 py-1 rounded-full text-sm mb-4 bg-blue-500/10 text-blue-600 dark:text-blue-400">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-blue-600 dark:text-blue-400"
              strokeWidth={2}
            >
              <path
                opacity="0.2"
                d="M14.0063 8.11585L9.82259 9.6371L8.30133 13.8208C8.26582 13.9165 8.20186 13.9991 8.11807 14.0573C8.03428 14.1156 7.93465 14.1469 7.83258 14.1469C7.73052 14.1469 7.63089 14.1156 7.5471 14.0573C7.4633 13.9991 7.39935 13.9165 7.36383 13.8208L5.84508 9.6371L1.66133 8.11585C1.56565 8.08033 1.48312 8.01638 1.42484 7.93258C1.36656 7.84879 1.33533 7.74917 1.33533 7.6471C1.33533 7.54503 1.36656 7.44541 1.42484 7.36161C1.48312 7.27782 1.56565 7.21387 1.66133 7.17835L5.84508 5.6596L7.36633 1.47585C7.40185 1.38016 7.4658 1.29763 7.5496 1.23936C7.63339 1.18108 7.73302 1.14984 7.83508 1.14984C7.93715 1.14984 8.03678 1.18108 8.12057 1.23936C8.20436 1.29763 8.26832 1.38016 8.30383 1.47585L9.82508 5.6596L14.0088 7.18085C14.1036 7.21708 14.1851 7.28129 14.2425 7.36495C14.2999 7.44861 14.3305 7.54775 14.3303 7.64921C14.33 7.75067 14.2989 7.84965 14.241 7.933C14.1831 8.01635 14.1013 8.08012 14.0063 8.11585Z"
                fill="currentColor"
              />
              <path
                d="M14.1776 6.71085L10.2126 5.2696L8.77134 1.3046C8.7003 1.11323 8.5724 0.948173 8.40481 0.831617C8.23722 0.715062 8.03797 0.652588 7.83384 0.652588C7.6297 0.652588 7.43046 0.715062 7.26287 0.831617C7.09528 0.948173 6.96737 1.11323 6.89634 1.3046L5.45509 5.2696L1.49009 6.71085C1.29871 6.78189 1.13366 6.90979 1.0171 7.07738C0.900548 7.24497 0.838074 7.44422 0.838074 7.64835C0.838074 7.85249 0.900548 8.05173 1.0171 8.21932C1.13366 8.38691 1.29871 8.51482 1.49009 8.58585L5.45509 10.0277L6.89634 13.9921C6.96737 14.1835 7.09528 14.3485 7.26287 14.4651C7.43046 14.5816 7.6297 14.6441 7.83384 14.6441C8.03797 14.6441 8.23722 14.5816 8.40481 14.4651C8.5724 14.3485 8.7003 14.1835 8.77134 13.9921L10.2132 10.0271L14.1776 8.58585C14.369 8.51482 14.534 8.38691 14.6506 8.21932C14.7671 8.05173 14.8296 7.85249 14.8296 7.64835C14.8296 7.44422 14.7671 7.24497 14.6506 7.07738C14.534 6.90979 14.369 6.78189 14.1776 6.71085ZM9.65134 9.1671C9.58275 9.19208 9.52047 9.23176 9.46886 9.28337C9.41725 9.33498 9.37756 9.39727 9.35259 9.46585L7.83384 13.6421L6.31509 9.46585C6.29012 9.39727 6.25043 9.33498 6.19882 9.28337C6.14721 9.23176 6.08492 9.19208 6.01634 9.1671L1.84009 7.64835L6.01634 6.1296C6.08492 6.10463 6.14721 6.06494 6.19882 6.01333C6.25043 5.96172 6.29012 5.89944 6.31509 5.83085L7.83384 1.6546L9.35259 5.83085C9.37756 5.89944 9.41725 5.96172 9.46886 6.01333C9.52047 6.06494 9.58275 6.10463 9.65134 6.1296L13.8276 7.64835L9.65134 9.1671Z"
                fill="currentColor"
              />
            </svg>
            Услуги
          </div>
          <Heading
            level={2}
            align="center"
            className="text-gray-800 dark:text-white mb-4"
          >
            Как{" "}
            <span className="bg-gradient-to-r from-[#0167F3] to-[#399AFC] text-transparent bg-clip-text">
              ИИ может автоматизировать
            </span>{" "}
            ваш бизнес
          </Heading>
          <Subheading
            align="center"
            className="md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Наши решения на базе ИИ оптимизируют эффективность, повышают
            продуктивность и обеспечивают измеримые результаты для вашего
            бизнеса.
          </Subheading>
        </div>

        <div className="flex relative flex-wrap gap-6 z-10">
          <div className="flex flex-col lg:flex-row gap-6 w-full">
            {/* AI Assistant Card */}
            <div
              className={`w-full lg:w-[732px] p-5 max-[425px]:p-[12px] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg ${
                isDark
                  ? "bg-[#050A1B] process-card hover:bg-[#0A1029]"
                  : "bg-gray-50 border border-gray-200 hover:border-blue-200"
              }`}
            >
              <a href="/chat-bots" className="block">
                <div
                  className={`px-6 py-4 relative ${
                    isDark
                      ? "ai-card"
                      : "bg-white rounded-xl border border-gray-100"
                  }`}
                  ref={chatRef}
                >
                  {/* Сообщение клиента */}
                  <div
                    className={`flex items-start justify-end mb-4 gap-[7px] transition-opacity duration-500 ${
                      isChatVisible ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div>
                      <div
                        className={`font-medium text-end text-[14px] max-[425px]:text-[12px]  ${
                          isDark ? "text-[#a8a8a8]" : "text-gray-500"
                        }`}
                      >
                        Клиент
                      </div>
                      <div
                        className={`mt-2 p-3 rounded-tl-xl rounded-bl-xl rounded-tr-xl ${
                          isDark ? "bg-[#0a0f28]" : "bg-gray-200"
                        }`}
                      >
                        <p
                          className={`text-sm max-[425px]:text-[11px] user-message ${
                            isDark ? "text-gray-300" : "text-gray-700"
                          }`}
                        >
                          Как вы можете помочь улучшить мои бизнес-процессы?
                        </p>
                      </div>
                    </div>
                    <div
                      className={`user-oval rounded-full flex items-center justify-center self-start mt-[2px] ${
                        isDark
                          ? "bg-gradient-to-b from-blue-900/50 to-blue-800/70 text-white"
                          : "bg-gradient-to-b from-blue-50 to-blue-100 text-blue-600"
                      }`}
                    >
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        strokeWidth={2}
                      >
                        <path
                          d="M17.5124 16.4627C16.3821 14.5085 14.6402 13.1073 12.6073 12.443C13.6129 11.8444 14.3941 10.9323 14.8311 9.8467C15.268 8.76112 15.3366 7.5621 15.0262 6.4338C14.7157 5.30549 14.0435 4.31028 13.1127 3.60099C12.1819 2.89171 11.0441 2.50757 9.87384 2.50757C8.70361 2.50757 7.56574 2.89171 6.63496 3.60099C5.70417 4.31028 5.03196 5.30549 4.72153 6.4338C4.41111 7.5621 4.47964 8.76112 4.91661 9.8467C5.35358 10.9323 6.13483 11.8444 7.14037 12.443C5.10751 13.1065 3.3656 14.5078 2.23525 16.4627C2.1938 16.5303 2.1663 16.6055 2.15439 16.6839C2.14247 16.7623 2.14638 16.8423 2.16587 16.9191C2.18537 16.996 2.22006 17.0681 2.2679 17.1314C2.31574 17.1946 2.37576 17.2476 2.44442 17.2873C2.51307 17.3269 2.58898 17.3524 2.66765 17.3623C2.74633 17.3721 2.82618 17.3661 2.90249 17.3446C2.97881 17.3231 3.05004 17.2865 3.11199 17.237C3.17393 17.1875 3.22534 17.1261 3.26318 17.0565C4.66146 14.6399 7.13294 13.1971 9.87384 13.1971C12.6147 13.1971 15.0862 14.6399 16.4845 17.0565C16.5223 17.1261 16.5738 17.1875 16.6357 17.237C16.6976 17.2865 16.7689 17.3231 16.8452 17.3446C16.9215 17.3661 17.0014 17.3721 17.08 17.3623C17.1587 17.3524 17.2346 17.3269 17.3033 17.2873C17.3719 17.2476 17.4319 17.1946 17.4798 17.1314C17.5276 17.0681 17.5623 16.996 17.5818 16.9191C17.6013 16.8423 17.6052 16.7623 17.5933 16.6839C17.5814 16.6055 17.5539 16.5303 17.5124 16.4627ZM5.71759 7.85334C5.71759 7.03131 5.96135 6.22774 6.41805 5.54425C6.87474 4.86076 7.52386 4.32804 8.28331 4.01346C9.04277 3.69889 9.87845 3.61658 10.6847 3.77695C11.4909 3.93732 12.2315 4.33316 12.8128 4.91442C13.394 5.49569 13.7899 6.23626 13.9502 7.04249C14.1106 7.84873 14.0283 8.68441 13.7137 9.44387C13.3991 10.2033 12.8664 10.8524 12.1829 11.3091C11.4994 11.7658 10.6959 12.0096 9.87384 12.0096C8.7719 12.0084 7.71543 11.5701 6.93623 10.7909C6.15704 10.0118 5.71877 8.95528 5.71759 7.85334Z"
                          fill={isDark ? "white" : "#0167F3"}
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Сообщение AI с анимацией печати */}
                  <div
                    className={`flex gap-3 mt-2 transition-opacity duration-500 items-start ${
                      isChatVisible ? "opacity-100" : "opacity-0"
                    }`}
                    style={{ transitionDelay: "800ms" }}
                  >
                    <div
                      className={`w-10 h-10 ai-oval rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-[2px] ${
                        isDark
                          ? "bg-gradient-to-b from-[#0157D3] to-[#0167F3] text-white"
                          : "bg-gradient-to-b from-[#0167F3] to-[#399AFC] text-white"
                      }`}
                    >
                      AI
                    </div>
                    <div className="flex flex-col flex-grow max-w-full">
                      <div
                        className={`text-[14px] font-medium mb-2 max-[425px]:text-[12px] ${
                          isDark ? "text-[#a8a8a8]" : "text-gray-500"
                        }`}
                      >
                        ИИ-агент
                      </div>

                      {/* Анимация печатания */}
                      {isTyping && (
                        <div
                          className={`inline-flex items-center rounded-tr-xl rounded-bl-xl rounded-br-xl p-3 mb-2 ${
                            isDark ? "bg-[#0d1635]" : "bg-blue-50"
                          }`}
                        >
                          <div className="flex space-x-1">
                            <div
                              className={`w-2 h-2 rounded-full animate-bounce ${
                                isDark ? "bg-blue-400" : "bg-blue-500"
                              }`}
                              style={{ animationDelay: "0.2s" }}
                            />
                            <div
                              className={`w-2 h-2 rounded-full animate-bounce ${
                                isDark ? "bg-blue-400" : "bg-blue-500"
                              }`}
                              style={{ animationDelay: "0.3s" }}
                            />
                            <div
                              className={`w-2 h-2 rounded-full animate-bounce ${
                                isDark ? "bg-blue-400" : "bg-blue-500"
                              }`}
                              style={{ animationDelay: "0.4s" }}
                            />
                          </div>
                        </div>
                      )}

                      {/* Ответ AI (появляется после "печатания") */}
                      <div
                        className={`${
                          isDark
                            ? "bg-[#0d1635]"
                            : "bg-blue-50 border border-blue-100"
                        } p-3 rounded-tr-xl rounded-bl-xl rounded-br-xl transition-opacity duration-500 ${
                          isTyping
                            ? "opacity-0"
                            : isChatVisible
                            ? "opacity-100"
                            : "opacity-0"
                        }`}
                        style={{ transitionDelay: isTyping ? "0ms" : "1500ms" }}
                      >
                        <p
                          className={`w-full text-[14px] max-[425px]:text-[11px] ai-message ${
                            isDark ? "text-gray-300" : "text-gray-700"
                          }`}
                        >
                          Мы помогаем бизнесу ускорять работу и снижать издержки
                          за счёт ИИ-автоматизации.
                          <br />
                          <br />
                          Наши агенты могут:
                          <br />
                          – Отвечать на вопросы клиентов 24/7,
                          <br />
                          – Генерировать тексты и отчёты,
                          <br />
                          – Собирать и анализировать информацию,
                          <br />– Автоматизировать рутинные задачи.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Панель инструментов чата */}
                <div
                  className={`p-5 sm:p-[15px] mt-7.5 mb-[15px] sm:mb-[20px] rounded-lg ${
                    !isDark
                      ? " bg-white border border-gray-200"
                      : "chat-box  bg-[#030712]/40"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex gap-[8px] sm:gap-2.5">
                      <svg
                        width={14}
                        height={14}
                        className="sm:w-[16px] sm:h-[16px]"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        strokeWidth={2}
                      >
                        <path
                          d="M12.9886 7.79671C13.0322 7.84025 13.0668 7.89195 13.0904 7.94885C13.114 8.00576 13.1261 8.06675 13.1261 8.12836C13.1261 8.18996 13.114 8.25095 13.0904 8.30786C13.0668 8.36476 13.0322 8.41646 12.9886 8.46L8.181 13.2647C7.56554 13.8801 6.73083 14.2258 5.86048 14.2257C4.99014 14.2256 4.15547 13.8799 3.54009 13.2644C2.9247 12.6489 2.57901 11.8142 2.57907 10.9439C2.57912 10.0735 2.92492 9.23886 3.54038 8.62347L9.35639 2.72191C9.79579 2.28205 10.3919 2.03475 11.0136 2.03442C11.6354 2.03409 12.2318 2.28076 12.6716 2.72015C13.1115 3.15955 13.3588 3.75568 13.3591 4.37741C13.3594 4.99913 13.1128 5.59553 12.6734 6.03539L6.8562 11.9369C6.59202 12.2011 6.23371 12.3495 5.86011 12.3495C5.4865 12.3495 5.12819 12.2011 4.86401 11.9369C4.59983 11.6728 4.45142 11.3145 4.45142 10.9409C4.45142 10.5672 4.59983 10.2089 4.86401 9.94476L9.74487 4.98656C9.78763 4.94095 9.83908 4.90435 9.89619 4.87892C9.9533 4.85349 10.0149 4.83974 10.0774 4.83848C10.1399 4.83723 10.2021 4.84848 10.2601 4.8716C10.3182 4.89471 10.3711 4.9292 10.4157 4.97306C10.4602 5.01691 10.4956 5.06923 10.5196 5.12695C10.5436 5.18466 10.5559 5.2466 10.5556 5.30911C10.5553 5.37163 10.5426 5.43346 10.5181 5.49097C10.4935 5.54848 10.4578 5.6005 10.4128 5.64398L5.53139 10.6075C5.48769 10.6508 5.45295 10.7024 5.42917 10.7591C5.40538 10.8159 5.39301 10.8768 5.39277 10.9384C5.39252 11 5.40441 11.061 5.42774 11.118C5.45107 11.1749 5.4854 11.2267 5.52876 11.2704C5.57212 11.3142 5.62366 11.3489 5.68044 11.3727C5.73723 11.3965 5.79814 11.4088 5.85971 11.4091C5.92127 11.4093 5.98228 11.3974 6.03925 11.3741C6.09622 11.3508 6.14804 11.3164 6.19175 11.2731L12.0083 5.37445C12.2725 5.11081 12.4212 4.75303 12.4215 4.37981C12.4219 4.00658 12.274 3.64849 12.0104 3.38431C11.7468 3.12013 11.389 2.9715 11.0158 2.97112C10.6425 2.97073 10.2844 3.11863 10.0203 3.38226L4.20542 9.28148C3.98758 9.49897 3.81472 9.75724 3.69669 10.0415C3.57867 10.3258 3.5178 10.6306 3.51755 10.9384C3.51731 11.2462 3.5777 11.5511 3.69527 11.8356C3.81284 12.12 3.98529 12.3786 4.20278 12.5964C4.42027 12.8143 4.67854 12.9871 4.96283 13.1051C5.24713 13.2232 5.55189 13.284 5.85971 13.2843C6.16753 13.2845 6.47238 13.2241 6.75687 13.1066C7.04135 12.989 7.29989 12.8165 7.51772 12.5991L12.3259 7.79437C12.4141 7.70684 12.5335 7.65792 12.6578 7.65836C12.782 7.6588 12.901 7.70856 12.9886 7.79671Z"
                          fill={isDark ? "#919191" : "#6B7280"}
                        />
                      </svg>
                      <svg
                        width={14}
                        height={14}
                        className="sm:w-[16px] sm:h-[16px]"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        strokeWidth={2}
                      >
                        <path
                          d="M13.3601 2.97217H3.04761C2.79897 2.97217 2.56051 3.07094 2.38469 3.24676C2.20888 3.42257 2.11011 3.66103 2.11011 3.90967V12.3472C2.11011 12.5958 2.20888 12.8343 2.38469 13.0101C2.56051 13.1859 2.79897 13.2847 3.04761 13.2847H13.3601C13.6087 13.2847 13.8472 13.1859 14.023 13.0101C14.1988 12.8343 14.2976 12.5958 14.2976 12.3472V3.90967C14.2976 3.66103 14.1988 3.42257 14.023 3.24676C13.8472 3.07094 13.6087 2.97217 13.3601 2.97217ZM13.3601 3.90967V9.93018L11.8326 8.40322C11.7455 8.31615 11.6422 8.24707 11.5284 8.19994C11.4146 8.15282 11.2927 8.12856 11.1696 8.12856C11.0464 8.12856 10.9245 8.15282 10.8108 8.19994C10.697 8.24707 10.5936 8.31615 10.5066 8.40322L9.33472 9.5751L6.75659 6.99697C6.58079 6.82129 6.34243 6.7226 6.0939 6.7226C5.84536 6.7226 5.607 6.82129 5.4312 6.99697L3.04761 9.38057V3.90967H13.3601ZM3.04761 10.7065L6.09448 7.65967L10.782 12.3472H3.04761V10.7065ZM13.3601 12.3472H12.108L9.99858 10.2378L11.1705 9.06592L13.3601 11.2562V12.3472ZM9.14136 6.48779C9.14136 6.34873 9.1826 6.21279 9.25986 6.09716C9.33712 5.98153 9.44693 5.89141 9.57541 5.83819C9.70389 5.78497 9.84526 5.77105 9.98166 5.79818C10.118 5.82531 10.2433 5.89227 10.3417 5.99061C10.44 6.08894 10.507 6.21423 10.5341 6.35062C10.5612 6.48701 10.5473 6.62839 10.4941 6.75687C10.4409 6.88535 10.3507 6.99516 10.2351 7.07242C10.1195 7.14968 9.98355 7.19092 9.84448 7.19092C9.658 7.19092 9.47916 7.11684 9.3473 6.98498C9.21544 6.85312 9.14136 6.67427 9.14136 6.48779Z"
                          fill={isDark ? "#919191" : "#6B7280"}
                        />
                      </svg>
                    </div>
                    <svg
                      width={14}
                      height={14}
                      className="sm:w-[16px] sm:h-[16px]"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      strokeWidth={2}
                    >
                      <g clipPath="url(#clip0_1_580)">
                        <path
                          d="M1.72087 7.84632L1.21787 3.31532C1.07387 2.01832 2.40887 1.06632 3.58787 1.62532L13.5409 6.34032C14.8119 6.94132 14.8119 8.75032 13.5409 9.35132L3.58787 14.0673C2.40887 14.6263 1.07387 13.6743 1.21787 12.3773L1.72087 7.84632ZM1.72087 7.84632H7.55487"
                          stroke={isDark ? "#919191" : "#6B7280"}
                          strokeWidth="1.3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_580">
                          <rect
                            width={15}
                            height={15}
                            fill="white"
                            transform="translate(0.37384 0.628418)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>

                <div>
                  <Heading
                    level={3}
                    className={`font-medium text-base sm:text-lg mb-1 sm:mb-2 ${
                      isDark ? "text-white" : "text-gray-800"
                    }`}
                  >
                    Чат-боты для поддержки клиентов
                  </Heading>
                  <p
                    className={`text-sm sm:text-base ${
                      isDark ? "text-[#919191]" : "text-gray-600"
                    }`}
                  >
                    Разработка индивидуальных чат-ботов на базе NLP, которые
                    автоматизируют обслуживание клиентов и выполняют другие
                    бизнес-задачи.
                  </p>
                </div>
              </a>
            </div>

            {/* Machine Learning Models Card */}
            <div
              className={`w-full lg:w-[523px] p-5 rounded-xl border overflow-hidden transition-all duration-300 hover:shadow-lg ${
                isDark
                  ? "bg-[#050A1B] border-[#262626] process-card hover:bg-[#0A1029]"
                  : "bg-gray-50 border-gray-200 hover:border-blue-200"
              }`}
            >
              <a href="/ai-agent" className="block">
                <div
                  className={`flex items-center justify-center h-[341px] sm:h-[341px] ${
                    isDark
                      ? "ai-card"
                      : "bg-white rounded-xl border border-gray-100 mb-[20px]"
                  }`}
                  style={
                    isDark
                      ? {
                          mask: "linear-gradient(rgb(0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%)",
                        }
                      : {
                          mask: "linear-gradient(rgb(0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%)",
                        }
                  }
                  ref={aiAgentRef}
                >
                  <div className="ai-agent-container relative ai-line-animated">
                    <div className="ai-agent-box w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] relative z-10">
                      <span className="ai-agent-text text-h2-sm sm:text-h1">
                        AI
                      </span>
                    </div>
                    <div className="ai-animated-lines">
                      <div className="ai-line ai-line-top">
                        <div className="ai-line-glow"></div>
                      </div>
                      <div className="ai-line ai-line-right">
                        <div className="ai-line-glow"></div>
                      </div>
                      <div className="ai-line ai-line-bottom">
                        <div className="ai-line-glow"></div>
                      </div>
                      <div className="ai-line ai-line-left">
                        <div className="ai-line-glow"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-7.5">
                  <Heading
                    level={3}
                    className={`font-medium text-base sm:text-lg mb-1 sm:mb-2 ${
                      isDark ? "text-white" : "text-gray-800"
                    }`}
                  >
                    Разработка ИИ-агентов
                  </Heading>
                  <p
                    className={`text-sm sm:text-base ${
                      isDark ? "text-[#919191]" : "text-gray-600"
                    }`}
                  >
                    Создаем интеллектуальных агентов, которые автоматизируют
                    сложные бизнес-процессы и работают автономно для решения
                    конкретных задач.
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 w-full">
            <Workflow />

            {/* Strategy Consulting Card */}
            <div
              className={`w-full lg:w-[732px] p-5 rounded-xl border border-[#262626] overflow-hidden  ${
                isDark ? "process-card" : "bg-gray-50 border-gray-200"
              }`}
            >
              <a href="/strategy-consulting" className="block">
                <div
                  ref={chartRef}
                  className={`flex items-end justify-center h-[235.23px] sm:h-[235.23px] ${
                    isDark
                      ? "ai-card "
                      : "bg-white rounded-xl border border-gray-100"
                  }`}
                  style={{
                    mask: "linear-gradient(rgb(0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%)",
                  }}
                >
                  <div className="flex items-end gap-[15px] sm:gap-[30px] relative">
                    <div className="chart-line-gradient absolute top-0 left-0 w-full h-full"></div>
                    <div className="chart-line-gradient absolute top-[30px] left-0 w-full h-full"></div>
                    <div className="chart-line-gradient absolute top-[60px] left-0 w-full h-full"></div>
                    <div className="chart-line-gradient absolute top-[90px] left-0 w-full h-full"></div>
                    <div className="chart-line-gradient absolute top-[120px] left-0 w-full h-full"></div>
                    {[15, 25, 60, 110, 120, 165, 140, 160].map(
                      (height, index) => {
                        // Scale down heights for mobile
                        const mobileHeight = Math.floor(height * 0.75);
                        return (
                          <div
                            key={index}
                            className={`chart-line w-[12px] sm:w-[16px] z-10 ${
                              isChartVisible ? "chart-bar-animation" : ""
                            }`}
                            style={{
                              height: `clamp(${mobileHeight}px, ${
                                mobileHeight / 10
                              }vw, ${height}px)`,
                              animationDelay: isChartVisible
                                ? `${index * 0.1}s`
                                : "0s",
                              transform: isChartVisible
                                ? ""
                                : "translateY(100%)",
                            }}
                          ></div>
                        );
                      }
                    )}
                  </div>
                </div>

                <div className="mt-7.5">
                  <Heading
                    level={3}
                    className="font-medium text-base sm:text-lg mb-1 sm:mb-2 dark:text-white text-gray-800"
                  >
                    Стратегический консалтинг
                  </Heading>
                  <p className="dark:text-[#919191] text-gray-600 text-sm sm:text-base">
                    Мы оцениваем ваш бизнес и отрасль, определяем, где ИИ может
                    принести наибольшую пользу с учетом ваших целей и ресурсов.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Services;
