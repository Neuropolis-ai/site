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
    position: "CDTO",
    company: "E-commerce Platform",
    stars: 5,
    quote: '"Бесшовная интеграция и первоклассная поддержка!"',
    text: " То, что действительно отличает эту компанию, — это их способность бесшовно интегрировать ИИ в наши существующие системы. Созданные ими кастомные чат-боты обрабатывают 80% запросов в службу поддержки.",
  },
  {
    id: 2,
    name: "Алексей А.",
    position: "Менеджер",
    company: "Manufacturing Corp",
    stars: 5,
    quote: '"Революционные ИИ-решения!"',
    text: "Сотрудничество стало прорывом для нашего бизнеса. Внедренный ими ИИ-движок рекомендаций увеличил наши продажи на 20% всего за три месяца!",
  },
  {
    id: 3,
    name: "Сергей Т.",
    position: "Специалист по автоматизации",
    company: "Retail Chain",
    stars: 5,
    quote: '"Непревзойденная эффективность и инновации!"',
    text: "Инструменты автоматизации на основе ИИ кардинально изменили наши внутренние процессы. Мы сократили ручные операции на 35%, что позволило нашей команде сосредоточиться на более ценной работе.",
  },
  {
    id: 4,
    name: "Ольга Г.",
    position: "Директор по маркетингу",
    company: "Retail Chain",
    stars: 5,
    quote: '"Удивительная аналитика клиентов!"',
    text: "Благодаря инструментам предиктивной аналитики на основе ИИ мы получили глубокое понимание поведения наших клиентов.",
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
      y: -5,
      boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.2)",
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
      className="py-20 md:py-28 px-4 relative overflow-hidden"
    >
      {/* Градиентный фон */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900 -z-10"></div>
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-gradient-to-br from-blue-200/20 to-blue-400/20 dark:from-blue-500/10 dark:to-blue-700/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-200/20 to-indigo-400/20 dark:from-indigo-500/10 dark:to-indigo-700/10 rounded-full blur-3xl -z-10"></div>

      <Container>
        <TestimonialSchema testimonials={testimonialData} />
        <motion.div variants={itemVariants} className="text-center mb-16">
          <div
            className={`inline-block px-4 py-1 rounded-full text-sm mb-4 switch-box ${
              !isDark && "light-switch-box"
            }`}
          >
            Отзывы
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 dark:text-white mb-4">
            Отзывы наших{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0167F3] to-[#399AFC]">
              клиентов
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Истории успеха наших клиентов из разных отраслей, демонстрирующие
            реальную ценность ИИ-решений для бизнеса.
          </p>
        </motion.div>

        <div className="relative">
          {/* Left shadow overlay */}
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-12 md:w-16 z-10 bg-gradient-to-r dark:from-gray-900 from-gray-50 to-transparent pointer-events-none"></div>

          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-8 relative hide-scrollbar"
            style={{ scrollBehavior: "smooth" }}
          >
            <div className="flex space-x-6 sm:space-x-7 md:space-x-8 pl-8 sm:pl-12 md:pl-16 pr-8 sm:pr-12 md:pr-16">
              {testimonialData.map((testimonial) => (
                <motion.div
                  key={testimonial.id}
                  variants={cardVariants}
                  whileHover="hover"
                  className="flex flex-col justify-between min-w-[280px] sm:min-w-[320px] md:min-w-[400px] rounded-2xl overflow-hidden p-6 sm:p-7 md:p-8
                  backdrop-blur-lg bg-white/60 dark:bg-gray-900/50 border border-white/20 dark:border-gray-700/30 shadow-lg transition-all duration-300"
                >
                  <div>
                    <div className="relative mb-6">
                      <div className="absolute -left-2 -top-2 text-blue-500/20 dark:text-blue-400/20">
                        <Quote size={40} strokeWidth={1} />
                      </div>
                      <div className="flex mb-4">
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
                      <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                        {testimonial.quote}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
                        {testimonial.text}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-blue-100/50 dark:border-blue-800/40">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white font-medium mr-3">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h6 className="font-semibold text-gray-900 dark:text-white">
                          {testimonial.name}
                        </h6>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {testimonial.position}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right shadow overlay */}
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-12 md:w-16 z-10 bg-gradient-to-l dark:from-gray-900 from-gray-50 to-transparent pointer-events-none"></div>
        </div>

        <motion.div variants={itemVariants} className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-block py-3 px-8 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg transition-all duration-300 shadow-lg"
          >
            Стать следующей историей успеха
          </a>
        </motion.div>
      </Container>
    </motion.section>
  );
};

export default Testimonials;
