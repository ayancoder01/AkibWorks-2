import React from 'react'

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">ABOUT AKIBWORKS</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-600 dark:text-gray-300 leading-relaxed">
              At Akibworks, I help small businesses go online with clean, fast, and professional websites. Whether it's a salon, a mobile shop, or a local service — I create websites that help them grow and reach new customers.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">JS</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">JavaScript Development</h3>
                  <p className="text-slate-600 text-sm">Modern web applications with React, Node.js</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">UI</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">UI/UX Design</h3>
                  <p className="text-slate-600 text-sm">User-centered design and prototyping</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">WP</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Web Programming</h3>
                  <p className="text-slate-600 text-sm">Full-stack development and deployment</p>
                </div>
              </div>
            </div>
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-primary text-white px-8 py-3 font-semibold hover:bg-primary-dark transition-colors">
              Contact Me
            </a>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white">
              <h3 className="font-heading text-2xl font-bold mb-6">Hire Me For Your Next Project</h3>
              <p className="mb-6 opacity-90">
                Looking for a professional web designer and developer? I'm available for freelance projects and would love to work with you.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>Responsive Web Design</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>Modern JavaScript Frameworks</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>SEO Optimization</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>Fast Delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
