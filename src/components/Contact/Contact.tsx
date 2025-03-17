'use client'
import { useState } from 'react'
import '../../style/card-line.css'
import Container from '../ui/Container'

const Contact = () => {
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
        <section className="py-20 bg-black" id="contact">
            <Container>
                <div className="text-center mb-10">
                    <div className="inline-block px-4 py-1 rounded-full bg-white/10 text-white text-sm mb-4 switch-box">
                        Контакты
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Свяжитесь с нами</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Есть вопросы о наших услугах или вы готовы преобразовать свой бизнес с помощью ИИ? Мы здесь, чтобы помочь!
                    </p>
                </div>
                <div className='process-card p-[20px]'>
                    <div className="flex flex-col md:flex-row gap-10">
                        <div className="md:w-1/2">
                            <form onSubmit={handleSubmit} className="rounded-xl">
                                <div className='flex w-full'>
                                    <div className="mb-4 w-1/2">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Имя"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full p-4 bg-[#0A1128] border border-[#01195e] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                    <div className="mb-4 w-1/2">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full p-4 bg-[#0A1128] border border-[#01195e] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <textarea
                                        name="message"
                                        placeholder="Сообщение"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className="w-full p-4 bg-[#0A1128] border border-[#01195e] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                    Отправить сообщение                            </button>
                            </form>
                        </div>

                        <div className="md:w-1/2 bg-[#050A1B] p-8 rounded-xl border border-[#01195e]">
                            <div className="mb-8">
                                <h3 className="text-gray-400 mb-2">Email:</h3>
                                <a href="mailto:0code.zm@gmail.com" className="text-white text-xl font-medium">0code.zm@gmail.com
                                </a>
                            </div>

                            <div className="mb-8">
                                <h3 className="text-gray-400 mb-2">Телефон:</h3>
                                <a href="tel:+79601078900" className="text-white text-xl font-medium">+7 960 107-89-00</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Contact 