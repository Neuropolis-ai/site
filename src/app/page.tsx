import Features from "@/components/Features/Features"
import Header from "@/components/Header/Header"
import Hero from "@/components/Hero/Hero"
import Process from "@/components/Process/Process"
import Services from "@/components/Services/Services"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Process />
      <Services />
      <Features />
    </main>
  )
}
