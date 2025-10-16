import React, { useState } from 'react'
import { useTheme } from '../context/ThemeContext.jsx'

export default function Header() {
  const [open, setOpen] = useState(false)
  const { isDark, toggleTheme } = useTheme()
  
  return (
    <header className="sticky top-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="font-heading text-xl font-semibold tracking-tight text-slate-900 dark:text-white">Akibworks</a>
          <div className="flex items-center gap-3">
            <button 
              onClick={toggleTheme}
              className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-slate-300 dark:border-gray-600 text-slate-700 dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            <button aria-label="Open Menu" className="sm:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-slate-300 dark:border-gray-600 text-slate-700 dark:text-gray-300" onClick={() => setOpen(v=>!v)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
            <nav className="hidden sm:flex items-center gap-6 text-slate-700 dark:text-gray-300">
              <a href="#about" className="hover:text-slate-900 dark:hover:text-white font-medium transition-colors">About</a>
              <a href="#portfolio" className="hover:text-slate-900 dark:hover:text-white font-medium transition-colors">Work</a>
              <a href="#services" className="hover:text-slate-900 dark:hover:text-white font-medium transition-colors">Services</a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-primary text-white px-6 py-2 font-semibold hover:bg-primary-dark transition-colors">Get Started</a>
            </nav>
          </div>
        </div>
        {open && (
          <div className="sm:hidden pb-4">
            <div className="flex flex-col gap-3">
              <a href="#about" className="py-2">About</a>
              <a href="#portfolio" className="py-2">Work</a>
              <a href="#services" className="py-2">Services</a>
              <a href="#contact" className="py-2">Get a Website</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
