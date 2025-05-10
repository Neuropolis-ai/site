import { getRecentArticles } from "@/lib/blogApi";
import Link from "next/link";
import React from "react";
import BlogCard from "@/components/BlogCard";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
import Features from "@/components/Features/Features";
import Process from "@/components/Process/Process";
import Projects from "@/components/Projects/Projects";
import Testimonials from "@/components/Testimonials/Testimonials";
import Contact from "@/components/Contact/Contact";
import FAQ from "@/components/FAQ/FAQ";
import { BsArrowRight } from "react-icons/bs";
import BusinessProblems from "@/components/Problems/BusinessProblems";

// Отключаем кеширование данных для этой страницы
export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function Home() {
  const recentArticles = await getRecentArticles(3);

  return (
    <main className="min-h-screen">
      <Hero />
      <BusinessProblems />
      <Services />
      <Features />
      <Process />
      <Projects />
      <Testimonials />

      {/* Recent Blog Posts Section */}
      {recentArticles.length > 0 && (
        <section className="py-20 md:py-28 px-4 relative overflow-hidden">
          {/* Градиентный фон */}
          <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900 -z-10"></div>
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-gradient-to-br from-blue-200/20 to-blue-400/20 dark:from-blue-500/10 dark:to-blue-700/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-200/20 to-indigo-400/20 dark:from-indigo-500/10 dark:to-indigo-700/10 rounded-full blur-3xl -z-10"></div>

          <div className="container mx-auto max-w-1280 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-1 rounded-full text-sm mb-4 switch-box light-switch-box dark:bg-gray-800/60 dark:text-gray-300">
                Блог
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 dark:text-white mb-4">
                Последние{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0167F3] to-[#399AFC]">
                  публикации
                </span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
                Узнайте о последних тенденциях и инновациях в области
                искусственного интеллекта и цифровой трансформации.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {recentArticles.map((post, index) => (
                <div
                  key={post.id}
                  className="group transition-all duration-300 hover:-translate-y-1"
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  <BlogCard post={post} />
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/blog"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl 
                bg-gradient-to-r from-[#0167F3] to-[#399AFC] hover:from-[#0157D3] hover:to-[#2988E8]
                text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Все статьи
                <BsArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </section>
      )}

      <FAQ />
      <Contact />
    </main>
  );
}
