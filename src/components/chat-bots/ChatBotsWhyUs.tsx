"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { useTheme } from "@/context/ThemeContext";
import { Target, Code2, Database, Users, Cpu, ShieldCheck } from "lucide-react";
import { Heading } from "@/components/ui/Heading";
import Subheading from "@/components/ui/subheading";
import Badge from "@/components/ui/Badge";

export default function ChatBotsWhyUs() {
  const { isDark } = useTheme();

  // Анимации
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

  const advantages = [
    {
      icon: <Target className="w-5 h-5" />,
      title: "Индивидуальный подход",
      description:
        "Разрабатываем решения под конкретные задачи вашего бизнеса с учетом отраслевой специфики и требований",
    },
    {
      icon: <Code2 className="w-5 h-5" />,
      title: "Опытная команда разработчиков",
      description:
        "Наши специалисты имеют 5+ лет опыта в создании интеллектуальных чат-ботов для различных отраслей",
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: "Работа с любыми объемами данных",
      description:
        "Создаем решения, способные обрабатывать большие массивы информации и эффективно использовать базы знаний",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Обучение и поддержка персонала",
      description:
        "Проводим полное обучение сотрудников работе с чат-ботом и обеспечиваем техническую поддержку 24/7",
    },
    {
      icon: <Cpu className="w-5 h-5" />,
      title: "Современные технологии ИИ",
      description:
        "Используем передовые нейросетевые модели и алгоритмы машинного обучения для создания интеллектуальных решений",
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Безопасность и надежность",
      description:
        "Обеспечиваем высокий уровень защиты данных, соответствие требованиям GDPR и российскому законодательству",
    },
  ];

  return (
    <motion.section
      id="chatbots-why-us"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="py-20 md:py-28 px-4 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900 -z-10"></div>
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-blue-400/20 dark:from-blue-500/10 dark:to-blue-700/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-indigo-200/20 to-indigo-400/20 dark:from-indigo-500/10 dark:to-indigo-700/10 rounded-full blur-3xl -z-10"></div>

      <Container>
        <div className="text-center mb-16">
          <motion.div variants={itemVariants}>
            <Badge>Преимущества</Badge>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Heading level={2} align="center" className="mb-6">
              Почему выбирают{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-light">
                нас
              </span>
            </Heading>
          </motion.div>
        </div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -4,
                  transition: { type: "spring", stiffness: 300, damping: 15 },
                }}
                className="group backdrop-blur-lg bg-white/60 dark:bg-gray-900/50 p-6 rounded-2xl border border-white/20 dark:border-gray-700/30 shadow-md hover:shadow-lg transition-shadow duration-300 h-full"
              >
                <div className="flex items-start gap-4 mb-3">
                  <div className="flex-shrink-0 bg-gradient-to-br from-primary to-primary-light p-2 rounded-xl shadow-md w-10 h-10 flex items-center justify-center text-white">
                    {advantage.icon}
                  </div>
                  <Heading level={3} className="mt-1">
                    {advantage.title}
                  </Heading>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  {advantage.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-16 text-center"
        >
          <div className="p-6 md:p-8 max-w-3xl mx-auto backdrop-blur-lg bg-white/60 dark:bg-gray-900/50 rounded-2xl border border-white/20 dark:border-gray-700/30 shadow-md">
            <Heading level={3} align="center" className="mb-4">
              Готовы обсудить ваш проект?
            </Heading>
            <Subheading align="center" className="mb-6">
              Закажите бесплатную консультацию с нашими экспертами, чтобы
              узнать, как чат-боты могут помочь вашему бизнесу.
            </Subheading>
            <button className="px-6 py-3 bg-gradient-to-r from-primary to-primary-light text-white font-medium rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              Обсудить ваш проект
            </button>
          </div>
        </motion.div>
      </Container>
    </motion.section>
  );
}
