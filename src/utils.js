import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function createPageUrl(pageName) {
  const routes = {
    'Home': '/',
    'Services': '/services',
    'About': '/about',
    'Projects': '/projects',
    'Blog': '/blog',
    'BlogPost': '/blog/post',
    'Contact': '/contact',
    'Impressum': '/impressum',
    'Datenschutz': '/datenschutz'
  }
  return routes[pageName] || '/'
}
