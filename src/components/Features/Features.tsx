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
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { Heading } from "@/components/ui/heading";
import Subheading from "@/components/ui/subheading";

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
            className={`inline-flex items-center justify-center border border-blue-300 dark:border-blue-800 gap-2 px-4 py-1.5 rounded-full text-sm mb-4 bg-blue-500/10 text-blue-600 dark:text-blue-400`}
          >
            Возможности
          </div>
          <Heading
            level={2}
            align="center"
            className="text-gray-900 dark:text-white mb-4"
          >
            Используйте весь{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0167F3] to-[#399AFC]">
              потенциал ИИ
            </span>{" "}
            для вашего бизнеса
          </Heading>
          <Subheading
            align="center"
            className="mt-6 md:text-xl max-w-3xl mx-auto section-subtitle"
          >
            Наши решения помогают компаниям автоматизировать процессы,
            оптимизировать ресурсы и принимать более обоснованные решения на
            основе данных
          </Subheading>
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
            <Heading level={3} className="text-gray-900 dark:text-white mb-3">
              Предиктивная аналитика
            </Heading>
            <Subheading className="mb-4 feature-card-text text-sm">
              Используйте ИИ для анализа исторических данных и прогнозирования
              будущих трендов. Повышайте точность бизнес-прогнозов на 30-40%.
            </Subheading>
            <div className="mt-auto pt-3 border-t border-blue-100/50 dark:border-blue-800/40">
              <p className="font-medium text-blue-600 dark:text-blue-400 feature-card-action">
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
            <Heading level={3} className="text-gray-900 dark:text-white mb-3">
              Персонализация маркетинга
            </Heading>
            <Subheading className="mb-4 feature-card-text text-sm">
              Применяйте ИИ для точечного таргетинга аудитории и создания
              персонализированного контента. Увеличение конверсии до 25%.
            </Subheading>
            <div className="mt-auto pt-3 border-t border-blue-100/50 dark:border-blue-800/40">
              <p className="font-medium text-blue-600 dark:text-blue-400 feature-card-action">
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
            <Heading level={3} className="text-gray-900 dark:text-white mb-3">
              Служба поддержки с ИИ-агентом
            </Heading>
            <Subheading className="mb-4 feature-card-text text-sm">
              Разрабатываем ИИ-агентов для службы поддержки, которые общаются с
              клиентами и отвечают на сложные запросы 24/7.
            </Subheading>
            <div className="mt-auto pt-3 border-t border-blue-100/50 dark:border-blue-800/40">
              <p className="font-medium text-blue-600 dark:text-blue-400 feature-card-action">
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
            <Heading level={3} className="text-gray-900 dark:text-white mb-3">
              Интеграция ИИ
            </Heading>
            <Subheading className="mb-4 feature-card-text text-sm">
              Помогаем компаниям внедрять ИИ-агентов в их существующие
              программные платформы и бизнес-процессы без нарушения работы.
            </Subheading>
            <div className="mt-auto pt-3 border-t border-blue-100/50 dark:border-blue-800/40">
              <p className="font-medium text-blue-600 dark:text-blue-400 feature-card-action">
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
            <Heading level={3} className="text-gray-900 dark:text-white mb-3">
              Создание контента с ИИ
            </Heading>
            <Subheading className="mb-4 feature-card-text text-sm">
              Разрабатываем ИИ-решения для генерации маркетинговых материалов,
              статей, описаний товаров и отчетов в соответствии с вашим
              фирменным стилем.
            </Subheading>
            <div className="mt-auto pt-3 border-t border-blue-100/50 dark:border-blue-800/40">
              <p className="font-medium text-blue-600 dark:text-blue-400 feature-card-action">
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
            <Heading level={3} className="text-gray-900 dark:text-white mb-3">
              Обработка и анализ данных
            </Heading>
            <Subheading className="mb-4 feature-card-text text-sm">
              Создаем системы автоматической обработки и интеллектуального
              анализа больших объемов данных для выявления закономерностей и
              аномалий.
            </Subheading>
            <div className="mt-auto pt-3 border-t border-blue-100/50 dark:border-blue-800/40">
              <p className="font-medium text-blue-600 dark:text-blue-400 feature-card-action">
                Извлекайте ценные инсайты из неструктурированных данных
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="/cases"
            className="inline-flex items-center justify-center text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors"
          >
            Ознакомьтесь с нашими кейсами
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Features;
