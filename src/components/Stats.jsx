import React from 'react'

export default function Stats() {
  const stats = [
    { number: '253k', label: 'Completed Project', icon: '📊' },
    { number: '312k', label: 'World-wide Clients', icon: '🌍' },
    { number: '125k', label: 'Unique Designs', icon: '🎨' },
    { number: '450k', label: 'Cups of Coffee', icon: '☕' }
  ]

  return (
    <section className="py-16 sm:py-24 bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl sm:text-4xl font-bold font-heading mb-2">+{stat.number}</div>
              <div className="text-sm sm:text-base opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
