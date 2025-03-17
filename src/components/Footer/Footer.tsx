import Link from 'next/link'
import Container from '../ui/Container'

const Footer = () => {
    return (
        <footer className="relative py-8 sm:py-12 md:py-16 overflow-hidden">
            {/* Background Video */}
            <div className="video-container absolute inset-0 z-0">
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
            <div className="absolute inset-0 bg-black/80 z-10"></div>

            <Container>
                <div className="relative z-20">
                    {/* Top Section */}
                    <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-[300px]">
                        {/* Logo and Description */}
                        <div className="w-full md:w-1/3 mb-8 md:mb-0">
                            <div className="flex items-center mb-4">
                                <div className="w-3 h-3 rounded-full bg-blue-600 mr-2"></div>
                                <span className="text-white text-xl font-bold">Noctis</span>
                            </div>
                            <p className="text-gray-400 mb-6">
                                В авангарде инноваций в области искусственного интеллекта, помогая компаниям процветать в цифровом мире.
                            </p>
                        </div>

                        {/* Links and Legal */}
                        <div className="flex flex-col md:flex-row">
                            <div className="mb-8 md:mb-0">
                                <h3 className="text-white font-medium mb-4">Навигация</h3>
                                <div className="flex flex-wrap gap-4 md:gap-2">
                                    <Link href="/" className="text-gray-400 hover:text-white transition-colors">Услуги</Link>
                                    <Link href="/services" className="text-gray-400 hover:text-white transition-colors">Проекты</Link>
                                    <Link href="/projects" className="text-gray-400 hover:text-white transition-colors">Услуги</Link>
                                    <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors">Контакты</Link>
                                    <Link href="/faqs" className="text-gray-400 hover:text-white transition-colors">Блог</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Copyright section */}
                    <div className="pt-6 mt-6 border-t border-gray-800">
                        <p className="text-gray-500 text-sm">
                            © {new Date().getFullYear()} Noctis AI. Все права защищены.
                        </p>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer 