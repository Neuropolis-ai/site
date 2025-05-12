"use client";

import { useTheme } from "@/context/ThemeContext";
import Container from "@/components/ui/Container";

const AboutSection = () => {
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
            О Сервисе
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold dark:text-white text-black mb-4">
            Что такое ИИ-агенты и как они работают
          </h2>
          <p
            className={`max-w-2xl mx-auto leading-relaxed ${
              isDark ? "text-[#919191]" : "text-gray-600"
            }`}
          >
            ИИ-агенты — это автономные программы, которые выполняют задачи с
            минимальным вмешательством человека, используя продвинутые алгоритмы
            искусственного интеллекта.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div
            className={`p-6 rounded-xl overflow-hidden relative ${
              isDark
                ? "process-card bg-[#050A1B]"
                : "bg-gray-50 border border-gray-200"
            }`}
          >
            <img
              src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1200&h=800&q=80"
              alt="ИИ-агент в действии"
              className="w-full h-auto rounded-lg"
              onError={(e) => {
                e.currentTarget.src =
                  "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1200&h=800&q=80";
              }}
            />
          </div>

          <div className="space-y-6">
            <div
              className={`p-6 rounded-xl overflow-hidden ${
                isDark
                  ? "bg-[#050A1B] process-card"
                  : "bg-white border border-gray-100"
              }`}
            >
              <h3 className="text-xl font-semibold dark:text-white text-black mb-3">
                Автоматизация сложных процессов
              </h3>
              <p className={`${isDark ? "text-gray-400" : "text-gray-700"}`}>
                ИИ-агенты способны выполнять цепочки сложных задач,
                самостоятельно принимая решения на основе данных и контекста
                ситуации.
              </p>
            </div>

            <div
              className={`p-6 rounded-xl overflow-hidden ${
                isDark
                  ? "bg-[#050A1B] process-card"
                  : "bg-white border border-gray-100"
              }`}
            >
              <h3 className="text-xl font-semibold dark:text-white text-black mb-3">
                Персонализированное взаимодействие
              </h3>
              <p className={`${isDark ? "text-gray-400" : "text-gray-700"}`}>
                Агенты адаптируются к специфическим потребностям пользователей,
                создавая персонализированный опыт взаимодействия.
              </p>
            </div>

            <div
              className={`p-6 rounded-xl overflow-hidden ${
                isDark
                  ? "bg-[#050A1B] process-card"
                  : "bg-white border border-gray-100"
              }`}
            >
              <h3 className="text-xl font-semibold dark:text-white text-black mb-3">
                Масштабируемость и гибкость
              </h3>
              <p className={`${isDark ? "text-gray-400" : "text-gray-700"}`}>
                Наши решения легко масштабируются и адаптируются под растущие
                потребности вашего бизнеса, обеспечивая долгосрочную ценность.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
