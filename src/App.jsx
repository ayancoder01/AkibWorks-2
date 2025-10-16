import React from 'react'
import { ThemeProvider } from './context/ThemeContext.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Stats from './components/Stats.jsx'
import Portfolio from './components/Portfolio.jsx'
import Services from './components/Services.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors">
        <Header />
        <main className="flex-1">
          <Hero />
          <About />
          <Stats />
          <Portfolio />
          <Services />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
