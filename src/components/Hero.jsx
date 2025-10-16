import React from 'react'
import LazyImage from './LazyImage.jsx'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-32">
        <div className="grid lg:grid-cols-2 items-center gap-12">
          <div className="order-2 lg:order-1">
            <LazyImage
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
              fallback="/images/placeholder-workspace.svg"
              alt="Professional web designer at work"
              className="w-full h-auto rounded-2xl shadow-xl"
            />
          </div>
          <div className="order-1 lg:order-2">
            <div className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              👋 Hello, I'm Akib
            </div>
            <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
              I build simple, smart, and stunning <span className="text-primary">websites</span> for local businesses.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-gray-300 leading-relaxed">
              Akibworks helps small vendors and shops get their digital presence started.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#portfolio" className="inline-flex items-center justify-center rounded-lg bg-primary text-white px-8 py-4 font-semibold text-lg hover:bg-primary-dark transition-colors shadow-lg">
                View My Work
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-lg border-2 border-primary text-primary px-8 py-4 font-semibold text-lg hover:bg-primary hover:text-white transition-colors">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
