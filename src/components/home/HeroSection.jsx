import React from 'react';
import { ArrowRight, Wrench, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = ({ isVisible = true }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a3a52] via-[#2d5a7b] to-[#1a3a52]">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-[#00b050] rounded-full blur-3xl opacity-20 -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-[#00b050] rounded-full blur-3xl opacity-20 -bottom-48 -right-48 animate-pulse delay-700"></div>
      </div>

      {/* Content */}
      <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
          <div className="flex justify-center mb-6">
            <Wrench className="w-16 h-16 text-[#00b050]" strokeWidth={1.5} />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Ihr Partner für
            <span className="block text-[#00b050]">Haustechnik</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Professionelle Sanitär-, Heizungs- und Klimatechnik für Ihr Zuhause und Gewerbe.
            Zuverlässig, effizient und immer für Sie da.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              className="min-h-[44px] bg-[#00b050] hover:bg-[#00b050]/90 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              Jetzt Anfragen
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              className="min-h-[44px] backdrop-blur-md bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Phone className="mr-2 w-5 h-5" />
              Notdienst 24/7
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
