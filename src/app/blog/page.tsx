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
        image: '/assets/img/blog-marketing.jpg',
        slug: 'ai-revolutionizing-marketing'
    },
    {
        id: 2,
        title: 'The Future of Automation: What AI Means for Your Business',
        excerpt: 'Explore how automation powered by AI is reshaping business operations and what this means for companies across various industries.',
        date: 'Oct 4, 2024',
        image: '/assets/img/blog-automation.jpg',
        slug: 'future-of-automation'
    },
    {
        id: 3,
        title: 'AI-Powered Customer Service: Enhancing User Experience with Automation',
        excerpt: 'Learn how AI-driven customer service solutions are improving user experiences while reducing operational costs for businesses.',
        date: 'Sep 30, 2024',
        image: '/assets/img/blog-customer-service.jpg',
        slug: 'ai-powered-customer-service'
    },
    {
        id: 4,
        title: 'Unlocking the Power of Predictive Analytics for Smarter Decision-Making',
        excerpt: 'Discover how predictive analytics can help your business make data-driven decisions and stay ahead of market trends.',
        date: 'Sep 30, 2024',
        image: '/assets/img/blog-analytics.jpg',
        slug: 'unlocking-predictive-analytics'
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
            {/* Background Video */}
            <div className="video-container absolute inset-0 z-0">
                <div className="video-content">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="video-one opacity-10"
                    >
                        <source src="/assets/video/hero-bg.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
            <div className="absolute inset-0 bg-black/90 z-[1]"></div>

            <div className="container mx-auto max-w-[1280px] px-4 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-1 rounded-full bg-white/10 text-white text-sm mb-4">
                        Blog
                    </div>
                    <h1 className="text-5xl font-bold text-white mb-4">Our Blog</h1>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                        The Noctis blog is your go-to resource for understanding how AI is reshaping industries and driving business success.
                    </p>

                    {/* Search Bar */}
                    <div className="relative max-w-md mx-auto">
                        <input
                            type="text"
                            placeholder="Search articles..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full p-4 pl-12 bg-[#0A1128] border border-[#01195e] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <BsSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                </div>

                {/* Blog Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredPosts.map((post) => (
                        <div
                            key={post.id}
                            className="bg-[#050A1B] rounded-xl overflow-hidden border border-[#01195e] transition-transform hover:scale-[1.02]"
                        >
                            <Link href={`/blog/${post.slug}`}>
                                <div className="relative h-[200px] w-full">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-400 mb-4 line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-500 text-sm">{post.date}</span>
                                        <span className="text-blue-500 hover:text-blue-400">
                                            <BsArrowRight className="text-lg" />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Load More Button */}
                {filteredPosts.length > 0 && (
                    <div className="flex justify-center mt-12">
                        <button className="border border-[#262626] text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-colors">
                            Load More
                        </button>
                    </div>
                )}

                {/* No Results */}
                {filteredPosts.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-400 text-lg">No articles found matching your search.</p>
                        <button
                            onClick={() => setSearchQuery('')}
                            className="mt-4 text-blue-500 hover:text-blue-400"
                        >
                            Clear search
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
} 