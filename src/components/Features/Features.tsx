"use client";
import { useTheme } from "@/context/ThemeContext";
import { useEffect, useRef } from "react";
import "../../style/icon-animations.css";
import Container from "../ui/Container";
import {
  BarChart3,
  Target,
  MessageSquare,
  Layers,
  FileText,
  Database,
} from "lucide-react";

const Features = () => {
  const { isDark } = useTheme();
  const featuresRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    const currentRef = featuresRef.current;

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
    <section className="py-20 md:py-28 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900 -z-10"></div>
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-gradient-to-br from-blue-200/20 to-blue-400/20 dark:from-blue-500/10 dark:to-blue-700/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-200/20 to-indigo-400/20 dark:from-indigo-500/10 dark:to-indigo-700/10 rounded-full blur-3xl -z-10"></div>

      {/* Dark mode video background */}
      {isDark && (
        <div className="video-container fx">
          <div className="video-content f">
            <video autoPlay loop muted playsInline className="video-one">
              <source src="/assets/video/hero-bg.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      )}

      <Container>
        <div className="text-center mb-16 md:mb-20 relative z-10">
          <div
            className={`inline-block px-4 py-1 rounded-full text-sm mb-4 switch-box ${
              !isDark && "light-switch-box"
            }`}
          >
            Возможности
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 dark:text-white mb-4">
            Используйте весь{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0167F3] to-[#399AFC]">
              потенциал ИИ
            </span>{" "}
            для вашего бизнеса
          </h2>
          <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Наши решения помогают компаниям автоматизировать процессы,
            оптимизировать ресурсы и принимать более обоснованные решения на
            основе данных
          </p>
        </div>

        <div
          ref={featuresRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-10"
        >
          {/* Feature 1 - Предиктивная аналитика */}
          <div className="group relative flex flex-col h-full rounded-2xl transition-all duration-300 backdrop-blur-lg bg-white/60 dark:bg-gray-900/50 border border-white/20 dark:border-gray-700/30 overflow-hidden hover:shadow-lg hover:-translate-y-1 p-6">
            <div
              className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${
                isDark ? "bg-blue-900/20" : "bg-blue-500/10"
              }`}
            >
              <BarChart3
                className="w-8 h-8 text-blue-600 dark:text-blue-400"
                strokeWidth={1.75}
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Предиктивная аналитика
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-4">
              Используйте ИИ для анализа исторических данных и прогнозирования
              будущих трендов. Повышайте точность бизнес-прогнозов на 30-40%.
            </p>
            <div className="mt-auto pt-3 border-t border-blue-100/50 dark:border-blue-800/40">
              <p className="font-medium text-blue-600 dark:text-blue-400">
                Принимайте решения на основе точных прогнозов
              </p>
            </div>
          </div>

          {/* Feature 2 - Персонализация маркетинга */}
          <div className="group relative flex flex-col h-full rounded-2xl transition-all duration-300 backdrop-blur-lg bg-white/60 dark:bg-gray-900/50 border border-white/20 dark:border-gray-700/30 overflow-hidden hover:shadow-lg hover:-translate-y-1 p-6">
            <div
              className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${
                isDark ? "bg-blue-900/20" : "bg-blue-500/10"
              }`}
            >
              <Target
                className="w-8 h-8 text-blue-600 dark:text-blue-400"
                strokeWidth={1.75}
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Персонализация маркетинга
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-4">
              Применяйте ИИ для точечного таргетинга аудитории и создания
              персонализированного контента. Увеличение конверсии до 25%.
            </p>
            <div className="mt-auto pt-3 border-t border-blue-100/50 dark:border-blue-800/40">
              <p className="font-medium text-blue-600 dark:text-blue-400">
                Создавайте контент, который резонирует с вашей аудиторией
              </p>
            </div>
          </div>

          {/* Feature 3 - Служба поддержки с ИИ-агентом */}
          <div className="group relative flex flex-col h-full rounded-2xl transition-all duration-300 backdrop-blur-lg bg-white/60 dark:bg-gray-900/50 border border-white/20 dark:border-gray-700/30 overflow-hidden hover:shadow-lg hover:-translate-y-1 p-6">
            <div
              className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${
                isDark ? "bg-blue-900/20" : "bg-blue-500/10"
              }`}
            >
              <MessageSquare
                className="w-8 h-8 text-blue-600 dark:text-blue-400"
                strokeWidth={1.75}
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Служба поддержки с ИИ-агентом
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-4">
              Разрабатываем ИИ-агентов для службы поддержки, которые общаются с
              клиентами и отвечают на сложные запросы 24/7.
            </p>
            <div className="mt-auto pt-3 border-t border-blue-100/50 dark:border-blue-800/40">
              <p className="font-medium text-blue-600 dark:text-blue-400">
                Снижение нагрузки на поддержку до 60%
              </p>
            </div>
          </div>

          {/* Feature 4 - Интеграция ИИ */}
          <div className="group relative flex flex-col h-full rounded-2xl transition-all duration-300 backdrop-blur-lg bg-white/60 dark:bg-gray-900/50 border border-white/20 dark:border-gray-700/30 overflow-hidden hover:shadow-lg hover:-translate-y-1 p-6">
            <div
              className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${
                isDark ? "bg-blue-900/20" : "bg-blue-500/10"
              }`}
            >
              <Layers
                className="w-8 h-8 text-blue-600 dark:text-blue-400"
                strokeWidth={1.75}
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Интеграция ИИ
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-4">
              Помогаем компаниям внедрять ИИ-агентов в их существующие
              программные платформы и бизнес-процессы без нарушения работы.
            </p>
            <div className="mt-auto pt-3 border-t border-blue-100/50 dark:border-blue-800/40">
              <p className="font-medium text-blue-600 dark:text-blue-400">
                Безопасное внедрение с минимальными рисками
              </p>
            </div>
          </div>

          {/* Feature 5 - Создание контента с ИИ */}
          <div className="group relative flex flex-col h-full rounded-2xl transition-all duration-300 backdrop-blur-lg bg-white/60 dark:bg-gray-900/50 border border-white/20 dark:border-gray-700/30 overflow-hidden hover:shadow-lg hover:-translate-y-1 p-6">
            <div
              className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${
                isDark ? "bg-blue-900/20" : "bg-blue-500/10"
              }`}
            >
              <FileText
                className="w-8 h-8 text-blue-600 dark:text-blue-400"
                strokeWidth={1.75}
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Создание контента с ИИ
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-4">
              Разрабатываем ИИ-решения для генерации маркетинговых материалов,
              статей, описаний товаров и отчетов в соответствии с вашим
              фирменным стилем.
            </p>
            <div className="mt-auto pt-3 border-t border-blue-100/50 dark:border-blue-800/40">
              <p className="font-medium text-blue-600 dark:text-blue-400">
                Ускорение создания контента в 5-10 раз
              </p>
            </div>
          </div>

          {/* Feature 6 - Обработка и анализ данных */}
          <div className="group relative flex flex-col h-full rounded-2xl transition-all duration-300 backdrop-blur-lg bg-white/60 dark:bg-gray-900/50 border border-white/20 dark:border-gray-700/30 overflow-hidden hover:shadow-lg hover:-translate-y-1 p-6">
            <div
              className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${
                isDark ? "bg-blue-900/20" : "bg-blue-500/10"
              }`}
            >
              <Database
                className="w-8 h-8 text-blue-600 dark:text-blue-400"
                strokeWidth={1.75}
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Обработка и анализ данных
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-4">
              Создаем системы автоматической обработки и интеллектуального
              анализа больших объемов данных для выявления закономерностей и
              аномалий.
            </p>
            <div className="mt-auto pt-3 border-t border-blue-100/50 dark:border-blue-800/40">
              <p className="font-medium text-blue-600 dark:text-blue-400">
                Извлекайте ценные инсайты из неструктурированных данных
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="/ai-agent"
            className="inline-block py-3 px-8 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg transition-all duration-300 shadow-lg"
          >
            Узнать больше о наших ИИ-решениях
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Features;
