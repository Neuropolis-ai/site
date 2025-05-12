"use client";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import ButtonLink from "@/components/ui/buttonLink";
import { useTheme } from "@/context/ThemeContext";

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

export default function NotFound() {
  const { isDark } = useTheme();
  
  return (
    <div className={`relative min-h-screen flex flex-col items-center justify-center overflow-hidden ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Контейнер для нейронной сети */}
      <div className="absolute inset-0 overflow-hidden">
        <NeuralNetwork />
      </div>
      
      {/* Затемнение для лучшего контраста с контентом */}
      <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-br from-gray-900/80 to-slate-900/50' : 'bg-gradient-to-br from-gray-50/90 to-white/70'} z-10`}></div>
      
      {/* Основной контент */}
      <div className="relative z-20 w-full max-w-5xl px-4 py-8">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className={`inline-block px-4 py-1.5 rounded-full 
              ${isDark 
                ? 'bg-gradient-to-r from-blue-900/30 to-indigo-900/30 text-blue-100 border border-blue-800/30' 
                : 'bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 border border-blue-200/80'
              } text-sm mb-6 font-medium`}
          >
            Страница не найдена
          </motion.div>
          
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-[130px] leading-none font-bold text-transparent bg-clip-text bg-gradient-to-b from-blue-500 to-blue-700 mb-6 relative"
          >
            404
            <motion.div 
              className="absolute inset-0 blur-2xl opacity-30 
              bg-gradient-to-br from-blue-400 to-indigo-500
              rounded-full transform scale-75 z-0"
              animate={{ 
                scale: [0.7, 0.85, 0.7],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </motion.div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mb-8"
          >
            <p className="text-xl dark:text-gray-300 text-gray-700 mb-3">
              Упс! Запрашиваемая страница не найдена.
            </p>
            <p className="text-md dark:text-gray-400 text-gray-500 max-w-[600px] mx-auto">
              Возможно, страница была перемещена или удалена.
              Вы можете вернуться на главную страницу и продолжить работу.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <ButtonLink 
              href="/" 
              className="px-8 py-3 rounded-[12px] text-white font-medium shadow-lg shadow-blue-500/20 
                bg-gradient-to-b from-[#3b82f6] to-[#2563eb] hover:from-[#60a5fa] hover:to-[#3b82f6] 
                transition-all duration-300"
              variantBtn="link"
            >
              Вернуться на главную
            </ButtonLink>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
