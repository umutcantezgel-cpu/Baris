/**
 * Utility functions for the Bariş Haustechnik website
 */

/**
 * Creates a page URL based on the page name
 * @param {string} pageName - Name of the page
 * @returns {string} - URL path
 */
export const createPageUrl = (pageName) => {
  const routes = {
    'Home': '/',
    'Services': '/leistungen',
    'About': '/ueber-uns',
    'Projects': '/referenzen',
    'Blog': '/blog',
    'BlogPost': '/blog/artikel',
    'Contact': '/kontakt',
    'Impressum': '/impressum',
    'Datenschutz': '/datenschutz',
  };

  return routes[pageName] || '/';
};

/**
 * Formats a phone number for display
 * @param {string} phone - Phone number
 * @returns {string} - Formatted phone number
 */
export const formatPhoneNumber = (phone) => {
  return phone.replace(/(\d{4})(\d{7})/, '$1 $2');
};

/**
 * Validates email address
 * @param {string} email - Email address
 * @returns {boolean} - True if valid
 */
export const isValidEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

/**
 * Debounce function for performance optimization
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} - Debounced function
 */
export const debounce = (func, wait = 300) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Scroll to element with smooth behavior
 * @param {string} elementId - ID of the element
 */
export const scrollToElement = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

/**
 * Get reading time estimate
 * @param {string} text - Text content
 * @returns {number} - Reading time in minutes
 */
export const getReadingTime = (text) => {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
};

/**
 * Format date to German locale
 * @param {Date|string} date - Date to format
 * @returns {string} - Formatted date
 */
export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('de-DE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

/**
 * Check if device is mobile
 * @returns {boolean} - True if mobile
 */
export const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
};

/**
 * Lazy load images
 * @param {HTMLImageElement} img - Image element
 */
export const lazyLoadImage = (img) => {
  const src = img.dataset.src;
  if (!src) return;

  const loadImage = () => {
    img.src = src;
    img.classList.add('loaded');
  };

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadImage();
          observer.unobserve(img);
        }
      });
    });
    observer.observe(img);
  } else {
    loadImage();
  }
};

/**
 * Generate a unique ID
 * @returns {string} - Unique ID
 */
export const generateId = () => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Sanitize HTML to prevent XSS
 * @param {string} html - HTML string
 * @returns {string} - Sanitized HTML
 */
export const sanitizeHTML = (html) => {
  const div = document.createElement('div');
  div.textContent = html;
  return div.innerHTML;
};

/**
 * Track event for analytics (placeholder)
 * @param {string} category - Event category
 * @param {string} action - Event action
 * @param {string} label - Event label
 */
export const trackEvent = (category, action, label) => {
  // Analytics tracking can be implemented here
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
    });
  }
};
