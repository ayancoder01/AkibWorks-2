import React from 'react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Priya Sharma',
      business: 'Glamour Beauty Salon, Mumbai',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: "Akib ne hamare salon ka website banaya aur ab hume zyada customers mil rahe hain. Everything handled - domain, hosting, design. Very professional work!"
    },
    {
      name: 'Rajesh Kumar',
      business: 'Mobile Point, Delhi',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: "Perfect website for my mobile repair shop. Customers can easily find my location and services. Akib handled everything from start to finish. Highly recommended!"
    },
    {
      name: 'Meera Patel',
      business: 'Spice Garden Restaurant, Ahmedabad',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: "Our restaurant needed online presence. Akib created beautiful website with menu, location, everything. Now customers can see our food photos and contact us easily."
    },
    {
      name: 'Amit Singh',
      business: 'FitZone Gym, Pune',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: "Bahut accha kaam kiya Akib ne. Website dekh kar log gym join kar rahe hain. Complete package - domain, hosting, design sab kuch included tha."
    }
  ]

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            WHAT CLIENTS SAY
          </h2>
          <p className="text-lg text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
            Don't just take my word for it. Here's what local business owners say about working with Akibworks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-slate-50 dark:bg-gray-800 rounded-2xl p-8 border border-slate-200 dark:border-gray-700">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-slate-700 dark:text-gray-300 mb-6 leading-relaxed">
                "{testimonial.text}"
              </blockquote>
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">{testimonial.name}</div>
                  <div className="text-sm text-slate-600 dark:text-gray-400">{testimonial.business}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-4 bg-slate-50 dark:bg-gray-800 rounded-2xl p-6 border border-slate-200 dark:border-gray-700">
            <div className="flex -space-x-2">
              {testimonials.slice(0, 3).map((testimonial, index) => (
                <img 
                  key={index}
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800 object-cover"
                />
              ))}
            </div>
            <div className="text-left">
              <div className="font-semibold text-slate-900 dark:text-white">Join 50+ Happy Clients</div>
              <div className="text-sm text-slate-600 dark:text-gray-400">Ready to grow your business online?</div>
            </div>
            <a href="#contact" className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
