"use client";

import { useTheme } from "@/context/ThemeContext";
import Container from "@/components/ui/Container";
import { BsCheck2Circle } from "react-icons/bs";

const WhyUsSection = () => {
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
            Почему мы
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold dark:text-white text-black mb-4">
            Почему выбирают Neuropolis.ai
          </h2>
          <p
            className={`max-w-2xl mx-auto leading-relaxed ${
              isDark ? "text-[#919191]" : "text-gray-600"
            }`}
          >
            Мы не просто разработчики ИИ-агентов, мы ваши партнеры в цифровой
            трансформации бизнеса
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div
                  className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                    isDark
                      ? "bg-blue-900/30 text-blue-400"
                      : "bg-blue-100 text-blue-600"
                  }`}
                >
                  <BsCheck2Circle size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold dark:text-white text-black mb-2">
                    Экспертный опыт
                  </h3>
                  <p
                    className={`${isDark ? "text-gray-400" : "text-gray-700"}`}
                  >
                    Команда профессионалов с многолетним опытом в разработке
                    ИИ-решений и автоматизации бизнес-процессов.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div
                  className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                    isDark
                      ? "bg-blue-900/30 text-blue-400"
                      : "bg-blue-100 text-blue-600"
                  }`}
                >
                  <BsCheck2Circle size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold dark:text-white text-black mb-2">
                    Индивидуальный подход
                  </h3>
                  <p
                    className={`${isDark ? "text-gray-400" : "text-gray-700"}`}
                  >
                    Мы не используем шаблонные решения, а создаем уникальных
                    ИИ-агентов, точно соответствующих вашим бизнес-потребностям.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div
                  className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                    isDark
                      ? "bg-blue-900/30 text-blue-400"
                      : "bg-blue-100 text-blue-600"
                  }`}
                >
                  <BsCheck2Circle size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold dark:text-white text-black mb-2">
                    Полный цикл разработки
                  </h3>
                  <p
                    className={`${isDark ? "text-gray-400" : "text-gray-700"}`}
                  >
                    От анализа и проектирования до внедрения и поддержки - мы
                    берем на себя все этапы создания и интеграции ИИ-агентов.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div
                  className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                    isDark
                      ? "bg-blue-900/30 text-blue-400"
                      : "bg-blue-100 text-blue-600"
                  }`}
                >
                  <BsCheck2Circle size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold dark:text-white text-black mb-2">
                    Передовые технологии
                  </h3>
                  <p
                    className={`${isDark ? "text-gray-400" : "text-gray-700"}`}
                  >
                    Используем самые современные методы машинного обучения,
                    нейронные сети и алгоритмы для создания интеллектуальных
                    агентов.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`p-6 rounded-xl overflow-hidden ${
              isDark
                ? "bg-[#050A1B] process-card"
                : "bg-white border border-gray-100"
            }`}
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
                alt="Наша команда"
                className="w-full h-auto rounded-lg mb-6"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80";
                }}
              />

              <div
                className={`p-6 rounded-lg ${
                  isDark
                    ? "bg-gradient-to-r from-blue-900/70 to-purple-900/70 backdrop-blur-sm"
                    : "bg-white/90 backdrop-blur-sm shadow-lg"
                } absolute bottom-10 left-10 right-10`}
              >
                <div
                  className={`flex items-center mb-3 ${
                    isDark ? "text-white" : "text-black"
                  }`}
                >
                  <div className="text-4xl font-bold mr-2">100+</div>
                  <div className="text-lg">
                    реализованных проектов по внедрению ИИ-решений
                  </div>
                </div>
                <div className="flex gap-3">
                  <div
                    className={`px-3 py-1 rounded-full text-sm ${
                      isDark
                        ? "bg-blue-900/50 text-blue-200"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    Финтех
                  </div>
                  <div
                    className={`px-3 py-1 rounded-full text-sm ${
                      isDark
                        ? "bg-purple-900/50 text-purple-200"
                        : "bg-purple-100 text-purple-700"
                    }`}
                  >
                    Ритейл
                  </div>
                  <div
                    className={`px-3 py-1 rounded-full text-sm ${
                      isDark
                        ? "bg-green-900/50 text-green-200"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    Логистика
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-6">
              <div
                className={`p-4 rounded-lg text-center ${
                  isDark ? "bg-[#0d1635]" : "bg-gray-50"
                }`}
              >
                <div
                  className={`text-2xl font-bold mb-1 ${
                    isDark ? "text-white" : "text-black"
                  }`}
                >
                  5+ лет
                </div>
                <div
                  className={`text-sm ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  на рынке ИИ
                </div>
              </div>

              <div
                className={`p-4 rounded-lg text-center ${
                  isDark ? "bg-[#0d1635]" : "bg-gray-50"
                }`}
              >
                <div
                  className={`text-2xl font-bold mb-1 ${
                    isDark ? "text-white" : "text-black"
                  }`}
                >
                  97%
                </div>
                <div
                  className={`text-sm ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  клиентов довольны
                </div>
              </div>

              <div
                className={`p-4 rounded-lg text-center ${
                  isDark ? "bg-[#0d1635]" : "bg-gray-50"
                }`}
              >
                <div
                  className={`text-2xl font-bold mb-1 ${
                    isDark ? "text-white" : "text-black"
                  }`}
                >
                  24/7
                </div>
                <div
                  className={`text-sm ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  техподдержка
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhyUsSection;
