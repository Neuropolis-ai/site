"use client";

import { useTheme } from "@/context/ThemeContext";
import Container from "@/components/ui/Container";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

// Компонент для секций кейса
function CaseSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const { isDark } = useTheme();
  return (
    <section className="mb-10">
      <h2
        className={`text-2xl font-semibold mb-4 ${
          isDark ? "text-white" : "text-black"
        }`}
      >
        {title}
      </h2>
      <div
        className={`text-base ${
          isDark ? "text-[#919191]" : "text-gray-600"
        } leading-relaxed space-y-3`}
      >
        {children}
      </div>
    </section>
  );
}

export default function CasePage() {
  const { isDark } = useTheme();

  return (
    <section className="py-20 bg-white dark:bg-black">
      <Container>
        <header className="text-center mb-16">
          <div
            className={`inline-block px-4 py-1 rounded-full text-sm mb-4 ${
              isDark ? "bg-[#0d1635] text-blue-400" : "bg-blue-50 text-blue-600"
            }`}
          >
            Кейс
          </div>
          <h1
            className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-4 ${
              isDark ? "text-white" : "text-black"
            }`}
          >
            AI-агент в отделе продаж
          </h1>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              isDark ? "text-[#919191]" : "text-gray-600"
            }`}
          >
            Как мы сократили время отклика с 2 часов до 15 секунд и повысили
            конверсию на 27%.
          </p>
        </header>

        <div
          className={`p-6 md:p-8 mb-16 rounded-xl overflow-hidden ${
            isDark
              ? "bg-[#050A1B] process-card"
              : "bg-gray-50 border border-gray-200"
          }`}
        >
          <article className="space-y-10 md:max-w-4xl mx-auto">
            <CaseSection title="📌 Задача">
              <p>
                У клиента — B2B SaaS в сфере финтех — ежедневно поступало более
                40 лидов. Менеджеры не справлялись с потоком: заявки терялись,
                конверсия падала, отклик занимал часы.
              </p>
            </CaseSection>

            <CaseSection title="🤖 Решение">
              <ul className="list-disc list-inside space-y-2">
                <li>GPT-агент в Telegram, доступен 24/7</li>
                <li>Сбор контактных данных и квалификация лида</li>
                <li>Резюме диалога и отправка в CRM</li>
                <li>Интеграция с Supabase и n8n</li>
              </ul>
            </CaseSection>

            <CaseSection title="📊 Результаты">
              <ul className="list-none space-y-4">
                <li className="flex items-center">
                  <span className="text-green-500 mr-3 text-lg">✅</span>
                  <span className={isDark ? "text-white" : "text-black"}>
                    Время отклика: <b>2ч → 15 сек</b>
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3 text-lg">✅</span>
                  <span className={isDark ? "text-white" : "text-black"}>
                    +27% к конверсии в звонок
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3 text-lg">✅</span>
                  <span className={isDark ? "text-white" : "text-black"}>
                    1000+ диалогов автоматизировано
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3 text-lg">✅</span>
                  <span className={isDark ? "text-white" : "text-black"}>
                    Минус 4 человека-часа в день
                  </span>
                </li>
              </ul>
            </CaseSection>

            <CaseSection title="🧩 Использованные технологии">
              <div className="flex flex-wrap gap-2">
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    isDark
                      ? "bg-[#0d1635] text-blue-400"
                      : "bg-blue-50 text-blue-600"
                  }`}
                >
                  GPT-4
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    isDark
                      ? "bg-[#0d1635] text-blue-400"
                      : "bg-blue-50 text-blue-600"
                  }`}
                >
                  Telegram Bot API
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    isDark
                      ? "bg-[#0d1635] text-blue-400"
                      : "bg-blue-50 text-blue-600"
                  }`}
                >
                  Supabase
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    isDark
                      ? "bg-[#0d1635] text-blue-400"
                      : "bg-blue-50 text-blue-600"
                  }`}
                >
                  n8n
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    isDark
                      ? "bg-[#0d1635] text-blue-400"
                      : "bg-blue-50 text-blue-600"
                  }`}
                >
                  RAG
                </span>
              </div>
            </CaseSection>

            <CaseSection title="💬 Комментарий клиента">
              <blockquote
                className={`italic p-4 rounded-xl ${
                  isDark
                    ? "bg-[#0a0f28] border-l-4 border-blue-500 text-gray-300"
                    : "bg-gray-50 border-l-4 border-blue-500 text-gray-600"
                }`}
              >
                "Это как будто у нас появился ещё один менеджер, только без
                зарплаты. Система работает идеально."
              </blockquote>
            </CaseSection>

            <div className="mt-12 flex justify-center md:justify-start">
              <Link
                href="/contact"
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-transform hover:-translate-y-1 ${
                  isDark
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-blue-500 hover:bg-blue-600 text-white"
                }`}
              >
                Хочу такого же AI-агента
                <BsArrowRight className="ml-2" />
              </Link>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}
