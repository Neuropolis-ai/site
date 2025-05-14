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
    <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-black px-4 text-center">
      <div className="max-w-md space-y-8">
        <h1 className="text-6xl font-bold text-gray-900 dark:text-white">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
          Страница не найдена
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Запрошенная страница не существует или была перемещена. Возможно, вы перешли по устаревшей ссылке или допустили опечатку в URL.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link
            href="/"
            className="px-8 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Вернуться на главную
          </Link>
          <Link
            href="/blog"
            className="px-8 py-3 text-blue-600 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-400 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Перейти в блог
          </Link>
        </div>
      </div>
    </div>
  );
}
