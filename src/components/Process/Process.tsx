'use client'

import { useTheme } from '@/context/ThemeContext'
import { useEffect, useRef, useState } from 'react'
import '../../style/card-line.css'
import '../../style/icon-animations.css'
import Container from '../ui/Container'

const Process = () => {
    const { isDark } = useTheme()
    const [isVisible, setIsVisible] = useState(false)
    const processRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.3 }
        )

        if (processRef.current) {
            observer.observe(processRef.current)
        }

        return () => {
            if (processRef.current) {
                observer.unobserve(processRef.current)
            }
        }
    }, [])

    return (
        <section className="py-20 dark:bg-black bg-white">
            <Container>
                <div className="text-center mb-16">
                    <div className={`inline-block px-4 py-1 rounded-full switch-box ${!isDark && 'light-switch-box'} text-sm mb-4`}>
                        Процесс
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold dark:text-white text-black mb-4">Автономные ИИ-решения</h2>
                    <p className="text-gray-500 dark:text-[#919191] max-w-2xl mx-auto max-[425px]:text-[14px]">
                        С нами ИИ становится простым, масштабируемым и всегда работает на улучшение вашего бизнеса.
                    </p>
                </div>

                <div ref={processRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1 - Исследование и кастомизация */}
                    <div className={isDark ? "p-[22px] process-card" : "p-[22px] light-process-card"}>
                        <div className={`w-16 h-16 ${isDark ? 'bg-blue-900/20' : 'bg-blue-100'} rounded-lg flex items-center justify-center mb-6 icon-animated ${isVisible ? 'active' : ''}`}>
                            <svg viewBox="0 0 24 24" width="32" height="32">
                                {/* Define gradients for icons */}
                                <defs>
                                    <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#60a5fa" />
                                        <stop offset="100%" stopColor="#3b82f6" />
                                    </linearGradient>
                                    <linearGradient id="blue-gradient-fill" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.3" />
                                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
                                    </linearGradient>
                                    <radialGradient id="glow-gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                                        <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.8" />
                                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
                                    </radialGradient>
                                </defs>

                                {/* Brain/AI representation with neural networks */}
                                <circle cx="12" cy="12" r="9" className="glow" />
                                <path d="M12 3 A9 9 0 0 1 12 21 A9 9 0 0 1 12 3" className="filled pulse" />

                                {/* Neural network nodes */}
                                <circle cx="8" cy="8" r="1.5" className="filled document-text" style={{ animationDelay: "0.1s" }} />
                                <circle cx="16" cy="8" r="1.5" className="filled document-text" style={{ animationDelay: "0.3s" }} />
                                <circle cx="12" cy="12" r="1.5" className="filled document-text" style={{ animationDelay: "0.5s" }} />
                                <circle cx="7" cy="15" r="1.5" className="filled document-text" style={{ animationDelay: "0.7s" }} />
                                <circle cx="17" cy="15" r="1.5" className="filled document-text" style={{ animationDelay: "0.9s" }} />

                                {/* Neural connections */}
                                <line x1="8" y1="8" x2="12" y2="12" className="document-line" style={{ animationDelay: "1.1s" }} />
                                <line x1="16" y1="8" x2="12" y2="12" className="document-line" style={{ animationDelay: "1.3s" }} />
                                <line x1="12" y1="12" x2="7" y2="15" className="document-line" style={{ animationDelay: "1.5s" }} />
                                <line x1="12" y1="12" x2="17" y2="15" className="document-line" style={{ animationDelay: "1.7s" }} />

                                {/* Data/search elements */}
                                <circle cx="20" cy="6" r="2" className="float" style={{ strokeWidth: "1" }} />
                                <line x1="19" y1="5" x2="21" y2="7" className="float" />
                                <line x1="21" y1="5" x2="19" y2="7" className="float" />

                                {/* Light particles/stars for effect */}
                                <circle cx="5" cy="10" r="0.5" className="particle" style={{ animationDelay: "0.2s" }} />
                                <circle cx="18" cy="12" r="0.5" className="particle" style={{ animationDelay: "0.5s" }} />
                                <circle cx="10" cy="6" r="0.5" className="particle" style={{ animationDelay: "0.8s" }} />
                                <circle cx="14" cy="18" r="0.5" className="particle" style={{ animationDelay: "1.1s" }} />
                            </svg>
                        </div>
                        <h3 className="text-[20px] font-bold dark:text-white text-gray-800 mb-3">Исследование и кастомизация</h3>
                        <p className="dark:text-[#919191] text-gray-600 max-[425px]:text-[14px]">
                            Мы начинаем с анализа потребностей вашего бизнеса и постановки целей, адаптируя ИИ-решения под уникальные требования вашей компании для достижения максимальных результатов.
                        </p>
                    </div>

                    {/* Card 2 - Бесшовная Интеграция ИИ */}
                    <div className={isDark ? "p-[22px] process-card" : "p-[22px] light-process-card"}>
                        <div className={`w-16 h-16 ${isDark ? 'bg-blue-900/20' : 'bg-blue-100'} rounded-lg flex items-center justify-center mb-6 icon-animated ${isVisible ? 'active' : ''}`}>
                            <svg viewBox="0 0 24 24" width="32" height="32">
                                {/* Use same gradient defs from first icon */}
                                <defs>
                                    <linearGradient id="blue-gradient-light" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#60a5fa" />
                                        <stop offset="100%" stopColor="#2563eb" />
                                    </linearGradient>
                                </defs>

                                {/* Integration glow */}
                                <circle cx="12" cy="12" r="10" className="glow" />

                                {/* Gears representing integration */}
                                <circle cx="8" cy="8" r="5" className="filled gear-spin" style={{ transformOrigin: "8px 8px" }} />
                                <circle cx="16" cy="16" r="5" className="filled gear-spin-reverse" style={{ transformOrigin: "16px 16px" }} />

                                {/* Gear teeth */}
                                <path d="M8 3 L8 5" className="gear-spin" style={{ transformOrigin: "8px 8px" }} />
                                <path d="M8 11 L8 13" className="gear-spin" style={{ transformOrigin: "8px 8px" }} />
                                <path d="M3 8 L5 8" className="gear-spin" style={{ transformOrigin: "8px 8px" }} />
                                <path d="M11 8 L13 8" className="gear-spin" style={{ transformOrigin: "8px 8px" }} />
                                <path d="M4.5 4.5 L6 6" className="gear-spin" style={{ transformOrigin: "8px 8px" }} />
                                <path d="M10 10 L11.5 11.5" className="gear-spin" style={{ transformOrigin: "8px 8px" }} />
                                <path d="M4.5 11.5 L6 10" className="gear-spin" style={{ transformOrigin: "8px 8px" }} />
                                <path d="M10 6 L11.5 4.5" className="gear-spin" style={{ transformOrigin: "8px 8px" }} />

                                <path d="M16 11 L16 13" className="gear-spin-reverse" style={{ transformOrigin: "16px 16px" }} />
                                <path d="M16 19 L16 21" className="gear-spin-reverse" style={{ transformOrigin: "16px 16px" }} />
                                <path d="M11 16 L13 16" className="gear-spin-reverse" style={{ transformOrigin: "16px 16px" }} />
                                <path d="M19 16 L21 16" className="gear-spin-reverse" style={{ transformOrigin: "16px 16px" }} />
                                <path d="M12.5 12.5 L14 14" className="gear-spin-reverse" style={{ transformOrigin: "16px 16px" }} />
                                <path d="M18 18 L19.5 19.5" className="gear-spin-reverse" style={{ transformOrigin: "16px 16px" }} />
                                <path d="M12.5 19.5 L14 18" className="gear-spin-reverse" style={{ transformOrigin: "16px 16px" }} />
                                <path d="M18 14 L19.5 12.5" className="gear-spin-reverse" style={{ transformOrigin: "16px 16px" }} />

                                {/* Integration dynamic connection showing data flow */}
                                <path
                                    d="M10.5 10.5 C 11.5 11.5, 12.5 12.5, 13.5 13.5"
                                    className="pulse"
                                    style={{ strokeWidth: "1.5" }}
                                />

                                {/* Digital data/particle flow */}
                                <circle cx="10.5" cy="10.5" r="1" className="float" style={{ animationDelay: "0.3s" }} />
                                <circle cx="12" cy="12" r="0.8" className="float" style={{ animationDelay: "0.6s" }} />
                                <circle cx="13.5" cy="13.5" r="1" className="float" style={{ animationDelay: "0.9s" }} />

                                {/* Circuit board pattern in background */}
                                <path d="M2 20 L6 20 L6 18 L10 18 L10 22" className="document-line" style={{ animationDelay: "1.5s", strokeWidth: "0.5" }} />
                                <path d="M22 4 L18 4 L18 8 L14 8 L14 2" className="document-line" style={{ animationDelay: "1.8s", strokeWidth: "0.5" }} />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold dark:text-white text-gray-800 mb-3">Бесшовная Интеграция ИИ</h3>
                        <p className="dark:text-[#919191] text-gray-600 max-[425px]:text-[14px]">
                            После разработки стратегии мы интегрируем наши ИИ-агенты непосредственно в ваши рабочие процессы, существующее ПО или платформы, обеспечивая беспрепятственную работу.
                        </p>
                    </div>

                    {/* Card 3 - Оптимизация и Поддержка */}
                    <div className={isDark ? "p-[22px] process-card" : "p-[22px] light-process-card"}>
                        <div className={`w-16 h-16 ${isDark ? 'bg-blue-900/20' : 'bg-blue-100'} rounded-lg flex items-center justify-center mb-6 icon-animated ${isVisible ? 'active' : ''}`}>
                            <svg viewBox="0 0 24 24" width="32" height="32">
                                {/* Use gradient defs */}
                                <defs>
                                    <linearGradient id="growth-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#60a5fa" />
                                        <stop offset="100%" stopColor="#3b82f6" />
                                    </linearGradient>
                                </defs>

                                {/* Background glow effect */}
                                <rect x="2" y="4" width="20" height="16" rx="2" className="glow" />

                                {/* Dashboard/Analytics board */}
                                <rect x="2" y="4" width="20" height="16" rx="2" className="filled" />

                                {/* Graph base */}
                                <line x1="4" y1="18" x2="20" y2="18" className="document-line" style={{ animationDelay: "0.2s" }} />
                                <line x1="4" y1="18" x2="4" y2="6" className="document-line" style={{ animationDelay: "0.4s" }} />

                                {/* Growth chart with animation */}
                                <polyline
                                    points="4,16 8,14 12,15 16,10 20,6"
                                    className="document-line"
                                    style={{ animationDelay: "0.8s", strokeWidth: "2" }}
                                />

                                {/* Dynamic data points */}
                                <circle cx="4" cy="16" r="1" className="filled graph-point" style={{ animationDelay: "1.0s" }} />
                                <circle cx="8" cy="14" r="1" className="filled graph-point" style={{ animationDelay: "1.2s" }} />
                                <circle cx="12" cy="15" r="1" className="filled graph-point" style={{ animationDelay: "1.4s" }} />
                                <circle cx="16" cy="10" r="1" className="filled graph-point" style={{ animationDelay: "1.6s" }} />
                                <circle cx="20" cy="6" r="1.5" className="filled graph-point" style={{ animationDelay: "1.8s" }} />

                                {/* Bar chart in background showing growth */}
                                <rect x="6" y="14" width="1.5" height="4" className="filled graph-line" style={{ animationDelay: "2.0s" }} />
                                <rect x="10" y="12" width="1.5" height="6" className="filled graph-line" style={{ animationDelay: "2.2s" }} />
                                <rect x="14" y="10" width="1.5" height="8" className="filled graph-line" style={{ animationDelay: "2.4s" }} />
                                <rect x="18" y="8" width="1.5" height="10" className="filled graph-line" style={{ animationDelay: "2.6s" }} />

                                {/* Support elements - human figure and gear */}
                                <circle cx="7" cy="7" r="1.5" className="bounce" style={{ animationDelay: "0.2s" }} />
                                <path d="M5.5 9 C 7 12, 7 12, 8.5 9" className="bounce" style={{ animationDelay: "0.2s" }} />

                                {/* Support gear - rotates to show ongoing optimization */}
                                <circle cx="17" cy="15" r="2" className="filled gear-spin" style={{ animationDelay: "1s" }} />
                                <path d="M17 13 L17 12" className="gear-spin" style={{ transformOrigin: "17px 15px" }} />
                                <path d="M17 18 L17 17" className="gear-spin" style={{ transformOrigin: "17px 15px" }} />
                                <path d="M15 15 L14 15" className="gear-spin" style={{ transformOrigin: "17px 15px" }} />
                                <path d="M20 15 L19 15" className="gear-spin" style={{ transformOrigin: "17px 15px" }} />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold dark:text-white text-gray-800 mb-3">Оптимизация и Поддержка</h3>
                        <p className="dark:text-[#919191] text-gray-600 max-[425px]:text-[14px]">
                            С нашей ежемесячной подпиской вы получаете постоянную оптимизацию ИИ, мониторинг производительности и круглосуточную поддержку, обеспечивая бесперебойную работу и развитие вашего бизнеса.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Process 