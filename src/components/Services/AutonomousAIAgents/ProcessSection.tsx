"use client";

import { useTheme } from "@/context/ThemeContext";
import Container from "@/components/ui/Container";

const ProcessSection = () => {
  const { isDark } = useTheme();

  return (
    <section className="py-20">
      <Container>
        <div className="text-center mb-16 relative z-10">
          <div
            className={`inline-block px-4 py-1 rounded-full text-sm mb-4 switch-box ${
              !isDark && "light-switch-box"
            }`}
          >
            Процесс
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold dark:text-white text-black mb-4">
            Как мы создаем ИИ-агентов для вашего бизнеса
          </h2>
          <p
            className={`max-w-2xl mx-auto leading-relaxed ${
              isDark ? "text-[#919191]" : "text-gray-600"
            }`}
          >
            Наш процесс разработки обеспечивает создание эффективных решений,
            точно соответствующих вашим бизнес-задачам
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div
            className={`p-6 rounded-xl overflow-hidden relative ${
              isDark
                ? "bg-[#050A1B] process-card"
                : "bg-white border border-gray-100"
            }`}
          >
            <div className="absolute top-6 right-6">
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full text-lg font-bold ${
                  isDark
                    ? "bg-blue-900/30 text-blue-400"
                    : "bg-blue-100 text-blue-600"
                }`}
              >
                1
              </div>
            </div>
            <h3 className="text-xl font-semibold dark:text-white text-black mb-3 pr-12">
              Анализ
            </h3>
            <p className={`${isDark ? "text-gray-400" : "text-gray-700"}`}>
              Глубокий анализ ваших бизнес-процессов и потребностей для
              определения оптимальных областей применения ИИ-агентов.
            </p>
          </div>

          <div
            className={`p-6 rounded-xl overflow-hidden relative ${
              isDark
                ? "bg-[#050A1B] process-card"
                : "bg-white border border-gray-100"
            }`}
          >
            <div className="absolute top-6 right-6">
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full text-lg font-bold ${
                  isDark
                    ? "bg-blue-900/30 text-blue-400"
                    : "bg-blue-100 text-blue-600"
                }`}
              >
                2
              </div>
            </div>
            <h3 className="text-xl font-semibold dark:text-white text-black mb-3 pr-12">
              Дизайн
            </h3>
            <p className={`${isDark ? "text-gray-400" : "text-gray-700"}`}>
              Разработка архитектуры и функционала ИИ-агента с учетом ваших
              уникальных потребностей и интеграционных требований.
            </p>
          </div>

          <div
            className={`p-6 rounded-xl overflow-hidden relative ${
              isDark
                ? "bg-[#050A1B] process-card"
                : "bg-white border border-gray-100"
            }`}
          >
            <div className="absolute top-6 right-6">
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full text-lg font-bold ${
                  isDark
                    ? "bg-blue-900/30 text-blue-400"
                    : "bg-blue-100 text-blue-600"
                }`}
              >
                3
              </div>
            </div>
            <h3 className="text-xl font-semibold dark:text-white text-black mb-3 pr-12">
              Разработка
            </h3>
            <p className={`${isDark ? "text-gray-400" : "text-gray-700"}`}>
              Создание и тренировка ИИ-агента с использованием передовых
              технологий машинного обучения и нейронных сетей.
            </p>
          </div>

          <div
            className={`p-6 rounded-xl overflow-hidden relative ${
              isDark
                ? "bg-[#050A1B] process-card"
                : "bg-white border border-gray-100"
            }`}
          >
            <div className="absolute top-6 right-6">
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full text-lg font-bold ${
                  isDark
                    ? "bg-blue-900/30 text-blue-400"
                    : "bg-blue-100 text-blue-600"
                }`}
              >
                4
              </div>
            </div>
            <h3 className="text-xl font-semibold dark:text-white text-black mb-3 pr-12">
              Внедрение
            </h3>
            <p className={`${isDark ? "text-gray-400" : "text-gray-700"}`}>
              Интеграция ИИ-агента в вашу инфраструктуру, обучение персонала и
              постоянная поддержка для обеспечения максимальной эффективности.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div
            className={`p-8 rounded-xl overflow-hidden max-w-3xl mx-auto ${
              isDark
                ? "bg-[#050A1B] process-card"
                : "bg-white border border-gray-100"
            }`}
          >
            <h3 className="text-xl font-semibold dark:text-white text-black mb-4">
              Постоянное совершенствование
            </h3>
            <p className={`${isDark ? "text-gray-400" : "text-gray-700"}`}>
              Мы не останавливаемся на внедрении - ваши ИИ-агенты постоянно
              обучаются, адаптируются и улучшаются, обеспечивая долгосрочную
              ценность и конкурентное преимущество для вашего бизнеса.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProcessSection;
