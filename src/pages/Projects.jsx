import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Alle Projekte' },
    { id: 'bad', name: 'Badsanierung' },
    { id: 'heizung', name: 'Heizung' },
    { id: 'solar', name: 'Solar' },
    { id: 'gewerbe', name: 'Gewerbe' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Luxus-Badumbau Wetzlar',
      category: 'bad',
      location: 'Wetzlar',
      year: '2024',
      description: 'Komplette Badsanierung mit hochwertigen Materialien, bodengleicher Dusche, freistehender Badewanne und intelligenter Lichtsteuerung.',
      features: ['8m² Grundfläche', 'Fußbodenheizung', 'Regensensor-Dusche', 'Smart Home Integration'],
      duration: '2 Wochen',
      budget: '€€€'
    },
    {
      id: 2,
      title: 'Wärmepumpen-Installation Einfamilienhaus',
      category: 'heizung',
      location: 'Limburg',
      year: '2024',
      description: 'Austausch einer 25 Jahre alten Ölheizung gegen moderne Luft-Wasser-Wärmepumpe mit Fußbodenheizung.',
      features: ['15 kW Heizleistung', 'KfW-Förderung 55%', 'App-Steuerung', 'JAZ 4.2'],
      duration: '1 Woche',
      budget: '€€'
    },
    {
      id: 3,
      title: 'Solarthermie-Anlage Weilburg',
      category: 'solar',
      location: 'Weilburg',
      year: '2023',
      description: 'Installation einer 20m² Solarthermie-Anlage für Warmwasser und Heizungsunterstützung im Einfamilienhaus.',
      features: ['20m² Kollektorfläche', '800L Pufferspeicher', '60% Energieeinsparung', 'BAFA-Förderung'],
      duration: '3 Tage',
      budget: '€€'
    },
    {
      id: 4,
      title: 'Gewerbliche Heizungsanlage Gießen',
      category: 'gewerbe',
      location: 'Gießen',
      year: '2023',
      description: 'Komplette Heizungsmodernisierung für Bürokomplex mit 12 Einheiten inklusive Regeltechnik und Zentralsteuerung.',
      features: ['12 Wohneinheiten', 'Zentrale Steuerung', 'Fernwartung', 'Energiemonitoring'],
      duration: '4 Wochen',
      budget: '€€€€'
    },
    {
      id: 5,
      title: '24h-Notfall Rohrbruch-Reparatur',
      category: 'notdienst',
      location: 'Wetzlar',
      year: '2024',
      description: 'Schnelle Schadensbegrenzung und dauerhafte Reparatur nach Rohrbruch in Mehrfamilienhaus.',
      features: ['Sofortreaktion', 'Schadensbegrenzung', 'Dauerhafte Lösung', 'Versicherungsabwicklung'],
      duration: '1 Tag',
      budget: '€'
    },
    {
      id: 6,
      title: 'Barrierefreies Bad Seniorenwohnung',
      category: 'bad',
      location: 'Löhnberg',
      year: '2023',
      description: 'Altersgerechter Badumbau mit bodengleicher Dusche, Haltegriffen und rutschfesten Fliesen.',
      features: ['Barrierefrei', 'Pflegekassen-Zuschuss', 'Rutschfeste Fliesen', 'Notrufsystem'],
      duration: '10 Tage',
      budget: '€€'
    }
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a3a52] mb-4">
            Unsere Referenzen
          </h1>
          <p className="text-xl text-[#2c3e50]/70 max-w-3xl mx-auto">
            Erfolgreiche Projekte aus der Region – von der Badsanierung bis zur kompletten Heizungsmodernisierung
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 min-h-[48px] ${
                selectedCategory === category.id
                  ? 'bg-[#00b050] text-white shadow-lg'
                  : 'bg-white/60 backdrop-blur-sm border border-white/30 text-[#1a3a52] hover:bg-white/80'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="relative group cursor-pointer animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image Placeholder */}
              <div className="relative h-[250px] rounded-t-3xl overflow-hidden bg-gradient-to-br from-[#1a3a52]/10 to-[#00b050]/10">
                <div className="flex items-center justify-center h-full">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-white/50 backdrop-blur-sm flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1a3a52] to-[#00b050]" />
                    </div>
                    <p className="text-[#1a3a52]/60 font-medium text-sm">Projekt-Foto</p>
                    <p className="text-[#2c3e50]/40 text-xs mt-1">Vorher/Nachher</p>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#1a3a52]/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <ExternalLink className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Project Info */}
              <div className="relative">
                <div className="absolute inset-0 bg-white/60 backdrop-blur-xl rounded-b-3xl border border-white/30 border-t-0 shadow-[0_8px_32px_rgba(0,0,0,0.1)] group-hover:shadow-[0_16px_64px_rgba(0,176,80,0.2)] transition-all duration-300" />

                <div className="relative p-6">
                  {/* Category & Year */}
                  <div className="flex items-center justify-between mb-3">
                    <Badge className="bg-[#00b050]/10 text-[#00b050] border-[#00b050]/20">
                      {categories.find(c => c.id === project.category)?.name}
                    </Badge>
                    <span className="text-sm text-[#2c3e50]/60">{project.year}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#1a3a52] mb-2 group-hover:text-[#00b050] transition-colors">
                    {project.title}
                  </h3>

                  {/* Location */}
                  <p className="text-sm text-[#2c3e50]/60 mb-3">📍 {project.location}</p>

                  {/* Description */}
                  <p className="text-sm text-[#2c3e50]/80 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-1 mb-4">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#2c3e50]/70">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00b050]" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Meta */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 text-sm">
                    <span className="text-[#2c3e50]/60">⏱️ {project.duration}</span>
                    <span className="text-[#2c3e50]/60">{project.budget}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="relative mb-20">
          <div className="absolute inset-0 bg-white/60 backdrop-blur-xl rounded-3xl border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.1)]" />
          <div className="relative p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold text-[#00b050] mb-2">500+</div>
                <div className="text-[#2c3e50]/70">Projekte realisiert</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-[#00b050] mb-2">98%</div>
                <div className="text-[#2c3e50]/70">Kundenzufriedenheit</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-[#00b050] mb-2">30+</div>
                <div className="text-[#2c3e50]/70">Jahre Erfahrung</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-[#00b050] mb-2">24/7</div>
                <div className="text-[#2c3e50]/70">Notfall-Service</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a3a52] to-[#00b050] rounded-3xl" />
          <div className="relative p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Starten Sie Ihr Projekt
            </h2>
            <p className="text-xl mb-6">
              Lassen Sie sich unverbindlich beraten und erhalten Sie ein kostenloses Angebot
            </p>
            <Button size="lg" className="bg-white text-[#1a3a52] hover:bg-white/90 min-h-[48px]">
              Jetzt Beratungstermin vereinbaren
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
