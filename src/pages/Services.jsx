import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Droplets,
  Flame,
  Sun,
  Wrench,
  Thermometer,
  Gauge,
  Settings,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  CheckCircle2,
  Award,
  Shield,
  Clock,
  Star,
  Euro,
  Phone,
} from 'lucide-react';
import { createPageUrl } from '@/utils';

export default function Services() {
  const [expandedService, setExpandedService] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      id: 'sanitaer',
      icon: Droplets,
      title: 'Sanitär',
      category: 'installation',
      shortDescription: 'Installation, Wartung und Reparatur von Sanitäranlagen',
      fullDescription:
        'Von der modernen Badplanung bis zur professionellen Sanitärinstallation - wir realisieren Ihr Traumbad. Unsere Meister beraten Sie umfassend zu allen Sanitärthemen und setzen Ihre Wünsche fachgerecht um.',
      features: [
        'Badplanung und -sanierung',
        'Rohrleitungsbau und -sanierung',
        'Trinkwasserinstallation',
        'Regenwassernutzung',
        'Barrierefreie Bäder',
        'Wellness-Ausstattung',
        'Sanitärkeramik-Installation',
        'Armaturen und Accessoires',
      ],
      benefits: [
        'Individuelle Badplanung mit 3D-Visualisierung',
        'Hochwertige Markenfabrikate',
        'Fachgerechte Installation',
        '5 Jahre Garantie auf alle Arbeiten',
      ],
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      gradient: 'from-blue-500 to-blue-700',
    },
    {
      id: 'heizung',
      icon: Flame,
      title: 'Heizung',
      category: 'installation',
      shortDescription: 'Moderne Heizsysteme für optimalen Komfort und Effizienz',
      fullDescription:
        'Wir planen, installieren und warten moderne Heizsysteme aller Art. Von der klassischen Gasheizung über Wärmepumpen bis hin zu Pelletheizungen - wir finden die optimale Lösung für Ihr Objekt.',
      features: [
        'Heizungsplanung und -installation',
        'Wärmepumpen (Luft/Wasser)',
        'Gas- und Ölheizungen',
        'Pellet- und Holzheizungen',
        'Fußbodenheizung',
        'Heizkörper-Installation',
        'Heizungsmodernisierung',
        'Smart Home Integration',
      ],
      benefits: [
        'Bis zu 40% Energieeinsparung',
        'KfW-Förderung bis zu 70%',
        'Kostenlose Energieberatung',
        'Hydraulischer Abgleich inklusive',
      ],
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      gradient: 'from-orange-500 to-red-600',
    },
    {
      id: 'solar',
      icon: Sun,
      title: 'Solartechnik',
      category: 'energy',
      shortDescription: 'Nachhaltige Energielösungen mit Solarthermie und Photovoltaik',
      fullDescription:
        'Nutzen Sie die Kraft der Sonne für Ihr Zuhause. Wir planen und installieren Solarthermie-Anlagen zur Warmwasserbereitung und Heizungsunterstützung sowie Photovoltaik-Anlagen zur Stromerzeugung.',
      features: [
        'Solarthermie-Anlagen',
        'Photovoltaik-Anlagen',
        'Energiespeicher (Batterien)',
        'Warmwasserspeicher',
        'Heizungsunterstützung',
        'Komplettlösungen',
        'Ertragsoptimierung',
        'Monitoring-Systeme',
      ],
      benefits: [
        'Bis zu 60% weniger Heizkosten',
        'Unabhängigkeit von Energiepreisen',
        'Staatliche Förderung verfügbar',
        '25 Jahre Leistungsgarantie auf Module',
      ],
      color: 'text-amber-600',
      bgColor: 'bg-amber-50',
      gradient: 'from-amber-500 to-yellow-600',
    },
    {
      id: 'klima',
      icon: Thermometer,
      title: 'Klimatechnik',
      category: 'installation',
      shortDescription: 'Perfektes Raumklima für Wohn- und Gewerberäume',
      fullDescription:
        'Sorgen Sie für angenehme Temperaturen das ganze Jahr über. Wir installieren energieeffiziente Klimaanlagen und Lüftungssysteme für Wohn- und Gewerbeimmobilien.',
      features: [
        'Split-Klimaanlagen',
        'Multi-Split-Systeme',
        'Zentrale Klimaanlagen',
        'Kontrollierte Wohnraumlüftung',
        'Luftentfeuchter',
        'Wärmerückgewinnung',
        'Klimatisierung Gewerbe',
        'Smart Climate Control',
      ],
      benefits: [
        'Energieeffiziente A+++-Geräte',
        'Leiser Betrieb',
        'Pollenfilter und Luftreinigung',
        'Kostenlose Klimaberechnung',
      ],
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-50',
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      id: 'gas',
      icon: Gauge,
      title: 'Gasinstallation',
      category: 'installation',
      shortDescription: 'Sichere Installation und Wartung von Gasanlagen',
      fullDescription:
        'Als zertifizierter Fachbetrieb für Gasinstallationen sorgen wir für Sicherheit und Zuverlässigkeit. Von der Planung bis zur regelmäßigen Wartung sind wir Ihr kompetenter Partner.',
      features: [
        'Gasheizungen',
        'Gasleitungen',
        'Gastherme-Installation',
        'Gas-Wandheizgeräte',
        'Gasprüfung und -wartung',
        'Dichtigkeitsprüfung',
        'Gasgeräteanschluss',
        'Sicherheitschecks',
      ],
      benefits: [
        'Zertifizierter Fachbetrieb',
        'Regelmäßige Sicherheitsprüfung',
        'Schnelle Entstörung',
        '24h Notdienst bei Gasgeruch',
      ],
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      gradient: 'from-red-500 to-rose-600',
    },
    {
      id: 'wartung',
      icon: Settings,
      title: 'Wartung & Service',
      category: 'service',
      shortDescription: 'Regelmäßige Wartung für langlebige und effiziente Anlagen',
      fullDescription:
        'Mit unseren Wartungsverträgen bleiben Ihre Anlagen stets in Top-Zustand. Wir kümmern uns um regelmäßige Inspektionen, Wartungen und schnelle Reparaturen im Bedarfsfall.',
      features: [
        'Heizungswartung',
        'Sanitärwartung',
        'Klimawartung',
        'Wartungsverträge',
        'Notdienst 24/7',
        'Schnelle Reparaturen',
        'Ersatzteillager',
        'Fernwartung möglich',
      ],
      benefits: [
        'Bis zu 30% längere Lebensdauer',
        'Geringerer Energieverbrauch',
        'Priorität bei Notfällen',
        'Attraktive Wartungsverträge',
      ],
      color: 'text-secondary',
      bgColor: 'bg-green-50',
      gradient: 'from-secondary to-secondary-dark',
    },
  ];

  const categories = [
    { id: 'all', label: 'Alle Leistungen' },
    { id: 'installation', label: 'Installation' },
    { id: 'energy', label: 'Energielösungen' },
    { id: 'service', label: 'Service & Wartung' },
  ];

  const filteredServices =
    activeCategory === 'all'
      ? services
      : services.filter((s) => s.category === activeCategory);

  const toggleService = (serviceId) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden" aria-labelledby="services-hero-heading">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
          <div className="absolute top-40 right-10 w-72 h-72 bg-secondary/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-6">
              <Wrench className="w-4 h-4 text-secondary" aria-hidden="true" />
              <span>Unsere Leistungen</span>
            </div>

            <h1
              id="services-hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-primary mb-6"
            >
              Professionelle{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary-dark">
                Haustechnik-Lösungen
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-accent-light mb-8 text-balance">
              Von der Planung über die Installation bis zur Wartung - wir bieten Ihnen umfassende
              Dienstleistungen aus einer Hand. Vertrauen Sie auf über 25 Jahre Erfahrung und
              Meisterqualität.
            </p>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
              <div className="flex items-center gap-2 text-accent">
                <Shield className="w-5 h-5 text-secondary" aria-hidden="true" />
                <span className="text-sm font-medium">Meisterbetrieb</span>
              </div>
              <div className="flex items-center gap-2 text-accent">
                <Award className="w-5 h-5 text-secondary" aria-hidden="true" />
                <span className="text-sm font-medium">Zertifiziert</span>
              </div>
              <div className="flex items-center gap-2 text-accent">
                <Star className="w-5 h-5 text-secondary" aria-hidden="true" />
                <span className="text-sm font-medium">5 Jahre Garantie</span>
              </div>
              <div className="flex items-center gap-2 text-accent">
                <Clock className="w-5 h-5 text-secondary" aria-hidden="true" />
                <span className="text-sm font-medium">24h Notdienst</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white/50 backdrop-blur-sm sticky top-16 sm:top-20 z-30 border-y border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="flex flex-wrap justify-center gap-3 sm:gap-4"
            role="tablist"
            aria-label="Service-Kategorien"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 active:scale-95 touch-target focus-visible ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-secondary to-secondary-dark text-white shadow-lg shadow-secondary/30'
                    : 'glass glass-hover text-primary'
                }`}
                role="tab"
                aria-selected={activeCategory === category.id}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 sm:py-20 lg:py-24" aria-label="Service-Liste">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 lg:space-y-8">
            {filteredServices.map((service, index) => {
              const Icon = service.icon;
              const isExpanded = expandedService === service.id;

              return (
                <article
                  key={service.id}
                  className="glass glass-hover rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                  }}
                >
                  {/* Service Header - Always visible */}
                  <button
                    onClick={() => toggleService(service.id)}
                    className="w-full text-left p-6 sm:p-8 lg:p-10 focus-visible"
                    aria-expanded={isExpanded}
                    aria-controls={`service-details-${service.id}`}
                  >
                    <div className="flex items-start gap-4 sm:gap-6">
                      {/* Icon */}
                      <div
                        className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-2xl ${service.bgColor} flex items-center justify-center transition-transform duration-300 ${
                          isExpanded ? 'scale-110' : ''
                        }`}
                      >
                        <Icon
                          className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 ${service.color}`}
                          aria-hidden="true"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-primary mb-2">
                          {service.title}
                        </h2>
                        <p className="text-base sm:text-lg text-accent-light mb-4">
                          {service.shortDescription}
                        </p>

                        {/* Features preview (first 3) */}
                        <ul className="flex flex-wrap gap-2 mb-4" aria-label={`${service.title} Features`}>
                          {service.features.slice(0, 3).map((feature, i) => (
                            <li
                              key={i}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/60 text-xs sm:text-sm font-medium text-accent"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-secondary" aria-hidden="true" />
                              {feature}
                            </li>
                          ))}
                          {service.features.length > 3 && (
                            <li className="inline-flex items-center px-3 py-1.5 rounded-lg bg-secondary/10 text-xs sm:text-sm font-medium text-secondary">
                              +{service.features.length - 3} weitere
                            </li>
                          )}
                        </ul>
                      </div>

                      {/* Expand/Collapse Icon */}
                      <div className="flex-shrink-0">
                        {isExpanded ? (
                          <ChevronUp
                            className="w-6 h-6 sm:w-8 sm:h-8 text-secondary"
                            aria-hidden="true"
                          />
                        ) : (
                          <ChevronDown
                            className="w-6 h-6 sm:w-8 sm:h-8 text-primary"
                            aria-hidden="true"
                          />
                        )}
                      </div>
                    </div>
                  </button>

                  {/* Expanded Details */}
                  {isExpanded && (
                    <div
                      id={`service-details-${service.id}`}
                      className="px-6 sm:px-8 lg:px-10 pb-6 sm:pb-8 lg:pb-10 pt-0 border-t border-primary/10 animate-slideDown"
                    >
                      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                        {/* Left column */}
                        <div>
                          <h3 className="text-xl font-bold text-primary mb-4">
                            Leistungsumfang
                          </h3>
                          <p className="text-accent-light mb-6 leading-relaxed">
                            {service.fullDescription}
                          </p>

                          <h4 className="font-bold text-primary mb-3">Unsere Leistungen:</h4>
                          <ul className="space-y-2" aria-label={`${service.title} Leistungen`}>
                            {service.features.map((feature, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <CheckCircle2
                                  className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5"
                                  aria-hidden="true"
                                />
                                <span className="text-accent">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Right column */}
                        <div>
                          <h3 className="text-xl font-bold text-primary mb-4">Ihre Vorteile</h3>
                          <ul className="space-y-4 mb-8">
                            {service.benefits.map((benefit, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-r from-secondary/5 to-transparent"
                              >
                                <Star
                                  className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5"
                                  aria-hidden="true"
                                />
                                <span className="text-accent font-medium">{benefit}</span>
                              </li>
                            ))}
                          </ul>

                          {/* CTA Buttons */}
                          <div className="space-y-3">
                            <Link
                              to={createPageUrl('Contact')}
                              className={`group w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r ${service.gradient} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 touch-target focus-visible`}
                              aria-label={`Beratung zu ${service.title} anfordern`}
                            >
                              <span>Kostenlose Beratung anfordern</span>
                              <ArrowRight
                                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                                aria-hidden="true"
                              />
                            </Link>
                            <a
                              href="tel:01637709101"
                              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 glass glass-hover text-primary font-semibold rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 touch-target focus-visible"
                              aria-label="Direkt anrufen"
                            >
                              <Phone className="w-5 h-5" aria-hidden="true" />
                              <span>0163 770 91 01</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* KfW Förderung Info */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-secondary/5 to-primary/5" aria-labelledby="foerderung-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-3xl p-8 sm:p-12 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-sm font-medium text-secondary mb-6">
                  <Euro className="w-4 h-4" aria-hidden="true" />
                  <span>Staatliche Förderung</span>
                </div>

                <h2 id="foerderung-heading" className="text-3xl sm:text-4xl font-black text-primary mb-4">
                  Bis zu 70% KfW-Förderung sichern
                </h2>
                <p className="text-lg text-accent-light mb-6">
                  Nutzen Sie attraktive staatliche Förderungen für Ihre Heizungsmodernisierung,
                  Solaranlage oder energetische Sanierung. Wir beraten Sie umfassend und
                  unterstützen bei der Antragstellung.
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-accent">
                      Kostenlose Förderberatung durch unsere Experten
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-accent">
                      Unterstützung bei der Antragstellung
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-accent">
                      Alle förderfähigen Maßnahmen im Überblick
                    </span>
                  </li>
                </ul>

                <Link
                  to={createPageUrl('Contact')}
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-secondary to-secondary-dark text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-secondary/30 transition-all duration-300 hover:scale-105 active:scale-95 touch-target focus-visible"
                  aria-label="Förderberatung anfordern"
                >
                  <span>Jetzt Förderberatung anfragen</span>
                  <ArrowRight
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    aria-hidden="true"
                  />
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '70%', label: 'Max. Förderung', subtitle: 'BEG-Förderung' },
                  { value: '21.000€', label: 'Max. Zuschuss', subtitle: 'pro Wohneinheit' },
                  { value: '20%', label: 'Geschwindigkeits-Bonus', subtitle: 'bis 2028' },
                  { value: '30%', label: 'Einkommens-Bonus', subtitle: 'unter 40.000€' },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-6 rounded-2xl bg-white/60 backdrop-blur-sm"
                  >
                    <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary-dark mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm font-bold text-primary mb-1">{stat.label}</div>
                    <div className="text-xs text-accent-light">{stat.subtitle}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20" aria-label="Kontakt Call-to-Action">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-3xl p-8 sm:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-black text-primary mb-4">
              Nicht das Richtige gefunden?
            </h2>
            <p className="text-lg text-accent-light mb-8 max-w-2xl mx-auto">
              Wir bieten individuelle Lösungen für Ihre spezifischen Anforderungen. Kontaktieren
              Sie uns für eine kostenlose und unverbindliche Beratung.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to={createPageUrl('Contact')}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-secondary to-secondary-dark text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-secondary/30 transition-all duration-300 hover:scale-105 active:scale-95 touch-target focus-visible"
                aria-label="Jetzt Kontakt aufnehmen"
              >
                <span>Jetzt Kontakt aufnehmen</span>
                <ArrowRight
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  aria-hidden="true"
                />
              </Link>
              <a
                href="tel:01637709101"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 glass glass-hover text-primary font-semibold rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 touch-target focus-visible"
                aria-label="Anrufen"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                <span>0163 770 91 01</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
