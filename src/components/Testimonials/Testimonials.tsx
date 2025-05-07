"use client";
import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { BsStarFill } from "react-icons/bs";
import { Quote } from "lucide-react";
import "../../style/card-line.css";
import Container from "../ui/Container";

const testimonialData = [
  {
    id: 1,
    name: "Марина Л.",
    position: "Технический директор",
    company: "E-commerce Platform",
    stars: 5,
    quote: '"Безупречная интеграция ИИ!"',
    text: "Команда Neuropolis создала решение, которое бесшовно интегрировалось в наши системы. Теперь наши чат-боты обрабатывают 80% запросов без участия операторов.",
    avatarColor: "from-violet-500 to-fuchsia-500",
  },
  {
    id: 2,
    name: "Алексей А.",
    position: "Руководитель отдела продаж",
    company: "Manufacturing Corp",
    stars: 5,
    quote: '"Революционные результаты!"',
    text: "Внедрённый ИИ-движок рекомендаций увеличил наши продажи на 20% всего за первый квартал использования. Результаты превзошли ожидания.",
    avatarColor: "from-emerald-500 to-teal-500",
  },
  {
    id: 3,
    name: "Сергей Т.",
    position: "Специалист по автоматизации",
    company: "Retail Chain",
    stars: 5,
    quote: '"Оптимизация внутренних процессов"',
    text: "Инструменты автоматизации сократили наши ручные операции на 35%. Теперь команда может сфокусироваться на стратегических задачах вместо рутины.",
    avatarColor: "from-amber-500 to-orange-500",
  },
  {
    id: 4,
    name: "Ольга Г.",
    position: "Директор по маркетингу",
    company: "Retail Chain",
    stars: 5,
    quote: '"Глубокое понимание клиентов"',
    text: "Предиктивная аналитика позволила нам предугадывать потребности клиентов и создавать персонализированные предложения, что заметно увеличило конверсию.",
    avatarColor: "from-blue-500 to-indigo-600",
  },
];

const TestimonialSchema = ({
  testimonials,
}: {
  testimonials: {
    name: string;
    stars: number;
    text: string;
    company: string;
  }[];
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Neuropolis.ai — AI-решения для бизнеса",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: (
        testimonials.reduce((acc, t) => acc + t.stars, 0) / testimonials.length
      ).toFixed(1),
      reviewCount: testimonials.length,
    },
    review: testimonials.map((t) => ({
      "@type": "Review",
      author: t.name,
      reviewRating: {
        "@type": "Rating",
        ratingValue: t.stars,
      },
      reviewBody: t.text,
      publisher: {
        "@type": "Organization",
        name: t.company,
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

const Testimonials = () => {
  const { isDark } = useTheme();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      y: -8,
      scale: 1.02,
      boxShadow:
        "0 20px 40px rgba(0, 0, 0, 0.15), 0 10px 20px rgba(0, 103, 243, 0.1)",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 10;

      // Reset scroll to beginning when reaching the end
      if (isAtEnd) {
        setTimeout(() => {
          if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo({
              left: 0,
              behavior: "smooth",
            });
          }
        }, 1000);
      }
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      return () => scrollContainer.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <motion.section
      id="testimonials"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="py-24 md:py-32 px-4 relative overflow-hidden"
    >
      {/* Градиентный фон */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white dark:from-black dark:via-gray-900 dark:to-black -z-10"></div>

      {/* Модернизированные градиенты фона */}
      <div className="absolute -top-40 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-200/10 via-blue-400/10 to-blue-600/5 dark:from-blue-500/5 dark:via-blue-700/5 dark:to-blue-900/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-200/10 via-indigo-400/10 to-indigo-600/5 dark:from-indigo-500/5 dark:via-indigo-700/5 dark:to-indigo-900/5 rounded-full blur-3xl -z-10"></div>

      {/* Декоративные элементы */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-blue-400/5 dark:bg-blue-600/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-indigo-400/5 dark:bg-indigo-600/5 rounded-full blur-2xl"></div>

      <Container>
        <TestimonialSchema testimonials={testimonialData} />

        {/* Заголовок и подзаголовок */}
        <div className="text-center mb-16">
          <div
            className="inline-block px-4 py-1 rounded-full text-sm mb-4 font-medium tracking-wide
            bg-blue-50 text-blue-600 dark:bg-blue-900/40 dark:text-blue-300
            border border-blue-100 dark:border-blue-800/60"
          >
            Отзывы
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight leading-tight">
            Отзывы наших{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0167F3] to-[#399AFC]">
              клиентов
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Истории успеха наших клиентов из разных отраслей, демонстрирующие
            реальную ценность ИИ-решений для бизнеса.
          </p>
        </div>

        <div className="relative">
          {/* Left shadow overlay - улучшенный градиент */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 md:w-20 z-10 bg-gradient-to-r dark:from-gray-900 from-white to-transparent pointer-events-none"></div>

          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-10 relative hide-scrollbar"
            style={{ scrollBehavior: "smooth" }}
          >
            <div className="flex space-x-6 sm:space-x-8 md:space-x-10 pl-10 sm:pl-14 md:pl-16 pr-10 sm:pr-14 md:pr-16">
              {testimonialData.map((testimonial) => (
                <motion.div
                  key={testimonial.id}
                  variants={cardVariants}
                  whileHover="hover"
                  className="flex flex-col justify-between min-w-[280px] sm:min-w-[320px] md:min-w-[380px] rounded-3xl overflow-hidden p-6 sm:p-7 md:p-8
                  backdrop-blur-sm bg-white/95 dark:bg-gray-900/95 
                  border border-white/30 dark:border-gray-700/40 
                  shadow-lg transition-all duration-300"
                >
                  <div>
                    <div className="relative mb-6">
                      <div className="flex mb-5">
                        {[...Array(5)].map((_, i) => (
                          <BsStarFill
                            key={i}
                            className={`${
                              i < testimonial.stars
                                ? "text-yellow-400"
                                : "text-gray-300"
                            } mr-1 text-base sm:text-lg`}
                          />
                        ))}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight leading-tight">
                        {testimonial.quote.replace(/^"|"$/g, "")}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                        {testimonial.text}
                      </p>
                    </div>
                  </div>

                  <div className="pt-5 border-t border-blue-100/50 dark:border-blue-800/40">
                    <div className="flex items-center">
                      <div
                        className={`w-10 h-10 rounded-full bg-gradient-to-r ${testimonial.avatarColor} flex items-center justify-center text-white font-bold text-base mr-3 shadow-lg`}
                      >
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h6 className="font-bold text-base text-gray-900 dark:text-white">
                          {testimonial.name}
                        </h6>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right shadow overlay - улучшенный градиент */}
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-16 md:w-20 z-10 bg-gradient-to-l dark:from-gray-900 from-white to-transparent pointer-events-none"></div>
        </div>

        <motion.div variants={itemVariants} className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center py-3 px-8 rounded-full 
            bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 
            text-white font-semibold text-base tracking-wide transition-all duration-300 
            shadow-lg shadow-blue-500/20 hover:shadow-blue-600/30 transform hover:-translate-y-1"
          >
            Стать следующей историей успеха
          </a>
        </motion.div>
      </Container>
    </motion.section>
  );
};

export default Testimonials;
