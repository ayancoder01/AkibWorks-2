import React from 'react'

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">SERVICES</h2>
          <p className="text-lg text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">I help individuals and small businesses build their online presence through:</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            ['Business Websites', 'Clean and professional websites to showcase your services.', '🏢'],
            ['Portfolio Websites', 'Present your work with clarity and style.', '💼'],
            ['Landing Pages', 'Focused pages for campaigns and launches.', '🚀'],
            ['Simple Web Applications', 'Lightweight tools tailored for your workflow.', '⚡'],
            ['(Future) Mobile App Development', 'Planned expansion into mobile solutions.', '📱']
          ].map(([title, desc, icon]) => (
            <div key={title} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-gray-700 hover:shadow-lg transition-shadow group">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-white text-xl">{icon}</span>
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{title}</h3>
              <p className="text-slate-600 dark:text-gray-300 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-slate-600 mb-6">Not sure what you need? I'll suggest the simplest option that fits your goal and budget.</p>
          <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-primary text-white px-8 py-3 font-semibold hover:bg-primary-dark transition-colors">
            Get Started
          </a>
        </div>
      </div>
    </section>
  )
}
