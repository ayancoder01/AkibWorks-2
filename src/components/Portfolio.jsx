import React from 'react'
import LazyImage from './LazyImage.jsx'

const items = [
  { title: 'Doctor Iqbal Clinic', desc: 'A simple clinic website to manage appointments and showcase services.', img: 'https://images.unsplash.com/photo-1580281657527-47f249e8f3b8?q=80&w=800&auto=format&fit=crop', fallback: '/images/placeholder-workspace.svg' },
  { title: 'Telecom Mobile Shop', desc: 'Business website for a local mobile shop showing products and offers.', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop', fallback: '/images/placeholder-workspace.svg' },
  { title: 'Expense Tracker App', desc: 'A simple personal finance tracker for daily expenses.', img: 'https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?q=80&w=800&auto=format&fit=crop', fallback: '/images/placeholder-workspace.svg' },
  { title: 'RK Tailor Website', desc: 'Tailor shop portfolio website with service details and gallery.', img: 'https://images.unsplash.com/photo-1602810318383-9e3f68b9a1fd?q=80&w=800&auto=format&fit=crop', fallback: '/images/placeholder-workspace.svg' },
  { title: 'Student Portfolio Site', desc: 'Modern one-page portfolio for students and freelancers.', img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop', fallback: '/images/placeholder-workspace.svg' }
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16 sm:py-24 bg-slate-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">MY WORK</h2>
          <p className="text-lg text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are a few projects I've been working on — they'll be live soon!
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.title} className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-700 shadow-sm border border-slate-200 dark:border-gray-600 hover:shadow-lg transition-shadow">
              <LazyImage 
                src={item.img} 
                fallback={item.fallback} 
                alt={item.title}
                className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105" 
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">🕒 Coming Soon</span>
                </div>
                <p className="text-slate-600 dark:text-gray-300 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-slate-500 mb-6">All projects are under deployment and will be live soon. Stay tuned!</p>
          <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-primary text-white px-8 py-3 font-semibold hover:bg-primary-dark transition-colors">
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  )
}
