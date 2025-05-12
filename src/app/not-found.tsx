"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ButtonLink from "@/components/ui/buttonLink";
import { useTheme } from "@/context/ThemeContext";

const CircuitNode = ({ x, y, size, delay }: { x: number; y: number; size: number; delay: number }) => {
  return (
    <motion.div
      className="absolute rounded-full bg-blue-500"
      style={{ left: `${x}%`, top: `${y}%`, width: size, height: size }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: [0, 0.7, 0], scale: [0, 1, 0] }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        repeatType: "loop",
      }}
    />
  );
};

const CircuitLine = ({ 
  start, end, delay, direction = 'horizontal' 
}: { 
  start: { x: number; y: number }; 
  end: { x: number; y: number }; 
  delay: number;
  direction?: 'horizontal' | 'vertical' | 'diagonal';
}) => {
  const lineStyle = direction === 'horizontal' 
    ? { 
        left: `${Math.min(start.x, end.x)}%`, 
        top: `${start.y}%`,
        width: `${Math.abs(end.x - start.x)}%`,
        height: '2px'
      }
    : direction === 'vertical'
    ? {
        left: `${start.x}%`,
        top: `${Math.min(start.y, end.y)}%`,
        height: `${Math.abs(end.y - start.y)}%`,
        width: '2px'
      }
    : {
        left: `${start.x}%`,
        top: `${start.y}%`,
        width: `${Math.abs(end.x - start.x)}%`,
        height: `${Math.abs(end.y - start.y)}%`,
        transform: start.x > end.x ? 'rotate(-45deg)' : 'rotate(45deg)',
        transformOrigin: start.x > end.x ? 'bottom left' : 'bottom right'
      };

  return (
    <motion.div
      className="absolute bg-gradient-to-r from-blue-500/30 to-purple-500/30"
      style={lineStyle}
      initial={{ opacity: 0, scaleX: direction !== 'vertical' ? 0 : 1, scaleY: direction !== 'horizontal' ? 0 : 1 }}
      animate={{ 
        opacity: [0, 0.5, 0],
        scaleX: direction !== 'vertical' ? [0, 1, 0] : 1,
        scaleY: direction !== 'horizontal' ? [0, 1, 0] : 1
      }}
      transition={{
        duration: 3,
        delay,
        repeat: Infinity,
        repeatType: "loop",
      }}
    />
  );
};

export default function NotFound() {
  const { isDark } = useTheme();
  const [nodes, setNodes] = useState<Array<{ x: number; y: number; size: number; delay: number }>>([]);
  const [lines, setLines] = useState<Array<{
    start: { x: number; y: number };
    end: { x: number; y: number };
    delay: number;
    direction: 'horizontal' | 'vertical' | 'diagonal';
  }>>([]);

  useEffect(() => {
    // Создаем случайные узлы цепи
    const newNodes = [];
    for (let i = 0; i < 20; i++) {
      newNodes.push({
        x: Math.random() * 80 + 10,
        y: Math.random() * 80 + 10,
        size: Math.random() * 6 + 4,
        delay: Math.random() * 5,
      });
    }
    setNodes(newNodes);

    // Создаем линии между узлами
    const newLines = [];
    for (let i = 0; i < 15; i++) {
      const startNode = newNodes[Math.floor(Math.random() * newNodes.length)];
      const endNode = newNodes[Math.floor(Math.random() * newNodes.length)];
      
      if (startNode && endNode) {
        const direction = ['horizontal', 'vertical', 'diagonal'][Math.floor(Math.random() * 3)] as 'horizontal' | 'vertical' | 'diagonal';
        
        newLines.push({
          start: { x: startNode.x, y: startNode.y },
          end: { x: endNode.x, y: endNode.y },
          delay: Math.random() * 5,
          direction
        });
      }
    }
    setLines(newLines);
  }, []);

  return (
    <div className={`relative min-h-screen flex flex-col items-center justify-center overflow-hidden ${isDark ? 'bg-[#030712]' : 'bg-gray-50'}`}>
      {/* Анимированный фон с элементами, напоминающими нейронную сеть */}
      <div className="absolute inset-0 overflow-hidden">
        {nodes.map((node, index) => (
          <CircuitNode 
            key={`node-${index}`} 
            x={node.x} 
            y={node.y} 
            size={node.size} 
            delay={node.delay} 
          />
        ))}
        
        {lines.map((line, index) => (
          <CircuitLine 
            key={`line-${index}`} 
            start={line.start}
            end={line.end}
            delay={line.delay}
            direction={line.direction}
          />
        ))}
      </div>

      {/* Градиентный эффект на фоне */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/20 dark:to-black/40 z-0"></div>

      {/* Контент */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 text-center max-w-[800px] mx-auto px-4"
      >
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className={`inline-block px-4 py-1.5 rounded-full 
            ${isDark 
              ? 'bg-gradient-to-r from-blue-900/30 to-purple-900/30 text-blue-100 border border-blue-800/30' 
              : 'bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border border-blue-200/80'
            } text-sm mb-6 font-medium`}
        >
          Страница не найдена
        </motion.div>
        
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-[120px] font-bold dark:text-white text-gray-800 mb-2 relative"
        >
          <span className="relative z-10">404</span>
          <motion.div 
            className={`absolute inset-0 blur-2xl opacity-50 
              ${isDark ? 'bg-gradient-to-br from-blue-600 to-purple-600' : 'bg-gradient-to-br from-blue-400 to-purple-400'} 
              rounded-full transform scale-75 z-0`}
            animate={{ 
              scale: [0.7, 0.85, 0.7],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.div>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-xl dark:text-gray-300 text-gray-700 mb-10 max-w-[600px] mx-auto"
        >
          Упс! Запрашиваемая страница не найдена. Возможно, она была перемещена или удалена.
        </motion.p>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <ButtonLink 
            href="/" 
            className="min-w-[220px] rounded-[12px] bg-gradient-to-br from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-white font-medium transition-all duration-300"
            variantBtn="link"
          >
            Вернуться на главную
          </ButtonLink>
        </motion.div>
      </motion.div>
    </div>
  );
}
