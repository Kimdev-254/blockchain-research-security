// app/page.jsx
import Header from "@/components/Header/Header"
import Hero from "@/components/Hero/Hero"
import Mission from "@/components/Mission/Mission"
import Features from "@/components/Features/Features"
import Footer from "@/components/Footer/Footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Mission />
        <Features />
      </main>
      <Footer />
    </>
  )
}
