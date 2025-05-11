"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";
import {
  Clock,
  Users,
  Database,
  DollarSign,
  BarChart2,
  MessageSquare,
  Zap,
  CheckCircle,
  ArrowRight,
  Globe,
  BrainCircuit,
  Sparkles,
  Shield,
  Activity,
  Book,
} from "lucide-react";
import { Heading } from "@/components/ui/heading";
import Subheading from "@/components/ui/subheading";
import Badge from "@/components/ui/Badge";
import Link from "next/link";

export default function ChatBotsSolution() {
  const { theme } = useTheme();

  // Анимации
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

  const benefitCardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      y: -5,
      boxShadow: "0 10px 30px rgba(59, 130, 246, 0.15)",
      transition: { duration: 0.3 },
    },
  };

  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Данные о преимуществах ИИ-чат-ботов
  const botBenefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Круглосуточная работа",
      description:
        "Автоматизация с чат-ботами обеспечивает мгновенную поддержку клиентам 24/7 без выходных и праздников.",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Одновременная обработка",
      description:
        "Одновременное обслуживание тысяч клиентов без снижения качества и скорости ответов.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Персонализация",
      description:
        "Индивидуальный подход к каждому клиенту на основе истории взаимодействия и предпочтений.",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Интеграция с CRM",
      description:
        "Бесшовная интеграция с CRM-системами и другими бизнес-инструментами для полной автоматизации.",
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Снижение затрат",
      description:
        "Экономия до 70% расходов на поддержку клиентов по сравнению с традиционными методами обслуживания.",
    },
    {
      icon: <BarChart2 className="w-6 h-6" />,
      title: "Аналитика и отчеты",
      description:
        "Подробная аналитика всех взаимодействий для улучшения бизнес-процессов и качества обслуживания.",
    },
  ];

  // Возможности чат-ботов для разных платформ
  const platformCapabilities = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      name: "Telegram",
      capabilities: [
        "Обработка текстовых сообщений и медиафайлов",
        "Интерактивные кнопки и встроенные клавиатуры",
        "Интеграция с платежными системами",
        "Создание полноценных мини-приложений внутри мессенджера",
      ],
    },
    {
      icon: <Globe className="w-6 h-6" />,
      name: "WhatsApp",
      capabilities: [
        "Коммуникация через официальное API WhatsApp Business",
        "Отправка текстовых сообщений, изображений и файлов",
        "Уведомления и рассылки с соблюдением политик платформы",
        "Многоуровневые сценарии диалогов с клиентами",
      ],
    },
    {
      icon: <Globe className="w-6 h-6" />,
      name: "Веб-сайт",
      capabilities: [
        "Интерактивные виджеты для веб-сайта в соответствии с дизайном",
        "Многоязычная поддержка для международных сайтов",
        "Омниканальность с сохранением истории из других каналов",
        "Проактивное взаимодействие с посетителями сайта",
      ],
    },
  ];

  // Сравнение с традиционными методами поддержки
  const comparisonTable = [
    {
      parameter: "Скорость ответа",
      chatbots: "Мгновенный ответ 24/7",
      traditional: "От нескольких минут до нескольких часов/дней",
    },
    {
      parameter: "Обработка запросов",
      chatbots: "Тысячи одновременно",
      traditional: "Ограничено количеством операторов",
    },
    {
      parameter: "Стоимость обслуживания",
      chatbots: "от $0.1 до $0.5 за запрос",
      traditional: "от $5 до $25 за запрос",
    },
    {
      parameter: "Масштабируемость",
      chatbots: "Неограниченная",
      traditional: "Требует найма и обучения новых сотрудников",
    },
    {
      parameter: "Точность информации",
      chatbots: "100% соответствие заданным стандартам",
      traditional: "Зависит от знаний и опыта оператора",
    },
  ];

  // Типы чат-ботов
  const chatbotTypes = [
    {
      icon: <BrainCircuit className="w-6 h-6" />,
      name: "Чат-боты на базе GPT-4",
      features: [
        "Понимание естественного языка на уровне человека",
        "Контекстуальное общение с памятью диалога",
        "Персонализированные рекомендации на основе истории",
        "Решение сложных запросов без переключения на оператора",
      ],
    },
    {
      icon: <Book className="w-6 h-6" />,
      name: "Боты для обучения",
      features: [
        "Интерактивные обучающие материалы с адаптацией под пользователя",
        "Система проверки знаний и обратной связи",
        "Геймифицированные элементы для повышения вовлечённости",
        "Аналитика прогресса и рекомендации по обучению",
      ],
    },
    {
      icon: <Shield className="w-6 h-6" />,
      name: "Боты для безопасности",
      features: [
        "Многофакторная аутентификация через мессенджеры",
        "Мониторинг подозрительной активности",
        "Автоматические предупреждения о потенциальных угрозах",
        "Шифрование передаваемых данных и конфиденциальность",
      ],
    },
  ];

  return (
    <section
      id="chatbots-solution"
      className="py-16 md:py-24 relative overflow-hidden"
    >
      {/* Градиентный фон */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white -z-10"></div>

      {/* Сетка-фон */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: "url('/grid-pattern.svg')",
            backgroundSize: "24px 24px",
            backgroundRepeat: "repeat",
          }}
        ></div>
      </div>

      {/* Декоративные элементы */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br from-blue-200/30 to-blue-400/30 rounded-full blur-3xl -z-5"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-gradient-to-tr from-sky-200/30 to-sky-400/30 rounded-full blur-3xl -z-5"></div>

      {/* Анимированные элементы */}
      <motion.div
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        className="absolute top-[5%] right-[15%] w-12 h-12 bg-blue-400/20 rounded-full backdrop-blur-md z-0"
      ></motion.div>

      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center justify-center border border-blue-300 gap-2 px-4 py-1 rounded-full text-sm mb-4 bg-blue-500/10 text-blue-600"
          >
            Решение
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4 tracking-tight"
          >
            Интеллектуальные чат-боты{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-sky-400">
              нового поколения
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Мы создаем чат-боты на базе передовых технологий искусственного интеллекта,
            которые автоматизируют коммуникацию с клиентами и улучшают пользовательский опыт.
          </motion.p>
        </motion.div>

        {/* Основные преимущества */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
        >
          {botBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={benefitCardVariants}
              whileHover="hover"
              className={`p-6 rounded-xl transition-all ${
                "bg-white hover:shadow-xl border border-gray-200 hover:border-blue-200"
              }`}
            >
              <div
                className={`w-14 h-14 rounded-xl mb-4 flex items-center justify-center text-xl ${
                  "bg-blue-50"
                }`}
              >
                <span className="text-blue-600">
                  {benefit.icon}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Улучшенный блок о технологиях */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="relative mb-20 p-10 rounded-3xl overflow-hidden"
        >
          {/* Улучшенный фон с более выраженным глассморфизмом */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-sky-400/10 backdrop-blur-xl border border-blue-300/30 rounded-3xl shadow-xl"></div>
          
          {/* Модернизированные декоративные эффекты */}
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-sky-400/20 rounded-full blur-3xl opacity-60"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
            {/* Обновленный контейнер для иконки с 3D-эффектом */}
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl flex items-center justify-center bg-gradient-to-br from-blue-500 to-sky-400 shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500 group relative">
              {/* Блик для 3D-эффекта */}
              <div className="absolute inset-0 bg-white opacity-20 rounded-2xl transform translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
              <div className="w-12 h-12 md:w-14 md:h-14 text-white relative z-10">
                <BrainCircuit className="w-full h-full" />
              </div>
              
              {/* Декоративный элемент */}
              <div className="absolute -right-3 -bottom-3 w-8 h-8 bg-yellow-400/70 rounded-full blur-sm"></div>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">
                Чат-боты будущего <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-sky-400">на базе нейросетей</span>
              </h3>
              
              <Subheading className="mb-8 leading-relaxed">
                Мы используем передовые технологии искусственного интеллекта и
                нейронных сетей, чтобы создавать чат-боты, которые понимают
                естественный язык, распознают контекст и обучаются в процессе
                работы, становясь умнее с каждым взаимодействием.
              </Subheading>
              
              {/* Обновленные теги */}
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-500/15 text-blue-600 border border-blue-300/20 shadow-sm hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-1">
                  <Sparkles className="w-4 h-4 mr-2" />
                  GPT-4 Turbo
                </span>
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-500/20 text-blue-600 border border-blue-300/20 shadow-sm hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-1">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Gemini Pro
                </span>
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-500/25 text-blue-600 border border-blue-300/20 shadow-sm hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-1">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Claude 3
                </span>
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-500/30 text-blue-600 border border-blue-300/20 shadow-sm hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-1">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Собственные модели
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Возможности для различных платформ */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mb-20"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-semibold text-gray-900 mb-8 text-center"
          >
            Возможности интеграции с различными платформами
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {platformCapabilities.map((platform, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.3 },
                  boxShadow: "0 10px 30px rgba(59, 130, 246, 0.15)",
                }}
                className={`p-6 rounded-xl transition-all ${
                  "bg-white border border-gray-200 hover:border-blue-200"
                }`}
              >
                <div className="flex items-start gap-3 mb-4">
                  <div
                    className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${
                      "bg-blue-50"
                    }`}
                  >
                    <span className="text-blue-600">
                      {platform.icon}
                    </span>
                  </div>
                  <h4 className="text-xl font-semibold text-blue-600">
                    {platform.name}
                  </h4>
                </div>
                <ul className="space-y-2 ml-2">
                  {platform.capabilities.map((capability, i) => (
                    <li key={i} className="flex items-start">
                      <div className="mr-2 mt-1.5 w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-sky-400 flex-shrink-0"></div>
                      <span className="text-gray-600">
                        {capability}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Типы чат-ботов */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mb-20"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-semibold text-gray-900 mb-8 text-center"
          >
            Специализированные решения для разных задач
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {chatbotTypes.map((type, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.3 },
                  boxShadow: "0 10px 30px rgba(59, 130, 246, 0.15)",
                }}
                className={`p-6 rounded-xl transition-all ${
                  "bg-white border border-gray-200 hover:border-blue-200"
                }`}
              >
                <div className="flex items-start gap-3 mb-4">
                  <div
                    className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${
                      "bg-blue-50"
                    }`}
                  >
                    <span className="text-blue-600">
                      {type.icon}
                    </span>
                  </div>
                  <h4 className="text-xl font-semibold text-blue-600">
                    {type.name}
                  </h4>
                </div>
                <ul className="space-y-2 ml-2">
                  {type.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div className="mr-2 mt-1.5 w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-sky-400 flex-shrink-0"></div>
                      <span className="text-gray-600">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Сравнение с ручными процессами */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-semibold text-gray-900 mb-8 text-center"
          >
            Сравнение с традиционными методами поддержки
          </motion.h3>

          <motion.div
            variants={itemVariants}
            className="overflow-x-auto rounded-xl border border-gray-200 shadow-lg"
          >
            <table
              className="w-full border-collapse"
            >
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-4 text-left border-b">
                    Параметр
                  </th>
                  <th className="p-4 text-left border-b bg-blue-50 text-blue-600">
                    ИИ-чат-боты
                  </th>
                  <th className="p-4 text-left border-b">
                    Традиционная поддержка
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonTable.map((row, index) => (
                  <tr
                    key={index}
                    className="hover:bg-blue-50/30 transition-colors"
                  >
                    <td className="p-4 border-b">
                      {row.parameter}
                    </td>
                    <td className="p-4 border-b bg-blue-50/50">
                      <span className="text-green-500 flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        {row.chatbots}
                      </span>
                    </td>
                    <td className="p-4 border-b">
                      <span className="text-red-500 flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        {row.traditional}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
