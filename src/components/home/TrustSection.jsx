import React from 'react';
import { Shield, Award, Users, Clock, CheckCircle2, Star, TrendingUp, Heart } from 'lucide-react';

export default function TrustSection({ isVisible = true }) {
  const trustFactors = [
    {
      icon: Shield,
      title: 'Meisterbetrieb',
      description: 'Geprüfte Qualität und Fachkompetenz seit über 25 Jahren',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Award,
      title: 'Zertifiziert',
      description: 'Alle relevanten Zertifizierungen und regelmäßige Weiterbildungen',
      color: 'text-amber-600',
      bgColor: 'bg-amber-50',
    },
    {
      icon: Users,
      title: '500+ Zufriedene Kunden',
      description: 'Vertrauen Sie auf die Erfahrung aus hunderten erfolgreicher Projekte',
      color: 'text-secondary',
      bgColor: 'bg-green-50',
    },
    {
      icon: Clock,
      title: '24h Notdienst',
      description: 'Schnelle Hilfe im Notfall – 365 Tage im Jahr für Sie erreichbar',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
    },
  ];

  const features = [
    {
      icon: CheckCircle2,
      text: 'Festpreisgarantie',
    },
    {
      icon: Star,
      text: '5 Jahre Garantie',
    },
    {
      icon: TrendingUp,
      text: 'Kostenlose Beratung',
    },
    {
      icon: Heart,
      text: 'Familiengeführt',
    },
  ];

  return (
    <section
      className={`relative py-16 sm:py-20 lg:py-24 overflow-hidden transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      aria-labelledby="trust-heading"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-12 sm:mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2
            id="trust-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-primary mb-4 sm:mb-6"
          >
            Vertrauen Sie auf{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary-dark">
              Qualität & Erfahrung
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-accent-light text-balance">
            Über 500 zufriedene Kunden vertrauen auf unsere Expertise und professionelle
            Dienstleistung
          </p>
        </div>

        {/* Trust factors grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12 sm:mb-16">
          {trustFactors.map((factor, index) => {
            const Icon = factor.icon;
            return (
              <div
                key={index}
                className={`group glass glass-hover rounded-2xl p-6 sm:p-8 text-center transition-all duration-700 hover:scale-105 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
              >
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl ${factor.bgColor} mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon
                    className={`w-8 h-8 sm:w-10 sm:h-10 ${factor.color}`}
                    aria-hidden="true"
                  />
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl font-bold text-primary mb-2">
                  {factor.title}
                </h3>
                <p className="text-sm sm:text-base text-accent-light leading-relaxed">
                  {factor.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Features bar */}
        <div
          className={`glass rounded-2xl p-6 sm:p-8 transition-all duration-700 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-3 justify-center lg:justify-start"
                >
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-secondary/10 to-secondary-dark/10 flex items-center justify-center">
                    <Icon
                      className="w-5 h-5 sm:w-6 sm:h-6 text-secondary"
                      aria-hidden="true"
                    />
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-primary">
                    {feature.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats section */}
        <div
          className={`mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {[
            { value: '25+', label: 'Jahre Erfahrung', suffix: '' },
            { value: '500', label: 'Abgeschlossene Projekte', suffix: '+' },
            { value: '100', label: 'Kundenzufriedenheit', suffix: '%' },
            { value: '24', label: 'Stunden Notdienst', suffix: '/7' },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-white/70 to-white/50 backdrop-blur-sm border border-white/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light mb-2">
                {stat.value}
                <span className="text-secondary">{stat.suffix}</span>
              </div>
              <div className="text-sm sm:text-base text-accent-light font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div
          className={`mt-12 sm:mt-16 flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 transition-all duration-700 delay-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {[
            'TÜV Zertifiziert',
            'Handwerkskammer',
            'Fachbetrieb',
            'Versichert',
          ].map((badge, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white/60 backdrop-blur-md border border-white/30 text-sm sm:text-base font-medium text-primary"
            >
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" aria-hidden="true" />
              <span>{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
