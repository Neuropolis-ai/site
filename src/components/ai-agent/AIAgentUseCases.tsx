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
import { Suspense } from "react";
import { cn } from "@/lib/utils";

const useCases = [
  {
    icon: Filter,
    title: "ИИ-Агент для Квалификации Лидов",
    description:
      "Автоматически анализирует входящие заявки, обогащает данные из открытых источников, оценивает потенциал лида и передает самых горячих менеджерам по продажам.",
    benefit:
      "Ускорение реакции на лиды до 90%, рост конверсии в продажу на 15-25%.",
    color: "from-blue-500/20 to-cyan-400/20",
    iconColor: "text-blue-500 dark:text-blue-400",
    accentColor: "bg-blue-500/10 dark:bg-blue-400/20",
    hoverGlow:
      "group-hover:shadow-blue-500/20 dark:group-hover:shadow-blue-400/20",
  },
  {
    icon: Bot,
    title: "Автоматизация Клиентской Поддержки",
    description:
      "Отвечает на частые вопросы клиентов 24/7, решает типовые проблемы, маршрутизирует сложные запросы к нужным специалистам, собирает обратную связь.",
    benefit:
      "Снижение нагрузки на 1-ю линию поддержки на 40-60%, повышение удовлетворенности клиентов.",
    color: "from-purple-500/20 to-fuchsia-400/20",
    iconColor: "text-purple-500 dark:text-purple-400",
    accentColor: "bg-purple-500/10 dark:bg-purple-400/20",
    hoverGlow:
      "group-hover:shadow-purple-500/20 dark:group-hover:shadow-purple-400/20",
  },
  {
    icon: BarChart3,
    title: "Интеллектуальный Анализ Отчетов",
    description:
      "Автоматически собирает данные из разных источников (Excel, базы данных, API), формирует сводные отчеты, выявляет аномалии и ключевые тренды.",
    benefit:
      "Сокращение времени на подготовку отчетов на 70%, повышение точности прогнозов.",
    color: "from-emerald-500/20 to-teal-400/20",
    iconColor: "text-emerald-500 dark:text-emerald-400",
    accentColor: "bg-emerald-500/10 dark:bg-emerald-400/20",
    hoverGlow:
      "group-hover:shadow-emerald-500/20 dark:group-hover:shadow-emerald-400/20",
  },
  {
    icon: Truck,
    title: "Оптимизация Логистики и Маршрутов",
    description:
      "Анализирует данные о трафике, погоде, складах и заказах для построения оптимальных маршрутов доставки, управления запасами.",
    benefit: "Снижение транспортных расходов на 10-20%, ускорение доставки.",
    color: "from-amber-500/20 to-yellow-400/20",
    iconColor: "text-amber-500 dark:text-amber-400",
    accentColor: "bg-amber-500/10 dark:bg-amber-400/20",
    hoverGlow:
      "group-hover:shadow-amber-500/20 dark:group-hover:shadow-amber-400/20",
  },
  {
    icon: Eye,
    title: "Мониторинг и Анализ Конкурентов",
    description:
      "Автоматически отслеживает цены, акции, новости и упоминания конкурентов в сети, предоставляя сводные отчеты для принятия стратегических решений.",
    benefit:
      "Оперативное получение конкурентной разведки, быстрая адаптация стратегии.",
    color: "from-rose-500/20 to-pink-400/20",
    iconColor: "text-rose-500 dark:text-rose-400",
    accentColor: "bg-rose-500/10 dark:bg-rose-400/20",
    hoverGlow:
      "group-hover:shadow-rose-500/20 dark:group-hover:shadow-rose-400/20",
  },
  {
    icon: UsersRound,
    title: "Автоматизация HR-Процессов",
    description:
      "Помогает в скрининге резюме, назначении собеседований, онбординге новых сотрудников, ответах на типовые вопросы персонала.",
    benefit:
      "Ускорение найма, снижение нагрузки на HR-отдел, улучшение опыта сотрудников.",
    color: "from-indigo-500/20 to-blue-400/20",
    iconColor: "text-indigo-500 dark:text-indigo-400",
    accentColor: "bg-indigo-500/10 dark:bg-indigo-400/20",
    hoverGlow:
      "group-hover:shadow-indigo-500/20 dark:group-hover:shadow-indigo-400/20",
  },
];

interface UseCaseCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  benefit: string;
  color: string;
  iconColor: string;
  accentColor: string;
  hoverGlow: string;
  className?: string;
  style?: React.CSSProperties;
}

const UseCaseCard: React.FC<UseCaseCardProps> = ({
  icon: Icon,
  title,
  description,
  benefit,
  color,
  iconColor,
  accentColor,
  hoverGlow,
  className,
  style,
}) => {
  return (
    <div
      className={cn(
        "group relative flex flex-col h-full rounded-2xl transition-all duration-300",
        "bg-white/80 dark:bg-gray-900/50 backdrop-blur-xl backdrop-saturate-150",
        "border border-white/20 dark:border-gray-800/60",
        "overflow-hidden",
        "shadow-lg hover:shadow-xl",
        "transform hover:scale-[1.02]",
        hoverGlow,
        className
      )}
      style={style}
    >
      {/* Блик эффект */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden rounded-2xl">
        <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-45 translate-x-[200%] group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
      </div>

      {/* Градиентный фон */}
      <div
        className={cn("absolute inset-0 bg-gradient-to-br opacity-30", color)}
      ></div>

      {/* Шум для текстуры */}
      <div className="absolute inset-0 opacity-[0.015] mix-blend-soft-light bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')]"></div>

      {/* Контент карточки */}
      <div className="relative flex flex-col h-full p-6 z-10">
        <div className="flex items-center mb-5">
          <div
            className={cn(
              "p-3 rounded-xl backdrop-blur-md",
              accentColor,
              "transition-colors duration-300 group-hover:saturate-150"
            )}
          >
            <Icon className={cn("w-6 h-6", iconColor)} strokeWidth={2} />
          </div>
          <h3 className="ml-4 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h3>
        </div>

        <p className="text-gray-600 dark:text-gray-300 text-sm mb-5 flex-grow leading-relaxed tracking-[0.02em]">
          {description}
        </p>

        <div className="mt-auto pt-3 border-t border-gray-100/70 dark:border-gray-800/60">
          <p className="font-medium text-sm text-green-600 dark:text-green-400 tracking-tight">
            <span className="font-semibold">Выгода:</span> {benefit}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function AIAgentUseCases() {
  return (
    <section
      id="use-cases"
      className="py-24 md:py-32 px-4 relative overflow-hidden"
    >
      {/* Фоновый градиент */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/90 to-white dark:from-gray-950 dark:to-gray-900 z-0"></div>

      {/* Фоновый блюр для глубины */}
      <div className="absolute inset-0 backdrop-blur-[100px] z-0"></div>

      {/* Фоновый шум */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')]"></div>

      {/* Фоновые круги */}
      <div className="absolute top-1/4 -left-1/3 w-2/3 h-2/3 bg-[#4F9CFF]/10 dark:bg-[#4F9CFF]/5 blur-[120px] rounded-full"></div>
      <div className="absolute -bottom-1/4 -right-1/3 w-2/3 h-2/3 bg-[#3DF5C2]/10 dark:bg-[#3DF5C2]/5 blur-[120px] rounded-full"></div>

      <div className="container relative mx-auto max-w-7xl z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
            Где ИИ-Агенты{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4F9CFF] to-[#3DF5C2]">
              Усилят
            </span>{" "}
            Ваш Бизнес?
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 tracking-[0.02em] max-w-3xl mx-auto">
            Исследуйте возможности интеллектуальной автоматизации для вашей
            компании
          </p>
        </div>

        <Suspense
          fallback={
            <div className="h-[40vh] flex items-center justify-center">
              Загрузка...
            </div>
          }
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {useCases.map((useCase, index) => (
              <UseCaseCard
                key={index}
                icon={useCase.icon}
                title={useCase.title}
                description={useCase.description}
                benefit={useCase.benefit}
                color={useCase.color}
                iconColor={useCase.iconColor}
                accentColor={useCase.accentColor}
                hoverGlow={useCase.hoverGlow}
                className="opacity-0 animate-fade-in"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: "forwards",
                }}
              />
            ))}
          </div>
        </Suspense>
      </div>
    </section>
  );
}

// Добавляем нужную анимацию
const styles = `
@keyframes fade-in {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fade-in 300ms ease-out;
}
`;

// Добавляем стили в документ
if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}
