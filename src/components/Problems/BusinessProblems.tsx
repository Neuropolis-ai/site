import React from "react";

export default function BusinessProblems() {
  return (
    <section
      id="business-problems"
      className="py-20 md:py-28 relative overflow-hidden"
    >
      {/* Градиентный фон */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-900/90 -z-10"></div>
      
      {/* Декоративные элементы */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-24 -left-24 w-80 h-80 bg-blue-400/10 dark:bg-blue-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-1280 mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm mb-4 bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 dark:border-blue-400/20 backdrop-blur-sm">
            Проблемы бизнеса
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            С какими вызовами сталкивается{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 relative">
              ваш бизнес?
              <svg
                className="absolute -bottom-1 left-0 w-full h-1.5 text-blue-500/20"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,5 Q25,0 50,5 T100,5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                />
              </svg>
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Современные ИИ-решения помогают преодолеть типичные проблемы бизнеса и повысить эффективность
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {/* Карточка 1 */}
          <div className="relative group p-7 rounded-2xl transition-all duration-500 bg-white dark:bg-gray-800/50 hover:shadow-xl border border-gray-200 dark:border-gray-700/50">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-blue-400/5 dark:from-blue-500/10 dark:to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            
            <div className="flex flex-col relative z-10">
              <div className="w-14 h-14 rounded-xl mb-5 flex items-center justify-center bg-blue-500/10 dark:bg-blue-500/30">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Потеря времени на рутине
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-grow">
                Сотрудники тратят большую часть рабочего времени на повторяющиеся задачи вместо решения стратегических вопросов
              </p>
              <div className="flex items-center space-x-3 pt-3 border-t border-gray-200 dark:border-gray-700/50">
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                  60%
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  времени уходит на рутину
                </span>
              </div>
            </div>
          </div>

          {/* Карточка 2 */}
          <div className="relative group p-7 rounded-2xl transition-all duration-500 bg-white dark:bg-gray-800/50 hover:shadow-xl border border-gray-200 dark:border-gray-700/50">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-blue-400/5 dark:from-blue-500/10 dark:to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            
            <div className="flex flex-col relative z-10">
              <div className="w-14 h-14 rounded-xl mb-5 flex items-center justify-center bg-blue-500/10 dark:bg-blue-500/30">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                  <line x1="12" y1="1" x2="12" y2="23"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Высокие операционные затраты
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-grow">
                Ручная обработка данных и процессов требует большого штата сотрудников и значительных затрат
              </p>
              <div className="flex items-center space-x-3 pt-3 border-t border-gray-200 dark:border-gray-700/50">
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                  45%
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  экономии при автоматизации
                </span>
              </div>
            </div>
          </div>

          {/* Карточка 3 */}
          <div className="relative group p-7 rounded-2xl transition-all duration-500 bg-white dark:bg-gray-800/50 hover:shadow-xl border border-gray-200 dark:border-gray-700/50">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-blue-400/5 dark:from-blue-500/10 dark:to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            
            <div className="flex flex-col relative z-10">
              <div className="w-14 h-14 rounded-xl mb-5 flex items-center justify-center bg-blue-500/10 dark:bg-blue-500/30">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Упущенные клиенты
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-grow">
                Отсутствие круглосуточного обслуживания и задержки в коммуникации приводят к потере потенциальных клиентов
              </p>
              <div className="flex items-center space-x-3 pt-3 border-t border-gray-200 dark:border-gray-700/50">
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                  30%
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  потерянных обращений
                </span>
              </div>
            </div>
          </div>

          {/* Карточка 4 */}
          <div className="relative group p-7 rounded-2xl transition-all duration-500 bg-white dark:bg-gray-800/50 hover:shadow-xl border border-gray-200 dark:border-gray-700/50">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-blue-400/5 dark:from-blue-500/10 dark:to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            
            <div className="flex flex-col relative z-10">
              <div className="w-14 h-14 rounded-xl mb-5 flex items-center justify-center bg-blue-500/10 dark:bg-blue-500/30">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                  <path d="M16 3h5v5"></path>
                  <path d="M21 3l-8 8"></path>
                  <path d="M8 12l-2 2"></path>
                  <path d="M19 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4"></path>
                  <path d="m3 21 4-4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Потеря контрактов из-за медлительности
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-grow">
                Медленная реакция на запросы и согласование документов приводит к потере клиентов, выбирающих более оперативных конкурентов
              </p>
              <div className="flex items-center space-x-3 pt-3 border-t border-gray-200 dark:border-gray-700/50">
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                  42%
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  клиентов уходят к конкурентам
                </span>
              </div>
            </div>
          </div>

          {/* Карточка 5 */}
          <div className="relative group p-7 rounded-2xl transition-all duration-500 bg-white dark:bg-gray-800/50 hover:shadow-xl border border-gray-200 dark:border-gray-700/50">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-blue-400/5 dark:from-blue-500/10 dark:to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            
            <div className="flex flex-col relative z-10">
              <div className="w-14 h-14 rounded-xl mb-5 flex items-center justify-center bg-blue-500/10 dark:bg-blue-500/30">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                  <path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z"></path>
                  <path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z"></path>
                  <path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z"></path>
                  <path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Разрозненные данные и хаос в информации
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-grow">
                Критически важная информация распределена по разным системам, из-за чего сотрудники тратят время на поиск данных вместо работы с клиентами
              </p>
              <div className="flex items-center space-x-3 pt-3 border-t border-gray-200 dark:border-gray-700/50">
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                  68%
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  времени тратится на поиск
                </span>
              </div>
            </div>
          </div>

          {/* Карточка 6 */}
          <div className="relative group p-7 rounded-2xl transition-all duration-500 bg-white dark:bg-gray-800/50 hover:shadow-xl border border-gray-200 dark:border-gray-700/50">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-blue-400/5 dark:from-blue-500/10 dark:to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            
            <div className="flex flex-col relative z-10">
              <div className="w-14 h-14 rounded-xl mb-5 flex items-center justify-center bg-blue-500/10 dark:bg-blue-500/30">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                  <path d="M9 12H4.5a2.5 2.5 0 0 1 0-5H9"></path>
                  <path d="M15 12h4.5a2.5 2.5 0 0 0 0-5H15"></path>
                  <path d="M9 17h6"></path>
                  <path d="M12 12v5"></path>
                  <path d="M12 2v5"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Невозможность масштабирования процессов
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-grow">
                Зависимость от ручного труда создает "потолок роста" - при увеличении бизнеса приходится линейно наращивать штат, снижая прибыльность
              </p>
              <div className="flex items-center space-x-3 pt-3 border-t border-gray-200 dark:border-gray-700/50">
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                  71%
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  падение маржи при росте
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 