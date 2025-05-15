"use client";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import ButtonLink from "@/components/ui/buttonLink";
import { useTheme } from "@/context/ThemeContext";
import Link from "next/link";
import { Metadata } from "next";

// Основные цвета сайта
const COLORS = {
  primary: "#153aa1", // Основной синий
  secondary: "#00185e", // Темно-синий
  accent: "#2563eb", // Светло-синий акцент
  lightBlue: "#3b82f6", // Светло-синий
  text: "#f8fafc" // Светлый текст
};

// Компонент нейронной сети
const NeuralNetwork = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { isDark } = useTheme();
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Установка размеров canvas
    const updateCanvasSize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
    };
    
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);
    
    // Параметры для визуализации
    const nodes: {x: number; y: number; vx: number; vy: number; radius: number}[] = [];
    const NUM_NODES = 40;
    const RADIUS = 3;
    const MAX_CONNECTIONS = 5;
    const CONNECTION_DISTANCE = 150;
    
    // Создание узлов
    for (let i = 0; i < NUM_NODES; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * RADIUS + 1,
      });
    }
    
    // Основная функция анимации
    const animate = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Рендеринг соединений между узлами
      ctx.lineWidth = 0.5;
      for (let i = 0; i < nodes.length; i++) {
        const nodeA = nodes[i];
        let connections = 0;
        
        for (let j = 0; j < nodes.length; j++) {
          if (i === j) continue;
          
          const nodeB = nodes[j];
          const dx = nodeB.x - nodeA.x;
          const dy = nodeB.y - nodeA.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < CONNECTION_DISTANCE && connections < MAX_CONNECTIONS) {
            connections++;
            const opacity = 1 - (distance / CONNECTION_DISTANCE);
            
            // Градиент для линий (светло-синий)
            const gradient = ctx.createLinearGradient(nodeA.x, nodeA.y, nodeB.x, nodeB.y);
            gradient.addColorStop(0, isDark ? 'rgba(59, 130, 246, 0.4)' : 'rgba(37, 99, 235, 0.3)');
            gradient.addColorStop(1, isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.1)');
            
            ctx.strokeStyle = gradient;
            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            ctx.stroke();
            
            // Анимированная "передача" данных между узлами
            const pulseSize = (Math.sin(Date.now() * 0.003 + i * 0.5) + 1) * 3;
            ctx.fillStyle = isDark ? 'rgba(59, 130, 246, 0.8)' : 'rgba(37, 99, 235, 0.6)';
            ctx.beginPath();
            ctx.arc(nodeA.x + dx * 0.3, nodeA.y + dy * 0.3, pulseSize, 0, Math.PI * 2);
            ctx.fill();
          }
        }
        
        // Рендеринг узлов
        const glowSize = (Math.sin(Date.now() * 0.002 + i) + 1) * 5 + 5;
        
        // Свечение под узлом
        ctx.beginPath();
        ctx.arc(nodeA.x, nodeA.y, glowSize, 0, Math.PI * 2);
        const glow = ctx.createRadialGradient(nodeA.x, nodeA.y, 0, nodeA.x, nodeA.y, glowSize);
        glow.addColorStop(0, isDark ? 'rgba(59, 130, 246, 0.5)' : 'rgba(37, 99, 235, 0.3)');
        glow.addColorStop(1, 'rgba(59, 130, 246, 0)');
        ctx.fillStyle = glow;
        ctx.fill();
        
        // Узел
        ctx.beginPath();
        ctx.arc(nodeA.x, nodeA.y, nodeA.radius, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? COLORS.lightBlue : COLORS.primary;
        ctx.fill();
        
        // Перемещение узлов
        nodeA.x += nodeA.vx;
        nodeA.y += nodeA.vy;
        
        // Отскок от границ
        if (nodeA.x < 0 || nodeA.x > canvas.width) nodeA.vx *= -1;
        if (nodeA.y < 0 || nodeA.y > canvas.height) nodeA.vy *= -1;
      }
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, [isDark]);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-0" 
    />
  );
};

export const metadata: Metadata = {
  title: "Страница не найдена | Neuropolis.ai",
  description: "Запрошенная страница не существует или была перемещена.",
  robots: "noindex, follow",
};

export default function NotFound() {
  const { isDark } = useTheme();
  
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden">
      {/* Фон с нейронной сетью */}
      <div className="absolute inset-0 w-full h-full bg-white dark:bg-gray-950">
        <NeuralNetwork />
      </div>
      
      {/* Графическое наполнение и контент */}
      <div className="container relative z-10 px-4 py-8 mx-auto">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Плавающие частицы/символы */}
          <div className="relative w-full h-64">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute ${isDark ? 'text-blue-400' : 'text-blue-500'} opacity-40 font-mono text-xl`}
                initial={{ 
                  x: Math.random() * 1000 - 500, 
                  y: Math.random() * 200 - 100,
                  opacity: 0 
                }}
                animate={{ 
                  x: Math.random() * 1000 - 500, 
                  y: Math.random() * 200 - 100,
                  opacity: [0, 0.8, 0],
                  scale: [0.8, 1.2, 0.8]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 10 + Math.random() * 15,
                  delay: i * 0.5 
                }}
              >
                {['01', '10', '404', '{!}', '0x00', '://', '[]', '</>'][i]}
              </motion.div>
            ))}
          </div>
          
          {/* Верхний бейдж */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className={`inline-block px-4 py-1.5 rounded-full 
              ${isDark 
                ? 'bg-blue-700/30 text-blue-100 border border-blue-700/30' 
                : 'bg-blue-100 text-blue-700 border border-blue-200'
              } text-sm mb-6 font-medium`}
          >
            Страница не найдена
          </motion.div>
          
          {/* Цифра 404 */}
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-[130px] leading-none font-bold text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-600 mb-6 relative"
          >
            404
            <motion.div 
              className="absolute inset-0 blur-2xl opacity-30 
              bg-gradient-to-br from-blue-400 to-blue-600
              rounded-full transform scale-75 z-0"
              animate={{ 
                scale: [0.7, 0.85, 0.7],
                opacity: [0.2, 0.3, 0.2]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 5,
                ease: "easeInOut"
              }}
            />
          </motion.h1>
          
          {/* Описание ошибки */}
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-xl mb-10"
          >
            Запрошенная страница не существует или была перемещена. 
            Возможно, вы перешли по устаревшей ссылке или допустили опечатку в адресе.
          </motion.p>
          
          {/* Кнопки */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <ButtonLink 
              href="/" 
              className="px-8 py-3 rounded-[12px] text-white font-medium shadow-md 
                bg-blue-500 hover:bg-blue-600 
                transition-all duration-300"
              variantBtn="link"
            >
              На главную
            </ButtonLink>
            <ButtonLink 
              href="/blog" 
              className="px-8 py-3 rounded-[12px] border border-gray-200 dark:border-gray-700
                bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200
                hover:bg-gray-50 dark:hover:bg-gray-800 font-medium transition-all duration-300"
              variantBtn="link"
            >
              Перейти в блог
            </ButtonLink>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
