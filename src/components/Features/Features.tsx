"use client";
import { useTheme } from "@/context/ThemeContext";
import { useEffect, useRef } from "react";
import "../../style/icon-animations.css";
import Container from "../ui/Container";

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
    <section className="py-20 bg-white relative dark:bg-[#050505]">
      {/* Background network effect */}
      {/* Background Video */}
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
        <div className="text-center mb-16 relative z-10">
          <div
            className={`inline-block px-4 py-1 rounded-full text-sm mb-4 switch-box ${
              !isDark && "light-switch-box"
            }`}
          >
            Возможности
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold dark:text-white text-black mb-4">
            Используйте весь потенциал ИИ
          </h2>
        </div>

        <div
          ref={featuresRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10"
        >
          {/* Feature 1 - Предиктивная аналитика */}
          <div className="text-center">
            <div
              className={`w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6 icon-animated ${
                isDark ? "bg-blue-900/20" : "bg-blue-100"
              }`}
            >
              <svg viewBox="0 0 24 24" width="28" height="28">
                <defs>
                  <linearGradient
                    id="analytics-gradient"
                    x1="0%"
                    y1="100%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#60a5fa" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>

                {/* Graph base */}
                <line
                  x1="4"
                  y1="18"
                  x2="20"
                  y2="18"
                  className="document-line"
                  style={{ animationDelay: "0.2s" }}
                />
                <line
                  x1="4"
                  y1="18"
                  x2="4"
                  y2="6"
                  className="document-line"
                  style={{ animationDelay: "0.4s" }}
                />

                {/* Chart lines */}
                <polyline
                  points="4,16 8,12 12,14 16,8 20,6"
                  className="document-line"
                  style={{ animationDelay: "0.6s", strokeWidth: "1.5" }}
                />

                {/* Data points */}
                <circle
                  cx="4"
                  cy="16"
                  r="1"
                  className="filled graph-point"
                  style={{ animationDelay: "0.8s" }}
                />
                <circle
                  cx="8"
                  cy="12"
                  r="1"
                  className="filled graph-point"
                  style={{ animationDelay: "1.0s" }}
                />
                <circle
                  cx="12"
                  cy="14"
                  r="1"
                  className="filled graph-point"
                  style={{ animationDelay: "1.2s" }}
                />
                <circle
                  cx="16"
                  cy="8"
                  r="1"
                  className="filled graph-point"
                  style={{ animationDelay: "1.4s" }}
                />
                <circle
                  cx="20"
                  cy="6"
                  r="1"
                  className="filled graph-point"
                  style={{ animationDelay: "1.6s" }}
                />

                {/* Predictive trend line (dashed) */}
                <path
                  d="M20,6 C21,5 22,4 23,3"
                  className="document-line"
                  style={{ animationDelay: "1.8s", strokeDasharray: "2,2" }}
                />

                {/* AI analysis indicator */}
                <circle
                  cx="18"
                  cy="10"
                  r="0.8"
                  className="particle"
                  style={{ animationDelay: "0.5s" }}
                />
                <circle
                  cx="14"
                  cy="12"
                  r="0.8"
                  className="particle"
                  style={{ animationDelay: "0.9s" }}
                />
                <circle
                  cx="10"
                  cy="10"
                  r="0.8"
                  className="particle"
                  style={{ animationDelay: "1.3s" }}
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold dark:text-white text-black mb-3">
              Предиктивная аналитика
            </h3>
            <p
              className={`feature-description max-[425px]:text-[14px] ${
                isDark ? "text-[#919191]" : "text-gray-600"
              }`}
            >
              Используйте ИИ для анализа исторических данных и прогнозирования
              будущих трендов.
            </p>
          </div>

          {/* Feature 2 - Персонализированные маркетинговые кампании */}
          <div className="text-center">
            <div
              className={`w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6 icon-animated ${
                isDark ? "bg-blue-900/20" : "bg-blue-100"
              }`}
            >
              <svg viewBox="0 0 24 24" width="28" height="28">
                <defs>
                  <linearGradient
                    id="marketing-gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#60a5fa" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>

                {/* User profiles */}
                <circle
                  cx="6"
                  cy="10"
                  r="2.5"
                  className="filled pulse"
                  style={{ animationDelay: "0.2s" }}
                />
                <circle
                  cx="12"
                  cy="8"
                  r="2.5"
                  className="filled pulse"
                  style={{ animationDelay: "0.4s" }}
                />
                <circle
                  cx="18"
                  cy="10"
                  r="2.5"
                  className="filled pulse"
                  style={{ animationDelay: "0.6s" }}
                />

                {/* Person icons */}
                <path
                  d="M6,8 Q6,7 6,7.5"
                  className="document-line"
                  style={{ animationDelay: "0.8s" }}
                />
                <circle
                  cx="6"
                  cy="6.5"
                  r="1.5"
                  className="document-line"
                  style={{ animationDelay: "1.0s" }}
                />

                <path
                  d="M12,6 Q12,5 12,5.5"
                  className="document-line"
                  style={{ animationDelay: "1.1s" }}
                />
                <circle
                  cx="12"
                  cy="4.5"
                  r="1.5"
                  className="document-line"
                  style={{ animationDelay: "1.3s" }}
                />

                <path
                  d="M18,8 Q18,7 18,7.5"
                  className="document-line"
                  style={{ animationDelay: "1.4s" }}
                />
                <circle
                  cx="18"
                  cy="6.5"
                  r="1.5"
                  className="document-line"
                  style={{ animationDelay: "1.6s" }}
                />

                {/* Personalized Content Connection */}
                <path
                  d="M6,12 L12,14 L18,12"
                  className="document-line"
                  style={{ animationDelay: "1.8s" }}
                />

                {/* Content piece with targeting */}
                <rect
                  x="8"
                  y="14"
                  width="8"
                  height="6"
                  rx="1"
                  className="filled"
                  style={{ animationDelay: "2.0s" }}
                />
                <path
                  d="M10,17 L14,17"
                  className="document-line"
                  style={{ animationDelay: "2.2s" }}
                />
                <path
                  d="M10,19 L14,19"
                  className="document-line"
                  style={{ animationDelay: "2.4s" }}
                />

                {/* Connection particles */}
                <circle
                  cx="9"
                  cy="13"
                  r="0.5"
                  className="particle"
                  style={{ animationDelay: "0.3s" }}
                />
                <circle
                  cx="15"
                  cy="13"
                  r="0.5"
                  className="particle"
                  style={{ animationDelay: "0.6s" }}
                />
                <circle
                  cx="12"
                  cy="16"
                  r="0.5"
                  className="particle"
                  style={{ animationDelay: "0.9s" }}
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold dark:text-white text-black mb-3">
              Персонализированные маркетинговые кампании
            </h3>
            <p
              className={`feature-description max-[425px]:text-[14px] ${
                isDark ? "text-[#919191]" : "text-gray-600"
              }`}
            >
              Применяйте ИИ для точечного таргетинга аудитории и создания
              персонализированного контента.
            </p>
          </div>

          {/* Feature 3 - Служба поддержки с ИИ-агенты */}
          <div className="text-center">
            <div
              className={`w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6 icon-animated ${
                isDark ? "bg-blue-900/20" : "bg-blue-100"
              }`}
            >
              <svg viewBox="0 0 24 24" width="28" height="28">
                <defs>
                  <linearGradient
                    id="support-gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#60a5fa" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>

                {/* Chat bubble (AI Support) */}
                <rect
                  x="4"
                  y="6"
                  width="16"
                  height="12"
                  rx="2"
                  className="filled"
                  style={{ animationDelay: "0.2s" }}
                />

                {/* AI icon */}
                <circle
                  cx="8"
                  cy="12"
                  r="2"
                  className="document-line"
                  style={{ animationDelay: "0.4s" }}
                />
                <path
                  d="M6,12 L10,12"
                  className="document-line"
                  style={{ animationDelay: "0.6s" }}
                />
                <path
                  d="M8,10 L8,14"
                  className="document-line"
                  style={{ animationDelay: "0.8s" }}
                />

                {/* Chat connections */}
                <path
                  d="M11,10 L17,10"
                  className="document-line"
                  style={{ animationDelay: "1.0s" }}
                />
                <path
                  d="M11,12 L17,12"
                  className="document-line"
                  style={{ animationDelay: "1.2s" }}
                />
                <path
                  d="M11,14 L15,14"
                  className="document-line"
                  style={{ animationDelay: "1.4s" }}
                />

                {/* Multiple users connecting */}
                <circle
                  cx="6"
                  cy="20"
                  r="1.5"
                  className="filled float"
                  style={{ animationDelay: "0.3s" }}
                />
                <circle
                  cx="12"
                  cy="21"
                  r="1.5"
                  className="filled float"
                  style={{ animationDelay: "0.6s" }}
                />
                <circle
                  cx="18"
                  cy="20"
                  r="1.5"
                  className="filled float"
                  style={{ animationDelay: "0.9s" }}
                />

                {/* Connections to chat */}
                <path
                  d="M6,18.5 L8,16"
                  className="document-line"
                  style={{ animationDelay: "1.6s" }}
                />
                <path
                  d="M12,19.5 L12,18"
                  className="document-line"
                  style={{ animationDelay: "1.8s" }}
                />
                <path
                  d="M18,18.5 L16,16"
                  className="document-line"
                  style={{ animationDelay: "2.0s" }}
                />

                {/* Processing particles */}
                <circle
                  cx="16"
                  cy="8"
                  r="0.5"
                  className="particle"
                  style={{ animationDelay: "0.5s" }}
                />
                <circle
                  cx="14"
                  cy="16"
                  r="0.5"
                  className="particle"
                  style={{ animationDelay: "1.0s" }}
                />
                <circle
                  cx="18"
                  cy="12"
                  r="0.5"
                  className="particle"
                  style={{ animationDelay: "1.5s" }}
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold dark:text-white text-black mb-3">
              Служба поддержки с ИИ-агенты
            </h3>
            <p
              className={`feature-description max-[425px]:text-[14px] ${
                isDark ? "text-[#919191]" : "text-gray-600"
              }`}
            >
              Разрабатываем ИИ-агентов для службы поддержки, которые общаются с
              клиентами и отвечают на сложные запросы.
            </p>
          </div>

          {/* Feature 4 - Интеграция ИИ */}
          <div className="text-center">
            <div
              className={`w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6 icon-animated ${
                isDark ? "bg-blue-900/20" : "bg-blue-100"
              }`}
            >
              <svg viewBox="0 0 24 24" width="28" height="28">
                <defs>
                  <linearGradient
                    id="integration-gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#60a5fa" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>

                {/* Central AI Hub */}
                <circle
                  cx="12"
                  cy="12"
                  r="3"
                  className="filled pulse"
                  style={{ animationDelay: "0.2s" }}
                />

                {/* Connecting systems */}
                <rect
                  x="3"
                  y="5"
                  width="4"
                  height="4"
                  rx="1"
                  className="filled"
                  style={{ animationDelay: "0.4s" }}
                />
                <rect
                  x="17"
                  y="5"
                  width="4"
                  height="4"
                  rx="1"
                  className="filled"
                  style={{ animationDelay: "0.6s" }}
                />
                <rect
                  x="3"
                  y="15"
                  width="4"
                  height="4"
                  rx="1"
                  className="filled"
                  style={{ animationDelay: "0.8s" }}
                />
                <rect
                  x="17"
                  y="15"
                  width="4"
                  height="4"
                  rx="1"
                  className="filled"
                  style={{ animationDelay: "1.0s" }}
                />

                {/* Integration lines */}
                <path
                  d="M7,7 L9,9"
                  className="document-line"
                  style={{ animationDelay: "1.2s" }}
                />
                <path
                  d="M17,7 L15,9"
                  className="document-line"
                  style={{ animationDelay: "1.4s" }}
                />
                <path
                  d="M7,17 L9,15"
                  className="document-line"
                  style={{ animationDelay: "1.6s" }}
                />
                <path
                  d="M17,17 L15,15"
                  className="document-line"
                  style={{ animationDelay: "1.8s" }}
                />

                {/* Inner puzzle pieces */}
                <path
                  d="M11,10 L10,10 Q9,10 9,11 L9,12 L10,12"
                  className="document-line"
                  style={{ animationDelay: "2.0s" }}
                />
                <path
                  d="M13,10 L14,10 Q15,10 15,11 L15,12 L14,12"
                  className="document-line"
                  style={{ animationDelay: "2.2s" }}
                />
                <path
                  d="M11,14 L10,14 Q9,14 9,13 L9,12 L10,12"
                  className="document-line"
                  style={{ animationDelay: "2.4s" }}
                />
                <path
                  d="M13,14 L14,14 Q15,14 15,13 L15,12 L14,12"
                  className="document-line"
                  style={{ animationDelay: "2.6s" }}
                />

                {/* Data Flow Particles */}
                <circle
                  cx="8"
                  cy="8"
                  r="0.5"
                  className="particle"
                  style={{ animationDelay: "0.3s" }}
                />
                <circle
                  cx="16"
                  cy="8"
                  r="0.5"
                  className="particle"
                  style={{ animationDelay: "0.6s" }}
                />
                <circle
                  cx="8"
                  cy="16"
                  r="0.5"
                  className="particle"
                  style={{ animationDelay: "0.9s" }}
                />
                <circle
                  cx="16"
                  cy="16"
                  r="0.5"
                  className="particle"
                  style={{ animationDelay: "1.2s" }}
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold dark:text-white text-black mb-3">
              Интеграция ИИ
            </h3>
            <p
              className={`feature-description max-[425px]:text-[14px] ${
                isDark ? "text-[#919191]" : "text-gray-600"
              }`}
            >
              Помогаем компаниям внедрять ИИ-агентов в их существующие
              программные платформы.
            </p>
          </div>

          {/* Feature 5 - Создание контента с ИИ */}
          <div className="text-center">
            <div
              className={`w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6 icon-animated ${
                isDark ? "bg-blue-900/20" : "bg-blue-100"
              }`}
            >
              <svg viewBox="0 0 24 24" width="28" height="28">
                <defs>
                  <linearGradient
                    id="content-gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#60a5fa" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>

                {/* Document base */}
                <rect
                  x="5"
                  y="4"
                  width="14"
                  height="16"
                  rx="2"
                  className="filled"
                  style={{ animationDelay: "0.2s" }}
                />

                {/* AI writing symbol */}
                <circle
                  cx="12"
                  cy="8"
                  r="2"
                  className="document-line"
                  style={{ animationDelay: "0.4s" }}
                />
                <path
                  d="M10,8 L14,8"
                  className="document-line"
                  style={{ animationDelay: "0.6s" }}
                />
                <path
                  d="M12,6 L12,10"
                  className="document-line"
                  style={{ animationDelay: "0.8s" }}
                />

                {/* Content lines */}
                <path
                  d="M8,12 L16,12"
                  className="document-line"
                  style={{ animationDelay: "1.0s" }}
                />
                <path
                  d="M8,14 L16,14"
                  className="document-line"
                  style={{ animationDelay: "1.2s" }}
                />
                <path
                  d="M8,16 L14,16"
                  className="document-line"
                  style={{ animationDelay: "1.4s" }}
                />

                {/* Dynamic content generation */}
                <path
                  d="M5,12 C3,12 3,14 3,16"
                  className="document-line"
                  style={{ animationDelay: "1.6s", strokeDasharray: "2,2" }}
                />
                <path
                  d="M19,12 C21,12 21,14 21,16"
                  className="document-line"
                  style={{ animationDelay: "1.8s", strokeDasharray: "2,2" }}
                />

                {/* Creation particles */}
                <circle
                  cx="8"
                  cy="13"
                  r="0.5"
                  className="particle"
                  style={{ animationDelay: "0.3s" }}
                />
                <circle
                  cx="10"
                  cy="15"
                  r="0.5"
                  className="particle"
                  style={{ animationDelay: "0.6s" }}
                />
                <circle
                  cx="14"
                  cy="13"
                  r="0.5"
                  className="particle"
                  style={{ animationDelay: "0.9s" }}
                />
                <circle
                  cx="16"
                  cy="15"
                  r="0.5"
                  className="particle"
                  style={{ animationDelay: "1.2s" }}
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold dark:text-white text-black mb-3">
              Создание контента с ИИ
            </h3>
            <p
              className={`feature-description max-[425px]:text-[14px] ${
                isDark ? "text-[#919191]" : "text-gray-600"
              }`}
            >
              Разработка ИИ-агентов для автоматизированного создания контента
            </p>
          </div>

          {/* Feature 6 - ИИ-поиск */}
          <div className="text-center">
            <div
              className={`w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6 icon-animated ${
                isDark ? "bg-blue-900/20" : "bg-blue-100"
              }`}
            >
              <svg viewBox="0 0 24 24" width="28" height="28">
                <defs>
                  <linearGradient
                    id="search-gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#60a5fa" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>

                {/* Magnifying glass */}
                <circle
                  cx="10"
                  cy="10"
                  r="6"
                  className="filled"
                  style={{ animationDelay: "0.2s", fillOpacity: "0.2" }}
                />
                <circle
                  cx="10"
                  cy="10"
                  r="6"
                  className="document-line"
                  style={{ animationDelay: "0.4s" }}
                />
                <path
                  d="M14.5,14.5 L19,19"
                  className="document-line"
                  style={{ animationDelay: "0.6s", strokeWidth: "2" }}
                />

                {/* Web/data elements being searched */}
                <rect
                  x="5"
                  y="7"
                  width="2"
                  height="2"
                  className="document-line"
                  style={{ animationDelay: "0.8s" }}
                />
                <rect
                  x="9"
                  y="7"
                  width="2"
                  height="2"
                  className="document-line"
                  style={{ animationDelay: "1.0s" }}
                />
                <rect
                  x="13"
                  y="7"
                  width="2"
                  height="2"
                  className="document-line"
                  style={{ animationDelay: "1.2s" }}
                />
                <rect
                  x="5"
                  y="11"
                  width="2"
                  height="2"
                  className="document-line"
                  style={{ animationDelay: "1.4s" }}
                />
                <rect
                  x="9"
                  y="11"
                  width="2"
                  height="2"
                  className="document-line"
                  style={{ animationDelay: "1.6s" }}
                />
                <rect
                  x="13"
                  y="11"
                  width="2"
                  height="2"
                  className="document-line"
                  style={{ animationDelay: "1.8s" }}
                />

                {/* Search beam */}
                <path
                  d="M10,4 L10,2"
                  className="document-line"
                  style={{ animationDelay: "2.0s", strokeDasharray: "1,1" }}
                />
                <path
                  d="M14,6 L16,4"
                  className="document-line"
                  style={{ animationDelay: "2.1s", strokeDasharray: "1,1" }}
                />
                <path
                  d="M16,10 L18,10"
                  className="document-line"
                  style={{ animationDelay: "2.2s", strokeDasharray: "1,1" }}
                />
                <path
                  d="M4,10 L6,10"
                  className="document-line"
                  style={{ animationDelay: "2.3s", strokeDasharray: "1,1" }}
                />
                <path
                  d="M6,6 L4,4"
                  className="document-line"
                  style={{ animationDelay: "2.4s", strokeDasharray: "1,1" }}
                />

                {/* Search particles */}
                <circle
                  cx="10"
                  cy="6"
                  r="0.5"
                  className="particle"
                  style={{ animationDelay: "0.3s" }}
                />
                <circle
                  cx="14"
                  cy="10"
                  r="0.5"
                  className="particle"
                  style={{ animationDelay: "0.6s" }}
                />
                <circle
                  cx="10"
                  cy="14"
                  r="0.5"
                  className="particle"
                  style={{ animationDelay: "0.9s" }}
                />
                <circle
                  cx="6"
                  cy="10"
                  r="0.5"
                  className="particle"
                  style={{ animationDelay: "1.2s" }}
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold dark:text-white text-black mb-3">
              ИИ-поиск
            </h3>
            <p
              className={`feature-description max-[425px]:text-[14px] ${
                isDark ? "text-[#919191]" : "text-gray-600"
              }`}
            >
              Разработка ИИ-агентов для автоматизированного поиска в Интернете
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Features;
