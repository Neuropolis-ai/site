"use client";

import React from "react";

export default function AIAgentUseCases() {
  return (
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
              Выгода: Ускорение реакции на лиды до 90%, рост конверсии в продажу
              на 15-25%.
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
              Отвечает на частые вопросы клиентов 24/7, решает типовые проблемы,
              маршрутизирует сложные запросы к нужным специалистам, собирает
              обратную связь.
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
              Выгода: Сокращение времени на подготовку отчетов на 70%, повышение
              точности прогнозов.
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
              Помогает в скрининге резюме, назначении собеседований, онбординге
              новых сотрудников, ответах на типовые вопросы персонала.
            </p>
            <p className="font-semibold text-green-600">
              Выгода: Ускорение найма, снижение нагрузки на HR-отдел, улучшение
              опыта сотрудников.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
