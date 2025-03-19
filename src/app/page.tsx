import Blog from "@/components/Blog/Blog"
import Contact from "@/components/Contact/Contact"
import FAQ from "@/components/FAQ/FAQ"
import Features from "@/components/Features/Features"
import Hero from "@/components/Hero/Hero"
import Process from "@/components/Process/Process"
import Projects from "@/components/Projects/Projects"
import Services from "@/components/Services/Services"
import Testimonials from "@/components/Testimonials/Testimonials"
import VideoPlayer from '@/components/VideoPlayer/VideoPlayer'

export default function Home() {
  return (
    <main>
      <Hero />
      <VideoPlayer />
      <Process />
      <Services />
      <Features />
      <Projects />
      <Testimonials />
      <Blog />
      <FAQ />
      <Contact />
    </main>
  )
}
