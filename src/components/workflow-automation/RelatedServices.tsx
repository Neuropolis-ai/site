"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { Zap, MessageSquare, GanttChart, ArrowRight } from "lucide-react";

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

const RelatedServices = () => {
  const services = [
    {
      title: "AI Агенты",
      description: "Интеллектуальные ассистенты для решения сложных бизнес-задач с использованием искусственного интеллекта",
      icon: <Zap size={24} className="text-purple-500" />,
      href: "/services/ai-agent",
      color: "from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20",
      border: "border-purple-200 dark:border-purple-800",
      hover: "hover:border-purple-300 dark:hover:border-purple-700"
    },
    {
      title: "AI Чат-боты",
      description: "Автоматизация поддержки клиентов и генерация лидов с помощью интеллектуальных чат-ботов",
      icon: <MessageSquare size={24} className="text-teal-500" />,
      href: "/services/chat-bots",
      color: "from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/20",
      border: "border-teal-200 dark:border-teal-800",
      hover: "hover:border-teal-300 dark:hover:border-teal-700"
    },
    {
      title: "Автоматизация бизнес-процессов",
      description: "Оптимизация рабочих процессов и повышение эффективности вашего бизнеса",
      icon: <GanttChart size={24} className="text-blue-500" />,
      href: "/services/workflow-automation",
      color: "from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20",
      border: "border-blue-200 dark:border-blue-800", 
      hover: "hover:border-blue-300 dark:hover:border-blue-700",
      current: true
    }
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-2xl md:text-3xl font-bold text-center mb-10"
          >
            Другие услуги Neuropolis
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service) => (
              <motion.div 
                key={service.href}
                variants={itemVariants}
                className={`rounded-xl p-6 bg-gradient-to-br ${service.color} border ${service.border} ${service.hover} transition-all duration-300 ${service.current ? 'relative shadow-md' : ''}`}
              >
                {service.current && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-xs px-3 py-1 rounded-full">
                    Текущая услуга
                  </div>
                )}
                <div className="flex items-center mb-4">
                  <div className="mr-3 p-2 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  {service.description}
                </p>
                {!service.current && (
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Подробнее <ArrowRight size={16} className="ml-1" />
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default RelatedServices; 