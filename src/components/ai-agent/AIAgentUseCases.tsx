"use client";

import { motion } from "framer-motion";
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
import { cn } from "@/lib/utils";

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
  const cardHoverVariant = {
    hover: {
      y: -5,
      transition: { type: "spring", stiffness: 300, damping: 15 },
    },
  };

  return (
    <motion.div
      variants={cardHoverVariant}
      whileHover="hover"
      className={cn(
        "group relative flex flex-col h-full rounded-2xl transition-shadow duration-300",
        "backdrop-blur-lg bg-white/60 dark:bg-gray-900/50",
        "border border-white/20 dark:border-gray-700/30",
        "overflow-hidden",
        "shadow-md hover:shadow-lg"
      )}
    >
      <div className="relative flex flex-col h-full p-6 z-10">
        <div className="flex items-center mb-4">
          <div
            className={cn(
              "p-2 rounded-xl backdrop-blur-md",
              "bg-blue-500/10 dark:bg-blue-900/20",
              "transition-colors duration-300 group-hover:saturate-150"
            )}
          >
            <Icon
              className={cn("w-6 h-6 text-blue-600 dark:text-blue-400")}
              strokeWidth={1.75}
            />
          </div>
          <h3 className="ml-4 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h3>
        </div>

        <p className="text-gray-600 dark:text-gray-300 text-lg mb-4 flex-grow leading-relaxed">
          {description}
        </p>

        <div className="mt-auto pt-3 border-t border-blue-100/50 dark:border-blue-800/40">
          <p className="font-medium text-base text-green-600 dark:text-green-400 tracking-tight">
            <span className="font-semibold text-gray-700 dark:text-gray-300">
              Выгода:
            </span>{" "}
            {benefit}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default function AIAgentUseCases() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.section
      id="use-cases"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="py-20 md:py-28 px-4 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900 z-0"></div>
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-gradient-to-br from-blue-200/20 to-blue-400/20 dark:from-blue-500/10 dark:to-blue-700/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-200/20 to-indigo-400/20 dark:from-indigo-500/10 dark:to-indigo-700/10 rounded-full blur-3xl -z-10"></div>

      <div className="container relative mx-auto max-w-7xl z-10">
        <motion.div
          variants={itemVariants}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Где ИИ-Агенты{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0167F3] to-[#399AFC]">
              Усилят
            </span>{" "}
            Ваш Бизнес?
          </h2>
          <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Исследуйте возможности интеллектуальной автоматизации для вашей
            компании
          </p>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {useCases.map((useCase, index) => (
            <motion.div key={index} variants={itemVariants}>
              <UseCaseCard
                icon={useCase.icon}
                title={useCase.title}
                description={useCase.description}
                benefit={useCase.benefit}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
