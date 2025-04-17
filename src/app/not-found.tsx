"use client";
import ButtonLink from "@/components/ui/buttonLink";
import { useTheme } from "@/context/ThemeContext";
import "@/style/hero.css";
import "../style/card-line.css";

export default function NotFound() {
  const { isDark } = useTheme();
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="video-container o">
        <div className="video-content">
          <video autoPlay loop muted playsInline className="video-one">
            <source src="/assets/video/hero-bg.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center max-w-[800px] mx-auto px-4">
        <div
          className={`inline-block px-4 py-1 rounded-full bg-white/10 text-white text-sm mb-4 switch-box ${
            !isDark && "light-switch-box"
          }`}
        >
          Страница не найдена
        </div>
        <div className="text-[80px] font-medium dark:text-white text-black mb-2">
          404
        </div>
        <p className="text-lg dark:text-gray-300 text-black mb-8">
          Упс! Кажется, вы наткнулись на страницу, которой не существует. Не
          волнуйтесь, это случается с лучшими из нас.
        </p>
        <ButtonLink href="/">Вернуться на главную</ButtonLink>
      </div>
    </div>
  );
}
