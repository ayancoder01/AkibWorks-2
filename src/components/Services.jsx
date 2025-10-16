import React from 'react'

export default function Services() {
  const services = [
    {
      title: 'Business Website',
      description: 'Perfect for salons, shops, restaurants, and local service providers',
      price: 'Starting at ₹15,000',
      features: [
        'Complete website setup (design + coding + deployment)',
        'Domain registration & hosting setup',
        'Mobile-friendly responsive design',
        'Up to 5 pages (Home, About, Services, Gallery, Contact)',
        'Contact forms & WhatsApp integration',
        'Google Maps & location setup',
        'Basic SEO optimization',
        'Social media integration',
        '30-day support & training'
      ],
      icon: '🏢',
      popular: true
    },
    {
      title: 'Online Store',
      description: 'Start selling your products online with payment gateway',
      price: 'Starting at ₹25,000',
      features: [
        'Complete e-commerce setup',
        'Product catalog with images',
        'Shopping cart & checkout',
        'Payment gateway integration (Razorpay/PayU)',
        'Order management system',
        'Customer accounts',
        'Mobile-optimized design',
        'Domain & hosting included',
        '60-day support & training'
      ],
      icon: '🛒',
      popular: false
    },
    {
      title: 'Simple Landing Page',
      description: 'Quick online presence for your business',
      price: 'Starting at ₹8,000',
      features: [
        'Single page website',
        'Business information & services',
        'Contact details & location',
        'WhatsApp & call buttons',
        'Mobile-friendly design',
        'Basic SEO setup',
        'Domain & hosting setup',
        '15-day support'
      ],
      icon: '📄',
      popular: false
    }
  ]

  const addOns = [
    { name: 'Logo Design', price: '₹3,000', icon: '🎨' },
    { name: 'Content Writing', price: '₹2,000', icon: '✍️' },
    { name: 'Professional Photos', price: '₹5,000', icon: '📸' },
    { name: 'Monthly Updates', price: '₹1,500/mo', icon: '🛠️' },
  ]

  return (
    <section id="services" className="py-16 sm:py-24 bg-slate-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">SERVICES & PRICING</h2>
          <p className="text-lg text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. Choose the package that fits your business needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className={`relative bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm border ${service.popular ? 'border-primary ring-2 ring-primary/20' : 'border-slate-200 dark:border-gray-700'} hover:shadow-lg transition-shadow`}>
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="font-heading text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-600 dark:text-gray-300 text-sm mb-4">
                  {service.description}
                </p>
                <div className="text-3xl font-bold text-primary mb-2">{service.price}</div>
              </div>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-600 dark:text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a href="#contact" className={`block w-full text-center rounded-lg px-8 py-4 font-semibold transition-colors ${service.popular ? 'bg-primary text-white hover:bg-primary-dark' : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'}`}>
                Get Started
              </a>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-slate-200 dark:border-gray-700 mb-16">
          <h3 className="font-heading text-2xl font-bold text-slate-900 dark:text-white text-center mb-8">
            Add-On Services
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="text-center p-6 bg-slate-50 dark:bg-gray-800 rounded-xl">
                <div className="text-3xl mb-3">{addon.icon}</div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">{addon.name}</h4>
                <p className="text-primary font-bold">{addon.price}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 text-white">
            <h3 className="font-heading text-2xl font-bold mb-4">Not sure what you need?</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              I'll analyze your business and recommend the best solution for your goals and budget. Free consultation included!
            </p>
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-white text-primary px-8 py-4 font-semibold hover:bg-gray-100 transition-colors">
              Get Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
