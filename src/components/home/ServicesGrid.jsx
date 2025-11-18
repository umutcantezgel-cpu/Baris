import React from 'react';
import { Link } from 'react-router-dom';
import {
  Droplets,
  Flame,
  Sun,
  Wrench,
  Thermometer,
  Gauge,
  Settings,
  ArrowRight,
} from 'lucide-react';
import { createPageUrl } from '../../utils';

export default function ServicesGrid({ isVisible = true }) {
  const services = [
    {
      icon: Droplets,
      title: 'Sanitär',
      description: 'Installation, Wartung und Reparatur von Sanitäranlagen',
      features: ['Badplanung & -sanierung', 'Rohrleitungsbau', 'Trinkwasserinstallation'],
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      gradient: 'from-blue-500 to-blue-700',
    },
    {
      icon: Flame,
      title: 'Heizung',
      description: 'Moderne Heizsysteme für optimalen Komfort und Effizienz',
      features: ['Heizungsinstallation', 'Wartung & Reparatur', 'Energieberatung'],
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      gradient: 'from-orange-500 to-red-600',
    },
    {
      icon: Sun,
      title: 'Solartechnik',
      description: 'Nachhaltige Energielösungen mit Solarthermie und Photovoltaik',
      features: ['Solaranlagen', 'Photovoltaik', 'Energiespeicher'],
      color: 'text-amber-600',
      bgColor: 'bg-amber-50',
      gradient: 'from-amber-500 to-yellow-600',
    },
    {
      icon: Thermometer,
      title: 'Klimatechnik',
      description: 'Perfektes Raumklima für Wohn- und Gewerberäume',
      features: ['Klimaanlagen', 'Lüftungssysteme', 'Wartung & Service'],
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-50',
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      icon: Gauge,
      title: 'Gasinstallation',
      description: 'Sichere Installation und Wartung von Gasanlagen',
      features: ['Gasheizung', 'Gasinstallation', 'Prüfung & Wartung'],
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      gradient: 'from-red-500 to-rose-600',
    },
    {
      icon: Settings,
      title: 'Wartung & Service',
      description: 'Regelmäßige Wartung für langlebige und effiziente Anlagen',
      features: ['Wartungsverträge', 'Reparaturservice', '24h Notdienst'],
      color: 'text-secondary',
      bgColor: 'bg-green-50',
      gradient: 'from-secondary to-secondary-dark',
    },
  ];

  return (
    <section
      className={`relative py-16 sm:py-20 lg:py-24 overflow-hidden transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      aria-labelledby="services-heading"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-12 sm:mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-6">
            <Wrench className="w-4 h-4 text-secondary" aria-hidden="true" />
            <span>Unsere Leistungen</span>
          </div>

          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-primary mb-4 sm:mb-6"
          >
            Umfassende{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary-dark">
              Haustechnik-Lösungen
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-accent-light text-balance">
            Von der Planung über die Installation bis zur Wartung – wir bieten Ihnen alles aus
            einer Hand
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article
                key={index}
                className={`group glass glass-hover rounded-2xl p-6 sm:p-8 transition-all duration-700 hover:scale-105 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
              >
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl ${service.bgColor} mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon
                    className={`w-8 h-8 sm:w-10 sm:h-10 ${service.color}`}
                    aria-hidden="true"
                  />
                </div>

                {/* Content */}
                <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-accent-light mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features list */}
                <ul className="space-y-2 mb-6" aria-label={`${service.title} Leistungen`}>
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start gap-2 text-sm text-accent"
                    >
                      <span
                        className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-secondary mt-2"
                        aria-hidden="true"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Link */}
                <Link
                  to={createPageUrl('Services')}
                  className={`group/link inline-flex items-center gap-2 text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r ${service.gradient} hover:gap-3 transition-all touch-target focus-visible`}
                  aria-label={`Mehr über ${service.title} erfahren`}
                >
                  <span>Mehr erfahren</span>
                  <ArrowRight
                    className={`w-4 h-4 ${service.color} group-hover/link:translate-x-1 transition-transform`}
                    aria-hidden="true"
                  />
                </Link>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-12 sm:mt-16 text-center transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="glass rounded-2xl p-8 sm:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
              Nicht das Richtige gefunden?
            </h3>
            <p className="text-base sm:text-lg text-accent-light mb-6 sm:mb-8 max-w-2xl mx-auto">
              Wir bieten individuelle Lösungen für Ihre spezifischen Anforderungen. Kontaktieren
              Sie uns für eine kostenlose Beratung.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to={createPageUrl('Contact')}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-secondary to-secondary-dark text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-secondary/30 transition-all duration-300 hover:scale-105 active:scale-95 touch-target focus-visible"
                aria-label="Kostenlose Beratung anfordern"
              >
                <span>Kostenlose Beratung</span>
                <ArrowRight
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  aria-hidden="true"
                />
              </Link>
              <a
                href="tel:01637709101"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 glass glass-hover text-primary font-semibold rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 touch-target focus-visible"
                aria-label="Jetzt anrufen"
              >
                <Wrench className="w-5 h-5" aria-hidden="true" />
                <span>Jetzt anrufen</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
