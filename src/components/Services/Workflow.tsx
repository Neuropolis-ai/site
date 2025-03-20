'use client'

import { useTheme } from '@/context/ThemeContext'
import Image from "next/image"
import { useEffect, useRef, useState } from 'react'


const Workflow = () => {
    const { isDark } = useTheme()
    const [isWorkflowVisible, setIsWorkflowVisible] = useState(false)
    const workflowRef = useRef(null)
    const chatRef = useRef(null)
    const aiAgentRef = useRef(null)

    // Workflow animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsWorkflowVisible(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.3 }
        )

        const currentRef = workflowRef.current

        if (currentRef) {
            observer.observe(currentRef)
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef)
            }
        }
    }, [])

    // Чат-анимация
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Когда чат становится видимым, запускаем анимацию
                if (entry.isIntersecting) {

                }
            },
            { threshold: 0.3 }
        )

        const currentRef = chatRef.current

        if (currentRef) {
            observer.observe(currentRef)
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef)
            }
        }
    }, [])

    // AI линии анимация
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Когда AI-агент становится видимым, запускаем анимацию линий
                if (entry.isIntersecting) {
                }
            },
            { threshold: 0.3 }
        )

        const currentRef = aiAgentRef.current

        if (currentRef) {
            observer.observe(currentRef)
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef)
            }
        }
    }, [])

    return (
        <div>
            {/* Workflow Automation Card */}
            <div className={`w-full lg:w-[523px] p-[20px] rounded-xl border border-[#262626] overflow-hidden ${isDark ? 'process-card' : 'bg-gray-50 border-gray-200'}`}>
                {/* First row of icons */}
                <div
                    ref={workflowRef}
                    className={`py-[30px] sm:py-[50px] flex flex-col items-center gap-[20px] sm:gap-[30px] overflow-hidden w-full ${isDark ? 'ai-card' : 'bg-white rounded-xl border border-gray-100'} ${isWorkflowVisible ? 'workflow-animation workflow-visible' : ''}`}
                    style={{ mask: 'linear-gradient(rgb(0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%)' }}
                >
                    <div className='w-full flex items-center gap-[4px] sm:gap-[8px] overflow-x-auto pb-2 sm:overflow-hidden workflow-row' style={{ mask: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)' }}>
                        <div className="flex-shrink-0 w-[40px] h-[40px] sm:w-[52px] sm:h-[52px] icon-box" style={{ animationDelay: '0.1s' }}>
                            <Image src={'https://framerusercontent.com/images/7ccIrhplk721bhbtvb1UCavI.svg'} alt="w" width={28} height={28} className="sm:w-[36px] sm:h-[36px]" />
                        </div>
                        <div className="flex-shrink-0 circle-container">
                            <span className="circle"></span>
                            <span className="line"></span>
                            <span className="circle"></span>
                        </div>
                        <div className="flex-shrink-0 w-[40px] h-[40px] sm:w-[52px] sm:h-[52px] icon-box" style={{ animationDelay: '0.2s' }}>
                            <Image src={'https://framerusercontent.com/images/qc6WiaOLMJCgLjRA2nE1Poq3zLk.svg'} alt="w" width={28} height={28} className="sm:w-[36px] sm:h-[36px]" />
                        </div>
                        <div className="flex-shrink-0 circle-container">
                            <span className="circle"></span>
                            <span className="line"></span>
                            <span className="circle"></span>
                        </div>
                        <div className="flex-shrink-0 w-[40px] h-[40px] sm:w-[52px] sm:h-[52px] icon-box" style={{ animationDelay: '0.3s' }}>
                            <Image src={'https://framerusercontent.com/images/8y8OLtsq3aj0TJnWcRwlcPqvWE.svg'} alt="w" width={28} height={28} className="sm:w-[36px] sm:h-[36px]" />
                        </div>
                        <div className="flex-shrink-0 circle-container">
                            <span className="circle"></span>
                            <span className="line"></span>
                            <span className="circle"></span>
                        </div>
                        <div className="flex-shrink-0 w-[40px] h-[40px] sm:w-[52px] sm:h-[52px] icon-box" style={{ animationDelay: '0.4s' }}>
                            <Image src={'https://framerusercontent.com/images/ScGavdIdTjHTgHXBhFQXusFFEn4.svg'} alt="w" width={28} height={28} className="sm:w-[36px] sm:h-[36px]" />
                        </div>
                        <div className="flex-shrink-0 circle-container">
                            <span className="circle"></span>
                            <span className="line"></span>
                            <span className="circle"></span>
                        </div>
                        <div className="flex-shrink-0 w-[40px] h-[40px] sm:w-[52px] sm:h-[52px] icon-box" style={{ animationDelay: '0.5s' }}>
                            <Image src={'https://framerusercontent.com/images/7ccIrhplk721bhbtvb1UCavI.svg'} alt="w" width={28} height={28} className="sm:w-[36px] sm:h-[36px]" />
                        </div>
                        <div className="flex-shrink-0 circle-container">
                            <span className="circle"></span>
                            <span className="line"></span>
                            <span className="circle"></span>
                        </div>
                        <div className="flex-shrink-0 w-[40px] h-[40px] sm:w-[52px] sm:h-[52px] icon-box" style={{ animationDelay: '0.6s' }}>
                            <Image src={'https://framerusercontent.com/images/qc6WiaOLMJCgLjRA2nE1Poq3zLk.svg'} alt="w" width={28} height={28} className="sm:w-[36px] sm:h-[36px]" />
                        </div>
                        <div className="flex-shrink-0 circle-container">
                            <span className="circle"></span>
                            <span className="line"></span>
                            <span className="circle"></span>
                        </div>
                        <div className="flex-shrink-0 w-[40px] h-[40px] sm:w-[52px] sm:h-[52px] icon-box" style={{ animationDelay: '0.7s' }}>
                            <Image src={'https://framerusercontent.com/images/8y8OLtsq3aj0TJnWcRwlcPqvWE.svg'} alt="w" width={28} height={28} className="sm:w-[36px] sm:h-[36px]" />
                        </div>
                        <div className="flex-shrink-0 circle-container">
                            <span className="circle"></span>
                            <span className="line"></span>
                            <span className="circle"></span>
                        </div>
                        <div className="flex-shrink-0 w-[40px] h-[40px] sm:w-[52px] sm:h-[52px] icon-box" style={{ animationDelay: '0.8s' }}>
                            <Image src={'https://framerusercontent.com/images/ScGavdIdTjHTgHXBhFQXusFFEn4.svg'} alt="w" width={28} height={28} className="sm:w-[36px] sm:h-[36px]" />
                        </div>
                    </div>
                    <div className='w-full flex items-center gap-[4px] sm:gap-[8px] overflow-x-auto pb-2 sm:overflow-hidden workflow-row' style={{ mask: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)' }}>
                        <div className="flex-shrink-0 w-[40px] h-[40px] sm:w-[52px] sm:h-[52px] icon-box" style={{ animationDelay: '0.2s' }}>
                            <Image src={'https://framerusercontent.com/images/hvfBGbwc1AsKFtdq8R2VcwHAv0A.svg'} alt="w" width={28} height={28} className="sm:w-[36px] sm:h-[36px]" />
                        </div>
                        <div className="flex-shrink-0 circle-container">
                            <span className="circle"></span>
                            <span className="line"></span>
                            <span className="circle"></span>
                        </div>
                        <div className="flex-shrink-0 w-[40px] h-[40px] sm:w-[52px] sm:h-[52px] icon-box" style={{ animationDelay: '0.3s' }}>
                            <Image src={'https://framerusercontent.com/images/YcyG9QsC7RV1Onc50wyEXquv1k.svg'} alt="w" width={28} height={28} className="sm:w-[36px] sm:h-[36px]" />
                        </div>
                        <div className="flex-shrink-0 circle-container">
                            <span className="circle"></span>
                            <span className="line"></span>
                            <span className="circle"></span>
                        </div>
                        <div className="flex-shrink-0 w-[40px] h-[40px] sm:w-[52px] sm:h-[52px] icon-box" style={{ animationDelay: '0.4s' }}>
                            <Image src={'https://framerusercontent.com/images/ZokCuPJkR8AKgTToaXlDYY95I.svg'} alt="w" width={28} height={28} className="sm:w-[36px] sm:h-[36px]" />
                        </div>
                        <div className="flex-shrink-0 circle-container">
                            <span className="circle"></span>
                            <span className="line"></span>
                            <span className="circle"></span>
                        </div>
                        <div className="flex-shrink-0 w-[40px] h-[40px] sm:w-[52px] sm:h-[52px] icon-box" style={{ animationDelay: '0.5s' }}>
                            <Image src={'https://framerusercontent.com/images/Kjci2ZiHnCXWVjKZxU9rwu3GSfI.svg'} alt="w" width={28} height={28} className="sm:w-[36px] sm:h-[36px]" />
                        </div>
                        <div className="flex-shrink-0 circle-container">
                            <span className="circle"></span>
                            <span className="line"></span>
                            <span className="circle"></span>
                        </div>
                        <div className="flex-shrink-0 w-[40px] h-[40px] sm:w-[52px] sm:h-[52px] icon-box" style={{ animationDelay: '0.6s' }}>
                            <Image src={'https://framerusercontent.com/images/hvfBGbwc1AsKFtdq8R2VcwHAv0A.svg'} alt="w" width={28} height={28} className="sm:w-[36px] sm:h-[36px]" />
                        </div>
                        <div className="flex-shrink-0 circle-container">
                            <span className="circle"></span>
                            <span className="line"></span>
                            <span className="circle"></span>
                        </div>
                        <div className="flex-shrink-0 w-[40px] h-[40px] sm:w-[52px] sm:h-[52px] icon-box" style={{ animationDelay: '0.7s' }}>
                            <Image src={'https://framerusercontent.com/images/YcyG9QsC7RV1Onc50wyEXquv1k.svg'} alt="w" width={28} height={28} className="sm:w-[36px] sm:h-[36px]" />
                        </div>
                        <div className="flex-shrink-0 circle-container">
                            <span className="circle"></span>
                            <span className="line"></span>
                            <span className="circle"></span>
                        </div>
                        <div className="flex-shrink-0 w-[40px] h-[40px] sm:w-[52px] sm:h-[52px] icon-box" style={{ animationDelay: '0.8s' }}>
                            <Image src={'https://framerusercontent.com/images/ZokCuPJkR8AKgTToaXlDYY95I.svg'} alt="w" width={28} height={28} className="sm:w-[36px] sm:h-[36px]" />
                        </div>
                        <div className="flex-shrink-0 circle-container">
                            <span className="circle"></span>
                            <span className="line"></span>
                            <span className="circle"></span>
                        </div>
                        <div className="flex-shrink-0 w-[40px] h-[40px] sm:w-[52px] sm:h-[52px] icon-box" style={{ animationDelay: '0.9s' }}>
                            <Image src={'https://framerusercontent.com/images/Kjci2ZiHnCXWVjKZxU9rwu3GSfI.svg'} alt="w" width={28} height={28} className="sm:w-[36px] sm:h-[36px]" />
                        </div>
                        <div className="flex-shrink-0 circle-container">
                            <span className="circle"></span>
                            <span className="line"></span>
                            <span className="circle"></span>
                        </div>
                    </div>
                </div>

                <div>
                    <h4 className=" font-medium text-base sm:text-lg mb-1 sm:mb-2 dark:text-white text-gray-800">Автоматизация рабочих процессов</h4>
                    <p className="dark:text-[#919191] text-gray-600 text-xs sm:text-sm">
                        Мы помогаем компаниям интегрировать инструменты ИИ в существующие программные платформы, CRM-системы или маркетинговые каналы.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Workflow
