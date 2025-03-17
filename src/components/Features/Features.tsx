import { BsGraphUp, BsPersonCircle, BsPlayCircle, BsPuzzle, BsSearch } from 'react-icons/bs'
import Container from '../ui/Container'

const Features = () => {
    return (
        <section className="py-20 bg-black relative">
            {/* Background network effect */}
            {/* Background Video */}
            <div className="video-container fx">
                <div className="video-content f">
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

            <Container>
                <div className="text-center mb-16 relative z-10">
                    <div className="inline-block px-4 py-1 rounded-full bg-white/10 text-white text-sm mb-4 switch-box">
                        Услуги
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Используйте весь потенциал ИИ
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
                    {/* Feature 1 */}
                    <div className="text-center">
                        <div className="w-16 h-16 bg-blue-900/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                            <BsGraphUp className="text-blue-400 text-2xl" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3 ">Предиктивная аналитика</h3>
                        <p className="text-gray-400 max-[425px]:text-[14px]">
                            Используйте ИИ для анализа исторических данных и прогнозирования будущих трендов.

                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="text-center">
                        <div className="w-16 h-16 bg-blue-900/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                            <BsPersonCircle className="text-blue-400 text-2xl" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Персонализированные маркетинговые кампании
                        </h3>
                        <p className="text-gray-400 max-[425px]:text-[14px]">
                            Применяйте ИИ для точечного таргетинга аудитории и создания персонализированного контента.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="text-center">
                        <div className="w-16 h-16 bg-blue-900/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                            <BsPersonCircle className="text-blue-400 text-2xl" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Служба поддержки с ИИ-агенты</h3>
                        <p className="text-gray-400 max-[425px]:text-[14px]">
                            Разрабатываем ИИ-агентов для службы поддержки, которые общаются с клиентами и отвечают на сложные запросы.
                        </p>
                    </div>

                    {/* Feature 4 */}
                    <div className="text-center">
                        <div className="w-16 h-16 bg-blue-900/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                            <BsPuzzle className="text-blue-400 text-2xl" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Интеграция ИИ
                        </h3>
                        <p className="text-gray-400 max-[425px]:text-[14px]">
                            Помогаем компаниям внедрять ИИ-агентов в их существующие программные платформы.
                        </p>
                    </div>

                    {/* Feature 5 */}
                    <div className="text-center">
                        <div className="w-16 h-16 bg-blue-900/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                            <BsPlayCircle className="text-blue-400 text-2xl" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Создание контента с ИИ</h3>
                        <p className="text-gray-400 max-[425px]:text-[14px]">
                            Разработка ИИ-агентов для автоматизированного создания контента
                        </p>
                    </div>

                    {/* Feature 6 */}
                    <div className="text-center">
                        <div className="w-16 h-16 bg-blue-900/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                            <BsSearch className="text-blue-400 text-2xl" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3"> ИИ-поиск
                        </h3>
                        <p className="text-gray-400 max-[425px]:text-[14px]">
                            Разработка ИИ-агентов для автоматизированного поиска в Интернете
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Features 