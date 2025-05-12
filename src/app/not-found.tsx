"use client";
import { motion } from "framer-motion";
import ButtonLink from "@/components/ui/buttonLink";
import { useTheme } from "@/context/ThemeContext";
import "@/style/hero.css";
import "../style/card-line.css";

export default function NotFound() {
  const { isDark } = useTheme();
  
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="video-container o">
        <div className="video-content">
          <video autoPlay loop muted playsInline className="video-one">
            <source src="/assets/video/hero-bg.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Абстрактные формы для заднего фона */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        <div className={`absolute top-20 left-20 w-64 h-64 rounded-full bg-purple-500/20 blur-3xl`}></div>
        <div className={`absolute bottom-20 right-20 w-80 h-80 rounded-full bg-blue-500/20 blur-3xl`}></div>
        <div className={`absolute top-40 right-40 w-40 h-40 rounded-full bg-pink-500/20 blur-3xl`}></div>
      </div>

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-20 text-center max-w-[800px] mx-auto px-4"
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className={`inline-block px-4 py-1.5 rounded-full backdrop-blur-md
            ${isDark 
              ? 'bg-white/10 text-white border border-white/20' 
              : 'bg-black/10 text-black border border-black/20'
            } text-sm mb-6 font-medium`}
        >
          Страница не найдена
        </motion.div>
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-[120px] font-bold dark:text-white text-black mb-2 relative"
        >
          <span className="relative z-10">404</span>
          <div className={`absolute inset-0 blur-xl opacity-30 
            ${isDark ? 'bg-gradient-to-r from-purple-500 to-blue-500' : 'bg-gradient-to-r from-purple-300 to-blue-300'} 
            rounded-full transform -translate-y-1/4 scale-75 z-0`}>
          </div>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-xl dark:text-gray-300 text-gray-700 mb-10 max-w-[600px] mx-auto"
        >
          Упс! Кажется, вы наткнулись на страницу, которой не существует. 
          Не волнуйтесь, это случается с лучшими из нас.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <ButtonLink href="/" variantBtn="primary" className="min-w-[180px]">
            На главную
          </ButtonLink>
          <ButtonLink href="/blog" variantBtn="outline" className="min-w-[180px]">
            Перейти в блог
          </ButtonLink>
        </motion.div>
      </motion.div>
    </div>
  );
}
