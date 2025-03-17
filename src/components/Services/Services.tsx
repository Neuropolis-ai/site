import { BsBarChart, BsChatDots, BsGear } from 'react-icons/bs'
import '../../style/card-line.css'
import '../../style/hero.css'
import Container from '../ui/Container'

const Services = () => {
    return (
        <section className="relative py-[120px] overflow-hidden" id="services">
            {/* Background Video */}
            <div className="video-container absolute inset-0 z-1">
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
            <div className="absolute inset-0 bg-black/90 z-[1]"></div>

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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                    {/* AI Assistant Card */}
                    <div className="bg-[#050A1B] rounded-xl border border-[#262626] overflow-hidden process-card">
                        <div className="p-6">
                            <div className="flex items-center mb-4">
                                <div className="bg-blue-900/20 w-8 h-8 rounded-md flex items-center justify-center mr-3">
                                    <span className="text-blue-500 font-bold">AI</span>
                                </div>
                                <h3 className="text-white font-medium">ИИ-агент</h3>
                            </div>

                            <div className="flex justify-between items-start">
                                <div className="mb-4">
                                    <div className="text-gray-400 text-sm mb-2">
                                        <div className="flex items-center">
                                            <span className="text-white font-medium mr-2">Клиент</span>
                                            <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center">
                                                <BsChatDots className="text-white text-xs" />
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-gray-400 text-sm mb-6">
                                        Как вы может помочь улучшить мои бизнес-процессы?
                                    </p>

                                    <div className="bg-[#0A1128] p-4 rounded-lg mb-4">
                                        <p className="text-gray-300 text-sm">
                                            Наша компания может значительно улучшить ваши бизнес-процессы, используя искусственный интеллект и ИИ-агентов для автоматизации повторяющихся задач, оптимизации рабочих процессов и предоставления аналитических сведений на основе данных.
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <button className="text-gray-400 hover:text-white">
                                            <BsGear className="text-lg" />
                                        </button>
                                        <button className="text-gray-400 hover:text-white">
                                            <BsBarChart className="text-lg" />
                                        </button>
                                    </div>
                                </div>

                                <div className="flex-shrink-0 ml-4">
                                    <div className="relative w-[150px] h-[150px]">
                                        <div className="absolute inset-0 bg-blue-900/20 rounded-md flex items-center justify-center">
                                            <span className="text-white text-2xl font-bold">AI</span>
                                        </div>
                                        <div className="absolute inset-0 border-t border-blue-500/30"></div>
                                        <div className="absolute inset-0 border-r border-blue-500/30"></div>
                                        <div className="absolute inset-0 border-b border-blue-500/30"></div>
                                        <div className="absolute inset-0 border-l border-blue-500/30"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-[#262626] p-4">
                            <h4 className="text-white font-medium mb-2">Чат-боты для поддержки клиентов</h4>
                            <p className="text-gray-400 text-sm">
                                Разработка индивидуальных чат-ботов на базе NLP, которые автоматизируют обслуживание клиентов и выполняют другие бизнес-задачи.
                            </p>
                        </div>
                    </div>

                    {/* Machine Learning Models Card */}
                    <div className="bg-[#050A1B] rounded-xl border border-[#262626] overflow-hidden process-card">
                        <div className="p-6 flex items-center justify-center">
                            <div className="relative w-[200px] h-[200px]">
                                {/* <AnimatedAINetwork /> */}
                            </div>
                        </div>

                        <div className="border-t border-[#262626] p-4">
                            <h4 className="text-white font-medium mb-2">Автономные ИИ-агенты
                            </h4>
                            <p className="text-gray-400 text-sm">
                                Разработка и обучение автономных ИИ-агентов для конкретных бизнес-задач.                            </p>
                        </div>
                    </div>

                    {/* Workflow Automation Card */}
                    <div className="bg-[#050A1B] rounded-xl border border-[#262626] overflow-hidden process-card">
                        <div className="p-6">
                            <div className="grid grid-cols-3 gap-4">
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                                    <div key={item} className="flex items-center justify-center">
                                        <div className={`w-10 h-10 rounded-full bg-${['blue', 'green', 'orange', 'purple'][item % 4]}-500/20 flex items-center justify-center`}>
                                            <div className={`w-6 h-6 rounded-full bg-${['blue', 'green', 'orange', 'purple'][item % 4]}-500/40`}></div>
                                        </div>
                                        {item % 3 !== 0 && <div className="w-4 h-[1px] bg-blue-500/30"></div>}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="border-t border-[#262626] p-4">
                            <h4 className="text-white font-medium mb-2">Автоматизация рабочих процессов
                            </h4>
                            <p className="text-gray-400 text-sm">
                                Мы помогаем компаниям интегрировать инструменты ИИ в существующие программные платформы, CRM-системы или маркетинговые каналы.
                            </p>
                        </div>
                    </div>

                    {/* Strategy Consulting Card */}
                    <div className="bg-[#050A1B] rounded-xl border border-[#262626] overflow-hidden process-card">
                        <div className="p-6">
                            <div className="flex items-end justify-center h-[200px]">
                                <div className="flex items-end space-x-4">
                                    {[15, 25, 35, 45, 55, 65, 75, 85].map((height, index) => (
                                        <div
                                            key={index}
                                            className="w-8 bg-blue-600 rounded-t-sm"
                                            style={{ height: `${height}px` }}
                                        ></div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-[#262626] p-4">
                            <h4 className="text-white font-medium mb-2">Стратегический консалтинг
                            </h4>
                            <p className="text-gray-400 text-sm">
                                Помогаем компаниям эффективно использовать ИИ — от разработки стратегии до развертывания и масштабирования.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Services 