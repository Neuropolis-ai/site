'use client'

import { createContext, ReactNode, useContext, useEffect, useState } from 'react'

type Theme = 'dark' | 'light'

interface ThemeContextType {
    theme: Theme
    toggleTheme: () => void
    isDark: boolean
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<Theme>('dark')

    useEffect(() => {
        try {
            const storedTheme = localStorage.getItem('theme') as Theme
            if (storedTheme) {
                setTheme(storedTheme)
                document.documentElement.setAttribute('data-theme', storedTheme)
            } else {
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
                const initialTheme = prefersDark ? 'dark' : 'light'
                setTheme(initialTheme)
                document.documentElement.setAttribute('data-theme', initialTheme)
                localStorage.setItem('theme', initialTheme)
            }
        } catch (e) {
            console.error('Error setting initial theme:', e)
            setTheme('dark')
            document.documentElement.setAttribute('data-theme', 'dark')
        }
    }, [])

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark'
        setTheme(newTheme)
        document.documentElement.setAttribute('data-theme', newTheme)
        localStorage.setItem('theme', newTheme)
    }

    const isDark = theme === 'dark'

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, isDark }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    const context = useContext(ThemeContext)
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }
    return context
} 