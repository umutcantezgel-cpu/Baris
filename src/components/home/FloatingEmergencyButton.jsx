import React, { useState, useEffect } from 'react';
import { PhoneCall, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FloatingEmergencyButton = ({ isVisible = true }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Show button after scrolling down
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Floating Button */}
      <div
        className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${showButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
      >
        {/* Expanded Card */}
        {isExpanded && (
          <div className="absolute bottom-20 right-0 w-80 backdrop-blur-xl bg-white/95 rounded-2xl p-6 border border-gray-200/50 shadow-2xl animate-in slide-in-from-bottom-5 duration-300">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-[#1a3a52]">
                Notdienst 24/7
              </h3>
              <button
                onClick={toggleExpanded}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-gray-600 mb-4">
              Wir sind rund um die Uhr für Sie erreichbar. Bei Notfällen helfen wir sofort!
            </p>

            <div className="space-y-3">
              <a
                href="tel:+491234567890"
                className="block"
              >
                <Button
                  className="min-h-[44px] w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <PhoneCall className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                  Jetzt anrufen
                </Button>
              </a>

              <div className="text-center">
                <a
                  href="tel:+491234567890"
                  className="text-2xl font-bold text-[#1a3a52] hover:text-[#00b050] transition-colors"
                >
                  +49 123 456 7890
                </a>
                <p className="text-sm text-gray-500 mt-1">
                  Durchschnittliche Antwortzeit: &lt; 5 Min
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="mt-4 pt-4 border-t border-gray-200 grid grid-cols-2 gap-2 text-xs text-gray-600">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>24/7 verfügbar</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Schnell vor Ort</span>
              </div>
            </div>
          </div>
        )}

        {/* Main Button */}
        <button
          onClick={toggleExpanded}
          className="group relative min-h-[56px] min-w-[56px] backdrop-blur-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 p-4 animate-pulse hover:animate-none"
          aria-label="Notdienst kontaktieren"
        >
          <PhoneCall className="w-6 h-6 group-hover:rotate-12 transition-transform" />

          {/* Pulse Ring */}
          <span className="absolute inset-0 rounded-full bg-red-600 animate-ping opacity-75"></span>

          {/* Badge */}
          {!isExpanded && (
            <span className="absolute -top-1 -right-1 bg-white text-red-600 text-xs font-bold px-2 py-1 rounded-full shadow-lg">
              24/7
            </span>
          )}
        </button>

        {/* Tooltip */}
        {!isExpanded && showButton && (
          <div className="absolute bottom-full right-0 mb-2 px-3 py-2 backdrop-blur-md bg-gray-900/90 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Notdienst 24/7
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900/90"></div>
          </div>
        )}
      </div>
    </>
  );
};

export default FloatingEmergencyButton;
