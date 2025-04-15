"use client";

import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import blackLogo from "../../app/assets/svg/black-logo.svg";
import logo from "../../app/assets/svg/logo.svg";
import "../../style/hero.css";
import Container from "../ui/Container";

const Footer = () => {
  const { isDark } = useTheme();
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === "/";

  // Функция для перехода к секции - аналогично Header
  const navigateToSection = (
    sectionId: string,
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();

    if (sectionId === "blog") {
      router.push("/blog");
      return;
    }

    if (isHomePage) {
      // Если мы на главной, просто прокручиваем к секции
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Если мы не на главной, переходим на главную с хэшем
      router.push(`/#${sectionId}`);
    }
  };

  return (
    <footer className="relative py-8 sm:py-12 md:py-16 overflow-hidden">
      {/* Background Video */}

      {isDark && (
        <div className="video-container v absolute inset-0 z-0">
          <div className="video-content">
            <video autoPlay loop muted playsInline className="video-one">
              <source src="/assets/video/hero-bg.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      )}
      {/* <div className="absolute inset-0 bg-black/65 z-10"></div> */}

      <Container>
        <div className="relative z-20">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-[300px]">
            {/* Logo and Description */}
            <div className="w-full md:w-1/3 mb-8 md:mb-0 max-[425px]:mb-0">
              <div className="flex items-center">
                <Image
                  src={isDark ? logo : blackLogo}
                  className="w-[120px] h-[48px] object-contain"
                  alt="Neuropolis.ai"
                  width={120}
                  height={48}
                />
              </div>
              <p
                className={`mb-6 max-[425px]:text-[14px] max-[425px]:mb-0 ${
                  isDark ? "text-[#919191]" : "text-gray-600"
                }`}
              >
                Место, где технологии обретают разум.
              </p>
            </div>

            {/* Links and Legal */}
            <div className="flex flex-col md:flex-row">
              <div className="mb-8 md:mb-0">
                <h3
                  className={`font-medium mb-4 ${
                    isDark ? "text-white" : "text-gray-800"
                  }`}
                >
                  Навигация
                </h3>
                <div className="flex flex-wrap gap-4 md:gap-2 max-[425px]:text-[14px]">
                  <a
                    href="#services"
                    className={`transition-colors cursor-pointer ${
                      isDark
                        ? "text-[#919191] hover:text-white"
                        : "text-gray-700 hover:text-gray-900"
                    }`}
                    onClick={(e) => navigateToSection("services", e)}
                  >
                    Услуги
                  </a>
                  <a
                    href="#projects"
                    className={`transition-colors cursor-pointer ${
                      isDark
                        ? "text-[#919191] hover:text-white"
                        : "text-gray-700 hover:text-gray-900"
                    }`}
                    onClick={(e) => navigateToSection("projects", e)}
                  >
                    Проекты
                  </a>
                  <a
                    href="#contact"
                    className={`transition-colors cursor-pointer ${
                      isDark
                        ? "text-[#919191] hover:text-white"
                        : "text-gray-700 hover:text-gray-900"
                    }`}
                    onClick={(e) => navigateToSection("contact", e)}
                  >
                    Контакты
                  </a>
                  <Link
                    href="/blog"
                    className={`transition-colors cursor-pointer ${
                      isDark
                        ? "text-[#919191] hover:text-white"
                        : "text-gray-700 hover:text-gray-900"
                    }`}
                  >
                    Блог
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
