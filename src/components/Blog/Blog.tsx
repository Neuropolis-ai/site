"use client";

import { useTheme } from "@/context/ThemeContext";
import { getRecentArticles } from "@/lib/blogApi";
import { Article } from "@/lib/supabase";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import Container from "../ui/Container";
import BlogCard from "../BlogCard";
import { motion } from "framer-motion";

const Blog = () => {
  const { isDark } = useTheme();
  const [blogPosts, setBlogPosts] = useState<Article[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getRecentArticles(3);
      console.log(
        "DEBUG Blog component: получено статей:",
        posts.map((p) => ({
          id: p.id,
          title: p.title,
          is_published: p.is_published,
        }))
      );

      // Дополнительная проверка, что статьи опубликованы
      const visiblePosts = posts.filter((post) => post.is_published !== false);
      console.log(
        "DEBUG Blog component: после фильтрации:",
        visiblePosts.length
      );

      setBlogPosts(visiblePosts);
    };

    fetchPosts();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="blog" className="py-24 relative overflow-hidden">
      {/* Градиентный фон */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white dark:from-black dark:via-gray-900 dark:to-black -z-10"></div>

      {/* Декоративные элементы */}
      <div className="absolute -top-40 left-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-200/10 via-purple-400/5 to-purple-600/5 dark:from-purple-500/5 dark:via-purple-700/5 dark:to-purple-900/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-40 right-0 w-[500px] h-[500px] bg-gradient-to-tr from-blue-200/10 via-blue-400/5 to-blue-600/5 dark:from-blue-500/5 dark:via-blue-700/5 dark:to-blue-900/5 rounded-full blur-3xl -z-10"></div>

      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div
              className="inline-block px-4 py-1 rounded-full text-sm mb-4 font-medium tracking-wide
              bg-gradient-to-r from-[#0167F3]/10 to-[#399AFC]/10 text-[#0167F3] dark:from-[#0167F3]/20 dark:to-[#399AFC]/20 dark:text-[#399AFC]
              border border-[#0167F3]/20 dark:border-[#399AFC]/30"
            >
              Блог
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight leading-tight">
              Последние статьи из нашего блога
            </h2>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Будьте в курсе последних трендов, советов и инноваций в области ИИ
              и автоматизации.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {blogPosts.map((post) => (
              <motion.div key={post.id} variants={itemVariants}>
                <BlogCard post={post} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center mt-12"
          >
            <Link
              href="/blog"
              className="inline-flex items-center justify-center py-3 px-8 rounded-xl 
              bg-blue-600 hover:bg-blue-700 
              text-white font-medium text-base transition-all duration-300 
              shadow-md hover:shadow-lg border border-blue-500"
            >
              Все статьи
              <BsArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Blog;
