import React from 'react'

export default function About() {
  const skills = [
    { name: 'React & JavaScript', level: 90, icon: '⚛️' },
    { name: 'UI/UX Design', level: 85, icon: '🎨' },
    { name: 'Node.js & Backend', level: 80, icon: '⚙️' },
    { name: 'SEO & Performance', level: 88, icon: '🚀' },
  ]

  const experience = [
    { year: '2024', title: 'Freelance Web Developer', desc: 'Building custom websites for local businesses' },
    { year: '2023', title: 'Frontend Specialist', desc: 'Focused on React and modern web technologies' },
    { year: '2022', title: 'Started Web Development Journey', desc: 'Learning full-stack development' },
  ]

  return (
    <section id="about" className="py-16 sm:py-24 bg-slate-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">ABOUT AKIBWORKS</h2>
          <p className="text-lg text-slate-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate about creating digital solutions that help small businesses thrive online
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="font-heading text-2xl font-bold text-slate-900 dark:text-white">My Story</h3>
              <p className="text-lg text-slate-600 dark:text-gray-300 leading-relaxed">
                I help Indian local businesses get online - from beauty salons in Mumbai to mobile repair shops in Delhi, restaurants in Bangalore to clothing stores in Pune. I handle everything: design, coding, domain registration, hosting setup, and deployment.
              </p>
              <p className="text-slate-600 dark:text-gray-300 leading-relaxed">
                My approach is simple: you tell me about your business, I create a complete website solution. No technical knowledge needed from your side - I handle all the technical work while you focus on running your business.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="font-heading text-2xl font-bold text-slate-900 dark:text-white">Skills & Expertise</h3>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{skill.icon}</span>
                        <span className="font-medium text-slate-900 dark:text-white">{skill.name}</span>
                      </div>
                      <span className="text-sm text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-primary rounded-full h-2 transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white">
              <h3 className="font-heading text-2xl font-bold mb-6">Why Choose Akibworks?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Fast Turnaround</h4>
                    <p className="text-white/90 text-sm">Most projects completed within 7-14 days</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Mobile-First Design</h4>
                    <p className="text-white/90 text-sm">Optimized for all devices and screen sizes</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">SEO Ready</h4>
                    <p className="text-white/90 text-sm">Built to rank well on Google from day one</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Ongoing Support</h4>
                    <p className="text-white/90 text-sm">30-day support included with every project</p>
                  </div>
                </div>
              </div>
              <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-white text-primary px-6 py-3 font-semibold hover:bg-gray-100 transition-colors mt-6">
                Start Your Project
              </a>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-gray-700">
              <h3 className="font-heading text-2xl font-bold text-slate-900 dark:text-white mb-6">Experience Timeline</h3>
              <div className="space-y-6">
                {experience.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {item.year.slice(-2)}
                      </div>
                      {index < experience.length - 1 && (
                        <div className="w-0.5 h-12 bg-slate-200 dark:bg-gray-700 mt-2"></div>
                      )}
                    </div>
                    <div className="flex-1 pb-8">
                      <h4 className="font-semibold text-slate-900 dark:text-white">{item.title}</h4>
                      <p className="text-slate-600 dark:text-gray-300 text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
