"use client";

import React from "react";

export default function AIAgentSolutionNew() {
  return (
    <section
      id="solution"
      className="py-20 md:py-28 px-4 relative overflow-hidden"
    >
      {/* Фоновые элементы */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-50/50 to-indigo-50/30 dark:from-gray-900/70 dark:to-blue-950/20 -z-10"></div>
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-gradient-to-br from-blue-300/10 to-indigo-400/10 dark:from-blue-500/5 dark:to-indigo-700/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-300/10 to-blue-400/10 dark:from-indigo-500/5 dark:to-blue-700/5 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto max-w-[1280px] relative z-10 space-y-16 md:space-y-20">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            Решение:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              Ваши Персональные ИИ-Агенты
            </span>
          </h2>
          <p className="mt-6 text-gray-600 dark:text-gray-300 text-lg md:text-xl">
            Автоматизируйте рутинные задачи и увеличьте эффективность с помощью
            интеллектуальных ассистентов
          </p>
        </div>

        <div className="max-w-6xl mx-auto bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-200/80 dark:border-slate-800/50 shadow-subtle p-8 md:p-12 space-y-10">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-5 text-gray-800 dark:text-white">
              Что такое{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                ИИ-Агент
              </span>
              ?
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Это программа, использующая искусственный интеллект для
              автономного выполнения конкретных бизнес-задач. Он может
              взаимодействовать с вашими системами (CRM, ERP, Email, базы
              данных), общаться с клиентами или сотрудниками, анализировать
              данные и обучаться на основе полученного опыта для повышения
              эффективности.
            </p>
          </div>

          <hr className="border-slate-200 dark:border-slate-800" />

          <div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800 dark:text-white">
              Как это работает:
            </h3>
            <div className="space-y-5">
              <div className="flex gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/50">
                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-semibold text-sm shadow-md">
                  01
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">
                    Получение задачи
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Агент получает триггер или команду (например, новое письмо,
                    запись в CRM, время по расписанию).
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/50">
                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-semibold text-sm shadow-md">
                  02
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">
                    Анализ и планирование
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    ИИ анализирует задачу, данные и определяет
                    последовательность действий.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/50">
                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-semibold text-sm shadow-md">
                  03
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">
                    Взаимодействие
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Агент подключается к нужным системам, извлекает или вносит
                    информацию.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/50">
                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-semibold text-sm shadow-md">
                  04
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">
                    Выполнение действия
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Отправляет отчет, отвечает клиенту, обновляет статус заказа
                    и т.д.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/50">
                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-semibold text-sm shadow-md">
                  05
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">
                    Обучение и отчет
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Запоминает результат, формирует отчет и улучшает свою работу
                    в будущем.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-slate-200 dark:border-slate-800" />

          <div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800 dark:text-white">
              Ключевые характеристики:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3 p-4 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/50">
                <svg
                  className="w-6 h-6 text-green-500 dark:text-green-400 mt-1 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  {" "}
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>{" "}
                </svg>
                <div>
                  <strong className="text-gray-800 dark:text-gray-100 block font-medium">
                    Автономность
                  </strong>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    Работают самостоятельно по заданным правилам и целям.
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/50">
                <svg
                  className="w-6 h-6 text-green-500 dark:text-green-400 mt-1 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  {" "}
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>{" "}
                </svg>
                <div>
                  <strong className="text-gray-800 dark:text-gray-100 block font-medium">
                    Обучаемость
                  </strong>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    Способны адаптироваться и улучшать производительность со
                    временем.
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/50">
                <svg
                  className="w-6 h-6 text-green-500 dark:text-green-400 mt-1 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  {" "}
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>{" "}
                </svg>
                <div>
                  <strong className="text-gray-800 dark:text-gray-100 block font-medium">
                    Интеграция
                  </strong>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    Подключаются к любым системам через API или прямой доступ к
                    БД.
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/50">
                <svg
                  className="w-6 h-6 text-green-500 dark:text-green-400 mt-1 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  {" "}
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>{" "}
                </svg>
                <div>
                  <strong className="text-gray-800 dark:text-gray-100 block font-medium">
                    Масштабируемость
                  </strong>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    Легко масштабируются под возрастающие объемы и новые задачи.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 dark:from-blue-700 dark:to-indigo-800 text-white rounded-2xl p-8 md:p-10 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-60 h-60 bg-gradient-to-br from-blue-400/20 to-indigo-500/20 rounded-full blur-2xl -z-0 translate-x-1/2 -translate-y-1/2 opacity-70"></div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 relative z-10">
              Проблемы, которые решают ИИ-агенты
            </h3>
            <ul className="space-y-4 relative z-10 text-blue-50">
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-blue-200 mt-1 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  {" "}
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>{" "}
                </svg>
                <span>
                  Рутинные и повторяющиеся задачи, отнимающие время сотрудников
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-blue-200 mt-1 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  {" "}
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>{" "}
                </svg>
                <span>
                  Необходимость быстрой обработки больших объемов данных
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-blue-200 mt-1 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  {" "}
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>{" "}
                </svg>
                <span>Ошибки из-за человеческого фактора и усталости</span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-blue-200 mt-1 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  {" "}
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>{" "}
                </svg>
                <span>Высокие затраты на персонал для базовых операций</span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-blue-200 mt-1 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  {" "}
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>{" "}
                </svg>
                <span>Потребность в круглосуточной работе без перерывов</span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-200/80 dark:border-slate-800/50 shadow-subtle p-8 md:p-10">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800 dark:text-white">
              Ключевые преимущества
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2 p-4 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/70">
                <span className="text-blue-600 dark:text-blue-400 font-semibold text-lg">
                  Экономия времени
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  до 70% на рутинных операциях
                </p>
              </div>
              <div className="flex flex-col gap-2 p-4 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/70">
                <span className="text-blue-600 dark:text-blue-400 font-semibold text-lg">
                  Сокращение затрат
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  на 30-50% на обработку задач
                </p>
              </div>
              <div className="flex flex-col gap-2 p-4 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/70">
                <span className="text-blue-600 dark:text-blue-400 font-semibold text-lg">
                  Точность
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  снижение ошибок до 90%
                </p>
              </div>
              <div className="flex flex-col gap-2 p-4 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/70">
                <span className="text-blue-600 dark:text-blue-400 font-semibold text-lg">
                  Масштабируемость
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  мгновенная адаптация к объемам
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-blue-50/80 to-indigo-50/60 dark:from-blue-900/30 dark:to-indigo-900/30 border border-blue-100 dark:border-blue-800/40 shadow-md max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />{" "}
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white">
                Начните с малого, масштабируйте быстро
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg mt-1 md:mt-2">
                Внедрение ИИ-агентов можно начать с пилотного проекта и
                постепенно расширять области применения
              </p>
            </div>
            <button className="flex-shrink-0 mt-4 md:mt-0 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold shadow-lg shadow-blue-500/20 dark:shadow-blue-600/30 transition-all duration-300 hover:shadow-xl hover:scale-[1.03]">
              Начать внедрение
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
