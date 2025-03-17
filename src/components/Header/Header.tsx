'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import logo from '../../app/assets/svg/logo.svg'

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('hero')

    // Function to scroll to section
    const scrollToSection = (sectionId: string) => {
        setMobileMenuOpen(false)
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    // Function to check which section is in viewport
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['hero', 'services', 'projects', 'contact', 'blog']

            // Find the section that is currently in view
            for (const section of sections) {
                const element = document.getElementById(section)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    // If the section is in the viewport (with some buffer for better UX)
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        setActiveSection(section)
                        break
                    }
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        // Initial check
        handleScroll()

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    // Menu items
    const menuItems = [
        { id: 'services', label: 'Услуги' },
        { id: 'projects', label: 'Проекты' },
        { id: 'contact', label: 'Контакты' },
        { id: 'blog', label: 'Блог' }
    ]

    return (
        <header
            className={`fixed top-[10px] sm:top-[20px] left-0 right-0 z-50 w-[95%] sm:w-[90%] md:w-[85%] lg:w-[800px] mx-auto 
                bg-[#050505]/80 backdrop-blur-sm border border-[#262626] rounded-[12px] 
                transition-all duration-300 ease-in-out overflow-hidden
                ${mobileMenuOpen ? 'pb-2' : 'pb-0'}`}
            style={{ backdropFilter: 'blur(30px)', background: 'rgba(0, 0, 0, 0.5)' }}
        >
            {/* Header Main */}
            <div className="w-full p-[8px] pr-[14px] flex items-center justify-between">
                <Link href="/" onClick={() => scrollToSection('hero')}>
                    <Image src={logo} alt="logo" width={95} height={38} />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-2 lg:gap-4">
                    {menuItems.map(item => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`text-[14px] py-[6px] px-[16px] rounded-[12px] ${activeSection === item.id ? 'bg-[#262626]' : 'text-[#F2F2F2]'} hover:text-[#F2F2F2] transition-colors`}
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            <div
                className={`w-full transition-all duration-300 ease-in-out md:hidden
                    ${mobileMenuOpen ? 'max-h-[240px] opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <nav className="flex flex-col items-center gap-0 px-2">
                    {menuItems.map(item => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`text-[16px]  py-[6px] px-[16px] rounded-[12px] text-center ${activeSection === item.id ? 'bg-[#262626]' : 'bg-transparent'} hover:bg-[#262626] transition-colors`}
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>
            </div>
        </header>
    )
}

export default Header
