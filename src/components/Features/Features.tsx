import { BsGraphUp, BsPersonCircle, BsPlayCircle, BsPuzzle, BsSearch } from 'react-icons/bs'
import Container from '../ui/Container'

const Features = () => {
    return (
        <section className="py-[120px] bg-black relative">
            {/* Background network effect */}
            <div className="absolute inset-0 opacity-20 z-0 overflow-hidden">
                <div className="absolute w-full h-full bg-[url('/assets/img/network-bg.png')] bg-no-repeat bg-cover"></div>
            </div>

            <Container>
                <div className="text-center mb-16 relative z-10">
                    <div className="inline-block px-4 py-1 rounded-full bg-white/10 text-white text-sm mb-4">
                        Services
                    </div>
                    <h2 className="text-4xl font-bold text-white mb-4">Harness The Full Potential Of AI</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
                    {/* Feature 1 */}
                    <div className="text-center">
                        <div className="w-16 h-16 bg-blue-900/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                            <BsGraphUp className="text-blue-400 text-2xl" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Predictive Analytics</h3>
                        <p className="text-gray-400">
                            Use AI to analyze historical data and predict future trends.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="text-center">
                        <div className="w-16 h-16 bg-blue-900/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                            <BsPersonCircle className="text-blue-400 text-2xl" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Personalized Marketing Campaigns</h3>
                        <p className="text-gray-400">
                            Use AI to target specific audiences with personalized content.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="text-center">
                        <div className="w-16 h-16 bg-blue-900/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                            <BsPersonCircle className="text-blue-400 text-2xl" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">AI Personal Assistants</h3>
                        <p className="text-gray-400">
                            Develop virtual assistants that automate tasks and answer complex queries.
                        </p>
                    </div>

                    {/* Feature 4 */}
                    <div className="text-center">
                        <div className="w-16 h-16 bg-blue-900/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                            <BsPuzzle className="text-blue-400 text-2xl" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">AI Integration</h3>
                        <p className="text-gray-400">
                            Help companies integrate AI tools into their existing software platforms.
                        </p>
                    </div>

                    {/* Feature 5 */}
                    <div className="text-center">
                        <div className="w-16 h-16 bg-blue-900/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                            <BsPlayCircle className="text-blue-400 text-2xl" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">AI Content Creation</h3>
                        <p className="text-gray-400">
                            Offer AI-generated videos, images, and text for content marketing.
                        </p>
                    </div>

                    {/* Feature 6 */}
                    <div className="text-center">
                        <div className="w-16 h-16 bg-blue-900/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                            <BsSearch className="text-blue-400 text-2xl" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">AI-Powered SEO</h3>
                        <p className="text-gray-400">
                            Implement AI tools to optimize content for search engines.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Features 