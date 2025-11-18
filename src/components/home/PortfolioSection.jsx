import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Building2,
  Home,
  Factory,
  CheckCircle2,
  Calendar,
  MapPin,
} from 'lucide-react';
import { createPageUrl } from '../../utils';

export default function PortfolioSection({ isVisible = true }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Alle Projekte', icon: Building2 },
    { id: 'residential', label: 'Privatkunden', icon: Home },
    { id: 'commercial', label: 'Gewerbe', icon: Factory },
  ];

  const projects = [
    {
      id: 1,
      title: 'Komplettsanierung Einfamilienhaus',
      category: 'residential',
      location: 'Wetzlar',
      date: '2024',
      description: 'Moderne Badsanierung mit Fußbodenheizung und Solartherme',
      tags: ['Sanitär', 'Heizung', 'Solar'],
      image: '/images/projects/einfamilienhaus.jpg',
      stats: [
        { label: 'Bauzeit', value: '6 Wochen' },
        { label: 'Einsparung', value: '40% Energie' },
      ],
    },
    {
      id: 2,
      title: 'Gewerbeobjekt Neubau',
      category: 'commercial',
      location: 'Gießen',
      date: '2024',
      description: 'Komplette Haustechnik für modernes Bürogebäude',
      tags: ['Sanitär', 'Heizung', 'Klimatechnik'],
      image: '/images/projects/gewerbe.jpg',
      stats: [
        { label: 'Fläche', value: '800 m²' },
        { label: 'Team', value: '5 Monteure' },
      ],
    },
    {
      id: 3,
      title: 'Heizungsmodernisierung',
      category: 'residential',
      location: 'Marburg',
      date: '2023',
      description: 'Umstieg von Öl auf moderne Wärmepumpe mit Photovoltaik',
      tags: ['Heizung', 'Solar', 'Wärmepumpe'],
      image: '/images/projects/heizung.jpg',
      stats: [
        { label: 'Reduktion CO₂', value: '80%' },
        { label: 'Förderung', value: 'BEG bewilligt' },
      ],
    },
    {
      id: 4,
      title: 'Luxusbad mit Wellness',
      category: 'residential',
      location: 'Wetzlar',
      date: '2023',
      description: 'Exklusive Badgestaltung mit Regenduschen und Smart-Home-Integration',
      tags: ['Sanitär', 'Wellness', 'Smart Home'],
      image: '/images/projects/luxusbad.jpg',
      stats: [
        { label: 'Dauer', value: '4 Wochen' },
        { label: 'Features', value: '12+' },
      ],
    },
    {
      id: 5,
      title: 'Solaranlage Mehrfamilienhaus',
      category: 'commercial',
      location: 'Wetzlar',
      date: '2023',
      description: 'Installation Solarthermie-Anlage für Warmwasser und Heizung',
      tags: ['Solar', 'Heizung'],
      image: '/images/projects/solar.jpg',
      stats: [
        { label: 'Leistung', value: '25 kWp' },
        { label: 'Einsparung', value: '60%' },
      ],
    },
    {
      id: 6,
      title: 'Restaurant-Sanierung',
      category: 'commercial',
      location: 'Gießen',
      date: '2023',
      description: 'Sanitär- und Gasleitungen für Großküche',
      tags: ['Sanitär', 'Gas', 'Gewerbe'],
      image: '/images/projects/restaurant.jpg',
      stats: [
        { label: 'Zeitrahmen', value: '3 Wochen' },
        { label: 'Zertifizierung', value: 'GastroCheck' },
      ],
    },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      className={`relative py-16 sm:py-20 lg:py-24 overflow-hidden transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      aria-labelledby="portfolio-heading"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-12 sm:mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-6">
            <Building2 className="w-4 h-4 text-secondary" aria-hidden="true" />
            <span>Unsere Referenzen</span>
          </div>

          <h2
            id="portfolio-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-primary mb-4 sm:mb-6"
          >
            Erfolgreiche{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary-dark">
              Projekte & Referenzen
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-accent-light text-balance">
            Überzeugen Sie sich von der Qualität unserer Arbeit anhand realisierter Projekte
          </p>
        </div>

        {/* Category filter */}
        <div
          className={`flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          role="tablist"
          aria-label="Projekt-Kategorien"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 active:scale-95 touch-target focus-visible ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-secondary to-secondary-dark text-white shadow-lg shadow-secondary/30'
                    : 'glass glass-hover text-primary'
                }`}
                role="tab"
                aria-selected={activeCategory === category.id}
                aria-controls="portfolio-grid"
              >
                <Icon className="w-5 h-5" aria-hidden="true" />
                <span>{category.label}</span>
              </button>
            );
          })}
        </div>

        {/* Projects grid */}
        <div
          id="portfolio-grid"
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          role="tabpanel"
        >
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className={`group glass glass-hover rounded-2xl overflow-hidden transition-all duration-700 hover:scale-105 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100 + 300}ms` }}
            >
              {/* Project image placeholder */}
              <div className="relative h-48 sm:h-56 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 overflow-hidden">
                {/* Placeholder pattern */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Building2
                    className="w-16 h-16 text-primary/20"
                    aria-hidden="true"
                  />
                </div>
                {/* Category badge */}
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur-sm text-xs font-semibold text-primary">
                  {project.tags[0]}
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
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
                <h3 className="text-lg sm:text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-accent-light mb-4 line-clamp-2">
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

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-primary/10">
                  {project.stats.map((stat, statIndex) => (
                    <div key={statIndex}>
                      <div className="text-xs text-accent-light mb-1">{stat.label}</div>
                      <div className="text-sm font-bold text-primary">{stat.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`mt-12 sm:mt-16 text-center transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Link
            to={createPageUrl('Projects')}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary-light text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105 active:scale-95 touch-target focus-visible"
            aria-label="Alle Referenzen ansehen"
          >
            <span>Alle Referenzen ansehen</span>
            <ArrowRight
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
