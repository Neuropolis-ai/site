'use client'
import ButtonLink from '@/components/ui/buttonLink'
import '@/style/hero.css'

export default function NotFound() {
    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
            {/* Background Video */}
            <div className="video-container absolute inset-0 z-0">
                <div className="video-content">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="video-one opacity-20"
                    >
                        <source src="/assets/video/hero-bg.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
            <div className="absolute inset-0 bg-black/80 z-10"></div>

            {/* Content */}
            <div className="relative z-20 text-center max-w-[800px] mx-auto px-4">
                <div className="inline-block px-4 py-1 rounded-full bg-white/10 text-white text-sm mb-4">
                    Страница не найдена
                </div>
                <h1 className="text-[120px] font-bold text-white mb-6">
                    404
                </h1>
                <p className="text-lg text-gray-300 mb-8">
                    Упс! Кажется, вы наткнулись на страницу, которой не существует. Не волнуйтесь, это случается с лучшими из нас.
                </p>
                <ButtonLink href="/">
                    Вернуться на главную
                </ButtonLink>
            </div>
        </div>
    )
} 