import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Phone,
  Mail,
  Calendar,
  CheckCircle2,
  Sparkles,
  Clock,
  Award,
} from 'lucide-react';
import { createPageUrl } from '../../utils';

export default function CTASection({ isVisible = true }) {
  const benefits = [
    {
      icon: CheckCircle2,
      text: 'Kostenlose Erstberatung',
    },
    {
      icon: Award,
      text: 'Festpreisgarantie',
    },
    {
      icon: Clock,
      text: 'Schnelle Termine',
    },
    {
      icon: Sparkles,
      text: 'Meisterqualität',
    },
  ];

  const contactOptions = [
    {
      icon: Phone,
      title: 'Anrufen',
      subtitle: '0163 770 91 01',
      description: 'Mo-Fr: 8-18 Uhr',
      href: 'tel:01637709101',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
      gradient: 'from-secondary to-secondary-dark',
      ariaLabel: 'Jetzt anrufen',
    },
    {
      icon: Mail,
      title: 'E-Mail',
      subtitle: 'info@baris-haustechnik.de',
      description: 'Antwort in 24h',
      href: 'mailto:info@baris-haustechnik.de',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      gradient: 'from-blue-500 to-blue-700',
      ariaLabel: 'E-Mail schreiben',
    },
    {
      icon: Calendar,
      title: 'Termin buchen',
      subtitle: 'Online-Terminbuchung',
      description: 'Wunschtermin wählen',
      href: createPageUrl('Contact'),
      isLink: true,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      gradient: 'from-primary to-primary-light',
      ariaLabel: 'Online Termin buchen',
    },
  ];

  return (
    <section
      className={`relative py-16 sm:py-20 lg:py-24 overflow-hidden transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      aria-labelledby="cta-heading"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA Card */}
        <div
          className={`glass rounded-3xl p-8 sm:p-12 lg:p-16 mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left column - Content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-secondary/10 to-secondary-dark/10 text-sm font-medium text-secondary mb-6 transition-all duration-700 delay-100 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <Sparkles className="w-4 h-4" aria-hidden="true" />
                <span>Jetzt starten</span>
              </div>

              {/* Heading */}
              <h2
                id="cta-heading"
                className={`text-3xl sm:text-4xl lg:text-5xl font-black text-primary mb-4 sm:mb-6 transition-all duration-700 delay-200 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                Bereit für Ihr{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary-dark">
                  nächstes Projekt?
                </span>
              </h2>

              {/* Description */}
              <p
                className={`text-lg sm:text-xl text-accent-light mb-8 text-balance transition-all duration-700 delay-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                Lassen Sie uns gemeinsam Ihre Ideen verwirklichen. Kontaktieren Sie uns noch heute
                für eine kostenlose und unverbindliche Beratung.
              </p>

              {/* Benefits */}
              <div
                className={`grid grid-cols-2 gap-4 mb-8 transition-all duration-700 delay-400 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-left"
                    >
                      <Icon
                        className="w-5 h-5 text-secondary flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span className="text-sm sm:text-base font-medium text-primary">
                        {benefit.text}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Primary CTA Button */}
              <div
                className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-700 delay-500 ${
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

                <a
                  href="tel:01637709101"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 glass glass-hover text-primary font-semibold rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 touch-target focus-visible"
                  aria-label="Direkt anrufen"
                >
                  <Phone className="w-5 h-5" aria-hidden="true" />
                  <span>Direkt anrufen</span>
                </a>
              </div>
            </div>

            {/* Right column - Quick contact */}
            <div
              className={`space-y-4 transition-all duration-700 delay-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              {contactOptions.map((option, index) => {
                const Icon = option.icon;
                const Component = option.isLink ? Link : 'a';
                const linkProps = option.isLink
                  ? { to: option.href }
                  : { href: option.href };

                return (
                  <Component
                    key={index}
                    {...linkProps}
                    className="group flex items-center gap-4 p-4 sm:p-6 rounded-2xl bg-white/60 backdrop-blur-md border border-white/30 hover:shadow-lg hover:shadow-secondary/10 transition-all duration-300 hover:scale-105 active:scale-95 touch-target"
                    aria-label={option.ariaLabel}
                  >
                    <div
                      className={`flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-xl ${option.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon
                        className={`w-7 h-7 sm:w-8 sm:h-8 ${option.color}`}
                        aria-hidden="true"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-base sm:text-lg text-primary mb-1">
                        {option.title}
                      </div>
                      <div className="text-sm sm:text-base text-accent truncate mb-0.5">
                        {option.subtitle}
                      </div>
                      <div className="text-xs sm:text-sm text-accent-light">
                        {option.description}
                      </div>
                    </div>
                    <ArrowRight
                      className={`flex-shrink-0 w-5 h-5 ${option.color} group-hover:translate-x-1 transition-transform`}
                      aria-hidden="true"
                    />
                  </Component>
                );
              })}
            </div>
          </div>
        </div>

        {/* Emergency CTA */}
        <div
          className={`glass rounded-2xl p-6 sm:p-8 text-center transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-6">
              {/* Emergency icon */}
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-75" />
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-lg">
                  <Phone className="w-8 h-8 sm:w-10 sm:h-10 text-white" aria-hidden="true" />
                </div>
              </div>

              {/* Emergency text */}
              <div className="text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-black text-primary mb-2">
                  Notfall? Wir sind für Sie da!
                </h3>
                <p className="text-base sm:text-lg text-accent-light">
                  24/7 Notdienst für Sanitär, Heizung und Gas
                </p>
              </div>
            </div>

            {/* Emergency button */}
            <a
              href="tel:01637709101"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:shadow-red-500/30 transition-all duration-300 hover:scale-105 active:scale-95 touch-target focus-visible text-lg"
              aria-label="24h Notdienst anrufen"
            >
              <Phone className="w-6 h-6" aria-hidden="true" />
              <span>0163 770 91 01</span>
              <ArrowRight
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              />
            </a>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-6 text-sm text-accent-light">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-red-500" aria-hidden="true" />
                <span>Durchschnittlich 2h Reaktionszeit</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500" aria-hidden="true" />
                <span>Sofortige Hilfe garantiert</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom trust bar */}
        <div
          className={`mt-12 flex flex-wrap justify-center gap-4 sm:gap-8 transition-all duration-700 delay-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {[
            { icon: Award, text: 'Meisterbetrieb' },
            { icon: CheckCircle2, text: 'Festpreisgarantie' },
            { icon: Clock, text: 'Pünktlich & Zuverlässig' },
            { icon: Sparkles, text: '5 Jahre Garantie' },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-primary"
              >
                <Icon className="w-4 h-4 text-secondary" aria-hidden="true" />
                <span>{item.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
