"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { Heading } from "@/components/ui/heading";
import Subheading from "@/components/ui/subheading";
import Badge from "@/components/ui/Badge";
import BaseFAQ from "../FAQ/BaseFAQ";

export default function ChatBotsFAQ() {
  // Анимационные вариации
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // FAQ элементы
  const faqItems = [
    {
      question: "Что такое ИИ-чат-бот и как он работает?",
      answer:
        "ИИ-чат-бот — это программа, использующая искусственный интеллект для автоматического общения с пользователями в текстовом формате. Он анализирует запросы, понимает контекст разговора и генерирует релевантные ответы, максимально приближенные к человеческой речи.",
    },
    {
      question: "Какие задачи может решать чат-бот для бизнеса?",
      answer:
        "Чат-боты могут автоматизировать множество задач: отвечать на стандартные вопросы клиентов, собирать данные, квалифицировать лиды, принимать заказы, проводить опросы, отправлять уведомления, консультировать по продуктам и предоставлять техническую поддержку.",
    },
    {
      question: "На каких платформах можно запустить чат-бота?",
      answer:
        "Наши чат-боты работают на всех популярных платформах: Telegram, WhatsApp, ВКонтакте, Facebook Messenger, веб-сайты, мобильные приложения. Мы также обеспечиваем омниканальность, когда чат-бот поддерживает единый контекст общения с клиентом независимо от канала.",
    },
    {
      question: "Сколько стоит разработка и внедрение чат-бота?",
      answer:
        "Стоимость зависит от сложности задач, требуемой функциональности и необходимых интеграций. Базовые решения начинаются от 80 000 ₽, продвинутые чат-боты с интеграцией в CRM и другие системы — от 150 000 ₽. Мы составляем индивидуальное предложение после анализа ваших потребностей.",
    },
    {
      question: "Сколько времени занимает разработка чат-бота?",
      answer:
        "Сроки внедрения варьируются от 2-3 недель для стандартных решений до 2-3 месяцев для комплексных проектов с множественными интеграциями и индивидуальным обучением нейросети. Точные сроки определяются после согласования технического задания.",
    },
  ];

  return (
    <section 
      id="chatbots-faq"
      className="py-20 md:py-28 relative overflow-hidden"
    >
      {/* Фоновые элементы */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 -z-10"></div>
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-gradient-to-br from-blue-200/20 to-blue-400/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-200/20 to-indigo-400/20 rounded-full blur-3xl -z-10"></div>

      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-12"
        >
          <motion.div variants={itemVariants}>
            <Badge>Часто задаваемые вопросы</Badge>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Heading level={2} align="center" className="mb-4">
              Ответы на{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-light">
                популярные вопросы
              </span>
            </Heading>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Subheading align="center" className="max-w-3xl mx-auto">
              Мы собрали ответы на самые распространенные вопросы о наших
              ИИ-решениях и услугах.
            </Subheading>
          </motion.div>
        </motion.div>

        <BaseFAQ
          faqItems={faqItems}
          sectionId="chatbots-faq-list"
          contactLink="/contact"
          contactText="Получить консультацию"
        />
      </Container>
    </section>
  );
}
