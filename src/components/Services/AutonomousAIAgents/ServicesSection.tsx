"use client";

import { useTheme } from "@/context/ThemeContext";
import Container from "@/components/ui/Container";

const ServicesSection = () => {
  const { isDark } = useTheme();

  return (
    <section className="py-20 bg-gray-50 dark:bg-black/30">
      <Container>
        <div className="text-center mb-16 relative z-10">
          <div
            className={`inline-block px-4 py-1 rounded-full text-sm mb-4 switch-box ${
              !isDark && "light-switch-box"
            }`}
          >
            Услуги
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold dark:text-white text-black mb-4">
            Типы ИИ-агентов и их применение
          </h2>
          <p
            className={`max-w-2xl mx-auto leading-relaxed ${
              isDark ? "text-[#919191]" : "text-gray-600"
            }`}
          >
            Мы разрабатываем различные типы ИИ-агентов для решения широкого
            спектра бизнес-задач
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            className={`p-8 rounded-xl overflow-hidden ${
              isDark
                ? "bg-[#050A1B] process-card"
                : "bg-white border border-gray-100"
            }`}
          >
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-lg mb-5 ${
                isDark ? "bg-blue-900/30" : "bg-blue-50"
              }`}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 21H7C4.79086 21 3 19.2091 3 17V10C3 7.79086 4.79086 6 7 6H17C19.2091 6 21 7.79086 21 10V17C21 19.2091 19.2091 21 17 21Z"
                  stroke={isDark ? "#4F97FF" : "#0167F3"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 17C13.6569 17 15 15.6569 15 14C15 12.3431 13.6569 11 12 11C10.3431 11 9 12.3431 9 14C9 15.6569 10.3431 17 12 17Z"
                  stroke={isDark ? "#4F97FF" : "#0167F3"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 6V5C7 3.34315 8.34315 2 10 2H14C15.6569 2 17 3.34315 17 5V6"
                  stroke={isDark ? "#4F97FF" : "#0167F3"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold dark:text-white text-black mb-4">
              Агенты для обработки данных
            </h3>
            <p className={`${isDark ? "text-gray-400" : "text-gray-700"} mb-4`}>
              Автоматический сбор, анализ и структурирование данных из различных
              источников с высокой точностью и скоростью.
            </p>
            <ul
              className={`space-y-2 ${
                isDark ? "text-gray-400" : "text-gray-700"
              }`}
            >
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2"></span>
                <span>Извлечение информации из неструктурированных данных</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2"></span>
                <span>Автоматическая классификация документов</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2"></span>
                <span>Формирование аналитических отчетов</span>
              </li>
            </ul>
          </div>

          <div
            className={`p-8 rounded-xl overflow-hidden ${
              isDark
                ? "bg-[#050A1B] process-card"
                : "bg-white border border-gray-100"
            }`}
          >
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-lg mb-5 ${
                isDark ? "bg-blue-900/30" : "bg-blue-50"
              }`}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 18.7023C18 19.4618 17.4278 20.0666 16.6667 20.1047C16.1048 20.1367 15.5369 20.156 14.9646 20.156C14.1094 20.156 13.2698 20.1174 12.4464 20.0401C10.3463 19.8583 8.34254 19.4279 6.57595 18.7365C5.02339 18.1258 3.63049 17.3608 2.48182 16.4563C1.70389 15.8417 1.09259 15.157 0.687154 14.4061C0.237152 13.5678 0 12.6448 0 11.6795C0 10.715 0.237152 9.79118 0.687154 8.95291C1.09259 8.20283 1.70389 7.51733 2.48182 6.90275C3.63049 5.99822 5.02339 5.23323 6.57595 4.62333C8.34254 3.93113 10.3463 3.50072 12.4464 3.31891C13.2698 3.24165 14.1094 3.20299 14.9646 3.20299C15.5369 3.20299 16.1048 3.22313 16.6667 3.25427C17.4278 3.29315 18 3.89799 18 4.65673V18.7023Z"
                  fill={isDark ? "#4F97FF" : "#0167F3"}
                />
                <path
                  d="M24 18.7023C24 19.4618 23.4278 20.0666 22.6667 20.1047C22.1048 20.1367 21.5369 20.156 20.9646 20.156C20.1094 20.156 19.2698 20.1174 18.4464 20.0401C16.3463 19.8583 14.3425 19.4279 12.576 18.7365C11.0234 18.1258 9.63049 17.3608 8.48182 16.4563C7.70389 15.8417 7.09259 15.157 6.68715 14.4061C6.23715 13.5678 6 12.6448 6 11.6795C6 10.715 6.23715 9.79118 6.68715 8.95291C7.09259 8.20283 7.70389 7.51733 8.48182 6.90275C9.63049 5.99822 11.0234 5.23323 12.576 4.62333C14.3425 3.93113 16.3463 3.50072 18.4464 3.31891C19.2698 3.24165 20.1094 3.20299 20.9646 3.20299C21.5369 3.20299 22.1048 3.22313 22.6667 3.25427C23.4278 3.29315 24 3.89799 24 4.65673V18.7023Z"
                  fill={isDark ? "#4F97FF30" : "#0167F320"}
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold dark:text-white text-black mb-4">
              Коммуникационные ИИ-агенты
            </h3>
            <p className={`${isDark ? "text-gray-400" : "text-gray-700"} mb-4`}>
              Интеллектуальные системы для взаимодействия с клиентами и
              сотрудниками, обеспечивающие непрерывную коммуникацию.
            </p>
            <ul
              className={`space-y-2 ${
                isDark ? "text-gray-400" : "text-gray-700"
              }`}
            >
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2"></span>
                <span>Многоязычная поддержка клиентов 24/7</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2"></span>
                <span>Обработка запросов в различных каналах связи</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2"></span>
                <span>Персонализированные рекомендации</span>
              </li>
            </ul>
          </div>

          <div
            className={`p-8 rounded-xl overflow-hidden ${
              isDark
                ? "bg-[#050A1B] process-card"
                : "bg-white border border-gray-100"
            }`}
          >
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-lg mb-5 ${
                isDark ? "bg-blue-900/30" : "bg-blue-50"
              }`}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke={isDark ? "#4F97FF" : "#0167F3"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 16.2422L16.2426 12.0001L12 7.75781"
                  stroke={isDark ? "#4F97FF" : "#0167F3"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.75732 12H16.2427"
                  stroke={isDark ? "#4F97FF" : "#0167F3"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold dark:text-white text-black mb-4">
              Операционные агенты-автоматизаторы
            </h3>
            <p className={`${isDark ? "text-gray-400" : "text-gray-700"} mb-4`}>
              Автоматизация рутинных операций и бизнес-процессов с минимальным
              участием человека.
            </p>
            <ul
              className={`space-y-2 ${
                isDark ? "text-gray-400" : "text-gray-700"
              }`}
            >
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2"></span>
                <span>Автоматизация документооборота</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2"></span>
                <span>Управление запасами и логистикой</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2"></span>
                <span>Планирование и оптимизация ресурсов</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;
