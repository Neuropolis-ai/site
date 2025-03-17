'use client'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import '../../style/card-line.css'
import '../../style/hero.css'
import '../../style/services.css'
import Container from '../ui/Container'

const Services = () => {
    const [isChartVisible, setIsChartVisible] = useState(false)
    const chartRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setIsChartVisible(true)
                        // Once triggered, we can disconnect the observer
                        observer.disconnect()
                    }
                })
            },
            {
                threshold: 0.3, // Trigger when at least 30% of the element is visible
            }
        )

        if (chartRef.current) {
            observer.observe(chartRef.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <section id="services" className="services-section pt-20 pb-14">
            <Container>
                <div className="text-center mb-16 relative z-10">
                    <div className="inline-block px-4 py-1 rounded-full bg-white/10 text-white text-sm mb-4 switch-box">
                        Цифровая трансформация
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Как ИИ может трансформировать ваш бизнес</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Наши решения на базе ИИ оптимизируют эффективность, повышают продуктивность и обеспечивают измеримые результаты для вашего бизнеса.
                    </p>
                </div>

                <div className="flex relative flex-wrap gap-6 z-10">
                    <div className='flex flex-col lg:flex-row gap-6 w-full'>
                        {/* AI Assistant Card */}
                        <div className="w-full lg:w-[732px] p-[20px] max-[425px]:p-[12px] bg-[#050A1B] rounded-xl overflow-hidden process-card">
                            <div className="p-6 ai-card relative">
                                <div className="flex items-center justify-end mb-4 gap-[7px]">
                                    <div>
                                        <h3 className="text-[#a8a8a8] font-medium text-end text-[14px] max-[425px]:text-[12px]">Клиент</h3>
                                        <p className='absolute top-[60px] max-[425px]:top-[50px] right-[67px] text-gray-400 text-sm text-end max-[425px]:text-[10px] leading-0'>Как вы может помочь улучшить мои бизнес-процессы?
                                        </p>

                                    </div>
                                    <div className="user-oval">
                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.5124 16.4627C16.3821 14.5085 14.6402 13.1073 12.6073 12.443C13.6129 11.8444 14.3941 10.9323 14.8311 9.8467C15.268 8.76112 15.3366 7.5621 15.0262 6.4338C14.7157 5.30549 14.0435 4.31028 13.1127 3.60099C12.1819 2.89171 11.0441 2.50757 9.87384 2.50757C8.70361 2.50757 7.56574 2.89171 6.63496 3.60099C5.70417 4.31028 5.03196 5.30549 4.72153 6.4338C4.41111 7.5621 4.47964 8.76112 4.91661 9.8467C5.35358 10.9323 6.13483 11.8444 7.14037 12.443C5.10751 13.1065 3.3656 14.5078 2.23525 16.4627C2.1938 16.5303 2.1663 16.6055 2.15439 16.6839C2.14247 16.7623 2.14638 16.8423 2.16587 16.9191C2.18537 16.996 2.22006 17.0681 2.2679 17.1314C2.31574 17.1946 2.37576 17.2476 2.44442 17.2873C2.51307 17.3269 2.58898 17.3524 2.66765 17.3623C2.74633 17.3721 2.82618 17.3661 2.90249 17.3446C2.97881 17.3231 3.05004 17.2865 3.11199 17.237C3.17393 17.1875 3.22534 17.1261 3.26318 17.0565C4.66146 14.6399 7.13294 13.1971 9.87384 13.1971C12.6147 13.1971 15.0862 14.6399 16.4845 17.0565C16.5223 17.1261 16.5738 17.1875 16.6357 17.237C16.6976 17.2865 16.7689 17.3231 16.8452 17.3446C16.9215 17.3661 17.0014 17.3721 17.08 17.3623C17.1587 17.3524 17.2346 17.3269 17.3033 17.2873C17.3719 17.2476 17.4319 17.1946 17.4798 17.1314C17.5276 17.0681 17.5623 16.996 17.5818 16.9191C17.6013 16.8423 17.6052 16.7623 17.5933 16.6839C17.5814 16.6055 17.5539 16.5303 17.5124 16.4627ZM5.71759 7.85334C5.71759 7.03131 5.96135 6.22774 6.41805 5.54425C6.87474 4.86076 7.52386 4.32804 8.28331 4.01346C9.04277 3.69889 9.87845 3.61658 10.6847 3.77695C11.4909 3.93732 12.2315 4.33316 12.8128 4.91442C13.394 5.49569 13.7899 6.23626 13.9502 7.04249C14.1106 7.84873 14.0283 8.68441 13.7137 9.44387C13.3991 10.2033 12.8664 10.8524 12.1829 11.3091C11.4994 11.7658 10.6959 12.0096 9.87384 12.0096C8.7719 12.0084 7.71543 11.5701 6.93623 10.7909C6.15704 10.0118 5.71877 8.95528 5.71759 7.85334Z" fill="white" />
                                        </svg>
                                    </div>
                                </div>

                                <div className='flex gap-4 mt-[30px] max-[425px]:gap-2 max-[425px]:mt-[40px] '>
                                    <div className='ai-oval w-[39px] h-[39px]'>
                                        AI
                                    </div>
                                    <div>
                                        <h4 className='text-[#a8a8a8] text-[14px] font-medium max-[425px]:text-[12px]'>ИИ-агент</h4>
                                        <p className='max-w-[400px] text-gray-400 text-[14px] max-[425px]:text-[10px]'>Наша компания может значительно улучшить ваши бизнес-процессы, используя искусственный интеллект и ИИ-агентов для</p>
                                    </div>
                                </div>
                            </div>
                            <div className='chat-box p-[12px] sm:p-[15px] mt-[10px] mb-[15px] sm:mb-[20px]' style={{ mask: 'linear-gradient(rgb(0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%)' }}>
                                <div className='flex items-center justify-between' >
                                    <div className='flex gap-[8px] sm:gap-[10px]'>
                                        <svg width={14} height={14} className="sm:w-[16px] sm:h-[16px]" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.9886 7.79671C13.0322 7.84025 13.0668 7.89195 13.0904 7.94885C13.114 8.00576 13.1261 8.06675 13.1261 8.12836C13.1261 8.18996 13.114 8.25095 13.0904 8.30786C13.0668 8.36476 13.0322 8.41646 12.9886 8.46L8.181 13.2647C7.56554 13.8801 6.73083 14.2258 5.86048 14.2257C4.99014 14.2256 4.15547 13.8799 3.54009 13.2644C2.9247 12.6489 2.57901 11.8142 2.57907 10.9439C2.57912 10.0735 2.92492 9.23886 3.54038 8.62347L9.35639 2.72191C9.79579 2.28205 10.3919 2.03475 11.0136 2.03442C11.6354 2.03409 12.2318 2.28076 12.6716 2.72015C13.1115 3.15955 13.3588 3.75568 13.3591 4.37741C13.3594 4.99913 13.1128 5.59553 12.6734 6.03539L6.8562 11.9369C6.59202 12.2011 6.23371 12.3495 5.86011 12.3495C5.4865 12.3495 5.12819 12.2011 4.86401 11.9369C4.59983 11.6728 4.45142 11.3145 4.45142 10.9409C4.45142 10.5672 4.59983 10.2089 4.86401 9.94476L9.74487 4.98656C9.78763 4.94095 9.83908 4.90435 9.89619 4.87892C9.9533 4.85349 10.0149 4.83974 10.0774 4.83848C10.1399 4.83723 10.2021 4.84848 10.2601 4.8716C10.3182 4.89471 10.3711 4.9292 10.4157 4.97306C10.4602 5.01691 10.4956 5.06923 10.5196 5.12695C10.5436 5.18466 10.5559 5.2466 10.5556 5.30911C10.5553 5.37163 10.5426 5.43346 10.5181 5.49097C10.4935 5.54848 10.4578 5.6005 10.4128 5.64398L5.53139 10.6075C5.48769 10.6508 5.45295 10.7024 5.42917 10.7591C5.40538 10.8159 5.39301 10.8768 5.39277 10.9384C5.39252 11 5.40441 11.061 5.42774 11.118C5.45107 11.1749 5.4854 11.2267 5.52876 11.2704C5.57212 11.3142 5.62366 11.3489 5.68044 11.3727C5.73723 11.3965 5.79814 11.4088 5.85971 11.4091C5.92127 11.4093 5.98228 11.3974 6.03925 11.3741C6.09622 11.3508 6.14804 11.3164 6.19175 11.2731L12.0083 5.37445C12.2725 5.11081 12.4212 4.75303 12.4215 4.37981C12.4219 4.00658 12.274 3.64849 12.0104 3.38431C11.7468 3.12013 11.389 2.9715 11.0158 2.97112C10.6425 2.97073 10.2844 3.11863 10.0203 3.38226L4.20542 9.28148C3.98758 9.49897 3.81472 9.75724 3.69669 10.0415C3.57867 10.3258 3.5178 10.6306 3.51755 10.9384C3.51731 11.2462 3.5777 11.5511 3.69527 11.8356C3.81284 12.12 3.98529 12.3786 4.20278 12.5964C4.42027 12.8143 4.67854 12.9871 4.96283 13.1051C5.24713 13.2232 5.55189 13.284 5.85971 13.2843C6.16753 13.2845 6.47238 13.2241 6.75687 13.1066C7.04135 12.989 7.29989 12.8165 7.51772 12.5991L12.3259 7.79437C12.4141 7.70684 12.5335 7.65792 12.6578 7.65836C12.782 7.6588 12.901 7.70856 12.9886 7.79671Z" fill="#919191" />
                                        </svg><svg width={14} height={14} className="sm:w-[16px] sm:h-[16px]" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.3601 2.97217H3.04761C2.79897 2.97217 2.56051 3.07094 2.38469 3.24676C2.20888 3.42257 2.11011 3.66103 2.11011 3.90967V12.3472C2.11011 12.5958 2.20888 12.8343 2.38469 13.0101C2.56051 13.1859 2.79897 13.2847 3.04761 13.2847H13.3601C13.6087 13.2847 13.8472 13.1859 14.023 13.0101C14.1988 12.8343 14.2976 12.5958 14.2976 12.3472V3.90967C14.2976 3.66103 14.1988 3.42257 14.023 3.24676C13.8472 3.07094 13.6087 2.97217 13.3601 2.97217ZM13.3601 3.90967V9.93018L11.8326 8.40322C11.7455 8.31615 11.6422 8.24707 11.5284 8.19994C11.4146 8.15282 11.2927 8.12856 11.1696 8.12856C11.0464 8.12856 10.9245 8.15282 10.8108 8.19994C10.697 8.24707 10.5936 8.31615 10.5066 8.40322L9.33472 9.5751L6.75659 6.99697C6.58079 6.82129 6.34243 6.7226 6.0939 6.7226C5.84536 6.7226 5.607 6.82129 5.4312 6.99697L3.04761 9.38057V3.90967H13.3601ZM3.04761 10.7065L6.09448 7.65967L10.782 12.3472H3.04761V10.7065ZM13.3601 12.3472H12.108L9.99858 10.2378L11.1705 9.06592L13.3601 11.2562V12.3472ZM9.14136 6.48779C9.14136 6.34873 9.1826 6.21279 9.25986 6.09716C9.33712 5.98153 9.44693 5.89141 9.57541 5.83819C9.70389 5.78497 9.84526 5.77105 9.98166 5.79818C10.118 5.82531 10.2433 5.89227 10.3417 5.99061C10.44 6.08894 10.507 6.21423 10.5341 6.35062C10.5612 6.48701 10.5473 6.62839 10.4941 6.75687C10.4409 6.88535 10.3507 6.99516 10.2351 7.07242C10.1195 7.14968 9.98355 7.19092 9.84448 7.19092C9.658 7.19092 9.47916 7.11684 9.3473 6.98498C9.21544 6.85312 9.14136 6.67427 9.14136 6.48779Z" fill="#919191" />
                                        </svg>
                                    </div>
                                    <svg width={14} height={14} className="sm:w-[16px] sm:h-[16px]" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_1_580)">
                                            <path d="M1.72087 7.84632L1.21787 3.31532C1.07387 2.01832 2.40887 1.06632 3.58787 1.62532L13.5409 6.34032C14.8119 6.94132 14.8119 8.75032 13.5409 9.35132L3.58787 14.0673C2.40887 14.6263 1.07387 13.6743 1.21787 12.3773L1.72087 7.84632ZM1.72087 7.84632H7.55487" stroke="#919191" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1_580">
                                                <rect width={15} height={15} fill="white" transform="translate(0.37384 0.628418)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>

                            <div >
                                <h4 className="text-white font-medium text-base sm:text-lg mb-1 sm:mb-2 ">Чат-боты для поддержки клиентов</h4>
                                <p className="text-gray-400 text-xs sm:text-sm">
                                    Разработка индивидуальных чат-ботов на базе NLP, которые автоматизируют обслуживание клиентов и выполняют другие бизнес-задачи.
                                </p>
                            </div>
                        </div>

                        {/* Machine Learning Models Card */}
                        <div className="w-full lg:w-[523px] p-[20px] bg-[#050A1B] rounded-xl border border-[#262626] overflow-hidden process-card">
                            <div className="ai-agent flex items-center justify-center h-[180px] sm:h-[240px]" style={{ mask: 'linear-gradient(rgb(0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%)' }}>
                                <div className="ai-agent-box w-[80px] h-[80px] sm:w-[100px] sm:h-[100px]">
                                    <span className="ai-agent-text text-[28px] sm:text-[36px]">AI</span>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-white font-medium text-base sm:text-lg mb-1 sm:mb-2">Автономные ИИ-агенты</h4>
                                <p className="text-gray-400 text-xs sm:text-sm">
                                    Разработка интеллектуальных агентов, которые могут самостоятельно выполнять задачи, анализировать данные и принимать решения.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col lg:flex-row gap-6 w-full'>
                        {/* Workflow Automation Card */}
                        <div className="w-full lg:w-[523px] p-[20px] bg-[#050A1B] rounded-xl border border-[#262626] overflow-hidden process-card">
                            {/* First row of icons */}
                            <div className="ai-card py-[30px] sm:py-[50px] flex flex-col items-center gap-[20px] sm:gap-[30px] overflow-hidden w-full" style={{ mask: 'linear-gradient(rgb(0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%)' }}>
                                <div className='w-full flex items-center gap-[4px] sm:gap-[8px] overflow-x-auto pb-2 sm:overflow-hidden' style={{ mask: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)' }}>
                                    <div className="flex-shrink-0 w-[40px] h-[40px] sm:w-[52px] sm:h-[52px] icon-box">
                                        <Image src={'https://framerusercontent.com/images/7ccIrhplk721bhbtvb1UCavI.svg'} alt="w" width={28} height={28} className="sm:w-[36px] sm:h-[36px]" />
                                    </div>
                                    <div className="flex-shrink-0 circle-container">
                                        <span className="circle"></span>
                                        <span className="line"></span>
                                        <span className="circle"></span>
                                    </div>
                                    <div className="flex-shrink-0 w-[40px] h-[40px] sm:w-[52px] sm:h-[52px] icon-box">
                                        <Image src={'https://framerusercontent.com/images/qc6WiaOLMJCgLjRA2nE1Poq3zLk.svg'} alt="w" width={28} height={28} className="sm:w-[36px] sm:h-[36px]" />
                                    </div>
                                    <div className="flex-shrink-0 circle-container">
                                        <span className="circle"></span>
                                        <span className="line"></span>
                                        <span className="circle"></span>
                                    </div>
                                    <div className="flex-shrink-0 w-[40px] h-[40px] sm:w-[52px] sm:h-[52px] icon-box">
                                        <Image src={'https://framerusercontent.com/images/8y8OLtsq3aj0TJnWcRwlcPqvWE.svg'} alt="w" width={28} height={28} className="sm:w-[36px] sm:h-[36px]" />
                                    </div>
                                    <div className="flex-shrink-0 circle-container">
                                        <span className="circle"></span>
                                        <span className="line"></span>
                                        <span className="circle"></span>
                                    </div>
                                    <div className="flex-shrink-0 w-[40px] h-[40px] sm:w-[52px] sm:h-[52px] icon-box">
                                        <Image src={'https://framerusercontent.com/images/ScGavdIdTjHTgHXBhFQXusFFEn4.svg'} alt="w" width={28} height={28} className="sm:w-[36px] sm:h-[36px]" />
                                    </div>
                                    <div className="flex-shrink-0 circle-container">
                                        <span className="circle"></span>
                                        <span className="line"></span>
                                        <span className="circle"></span>
                                    </div>
                                    <div className="flex-shrink-0 w-[40px] h-[40px] sm:w-[52px] sm:h-[52px] icon-box">
                                        <Image src={'https://framerusercontent.com/images/7ccIrhplk721bhbtvb1UCavI.svg'} alt="w" width={28} height={28} className="sm:w-[36px] sm:h-[36px]" />
                                    </div>
                                    <div className="flex-shrink-0 circle-container">
                                        <span className="circle"></span>
                                        <span className="line"></span>
                                        <span className="circle"></span>
                                    </div>
                                    <div className="flex-shrink-0 w-[40px] h-[40px] sm:w-[52px] sm:h-[52px] icon-box">
                                        <Image src={'https://framerusercontent.com/images/qc6WiaOLMJCgLjRA2nE1Poq3zLk.svg'} alt="w" width={28} height={28} className="sm:w-[36px] sm:h-[36px]" />
                                    </div>
                                    <div className="flex-shrink-0 circle-container">
                                        <span className="circle"></span>
                                        <span className="line"></span>
                                        <span className="circle"></span>
                                    </div>
                                    <div className="flex-shrink-0 w-[40px] h-[40px] sm:w-[52px] sm:h-[52px] icon-box">
                                        <Image src={'https://framerusercontent.com/images/8y8OLtsq3aj0TJnWcRwlcPqvWE.svg'} alt="w" width={28} height={28} className="sm:w-[36px] sm:h-[36px]" />
                                    </div>
                                    <div className="flex-shrink-0 circle-container">
                                        <span className="circle"></span>
                                        <span className="line"></span>
                                        <span className="circle"></span>
                                    </div>
                                    <div className="flex-shrink-0 w-[40px] h-[40px] sm:w-[52px] sm:h-[52px] icon-box">
                                        <Image src={'https://framerusercontent.com/images/ScGavdIdTjHTgHXBhFQXusFFEn4.svg'} alt="w" width={28} height={28} className="sm:w-[36px] sm:h-[36px]" />
                                    </div>
                                </div>
                                <div className='w-full flex items-center gap-[4px] sm:gap-[8px] overflow-x-auto pb-2 sm:overflow-hidden' style={{ mask: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)' }}>
                                    <div className="flex-shrink-0 w-[40px] h-[40px] sm:w-[52px] sm:h-[52px] icon-box">
                                        <Image src={'https://framerusercontent.com/images/hvfBGbwc1AsKFtdq8R2VcwHAv0A.svg'} alt="w" width={28} height={28} className="sm:w-[36px] sm:h-[36px]" />
                                    </div>
                                    <div className="flex-shrink-0 circle-container">
                                        <span className="circle"></span>
                                        <span className="line"></span>
                                        <span className="circle"></span>
                                    </div>
                                    <div className="flex-shrink-0 w-[40px] h-[40px] sm:w-[52px] sm:h-[52px] icon-box">
                                        <Image src={'https://framerusercontent.com/images/YcyG9QsC7RV1Onc50wyEXquv1k.svg'} alt="w" width={28} height={28} className="sm:w-[36px] sm:h-[36px]" />
                                    </div>
                                    <div className="flex-shrink-0 circle-container">
                                        <span className="circle"></span>
                                        <span className="line"></span>
                                        <span className="circle"></span>
                                    </div>
                                    <div className="flex-shrink-0 w-[40px] h-[40px] sm:w-[52px] sm:h-[52px] icon-box">
                                        <Image src={'https://framerusercontent.com/images/ZokCuPJkR8AKgTToaXlDYY95I.svg'} alt="w" width={28} height={28} className="sm:w-[36px] sm:h-[36px]" />
                                    </div>
                                    <div className="flex-shrink-0 circle-container">
                                        <span className="circle"></span>
                                        <span className="line"></span>
                                        <span className="circle"></span>
                                    </div>
                                    <div className="flex-shrink-0 w-[40px] h-[40px] sm:w-[52px] sm:h-[52px] icon-box">
                                        <Image src={'https://framerusercontent.com/images/Kjci2ZiHnCXWVjKZxU9rwu3GSfI.svg'} alt="w" width={28} height={28} className="sm:w-[36px] sm:h-[36px]" />
                                    </div>
                                    <div className="flex-shrink-0 circle-container">
                                        <span className="circle"></span>
                                        <span className="line"></span>
                                        <span className="circle"></span>
                                    </div>
                                    <div className="flex-shrink-0 w-[40px] h-[40px] sm:w-[52px] sm:h-[52px] icon-box">
                                        <Image src={'https://framerusercontent.com/images/hvfBGbwc1AsKFtdq8R2VcwHAv0A.svg'} alt="w" width={28} height={28} className="sm:w-[36px] sm:h-[36px]" />
                                    </div>
                                    <div className="flex-shrink-0 circle-container">
                                        <span className="circle"></span>
                                        <span className="line"></span>
                                        <span className="circle"></span>
                                    </div>
                                    <div className="flex-shrink-0 w-[40px] h-[40px] sm:w-[52px] sm:h-[52px] icon-box">
                                        <Image src={'https://framerusercontent.com/images/YcyG9QsC7RV1Onc50wyEXquv1k.svg'} alt="w" width={28} height={28} className="sm:w-[36px] sm:h-[36px]" />
                                    </div>
                                    <div className="flex-shrink-0 circle-container">
                                        <span className="circle"></span>
                                        <span className="line"></span>
                                        <span className="circle"></span>
                                    </div>
                                    <div className="flex-shrink-0 w-[40px] h-[40px] sm:w-[52px] sm:h-[52px] icon-box">
                                        <Image src={'https://framerusercontent.com/images/ZokCuPJkR8AKgTToaXlDYY95I.svg'} alt="w" width={28} height={28} className="sm:w-[36px] sm:h-[36px]" />
                                    </div>
                                    <div className="flex-shrink-0 circle-container">
                                        <span className="circle"></span>
                                        <span className="line"></span>
                                        <span className="circle"></span>
                                    </div>
                                    <div className="flex-shrink-0 w-[40px] h-[40px] sm:w-[52px] sm:h-[52px] icon-box">
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
                                <h4 className="text-white font-medium text-base sm:text-lg mb-1 sm:mb-2">Автоматизация рабочих процессов</h4>
                                <p className="text-gray-400 text-xs sm:text-sm">
                                    Мы помогаем компаниям интегрировать инструменты ИИ в существующие программные платформы, CRM-системы или маркетинговые каналы.
                                </p>
                            </div>
                        </div>

                        {/* Strategy Consulting Card */}
                        <div className="w-full lg:w-[732px] p-[20px] bg-[#050A1B] rounded-xl border border-[#262626] overflow-hidden process-card">
                            <div>
                                <div ref={chartRef} className="ai-card flex items-end justify-center h-[150px] sm:h-[200px]" style={{ mask: 'linear-gradient(rgb(0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%)' }}>
                                    <div className="flex items-end gap-[15px] sm:gap-[30px] relative">
                                        <div className="chart-line-gradient absolute top-0 left-0 w-full h-full"></div>
                                        <div className="chart-line-gradient absolute top-[30px] left-0 w-full h-full"></div>
                                        <div className="chart-line-gradient absolute top-[60px] left-0 w-full h-full"></div>
                                        <div className="chart-line-gradient absolute top-[90px] left-0 w-full h-full"></div>
                                        <div className="chart-line-gradient absolute top-[120px] left-0 w-full h-full"></div>
                                        {[15, 25, 60, 110, 120, 165, 140, 160].map((height, index) => {
                                            // Scale down heights for mobile
                                            const mobileHeight = Math.floor(height * 0.75)
                                            return (
                                                <div
                                                    key={index}
                                                    className={`chart-line w-[12px] sm:w-[16px] z-10 ${isChartVisible ? 'chart-bar-animation' : ''}`}
                                                    style={{
                                                        height: `clamp(${mobileHeight}px, ${mobileHeight / 10}vw, ${height}px)`,
                                                        animationDelay: isChartVisible ? `${index * 0.1}s` : '0s',
                                                        transform: isChartVisible ? '' : 'translateY(100%)',
                                                    }}
                                                ></div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>

                            <div className='mt-[30px]'>
                                <h4 className="text-white font-medium text-base sm:text-lg mb-1 sm:mb-2">Стратегический консалтинг</h4>
                                <p className="text-gray-400 text-xs sm:text-sm">
                                    Мы оцениваем ваш бизнес и отрасль, определяем, где ИИ может принести наибольшую пользу с учетом ваших целей и ресурсов.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Services 