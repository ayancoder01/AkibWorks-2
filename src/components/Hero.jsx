import React from 'react'
import LazyImage from './LazyImage.jsx'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-blue-50 to-blue-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
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
              I'll put your <span className="text-primary">business online</span> - everything handled for you.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-gray-300 leading-relaxed">
              From salons to shops, restaurants to services - I handle everything: design, coding, domain, hosting, and deployment. You focus on your business, I'll handle the website.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Complete setup in 7-10 days</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Domain + hosting included</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Mobile-friendly design</span>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-primary text-white px-8 py-4 font-semibold text-lg hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Get Your Website
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#portfolio" className="inline-flex items-center justify-center rounded-lg border-2 border-primary text-primary px-8 py-4 font-semibold text-lg hover:bg-primary hover:text-white transition-all duration-300">
                View My Work
              </a>
            </div>
            <div className="mt-6 text-sm text-slate-500 dark:text-gray-400">
              💡 Free consultation • Affordable pricing • Everything included (domain, hosting, design)
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
