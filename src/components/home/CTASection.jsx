import React from 'react';
import { Phone, Mail, ArrowRight, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTASection = ({ isVisible = true }) => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#1a3a52] via-[#2d5a7b] to-[#1a3a52] relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-[#00b050] rounded-full blur-3xl opacity-20 top-0 left-1/4 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-[#00b050] rounded-full blur-3xl opacity-20 bottom-0 right-1/4 animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`backdrop-blur-xl bg-white/10 rounded-3xl p-8 md:p-12 lg:p-16 border border-white/20 shadow-2xl transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Text */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Bereit für Ihr Projekt?
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-6">
                Kontaktieren Sie uns noch heute für eine kostenlose Beratung.
                Unser Team steht Ihnen jederzeit zur Verfügung.
              </p>

              {/* Features */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-white/90 justify-center lg:justify-start">
                  <Clock className="w-5 h-5 text-[#00b050]" />
                  <span>24/7 Notdienst verfügbar</span>
                </div>
                <div className="flex items-center gap-3 text-white/90 justify-center lg:justify-start">
                  <Phone className="w-5 h-5 text-[#00b050]" />
                  <span>Schnelle Reaktionszeit</span>
                </div>
                <div className="flex items-center gap-3 text-white/90 justify-center lg:justify-start">
                  <Mail className="w-5 h-5 text-[#00b050]" />
                  <span>Kostenlose Erstberatung</span>
                </div>
              </div>
            </div>

            {/* Right Side - CTA Buttons */}
            <div className="space-y-4">
              <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 md:p-8 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Phone className="w-6 h-6 text-[#00b050]" />
                  Rufen Sie uns an
                </h3>
                <a
                  href="tel:+491234567890"
                  className="block text-2xl md:text-3xl font-bold text-[#00b050] mb-4 hover:text-[#00b050]/80 transition-colors"
                >
                  +49 123 456 7890
                </a>
                <Button
                  className="min-h-[44px] w-full bg-[#00b050] hover:bg-[#00b050]/90 text-white py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  Jetzt anrufen
                  <Phone className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                </Button>
              </div>

              <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 md:p-8 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Mail className="w-6 h-6 text-[#00b050]" />
                  Oder schreiben Sie uns
                </h3>
                <a
                  href="mailto:info@haustechnik.de"
                  className="block text-lg text-white/90 mb-4 hover:text-white transition-colors"
                >
                  info@haustechnik.de
                </a>
                <Button
                  variant="outline"
                  className="min-h-[44px] w-full backdrop-blur-md bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  Kontaktformular
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
