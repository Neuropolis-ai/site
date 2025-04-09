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

// Отключаем кеширование данных для этой страницы
export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function Home() {
  const recentArticles = await getRecentArticles(3);

  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Features />
      <Process />
      <Projects />
      <Testimonials />

      {/* Recent Blog Posts Section */}
      {recentArticles.length > 0 && (
        <section className="py-20 bg-white dark:bg-black">
          <div className="container mx-auto max-w-[1280px] px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                Последние публикации
              </h2>
              <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
                Узнайте о последних тенденциях и инновациях в области
                искусственного интеллекта и цифровой трансформации.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {recentArticles.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/blog"
                className="inline-block px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
              >
                Все статьи
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
