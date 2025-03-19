import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import { ThemeProvider } from "@/context/ThemeContext"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Noctis AI - Custom AI Solutions for Business",
  description: "Noctis AI provides cutting-edge artificial intelligence solutions to help businesses automate processes, gain insights, and improve customer experiences.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              try {
                const storedTheme = localStorage.getItem('theme');
                if (storedTheme) {
                  document.documentElement.setAttribute('data-theme', storedTheme);
                } else {
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  const initialTheme = prefersDark ? 'dark' : 'light';
                  document.documentElement.setAttribute('data-theme', initialTheme);
                  localStorage.setItem('theme', initialTheme);
                }
              } catch (e) {
                console.error('Error setting initial theme:', e);
                document.documentElement.setAttribute('data-theme', 'dark');
              }
            })();
          `
        }} />
      </head>
      <body className={`${inter.className} antialiased dark:bg-[#050505] bg-[#ffffff] text-foreground`}>
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
