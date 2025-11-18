import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Clock, Award, Wrench } from 'lucide-react';
import { createPageUrl } from '../../utils';

export default function HeroSection({ isVisible = true }) {
  return (
    <section
      className={`relative min-h-[90vh] flex items-center justify-center overflow-hidden transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      aria-label="Hauptbereich"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-secondary/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-accent/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>

      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column - Text content */}
          <div className="text-center lg:text-left space-y-6 sm:space-y-8">
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-primary transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <Award className="w-4 h-4 text-secondary" aria-hidden="true" />
              <span>Über 25 Jahre Erfahrung</span>
            </div>

            {/* Main heading */}
            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-primary leading-tight transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Ihr Partner für{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary-dark">
                Sanitär, Heizung & Solar
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className={`text-lg sm:text-xl text-accent-light max-w-2xl mx-auto lg:mx-0 text-balance transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Professionelle Haustechnik-Lösungen in Wetzlar und Umgebung. Von der Planung bis zur
              Wartung – wir sind Ihr zuverlässiger Meisterbetrieb.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-700 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <Link
                to={createPageUrl('Contact')}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-secondary to-secondary-dark text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-secondary/30 transition-all duration-300 hover:scale-105 active:scale-95 touch-target focus-visible"
                aria-label="Jetzt Beratung anfordern"
              >
                <span>Jetzt Beratung anfordern</span>
                <ArrowRight
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  aria-hidden="true"
                />
              </Link>

              <Link
                to={createPageUrl('Services')}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 glass glass-hover text-primary font-semibold rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 touch-target focus-visible"
                aria-label="Unsere Leistungen ansehen"
              >
                <Wrench className="w-5 h-5" aria-hidden="true" />
                <span>Unsere Leistungen</span>
              </Link>
            </div>

            {/* Trust indicators */}
            <div
              className={`flex flex-wrap gap-6 sm:gap-8 justify-center lg:justify-start pt-4 transition-all duration-700 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="flex items-center gap-2 text-accent">
                <Shield className="w-5 h-5 text-secondary" aria-hidden="true" />
                <span className="text-sm font-medium">Meisterbetrieb</span>
              </div>
              <div className="flex items-center gap-2 text-accent">
                <Clock className="w-5 h-5 text-secondary" aria-hidden="true" />
                <span className="text-sm font-medium">24h Notdienst</span>
              </div>
              <div className="flex items-center gap-2 text-accent">
                <Award className="w-5 h-5 text-secondary" aria-hidden="true" />
                <span className="text-sm font-medium">Zertifiziert</span>
              </div>
            </div>
          </div>

          {/* Right column - Image/Visual */}
          <div
            className={`relative transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            {/* Glass card with gradient */}
            <div className="relative glass rounded-3xl p-8 sm:p-12 lg:p-16">
              {/* Gradient overlay */}
              <div
                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent"
                aria-hidden="true"
              />

              {/* Content */}
              <div className="relative space-y-6">
                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  <div className="text-center p-4 sm:p-6 rounded-2xl bg-white/50 backdrop-blur-sm hover:bg-white/70 transition-all duration-300">
                    <div className="text-3xl sm:text-4xl font-black text-primary">25+</div>
                    <div className="text-sm sm:text-base text-accent-light mt-1">
                      Jahre Erfahrung
                    </div>
                  </div>
                  <div className="text-center p-4 sm:p-6 rounded-2xl bg-white/50 backdrop-blur-sm hover:bg-white/70 transition-all duration-300">
                    <div className="text-3xl sm:text-4xl font-black text-primary">500+</div>
                    <div className="text-sm sm:text-base text-accent-light mt-1">
                      Zufriedene Kunden
                    </div>
                  </div>
                  <div className="text-center p-4 sm:p-6 rounded-2xl bg-white/50 backdrop-blur-sm hover:bg-white/70 transition-all duration-300">
                    <div className="text-3xl sm:text-4xl font-black text-primary">100%</div>
                    <div className="text-sm sm:text-base text-accent-light mt-1">
                      Kundenzufriedenheit
                    </div>
                  </div>
                  <div className="text-center p-4 sm:p-6 rounded-2xl bg-white/50 backdrop-blur-sm hover:bg-white/70 transition-all duration-300">
                    <div className="text-3xl sm:text-4xl font-black text-primary">24/7</div>
                    <div className="text-sm sm:text-base text-accent-light mt-1">
                      Notdienst
                    </div>
                  </div>
                </div>

                {/* Featured badge */}
                <div className="flex items-center justify-center gap-3 p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-secondary/10 to-secondary-dark/10 border border-secondary/20">
                  <Award className="w-8 h-8 text-secondary" aria-hidden="true" />
                  <div className="text-left">
                    <div className="font-bold text-primary">Meisterbetrieb</div>
                    <div className="text-sm text-accent-light">Geprüfte Qualität</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        aria-hidden="true"
      >
        <div className="flex flex-col items-center gap-2 text-accent-light">
          <span className="text-sm font-medium">Mehr erfahren</span>
          <div className="w-6 h-10 border-2 border-accent-light rounded-full flex items-start justify-center p-1">
            <div className="w-1.5 h-3 bg-secondary rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
