"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AIAgentHero from "./AIAgentHero";
import AIAgentProblems from "./AIAgentProblems";
import AIAgentSolutionNew from "./AIAgentSolutionNew";

export default function AIAgentPage() {
  console.log("AIAgentPage component rendering");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-gray-50 text-gray-800 font-sans dark:bg-black dark:text-white">
      <AIAgentHero />
      <AIAgentProblems />
      <AIAgentSolutionNew />

      <section
        id="use-cases"
        className="py-16 md:py-20 px-4 bg-white dark:bg-black"
      >
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            Где ИИ-Агенты Могут Помочь Вашему Бизнесу?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm border-l-4 border-blue-500 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-3">
                <svg
                  className="w-8 h-8 text-blue-500 mr-3 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H7a3 3 0 00-3 3v8a3 3 0 003 3z"
                  ></path>
                </svg>
                <h3 className="text-xl font-semibold text-blue-600">
                  ИИ-Агент для Квалификации Лидов
                </h3>
              </div>
              <p className="text-gray-600 mb-3">
                Автоматически анализирует входящие заявки, обогащает данные из
                открытых источников, оценивает потенциал лида и передает самых
                горячих менеджерам по продажам.
              </p>
              <p className="font-semibold text-green-600">
                Выгода: Ускорение реакции на лиды до 90%, рост конверсии в
                продажу на 15-25%.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm border-l-4 border-blue-500 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-3">
                <svg
                  className="w-8 h-8 text-blue-500 mr-3 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 17v-2m3 2v-4m3 4v-6m3 6V7m-3 4h.01M9 12h.01M7 12h.01M17 12h.01M21 12c0 4.418-4.03 8-9 8S3 16.418 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  ></path>
                </svg>
                <h3 className="text-xl font-semibold text-blue-600">
                  Автоматизация Клиентской Поддержки
                </h3>
              </div>
              <p className="text-gray-600 mb-3">
                Отвечает на частые вопросы клиентов 24/7, решает типовые
                проблемы, маршрутизирует сложные запросы к нужным специалистам,
                собирает обратную связь.
              </p>
              <p className="font-semibold text-green-600">
                Выгода: Снижение нагрузки на 1-ю линию поддержки на 40-60%,
                повышение удовлетворенности клиентов.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm border-l-4 border-blue-500 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-3">
                <svg
                  className="w-8 h-8 text-blue-500 mr-3 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 17v-2m3 2v-4m3 4v-6m3 6V7m6 4H5a2 2 0 00-2 2v6a2 2 0 002 2h14a2 2 0 002-2v-6a2 2 0 00-2-2z"
                  ></path>
                </svg>
                <h3 className="text-xl font-semibold text-blue-600">
                  Интеллектуальный Анализ Отчетов
                </h3>
              </div>
              <p className="text-gray-600 mb-3">
                Автоматически собирает данные из разных источников (Excel, базы
                данных, API), формирует сводные отчеты, выявляет аномалии и
                ключевые тренды.
              </p>
              <p className="font-semibold text-green-600">
                Выгода: Сокращение времени на подготовку отчетов на 70%,
                повышение точности прогнозов.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm border-l-4 border-blue-500 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-3">
                <svg
                  className="w-8 h-8 text-blue-500 mr-3 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1M13 16l-4-4m4 4l4-4m-4-4l-4-4"
                  ></path>
                </svg>
                <h3 className="text-xl font-semibold text-blue-600">
                  Оптимизация Логистики и Маршрутов
                </h3>
              </div>
              <p className="text-gray-600 mb-3">
                Анализирует данные о трафике, погоде, складах и заказах для
                построения оптимальных маршрутов доставки, управления запасами.
              </p>
              <p className="font-semibold text-green-600">
                Выгода: Снижение транспортных расходов на 10-20%, ускорение
                доставки.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm border-l-4 border-blue-500 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-3">
                <svg
                  className="w-8 h-8 text-blue-500 mr-3 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                </svg>
                <h3 className="text-xl font-semibold text-blue-600">
                  Мониторинг и Анализ Конкурентов
                </h3>
              </div>
              <p className="text-gray-600 mb-3">
                Автоматически отслеживает цены, акции, новости и упоминания
                конкурентов в сети, предоставляя сводные отчеты для принятия
                стратегических решений.
              </p>
              <p className="font-semibold text-green-600">
                Выгода: Оперативное получение конкурентной разведки, быстрая
                адаптация стратегии.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm border-l-4 border-blue-500 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-3">
                <svg
                  className="w-8 h-8 text-blue-500 mr-3 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                </svg>
                <h3 className="text-xl font-semibold text-blue-600">
                  Автоматизация HR-Процессов
                </h3>
              </div>
              <p className="text-gray-600 mb-3">
                Помогает в скрининге резюме, назначении собеседований,
                онбординге новых сотрудников, ответах на типовые вопросы
                персонала.
              </p>
              <p className="font-semibold text-green-600">
                Выгода: Ускорение найма, снижение нагрузки на HR-отдел,
                улучшение опыта сотрудников.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="process"
        className="py-16 md:py-20 px-4 bg-blue-50 dark:bg-gray-900"
      >
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white">
            Наш Процесс Разработки: Прозрачно и Эффективно
          </h2>
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-5 top-5 bottom-5 w-0.5 bg-blue-300 hidden md:block"></div>

            <div className="relative pl-12 md:pl-16 pb-10">
              <div className="absolute left-0 top-0 flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full font-bold text-lg shadow-md">
                1
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2 text-blue-600">
                Анализ и Консультация
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Глубоко погружаемся в ваши бизнес-цели, текущие процессы и
                доступные данные. Определяем ключевые метрики (KPI) для оценки
                успеха будущего ИИ-агента. Результат: четкое понимание задачи и
                ожиданий.
              </p>
            </div>

            <div className="relative pl-12 md:pl-16 pb-10">
              <div className="absolute left-0 top-0 flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full font-bold text-lg shadow-md">
                2
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2 text-blue-600">
                Проектирование Решения
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Разрабатываем архитектуру ИИ-агента, подбираем оптимальные
                ИИ-модели и технологии. Составляем детальное Техническое Задание
                (ТЗ), описывающее функционал, интеграции и требования.
              </p>
            </div>

            <div className="relative pl-12 md:pl-16 pb-10">
              <div className="absolute left-0 top-0 flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full font-bold text-lg shadow-md">
                3
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2 text-blue-600">
                Разработка и Интеграция
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Пишем код агента, настраиваем и обучаем ИИ-модели. Интегрируем
                решение с вашими существующими системами (CRM, ERP, API и др.),
                обеспечивая бесшовный обмен данными.
              </p>
            </div>

            <div className="relative pl-12 md:pl-16 pb-10">
              <div className="absolute left-0 top-0 flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full font-bold text-lg shadow-md">
                4
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2 text-blue-600">
                Тестирование и Обучение
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Тщательно проверяем работоспособность, производительность и
                безопасность ИИ-агента. Проводим дополнительное обучение на
                реальных или синтетических данных для достижения нужной
                точности.
              </p>
            </div>

            <div className="relative pl-12 md:pl-16 pb-10">
              <div className="absolute left-0 top-0 flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full font-bold text-lg shadow-md">
                5
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2 text-blue-600">
                Внедрение и Запуск
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Развертываем готового ИИ-агента в вашей рабочей среде (облачной
                или локальной). Осуществляем запуск и первичный мониторинг
                работы.
              </p>
            </div>

            <div className="relative pl-12 md:pl-16">
              <div className="absolute left-0 top-0 flex items-center justify-center w-10 h-10 bg-green-600 text-white rounded-full font-bold text-lg shadow-md">
                6
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2 text-green-700">
                Поддержка и Развитие
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Обеспечиваем непрерывный мониторинг работы агента, техническую
                поддержку и консультации. При необходимости дорабатываем
                функционал и адаптируем агента к изменяющимся условиям.
              </p>
            </div>
          </div>

          <p className="mt-12 text-center text-lg text-gray-700 italic">
            Мы вовлекаем вас на ключевых этапах, обеспечивая полный контроль и
            соответствие результата вашим ожиданиям.
          </p>
        </div>
      </section>

      <section
        id="why-us"
        className="py-16 md:py-20 px-4 bg-white dark:bg-black"
      >
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800 dark:text-white">
            Почему Выбирают Нас?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <div className="text-center p-6">
              <div className="mb-4 inline-block p-3 bg-blue-100 rounded-full">
                <svg
                  className="w-10 h-10 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Глубокая Экспертиза в ИИ
              </h3>
              <p className="text-gray-600">
                Наша команда состоит из сертифицированных ML-инженеров и Data
                Scientists с опытом реализации сложных ИИ-проектов.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="mb-4 inline-block p-3 bg-blue-100 rounded-full">
                <svg
                  className="w-10 h-10 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Кастомный Подход</h3>
              <p className="text-gray-600">
                Мы не продаем "коробки". Каждый ИИ-агент разрабатывается
                индивидуально под ваши уникальные задачи и процессы.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="mb-4 inline-block p-3 bg-blue-100 rounded-full">
                <svg
                  className="w-10 h-10 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Фокус на Бизнес-Результат
              </h3>
              <p className="text-gray-600">
                Наша цель – не просто внедрить ИИ, а добиться измеримого
                улучшения ваших KPI: ROI, эффективности, снижения затрат.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="mb-4 inline-block p-3 bg-blue-100 rounded-full">
                <svg
                  className="w-10 h-10 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Прозрачность и Партнерство
              </h3>
              <p className="text-gray-600">
                Вы всегда в курсе процесса разработки. Мы строим долгосрочные
                партнерские отношения и предоставляем полную поддержку.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="mb-4 inline-block p-3 bg-blue-100 rounded-full">
                <svg
                  className="w-10 h-10 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Конфиденциальность и Безопасность
              </h3>
              <p className="text-gray-600">
                Строго соблюдаем NDA и применяем лучшие практики для защиты
                ваших коммерческих данных на всех этапах.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="mb-4 inline-block p-3 bg-blue-100 rounded-full">
                <svg
                  className="w-10 h-10 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Опыт в Вашей Отрасли
              </h3>
              <p className="text-gray-600">
                Имеем успешные кейсы внедрения ИИ-агентов для компаний в
                различных сферах бизнеса, от e-commerce и финансов до
                производства.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="cta"
        className="py-16 md:py-24 px-4 bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-800 text-white"
      >
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Готовы Трансформировать Ваш Бизнес с ИИ?
          </h2>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-90">
            Сделайте первый шаг к автоматизации и росту. Обсудите ваш проект с
            нашими экспертами по ИИ.
          </p>

          <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-2xl text-left text-gray-800">
            <h3 className="text-2xl font-semibold mb-6 text-center text-blue-600">
              Запросите Бесплатную Консультацию
            </h3>
            <form action="#" method="POST">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Ваше Имя <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Иван Иванов"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="ivan.ivanov@company.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Телефон <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  placeholder="+7 (XXX) XXX-XX-XX"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Компания
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Название вашей компании"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Кратко опишите вашу задачу (опционально)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  placeholder="Например: автоматизировать ответы на типовые запросы клиентов..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-800 font-bold py-3 px-6 rounded-md transition duration-300 text-lg shadow-md"
              >
                Отправить Заявку
              </button>
            </form>
            <p className="mt-4 text-sm text-gray-500 text-center">
              Нажимая "Отправить Заявку", вы соглашаетесь с
              <a
                href="/privacy-policy"
                target="_blank"
                className="text-blue-600 hover:underline ml-1"
              >
                Политикой Конфиденциальности
              </a>
              .
            </p>
          </div>

          <p className="mt-8 text-base opacity-80">
            Наш специалист свяжется с вами в течение 24 часов для уточнения
            деталей и назначения онлайн-встречи.
          </p>

          <div className="mt-10 text-lg">
            <span>Или свяжитесь с нами напрямую:</span>
            <a
              href="tel:+70001234567"
              className="font-semibold hover:underline mx-2 whitespace-nowrap"
            >
              📞 +7 (000) 123-45-67
            </a>
            <a
              href="mailto:info@neuropolis.ru"
              className="font-semibold hover:underline mx-2 whitespace-nowrap"
            >
              ✉️ info@neuropolis.ru
            </a>
          </div>
        </div>
      </section>

      <section id="faq" className="py-16 md:py-20 px-4 bg-white dark:bg-black">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            Ответы на Ваши Вопросы (FAQ)
          </h2>
          <div className="max-w-3xl mx-auto space-y-5">
            <details className="group bg-gray-50 rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <summary className="flex justify-between items-center p-4 cursor-pointer font-semibold text-lg text-gray-700 hover:bg-gray-100 transition duration-300">
                Сколько стоит разработка кастомного ИИ-агента?
                <svg
                  className="w-5 h-5 transform transition-transform duration-300 group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </summary>
              <div className="p-4 text-gray-600 leading-relaxed border-t border-gray-200">
                Стоимость зависит от сложности задачи, требуемых интеграций,
                объема данных для обучения и функционала агента. Мы рассчитываем
                цену индивидуально после детального анализа ваших потребностей
                на бесплатной консультации. Базовые решения начинаются от 200
                000 рублей, а сложные системы требуют более значительных
                инвестиций.
              </div>
            </details>

            <details className="group bg-gray-50 rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <summary className="flex justify-between items-center p-4 cursor-pointer font-semibold text-lg text-gray-700 hover:bg-gray-100 transition duration-300">
                Какие сроки разработки?
                <svg
                  className="w-5 h-5 transform transition-transform duration-300 group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </summary>
              <div className="p-4 text-gray-600 leading-relaxed border-t border-gray-200">
                Сроки также зависят от сложности проекта. Разработка простого
                ИИ-агента может занять от 4 до 8 недель. Более комплексные
                решения с множеством интеграций и сложным обучением могут
                потребовать от 3 до 6 месяцев. Мы предоставляем детальный
                план-график на этапе проектирования.
              </div>
            </details>

            <details className="group bg-gray-50 rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <summary className="flex justify-between items-center p-4 cursor-pointer font-semibold text-lg text-gray-700 hover:bg-gray-100 transition duration-300">
                Нужны ли нам свои специалисты по ИИ для работы с агентом?
                <svg
                  className="w-5 h-5 transform transition-transform duration-300 group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </summary>
              <div className="p-4 text-gray-600 leading-relaxed border-t border-gray-200">
                Нет, для использования готового ИИ-агента вам не нужны
                собственные ИИ-специалисты. Мы разрабатываем интуитивно понятные
                интерфейсы (если они требуются) и предоставляем обучение для
                ваших сотрудников. Техническую поддержку и обслуживание агента
                мы берем на себя.
              </div>
            </details>

            <details className="group bg-gray-50 rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <summary className="flex justify-between items-center p-4 cursor-pointer font-semibold text-lg text-gray-700 hover:bg-gray-100 transition duration-300">
                Как обеспечивается безопасность и конфиденциальность данных?
                <svg
                  className="w-5 h-5 transform transition-transform duration-300 group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </summary>
              <div className="p-4 text-gray-600 leading-relaxed border-t border-gray-200">
                Мы подписываем соглашение о неразглашении (NDA) перед началом
                работы. В процессе разработки мы используем защищенные каналы
                связи, шифрование данных и лучшие практики безопасности. Доступ
                к вашим данным строго регламентирован. Готовый агент может быть
                развернут на вашей инфраструктуре для полного контроля.
              </div>
            </details>

            <details className="group bg-gray-50 rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <summary className="flex justify-between items-center p-4 cursor-pointer font-semibold text-lg text-gray-700 hover:bg-gray-100 transition duration-300">
                Чем ИИ-агент отличается от обычного чат-бота или скрипта
                автоматизации?
                <svg
                  className="w-5 h-5 transform transition-transform duration-300 group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </summary>
              <div className="p-4 text-gray-600 leading-relaxed border-t border-gray-200">
                Основное отличие - в способности к автономному принятию решений,
                обучению и адаптации. Чат-боты обычно работают по заранее
                заданным сценариям. Скрипты автоматизируют четко определенные
                шаги. ИИ-агент может анализировать неструктурированные данные,
                понимать контекст, самостоятельно планировать действия для
                достижения цели и улучшать свою работу со временем.
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}
