"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import {
  ArrowRight,
  MessageSquare,
  Zap,
  Star,
  Shield,
  BarChart,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";

export default function ChatBotsHero() {
  const { isDark } = useTheme();

  // Анимации
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const floatAnimation = {
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };

  return (
    <section className="relative overflow-hidden pt-[100px] sm:pt-[120px] md:pt-[140px] lg:pt-[160px] pb-16 md:pb-24 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900">
      {/* Улучшенный фон с эффектами морфинга */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white via-blue-50 to-indigo-50 dark:from-gray-950 dark:via-blue-950/10 dark:to-indigo-950/10 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[url('/assets/images/grid-pattern.svg')] opacity-[0.03] dark:opacity-[0.07]"></div>
      </div>

      {/* Современные 3D градиенты */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-blue-400/30 dark:from-blue-500/10 dark:to-blue-700/10 rounded-full blur-3xl -z-5 animate-pulse"></div>
      <div
        className="absolute top-1/3 left-1/4 w-80 h-80 bg-gradient-to-tr from-purple-200/30 to-purple-400/30 dark:from-purple-500/10 dark:to-purple-700/10 rounded-full blur-3xl -z-5 animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-indigo-200/30 to-indigo-400/30 dark:from-indigo-500/10 dark:to-indigo-700/10 rounded-full blur-3xl -z-5 animate-pulse"
        style={{ animationDelay: "4s" }}
      ></div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Левая колонка - Текст (увеличена до 7 колонок) */}
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 max-w-2xl lg:max-w-none mx-auto lg:mx-0"
          >
            <motion.div
              variants={fadeIn}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm mb-3 bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800/50 backdrop-blur-sm"
            >
              <svg
                width={15}
                height={15}
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-blue-600 dark:text-blue-400"
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
              </svg>{" "}
              Чат-боты на основе ИИ
            </motion.div>

            <motion.h1
              variants={fadeIn}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white mb-8 leading-tight"
            >
              Интеллектуальные{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-primary-light relative">
                чат-боты
                <svg
                  className="absolute -bottom-2 left-0 w-full h-2 text-blue-500/20"
                  viewBox="0 0 100 15"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,5 Q25,0 50,5 T100,5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              для бизнеса будущего
            </motion.h1>

            <motion.p
              variants={fadeIn}
              className="text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed"
            >
              Автоматизируйте рутинные процессы и выстраивайте
              персонализированный диалог с клиентами 24/7 с помощью ИИ-ботов.
              Наши решения повышают эффективность бизнеса на всех уровнях
              взаимодействия.
            </motion.p>

            <motion.div
              variants={fadeIn}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <Link
                href="/contact"
                className="group relative bg-gradient-to-r from-primary to-primary-light text-white font-semibold py-3.5 px-7 rounded-xl flex items-center justify-center overflow-hidden shadow-lg shadow-blue-500/20 dark:shadow-blue-700/10"
              >
                <span className="absolute inset-0 w-full h-full bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
                <span className="relative flex items-center">
                  Обсудить проект{" "}
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
              <Link
                href="#chatbots-cases"
                className="group relative bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-200 dark:border-gray-700 font-semibold py-3.5 px-7 rounded-xl flex items-center justify-center overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                <span className="absolute inset-0 w-full h-full bg-gray-100 dark:bg-gray-700 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
                <span className="relative">Посмотреть примеры</span>
              </Link>
            </motion.div>

            {/* Преимущества с современными иконками */}
            <motion.div
              variants={fadeIn}
              className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-4"
            >
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/40 dark:to-blue-800/40 flex items-center justify-center mr-3 shadow-sm">
                  {/* Официальный логотип Telegram */}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 32 32"
                    className="text-[#2AABEE]"
                    fill="none"
                  >
                    <circle cx="16" cy="16" r="14" fill="currentColor" />
                    <path
                      d="M22.9866 10.2088C23.1112 9.40332 22.3454 8.76755 21.6292 9.082L7.36482 15.3448C6.85123 15.5703 6.8888 16.3483 7.42147 16.5179L10.3631 17.4547C10.9246 17.6335 11.5325 17.541 12.0228 17.2023L18.655 12.6203C18.855 12.4821 19.073 12.7665 18.9021 12.9426L14.1281 17.8646C13.665 18.3421 13.7569 19.1512 14.314 19.5005L19.659 22.8523C20.2585 23.2282 21.0297 22.8506 21.1418 22.1261L22.9866 10.2088Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  Telegram
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/40 dark:to-blue-800/40 flex items-center justify-center mr-3 shadow-sm">
                  {/* Официальный логотип WhatsApp */}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    className="text-[#25D366]"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  WhatsApp
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/40 dark:to-blue-800/40 flex items-center justify-center mr-3 shadow-sm">
                  {/* Иконка для Веб-сайтов */}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-600 dark:text-blue-400"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  Web-сайты
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/40 dark:to-blue-800/40 flex items-center justify-center mr-3 shadow-sm">
                  {/* Официальный логотип VK */}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    className="text-[#0077FF]"
                    fill="currentColor"
                  >
                    <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202-2.17-3.048-2.778-5.334-2.778-5.794 0-.254.102-.458.593-.491h1.744c.44 0 .61.203.78.677.847 2.457 2.27 4.607 2.863 4.607.22 0 .322-.102.322-.66V9.16c-.068-1.186-.695-1.287-.695-1.71 0-.204.17-.407.44-.407h2.745c.373 0 .508.203.508.66v3.54c0 .373.17.508.271.508.22 0 .407-.135.813-.542 1.27-1.422 2.17-3.608 2.17-3.608.119-.254.373-.491.813-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.2 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.744-.576.744z" />
                  </svg>
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  ВКонтакте
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/40 dark:to-blue-800/40 flex items-center justify-center mr-3 shadow-sm">
                  {/* Официальный логотип Viber */}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 32 32"
                    className="text-[#7360f2]"
                    fill="none"
                  >
                    <path
                      d="M16 25.8548C15.1766 25.8548 14.4047 25.8262 13.6815 25.7685L10.224 29.845C9.96145 30.1546 9.45455 29.9693 9.45455 29.5638V24.9119C5.38354 23.3834 4 19.9647 4 14.4274C4 6.59346 6.76923 3 16 3C25.2308 3 28 6.59346 28 14.4274C28 22.2613 25.2308 25.8548 16 25.8548Z"
                      fill="currentColor"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M30 14.3785C30 5.20699 26.7692 1 16 1C5.23077 1 2 5.20699 2 14.3785C2 20.9055 3.63629 24.9182 8.46154 26.6895V29.7774C8.46154 30.9141 9.88769 31.4332 10.6264 30.5656L13.1164 27.6411C14.0113 27.7185 14.9713 27.7569 16 27.7569C26.7692 27.7569 30 23.5499 30 14.3785ZM13.7113 25.5316C14.4251 25.5882 15.1872 25.6164 16 25.6164C25.1124 25.6164 27.8462 22.0825 27.8462 14.3785C27.8462 6.67443 25.1124 3.14055 16 3.14055C6.88757 3.14055 4.15385 6.67443 4.15385 14.3785C4.15385 19.8239 5.51965 23.1859 9.53846 24.6891V29.2639C9.53846 29.6627 10.0389 29.8449 10.2981 29.5404L13.7113 25.5316Z"
                      fill="white"
                    />
                    <path
                      d="M11.5432 12.1345L11.5026 12.157L11.4668 12.1866C11.1902 12.4154 10.7756 13.0434 11.1388 13.8197C11.4414 14.4665 12.1157 15.7874 13.3005 16.7826C14.4592 17.756 15.6965 18.2795 16.5092 18.4509L16.5603 18.4617H16.6069C16.6091 18.4619 16.614 18.4624 16.6219 18.4636C16.6412 18.4663 16.6645 18.4703 16.7012 18.4767L16.7874 17.9842L16.7012 18.4767C16.7075 18.4778 16.714 18.479 16.7208 18.4802C16.9709 18.5244 17.5704 18.6304 18.0729 18.1297C18.3954 17.8083 18.6898 17.4732 18.8165 17.3225C18.9055 17.2413 19.1956 17.0731 19.5626 17.1972C20.2576 17.4321 21.0839 17.9621 21.4833 18.2308C21.7925 18.439 22.4924 18.9404 22.8079 19.1682L22.8082 19.1684C22.8344 19.1873 22.8959 19.2493 22.9291 19.3354C22.9557 19.4042 22.97 19.4988 22.9061 19.6357C22.7875 19.8895 22.4266 20.374 21.9378 20.7978C21.4401 21.2294 20.9222 21.5 20.5072 21.5C20.5087 21.5 20.5072 21.4998 20.5025 21.4992C20.484 21.4967 20.4153 21.4874 20.2792 21.4568C20.1262 21.4225 19.9195 21.3686 19.6669 21.2926C19.1622 21.1407 18.485 20.904 17.7029 20.5675C16.1375 19.8941 14.1668 18.8277 12.3218 17.2572C11.1613 16.2694 10.0664 14.9036 9.2138 13.6251C8.35407 12.3358 7.77896 11.1932 7.62244 10.6655L7.61148 10.6285L7.595 10.5937C7.55603 10.5114 7.50112 10.3355 7.50002 10.136C7.49895 9.94333 7.54725 9.75923 7.67465 9.60657C8.09467 9.10322 8.53938 8.60859 9.52049 8.13395C9.61188 8.08974 9.75504 8.05076 9.89575 8.04849C10.04 8.04617 10.1152 8.082 10.1452 8.10835C10.5206 8.43751 11.1025 9.01857 11.4945 9.51513C11.6971 9.77164 11.9418 10.0975 12.1458 10.3806C12.2478 10.5222 12.3377 10.6506 12.4062 10.7527C12.4405 10.8039 12.4679 10.8462 12.4881 10.8788C12.5019 10.9012 12.5093 10.9143 12.5124 10.9199C12.5141 10.9256 12.5218 10.9498 12.5286 10.9939C12.5371 11.0494 12.5411 11.1177 12.5354 11.1891C12.5235 11.3351 12.4755 11.4524 12.3892 11.5315C12.0962 11.7998 11.699 12.0482 11.5432 12.1345ZM16.2766 6.51613C16.2769 6.51585 16.2772 6.51557 16.2775 6.51527C16.2847 6.50852 16.2994 6.5 16.3226 6.5C20.3145 6.5 23.4984 9.53785 23.5 13.223C23.4994 13.2239 23.4983 13.2251 23.4967 13.2267C23.4895 13.2334 23.4747 13.2419 23.4516 13.2419C23.4285 13.2419 23.4137 13.2334 23.4065 13.2267C23.4049 13.2251 23.4039 13.2239 23.4032 13.223C23.4016 9.49946 20.2032 6.53226 16.3226 6.53226C16.2994 6.53226 16.2847 6.52374 16.2775 6.51699C16.2772 6.51669 16.2769 6.5164 16.2766 6.51613ZM16.2775 10.646C16.2772 10.6457 16.2769 10.6454 16.2766 10.6452C16.2769 10.6449 16.2772 10.6446 16.2775 10.6443C16.2847 10.6376 16.2994 10.629 16.3226 10.629C17.8916 10.629 19.1113 11.8182 19.1129 13.223C19.1123 13.2239 19.1112 13.2251 19.1096 13.2267C19.1024 13.2334 19.0877 13.2419 19.0645 13.2419C19.0414 13.2419 19.0266 13.2334 19.0194 13.2267C19.0178 13.2251 19.0168 13.2239 19.0161 13.223C19.0145 11.7799 17.7803 10.6613 16.3226 10.6613C16.2994 10.6613 16.2847 10.6528 16.2775 10.646ZM16.2775 8.5815C16.2772 8.58121 16.2769 8.58092 16.2766 8.58065C16.2769 8.58037 16.2772 8.58008 16.2775 8.57979C16.2847 8.57304 16.2994 8.56452 16.3226 8.56452C19.1031 8.56452 21.3048 10.678 21.3065 13.223C21.3058 13.2239 21.3048 13.2251 21.3032 13.2267C21.296 13.2334 21.2812 13.2419 21.2581 13.2419C21.2349 13.2419 21.2201 13.2334 21.213 13.2267C21.2114 13.2251 21.2103 13.2239 21.2097 13.223C21.2081 10.6397 18.9917 8.59677 16.3226 8.59677C16.2994 8.59677 16.2847 8.58825 16.2775 8.5815Z"
                      fill="white"
                      stroke="white"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  Viber
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/40 dark:to-blue-800/40 flex items-center justify-center mr-3 shadow-sm">
                  {/* Иконка для CRM */}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-purple-500 dark:text-purple-400"
                  >
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                    <path d="M9 12h6"></path>
                    <path d="M9 16h6"></path>
                  </svg>
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  CRM
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Правая колонка - Иллюстрация (уменьшена до 5 колонок) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 relative h-[400px] md:h-[500px] w-full flex items-center justify-center"
          >
            {/* Заменяем изображение на 3D композицию модели чат-бота */}
            <div className="relative w-full h-full max-w-lg mx-auto">
              {/* Декоративный круг с градиентом */}
              <div className="absolute w-64 h-64 md:w-80 md:h-80 bg-gradient-to-tr from-blue-400/20 to-indigo-400/20 dark:from-blue-400/10 dark:to-indigo-400/10 rounded-full blur-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

              {/* Основная модель бота */}
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="relative z-10 w-full h-full flex items-center justify-center"
              >
                {/* Интерфейс чат-бота в виде карточек */}
                <div className="relative w-[360px] h-[460px] rounded-2xl bg-white dark:bg-gray-800 shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
                  {/* Заголовок чат-бота */}
                  <div className="w-full h-14 bg-gradient-to-r from-[#0167F3] to-[#399AFC] flex items-center px-5">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                          />
                        </svg>
                      </div>
                      <div className="text-white font-medium">
                        Нейрополис Бот
                      </div>
                    </div>
                  </div>

                  {/* Тело чата */}
                  <div className="p-4 h-[calc(460px-56px)] bg-gray-50 dark:bg-gray-850 overflow-y-auto">
                    {/* Сообщения */}
                    <div className="flex flex-col space-y-4">
                      {/* Сообщение бота */}
                      <div className="flex items-start space-x-2.5">
                        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                            />
                          </svg>
                        </div>
                        <div className="bg-white dark:bg-gray-700 rounded-2xl rounded-tl-none p-3.5 shadow-sm max-w-[85%]">
                          <p className="text-gray-700 dark:text-gray-200">
                            Здравствуйте! Я ваш персональный ассистент. Чем я
                            могу вам помочь сегодня?
                          </p>
                        </div>
                      </div>

                      {/* Сообщение пользователя */}
                      <div className="flex items-start justify-end space-x-2.5">
                        <div className="bg-blue-500 rounded-2xl rounded-tr-none p-3.5 shadow-sm max-w-[85%]">
                          <p className="text-white">
                            Мне нужна информация о ваших услугах
                          </p>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center flex-shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-gray-600 dark:text-gray-300"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                        </div>
                      </div>

                      {/* Сообщение бота */}
                      <div className="flex items-start space-x-2.5">
                        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                            />
                          </svg>
                        </div>
                        <div className="bg-white dark:bg-gray-700 rounded-2xl rounded-tl-none p-3.5 shadow-sm max-w-[85%]">
                          <p className="text-gray-700 dark:text-gray-200">
                            Конечно! Мы предлагаем разработку чат-ботов для
                            различных платформ, включая Telegram, WhatsApp и
                            веб-сайты.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Индикатор печати */}
                    <div className="mt-4 flex items-start space-x-2.5">
                      <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                          />
                        </svg>
                      </div>
                      <div className="bg-white dark:bg-gray-700 rounded-2xl rounded-tl-none px-4 py-3.5 shadow-sm">
                        <div className="flex space-x-1.5">
                          <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500 animate-bounce"></div>
                          <div
                            className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500 animate-bounce"
                            style={{ animationDelay: "0.2s" }}
                          ></div>
                          <div
                            className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500 animate-bounce"
                            style={{ animationDelay: "0.4s" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Декоративные элементы вокруг модели */}
                <div className="absolute top-10 -right-4 w-20 h-20 bg-purple-400/10 dark:bg-purple-500/20 rounded-full backdrop-blur-md z-20 flex items-center justify-center">
                  <Star
                    size={24}
                    className="text-purple-500/80 dark:text-purple-400"
                  />
                </div>
                <div className="absolute bottom-20 -left-5 w-16 h-16 bg-blue-400/10 dark:bg-blue-500/20 rounded-full backdrop-blur-md z-20 flex items-center justify-center">
                  <Shield
                    size={20}
                    className="text-blue-500/80 dark:text-blue-400"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
