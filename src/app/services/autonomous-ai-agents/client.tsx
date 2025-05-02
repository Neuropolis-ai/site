"use client";

import React from "react";
import Image from "next/image";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

// Компонент для страницы Автономных ИИ-агентов
export default function AutonomousAIAgentsClient() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        {/* Секция 1: Hero Section */}
        <section className="relative py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black overflow-hidden">
          <div className="absolute inset-0 opacity-20 dark:opacity-10">
            <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="w-full lg:w-1/2">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900 dark:text-white">
                  Создаем Кастомных ИИ-Агентов, которые Автоматизируют Рутину и Увеличивают Прибыль
                </h1>
                <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
                  Разрабатываем интеллектуальных помощников на базе ИИ, которые берут на себя повторяющиеся задачи, оптимизируют процессы и высвобождают время ваших сотрудников для стратегических целей.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="flex items-center">
                    <div className="mr-3 bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full">
                      <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">
                      Автоматизация до 80% рутины
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-3 bg-green-100 dark:bg-green-900/30 p-2 rounded-full">
                      <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">
                      Снижение затрат на 40%
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-3 bg-purple-100 dark:bg-purple-900/30 p-2 rounded-full">
                      <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">
                      Рост эффективности на 50%
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <a href="#contact-form" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    Получить бесплатную консультацию
                  </a>
                  <a href="#use-cases" className="px-8 py-4 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-blue-600 dark:text-blue-400 font-medium rounded-lg border border-blue-600 dark:border-blue-400 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    Узнать больше
                  </a>
                </div>
              </div>
              <div className="w-full lg:w-1/2 relative">
                <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-10 dark:opacity-20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-4/5 h-4/5 relative">
                      <Image src="/images/ai-agent-illustration.svg" alt="ИИ-агент помогает в бизнес-задачах" fill className="object-contain" priority />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Секция 2: Проблемы/Потребности бизнеса */}
        <section id="problems" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Сталкиваетесь с этими вызовами?
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300">
                Современный бизнес сталкивается с множеством проблем, которые могут быть эффективно решены с помощью автоматизации и ИИ.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Проблема 1 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-8">
                <div className="bg-red-100 dark:bg-red-900/30 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Рутинные задачи отнимают время ценных сотрудников
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Ваши квалифицированные специалисты тратят до 40% рабочего времени на однотипные операции вместо решения стратегических задач.
                </p>
              </div>

              {/* Проблема 2 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-8">
                <div className="bg-orange-100 dark:bg-orange-900/30 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Высокие операционные расходы
                  <svg
                    className="w-8 h-8 text-orange-600 dark:text-orange-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Высокие операционные расходы
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Поддержка клиентов, обработка документов и данных требуют
                  большого штата и создают постоянно растущие расходы.
                </p>
              </div>

              {/* Проблема 3 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-8">
                <div className="bg-yellow-100 dark:bg-yellow-900/30 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-yellow-600 dark:text-yellow-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Сложности с масштабированием
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Расширение бизнеса требует пропорционального увеличения штата,
                  что ведет к росту затрат и усложнению управления.
                </p>
              </div>

              {/* Проблема 4 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-8">
                <div className="bg-green-100 dark:bg-green-900/30 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-green-600 dark:text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Упускаете лидов из-за долгой реакции
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Задержки в ответах клиентам и обработке заявок приводят к
                  потере потенциальных клиентов и репутационным издержкам.
                </p>
              </div>

              {/* Проблема 5 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-8">
                <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-blue-600 dark:text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Трудности с анализом больших объемов данных
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Накопление неструктурированных данных, которые не удается
                  эффективно использовать для принятия решений.
                </p>
              </div>

              {/* Переходник к решению */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-8 text-white">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Есть современное решение
                </h3>
                <p className="text-gray-100">
                  Эти проблемы мешают росту и снижают эффективность. Но
                  существует технология, которая способна их решить.
                </p>
                <a
                  href="#solution"
                  className="inline-block mt-6 px-6 py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition duration-300"
                >
                  Узнать о решении
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Секция 3: Решение - ИИ-Агенты */}
        <section
          id="solution"
          className="py-16 md:py-24 bg-white dark:bg-black"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Решение: Ваши Персональные ИИ-Агенты
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300">
                Мы создаем интеллектуальных помощников, которые автоматизируют
                рутинные задачи, обрабатывают данные и взаимодействуют с людьми
                и системами.
              </p>
            </div>

            {/* Определение ИИ-Агента */}
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8 mb-16">
              <div className="max-w-3xl mx-auto">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white text-center">
                  Что такое ИИ-агент?
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-8">
                  ИИ-агент – это программа, использующая искусственный интеллект
                  для автономного выполнения конкретных бизнес-задач,
                  взаимодействия с системами и людьми, и обучения на основе
                  опыта.
                </p>

                {/* Схема работы агента */}
                <div className="relative h-[300px] md:h-[400px] mb-8">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src="/images/ai-agent-workflow.svg"
                      alt="Схема работы ИИ-агента"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="text-center text-sm text-gray-600 dark:text-gray-400 italic">
                  Цикл работы: Получение задачи → Анализ данных → Взаимодействие
                  с системами → Выполнение действия → Отчет о результатах
                </div>
              </div>
            </div>

            {/* Ключевые характеристики агентов */}
            <h3 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-white text-center">
              Ключевые характеристики ИИ-агентов
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
              {/* Характеристика 1 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center">
                <div className="bg-purple-100 dark:bg-purple-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-purple-600 dark:text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                    ></path>
                  </svg>
                </div>
                <h4 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">
                  Автономность
                </h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Работает без постоянного контроля человека, принимая решения
                  самостоятельно
                </p>
              </div>

              {/* Характеристика 2 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center">
                <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-blue-600 dark:text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    ></path>
                  </svg>
                </div>
                <h4 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">
                  Обучаемость
                </h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Улучшает свою работу со временем на основе новых данных и
                  обратной связи
                </p>
              </div>

              {/* Характеристика 3 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center">
                <div className="bg-green-100 dark:bg-green-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-green-600 dark:text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                    ></path>
                  </svg>
                </div>
                <h4 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">
                  Интегрируемость
                </h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Легко подключается к существующим системам: CRM, ERP, Email,
                  мессенджеры
                </p>
              </div>

              {/* Характеристика 4 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center">
                <div className="bg-red-100 dark:bg-red-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-red-600 dark:text-red-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <h4 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">
                  Масштабируемость
                </h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Обрабатывает растущие объемы задач без пропорционального
                  увеличения затрат
                </p>
              </div>

              {/* Характеристика 5 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center">
                <div className="bg-yellow-100 dark:bg-yellow-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-yellow-600 dark:text-yellow-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <h4 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">
                  Работа 24/7
                </h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Функционирует круглосуточно без перерывов, обеспечивая
                  постоянное взаимодействие
                </p>
              </div>
            </div>

            <div className="text-center">
              <a
                href="#use-cases"
                className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Узнать о применении ИИ-агентов
              </a>
            </div>
          </div>
        </section>

        {/* Секция 4: Примеры Использования (Use Cases) */}
        <section
          id="use-cases"
          className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Где ИИ-Агенты Могут Помочь?
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300">
                Наши интеллектуальные решения адаптируются под различные
                бизнес-функции и отрасли, принося измеримую пользу в каждом
                направлении.
              </p>
            </div>

            {/* Фильтр по отраслям (опционально) */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button className="px-6 py-2 bg-blue-600 text-white rounded-full shadow-md hover:shadow-lg transition duration-300">
                Все примеры
              </button>
              <button className="px-6 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full shadow-md hover:shadow-lg transition duration-300">
                Продажи
              </button>
              <button className="px-6 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full shadow-md hover:shadow-lg transition duration-300">
                Маркетинг
              </button>
              <button className="px-6 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full shadow-md hover:shadow-lg transition duration-300">
                Поддержка
              </button>
              <button className="px-6 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full shadow-md hover:shadow-lg transition duration-300">
                HR
              </button>
              <button className="px-6 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full shadow-md hover:shadow-lg transition duration-300">
                Финансы
              </button>
            </div>

            {/* Примеры использования */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Пример 1 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 group">
                <div className="h-48 bg-blue-600 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      className="w-24 h-24 text-white opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      ></path>
                    </svg>
                  </div>
                  <div className="absolute top-0 left-0 p-4">
                    <span className="bg-white dark:bg-gray-900 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                      Продажи
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                    ИИ-Агент для Квалификации Лидов
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    Автоматически связывается с новыми лидами, задает
                    квалификационные вопросы и передает только готовых к продаже
                    клиентов менеджерам.
                  </p>
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                      Результаты:
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center">
                        <svg
                          className="w-5 h-5 text-green-500 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300 text-sm">
                          Ускорение на 80%
                        </span>
                      </div>
                      <div className="flex items-center">
                        <svg
                          className="w-5 h-5 text-green-500 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300 text-sm">
                          Точность 95%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Пример 2 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 group">
                <div className="h-48 bg-green-600 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      className="w-24 h-24 text-white opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                      ></path>
                    </svg>
                  </div>
                  <div className="absolute top-0 left-0 p-4">
                    <span className="bg-white dark:bg-gray-900 text-green-600 dark:text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                      Поддержка
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                    Автоматизация Клиентской Поддержки
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    Интеллектуальный ассистент, который отвечает на стандартные
                    вопросы, ищет информацию в базе знаний и эскалирует сложные
                    случаи.
                  </p>
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                      Результаты:
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center">
                        <svg
                          className="w-5 h-5 text-green-500 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300 text-sm">
                          Снижение нагрузки на 40%
                        </span>
                      </div>
                      <div className="flex items-center">
                        <svg
                          className="w-5 h-5 text-green-500 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300 text-sm">
                          24/7 поддержка
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Пример 3 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 group">
                <div className="h-48 bg-purple-600 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      className="w-24 h-24 text-white opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      ></path>
                    </svg>
                  </div>
                  <div className="absolute top-0 left-0 p-4">
                    <span className="bg-white dark:bg-gray-900 text-purple-600 dark:text-purple-400 px-3 py-1 rounded-full text-sm font-medium">
                      Аналитика
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                    Интеллектуальный Анализ Отчетов
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    Автоматически анализирует бизнес-данные, выявляет тренды,
                    аномалии и готовит рекомендации для руководства.
                  </p>
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                      Результаты:
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center">
                        <svg
                          className="w-5 h-5 text-green-500 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300 text-sm">
                          Повышение точности на 25%
                        </span>
                      </div>
                      <div className="flex items-center">
                        <svg
                          className="w-5 h-5 text-green-500 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300 text-sm">
                          Экономия 20 часов/нед
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Пример 4 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 group">
                <div className="h-48 bg-yellow-600 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      className="w-24 h-24 text-white opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                      ></path>
                    </svg>
                  </div>
                  <div className="absolute top-0 left-0 p-4">
                    <span className="bg-white dark:bg-gray-900 text-yellow-600 dark:text-yellow-400 px-3 py-1 rounded-full text-sm font-medium">
                      Финансы
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                    Автоматизация Финансовой Отчетности
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    Собирает данные из разных источников, формирует отчеты и
                    делает прогнозы по ключевым финансовым показателям.
                  </p>
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                      Результаты:
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center">
                        <svg
                          className="w-5 h-5 text-green-500 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300 text-sm">
                          Ускорение на 65%
                        </span>
                      </div>
                      <div className="flex items-center">
                        <svg
                          className="w-5 h-5 text-green-500 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300 text-sm">
                          Снижение ошибок на 90%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Пример 5 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 group">
                <div className="h-48 bg-red-600 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      className="w-24 h-24 text-white opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </div>
                  <div className="absolute top-0 left-0 p-4">
                    <span className="bg-white dark:bg-gray-900 text-red-600 dark:text-red-400 px-3 py-1 rounded-full text-sm font-medium">
                      HR
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                    ИИ-Рекрутер для HR
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    Автоматизирует первичный скрининг кандидатов, проводит
                    предварительные собеседования и ранжирует соискателей.
                  </p>
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                      Результаты:
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center">
                        <svg
                          className="w-5 h-5 text-green-500 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300 text-sm">
                          Экономия 30 часов/вак
                        </span>
                      </div>
                      <div className="flex items-center">
                        <svg
                          className="w-5 h-5 text-green-500 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300 text-sm">
                          Улучшение отбора на 35%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Пример 6 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 group">
                <div className="h-48 bg-indigo-600 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      className="w-24 h-24 text-white opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                      ></path>
                    </svg>
                  </div>
                  <div className="absolute top-0 left-0 p-4">
                    <span className="bg-white dark:bg-gray-900 text-indigo-600 dark:text-indigo-400 px-3 py-1 rounded-full text-sm font-medium">
                      Логистика
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                    Оптимизация Логистических Процессов
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    Планирует оптимальные маршруты, прогнозирует спрос и
                    автоматизирует управление цепочками поставок.
                  </p>
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                      Результаты:
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center">
                        <svg
                          className="w-5 h-5 text-green-500 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300 text-sm">
                          Сокращение затрат на 15%
                        </span>
                      </div>
                      <div className="flex items-center">
                        <svg
                          className="w-5 h-5 text-green-500 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300 text-sm">
                          Точность прогнозов 88%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <a
                href="#process"
                className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Узнать как мы работаем
              </a>
            </div>
          </div>
        </section>

        {/* Секция 5: Процесс Разработки */}
        <section id="process" className="py-16 md:py-24 bg-white dark:bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Наш Процесс Разработки: Прозрачно и Эффективно
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300">
                Четкая структура и прозрачность на каждом этапе создания вашего
                ИИ-агента — от первой консультации до полноценного запуска и
                постоянной поддержки.
              </p>
            </div>

            {/* Таймлайн процесса */}
            <div className="relative max-w-5xl mx-auto">
              {/* Линия таймлайна */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-900/50"></div>

              {/* Шаг 1 */}
              <div className="relative mb-16">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12 text-center md:text-right">
                    <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                      1. Анализ и Консультация
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Изучаем ваши цели, процессы и данные. Определяем ключевые
                      показатели эффективности, которые будут измерять успех
                      проекта.
                    </p>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center shadow-lg">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </div>
                  <div className="md:w-1/2 md:pl-12"></div>
                </div>
              </div>

              {/* Шаг 2 */}
              <div className="relative mb-16">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-green-600 flex items-center justify-center shadow-lg">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                      ></path>
                    </svg>
                  </div>
                  <div className="md:w-1/2 md:pl-12 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-4">
                      2. Проектирование Решения
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Разрабатываем архитектуру агента, подбираем оптимальные
                      технологии и модели ИИ, составляем детальное техническое
                      задание.
                    </p>
                  </div>
                </div>
              </div>

              {/* Шаг 3 */}
              <div className="relative mb-16">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12 text-center md:text-right">
                    <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-4">
                      3. Разработка и Интеграция
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Создаем код, настраиваем и обучаем модели ИИ, интегрируем
                      решение с вашими существующими системами (CRM, ERP и
                      другими).
                    </p>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center shadow-lg">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      ></path>
                    </svg>
                  </div>
                  <div className="md:w-1/2 md:pl-12"></div>
                </div>
              </div>

              {/* Шаг 4 */}
              <div className="relative mb-16">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-yellow-600 flex items-center justify-center shadow-lg">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      ></path>
                    </svg>
                  </div>
                  <div className="md:w-1/2 md:pl-12 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-yellow-600 dark:text-yellow-400 mb-4">
                      4. Тестирование и Обучение
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Проверяем работоспособность и безопасность ИИ-агента,
                      обучаем его на ваших данных, проводим симуляции реальных
                      задач.
                    </p>
                  </div>
                </div>
              </div>

              {/* Шаг 5 */}
              <div className="relative mb-16">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12 text-center md:text-right">
                    <h3 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-4">
                      5. Внедрение и Запуск
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Разворачиваем ИИ-агента в вашей инфраструктуре, проводим
                      финальную настройку и запускаем в рабочем режиме под
                      наблюдением.
                    </p>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-red-600 flex items-center justify-center shadow-lg">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                      ></path>
                    </svg>
                  </div>
                  <div className="md:w-1/2 md:pl-12"></div>
                </div>
              </div>

              {/* Шаг 6 */}
              <div className="relative">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-indigo-600 flex items-center justify-center shadow-lg">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      ></path>
                    </svg>
                  </div>
                  <div className="md:w-1/2 md:pl-12 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
                      6. Поддержка и Развитие
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Обеспечиваем мониторинг работы, оптимизируем
                      производительность, обновляем функционал и расширяем
                      возможности по мере необходимости.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-20 text-center">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 max-w-2xl mx-auto">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Ваше участие на всех этапах
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Мы ценим ваш опыт и знания вашего бизнеса, поэтому процесс
                  разработки построен на тесном сотрудничестве. Вы будете
                  вовлечены в ключевые решения на каждом этапе.
                </p>
                <a
                  href="#advantages"
                  className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  Узнать о наших преимуществах
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Секция 6: Наши Преимущества */}
        <section id="advantages" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Почему Выбирают Нас?
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300">
                Наш подход и экспертиза обеспечивают создание эффективных ИИ-решений, которые реально помогают бизнесу достигать измеримых результатов.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Преимущество 1 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-8">
                <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Глубокая Экспертиза в ИИ
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Наша команда состоит из сертифицированных специалистов с многолетним опытом разработки ИИ-решений различной сложности для разных отраслей бизнеса.
                </p>
              </div>
              
              {/* Преимущество 2 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-8">
                <div className="bg-purple-100 dark:bg-purple-900/30 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Кастомный Подход
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Мы не предлагаем готовые шаблонные решения. Каждый ИИ-агент разрабатывается индивидуально под ваши уникальные бизнес-процессы, цели и задачи.
                </p>
              </div>
              
              {/* Преимущество 3 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-8">
                <div className="bg-green-100 dark:bg-green-900/30 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Фокус на Бизнес-Результат
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Мы нацелены не просто на разработку ИИ-агентов, а на достижение измеримых улучшений в ваших ключевых показателях: ROI, эффективности процессов, снижении затрат.
                </p>
              </div>
              
              {/* Преимущество 4 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-8">
                <div className="bg-yellow-100 dark:bg-yellow-900/30 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Прозрачность и Партнерство
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Вы всегда в курсе хода реализации проекта и участвуете в ключевых решениях. Мы действуем как ваш технологический партнер, а не просто как подрядчик.
                </p>
              </div>
              
              {/* Преимущество 5 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-8">
                <div className="bg-red-100 dark:bg-red-900/30 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Безопасность и Конфиденциальность
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Все проекты реализуются с соблюдением строгих стандартов безопасности и защиты данных. Мы гарантируем полную конфиденциальность и строгое соблюдение NDA.
                </p>
              </div>
              
              {/* Преимущество 6 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-8">
                <div className="bg-indigo-100 dark:bg-indigo-900/30 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Отраслевой Опыт
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Мы успешно реализовали проекты в различных индустриях: финансы, ритейл, производство, логистика, медицина, образование и многих других.
                </p>
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <a href="#testimonials" className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                Ознакомиться с отзывами клиентов
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
