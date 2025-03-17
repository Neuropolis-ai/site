'use client'
import '@/style/hero.css'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { BsArrowRight, BsSearch } from 'react-icons/bs'

// Sample blog data
const blogPosts = [
    {
        id: 1,
        title: 'How AI is Revolutionizing Marketing: 5 Strategies You Need to Know',
        excerpt: 'Discover how artificial intelligence is transforming marketing strategies and how businesses can leverage these technologies for better results.',
        date: 'Oct 10, 2024',
        image: 'https://framerusercontent.com/images/62DPwiIyI0enXXQUX5ewQevWvCU.jpg',
        slug: 'ai-revolutionizing-marketing'
    },
    {
        id: 2,
        title: 'The Future of Automation: What AI Means for Your Business',
        excerpt: 'Explore how automation powered by AI is reshaping business operations and what this means for companies across various industries.',
        date: 'Oct 4, 2024',
        image: 'https://framerusercontent.com/images/eJcB6XjsCxKn8Tq45LWiERUtf0.png',
        slug: 'future-of-automation'
    },
    {
        id: 3,
        title: 'AI-Powered Customer Service: Enhancing User Experience with Automation',
        excerpt: 'Learn how AI-driven customer service solutions are improving user experiences while reducing operational costs for businesses.',
        date: 'Sep 30, 2024',
        image: 'https://framerusercontent.com/images/RNCPQ5WEHm8otNS13LNpeREILs.png',
        slug: 'ai-powered-customer-service'
    }
]

export default function BlogPage() {
    const [searchQuery, setSearchQuery] = useState('')

    const filteredPosts = blogPosts.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    )

    return (
        <div className="relative min-h-screen pt-32 pb-20 overflow-hidden">

            <div className="container mx-auto max-w-[1280px] px-4 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-1 rounded-full bg-white/10 text-white text-sm mb-4 switch-box">
                        Блог
                    </div>
                    <h1 className="text-5xl font-bold text-white mb-4">Наш Блог
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                        Блог Noctis — ваш надежный источник информации о том, как ИИ меняет отрасли и способствует успеху бизнеса.
                    </p>

                    {/* Search Bar */}
                    <div className="relative max-w-md mx-auto w-[300px]">
                        <input
                            type="text"
                            placeholder="Поиск статей
"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full p-3 pr-12 bg-transparent border border-[#262626] text-sm rounded-[12px] outline-none text-white hover:border-[#4f4f4f] transition-colors duration-300"
                        />
                        <BsSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                </div>

                {/* Blog Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredPosts.map((post) => (
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

                {/* Load More Button */}
                {filteredPosts.length > 0 && (
                    <div className="flex justify-center mt-12">
                        <button className="flex items-center gap-2 border border-[#262626] text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-colors">
                            Показать еще
                        </button>
                    </div>
                )}

                {/* No Results */}
                {filteredPosts.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-400 text-lg">Статьи не найдены, соответствующие вашему запросу.</p>
                        <button
                            onClick={() => setSearchQuery('')}
                            className="mt-4 text-blue-500 hover:text-blue-400"
                        >
                            Очистить поиск
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
} 