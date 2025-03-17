import { BsFileEarmarkText, BsGear, BsGraphUp } from 'react-icons/bs'
import '../../style/card-line.css'
import Container from '../ui/Container'

const Process = () => {
    return (
        <section className="py-20 bg-black">
            <Container>
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-1 rounded-full bg-white/10 text-white text-sm mb-4 switch-box">
                        Процесс
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Автономные ИИ-решения</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        С нами ИИ становится простым, масштабируемым и всегда работает на улучшение вашего бизнеса.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="p-[22px] process-card">
                        <div className="w-12 h-12 bg-blue-900/20 rounded-lg flex items-center justify-center mb-6">
                            <BsFileEarmarkText className="text-blue-500 text-xl" />
                        </div>
                        <h3 className="text-[20px] font-bold text-white mb-3">Исследование и кастомизация</h3>
                        <p className="text-gray-400">
                            Мы начинаем с анализа потребностей вашего бизнеса и постановки целей, адаптируя ИИ-решения под уникальные требования вашей компании для достижения максимальных результатов.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="p-[22px] process-card">
                        <div className="w-12 h-12 bg-blue-900/20 rounded-lg flex items-center justify-center mb-6">
                            <BsGear className="text-blue-500 text-xl" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Бесшовная Интеграция ИИ</h3>
                        <p className="text-gray-400">
                            После разработки стратегии мы интегрируем наши ИИ-агенты непосредственно в ваши рабочие процессы, существующее ПО или платформы, обеспечивая беспрепятственную работу.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="p-[22px] process-card">
                        <div className="w-12 h-12 bg-blue-900/20 rounded-lg flex items-center justify-center mb-6">
                            <BsGraphUp className="text-blue-500 text-xl" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Оптимизация и Поддержка
                        </h3>
                        <p className="text-gray-400">
                            С нашей ежемесячной подпиской вы получаете постоянную оптимизацию ИИ, мониторинг производительности и круглосуточную поддержку, обеспечивая бесперебойную работу и развитие вашего бизнеса.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Process 