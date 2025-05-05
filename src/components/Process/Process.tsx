"use client";

import { useTheme } from "@/context/ThemeContext";
import { useEffect, useRef } from "react";
import "../../style/card-line.css";
import "../../style/icon-animations.css";
import Container from "../ui/Container";
import { Brain, Settings, BarChart3, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Process = () => {
  const { isDark } = useTheme();
  const processRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    const currentRef = processRef.current;

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
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Градиентный фон */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900 -z-10"></div>
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-gradient-to-br from-blue-200/20 to-blue-400/20 dark:from-blue-500/10 dark:to-blue-700/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-200/20 to-indigo-400/20 dark:from-indigo-500/10 dark:to-indigo-700/10 rounded-full blur-3xl -z-10"></div>

      <Container>
        <div className="text-center mb-16">
          <div
            className={`inline-block px-4 py-1 rounded-full text-sm mb-4 switch-box ${
              !isDark && "light-switch-box"
            }`}
          >
            Процесс
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 dark:text-white mb-4">
            Автономные ИИ-решения
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            С нами ИИ становится простым, масштабируемым и всегда работает на
            улучшение вашего бизнеса.
          </p>
        </div>

        <div
          ref={processRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {/* Card 1 - Исследование и кастомизация */}
          <div className="group relative flex flex-col h-full rounded-2xl transition-all duration-300 backdrop-blur-lg bg-white/60 dark:bg-gray-900/50 border border-white/20 dark:border-gray-700/30 overflow-hidden hover:shadow-lg hover:-translate-y-1 p-6">
            <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 bg-blue-500/10 dark:bg-blue-900/20">
              <Brain
                className="w-8 h-8 text-blue-600 dark:text-blue-400"
                strokeWidth={1.75}
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Исследование и кастомизация
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-4">
              Мы начинаем с анализа потребностей вашего бизнеса и постановки
              целей, адаптируя ИИ-решения под уникальные требования вашей
              компании для достижения максимальных результатов.
            </p>
            <div className="mt-auto pt-3 border-t border-blue-100/50 dark:border-blue-800/40">
              <p className="font-medium text-blue-600 dark:text-blue-400">
                Точные решения для ваших задач
              </p>
            </div>
          </div>

          {/* Card 2 - Бесшовная Интеграция ИИ */}
          <div className="group relative flex flex-col h-full rounded-2xl transition-all duration-300 backdrop-blur-lg bg-white/60 dark:bg-gray-900/50 border border-white/20 dark:border-gray-700/30 overflow-hidden hover:shadow-lg hover:-translate-y-1 p-6">
            <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 bg-blue-500/10 dark:bg-blue-900/20">
              <Settings
                className="w-8 h-8 text-blue-600 dark:text-blue-400"
                strokeWidth={1.75}
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Бесшовная Интеграция ИИ
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-4">
              Наши инженеры и разработчики ИИ интегрируют решения в вашу
              существующую инфраструктуру, обеспечивая бесшовное взаимодействие
              систем и максимальную автоматизацию.
            </p>
            <div className="mt-auto pt-3 border-t border-blue-100/50 dark:border-blue-800/40">
              <p className="font-medium text-blue-600 dark:text-blue-400">
                Минимальное нарушение рабочих процессов
              </p>
            </div>
          </div>

          {/* Card 3 - Оптимизация и Поддержка */}
          <div className="group relative flex flex-col h-full rounded-2xl transition-all duration-300 backdrop-blur-lg bg-white/60 dark:bg-gray-900/50 border border-white/20 dark:border-gray-700/30 overflow-hidden hover:shadow-lg hover:-translate-y-1 p-6">
            <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 bg-blue-500/10 dark:bg-blue-900/20">
              <BarChart3
                className="w-8 h-8 text-blue-600 dark:text-blue-400"
                strokeWidth={1.75}
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Оптимизация и Поддержка
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-4">
              После внедрения мы продолжаем мониторить и оптимизировать ИИ,
              обеспечивая его постоянное обучение и улучшение на основе новых
              данных и результатов работы.
            </p>
            <div className="mt-auto pt-3 border-t border-blue-100/50 dark:border-blue-800/40">
              <p className="font-medium text-blue-600 dark:text-blue-400">
                Постоянное улучшение и развитие
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <motion.a
            href="/cases"
            whileHover={{ x: 5 }}
            className="inline-flex items-center mt-6 text-blue-600 dark:text-blue-400 font-medium text-lg"
          >
            Подробнее о решениях <ArrowRight className="ml-2 w-5 h-5" />
          </motion.a>
        </div>
      </Container>
    </section>
  );
};

export default Process;
