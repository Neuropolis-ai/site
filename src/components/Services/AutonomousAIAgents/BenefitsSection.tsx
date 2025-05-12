"use client";

import { useTheme } from "@/context/ThemeContext";
import Container from "@/components/ui/Container";

const BenefitsSection = () => {
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
            Преимущества
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold dark:text-white text-black mb-4">
            Какие выгоды получит ваш бизнес
          </h2>
          <p
            className={`max-w-2xl mx-auto leading-relaxed ${
              isDark ? "text-[#919191]" : "text-gray-600"
            }`}
          >
            Внедрение ИИ-агентов трансформирует ваш бизнес и обеспечивает
            значительные преимущества
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            className={`p-6 rounded-xl overflow-hidden ${
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
                  d="M12 7.75736V16.2426"
                  stroke={isDark ? "#4F97FF" : "#0167F3"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.75732 12H16.2426"
                  stroke={isDark ? "#4F97FF" : "#0167F3"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke={isDark ? "#4F97FF" : "#0167F3"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold dark:text-white text-black mb-3">
              Повышение продуктивности
            </h3>
            <p className={`${isDark ? "text-gray-400" : "text-gray-700"}`}>
              ИИ-агенты выполняют рутинные задачи в 5-10 раз быстрее, чем
              человек, высвобождая ценное время ваших сотрудников для
              стратегически важных задач.
            </p>
          </div>

          <div
            className={`p-6 rounded-xl overflow-hidden ${
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
                  d="M6 20.4C4.8954 20.4 4 19.5046 4 18.4V5.6C4 4.4954 4.8954 3.6 6 3.6H18C19.1046 3.6 20 4.4954 20 5.6V18.4C20 19.5046 19.1046 20.4 18 20.4H6Z"
                  stroke={isDark ? "#4F97FF" : "#0167F3"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 7.60001H16"
                  stroke={isDark ? "#4F97FF" : "#0167F3"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 12H16"
                  stroke={isDark ? "#4F97FF" : "#0167F3"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 16.4H12"
                  stroke={isDark ? "#4F97FF" : "#0167F3"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold dark:text-white text-black mb-3">
              Снижение затрат
            </h3>
            <p className={`${isDark ? "text-gray-400" : "text-gray-700"}`}>
              Автоматизация процессов с помощью ИИ-агентов сокращает
              операционные расходы на 30-50%, обеспечивая быструю окупаемость
              инвестиций.
            </p>
          </div>

          <div
            className={`p-6 rounded-xl overflow-hidden ${
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
                  d="M12 8V12L14 14"
                  stroke={isDark ? "#4F97FF" : "#0167F3"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.05176 11.0561C3.17077 7.83448 5.21276 5.00348 8.05176 3.76948C10.8908 2.53548 14.1408 3.08948 16.4248 5.17448C18.7078 7.25948 19.4138 10.4235 18.2518 13.2305C17.0898 16.0375 14.3188 17.9515 11.0508 18.0561C8.84176 18.1257 6.69276 17.3067 5.06176 15.8171C3.43076 14.3275 2.45176 12.2634 2.45176 10.1171C2.45176 10.0951 2.45176 10.0731 2.45276 10.0511"
                  stroke={isDark ? "#4F97FF" : "#0167F3"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 10L2.453 7.59998L5 9.22298"
                  stroke={isDark ? "#4F97FF" : "#0167F3"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold dark:text-white text-black mb-3">
              Непрерывность работы 24/7
            </h3>
            <p className={`${isDark ? "text-gray-400" : "text-gray-700"}`}>
              ИИ-агенты работают круглосуточно без перерывов и выходных,
              обеспечивая непрерывность бизнес-процессов и взаимодействия с
              клиентами.
            </p>
          </div>

          <div
            className={`p-6 rounded-xl overflow-hidden ${
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
                  d="M5 22V12"
                  stroke={isDark ? "#4F97FF" : "#0167F3"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19 22V12"
                  stroke={isDark ? "#4F97FF" : "#0167F3"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 12C5 12 8 6 12 6C16 6 19 12 19 12"
                  stroke={isDark ? "#4F97FF" : "#0167F3"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19 22H5"
                  stroke={isDark ? "#4F97FF" : "#0167F3"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 6V2"
                  stroke={isDark ? "#4F97FF" : "#0167F3"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 2H7"
                  stroke={isDark ? "#4F97FF" : "#0167F3"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold dark:text-white text-black mb-3">
              Масштабируемость бизнеса
            </h3>
            <p className={`${isDark ? "text-gray-400" : "text-gray-700"}`}>
              ИИ-агенты легко масштабируются для обработки растущих объемов
              данных и запросов без необходимости пропорционального увеличения
              команды.
            </p>
          </div>

          <div
            className={`p-6 rounded-xl overflow-hidden ${
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
                  d="M12 4.35418C10.8954 4.35418 10 5.24961 10 6.35418C10 7.45875 10.8954 8.35418 12 8.35418C13.1046 8.35418 14 7.45875 14 6.35418C14 5.24961 13.1046 4.35418 12 4.35418Z"
                  stroke={isDark ? "#4F97FF" : "#0167F3"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 15.3542C10.8954 15.3542 10 16.2496 10 17.3542C10 18.4588 10.8954 19.3542 12 19.3542C13.1046 19.3542 14 18.4588 14 17.3542C14 16.2496 13.1046 15.3542 12 15.3542Z"
                  stroke={isDark ? "#4F97FF" : "#0167F3"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 10.3542C16.8954 10.3542 16 11.2496 16 12.3542C16 13.4588 16.8954 14.3542 18 14.3542C19.1046 14.3542 20 13.4588 20 12.3542C20 11.2496 19.1046 10.3542 18 10.3542Z"
                  stroke={isDark ? "#4F97FF" : "#0167F3"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 10.3542C4.89543 10.3542 4 11.2496 4 12.3542C4 13.4588 4.89543 14.3542 6 14.3542C7.10457 14.3542 8 13.4588 8 12.3542C8 11.2496 7.10457 10.3542 6 10.3542Z"
                  stroke={isDark ? "#4F97FF" : "#0167F3"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 8L14 10"
                  stroke={isDark ? "#4F97FF" : "#0167F3"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 15L16 17"
                  stroke={isDark ? "#4F97FF" : "#0167F3"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 15L10 17"
                  stroke={isDark ? "#4F97FF" : "#0167F3"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 8L8 10"
                  stroke={isDark ? "#4F97FF" : "#0167F3"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold dark:text-white text-black mb-3">
              Повышение точности
            </h3>
            <p className={`${isDark ? "text-gray-400" : "text-gray-700"}`}>
              ИИ-агенты минимизируют человеческие ошибки, обеспечивая точность
              выполнения задач и принятия решений до 99.9%.
            </p>
          </div>

          <div
            className={`p-6 rounded-xl overflow-hidden ${
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
                  d="M12 10L12 16"
                  stroke={isDark ? "#4F97FF" : "#0167F3"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 6L12 8"
                  stroke={isDark ? "#4F97FF" : "#0167F3"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke={isDark ? "#4F97FF" : "#0167F3"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold dark:text-white text-black mb-3">
              Аналитика и инсайты
            </h3>
            <p className={`${isDark ? "text-gray-400" : "text-gray-700"}`}>
              ИИ-агенты выявляют тренды, закономерности и возможности для
              улучшения, которые могут быть не очевидны для человека,
              предоставляя ценные данные для принятия стратегических решений.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BenefitsSection;
