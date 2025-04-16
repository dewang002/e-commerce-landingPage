import React from "react"
import Footer from "./Pages/Footer"
import Header from "./Pages/Header"
import HeroSection from "./Pages/HeroSection"
import Features from "./Pages/Features"
import Testimonials from "./Pages/Testimonials"
import NewsLetter from "./Pages/NewsLetter"

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <Features />
      <Testimonials />
      <NewsLetter/>
      <Footer />
    </div>
  )
}

