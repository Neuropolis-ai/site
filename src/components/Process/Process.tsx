import { BsFileEarmarkText, BsGear, BsGraphUp } from 'react-icons/bs'
import Container from '../ui/Container'

const Process = () => {
    return (
        <section className="py-[120px] bg-black">
            <Container>
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-1 rounded-full bg-white/10 text-white text-sm mb-4">
                        Process
                    </div>
                    <h2 className="text-4xl font-bold text-white mb-4">Simplified AI Solutions</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        With Noctis, AI is simple, scalable, and always working to improve your business.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="bg-[#050A1B] p-8 rounded-xl border border-[#262626]">
                        <div className="w-12 h-12 bg-blue-900/20 rounded-lg flex items-center justify-center mb-6">
                            <BsFileEarmarkText className="text-blue-500 text-xl" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">1. Discovery & Customization</h3>
                        <p className="text-gray-400">
                            We start by understanding your business needs and goals, tailoring our AI solutions to fit your unique requirements.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#050A1B] p-8 rounded-xl border border-[#262626]">
                        <div className="w-12 h-12 bg-blue-900/20 rounded-lg flex items-center justify-center mb-6">
                            <BsGear className="text-blue-500 text-xl" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">2. Seamless AI Integration</h3>
                        <p className="text-gray-400">
                            Once the plan is set, we integrate our AI tools directly into your existing workflows, software, or platforms.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#050A1B] p-8 rounded-xl border border-[#262626]">
                        <div className="w-12 h-12 bg-blue-900/20 rounded-lg flex items-center justify-center mb-6">
                            <BsGraphUp className="text-blue-500 text-xl" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">3. Optimization & Support</h3>
                        <p className="text-gray-400">
                            With our monthly subscription, we provide ongoing AI optimization, performance monitoring, and 24/7 support.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Process 