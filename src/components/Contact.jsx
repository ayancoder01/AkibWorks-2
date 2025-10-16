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
          <p className="text-lg text-white/90 max-w-2xl mx-auto">Want to create a website for your business? Let's talk!</p>
        </div>
        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <div className="grid md:grid-cols-2 gap-8">
            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                <input id="name" name="name" type="text" required className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                <input id="email" name="email" type="email" required className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea id="message" name="message" rows="4" required className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"></textarea>
              </div>
              <button type="submit" className="w-full inline-flex items-center justify-center rounded-lg bg-primary text-white px-8 py-4 font-semibold hover:bg-primary-dark transition-colors">
                Send Message
              </button>
            </form>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-slate-900 mb-4">Let's Connect</h3>
                <p className="text-slate-600 mb-6">Ready to bring your business online? I'm here to help you create a stunning website that drives results.</p>
              </div>
              <div className="space-y-4">
                <a className="flex items-center gap-3 p-4 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors" href={`https://wa.me/${SITE.whatsappNumberIntl}?text=Hi%20Akib%2C%20I%20want%20a%20website`} target="_blank" rel="noopener">
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm">📱</span>
                  </div>
                  <div>
                    <div className="font-medium text-slate-900">WhatsApp</div>
                    <div className="text-sm text-slate-600">Quick response guaranteed</div>
                  </div>
                </a>
                <div className="flex items-center gap-3 p-4 rounded-lg border border-slate-200">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm">✉️</span>
                  </div>
                  <div>
                    <div className="font-medium text-slate-900">Email</div>
                    <a className="text-sm text-slate-600 hover:text-primary" href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>
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
