'use client'
import { useTheme } from '@/context/ThemeContext'
import { useState } from 'react'
import '../../style/card-line.css'
import Container from '../ui/Container'

const Contact = () => {
    const { isDark } = useTheme()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Here you would normally send the form data to your backend
        console.log('Form submitted:', formData)
        // Reset form
        setFormData({ name: '', email: '', message: '' })
        alert('Message sent! We will get back to you soon.')
    }

    return (
        <section className="py-20 bg-white dark:bg-black" id="contact">
            <Container>
                <div className="text-center mb-10">
                    <div className={`inline-block px-4 py-1 rounded-full text-sm mb-4 switch-box ${!isDark && 'light-switch-box'}`}>
                        Контакты
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">Свяжитесь с нами</h2>
                    <p className="dark:text-[#919191] text-gray-600 max-w-2xl mx-auto max-[425px]:text-[14px]">
                        Есть вопросы о наших услугах или вы готовы преобразовать свой бизнес с помощью ИИ? Мы здесь, чтобы помочь!
                    </p>
                </div>
                <div className={`p-[20px] border max-[425px]:p-[10px] ${isDark
                    ? 'contact-card border-[#00185e]!important'
                    : 'bg-gray-50 border-gray-200'
                    }`}>
                    <div className="flex max-[1024px]:flex-col max-[1024px]:flex-col-reverse gap-10 max-[425px]:gap-[20px]">
                        <div className="md:w-1/2">
                            <form onSubmit={handleSubmit} className="rounded-xl">
                                <div className='flex w-full gap-[10px] max-[1024px]:flex-col'>
                                    <div className="w-1/2 max-[1024px]:w-full">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Имя"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className={`w-full p-3 rounded-[10px] outline-none max-[425px]:text-[12px] ${isDark
                                                ? 'bg-[#060811] border-[#262626] text-white'
                                                : 'bg-white border-gray-300 text-gray-800'
                                                } border`}
                                        />
                                    </div>
                                    <div className="mb-3 w-1/2 max-[1024px]:w-full">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className={`w-full p-3 rounded-[10px] outline-none max-[425px]:text-[12px] ${isDark
                                                ? 'bg-[#060811] border-[#262626] text-white'
                                                : 'bg-white border-gray-300 text-gray-800'
                                                } border`}
                                        />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <textarea
                                        name="message"
                                        placeholder="Сообщение"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className={`w-full p-3 rounded-[10px] outline-none max-[425px]:text-[12px] ${isDark
                                            ? 'bg-[#060811] border-[#262626] text-white'
                                            : 'bg-white border-gray-300 text-gray-800'
                                            } border`}
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-[#153aa1] text-white py-[13px] px-6 rounded-[10px] hover:bg-[#102a71] transition-colors max-[425px]:text-[12px]"
                                >
                                    Отправить сообщение
                                </button>
                            </form>
                        </div>

                        <div className={`md:w-1/2 p-8 max-[425px]:p-[15px] rounded-xl border ${isDark
                            ? 'bg-[#05060a] border-[#040b23]'
                            : 'bg-white border-gray-200'
                            }`}>
                            <div className="mb-8">
                                <h3 className={`${isDark ? 'text-[#919191]' : 'text-gray-500'} mb-2`}>Email:</h3>
                                <a href="mailto:0code.zm@gmail.com" className={`${isDark ? 'text-white' : 'text-gray-800'} text-xl font-medium max-[1024px]:text-base`}>
                                    0code.zm@gmail.com
                                </a>
                            </div>

                            <div className="mb-8">
                                <h3 className={`${isDark ? 'text-[#919191]' : 'text-gray-500'} mb-2`}>Телефон:</h3>
                                <a href="tel:+79601078900" className={`${isDark ? 'text-white' : 'text-gray-800'} text-xl font-medium max-[1024px]:text-base`}>
                                    +7 960 107-89-00
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Contact 