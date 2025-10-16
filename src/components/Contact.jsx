import React from 'react'
import { SITE } from '../config/site.js'

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const name = form.name.value.trim()
    const email = form.email.value.trim()
    const message = form.message.value.trim()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!name || !emailRegex.test(email) || !message) return
    const subject = encodeURIComponent(`New inquiry from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)
    window.location.href = `mailto:${SITE.contactEmail}?subject=${subject}&body=${body}`
    form.reset()
  }

  return (
    <section id="contact" className="py-16 sm:py-24 bg-gradient-to-br from-primary to-primary-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">GET IN TOUCH</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Ready to transform your business with a professional website? Let's discuss your project!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white text-center">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="font-semibold mb-2">Fast Response</h3>
            <p className="text-white/80 text-sm">Usually respond within 2-4 hours</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white text-center">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💬</span>
            </div>
            <h3 className="font-semibold mb-2">Free Consultation</h3>
            <p className="text-white/80 text-sm">No commitment, just honest advice</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white text-center">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="font-semibold mb-2">Custom Solutions</h3>
            <p className="text-white/80 text-sm">Tailored to your business needs</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="font-heading text-2xl font-bold text-slate-900 mb-6">Send Me a Message</h3>
              <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                    <input id="name" name="name" type="text" required className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
                    <input id="email" name="email" type="email" required className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors" placeholder="your@email.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="business" className="block text-sm font-medium text-slate-700 mb-2">Business Name</label>
                  <input id="business" name="business" type="text" className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors" placeholder="Your business name (optional)" />
                </div>
                <div>
                  <label htmlFor="project" className="block text-sm font-medium text-slate-700 mb-2">Project Type</label>
                  <select id="project" name="project" className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors">
                    <option value="">Select project type</option>
                    <option value="business-website">Business Website</option>
                    <option value="ecommerce">E-commerce Store</option>
                    <option value="portfolio">Portfolio Website</option>
                    <option value="landing-page">Landing Page</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Project Details *</label>
                  <textarea id="message" name="message" rows="4" required className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors" placeholder="Tell me about your project, goals, and any specific requirements..."></textarea>
                </div>
                <button type="submit" className="w-full inline-flex items-center justify-center rounded-lg bg-primary text-white px-8 py-4 font-semibold hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl">
                  Send Message
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="font-heading text-2xl font-bold text-slate-900 mb-6">Get In Touch Directly</h3>
                <p className="text-slate-600 mb-6">
                  Prefer to reach out directly? Choose your preferred method below. I'm always happy to discuss your project!
                </p>
              </div>

              <div className="space-y-4">
                <a className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 hover:bg-slate-50 hover:border-primary transition-all duration-300 group" href={`https://wa.me/${SITE.whatsappNumberIntl}?text=Hi%20Akib%2C%20I%20want%20a%20website%20for%20my%20business`} target="_blank" rel="noopener">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-white text-lg">📱</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-slate-900">WhatsApp</div>
                    <div className="text-sm text-slate-600">Quick response • Usually within 1 hour</div>
                  </div>
                  <svg className="w-5 h-5 text-slate-400 group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>

                <a className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 hover:bg-slate-50 hover:border-primary transition-all duration-300 group" href={`mailto:${SITE.contactEmail}?subject=Website Project Inquiry`}>
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-white text-lg">✉️</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-slate-900">Email</div>
                    <div className="text-sm text-slate-600">{SITE.contactEmail}</div>
                  </div>
                  <svg className="w-5 h-5 text-slate-400 group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 bg-slate-50">
                  <div className="w-12 h-12 bg-slate-400 rounded-xl flex items-center justify-center">
                    <span className="text-white text-lg">🕒</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-slate-900">Response Time</div>
                    <div className="text-sm text-slate-600">Mon-Fri: 2-4 hours • Weekends: 4-8 hours</div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-6">
                <h4 className="font-semibold text-slate-900 mb-3">What happens next?</h4>
                <div className="space-y-2 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    <span>I'll review your project details</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    <span>Schedule a free consultation call</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    <span>Provide a custom quote and timeline</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
