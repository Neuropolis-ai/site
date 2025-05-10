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
import FAQ from "@/components/FAQ/FAQ";
import { BsArrowRight } from "react-icons/bs";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Badge from "@/components/ui/Badge";
import WorkflowAutomationContactForm from "@/components/workflow-automation/WorkflowAutomationContactForm";
import { FiUsers, FiLayers, FiTrendingUp } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import Subheading from "@/components/ui/subheading";

// Отключаем кеширование данных для этой страницы
export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function Home() {
  const recentArticles = await getRecentArticles(3);

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
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
                <div className="inline-flex items-center px-4 py-1.5 rounded-full text-sm mb-4 bg-[#0167F3]/10 text-[#0167F3]">
                  Блог
                </div>
                <Heading
                  level={2}
                  align="center"
                  className="text-gray-900 dark:text-white mb-4"
                >
                  Последние{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-light">
                    публикации
                  </span>
                </Heading>
                <Subheading align="center" className="max-w-2xl mx-auto">
                  Узнайте о последних тенденциях и инновациях в области
                  искусственного интеллекта и цифровой трансформации.
                </Subheading>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {recentArticles.map((post, index) => (
                  <div
                    key={post.id}
                    className="group transition-all duration-300 hover:-translate-y-1"
                  >
                    <BlogCard post={post} />
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <a
                  href="/blog"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg rounded-lg bg-gradient-to-r from-primary-light to-primary text-white hover:from-primary hover:to-primary-dark shadow"
                >
                  Все статьи <BsArrowRight className="ml-2" />
                </a>
              </div>
            </div>
          </section>
        )}

        <FAQ />

        <WorkflowAutomationContactForm
          title="Начните цифровую трансформацию сегодня"
          subtitle="Свяжитесь с нами, чтобы узнать, как наши решения по автоматизации могут улучшить ваш бизнес"
          showCompanyField={true}
          showPhoneField={true}
          formId="workflow-contact-form-2"
          className="bg-gradient-to-b from-blue-100/90 to-blue-50/80 dark:from-blue-900/20 dark:to-blue-800/10"
        />
      </main>
      <Footer />
    </>
  );
}
