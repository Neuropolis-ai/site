'use client'

import Image from 'next/image'
import Link from 'next/link'
import logo from '../../app/assets/svg/logo.svg'

const Header = () => {
    return (
        <header className="fixed top-[20px] left-0 right-0 z-50 p-[8px] pr-[14px] flex items-center justify-center w-[800px] mx-auto bg-[#050505]/80 backdrop-blur-sm border border-[#262626] rounded-[12px]" style={{ backdropFilter: 'blur(30px)', background: 'rgba(0, 0, 0, 0.5)' }}>
            <div className="w-full flex items-center justify-between">
                <Link href="/">
                    <Image src={logo} alt="logo" width={95} height={38} />
                </Link>
                <nav className="flex items-center gap-8">
                    <a href="#" className="text-[14px] text-[#F2F2F2] hover:text-blue-500 transition-colors">Услуги</a>
                    <a href="#" className="text-[14px] text-[#F2F2F2] hover:text-blue-500 transition-colors">Проекты</a>
                    <a href="#" className="text-[14px] text-[#F2F2F2] hover:text-blue-500 transition-colors">Контакты</a>
                    <a href="#" className="text-[14px] text-[#F2F2F2] hover:text-blue-500 transition-colors">Блог</a>
                </nav>
            </div>
        </header>
    )
}

export default Header
