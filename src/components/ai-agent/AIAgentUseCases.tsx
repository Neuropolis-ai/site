"use client";

import React from "react";
import {
  Target,
  Bot,
  BarChart3,
  Truck,
  Search,
  UsersRound,
  Briefcase,
  Database,
  TrendingUp,
  Filter,
  MessageSquare,
  LifeBuoy,
  Map,
  Warehouse,
  Eye,
  LineChart,
  ClipboardCheck,
} from "lucide-react";

const useCases = [
  {
    icon: Filter,
    title: "ИИ-Агент для Квалификации Лидов",
    description:
      "Автоматически анализирует входящие заявки, обогащает данные из открытых источников, оценивает потенциал лида и передает самых горячих менеджерам по продажам.",
    benefit:
      "Ускорение реакции на лиды до 90%, рост конверсии в продажу на 15-25%.",
  },
  {
    icon: Bot,
    title: "Автоматизация Клиентской Поддержки",
    description:
      "Отвечает на частые вопросы клиентов 24/7, решает типовые проблемы, маршрутизирует сложные запросы к нужным специалистам, собирает обратную связь.",
    benefit:
      "Снижение нагрузки на 1-ю линию поддержки на 40-60%, повышение удовлетворенности клиентов.",
  },
  {
    icon: BarChart3,
    title: "Интеллектуальный Анализ Отчетов",
    description:
      "Автоматически собирает данные из разных источников (Excel, базы данных, API), формирует сводные отчеты, выявляет аномалии и ключевые тренды.",
    benefit:
      "Сокращение времени на подготовку отчетов на 70%, повышение точности прогнозов.",
  },
  {
    icon: Truck,
    title: "Оптимизация Логистики и Маршрутов",
    description:
      "Анализирует данные о трафике, погоде, складах и заказах для построения оптимальных маршрутов доставки, управления запасами.",
    benefit: "Снижение транспортных расходов на 10-20%, ускорение доставки.",
  },
  {
    icon: Eye,
    title: "Мониторинг и Анализ Конкурентов",
    description:
      "Автоматически отслеживает цены, акции, новости и упоминания конкурентов в сети, предоставляя сводные отчеты для принятия стратегических решений.",
    benefit:
      "Оперативное получение конкурентной разведки, быстрая адаптация стратегии.",
  },
  {
    icon: UsersRound,
    title: "Автоматизация HR-Процессов",
    description:
      "Помогает в скрининге резюме, назначении собеседований, онбординге новых сотрудников, ответах на типовые вопросы персонала.",
    benefit:
      "Ускорение найма, снижение нагрузки на HR-отдел, улучшение опыта сотрудников.",
  },
];

interface UseCaseCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  benefit: string;
}

const UseCaseCard: React.FC<UseCaseCardProps> = ({
  icon: Icon,
  title,
  description,
  benefit,
}) => {
  return (
    <div className="group flex flex-col h-full bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800/80 p-6 rounded-xl shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700/60 transition-all duration-300 ease-in-out transform hover:-translate-y-1">
      <div className="flex items-center mb-4">
        <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/40 mr-4 transition-colors duration-300 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/70">
          <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        </div>
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
          {title}
        </h3>
      </div>
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow">
        {description}
      </p>
      <p className="font-medium text-sm text-green-700 dark:text-green-400/90 mt-auto pt-2 border-t border-gray-200 dark:border-gray-700/60">
        <span className="font-semibold">Выгода:</span> {benefit}
      </p>
    </div>
  );
};

export default function AIAgentUseCases() {
  return (
    <section
      id="use-cases"
      className="py-20 md:py-28 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-black dark:to-gray-900/90"
    >
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-center mb-16 text-gray-900 dark:text-white">
          Где ИИ-Агенты{" "}
          <span className="text-blue-600 dark:text-blue-500">Усилят</span> Ваш
          Бизнес?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <UseCaseCard
              key={index}
              icon={useCase.icon}
              title={useCase.title}
              description={useCase.description}
              benefit={useCase.benefit}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
