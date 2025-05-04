import { Metadata } from "next";
import ServicesHeading from "@/components/Services/ServicesHeading";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Демо компонентов для услуг | Neuropolis",
  description: "Демонстрация стилизованных компонентов для страницы услуг",
};

export default function ServicesDemo() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow pt-32 md:pt-40 pb-20">
        <section className="relative overflow-hidden py-10 md:py-16">
          <div className="absolute inset-0 -z-10 opacity-50">
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-blue-200/15 to-blue-400/15 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-indigo-200/15 to-indigo-400/15 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4">
            <ServicesHeading
              title="Как ИИ может автоматизировать ваш бизнес"
              subtitle="Наши решения на базе ИИ оптимизируют эффективность, повышают продуктивность и обеспечивают измеримые результаты для вашего бизнеса."
            />

            {/* Здесь будут добавлены другие компоненты */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-12 max-w-3xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">
                О компоненте
              </h3>
              <p className="text-gray-700 mb-4">
                Это демонстрация нового компонента ServicesHeading, который
                использует:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Градиентный текст для заголовков</li>
                <li>Красивую метку "Услуги" с эффектной обводкой</li>
                <li>Анимацию появления с использованием Framer Motion</li>
                <li>Адаптивную типографику с использованием Tailwind CSS</li>
                <li>Современный минималистичный дизайн</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
