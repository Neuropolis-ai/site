import Blog from "@/components/Blog/Blog";
import Contact from "@/components/Contact/Contact";
import FAQ from "@/components/FAQ/FAQ";
import Features from "@/components/Features/Features";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import Services from "@/components/Services/Services";
import Testimonials from "@/components/Testimonials/Testimonials";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Features />
      <Projects />
      <Testimonials />
      <Blog />
      <FAQ />
      <Contact />
      <div className="bg-gray-100 dark:bg-gray-900 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 dark:text-white">
            Попробуйте наше Todo приложение
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Простое и удобное приложение для управления вашими задачами.
            Создавайте, отмечайте и удаляйте задачи в удобном интерфейсе.
          </p>
          <Link
            href="/todo"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
          >
            Открыть Todo приложение
          </Link>
        </div>
      </div>
    </main>
  );
}
