import Image from 'next/image'
import Link from 'next/link'
import { BsArrowRight } from 'react-icons/bs'
import Container from '../ui/Container'

const blogPosts = [
    {
        id: 1,
        title: 'How AI is Revolutionizing Marketing: 5 Strategies You Need to Know',
        date: 'Oct 10, 2024',
        image: 'https://framerusercontent.com/images/62DPwiIyI0enXXQUX5ewQevWvCU.jpg',
        slug: 'ai-revolutionizing-marketing'
    },
    {
        id: 2,
        title: 'The Future of Automation: What AI Means for Your Business',
        date: 'Oct 4, 2024',
        image: 'https://framerusercontent.com/images/eJcB6XjsCxKn8Tq45LWiERUtf0.png',
        slug: 'future-of-automation'
    },
    {
        id: 3,
        title: 'AI-Powered Customer Service: Enhancing User Experience with Automation',
        date: 'Sep 30, 2024',
        image: 'https://framerusercontent.com/images/RNCPQ5WEHm8otNS13LNpeREILs.png',
        slug: 'ai-powered-customer-service'
    }
]

const Blog = () => {
    return (
        <section id="blog" className="py-20 bg-black">
            <Container>
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-1 rounded-full bg-white/10 text-white text-sm mb-4 switch-box">
                        Блог
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Последние статьи из нашего блога</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto max-[425px]:text-[14px]">
                        Будьте в курсе последних трендов, советов и инноваций в области ИИ и автоматизации.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {blogPosts.map((post) => (
                        <Link key={post.id} href={`/blog/${post.slug}`} className="text-blue-500 hover:text-blue-400">
                            <div className="blog-card overflow-hidden group">
                                <div className='p-[12px]'>
                                    <div className="relative p-[12px] h-[200px] w-full overflow-hidden rounded-[12px]">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover transition-transform group-hover:scale-[1.06]"
                                        />
                                    </div>
                                </div>
                                <div className="p-[12px]">
                                    <h3 className="text-xl font-semibold text-white mb-4 line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <span className='line-a mb-2' ></span>
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-400 text-sm">{post.date}</span>
                                        <BsArrowRight className="text-lg" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="flex justify-center mt-12">
                    <Link
                        href="/blog"
                        className="flex items-center gap-2 border border-[#262626] text-white px-6 py-3 rounded-[10px] hover:bg-white/10 transition-colors"
                    >
                        Перейти в Блог
                        <BsArrowRight />
                    </Link>
                </div>
            </Container>
        </section>
    )
}

export default Blog 