"use client";

import { useTheme } from "@/context/ThemeContext";
import Container from "@/components/ui/Container";
import ButtonLink from "@/components/ui/buttonLink";
import {
  BsArrowRight,
  BsFileEarmarkPdf,
  BsBook,
  BsPlayCircle,
} from "react-icons/bs";

const ResourcesSection = () => {
  const { isDark } = useTheme();

  return (
    <section id="resources" className="py-20">
      <Container>
        <div className="text-center mb-16 relative z-10">
          <div
            className={`inline-block px-4 py-1 rounded-full text-sm mb-4 switch-box ${
              !isDark && "light-switch-box"
            }`}
          >
            Ресурсы
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold dark:text-white text-black mb-4">
            Полезные материалы о разработке ИИ-агентов
          </h2>
          <p
            className={`max-w-2xl mx-auto leading-relaxed ${
              isDark ? "text-[#919191]" : "text-gray-600"
            }`}
          >
            Изучите наши руководства и кейсы, чтобы узнать больше о возможностях
            ИИ-агентов для вашего бизнеса
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            className={`p-6 rounded-xl overflow-hidden ${
              isDark
                ? "bg-[#050A1B] process-card"
                : "bg-white border border-gray-100"
            }`}
          >
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-lg mb-5 ${
                isDark
                  ? "bg-blue-900/30 text-blue-400"
                  : "bg-blue-50 text-blue-600"
              }`}
            >
              <BsFileEarmarkPdf size={24} />
            </div>
            <h3 className="text-xl font-semibold dark:text-white text-black mb-3">
              Руководство по внедрению ИИ-агентов
            </h3>
            <p className={`${isDark ? "text-gray-400" : "text-gray-700"} mb-4`}>
              Детальное руководство о том, как успешно внедрить ИИ-агентов в
              различные бизнес-процессы и оценить эффективность.
            </p>
            <ButtonLink
              variantBtn="link"
              href="#"
              className={`inline-flex items-center ${
                isDark ? "text-blue-400" : "text-blue-600"
              } hover:underline`}
            >
              Скачать PDF
              <BsArrowRight className="ml-2" />
            </ButtonLink>
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
                isDark
                  ? "bg-blue-900/30 text-blue-400"
                  : "bg-blue-50 text-blue-600"
              }`}
            >
              <BsBook size={24} />
            </div>
            <h3 className="text-xl font-semibold dark:text-white text-black mb-3">
              Сборник кейсов успешного применения
            </h3>
            <p className={`${isDark ? "text-gray-400" : "text-gray-700"} mb-4`}>
              Реальные истории успеха внедрения ИИ-агентов в разных отраслях:
              финансы, здравоохранение, e-commerce и другие.
            </p>
            <ButtonLink
              variantBtn="link"
              href="#"
              className={`inline-flex items-center ${
                isDark ? "text-blue-400" : "text-blue-600"
              } hover:underline`}
            >
              Читать онлайн
              <BsArrowRight className="ml-2" />
            </ButtonLink>
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
                isDark
                  ? "bg-blue-900/30 text-blue-400"
                  : "bg-blue-50 text-blue-600"
              }`}
            >
              <BsPlayCircle size={24} />
            </div>
            <h3 className="text-xl font-semibold dark:text-white text-black mb-3">
              Видеодемонстрация ИИ-агентов
            </h3>
            <p className={`${isDark ? "text-gray-400" : "text-gray-700"} mb-4`}>
              Посмотрите, как ИИ-агенты работают в реальных бизнес-сценариях, и
              какие результаты они приносят.
            </p>
            <ButtonLink
              variantBtn="link"
              href="#"
              className={`inline-flex items-center ${
                isDark ? "text-blue-400" : "text-blue-600"
              } hover:underline`}
            >
              Смотреть видео
              <BsArrowRight className="ml-2" />
            </ButtonLink>
          </div>
        </div>

        <div className="mt-12">
          <div
            className={`p-8 rounded-xl overflow-hidden ${
              isDark
                ? "bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-800/30"
                : "bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100"
            }`}
          >
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                <h3 className="text-2xl font-semibold dark:text-white text-black mb-4">
                  Получите бесплатную консультацию эксперта
                </h3>
                <p
                  className={`${
                    isDark ? "text-gray-300" : "text-gray-700"
                  } mb-4`}
                >
                  Наши специалисты проанализируют ваши бизнес-процессы и
                  предложат оптимальные решения с использованием ИИ-агентов
                  конкретно для вашего бизнеса.
                </p>
                <ButtonLink
                  variantBtn="btn"
                  href="#contact"
                  className="inline-flex items-center bg-gradient-to-r from-[#0167F3] to-[#399AFC] text-white rounded-[10px] px-6 py-3 hover:opacity-90 transition-opacity"
                >
                  Записаться на консультацию
                  <BsArrowRight className="ml-2" />
                </ButtonLink>
              </div>
              <div className="md:w-1/3">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                  alt="ИИ консультация"
                  className="w-full h-auto rounded-lg shadow-lg"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ResourcesSection;
