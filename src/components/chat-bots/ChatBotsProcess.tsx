"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { useTheme } from "@/context/ThemeContext";
import { LineChart, Braces, Cpu, Code2, ShieldCheck } from "lucide-react";

export default function ChatBotsProcess() {
  const { isDark } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  // Этапы процесса
  const processSteps = [
    {
      number: "1",
      title: "Аналитическое исследование",
      description:
        "Проводим глубокий анализ ваших бизнес-процессов, выявляем ключевые точки автоматизации и формируем концепцию чат-бота на основе ваших бизнес-целей. Результат: четкое понимание задачи и ожиданий.",
      icon: <LineChart className="w-4 h-4" />,
    },
    {
      number: "2",
      title: "Проектирование ИИ-диалогов",
      description:
        "Разрабатываем интеллектуальные сценарии коммуникации, проектируем нейронные связи решений и создаем уникальный персонаж чат-бота с адаптивной коммуникационной стратегией. Результат: детальный план разработки.",
      icon: <Braces className="w-4 h-4" />,
    },
    {
      number: "3",
      title: "ML-разработка и обучение",
      description:
        "Применяем передовые технологии машинного обучения, настраиваем трансформерные модели и проводим обучение на специализированных датасетах для максимальной релевантности ответов. Результат: обученная ML-модель.",
      icon: <Cpu className="w-4 h-4" />,
    },
    {
      number: "4",
      title: "Тестирование и оптимизация",
      description:
        "Проводим многоступенчатое тестирование с применением сценарного моделирования, выполняем A/B тесты и оптимизируем алгоритмы для повышения точности и скорости обработки запросов. Результат: стабильное решение.",
      icon: <Code2 className="w-4 h-4" />,
    },
    {
      number: "5",
      title: "Внедрение и сопровождение",
      description:
        "Запускаем чат-бота в продакшн, обеспечиваем плавную интеграцию в вашу экосистему и предоставляем непрерывный мониторинг с автоматическими улучшениями на основе эксплуатационных данных. Результат: работающее решение.",
      icon: <ShieldCheck className="w-4 h-4" />,
    },
  ];

  return (
    <motion.section
      id="chatbots-process"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="py-20 md:py-28 px-4 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 -z-10"></div>
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-[#0167F3]/10 to-[#399AFC]/10 dark:from-[#0167F3]/10 dark:to-[#399AFC]/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-[#0167F3]/10 to-[#399AFC]/10 dark:from-[#0167F3]/10 dark:to-[#399AFC]/10 rounded-full blur-3xl -z-10"></div>

      <Container>
        <motion.h2
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 md:mb-20"
        >
          <span className="text-gray-900 dark:text-white">Как мы создаем </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0167F3] to-[#399AFC]">
            интеллектуальных ботов
          </span>
        </motion.h2>

        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-[#0167F3]/30 dark:bg-[#399AFC]/30 hidden md:block"></div>

          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative pl-12 md:pl-14 pb-10 last:pb-0"
            >
              <div className="absolute left-0 top-0 flex items-center justify-center w-9 h-9 bg-gradient-to-br from-[#0167F3] to-[#399AFC] text-white rounded-full font-medium text-sm shadow-md">
                {step.number}
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2 text-gray-800 dark:text-white">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </motion.section>
  );
}
