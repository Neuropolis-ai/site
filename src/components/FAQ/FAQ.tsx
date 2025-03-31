"use client";
import { useTheme } from "@/context/ThemeContext";
import { useState } from "react";
import { BsPlus } from "react-icons/bs";
import Container from "../ui/Container";

const faqData = [
  {
    id: 1,
    question: "Какие возможности вы предоставляете?",
    answer:
      "Мы специализируемся на решениях на основе ИИ, включая автоматизацию, предиктивную аналитику, генерацию контентаа с ИИ, чат-ботов и кастомные модели машинного обучения для различных отраслей. Наша цель — помочь бизнесу улучшить процессы и принимать решения на основе данных.",
  },
  {
    id: 2,
    question: "Как работает ежемесячная подписка?",
    answer:
      "Наша модель подписки предоставляет постоянную поддержку и оптимизацию ИИ, а также оплату используемых API.  Каждый тариф включает регулярные обновления, мониторинг производительности и приоритетную поддержку. Вы можете выбрать один из планов — в зависимости от потребностей вашего бизнеса.",
  },
  {
    id: 3,
    question: "Сколько времени занимает внедрение ИИ-решения?",
    answer:
      "Время внедрения зависит от сложности проекта. Базовые решения могут занять несколько недель, в то время как более сложные интеграции ИИ могут потребовать несколько месяцев. Мы всегда предоставляем четкий график работ на этапе анализа.",
  },
  {
    id: 4,
    question: "Можете ли вы интегрировать ИИ в наши существующие системы?",
    answer:
      "Безусловно! М специализируемся на бесшовной интеграции ИИ. Будь то ваша CRM, маркетинговые платформы или инструменты автоматизации рабочих процессов, мы гарантируем, что наши решения будут работать в гармонии с вашей существующей инфраструктурой.",
  },
  {
    id: 5,
    question: "Какие отрасли могут извлечь пользу из ваших ИИ-решений?",
    answer:
      "Мы работаем с различными отраслями, включая здравоохранение, e-commerce, финансы, маркетинг, медиа, производство и другие. Наши ИИ-решения адаптируются под уникальные потребности каждой индустрии.",
  },
];

const FAQ = () => {
  const { isDark } = useTheme();
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleFAQ = (index: number) => {
    if (openItems.includes(index)) {
      // If already open, close it
      setOpenItems(openItems.filter((item) => item !== index));
    } else {
      // If closed, open it
      setOpenItems([...openItems, index]);
    }
  };

  return (
    <section className="py-10 sm:py-15 md:py-20 max-[425px]:py-10 max-[425px]:px-[10px] dark:bg-black bg-white">
      <Container>
        <div className="flex flex-col md:flex-row gap-6 md:gap-10">
          <div className="md:w-1/3">
            <div className="max-[425px]:flex max-[425px]:justify-center">
              <div
                className={`inline-block px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm mb-3 sm:mb-4 switch-box ${
                  !isDark && "light-switch-box"
                }`}
              >
                FAQs
              </div>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold dark:text-white text-black mb-3 sm:mb-4 max-[425px]:text-center">
              Часто задаваемые вопросы
            </h2>
          </div>

          <div className="md:w-2/3">
            <div className="space-y-3 sm:space-y-4">
              {faqData.map((faq, index) => (
                <div
                  key={faq.id}
                  className={`border rounded-lg sm:rounded-xl overflow-hidden ${
                    isDark
                      ? "border-[#01195e] bg-[#050A1B]"
                      : "border-gray-200 bg-gray-50"
                  }`}
                >
                  <button
                    className={`w-full flex items-center justify-between p-3 sm:p-[15px] text-left text-sm sm:text-base font-medium ${
                      isDark ? "text-white" : "text-gray-800"
                    }`}
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={openItems.includes(index)}
                  >
                    {faq.question}
                    <BsPlus
                      className={`min-w-[24px] min-h-[24px] text-xl sm:text-2xl transition-transform duration-300 ${
                        openItems.includes(index) ? "rotate-45" : ""
                      } ${isDark ? "text-white" : "text-gray-700"}`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openItems.includes(index) ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <span className="accordion-card-line"></span>

                    <div
                      className={`px-3 sm:px-[15px] pt-3 sm:pt-[15px] pb-4 sm:pb-6 text-sm sm:text-base ${
                        isDark ? "text-[#919191]" : "text-gray-600"
                      }`}
                    >
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FAQ;
