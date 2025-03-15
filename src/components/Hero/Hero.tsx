import "@/style/hero.css"
import ButtonLink from '../ui/buttonLink'

const Hero = () => {
    return (
        <div className="relative flex items-center justify-center overflow-hidden pt-[200px]">
            {/* Background Video */}
            <div className="video-container">
                <div className="video-content">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="video-one"
                    >
                        <source src="/assets/video/hero-bg.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>

            {/* Dark Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10" />
            <div className="oval-blur" />
            {/* Content */}
            <div className="relative z-20 text-center max-w-[800px] mx-auto px-4">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span className="text-white">NoctisAI</span>
                </div>
                <h1 className="text-[40px] font-bold text-white mb-6">
                    Прокачайте свой бизнес с помощью интеллектуальных ИИ-агентов
                </h1>
                <p className="text-lg text-gray-300 mb-8">
                    Мы специализируемся на предоставлении передовых решений на основе искусственного интеллекта, призванных расширить возможности предприятий во всех отраслях.
                </p>
                <div className="flex items-center justify-center gap-4">
                    <ButtonLink href="/">
                        Получить консультацию
                    </ButtonLink>
                    <ButtonLink href="/">
                        Наши улуги
                    </ButtonLink>
                </div>
            </div>
        </div>
    )
}

export default Hero
