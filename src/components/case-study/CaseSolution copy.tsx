"use client";

import { useTheme } from "@/context/ThemeContext";
import CaseSection from "./CaseSection";
import { motion } from "framer-motion";
import {
  FiZap,
  FiSettings,
  FiTerminal,
  FiBox,
  FiMessageSquare,
  FiPhoneCall,
  FiMail,
  FiGlobe,
  FiArrowRight,
  FiCode,
  FiServer,
  FiDatabase,
  FiCpu,
  FiCheckSquare,
  FiInfo,
  FiSearch,
  FiUser,
  FiFileText,
  FiRefreshCw,
  FiCornerUpRight,
} from "react-icons/fi"; // Иконки
import { brandColors } from "./CaseHero"; // Импортируем фирменные цвета
import Link from "next/link";
import { useState, useRef, useEffect, Suspense } from "react";
import * as d3 from 'd3';
import { AnimatePresence } from "framer-motion";
import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Text, RoundedBox, useTexture, Line, Html } from '@react-three/drei';

interface SolutionFeature {
  title: string;
  items: string[];
  icon: React.ComponentType<{ className?: string }>; // Тип для иконки
}

interface TechPoint {
  title: string;
  description: string;
}

interface CaseSolutionProps {
  description: string;
  features: SolutionFeature[];
  technicalDetails?: string;
  techPoints?: string[];
}

// Функция для преобразования HEX-цвета в RGB компоненты
const hexToRgb = (hex: string) => {
  const r = parseInt(hex.substring(1, 3), 16);
  const g = parseInt(hex.substring(3, 5), 16);
  const b = parseInt(hex.substring(5, 7), 16);
  return { r, g, b };
};

// RGB компоненты для фирменных цветов
const primaryRGB = hexToRgb("#0167F3");
const secondaryRGB = hexToRgb("#399AFC");

// Константы для фирменных цветов
const brandColorGradients = {
  light: {
    primary: "from-[#0167F3]/20 to-[#399AFC]/10",
    secondary: "from-[#399AFC]/20 to-[#60B6FF]/10",
    accent: "from-[#1C7EFF]/20 to-[#50A8FF]/10",
    border: "border-[#0167F3]/30",
    borderHover: "border-[#0167F3]/50",
    text: "text-[#0167F3]",
    textHover: "text-[#0052cc]",
    background: "bg-gradient-to-br from-blue-50/80 to-white",
    surface: "bg-white/90",
  },
  dark: {
    primary: "from-[#0167F3]/30 to-[#399AFC]/20",
    secondary: "from-[#399AFC]/30 to-[#60B6FF]/20",
    accent: "from-[#1C7EFF]/30 to-[#50A8FF]/20",
    border: "border-[#0167F3]/40",
    borderHover: "border-[#0167F3]/60",
    text: "text-[#399AFC]",
    textHover: "text-[#60B6FF]",
    background: "bg-gradient-to-br from-gray-900/90 to-gray-800/90",
    surface: "bg-gray-800/70",
  }
};

// Маппинг для иконок Features
const featureIconMap: {
  [key: string]: React.ComponentType<{ className?: string }>;
} = {
  "Многоканальное присутствие": FiGlobe,
  "Основные функции": FiSettings,
  Default: FiBox, // Иконка по умолчанию
};

// Маппинг для иконок технических особенностей
const techIconMap: React.ComponentType<{ className?: string }>[] = [
  FiServer,
  FiDatabase,
  FiCode,
  FiCpu,
  FiTerminal,
];

// Тип для технического термина с подсказкой
interface TechTermTooltip {
  term: string;
  description: string;
}

// Словарь технических терминов с их описаниями
const techTerms: TechTermTooltip[] = [
  {
    term: "RAG",
    description: "Retrieval Augmented Generation - технология, которая объединяет поиск информации с генерацией текста для создания точных ответов на основе существующей базы знаний."
  },
  {
    term: "NLU",
    description: "Natural Language Understanding - компонент обработки естественного языка, который анализирует намерения и смысловые аспекты текста пользователя."
  },
  {
    term: "CRM",
    description: "Customer Relationship Management - система для управления взаимоотношениями с клиентами, хранящая историю клиентских взаимодействий."
  },
  {
    term: "ERP",
    description: "Enterprise Resource Planning - система планирования ресурсов предприятия, объединяющая бизнес-процессы в единую систему."
  }
];

// Ключевые преимущества решения
const keyBenefits = [
  {
    title: "Мгновенные ответы",
    description: "Сокращение времени ответа с 24 часов до 3 минут благодаря автоматизированной обработке",
    icon: FiZap,
  },
  {
    title: "Многоканальность",
    description: "Единый интеллектуальный ассистент для всех каналов коммуникации: чат, мессенджеры, email, голос",
    icon: FiGlobe,
  },
  {
    title: "Глубокие интеграции",
    description: "Полный доступ к данным о клиентах, заказах и товарах из CRM и ERP систем",
    icon: FiDatabase,
  }
];

// Модифицируем с использованием шрифтов
const typography = {
  headings: {
    h2: "font-sans text-3xl sm:text-4xl font-bold tracking-tight leading-tight",
    h3: "font-sans text-xl sm:text-2xl font-bold tracking-tight leading-tight",
    h4: "font-sans text-lg sm:text-xl font-semibold leading-snug",
    subtitle: "font-sans text-base sm:text-lg font-medium leading-relaxed"
  },
  body: {
    normal: "font-sans text-base leading-relaxed",
    small: "font-sans text-sm leading-relaxed",
    large: "font-sans text-lg leading-relaxed",
    highlight: "font-sans text-base font-medium leading-relaxed"
  }
};

// Логотип Neuropolis (как компонент SVG)
const NeuropolisLogo = ({ className = "" }: { className?: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2z"
      fill="url(#paint0_linear)"
      fillOpacity="0.9"
    />
    <path
      d="M22.5 11.5L16 8.5l-6.5 3v8l6.5 3 6.5-3v-8z"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 8.5v6l6.5 3M16 14.5l-6.5 3"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="paint0_linear"
        x1="2"
        y1="16"
        x2="30"
        y2="16"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0167F3" />
        <stop offset="1" stopColor="#399AFC" />
      </linearGradient>
    </defs>
  </svg>
);

// Паттерн волны (как компонент SVG для фона)
const WavePattern = ({ className = "", opacity = 0.05 }: { className?: string, opacity?: number }) => (
  <div className={`absolute w-full h-20 overflow-hidden z-0 ${className}`}>
    <svg
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      className="absolute w-full h-full"
      style={{ opacity }}
    >
      <path
        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
        fill="currentColor"
      ></path>
    </svg>
  </div>
);

// Декоративные элементы дизайна
const DecorativeBlob = ({ className = "", size = 200, opacity = 0.05 }: { className?: string, size?: number, opacity?: number }) => (
  <div
    className={`absolute rounded-full filter blur-3xl ${className}`}
    style={{
      width: size + 'px',
      height: size + 'px',
      opacity,
      background: 'linear-gradient(135deg, #0167F3, #399AFC)'
    }}
  />
);

// Декоративная сетка (фоновый паттерн)
const GridPattern = ({ className = "", opacity = 0.03 }: { className?: string, opacity?: number }) => (
  <div
    className={`absolute inset-0 z-0 overflow-hidden ${className}`}
    style={{ opacity }}
  >
    <div className="absolute inset-0" style={{
      backgroundImage: 'radial-gradient(#0167F3 1px, transparent 1px)',
      backgroundSize: '20px 20px'
    }}></div>
  </div>
);

// Новые интерфейсы для визуализации мыслительного процесса ИИ
interface ThoughtNode {
  id: string;
  label: string;
  description: string;
  type: 'input' | 'process' | 'knowledge' | 'output';
  connections: string[];
}

interface ProcessStep {
  id: string;
  title: string;
  duration: number; // в миллисекундах
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

// Типы для d3-элементов
interface NodeDatum extends ThoughtNode {
  x?: number;
  y?: number;
  fx?: number | null;
  fy?: number | null;
}

interface LinkDatum {
  source: string | NodeDatum;
  target: string | NodeDatum;
}

// Добавляем новые компоненты для визуализации мыслительного процесса
const AIProcessGraph = ({ nodes, animate = true }: { nodes: ThoughtNode[], animate?: boolean }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [activeNodeId, setActiveNodeId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { isDark } = useTheme();
  
  useEffect(() => {
    if (!svgRef.current || nodes.length === 0) return;
    
    const width = containerRef.current?.clientWidth || 600;
    const height = 400;
    
    // Очищаем предыдущие данные
    d3.select(svgRef.current).selectAll("*").remove();
    
    // Создаем SVG
    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);
    
    // Создаем симуляцию силы для размещения узлов
    const simulation = d3.forceSimulation<NodeDatum>()
      .force("link", d3.forceLink<NodeDatum, LinkDatum>().id((d) => d.id).distance(100))
      .force("charge", d3.forceManyBody().strength(-500))
      .force("center", d3.forceCenter(0, 0))
      .force("collision", d3.forceCollide().radius(50));
    
    // Преобразуем данные для d3
    const nodeData: NodeDatum[] = nodes.map(node => ({ ...node }));
    const linkData: LinkDatum[] = nodes.flatMap(node => 
      node.connections.map(targetId => ({
        source: node.id,
        target: targetId
      }))
    );
    
    // Создаем связи
    const links = svg.selectAll(".link")
      .data(linkData)
      .enter()
      .append("path")
      .attr("class", "link")
      .attr("stroke", isDark ? "rgba(57, 154, 252, 0.3)" : "rgba(1, 103, 243, 0.3)")
      .attr("stroke-width", 2)
      .attr("fill", "none")
      .attr("marker-end", "url(#arrowhead)");
      
    // Создаем узлы
    const nodeGroups = svg.selectAll(".node")
      .data(nodeData)
      .enter()
      .append("g")
      .attr("class", "node")
      .style("cursor", "pointer")
      .on("mouseover", function(event: MouseEvent, d: NodeDatum) {
        setActiveNodeId(d.id);
        d3.select(this as SVGGElement).select("circle")
          .transition()
          .duration(300)
          .attr("r", 35);
      })
      .on("mouseout", function() {
        setActiveNodeId(null);
        d3.select(this as SVGGElement).select("circle")
          .transition()
          .duration(300)
          .attr("r", 30);
      })
      .call(d3.drag<SVGGElement, NodeDatum>()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended));
    
    // Добавляем круги для узлов с разными цветами в зависимости от типа
    nodeGroups.append("circle")
      .attr("r", 30)
      .attr("fill", (d: NodeDatum) => {
        switch (d.type) {
          case 'input': return isDark ? "rgba(57, 154, 252, 0.3)" : "rgba(1, 103, 243, 0.2)";
          case 'process': return isDark ? "rgba(52, 211, 153, 0.3)" : "rgba(16, 185, 129, 0.2)";
          case 'knowledge': return isDark ? "rgba(251, 191, 36, 0.3)" : "rgba(245, 158, 11, 0.2)";
          case 'output': return isDark ? "rgba(239, 68, 68, 0.3)" : "rgba(220, 38, 38, 0.2)";
          default: return isDark ? "rgba(156, 163, 175, 0.3)" : "rgba(107, 114, 128, 0.2)";
        }
      })
      .attr("stroke", (d: NodeDatum) => {
        switch (d.type) {
          case 'input': return isDark ? "rgba(57, 154, 252, 0.8)" : "rgba(1, 103, 243, 0.8)";
          case 'process': return isDark ? "rgba(52, 211, 153, 0.8)" : "rgba(16, 185, 129, 0.8)";
          case 'knowledge': return isDark ? "rgba(251, 191, 36, 0.8)" : "rgba(245, 158, 11, 0.8)";
          case 'output': return isDark ? "rgba(239, 68, 68, 0.8)" : "rgba(220, 38, 38, 0.8)";
          default: return isDark ? "rgba(156, 163, 175, 0.8)" : "rgba(107, 114, 128, 0.8)";
        }
      })
      .attr("stroke-width", 2);
    
    // Добавляем текст
    nodeGroups.append("text")
      .attr("text-anchor", "middle")
      .attr("dy", ".3em")
      .attr("fill", isDark ? "white" : "black")
      .style("font-size", "12px")
      .style("pointer-events", "none")
      .text((d: NodeDatum) => d.label);
    
    // Добавляем стрелки для направления связей
    svg.append("defs").append("marker")
      .attr("id", "arrowhead")
      .attr("viewBox", "0 -5 10 10")
      .attr("refX", 40)
      .attr("refY", 0)
      .attr("markerWidth", 6)
      .attr("markerHeight", 6)
      .attr("orient", "auto")
      .append("path")
      .attr("d", "M0,-5L10,0L0,5")
      .attr("fill", isDark ? "rgba(57, 154, 252, 0.8)" : "rgba(1, 103, 243, 0.8)");
    
    // Обновляем позиции при симуляции
    simulation.nodes(nodeData).on("tick", ticked);
    (simulation.force("link") as d3.ForceLink<NodeDatum, LinkDatum>).links(linkData);
    
    function ticked() {
      links.attr("d", (d: any) => {
        const source = d.source as NodeDatum;
        const target = d.target as NodeDatum;
        const dx = target.x! - source.x!;
        const dy = target.y! - source.y!;
        const dr = Math.sqrt(dx * dx + dy * dy);
        return `M${source.x},${source.y}A${dr},${dr} 0 0,1 ${target.x},${target.y}`;
      });
      
      nodeGroups.attr("transform", (d: NodeDatum) => `translate(${d.x},${d.y})`);
    }
    
    function dragstarted(event: d3.D3DragEvent<SVGGElement, NodeDatum, NodeDatum>) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }
    
    function dragged(event: d3.D3DragEvent<SVGGElement, NodeDatum, NodeDatum>) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }
    
    function dragended(event: d3.D3DragEvent<SVGGElement, NodeDatum, NodeDatum>) {
      if (!event.active) simulation.alphaTarget(0);
      if (!animate) {
        event.subject.fx = event.x;
        event.subject.fy = event.y;
      } else {
        event.subject.fx = null;
        event.subject.fy = null;
      }
    }
    
    // Анимация появления, если включена
    if (animate) {
      nodeGroups.attr("opacity", 0)
        .transition()
        .duration(1000)
        .delay((d: NodeDatum, i: number) => i * 200)
        .attr("opacity", 1);
        
      links.attr("opacity", 0)
        .attr("stroke-dasharray", function(this: SVGPathElement) {
          return this.getTotalLength();
        })
        .attr("stroke-dashoffset", function(this: SVGPathElement) {
          return this.getTotalLength();
        })
        .transition()
        .duration(1000)
        .delay((d: LinkDatum, i: number) => i * 200)
        .attr("opacity", 1)
        .attr("stroke-dashoffset", 0);
    }
    
    return () => {
      simulation.stop();
    };
  }, [nodes, isDark, animate]);
  
  return (
    <div className="ai-process-graph-container relative" ref={containerRef}>
      <svg ref={svgRef} className="w-full" />
      
      {/* Всплывающая подсказка для активного узла */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.2 }}
        className={`absolute p-3 rounded-lg shadow-lg max-w-xs text-sm z-20 ${
          isDark 
            ? "bg-gray-800 border border-blue-500/30 text-gray-200" 
            : "bg-white border border-blue-500/20 text-gray-700"
        }`}
        style={{ 
          left: '50%', 
          bottom: '-80px',
          transform: 'translateX(-50%)'
        }}
      >
        <div className="flex flex-col gap-1">
          <div className="font-bold text-blue-500">
            {nodes.find(n => n.id === activeNodeId)?.label}
          </div>
          <div>
            {nodes.find(n => n.id === activeNodeId)?.description}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Компонент для отображения последовательности обработки запроса с временной шкалой
const AIProcessTimeline = ({ steps }: { steps: ProcessStep[] }) => {
  const { isDark } = useTheme();
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  
  // Общая продолжительность всех шагов
  const totalDuration = steps.reduce((sum, step) => sum + step.duration, 0);
  
  useEffect(() => {
    if (!isPlaying) return;
    
    let startTime: number | null = null;
    let animationFrameId: number;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      
      // Рассчитываем прогресс (0-100)
      const newProgress = Math.min(100, (elapsed / totalDuration) * 100);
      setProgress(newProgress);
      
      // Определяем текущий активный шаг
      let accumulatedDuration = 0;
      let currentStep = 0;
      
      for (let i = 0; i < steps.length; i++) {
        accumulatedDuration += steps[i].duration;
        if (elapsed <= accumulatedDuration) {
          currentStep = i;
          break;
        }
        if (i === steps.length - 1) {
          currentStep = i;
        }
      }
      
      setActiveStep(currentStep);
      
      if (elapsed < totalDuration) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setIsPlaying(false);
        setActiveStep(steps.length - 1);
      }
    };
    
    animationFrameId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPlaying, steps, totalDuration]);
  
  const handlePlayToggle = () => {
    if (!isPlaying) {
      // Если начинаем сначала, сбрасываем прогресс
      if (progress >= 100) {
        setProgress(0);
        setActiveStep(0);
      }
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  };
  
  const handleStepClick = (index: number) => {
    setActiveStep(index);
    
    // Рассчитываем прогресс на основе выбранного шага
    let durationSum = 0;
    for (let i = 0; i <= index; i++) {
      durationSum += i < index ? steps[i].duration : 0;
    }
    
    setProgress((durationSum / totalDuration) * 100);
    setIsPlaying(false);
  };
  
  return (
    <div className="ai-process-timeline">
      {/* Заголовок и кнопка play/pause */}
      <div className="flex justify-between items-center mb-6">
        <h4 className={`text-lg font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
          Процесс обработки запроса в реальном времени
        </h4>
        <button
          onClick={handlePlayToggle}
          className={`p-2 rounded-full transition-colors ${
            isDark 
              ? "bg-blue-500/20 hover:bg-blue-500/30 text-blue-400" 
              : "bg-blue-500/10 hover:bg-blue-500/20 text-blue-600"
          }`}
        >
          {isPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="6" y="4" width="4" height="16"></rect>
              <rect x="14" y="4" width="4" height="16"></rect>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          )}
        </button>
      </div>
      
      {/* Прогресс-бар */}
      <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full mb-8 overflow-hidden">
        <motion.div 
          className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-500 to-blue-600"
          style={{ width: `${progress}%` }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </div>
      
      {/* Временная шкала с шагами */}
      <div className="relative pb-4">
        {/* Линия времени */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
        
        {/* Шаги */}
        <div className="space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ 
                opacity: 1, 
                x: 0,
                scale: activeStep === index ? 1.02 : 1
              }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`flex items-start gap-4 cursor-pointer ${
                index < activeStep ? "opacity-60" : ""
              }`}
              onClick={() => handleStepClick(index)}
            >
              <div className={`relative z-10 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                index <= activeStep
                  ? isDark 
                    ? "bg-blue-500 text-white" 
                    : "bg-blue-600 text-white"
                  : isDark 
                    ? "bg-gray-700 text-gray-400" 
                    : "bg-gray-200 text-gray-600"
              }`}>
                <step.icon className="w-4 h-4" />
              </div>
              <div className="pt-1">
                <div className={`flex items-center gap-2 mb-1 ${
                  index <= activeStep
                    ? isDark ? "text-white" : "text-gray-900"
                    : isDark ? "text-gray-400" : "text-gray-500"
                }`}>
                  <h5 className="font-semibold text-base">{step.title}</h5>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-gray-200/50 dark:bg-gray-700/50">
                    {(step.duration / 1000).toFixed(2)}s
                  </span>
                </div>
                <p className={`text-sm ${
                  index <= activeStep
                    ? isDark ? "text-gray-300" : "text-gray-700"
                    : isDark ? "text-gray-500" : "text-gray-500"
                }`}>
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Определяем данные для визуализации мыслительного процесса ИИ
const aiThoughtNodes: ThoughtNode[] = [
  {
    id: "input",
    label: "Запрос",
    description: "Клиент задает вопрос о статусе своего заказа",
    type: "input",
    connections: ["intent", "context"]
  },
  {
    id: "intent",
    label: "Намерение",
    description: "Система определяет, что клиент хочет узнать статус заказа",
    type: "process",
    connections: ["kb_search", "client_data"]
  },
  {
    id: "context",
    label: "Контекст",
    description: "Система устанавливает контекст диалога и предыдущие запросы клиента",
    type: "process",
    connections: ["client_data"]
  },
  {
    id: "kb_search",
    label: "База знаний",
    description: "Поиск релевантной информации в базе знаний о статусах заказов",
    type: "knowledge",
    connections: ["generator"]
  },
  {
    id: "client_data",
    label: "Данные клиента",
    description: "Получение информации о заказах клиента из CRM-системы",
    type: "knowledge",
    connections: ["generator"]
  },
  {
    id: "generator",
    label: "Генерация",
    description: "Создание персонализированного ответа на основе контекста и данных",
    type: "process",
    connections: ["response"]
  },
  {
    id: "response",
    label: "Ответ",
    description: "Предоставление клиенту информации о текущем статусе заказа с деталями",
    type: "output",
    connections: []
  }
];

// Шаги обработки запроса с временными метками
const aiProcessSteps: ProcessStep[] = [
  {
    id: "receive",
    title: "Получение запроса",
    duration: 100,
    description: "Система получает запрос от клиента и начинает его обработку",
    icon: FiUser
  },
  {
    id: "intent_recognition",
    title: "Распознавание намерения",
    duration: 300,
    description: "NLU-модуль анализирует запрос и определяет основное намерение пользователя",
    icon: FiSearch
  },
  {
    id: "context_analysis",
    title: "Анализ контекста",
    duration: 250,
    description: "Система анализирует историю диалога и профиль клиента для уточнения контекста",
    icon: FiMessageSquare
  },
  {
    id: "data_retrieval",
    title: "Поиск данных",
    duration: 450,
    description: "Извлечение релевантных данных из CRM, ERP и базы знаний компании",
    icon: FiDatabase
  },
  {
    id: "vector_search",
    title: "Векторный поиск",
    duration: 200,
    description: "Семантический поиск в векторной базе для нахождения наиболее релевантной информации",
    icon: FiCode
  },
  {
    id: "response_generation",
    title: "Генерация ответа",
    duration: 350,
    description: "LLM формирует персонализированный и точный ответ на основе собранных данных",
    icon: FiRefreshCw
  },
  {
    id: "final_response",
    title: "Финальный ответ",
    duration: 100,
    description: "Оптимизированный ответ отправляется клиенту через выбранный канал коммуникации",
    icon: FiArrowRight
  }
];

// Интерфейсы для симулятора чата
interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  message: string;
  timestamp: Date;
  status?: 'analyzing' | 'searching' | 'generating' | 'complete';
}

interface ChatScenario {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  initialMessage: string;
  messages: ChatMessage[];
}

// Симулятор чата для демонстрации диалога ИИ с клиентом
const ChatSimulator = () => {
  const { isDark } = useTheme();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [selectedScenario, setSelectedScenario] = useState<string>(chatScenarios[0].id);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [activeMessage, setActiveMessage] = useState<number>(0);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [userInput, setUserInput] = useState<string>("");
  const [chatStarted, setChatStarted] = useState<boolean>(false);

  // Находим выбранный сценарий
  const currentScenario = chatScenarios.find(s => s.id === selectedScenario) || chatScenarios[0];
  
  // Скролл к последнему сообщению
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  // Сброс чата при смене сценария
  useEffect(() => {
    setMessages([]);
    setActiveMessage(0);
    setChatStarted(false);
  }, [selectedScenario]);
  
  // Автоскролл при появлении новых сообщений
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  // Начало чата с выбранным сценарием
  const startChat = () => {
    if (chatStarted) return;
    
    // Добавляем начальное сообщение пользователя
    const initialUserMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      message: currentScenario.initialMessage,
      timestamp: new Date()
    };
    
    setMessages([initialUserMessage]);
    setChatStarted(true);
    
    // Запускаем процесс ответа ассистента
    setTimeout(() => {
      simulateResponse();
    }, 1000);
  };
  
  // Симуляция последовательности сообщений из выбранного сценария
  const simulateResponse = () => {
    if (activeMessage >= currentScenario.messages.length) return;
    
    const nextMessage = currentScenario.messages[activeMessage];
    setIsTyping(true);
    
    // Если сообщение от ассистента, показываем процесс обработки
    if (nextMessage.sender === 'assistant') {
      // Сначала показываем статус "analyzing"
      const analyzingMessage: ChatMessage = {
        ...nextMessage,
        message: "",
        status: 'analyzing'
      };
      
      // Добавляем сообщение с анализом
      setMessages(prev => [...prev, analyzingMessage]);
      
      // Через секунду меняем статус на "searching"
      setTimeout(() => {
        setMessages(prev => {
          const updated = [...prev];
          updated[updated.length - 1] = { ...updated[updated.length - 1], status: 'searching' };
          return updated;
        });
        
        // Еще через секунду меняем статус на "generating"
        setTimeout(() => {
          setMessages(prev => {
            const updated = [...prev];
            updated[updated.length - 1] = { ...updated[updated.length - 1], status: 'generating' };
            return updated;
          });
          
          // Симулируем печатание сообщения
          let charIndex = 0;
          const typingInterval = setInterval(() => {
            if (charIndex < nextMessage.message.length) {
              setMessages(prev => {
                const updated = [...prev];
                updated[updated.length - 1] = {
                  ...updated[updated.length - 1],
                  message: nextMessage.message.substring(0, charIndex + 1)
                };
                return updated;
              });
              charIndex++;
            } else {
              clearInterval(typingInterval);
              // Завершаем сообщение со статусом "complete"
              setMessages(prev => {
                const updated = [...prev];
                updated[updated.length - 1] = {
                  ...updated[updated.length - 1],
                  message: nextMessage.message,
                  status: 'complete'
                };
                return updated;
              });
              setIsTyping(false);
              
              // Переходим к следующему сообщению через паузу
              setActiveMessage(prev => prev + 1);
              if (activeMessage + 1 < currentScenario.messages.length) {
                setTimeout(() => {
                  simulateResponse();
                }, 1500);
              }
            }
          }, 20);
        }, 1000);
      }, 1000);
    } else {
      // Если сообщение от пользователя, просто добавляем его с небольшой задержкой
      setTimeout(() => {
        setMessages(prev => [...prev, nextMessage]);
        setIsTyping(false);
        
        // Переходим к следующему сообщению через паузу
        setActiveMessage(prev => prev + 1);
        if (activeMessage + 1 < currentScenario.messages.length) {
          setTimeout(() => {
            simulateResponse();
          }, 1000);
        }
      }, 500);
    }
  };
  
  // Отправка пользовательского сообщения
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim() || isTyping) return;
    
    // Добавляем пользовательское сообщение
    const newUserMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      message: userInput,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, newUserMessage]);
    setUserInput("");
    
    // Генерируем стандартный ответ ассистента на дополнительные вопросы
    setTimeout(() => {
      setIsTyping(true);
      const assistantResponse: ChatMessage = {
        id: `assistant-${Date.now()}`,
        sender: 'assistant',
        message: "",
        timestamp: new Date(),
        status: 'analyzing'
      };
      
      // Добавляем начальное сообщение ассистента
      setMessages(prev => [...prev, assistantResponse]);
      
      // Последовательно меняем статусы
      setTimeout(() => {
        setMessages(prev => {
          const updated = [...prev];
          updated[updated.length - 1] = { ...updated[updated.length - 1], status: 'searching' };
          return updated;
        });
        
        setTimeout(() => {
          setMessages(prev => {
            const updated = [...prev];
            updated[updated.length - 1] = { ...updated[updated.length - 1], status: 'generating' };
            return updated;
          });
          
          // Подготавливаем динамический ответ
          const standardResponse = "Спасибо за ваш дополнительный вопрос. В данной демонстрации я могу предоставить только ограниченные ответы на основе предустановленных сценариев. Для получения более подробной информации о возможностях ИИ-ассистента, пожалуйста, выберите один из готовых сценариев или обратитесь к нашим специалистам.";
          
          // Симулируем печатание
          let charIndex = 0;
          const typingInterval = setInterval(() => {
            if (charIndex < standardResponse.length) {
              setMessages(prev => {
                const updated = [...prev];
                updated[updated.length - 1] = {
                  ...updated[updated.length - 1],
                  message: standardResponse.substring(0, charIndex + 1)
                };
                return updated;
              });
              charIndex++;
            } else {
              clearInterval(typingInterval);
              setMessages(prev => {
                const updated = [...prev];
                updated[updated.length - 1] = {
                  ...updated[updated.length - 1],
                  message: standardResponse,
                  status: 'complete'
                };
                return updated;
              });
              setIsTyping(false);
            }
          }, 20);
        }, 1000);
      }, 1000);
    }, 1000);
  };
  
  return (
    <div className={`chat-simulator rounded-xl border overflow-hidden ${
      isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
    }`}>
      {/* Заголовок и селектор сценариев */}
      <div className={`p-4 border-b ${
        isDark ? "bg-gray-900/50 border-gray-700" : "bg-gray-50 border-gray-200"
      }`}>
        <h4 className={`text-lg font-semibold mb-3 ${
          isDark ? "text-white" : "text-gray-900"
        }`}>
          Симулятор диалога с ИИ-ассистентом
        </h4>
        
        <div className="flex flex-wrap gap-2">
          {chatScenarios.map(scenario => (
            <button
              key={scenario.id}
              className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
                selectedScenario === scenario.id
                  ? isDark
                    ? "bg-blue-500 text-white"
                    : "bg-blue-600 text-white"
                  : isDark
                    ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => setSelectedScenario(scenario.id)}
            >
              <div className="flex items-center">
                <scenario.icon className="w-4 h-4 mr-1.5" />
                <span>{scenario.title}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
      
      {/* Описание сценария и инструкции */}
      {!chatStarted && (
        <div className={`p-4 border-b ${
          isDark ? "border-gray-700 bg-gray-800/70" : "border-gray-200 bg-gray-50/70"
        }`}>
          <div className="flex items-start">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 flex-shrink-0 ${
              isDark 
                ? "bg-blue-500/20 text-blue-400"
                : "bg-blue-500/10 text-blue-600"
            }`}>
              <currentScenario.icon className="w-5 h-5" />
            </div>
            <div>
              <h5 className={`font-medium mb-1 ${isDark ? "text-white" : "text-gray-900"}`}>
                {currentScenario.title}
              </h5>
              <p className={`text-sm mb-3 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                {currentScenario.description}
              </p>
              <button
                onClick={startChat}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  isDark 
                    ? "bg-blue-500/80 hover:bg-blue-500 text-white"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                }`}
              >
                Начать демонстрацию
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Окно чата */}
      <div 
        className="chat-messages p-4 h-[350px] overflow-y-auto"
        style={{ scrollBehavior: 'smooth' }}
      >
        {chatStarted ? (
          messages.map((msg, index) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} mb-4`}
            >
              <div className={`max-w-[80%] rounded-lg px-4 py-2 ${
                msg.sender === 'user'
                  ? isDark 
                    ? "bg-blue-600 text-white"
                    : "bg-blue-500 text-white"
                  : isDark
                    ? "bg-gray-700 text-gray-100"
                    : "bg-gray-100 text-gray-900"
              }`}>
                {/* Сообщение с индикатором состояния, если это сообщение от ассистента с обработкой */}
                {msg.sender === 'assistant' && msg.status && msg.status !== 'complete' ? (
                  <div className="flex items-center">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center mr-2 ${
                      isDark ? "bg-blue-500/30" : "bg-blue-500/20"
                    }`}>
                      {msg.status === 'analyzing' && (
                        <svg className="animate-spin w-3 h-3 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                      )}
                      {msg.status === 'searching' && (
                        <svg className="w-3 h-3 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      )}
                      {msg.status === 'generating' && (
                        <svg className="w-3 h-3 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      )}
                    </div>
                    
                    <span className="text-sm">
                      {msg.status === 'analyzing' && "Анализирую запрос..."}
                      {msg.status === 'searching' && "Ищу информацию..."}
                      {msg.status === 'generating' && "Генерирую ответ..."}
                    </span>
                  </div>
                ) : (
                  <span>{msg.message}</span>
                )}
              </div>
            </motion.div>
          ))
        ) : (
          <div className="h-full flex flex-col items-center justify-center">
            <svg className="w-12 h-12 text-gray-400 mb-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <p className={`text-center ${isDark ? "text-gray-400" : "text-gray-500"}`}>
              Выберите сценарий и нажмите "Начать демонстрацию" для просмотра диалога
            </p>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      {/* Поле ввода сообщения */}
      <div className={`p-3 border-t ${
        isDark ? "border-gray-700 bg-gray-800/80" : "border-gray-200 bg-gray-50"
      }`}>
        <form onSubmit={handleSendMessage} className="flex gap-2">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Введите ваше сообщение..."
            className={`flex-1 p-2 rounded-lg text-sm ${
              isDark 
                ? "bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                : "bg-white border-gray-300 text-gray-900 placeholder:text-gray-500"
            } border`}
            disabled={!chatStarted || isTyping}
          />
          <button
            type="submit"
            disabled={!chatStarted || isTyping || !userInput.trim()}
            className={`p-2 rounded-lg ${
              !chatStarted || isTyping || !userInput.trim()
                ? isDark 
                  ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                  : "bg-gray-200 text-gray-500 cursor-not-allowed"
                : isDark
                  ? "bg-blue-500 text-white hover:bg-blue-600"
                  : "bg-blue-600 text-white hover:bg-blue-700"
            } transition-colors`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

// Предопределенные сценарии чата
const chatScenarios: ChatScenario[] = [
  {
    id: 'order-status',
    title: 'Статус заказа',
    description: 'Клиент интересуется статусом своего заказа №12345',
    icon: FiBox,
    initialMessage: 'Здравствуйте! Подскажите, пожалуйста, где мой заказ №12345? Он должен был прийти еще вчера.',
    messages: [
      {
        id: 'assistant-1',
        sender: 'assistant',
        message: 'Здравствуйте! Сейчас проверю информацию по вашему заказу №12345.',
        timestamp: new Date()
      },
      {
        id: 'assistant-2',
        sender: 'assistant',
        message: 'Согласно информации в нашей системе, ваш заказ №12345 находится в пути. Курьерская служба сообщает о небольшой задержке из-за погодных условий. Ожидаемая доставка сегодня до 18:00. Вам также должно прийти SMS-уведомление от курьера.',
        timestamp: new Date()
      },
      {
        id: 'user-2',
        sender: 'user',
        message: 'Спасибо за информацию! А можно как-то связаться с курьером напрямую?',
        timestamp: new Date()
      },
      {
        id: 'assistant-3',
        sender: 'assistant',
        message: 'Конечно! Я могу организовать для вас прямую связь с курьером. Вот его контактный номер: +7 (900) 123-45-67. Также я могу передать ему сообщение с вашими пожеланиями по доставке, если хотите.',
        timestamp: new Date()
      },
      {
        id: 'user-3',
        sender: 'user',
        message: 'Отлично, спасибо за помощь!',
        timestamp: new Date()
      },
      {
        id: 'assistant-4',
        sender: 'assistant',
        message: 'Всегда рад помочь! Если у вас возникнут дополнительные вопросы о вашем заказе, не стесняйтесь обращаться. Хорошего дня!',
        timestamp: new Date()
      }
    ]
  },
  {
    id: 'return-product',
    title: 'Возврат товара',
    description: 'Клиент хочет вернуть бракованный товар и получить инструкции',
    icon: FiRefreshCw,
    initialMessage: 'Добрый день! Я получил заказ, но обнаружил, что товар имеет дефект. Как мне оформить возврат?',
    messages: [
      {
        id: 'assistant-1',
        sender: 'assistant',
        message: 'Добрый день! Мне жаль, что вы столкнулись с проблемой. Я помогу вам оформить возврат.',
        timestamp: new Date()
      },
      {
        id: 'assistant-2',
        sender: 'assistant',
        message: 'Для начала, могли бы вы сообщить номер вашего заказа, чтобы я мог найти его в системе?',
        timestamp: new Date()
      },
      {
        id: 'user-2',
        sender: 'user',
        message: 'Да, конечно. Номер заказа RN-78901.',
        timestamp: new Date()
      },
      {
        id: 'assistant-3',
        sender: 'assistant',
        message: 'Спасибо! Я нашел ваш заказ RN-78901. Вы можете оформить возврат через личный кабинет, нажав кнопку "Оформить возврат" на странице заказа. Или я могу помочь вам оформить его прямо сейчас. Вам нужно будет описать дефект и приложить несколько фотографий.',
        timestamp: new Date()
      },
      {
        id: 'user-3',
        sender: 'user',
        message: 'Помогите оформить возврат прямо сейчас, пожалуйста.',
        timestamp: new Date()
      },
      {
        id: 'assistant-4',
        sender: 'assistant',
        message: 'Конечно! Я создал заявку на возврат №RT-56789. Опишите, пожалуйста, какой дефект вы обнаружили?',
        timestamp: new Date()
      },
      {
        id: 'user-4',
        sender: 'user',
        message: 'На корпусе устройства есть трещина с правой стороны, вероятно, оно было повреждено при транспортировке.',
        timestamp: new Date()
      },
      {
        id: 'assistant-5',
        sender: 'assistant',
        message: 'Я добавил описание дефекта в заявку. Теперь вам нужно прикрепить фотографии дефекта. Вы можете сделать это через форму, которую я только что отправил на вашу электронную почту. После проверки нашими специалистами, мы организуем бесплатный вывоз товара курьером в удобное для вас время.',
        timestamp: new Date()
      },
      {
        id: 'user-5',
        sender: 'user',
        message: 'Благодарю! Я отправлю фотографии через форму.',
        timestamp: new Date()
      },
      {
        id: 'assistant-6',
        sender: 'assistant',
        message: 'Отлично! После получения фотографий мы рассмотрим вашу заявку в течение 24 часов. Вы получите уведомление на email и в SMS. Средства будут возвращены на ваш счет в течение 3-5 рабочих дней после получения товара на нашем складе.',
        timestamp: new Date()
      }
    ]
  },
  {
    id: 'technical-support',
    title: 'Техническая проблема',
    description: 'Клиент столкнулся с технической проблемой при использовании продукта',
    icon: FiTerminal,
    initialMessage: 'Помогите пожалуйста! После последнего обновления приложение не запускается и выдает ошибку "Error code: 0x80070057".',
    messages: [
      {
        id: 'assistant-1',
        sender: 'assistant',
        message: 'Здравствуйте! Я помогу вам решить проблему с запуском приложения после обновления.',
        timestamp: new Date()
      },
      {
        id: 'assistant-2',
        sender: 'assistant',
        message: 'Ошибка с кодом 0x80070057 обычно связана с повреждением файлов приложения во время обновления. Давайте проведем пошаговую диагностику. Какую операционную систему вы используете?',
        timestamp: new Date()
      },
      {
        id: 'user-2',
        sender: 'user',
        message: 'У меня Windows 11, последняя версия.',
        timestamp: new Date()
      },
      {
        id: 'assistant-3',
        sender: 'assistant',
        message: 'Спасибо за информацию. Для Windows 11 я рекомендую выполнить следующие шаги:\n\n1. Перезагрузите компьютер\n2. Попробуйте запустить приложение от имени администратора (правый клик → Запустить от имени администратора)\n3. Если это не поможет, выполните восстановление приложения через Параметры → Приложения → Найдите наше приложение → Дополнительные параметры → Восстановить\n\nВыполните эти шаги и сообщите результат.',
        timestamp: new Date()
      },
      {
        id: 'user-3',
        sender: 'user',
        message: 'Я перезагрузил компьютер и попробовал запустить от имени администратора, но ошибка осталась. Сейчас попробую восстановление...',
        timestamp: new Date()
      },
      {
        id: 'user-4',
        sender: 'user',
        message: 'Восстановление через параметры не помогло, всё равно та же ошибка.',
        timestamp: new Date()
      },
      {
        id: 'assistant-4',
        sender: 'assistant',
        message: 'Понятно, нам нужно использовать более глубокое решение. Предлагаю выполнить полную переустановку приложения:\n\n1. Удалите приложение через Параметры → Приложения\n2. Скачайте специальную утилиту очистки с нашего сайта: [ссылка на утилиту очистки]\n3. Запустите утилиту, чтобы удалить остаточные файлы\n4. Перезагрузите компьютер\n5. Скачайте и установите последнюю версию приложения с официального сайта\n\nЭтот метод решает проблему в 94% случаев. Если после этого ошибка сохранится, потребуется более детальная диагностика системы.',
        timestamp: new Date()
      },
      {
        id: 'user-5',
        sender: 'user',
        message: 'Отлично, я выполню эти шаги и сообщу о результатах. Спасибо за подробные инструкции!',
        timestamp: new Date()
      },
      {
        id: 'assistant-5',
        sender: 'assistant',
        message: 'Всегда рад помочь! Если у вас возникнут вопросы в процессе, сразу пишите. Я остаюсь на связи и готов оказать дополнительную поддержку. Удачной переустановки!',
        timestamp: new Date()
      }
    ]
  }
];

// Типы для 3D модели архитектуры ИИ
interface ArchitectureNode {
  id: string;
  position: [number, number, number];
  size: [number, number, number];
  label: string;
  description: string;
  color: string;
  type: 'input' | 'processing' | 'database' | 'output';
}

interface ArchitectureConnection {
  id: string;
  from: string;
  to: string;
  color: string;
  width: number;
  animated: boolean;
}

// Компонент отдельного узла архитектуры ИИ
const ArchitectureNodeMesh = ({ 
  node, 
  isHovered, 
  setHoveredNode 
}: { 
  node: ArchitectureNode; 
  isHovered: boolean; 
  setHoveredNode: (id: string | null) => void; 
}) => {
  return null; // Временно отключен
};

// Компонент соединительной линии между узлами
const ConnectionLine = ({ 
  connection, 
  nodes,
  time
}: { 
  connection: ArchitectureConnection; 
  nodes: { [key: string]: ArchitectureNode };
  time: number;
}) => {
  return null; // Временно отключен
};

// Информационная панель при наведении
const NodeInfoPanel = ({ node }: { node: ArchitectureNode }) => {
  return null; // Временно отключен
};

// Основная 3D сцена архитектуры ИИ
const AIArchitecture3D = () => {
  return (
    <div className="h-full w-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl flex items-center justify-center text-center p-8">
      <div>
        <h4 className="text-lg font-semibold mb-3">3D модель архитектуры ИИ</h4>
        <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
          Интерактивная 3D модель компонентов ИИ-системы с визуализацией потоков данных
        </p>
        
        <div className="flex flex-wrap gap-3 justify-center mb-6">
          {['Входной слой', 'Обработка', 'База знаний', 'Генерация'].map((label, index) => (
            <div 
              key={index}
              className="px-3 py-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 
                        border border-blue-500/20 text-sm font-medium transition-colors cursor-pointer"
            >
              {label}
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto">
          {[
            { label: 'Пользователь', color: 'blue' },
            { label: 'NLU модуль', color: 'green' },
            { label: 'Генерация', color: 'red' },
            { label: 'Векторная БД', color: 'amber' },
            { label: 'CRM-система', color: 'amber' },
            { label: 'Ответ', color: 'red' },
          ].map((node, index) => (
            <div 
              key={index}
              className={`relative h-20 rounded-lg flex items-center justify-center p-2 text-center
                        ${node.color === 'blue' ? 'bg-blue-500/20 border-blue-500/30' : 
                          node.color === 'green' ? 'bg-green-500/20 border-green-500/30' : 
                          node.color === 'amber' ? 'bg-amber-500/20 border-amber-500/30' : 
                          'bg-red-500/20 border-red-500/30'} 
                        border hover:scale-105 transition-transform cursor-pointer`}
            >
              <div className="flex flex-col items-center">
                <NeuralPulse color={node.color as "blue" | "green" | "amber" | "red"} size="sm" />
                <span className="text-xs mt-1">{node.label}</span>
              </div>
            </div>
          ))}
        </div>
        
        <p className="mt-6 text-xs text-gray-500 dark:text-gray-400 italic">
          * Для полной 3D-визуализации перезагрузите страницу *
        </p>
      </div>
    </div>
  );
};

// Компонент "неврологического отзыва" при клике
const NeuralRipple = ({ isDark }: { isDark: boolean }) => {
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number; size: number }>>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Функция для добавления нового эффекта пульсации при клике
  const addRipple = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    // Получаем координаты относительно контейнера
    const rect = containerRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    // Создаем новый эффект пульсации с уникальным ID
    const newRipple = {
      id: Date.now(),
      x,
      y,
      size: 0, // Начальный размер пульсации
    };
    
    // Добавляем в массив
    setRipples(prev => [...prev, newRipple]);
    
    // Вибрация устройства (если поддерживается)
    if (window.navigator && window.navigator.vibrate) {
      window.navigator.vibrate(50); // Легкая вибрация на 50мс
    }
  };
  
  // Анимация пульсаций
  useEffect(() => {
    if (ripples.length === 0) return;
    
    const animateRipples = () => {
      setRipples(prev => 
        prev
          .map(ripple => ({
            ...ripple,
            size: ripple.size + 5, // Увеличиваем размер пульсации
          }))
          .filter(ripple => ripple.size < 150) // Удаляем пульсации, которые выросли слишком большими
      );
    };
    
    // Запускаем анимацию с интервалом
    const intervalId = setInterval(animateRipples, 50);
    
    return () => {
      clearInterval(intervalId);
    };
  }, [ripples]);
  
  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 z-0 overflow-hidden pointer-events-auto"
      onClick={addRipple}
    >
      {ripples.map(ripple => (
        <motion.div
          key={ripple.id}
          className="absolute rounded-full opacity-0"
          style={{
            left: ripple.x - ripple.size / 2,
            top: ripple.y - ripple.size / 2,
            width: `${ripple.size}px`,
            height: `${ripple.size}px`,
            backgroundImage: isDark 
              ? "radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(59, 130, 246, 0) 70%)"
              : "radial-gradient(circle, rgba(37, 99, 235, 0.2) 0%, rgba(37, 99, 235, 0) 70%)"
          }}
          initial={{ opacity: 0.7, scale: 0 }}
          animate={{ opacity: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      ))}
    </div>
  );
};

// Пульсирующий индикатор для кнопок и интерактивных элементов
const NeuralPulse = ({ className = "", size = "md", color = "blue" }: { className?: string; size?: "sm" | "md" | "lg"; color?: "blue" | "green" | "amber" | "red" }) => {
  const sizeClasses = {
    sm: "w-5 h-5",
    md: "w-8 h-8",
    lg: "w-12 h-12"
  };
  
  const colorClasses = {
    blue: "bg-blue-500",
    green: "bg-emerald-500",
    amber: "bg-amber-500",
    red: "bg-red-500"
  };
  
  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      <div className={`absolute inset-0 rounded-full ${colorClasses[color]} opacity-20`}></div>
      <motion.div
        className={`absolute inset-0 rounded-full ${colorClasses[color]} opacity-40`}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.2, 0.4]
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse"
        }}
      ></motion.div>
      <motion.div
        className={`absolute inset-0 rounded-full ${colorClasses[color]} opacity-20`}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.1, 0.2]
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          delay: 0.5
        }}
      ></motion.div>
    </div>
  );
};

// Кнопка с нейроморфным дизайном и тактильным отзывом
const NeuralButton = ({ 
  children, 
  onClick,
  variant = "primary",
  size = "md",
  className = ""
}: { 
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
}) => {
  const { isDark } = useTheme();
  const [isPressed, setIsPressed] = useState(false);
  
  // Размеры кнопки
  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm rounded-lg",
    md: "px-4 py-2 text-base rounded-lg",
    lg: "px-6 py-3 text-lg rounded-xl"
  };
  
  // Варианты стилей
  const variantStyles = {
    primary: isDark
      ? "bg-gradient-to-br from-blue-500/90 to-blue-600/90 text-white"
      : "bg-gradient-to-br from-blue-600 to-blue-700 text-white",
    secondary: isDark
      ? "bg-gradient-to-br from-gray-700/90 to-gray-800/90 text-gray-200"
      : "bg-gradient-to-br from-gray-200 to-gray-300 text-gray-800",
    outline: isDark
      ? "bg-gray-800/50 border border-blue-500/50 text-blue-400"
      : "bg-white/80 border border-blue-500/40 text-blue-600"
  };
  
  // Обработка нажатия для тактильной отзывчивости
  const handlePress = () => {
    setIsPressed(true);
    
    // Вибрация устройства (если поддерживается)
    if (window.navigator && window.navigator.vibrate) {
      window.navigator.vibrate(30); // Короткая вибрация на 30мс
    }
    
    // Сброс состояния нажатия через 150мс
    setTimeout(() => {
      setIsPressed(false);
    }, 150);
    
    // Вызов переданного обработчика
    if (onClick) onClick();
  };
  
  return (
    <motion.button
      className={`relative overflow-hidden font-medium transition-all ${sizeClasses[size]} ${variantStyles[variant]} ${className}`}
      whileTap={{ scale: 0.96 }}
      animate={{ 
        y: isPressed ? 1 : 0,
        boxShadow: isPressed 
          ? isDark 
            ? "0 1px 2px rgba(0, 0, 0, 0.5), 0 0 0 rgba(59, 130, 246, 0.2)" 
            : "0 1px 2px rgba(0, 0, 0, 0.1), 0 0 0 rgba(37, 99, 235, 0.1)"
          : isDark 
            ? "0 4px 10px rgba(0, 0, 0, 0.5), 0 0 15px rgba(59, 130, 246, 0.3)" 
            : "0 4px 10px rgba(0, 0, 0, 0.1), 0 0 15px rgba(37, 99, 235, 0.2)"
      }}
      transition={{ duration: 0.1 }}
      onClick={handlePress}
    >
      {/* Внутренний нейронный эффект */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-transparent via-white to-transparent opacity-10"
          animate={{
            rotate: [0, 15],
            top: ["-100%", "200%"],
            left: ["-100%", "200%"]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear"
          }}
        />
      </div>
      
      {/* Контент кнопки */}
      <div className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </div>
    </motion.button>
  );
};

// Компонент адаптивных цветовых градиентов
const AdaptiveGradient = () => {
  const { isDark } = useTheme();
  const [timeOfDay, setTimeOfDay] = useState<'morning' | 'day' | 'evening' | 'night'>('day');
  const [gradientParams, setGradientParams] = useState({
    hue1: 210, // Базовый оттенок для первого цвета (голубой)
    hue2: 230, // Базовый оттенок для второго цвета (синий)
    saturation1: 80,
    saturation2: 70,
    lightness1: isDark ? 60 : 50,
    lightness2: isDark ? 50 : 40,
    angle: 135, // Угол градиента
  });
  
  // Определение времени суток
  useEffect(() => {
    const determineTimeOfDay = () => {
      const hour = new Date().getHours();
      
      if (hour >= 5 && hour < 10) {
        return 'morning';
      } else if (hour >= 10 && hour < 17) {
        return 'day';
      } else if (hour >= 17 && hour < 22) {
        return 'evening';
      } else {
        return 'night';
      }
    };
    
    // Устанавливаем начальное время суток
    setTimeOfDay(determineTimeOfDay());
    
    // Обновляем каждый час
    const intervalId = setInterval(() => {
      setTimeOfDay(determineTimeOfDay());
    }, 60 * 60 * 1000); // Каждый час
    
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  
  // Настраиваем параметры градиента в зависимости от времени суток
  useEffect(() => {
    switch (timeOfDay) {
      case 'morning':
        setGradientParams({
          hue1: 200, // Более голубой
          hue2: 220,
          saturation1: 80,
          saturation2: 75, 
          lightness1: isDark ? 65 : 55,
          lightness2: isDark ? 55 : 45,
          angle: 120,
        });
        break;
      case 'day':
        setGradientParams({
          hue1: 210, // Стандартный синий
          hue2: 230,
          saturation1: 80,
          saturation2: 70,
          lightness1: isDark ? 60 : 50,
          lightness2: isDark ? 50 : 40,
          angle: 135,
        });
        break;
      case 'evening':
        setGradientParams({
          hue1: 230, // Более насыщенный
          hue2: 250, // С фиолетовым оттенком
          saturation1: 70,
          saturation2: 60,
          lightness1: isDark ? 55 : 45,
          lightness2: isDark ? 45 : 35,
          angle: 150,
        });
        break;
      case 'night':
        setGradientParams({
          hue1: 240, // Темно-синий
          hue2: 260, // С фиолетовым оттенком
          saturation1: 60,
          saturation2: 50,
          lightness1: isDark ? 50 : 40,
          lightness2: isDark ? 40 : 30,
          angle: 165,
        });
        break;
    }
  }, [timeOfDay, isDark]);
  
  // Эффект дыхания - постепенное изменение параметров
  useEffect(() => {
    // Небольшие колебания параметров для эффекта "дыхания"
    const breathingInterval = setInterval(() => {
      setGradientParams(prev => ({
        ...prev,
        // Небольшие изменения оттенка
        hue1: prev.hue1 + (Math.random() * 2 - 1),
        hue2: prev.hue2 + (Math.random() * 2 - 1),
        // Небольшие изменения насыщенности
        saturation1: Math.max(60, Math.min(90, prev.saturation1 + (Math.random() * 4 - 2))),
        saturation2: Math.max(50, Math.min(80, prev.saturation2 + (Math.random() * 4 - 2))),
        // Небольшие изменения яркости
        lightness1: Math.max(40, Math.min(70, prev.lightness1 + (Math.random() * 3 - 1.5))),
        lightness2: Math.max(30, Math.min(60, prev.lightness2 + (Math.random() * 3 - 1.5))),
        // Небольшие изменения угла
        angle: (prev.angle + 0.5) % 360,
      }));
    }, 2000); // Каждые 2 секунды
    
    return () => {
      clearInterval(breathingInterval);
    };
  }, []);
  
  // Формируем CSS градиент
  const gradientStyle = {
    background: `linear-gradient(${gradientParams.angle}deg, 
                 hsl(${gradientParams.hue1}, ${gradientParams.saturation1}%, ${gradientParams.lightness1}%) 0%, 
                 hsl(${gradientParams.hue2}, ${gradientParams.saturation2}%, ${gradientParams.lightness2}%) 100%)`,
    opacity: isDark ? 0.15 : 0.07,
  };
  
  return (
    <>
      {/* Основной градиентный фон */}
      <div 
        className="absolute inset-0 z-0" 
        style={gradientStyle}
      />
      
      {/* Био-вдохновленные паттерны */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Нейронный паттерн */}
        <svg
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0"
          style={{ opacity: isDark ? 0.07 : 0.04 }}
        >
          <defs>
            <filter id="blur-filter" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
            </filter>
          </defs>
          <g fill="none" stroke={isDark ? "#4B88FF" : "#0167F3"} strokeWidth="0.5">
            {/* Имитация нейронной сети - генерируем случайные линии и узлы */}
            {Array.from({ length: 15 }).map((_, i) => {
              const x1 = Math.random() * 100;
              const y1 = Math.random() * 100;
              const x2 = Math.random() * 100;
              const y2 = Math.random() * 100;
              
              return (
                <g key={`neuron-${i}`}>
                  <circle cx={x1} cy={y1} r={1} fill={isDark ? "#4B88FF" : "#0167F3"} opacity={0.6} />
                  <path
                    d={`M ${x1} ${y1} Q ${(x1 + x2) / 2 + Math.random() * 20 - 10} ${(y1 + y2) / 2 + Math.random() * 20 - 10}, ${x2} ${y2}`}
                    filter="url(#blur-filter)"
                    opacity={0.4}
                  />
                </g>
              );
            })}
          </g>
        </svg>
        
        {/* Анимированные движущиеся частицы */}
        {Array.from({ length: 10 }).map((_, i) => {
          const size = 1 + Math.random() * 2;
          const delay = Math.random() * 10;
          const duration = 20 + Math.random() * 40;
          
          return (
            <motion.div
              key={`particle-${i}`}
              className="absolute bg-blue-500 rounded-full"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: 0.3,
                filter: 'blur(1px)'
              }}
              animate={{
                x: [0, Math.random() * 200 - 100, Math.random() * 200 - 100, 0],
                y: [0, Math.random() * 200 - 100, Math.random() * 200 - 100, 0],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: duration,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
                delay: delay
              }}
            />
          );
        })}
      </div>
    </>
  );
};

// "Живые" интерактивные элементы
// Кнопка с эффектом органического роста
const OrganicGrowthButton = ({ 
  children, 
  onClick,
  className = "", 
  variant = "primary"
}: { 
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
}) => {
  const { isDark } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  
  // Стили вариантов кнопки
  const variantStyles = {
    primary: isDark
      ? "bg-gradient-to-br from-blue-500/90 to-blue-600/90 text-white"
      : "bg-gradient-to-br from-blue-600 to-blue-700 text-white",
    secondary: isDark
      ? "bg-gradient-to-br from-gray-700/90 to-gray-800/90 text-gray-200"
      : "bg-gradient-to-br from-gray-200 to-gray-300 text-gray-800",
    outline: isDark
      ? "bg-gray-800/50 border border-blue-500/50 text-blue-400"
      : "bg-white/80 border border-blue-500/40 text-blue-600"
  };
  
  // Стили размеров кнопки
  
  // Вибрация при клике
  const handleClick = () => {
    setIsPressed(true);
    
    // Вибрация устройства
    if (window.navigator && window.navigator.vibrate) {
      window.navigator.vibrate(30);
    }
    
    // Вызов переданного обработчика
    if (onClick) onClick();
    
    // Сбрасываем состояние
    setTimeout(() => setIsPressed(false), 300);
  };
  
  return (
    <motion.button
      className={`relative overflow-hidden rounded-lg ${variantStyles[variant]} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      animate={{
        scale: isPressed ? 0.95 : isHovered ? 1.03 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 15
      }}
    >
      {/* Органический фон */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 rounded-lg"
          style={{
            background: variant === "primary" 
              ? `radial-gradient(circle at ${isHovered ? '60%' : '40%'} ${isHovered ? '40%' : '60%'}, rgba(96, 165, 250, 0.6), rgba(37, 99, 235, 0) 70%)`
              : `radial-gradient(circle at ${isHovered ? '60%' : '40%'} ${isHovered ? '40%' : '60%'}, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0) 70%)`
          }}
          animate={{
            opacity: isHovered ? 0.8 : 0.4,
            scale: isHovered ? 1.2 : 1,
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut"
          }}
        />
        
        {/* Органические ветвления */}
        {isHovered && (
          <>
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div
                key={`branch-${i}`}
                className={`absolute bg-white rounded-full ${variant === "outline" ? "opacity-30" : "opacity-15"}`}
                style={{
                  width: 2 + Math.random() * 3,
                  height: 10 + Math.random() * 20,
                  left: `${30 + Math.random() * 40}%`,
                  top: `${30 + Math.random() * 40}%`,
                  transformOrigin: "center bottom",
                  rotate: `${Math.random() * 360}deg`,
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: [0, 1, 1.1, 1], 
                  opacity: [0, 0.5, 0.7, 0] 
                }}
                transition={{
                  duration: 1 + Math.random() * 0.5,
                  delay: Math.random() * 0.3,
                  ease: "easeOut"
                }}
              />
            ))}
          </>
        )}
      </div>
      
      {/* Содержимое кнопки */}
      <div className="relative z-10 px-4 py-2 flex items-center justify-center gap-2">
        {children}
        
        {/* Пульсирующая точка, если кнопка в состоянии наведения */}
        {isHovered && (
          <motion.div
            className="rounded-full bg-white w-2 h-2"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 0.8, 0], 
              scale: [0, 1, 2] 
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              repeatType: "loop"
            }}
          />
        )}
      </div>
    </motion.button>
  );
};

// Компонент органического роста для элементов контента
const OrganicGrowthContainer = ({ 
  children, 
  className = "",
  delay = 0
}: { 
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay * 1000);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, [delay]);
  
  return (
    <motion.div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      animate={isVisible ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
    >
      {/* Органический эффект появления */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 0, opacity: 0 }}
        animate={isVisible ? {
          scale: [0, 1.2, 1],
          opacity: [0, 0.2, 0]
        } : {}}
        transition={{
          duration: 1.5,
          ease: "easeOut"
        }}
        style={{
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, rgba(59, 130, 246, 0) 70%)",
          transformOrigin: "center"
        }}
      />
      
      {/* Органические ветвления при появлении */}
      {isVisible && (
        <>
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={`growth-branch-${i}`}
              className="absolute bg-blue-500/30 rounded-full"
              style={{
                width: 1 + Math.random() * 2,
                height: 10 + Math.random() * 40,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transformOrigin: "center bottom",
                rotate: `${Math.random() * 360}deg`,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0, 1, 1.2, 1], 
                opacity: [0, 0.3, 0.2, 0] 
              }}
              transition={{
                duration: 2 + Math.random(),
                delay: Math.random() * 0.5,
                ease: "easeOut"
              }}
            />
          ))}
        </>
      )}
      
      {/* Корневой элемент с эффектом появления */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isVisible ? { opacity: 1, scale: 1 } : {}}
        transition={{
          duration: 0.7,
          ease: "easeOut",
          delay: 0.2
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

// Компонент для создания ветвящихся связей между элементами
const BranchingConnections = ({ 
  points, 
  containerRef
}: { 
  points: Array<{ id: string; element: HTMLElement; connections: string[] }>;
  containerRef: React.RefObject<HTMLDivElement>;
}) => {
  const { isDark } = useTheme();
  const svgRef = useRef<SVGSVGElement>(null);
  
  useEffect(() => {
    if (!svgRef.current || !containerRef.current || points.length === 0) return;
    
    // Получаем размеры контейнера
    const containerRect = containerRef.current.getBoundingClientRect();
    
    // Устанавливаем размеры SVG
    svgRef.current.setAttribute('width', `${containerRect.width}`);
    svgRef.current.setAttribute('height', `${containerRect.height}`);
    
    // Очищаем предыдущие пути
    while (svgRef.current.firstChild) {
      svgRef.current.removeChild(svgRef.current.firstChild);
    }
    
    // Создаем соединения
    points.forEach(point => {
      const sourceRect = point.element.getBoundingClientRect();
      
      // Вычисляем координаты относительно контейнера
      const sourceX = sourceRect.left - containerRect.left + sourceRect.width / 2;
      const sourceY = sourceRect.top - containerRect.top + sourceRect.height / 2;
      
      // Создаем соединения
      point.connections.forEach(targetId => {
        const targetPoint = points.find(p => p.id === targetId);
        if (!targetPoint) return;
        
        const targetRect = targetPoint.element.getBoundingClientRect();
        const targetX = targetRect.left - containerRect.left + targetRect.width / 2;
        const targetY = targetRect.top - containerRect.top + targetRect.height / 2;
        
        // Вычисляем контрольные точки для красивой кривой
        const controlX1 = sourceX + (targetX - sourceX) * 0.25;
        const controlY1 = sourceY + (targetY - sourceY) * 0.1;
        const controlX2 = sourceX + (targetX - sourceX) * 0.75;
        const controlY2 = targetY - (targetY - sourceY) * 0.1;
        
        // Создаем путь
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', `M ${sourceX} ${sourceY} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${targetX} ${targetY}`);
        path.setAttribute('stroke', isDark ? 'rgba(59, 130, 246, 0.4)' : 'rgba(37, 99, 235, 0.3)');
        path.setAttribute('stroke-width', '1.5');
        path.setAttribute('fill', 'none');
        path.setAttribute('stroke-dasharray', '3,3');
        
        // Добавляем анимацию
        const animate = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
        animate.setAttribute('attributeName', 'stroke-dashoffset');
        animate.setAttribute('from', '60');
        animate.setAttribute('to', '0');
        animate.setAttribute('dur', '8s');
        animate.setAttribute('repeatCount', 'indefinite');
        path.appendChild(animate);
        
        // Добавляем путь в SVG
        svgRef.current?.appendChild(path);
        
        // Добавляем "частицы" на пути
        for (let i = 0; i < 2; i++) {
          const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
          circle.setAttribute('r', '3');
          circle.setAttribute('fill', isDark ? 'rgba(59, 130, 246, 0.7)' : 'rgba(37, 99, 235, 0.5)');
          
          const animateMotion = document.createElementNS('http://www.w3.org/2000/svg', 'animateMotion');
          animateMotion.setAttribute('path', `M ${sourceX} ${sourceY} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${targetX} ${targetY}`);
          animateMotion.setAttribute('dur', `${5 + i * 2}s`);
          animateMotion.setAttribute('repeatCount', 'indefinite');
          animateMotion.setAttribute('begin', `${i * 2.5}s`);
          
          circle.appendChild(animateMotion);
          svgRef.current?.appendChild(circle);
        }
      });
    });
  }, [points, containerRef, isDark]);
  
  return (
    <svg ref={svgRef} className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"></svg>
  );
};

export default function CaseSolution({
  description,
  features,
  technicalDetails,
  techPoints,
}: CaseSolutionProps) {
  const { isDark } = useTheme();
  const primaryColor = "#0167F3";
  const primaryRGB = { r: 1, g: 103, b: 243 }; // RGB для #0167F3
  
  // Цветовые схемы
  const colorScheme = {
    primary: "from-[#0167F3] to-[#399AFC]",
    secondary: "from-[#399AFC] to-[#60B6FF]",
    background: isDark ? "bg-gray-800/80" : "bg-white/90",
    border: isDark ? "border-blue-500/30" : "border-blue-500/20",
    borderHover: isDark ? "border-blue-500/50" : "border-blue-500/40",
    text: isDark ? "text-blue-400" : "text-blue-600",
  };
  
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  
  // Функция для выделения технических терминов с подсказками
  const highlightTechTerms = (text: string) => {
    let processedText = text;
    
    techTerms.forEach(({ term }) => {
      const regex = new RegExp(`\\b${term}\\b`, 'g');
      processedText = processedText.replace(regex, `<span class="tech-term" data-term="${term}">${term}</span>`);
    });
    
    return processedText;
  };
  
  // Обработчик наведения на термин
  const handleTermHover = (term: string) => {
    setActiveTooltip(term);
  };
  
  // Обработчик ухода с термина
  const handleTermLeave = () => {
    setActiveTooltip(null);
  };

  // Эффективность решения (для индикаторов прогресса)
  const efficiencyMetrics = [
    { label: "Автоматизация", value: 82 },
    { label: "Скорость ответа", value: 95 },
    { label: "Точность", value: 89 },
    { label: "Удовлетворенность", value: 93 }
  ];

  // Функция для форматирования кода в технических терминах
  const formatCodeSnippets = (text: string) => {
    let processedText = text;
    
    // Находим все технические термины и оборачиваем их в код
    const codePattern = /`([^`]+)`/g;
    processedText = processedText.replace(codePattern, '<code class="inline-code">$1</code>');
    
    return processedText;
  };

  // Применяем все форматирования текста
  const formatText = (text: string) => {
    if (!text) return "";
    let processed = highlightTechTerms(text);
    processed = formatCodeSnippets(processed);
    return processed;
  };

  return (
    <CaseSection title="Предложенное решение">
      {/* Фирменные элементы дизайна (в фоне) */}
      <GridPattern className="pointer-events-none" />
      <WavePattern className="bottom-0" opacity={0.05} />
      <AdaptiveGradient />
      <NeuralRipple isDark={isDark} />
      
      <div className="relative z-10">
        {/* Описание решения */}
        <div className="mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto mb-6"
          >
            <h2 className={`${typography.headings.h2} mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
              Автоматизация поддержки клиентов с помощью ИИ-ассистента
            </h2>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="w-32 h-1 bg-gradient-to-r from-[#0167F3] to-[#399AFC] rounded-full mx-auto mb-6"
            />
            <p className={`text-lg max-w-3xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              {description}
            </p>
          </motion.div>

          {/* ИИ-ориентированная визуализация - СЕКЦИЯ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-16 relative"
          >
            <div className="text-center mb-12 relative z-10">
              <h3 className={`${typography.headings.h3} ${isDark ? "text-white" : "text-gray-900"}`}>
                Как мыслит ИИ-ассистент
              </h3>
              <div className="w-16 h-1 mx-auto bg-gradient-to-r from-[#0167F3] to-[#399AFC] rounded-full mt-2 mb-3"></div>
              <p className={`text-base max-w-3xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                Визуализация мыслительного процесса обработки запроса в реальном времени с точностью до миллисекунд
              </p>
            </div>
            
            <div className={`p-4 sm:p-6 rounded-2xl border shadow-lg ${
              isDark 
                ? "bg-gray-800/80 border-gray-700/50" 
                : "bg-white/90 border-gray-200/70"
            }`}>
              {/* Граф мыслительного процесса */}
              <div className="mb-10">
                <h4 className={`text-lg font-semibold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
                  Граф обработки запроса
                </h4>
                <div className="h-[400px] w-full">
                  <AIProcessGraph nodes={aiThoughtNodes} />
                </div>
                <div className={`mt-4 text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-blue-500/50 mr-2"></div>
                      <span>Входные данные</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-green-500/50 mr-2"></div>
                      <span>Процессы</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-yellow-500/50 mr-2"></div>
                      <span>База знаний</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-red-500/50 mr-2"></div>
                      <span>Результат</span>
                    </div>
                  </div>
                  <p className="text-center mt-3">
                    <i>💡 Перетаскивайте узлы для изучения связей и наведите для просмотра деталей</i>
                  </p>
                </div>
              </div>
              
              {/* Временная шкала обработки запроса */}
              <div className="mt-10">
                <AIProcessTimeline steps={aiProcessSteps} />
              </div>
            </div>
          </motion.div>
          
          {/* 3D-модель архитектуры ИИ-решения - НОВАЯ СЕКЦИЯ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-16 relative"
          >
            <div className="text-center mb-8 relative z-10">
              <h3 className={`${typography.headings.h3} ${isDark ? "text-white" : "text-gray-900"}`}>
                3D-архитектура ИИ-решения
              </h3>
              <div className="w-16 h-1 mx-auto bg-gradient-to-r from-[#0167F3] to-[#399AFC] rounded-full mt-2 mb-3"></div>
              <p className={`text-base max-w-3xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                Интерактивная трехмерная модель взаимодействия компонентов ИИ-системы с визуализацией потоков данных
              </p>
            </div>
            
            <div className={`p-4 sm:p-6 rounded-2xl border shadow-lg ${
              isDark 
                ? "bg-gray-800/80 border-gray-700/50" 
                : "bg-white/90 border-gray-200/70"
            }`}>
              {/* Управление фокусом на компонентах */}
              <div className="mb-4 flex flex-wrap gap-2 justify-center">
                <OrganicGrowthButton variant="primary" className="px-4 py-2">
                  <span>Полная система</span>
                  <NeuralPulse size="sm" className="ml-1" />
                </OrganicGrowthButton>
                <OrganicGrowthButton variant="outline" className="px-4 py-2">
                  Входные каналы
                </OrganicGrowthButton>
                <OrganicGrowthButton variant="outline" className="px-4 py-2">
                  Обработка запросов
                </OrganicGrowthButton>
                <OrganicGrowthButton variant="outline" className="px-4 py-2">
                  База знаний
                </OrganicGrowthButton>
                <OrganicGrowthButton variant="outline" className="px-4 py-2">
                  Генерация ответов
                </OrganicGrowthButton>
              </div>
              
              {/* Пояснение по управлению */}
              <div className={`mb-4 text-sm text-center ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                <p><i>💡 Используйте мышь для вращения, масштабирования и перемещения. Наведите на компонент для просмотра деталей.</i></p>
              </div>
              
              {/* 3D модель архитектуры */}
              <div className="h-[500px] w-full rounded-xl overflow-hidden border border-gray-200/20">
                <AIArchitecture3D />
              </div>
              
              {/* Легенда для компонентов */}
              <div className="mt-4 flex flex-wrap gap-4 justify-center">
                <div className="flex items-center">
                  <NeuralPulse color="blue" size="sm" className="mr-2" />
                  <span className={`text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}>Входные данные</span>
                </div>
                <div className="flex items-center">
                  <NeuralPulse color="green" size="sm" className="mr-2" />
                  <span className={`text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}>Процессинг</span>
                </div>
                <div className="flex items-center">
                  <NeuralPulse color="amber" size="sm" className="mr-2" />
                  <span className={`text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}>Хранилища данных</span>
                </div>
                <div className="flex items-center">
                  <NeuralPulse color="red" size="sm" className="mr-2" />
                  <span className={`text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}>Генерация ответов</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Интерактивный диалог с ИИ-ассистентом - СЕКЦИЯ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-16 relative"
          >
            <div className="text-center mb-8 relative z-10">
              <h3 className={`${typography.headings.h3} ${isDark ? "text-white" : "text-gray-900"}`}>
                Сценарии взаимодействия с клиентами
              </h3>
              <div className="w-16 h-1 mx-auto bg-gradient-to-r from-[#0167F3] to-[#399AFC] rounded-full mt-2 mb-3"></div>
              <p className={`text-base max-w-3xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                Выберите один из типовых сценариев для демонстрации работы ИИ-ассистента с реальными запросами клиентов
              </p>
            </div>
            
            <ChatSimulator />
          </motion.div>

          {/* Ключевые преимущества решения */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-16 relative"
          >
            {/* Волнистый паттерн под заголовком */}
            <WavePattern className="top-10" opacity={0.03} />
            
            <div className="text-center mb-8 relative z-10">
              <h3 className={`${typography.headings.h3} ${isDark ? "text-white" : "text-gray-900"}`}>
                Ключевые преимущества решения
              </h3>
              <div className="w-16 h-1 mx-auto bg-gradient-to-r from-[#0167F3] to-[#399AFC] rounded-full mt-2 mb-3"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
              {keyBenefits.map((benefit, index) => (
                <OrganicGrowthContainer key={index} delay={index * 0.2}>
                  <motion.div
                    className={`p-5 rounded-xl border shadow ${
                      isDark 
                        ? "bg-gradient-to-br from-gray-800/90 to-gray-900/90 border-gray-700/40"
                        : "bg-gradient-to-br from-white to-gray-50/95 border-gray-200/70"
                    }`}
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                        isDark 
                          ? `bg-gradient-to-br ${colorScheme.primary} text-white ${colorScheme.border}`
                          : `bg-gradient-to-br ${colorScheme.primary} ${colorScheme.text} ${colorScheme.border}`
                      }`}>
                        <benefit.icon className="w-5 h-5" />
                      </div>
                      <h4 className={`${typography.headings.h4} mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                        {benefit.title}
                      </h4>
                      <p className={`${typography.body.small} ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                </OrganicGrowthContainer>
              ))}
            </div>
          </motion.div>

          {/* Техническая секция и другие элементы */}
          {/* ... existing code ... */}
          
        </div>
      </div>
    </CaseSection>
  );
}