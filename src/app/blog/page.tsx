'use client'
import { useTheme } from '@/context/ThemeContext'
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
    const { isDark } = useTheme()
    const [searchQuery, setSearchQuery] = useState('')

    const filteredPosts = blogPosts.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    )

    return (
        <div className={`relative min-h-screen pt-32 pb-20 overflow-hidden ${isDark ? 'bg-black' : 'bg-white'}`}>

            <div className="container mx-auto max-w-[1280px] px-4 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className={`inline-block px-4 py-1 rounded-full text-sm mb-4 switch-box ${!isDark && 'light-switch-box'}`}>
                        Блог
                    </div>
                    <h1 className={`text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Наш Блог
                    </h1>
                    <p className={`max-w-2xl mx-auto mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        Блог Noctis — ваш надежный источник информации о том, как ИИ меняет отрасли и способствует успеху бизнеса.
                    </p>

                    {/* Search Bar */}
                    <div className="relative max-w-md mx-auto w-[300px]">
                        <input
                            type="text"
                            placeholder="Поиск статей"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className={`w-full p-3 pr-12 rounded-[12px] outline-none transition-colors duration-300 ${isDark
                                    ? 'bg-transparent border-[#262626] text-white hover:border-[#4f4f4f]'
                                    : 'bg-gray-50 border-gray-300 text-gray-800 hover:border-gray-400'
                                } border text-sm`}
                        />
                        <BsSearch className={`absolute right-4 top-1/2 transform -translate-y-1/2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                    </div>
                </div>

                {/* Blog Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredPosts.map((post) => (
                        <Link key={post.id} href={`/blog/${post.slug}`} className={isDark ? "text-blue-500 hover:text-blue-400" : "text-blue-600 hover:text-blue-700"}>
                            <div className={`overflow-hidden group ${isDark ? 'blog-card' : 'border border-gray-200 rounded-xl bg-gray-50'}`}>
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
                                    <h3 className={`text-xl font-semibold mb-4 line-clamp-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                                        {post.title}
                                    </h3>
                                    <span className='line-a mb-2'></span>
                                    <div className="flex items-center justify-between">
                                        <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{post.date}</span>
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
                        <button className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-colors ${isDark
                                ? 'border-[#262626] text-white hover:bg-white/10'
                                : 'border-gray-300 text-gray-800 hover:bg-gray-100'
                            } border`}>
                            Показать еще
                        </button>
                    </div>
                )}

                {/* No Results */}
                {filteredPosts.length === 0 && (
                    <div className="text-center py-12">
                        <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Статьи не найдены, соответствующие вашему запросу.</p>
                        <button
                            onClick={() => setSearchQuery('')}
                            className={isDark ? "mt-4 text-blue-500 hover:text-blue-400" : "mt-4 text-blue-600 hover:text-blue-700"}
                        >
                            Очистить поиск
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
} 