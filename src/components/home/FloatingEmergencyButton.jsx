import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';

export default function FloatingEmergencyButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a
      href="tel:01637709101"
      className={`fixed bottom-6 right-4 sm:bottom-8 sm:right-8 z-50 transition-all duration-500 no-print ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20 pointer-events-none'
      }`}
      aria-label="24h Notdienst anrufen"
    >
      <button className="relative group touch-target" aria-hidden="true">
        {/* Pulsing ring */}
        <div className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-75" />

        {/* Main button - Mobile optimized size */}
        <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-[0_8px_32px_rgba(239,68,68,0.4)] hover:shadow-[0_16px_48px_rgba(239,68,68,0.6)] transition-all duration-300 group-hover:scale-110 active:scale-95">
          <Phone className="w-7 h-7 sm:w-8 sm:h-8 text-white" aria-hidden="true" />
        </div>

        {/* Tooltip - Hidden on small mobile */}
        <div className="hidden sm:block absolute right-full mr-3 sm:mr-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          <div className="bg-primary text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium shadow-lg">
            🚨 24h Notdienst
            <div className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-primary" />
          </div>
        </div>
      </button>
    </a>
  );
}
