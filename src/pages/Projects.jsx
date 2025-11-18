import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Building2,
  Home,
  Factory,
  Droplets,
  Flame,
  Sun,
  CheckCircle2,
  Calendar,
  MapPin,
  ArrowRight,
  TrendingUp,
  Users,
  Award,
  Phone,
} from 'lucide-react';
import { createPageUrl } from '@/utils';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    { id: 'all', label: 'Alle Projekte', icon: Building2 },
    { id: 'bad', label: 'Bad & Sanitär', icon: Droplets },
    { id: 'heizung', label: 'Heizung', icon: Flame },
    { id: 'solar', label: 'Solar', icon: Sun },
    { id: 'gewerbe', label: 'Gewerbe', icon: Factory },
    { id: 'privat', label: 'Privatkunden', icon: Home },
  ];

  const projects = [
    {
      id: 1,
      title: 'Luxus-Badsanierung Einfamilienhaus',
      category: 'bad',
      location: 'Wetzlar',
      date: '2024',
      description:
        'Komplette Modernisierung eines 15m² großen Badezimmers mit bodengleicher Dusche, freistehender Badewanne und hochwertiger Armaturenausstattung.',
      tags: ['Badsanierung', 'Wellness', 'Barrierefreiheit'],
      details: {
        duration: '4 Wochen',
        size: '15 m²',
        investment: '25.000 €',
        special: 'Smart Home Integration',
      },
      features: [
        'Bodengleiche XXL-Regendusche',
        'Freistehende Designer-Badewanne',
        'Fußbodenheizung',
        'LED-Ambientebeleuchtung',
        'Wandhängende WC-Anlage',
        'Natursteinoptik großformatige Fliesen',
      ],
    },
    {
      id: 2,
      title: 'Heizungsmodernisierung mit Wärmepumpe',
      category: 'heizung',
      location: 'Gießen',
      date: '2024',
      description:
        'Austausch einer 20 Jahre alten Ölheizung gegen eine moderne Luft-Wasser-Wärmepumpe inkl. Fußbodenheizung und Smart-Home-Steuerung.',
      tags: ['Wärmepumpe', 'Energieeffizienz', 'KfW-Förderung'],
      details: {
        duration: '3 Wochen',
        size: '180 m² Wohnfläche',
        investment: '35.000 €',
        special: '70% KfW-Förderung',
      },
      features: [
        'Luft-Wasser-Wärmepumpe 12 kW',
        'Fußbodenheizung in allen Räumen',
        'Smart Home Heizungssteuerung',
        'Hydraulischer Abgleich',
        'Pufferspeicher 500L',
        '40% Energieeinsparung',
      ],
    },
    {
      id: 3,
      title: 'Solarthermie & Photovoltaik Kombination',
      category: 'solar',
      location: 'Marburg',
      date: '2024',
      description:
        'Installation einer kombinierten Solar-Anlage für Warmwasser, Heizungsunterstützung und Stromerzeugung mit Speichersystem.',
      tags: ['Solarthermie', 'Photovoltaik', 'Energiespeicher'],
      details: {
        duration: '2 Wochen',
        size: '45 m² Kollektorfläche',
        investment: '42.000 €',
        special: 'Autarkie 65%',
      },
      features: [
        '10 kWp Photovoltaik-Anlage',
        '12 m² Solarthermie-Kollektoren',
        '10 kWh Batteriespeicher',
        'Intelligentes Energiemanagement',
        '800L Pufferspeicher',
        'Monitoring-App',
      ],
    },
    {
      id: 4,
      title: 'Komplettausstattung Neubau Einfamilienhaus',
      category: 'privat',
      location: 'Wetzlar',
      date: '2023',
      description:
        'Komplette Haustechnik für einen Neubau: Sanitär, Heizung, Lüftung und Solartechnik - alles aus einer Hand.',
      tags: ['Neubau', 'Komplettpaket', 'KfW-40'],
      details: {
        duration: '8 Wochen',
        size: '220 m² Wohnfläche',
        investment: '85.000 €',
        special: 'KfW-40 Standard',
      },
      features: [
        '3 moderne Bäder',
        'Erdwärme-Wärmepumpe',
        'Kontrollierte Wohnraumlüftung',
        '8 kWp PV-Anlage',
        'Fußbodenheizung',
        'Smart Home Ready',
      ],
    },
    {
      id: 5,
      title: 'Gewerbeobjekt Bürogebäude',
      category: 'gewerbe',
      location: 'Gießen',
      date: '2023',
      description:
        'Haustechnik für modernes Bürogebäude mit 15 Büros, Sanitäranlagen, Heizung und Klimatisierung für optimalen Arbeitskomfort.',
      tags: ['Gewerbe', 'Klimatechnik', 'Großprojekt'],
      details: {
        duration: '10 Wochen',
        size: '800 m² Nutzfläche',
        investment: '180.000 €',
        special: 'VRV-Klimasystem',
      },
      features: [
        'Zentrale Heizungsanlage',
        'VRV-Klimaanlage 15 Innengeräte',
        '6 moderne Sanitärräume',
        'Warmwasserbereiter 500L',
        'Gebäudeleittechnik',
        'Energieeffiziente Regelung',
      ],
    },
    {
      id: 6,
      title: 'Restaurant Sanitär & Gastechnik',
      category: 'gewerbe',
      location: 'Wetzlar',
      date: '2023',
      description:
        'Komplette Sanitär- und Gasinstallation für Großküche und Gastronomie-Betrieb inkl. Edelstahlleitungen und Sicherheitstechnik.',
      tags: ['Gastronomie', 'Gasinstallation', 'Edelstahl'],
      details: {
        duration: '4 Wochen',
        size: '250 m² Gastrofläche',
        investment: '55.000 €',
        special: 'GastroCheck',
      },
      features: [
        'Edelstahl-Rohrleitungssystem',
        'Zentrale Gasversorgung',
        'Großküchen-Abwassersystem',
        'Fettabscheider',
        'Handwaschbecken nach HACCP',
        'Sicherheitsgastechnik',
      ],
    },
  ];

  const stats = [
    {
      icon: CheckCircle2,
      value: '500+',
      label: 'Abgeschlossene Projekte',
      description: 'Seit 1998',
    },
    {
      icon: Users,
      value: '98%',
      label: 'Kundenzufriedenheit',
      description: 'Weiterempfehlung',
    },
    {
      icon: TrendingUp,
      value: '40%',
      label: 'Energieeinsparung',
      description: 'Im Durchschnitt',
    },
    {
      icon: Award,
      value: '100%',
      label: 'Qualitätsgarantie',
      description: '5 Jahre Garantie',
    },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden" aria-labelledby="projects-hero-heading">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
          <div className="absolute top-40 right-10 w-72 h-72 bg-secondary/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-6">
              <Building2 className="w-4 h-4 text-secondary" aria-hidden="true" />
              <span>Unsere Referenzen</span>
            </div>

            <h1
              id="projects-hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-primary mb-6"
            >
              Erfolgreiche{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary-dark">
                Projekte & Referenzen
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-accent-light text-balance">
              Überzeugen Sie sich von der Qualität unserer Arbeit anhand realisierter Projekte.
              Jedes Projekt wird mit höchster Sorgfalt und Professionalität umgesetzt.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white/50 backdrop-blur-sm border-y border-primary/10" aria-label="Projekt-Statistiken">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-secondary/10 to-secondary-dark/10 mb-3">
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-secondary" aria-hidden="true" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm sm:text-base font-bold text-primary mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs sm:text-sm text-accent-light">{stat.description}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white/30 backdrop-blur-sm sticky top-16 sm:top-20 z-30 border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="flex flex-wrap justify-center gap-3 sm:gap-4"
            role="tablist"
            aria-label="Projekt-Kategorien"
          >
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 active:scale-95 touch-target focus-visible ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-secondary to-secondary-dark text-white shadow-lg shadow-secondary/30'
                      : 'glass glass-hover text-primary'
                  }`}
                  role="tab"
                  aria-selected={activeCategory === category.id}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
                  <span className="text-sm sm:text-base">{category.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 sm:py-20" aria-label="Projekt-Liste">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project, index) => (
              <article
                key={project.id}
                className="group glass glass-hover rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                {/* Project image placeholder */}
                <div className="relative h-56 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 overflow-hidden">
                  {/* Placeholder icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Building2 className="w-20 h-20 text-primary/20" aria-hidden="true" />
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur-sm text-xs font-semibold text-primary">
                    {project.tags[0]}
                  </div>

                  {/* Year badge */}
                  <div className="absolute top-4 right-4 px-3 py-1.5 rounded-lg bg-secondary/90 backdrop-blur-sm text-xs font-semibold text-white">
                    {project.date}
                  </div>

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white">
                      <CheckCircle2 className="w-6 h-6 mb-2" aria-hidden="true" />
                      <p className="text-sm font-medium">Erfolgreich abgeschlossen</p>
                    </div>
                  </div>
                </div>

                {/* Project content */}
                <div className="p-6">
                  {/* Meta info */}
                  <div className="flex items-center gap-4 text-xs text-accent-light mb-3">
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                      {project.location}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                      {project.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-accent-light mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2.5 py-1 rounded-lg bg-secondary/10 text-xs font-medium text-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Project details grid */}
                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-primary/10 mb-4">
                    {Object.entries(project.details).map(([key, value], i) => (
                      <div key={i}>
                        <div className="text-xs text-accent-light mb-1 capitalize">
                          {key === 'duration' && 'Bauzeit'}
                          {key === 'size' && 'Größe'}
                          {key === 'investment' && 'Investition'}
                          {key === 'special' && 'Besonderheit'}
                        </div>
                        <div className="text-sm font-bold text-primary">{value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Features list */}
                  <div className="mb-4">
                    <h4 className="text-sm font-bold text-primary mb-2">Umgesetzte Leistungen:</h4>
                    <ul className="space-y-1.5">
                      {project.features.slice(0, 4).map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-accent">
                          <CheckCircle2
                            className="w-3.5 h-3.5 text-secondary flex-shrink-0 mt-0.5"
                            aria-hidden="true"
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                      {project.features.length > 4 && (
                        <li className="text-xs text-secondary font-medium pl-5">
                          +{project.features.length - 4} weitere
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Empty state */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <Building2 className="w-16 h-16 text-primary/20 mx-auto mb-4" aria-hidden="true" />
              <p className="text-lg text-accent-light">
                Keine Projekte in dieser Kategorie gefunden.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-16 sm:py-20 bg-gradient-to-br from-secondary/5 to-primary/5"
        aria-label="Kontakt Call-to-Action"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-3xl p-8 sm:p-12 lg:p-16">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-black text-primary mb-4">
                Ihr Projekt in besten Händen
              </h2>
              <p className="text-lg text-accent-light mb-8">
                Lassen Sie uns gemeinsam Ihr nächstes Projekt realisieren. Profitieren Sie von
                unserer Erfahrung aus über 500 erfolgreichen Projekten.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link
                  to={createPageUrl('Contact')}
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-secondary to-secondary-dark text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-secondary/30 transition-all duration-300 hover:scale-105 active:scale-95 touch-target focus-visible"
                  aria-label="Projekt anfragen"
                >
                  <span>Projekt anfragen</span>
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
                  <span>0163 770 91 01</span>
                </a>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center gap-6 text-sm text-accent-light">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-secondary" aria-hidden="true" />
                  <span>Kostenlose Beratung</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-secondary" aria-hidden="true" />
                  <span>Festpreisgarantie</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-secondary" aria-hidden="true" />
                  <span>5 Jahre Garantie</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
