import React from "react";
import { Heading } from "@/components/ui/heading";

export default function BusinessProblems() {
  return (
    <section
      id="business-problems"
      className="py-20 md:py-28 relative overflow-hidden"
    >
      {/* Градиентный фон */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-gray-100 -z-10"></div>
      
      {/* Декоративные элементы */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-24 -left-24 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-1280 mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm mb-4 bg-blue-500/10 text-blue-600 border border-blue-500/20 backdrop-blur-sm">
            Проблемы бизнеса
          </div>
          <Heading
            level={2}
            align="center"
            className="mb-6 text-gray-900"
          >
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
          </Heading>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Современные ИИ-решения помогают преодолеть типичные проблемы бизнеса и повысить эффективность
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {/* Карточка 1 */}
          <div className="relative group p-7 rounded-2xl transition-all duration-500 bg-white hover:shadow-xl border border-gray-200">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            
            <div className="flex flex-col relative z-10">
              <Heading level={3} className="mb-3 text-gray-900">
                Потеря времени на рутине
              </Heading>
              <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                Сотрудники тратят большую часть рабочего времени на повторяющиеся задачи вместо решения стратегических вопросов
              </p>
              <div className="flex items-center space-x-3 pt-3 border-t border-gray-200">
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                  60%
                </span>
                <span className="text-sm text-gray-500">
                  времени уходит на рутину
                </span>
              </div>
            </div>
          </div>

          {/* Карточка 2 */}
          <div className="relative group p-7 rounded-2xl transition-all duration-500 bg-white hover:shadow-xl border border-gray-200">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            
            <div className="flex flex-col relative z-10">
              <Heading level={3} className="mb-3 text-gray-900">
                Высокие операционные затраты
              </Heading>
              <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                Ручная обработка данных и процессов требует большого штата сотрудников и значительных затрат
              </p>
              <div className="flex items-center space-x-3 pt-3 border-t border-gray-200">
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                  45%
                </span>
                <span className="text-sm text-gray-500">
                  экономии при автоматизации
                </span>
              </div>
            </div>
          </div>

          {/* Карточка 3 */}
          <div className="relative group p-7 rounded-2xl transition-all duration-500 bg-white hover:shadow-xl border border-gray-200">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            
            <div className="flex flex-col relative z-10">
              <Heading level={3} className="mb-3 text-gray-900">
                Упущенные клиенты
              </Heading>
              <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                Отсутствие круглосуточного обслуживания и задержки в коммуникации приводят к потере потенциальных клиентов
              </p>
              <div className="flex items-center space-x-3 pt-3 border-t border-gray-200">
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                  30%
                </span>
                <span className="text-sm text-gray-500">
                  потерянных обращений
                </span>
              </div>
            </div>
          </div>

          {/* Карточка 4 */}
          <div className="relative group p-7 rounded-2xl transition-all duration-500 bg-white hover:shadow-xl border border-gray-200">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            
            <div className="flex flex-col relative z-10">
              <Heading level={3} className="mb-3 text-gray-900">
                Потеря контрактов из-за медлительности
              </Heading>
              <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                Медленная реакция на запросы и согласование документов приводит к потере клиентов, выбирающих более оперативных конкурентов
              </p>
              <div className="flex items-center space-x-3 pt-3 border-t border-gray-200">
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                  42%
                </span>
                <span className="text-sm text-gray-500">
                  клиентов уходят к конкурентам
                </span>
              </div>
            </div>
          </div>

          {/* Карточка 5 */}
          <div className="relative group p-7 rounded-2xl transition-all duration-500 bg-white hover:shadow-xl border border-gray-200">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            
            <div className="flex flex-col relative z-10">
              <Heading level={3} className="mb-3 text-gray-900">
                Разрозненные данные и хаос в информации
              </Heading>
              <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                Критически важная информация распределена по разным системам, из-за чего сотрудники тратят время на поиск данных вместо работы с клиентами
              </p>
              <div className="flex items-center space-x-3 pt-3 border-t border-gray-200">
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                  68%
                </span>
                <span className="text-sm text-gray-500">
                  времени тратится на поиск
                </span>
              </div>
            </div>
          </div>

          {/* Карточка 6 */}
          <div className="relative group p-7 rounded-2xl transition-all duration-500 bg-white hover:shadow-xl border border-gray-200">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            
            <div className="flex flex-col relative z-10">
              <Heading level={3} className="mb-3 text-gray-900">
                Невозможность масштабирования процессов
              </Heading>
              <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                Зависимость от ручного труда создает "потолок роста" - при увеличении бизнеса приходится линейно наращивать штат, снижая прибыльность
              </p>
              <div className="flex items-center space-x-3 pt-3 border-t border-gray-200">
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                  71%
                </span>
                <span className="text-sm text-gray-500">
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