'use client'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { BsStarFill } from 'react-icons/bs'
import '../../style/card-line.css'
import Container from '../ui/Container'

const testimonialData = [
    {
        id: 1,
        name: 'Marina',
        position: 'CEO',
        company: 'E-commerce Platform',
        stars: 5,
        quote: '“Бесшовная интеграция и первоклассная поддержка!”',
        text: ' То, что действительно отличает эту компанию, — это их способность бесшовно интегрировать ИИ в наши существующие системы. Созданные ими кастомные чат-боты обрабатывают 80% запросов в службу поддержки.',
        image: '/assets/img/testimonial-1.jpg'
    },
    {
        id: 2,
        name: 'Mark J.',
        position: 'Operations Manager',
        company: 'Manufacturing Corp',
        stars: 5,
        quote: '“Революционные ИИ-решения!”',
        text: 'Сотрудничество стало прорывом для нашего бизнеса. Внедренный ими ИИ-движок рекомендаций увеличил наши продажи на 20% всего за три месяца!',
        image: '/assets/img/testimonial-2.jpg'
    },
    {
        id: 3,
        name: 'Elena R.',
        position: 'Marketing Director',
        company: 'Retail Chain',
        stars: 5,
        quote: '“Непревзойденная эффективность и инновации!”',
        text: 'Инструменты автоматизации на основе ИИ кардинально изменили наши внутренние процессы. Мы сократили ручные операции на 35%, что позволило нашей команде сосредоточиться на более ценной работе.',
        image: '/assets/img/testimonial-3.jpg'
    },
    {
        id: 4,
        name: 'Elena R.',
        position: 'Marketing Director',
        company: 'Retail Chain',
        stars: 5,
        quote: '“Удивительная аналитика клиентов!”',
        text: 'Благодаря инструментам предиктивной аналитики на основе ИИ мы получили глубокое понимание поведения наших клиентов.',
        image: '/assets/img/testimonial-3.jpg'
    }
]

const Testimonials = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null)
    const [isScrollEnd, setIsScrollEnd] = useState(false)

    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
            const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 10
            setIsScrollEnd(isAtEnd)

            // Reset scroll to beginning when reaching the end
            if (isAtEnd) {
                setTimeout(() => {
                    if (scrollContainerRef.current) {
                        scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' })
                    }
                }, 1000)
            }
        }
    }

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current
        if (scrollContainer) {
            scrollContainer.addEventListener('scroll', handleScroll)
            return () => scrollContainer.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <section id="testimonials" className="py-10 sm:py-14 md:py-20 bg-black">
            <Container>
                <div className="text-center mb-8 sm:mb-12 md:mb-16">
                    <div className="inline-block px-4 py-1 rounded-full bg-white/10 text-white text-sm mb-4 switch-box">
                        Отзывы
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Отзывы наших клиентов</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Истории успеха наших клиентов из разных отраслей.
                    </p>
                </div>

                <div className="relative">
                    {/* Left shadow overlay */}
                    <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-12 md:w-16 z-10 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>

                    <div
                        ref={scrollContainerRef}
                        className="flex overflow-x-auto pb-8 relative"
                        style={{ scrollBehavior: 'smooth' }}
                    >
                        <div className="flex space-x-4 sm:space-x-5 md:space-x-6 pl-8 sm:pl-12 md:pl-16 pr-8 sm:pr-12 md:pr-16">
                            {testimonialData.map((testimonial) => (
                                <div
                                    key={testimonial.id}
                                    className="flex flex-col justify-between w-[280px] sm:w-[320px] md:w-[400px] bg-[#050A1B] rounded-xl overflow-hidden border border-[#262626] p-4 sm:p-5 md:p-6 process-card"
                                >
                                    <div className="flex mb-3 md:mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <BsStarFill
                                                key={i}
                                                className={`${i < testimonial.stars ? 'text-yellow-400' : 'text-gray-600'} mr-1 text-sm sm:text-base`}
                                            />
                                        ))}
                                    </div>

                                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{testimonial.quote}</h3>
                                    <p className="text-gray-400 text-sm sm:text-base mb-2">
                                        {testimonial.text}
                                    </p>

                                    <div>
                                        <span className='line mb-2' ></span>

                                        <div className="flex items-center">
                                            <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden mr-3 sm:mr-4">
                                                <Image
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div>
                                                <p className="text-white font-medium text-sm sm:text-base">{testimonial.name}</p>
                                                <p className="text-gray-400 text-xs sm:text-sm">{testimonial.position}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right shadow overlay */}
                    <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-12 md:w-16 z-10 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
                </div>
            </Container>
        </section>
    )
}

export default Testimonials 