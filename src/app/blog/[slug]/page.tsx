'use client'
import '@/style/hero.css'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { BsArrowLeft, BsCalendar, BsShare } from 'react-icons/bs'

// Sample blog data
const blogPosts = [
    {
        id: 1,
        title: 'How AI is Revolutionizing Marketing: 5 Strategies You Need to Know',
        excerpt: 'Discover how artificial intelligence is transforming marketing strategies and how businesses can leverage these technologies for better results.',
        date: 'Oct 10, 2024',
        image: '/assets/img/blog-marketing.jpg',
        slug: 'ai-revolutionizing-marketing',
        content: `
      <p>Artificial intelligence is transforming the marketing landscape at an unprecedented pace. From personalized customer experiences to data-driven decision making, AI technologies are providing marketers with powerful new tools to connect with audiences and drive results.</p>
      
      <h2>1. Hyper-Personalization at Scale</h2>
      <p>AI enables marketers to analyze vast amounts of customer data to deliver highly personalized experiences. Unlike traditional segmentation, AI can process behavioral data, purchase history, browsing patterns, and demographic information to create truly individualized marketing messages.</p>
      <p>By implementing AI-powered personalization, companies have seen conversion rates increase by up to 30% and customer satisfaction scores improve significantly.</p>
      
      <h2>2. Predictive Analytics for Customer Insights</h2>
      <p>Predictive analytics uses AI to forecast future customer behaviors based on historical data. This allows marketers to anticipate needs, identify potential churn, and proactively engage customers at critical decision points.</p>
      <p>Leading brands are using predictive models to optimize everything from inventory management to content creation, ensuring they deliver the right message at the right time.</p>
      
      <h2>3. Conversational Marketing with AI Chatbots</h2>
      <p>AI-powered chatbots have evolved from simple rule-based systems to sophisticated conversational agents capable of natural language understanding. These tools provide 24/7 customer service, qualify leads, and guide users through the buying journey.</p>
      <p>Modern chatbots can handle complex queries, remember conversation context, and seamlessly transfer to human agents when necessary, creating a frictionless customer experience.</p>
      
      <h2>4. Content Creation and Optimization</h2>
      <p>AI tools are revolutionizing content marketing by assisting with everything from topic research to content creation and optimization. Natural language generation systems can produce data-driven content like financial reports and product descriptions, while AI analytics tools help marketers understand which content resonates with their audience.</p>
      <p>By leveraging AI for content strategy, marketers can produce more relevant content faster and distribute it through the most effective channels.</p>
      
      <h2>5. Automated Media Buying and Optimization</h2>
      <p>Programmatic advertising platforms use AI to automate the buying, placement, and optimization of media. These systems analyze thousands of signals in real-time to determine the optimal bid for each ad impression, ensuring marketing budgets are spent efficiently.</p>
      <p>AI-driven media buying has been shown to reduce cost per acquisition by up to 50% while simultaneously improving targeting accuracy and campaign performance.</p>
      
      <h2>Implementing AI in Your Marketing Strategy</h2>
      <p>To successfully integrate AI into your marketing efforts:</p>
      <ul>
        <li>Start with clear business objectives rather than implementing AI for its own sake</li>
        <li>Ensure you have clean, organized data to feed your AI systems</li>
        <li>Begin with smaller, focused projects to demonstrate value before scaling</li>
        <li>Invest in training your team to work alongside AI tools</li>
        <li>Maintain a human touch in your customer interactions</li>
      </ul>
      
      <p>As AI technology continues to evolve, the marketers who embrace these tools while maintaining strategic oversight will gain significant competitive advantages. The future of marketing isn't about replacing human creativity with artificial intelligence, but about leveraging AI to enhance human capabilities and deliver more meaningful customer experiences.</p>
    `
    },
    {
        id: 2,
        title: 'The Future of Automation: What AI Means for Your Business',
        excerpt: 'Explore how automation powered by AI is reshaping business operations and what this means for companies across various industries.',
        date: 'Oct 4, 2024',
        image: '/assets/img/blog-automation.jpg',
        slug: 'future-of-automation',
        content: `
      <p>Automation powered by artificial intelligence is fundamentally transforming how businesses operate across every industry. From manufacturing to customer service, AI-driven automation is creating new possibilities for efficiency, innovation, and growth.</p>
      
      <h2>The Evolution of Business Automation</h2>
      <p>Business automation has evolved dramatically over the past decade. What began as simple rule-based systems for repetitive tasks has grown into sophisticated AI-powered solutions capable of handling complex processes, making decisions, and even learning from experience.</p>
      <p>This evolution represents a shift from automation that simply executes predefined tasks to intelligent systems that can adapt, optimize, and improve over time.</p>
      
      <h2>Key Areas Being Transformed by AI Automation</h2>
      
      <h3>Operations and Manufacturing</h3>
      <p>In manufacturing and operations, AI-powered systems are revolutionizing production lines through predictive maintenance, quality control, and supply chain optimization. Smart factories equipped with computer vision can detect defects invisible to the human eye, while AI algorithms optimize production schedules to maximize efficiency.</p>
      
      <h3>Customer Experience</h3>
      <p>Customer service has been transformed by AI chatbots, virtual assistants, and automated support systems. These tools provide 24/7 service, instant responses, and personalized interactions at scale. Advanced systems can now handle complex customer inquiries, recognize emotional cues, and seamlessly escalate to human agents when necessary.</p>
      
      <h3>Financial Services</h3>
      <p>In banking and finance, AI automation has revolutionized fraud detection, risk assessment, and regulatory compliance. Machine learning algorithms can analyze transaction patterns to identify suspicious activity in real-time, while automated systems ensure compliance with complex and changing regulations.</p>
      
      <h3>Human Resources</h3>
      <p>HR departments are leveraging AI to transform recruitment, onboarding, and employee development. Automated systems can screen resumes, conduct initial interviews, and even predict candidate success. Employee engagement platforms use AI to gather insights and provide personalized development recommendations.</p>
      
      <h2>The Business Impact of AI Automation</h2>
      
      <h3>Cost Reduction and Efficiency</h3>
      <p>The most immediate benefit of AI automation is often cost reduction. By automating routine tasks, businesses can redirect human resources to higher-value activities. Companies implementing AI automation typically report 20-40% cost savings in automated processes.</p>
      
      <h3>Enhanced Decision Making</h3>
      <p>AI systems excel at analyzing vast amounts of data to identify patterns and generate insights. This capability enables more informed, data-driven decision making across all levels of an organization, from strategic planning to day-to-day operations.</p>
      
      <h3>Innovation and New Business Models</h3>
      <p>Perhaps most significantly, AI automation enables entirely new business models and service offerings. Companies can deliver personalization at scale, offer 24/7 service without proportional cost increases, and create entirely new categories of products and services.</p>
      
      <h2>Preparing Your Business for the Automation Revolution</h2>
      
      <h3>Developing an AI Strategy</h3>
      <p>Successful implementation of AI automation begins with a clear strategy aligned with business objectives. Rather than pursuing technology for its own sake, companies should identify specific business problems that AI can help solve.</p>
      
      <h3>Building the Right Infrastructure</h3>
      <p>AI systems require robust data infrastructure. Organizations need to ensure they have systems in place to collect, store, and process the data that will fuel their AI initiatives.</p>
      
      <h3>Workforce Transformation</h3>
      <p>As automation takes over routine tasks, the human workforce must evolve. This means investing in training and development to help employees build skills in areas where humans still excel: creativity, emotional intelligence, complex problem-solving, and strategic thinking.</p>
      
      <h2>The Future of Work in an Automated World</h2>
      <p>Rather than replacing humans entirely, the most successful AI implementations augment human capabilities. The future workplace will likely feature humans and AI systems working collaboratively, with each focusing on what they do best.</p>
      <p>Organizations that view AI automation as a tool to enhance human potential rather than simply reduce headcount will be best positioned to thrive in this new era.</p>
      
      <h2>Conclusion</h2>
      <p>AI-powered automation represents both a significant challenge and an unprecedented opportunity for businesses. Those that embrace this technology thoughtfully, with a focus on augmenting human capabilities rather than simply replacing them, will gain substantial competitive advantages in efficiency, innovation, and customer experience.</p>
      <p>The automation revolution is just beginning, and its full impact on business and society is still unfolding. What's clear is that organizations that adapt quickly and strategically will be the ones that thrive in this new landscape.</p>
    `
    },
    {
        id: 3,
        title: 'AI-Powered Customer Service: Enhancing User Experience with Automation',
        excerpt: 'Learn how AI-driven customer service solutions are improving user experiences while reducing operational costs for businesses.',
        date: 'Sep 30, 2024',
        image: '/assets/img/blog-customer-service.jpg',
        slug: 'ai-powered-customer-service',
        content: `<p>Sample content for AI-Powered Customer Service article</p>`
    },
    {
        id: 4,
        title: 'Unlocking the Power of Predictive Analytics for Smarter Decision-Making',
        excerpt: 'Discover how predictive analytics can help your business make data-driven decisions and stay ahead of market trends.',
        date: 'Sep 30, 2024',
        image: '/assets/img/blog-analytics.jpg',
        slug: 'unlocking-predictive-analytics',
        content: `<p>Sample content for Predictive Analytics article</p>`
    }
]

export default function BlogPost() {
    const params = useParams()
    const slug = params.slug as string

    const post = blogPosts.find(post => post.slug === slug)

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-white mb-4">Article Not Found</h1>
                    <Link href="/blog" className="text-blue-500 hover:text-blue-400 flex items-center justify-center gap-2">
                        <BsArrowLeft /> Back to Blog
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="relative min-h-screen pt-32 pb-20 overflow-hidden">
            {/* Background Video */}
            <div className="video-container absolute inset-0 z-0">
                <div className="video-content">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="video-one opacity-5"
                    >
                        <source src="/assets/video/hero-bg.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
            <div className="absolute inset-0 bg-black/95 z-[1]"></div>

            <div className="container mx-auto max-w-[900px] px-4 relative z-10">
                {/* Back to Blog */}
                <Link href="/blog" className="inline-flex items-center text-blue-500 hover:text-blue-400 mb-8 gap-2">
                    <BsArrowLeft /> Back to Blog
                </Link>

                {/* Featured Image */}
                <div className="relative h-[400px] w-full rounded-xl overflow-hidden mb-8">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Article Header */}
                <div className="mb-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        {post.title}
                    </h1>

                    <div className="flex items-center gap-4 text-gray-400">
                        <div className="flex items-center gap-2">
                            <BsCalendar />
                            <span>{post.date}</span>
                        </div>
                        <button className="flex items-center gap-2 hover:text-blue-500">
                            <BsShare />
                            <span>Share</span>
                        </button>
                    </div>
                </div>

                {/* Article Content */}
                <div
                    className="prose prose-lg prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Related Articles */}
                <div className="mt-16">
                    <h3 className="text-2xl font-bold text-white mb-6">Related Articles</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {blogPosts
                            .filter(relatedPost => relatedPost.id !== post.id)
                            .slice(0, 2)
                            .map(relatedPost => (
                                <div
                                    key={relatedPost.id}
                                    className="bg-[#050A1B] rounded-xl overflow-hidden border border-[#01195e] transition-transform hover:scale-[1.02]"
                                >
                                    <Link href={`/blog/${relatedPost.slug}`}>
                                        <div className="relative h-[160px] w-full">
                                            <Image
                                                src={relatedPost.image}
                                                alt={relatedPost.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="p-5">
                                            <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
                                                {relatedPost.title}
                                            </h3>
                                            <div className="flex items-center justify-between">
                                                <span className="text-gray-500 text-sm">{relatedPost.date}</span>
                                                <span className="text-blue-500 hover:text-blue-400">
                                                    <BsArrowLeft className="transform rotate-180 text-lg" />
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    )
} 