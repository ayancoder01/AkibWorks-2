import React from 'react'
import { SITE } from '../config/site.js'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-600 dark:text-gray-400">
          <div>© 2025 Akibworks — All Rights Reserved</div>
          <div>Built with ❤ by Akib</div>
          <div className="flex items-center gap-4">
            <a href={SITE.socials.linkedin} target="_blank" rel="noopener" className="hover:underline hover:text-primary">LinkedIn</a>
            <a href={SITE.socials.github} target="_blank" rel="noopener" className="hover:underline hover:text-primary">GitHub</a>
            <a href={SITE.socials.instagram} target="_blank" rel="noopener" className="hover:underline hover:text-primary">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
