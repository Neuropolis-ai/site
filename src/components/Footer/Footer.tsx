"use client";

import { useTheme } from "@/context/ThemeContext";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import "../../style/hero.css";
import Container from "../ui/Container";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { FaTelegram } from "react-icons/fa";

const Footer = () => {
  const { isDark } = useTheme();
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === "/";
  const isBlogPage = pathname.startsWith("/blog");

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
      // Если мы не на главной (включая страницы блога), переходим на главную с хэшем
      router.push(`/#${sectionId}`);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black -z-10"></div>

      {/* Декоративные элементы */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-blue-400/20 dark:from-blue-500/10 dark:to-blue-700/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-indigo-200/20 to-indigo-400/20 dark:from-indigo-500/10 dark:to-indigo-700/10 rounded-full blur-3xl -z-10"></div>

      <Container>
        <div className="relative z-20">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-8 mb-12">
            {/* Logo and Description */}
            <div className="col-span-1 lg:col-span-1">
              <div className="flex items-center gap-2 text-lg sm:text-xl font-medium mb-4">
                <svg
                  width={18}
                  height={18}
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#0167F3] dark:text-[#399AFC]"
                >
                  <path
                    opacity="0.2"
                    d="M14.0063 8.11585L9.82259 9.6371L8.30133 13.8208C8.26582 13.9165 8.20186 13.9991 8.11807 14.0573C8.03428 14.1156 7.93465 14.1469 7.83258 14.1469C7.73052 14.1469 7.63089 14.1156 7.5471 14.0573C7.4633 13.9991 7.39935 13.9165 7.36383 13.8208L5.84508 9.6371L1.66133 8.11585C1.56565 8.08033 1.48312 8.01638 1.42484 7.93258C1.36656 7.84879 1.33533 7.74917 1.33533 7.6471C1.33533 7.54503 1.36656 7.44541 1.42484 7.36161C1.48312 7.27782 1.56565 7.21387 1.66133 7.17835L5.84508 5.6596L7.36633 1.47585C7.40185 1.38016 7.4658 1.29763 7.5496 1.23936C7.63339 1.18108 7.73302 1.14984 7.83508 1.14984C7.93715 1.14984 8.03678 1.18108 8.12057 1.23936C8.20436 1.29763 8.26832 1.38016 8.30383 1.47585L9.82508 5.6596L14.0088 7.18085C14.1036 7.21708 14.1851 7.28129 14.2425 7.36495C14.2999 7.44861 14.3305 7.54775 14.3303 7.64921C14.33 7.75067 14.2989 7.84965 14.241 7.933C14.1831 8.01635 14.1013 8.08012 14.0063 8.11585Z"
                    fill="currentColor"
                  />
                  <path
                    d="M14.1776 6.71085L10.2126 5.2696L8.77134 1.3046C8.7003 1.11323 8.5724 0.948173 8.40481 0.831617C8.23722 0.715062 8.03797 0.652588 7.83384 0.652588C7.6297 0.652588 7.43046 0.715062 7.26287 0.831617C7.09528 0.948173 6.96737 1.11323 6.89634 1.3046L5.45509 5.2696L1.49009 6.71085C1.29871 6.78189 1.13366 6.90979 1.0171 7.07738C0.900548 7.24497 0.838074 7.44422 0.838074 7.64835C0.838074 7.85249 0.900548 8.05173 1.0171 8.21932C1.13366 8.38691 1.29871 8.51482 1.49009 8.58585L5.45509 10.0277L6.89634 13.9921C6.96737 14.1835 7.09528 14.3485 7.26287 14.4651C7.43046 14.5816 7.6297 14.6441 7.83384 14.6441C8.03797 14.6441 8.23722 14.5816 8.40481 14.4651C8.5724 14.3485 8.7003 14.1835 8.77134 13.9921L10.2132 10.0271L14.1776 8.58585C14.369 8.51482 14.534 8.38691 14.6506 8.21932C14.7671 8.05173 14.8296 7.85249 14.8296 7.64835C14.8296 7.44422 14.7671 7.24497 14.6506 7.07738C14.534 6.90979 14.369 6.78189 14.1776 6.71085ZM9.65134 9.1671C9.58275 9.19208 9.52047 9.23176 9.46886 9.28337C9.41725 9.33498 9.37756 9.39727 9.35259 9.46585L7.83384 13.6421L6.31509 9.46585C6.29012 9.39727 6.25043 9.33498 6.19882 9.28337C6.14721 9.23176 6.08492 9.19208 6.01634 9.1671L1.84009 7.64835L6.01634 6.1296C6.08492 6.10463 6.14721 6.06494 6.19882 6.01333C6.25043 5.96172 6.29012 5.89944 6.31509 5.83085L7.83384 1.6546L9.35259 5.83085C9.37756 5.89944 9.41725 5.96172 9.46886 6.01333C9.52047 6.06494 9.58275 6.10463 9.65134 6.1296L13.8276 7.64835L9.65134 9.1671Z"
                    fill="currentColor"
                  />
                </svg>
                <span className="text-gray-800 dark:text-white mt-[2px]">
                  Neuropolis
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Создаем интеллектуальные решения для автоматизации
                бизнес-процессов.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://t.me/neuropolis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#0167F3] dark:text-gray-400 dark:hover:text-[#399AFC] transition-colors"
                >
                  <FaTelegram size={20} />
                </a>
                <a
                  href="mailto:info@neuropolis.ai"
                  className="text-gray-600 hover:text-[#0167F3] dark:text-gray-400 dark:hover:text-[#399AFC] transition-colors"
                >
                  <FiMail size={20} />
                </a>
              </div>
            </div>

            {/* Навигация */}
            <div className="col-span-1">
              <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
                Навигация
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#services"
                    className="text-gray-600 dark:text-gray-300 hover:text-[#0167F3] dark:hover:text-[#399AFC] transition-colors"
                    onClick={(e) => navigateToSection("services", e)}
                  >
                    Услуги
                  </a>
                </li>
                <li>
                  <Link
                    href="/cases"
                    className="text-gray-600 dark:text-gray-300 hover:text-[#0167F3] dark:hover:text-[#399AFC] transition-colors"
                  >
                    Кейсы
                  </Link>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-600 dark:text-gray-300 hover:text-[#0167F3] dark:hover:text-[#399AFC] transition-colors"
                    onClick={(e) => navigateToSection("contact", e)}
                  >
                    Контакты
                  </a>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-gray-600 dark:text-gray-300 hover:text-[#0167F3] dark:hover:text-[#399AFC] transition-colors"
                  >
                    Блог
                  </Link>
                </li>
              </ul>
            </div>

            {/* Решения */}
            <div className="col-span-1">
              <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
                Решения
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/cases"
                    className="transition duration-300 ease-in-out text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    Кейсы
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-300 hover:text-[#0167F3] dark:hover:text-[#399AFC] transition-colors"
                  >
                    Чат-боты
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-300 hover:text-[#0167F3] dark:hover:text-[#399AFC] transition-colors"
                  >
                    Автоматизация бизнеса
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-300 hover:text-[#0167F3] dark:hover:text-[#399AFC] transition-colors"
                  >
                    ИИ-ассистенты
                  </a>
                </li>
              </ul>
            </div>

            {/* Контакты */}
            <div className="col-span-1">
              <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
                Контакты
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <FiMapPin className="text-[#0167F3] dark:text-[#399AFC] mt-1 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Москва, Россия
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <FiPhone className="text-[#0167F3] dark:text-[#399AFC] mt-1 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">
                    +7 (495) 123-45-67
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <FiMail className="text-[#0167F3] dark:text-[#399AFC] mt-1 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">
                    info@neuropolis.ai
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>

          {/* Bottom Section */}
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Neuropolis.ai. Все права защищены.
            </p>
            <div className="flex items-center space-x-6">
              <a
                href="#"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#0167F3] dark:hover:text-[#399AFC] transition-colors"
              >
                Политика конфиденциальности
              </a>
              <a
                href="#"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#0167F3] dark:hover:text-[#399AFC] transition-colors"
              >
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
