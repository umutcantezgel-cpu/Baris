import React, { useState, useEffect } from 'react';
import { Droplets, Flame, Sun, Wrench, Clock, Wifi, ChevronDown, Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function Services() {
  const [expandedService, setExpandedService] = useState(null);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      id: 'sanitaer',
      icon: Droplets,
      title: 'Sanitär & Badsanierung',
      subtitle: 'Komplettlösungen für Ihr Traumbad',
      description: 'Von der modernen Badplanung bis zur kompletten Sanierung – wir realisieren Ihr Wohlfühlbad mit höchster Qualität und Präzision.',
      features: [
        'Komplettbadsanierung aus einer Hand',
        'Barrierefreie Bäder & altersgerechter Umbau',
        'Moderne Sanitärtechnik & Design',
        'Wassersparende Armaturen & Systeme',
        'Fußbodenheizung im Bad',
        'Express-Badsanierung in 7 Tagen'
      ],
      color: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-500/20 to-blue-500/5'
    },
    {
      id: 'heizung',
      icon: Flame,
      title: 'Heizung & Wärmepumpen',
      subtitle: 'Energieeffiziente Heizsysteme',
      description: 'Modernste Heizungstechnik für maximale Effizienz und Komfort. Profitieren Sie von bis zu 40% Energieeinsparung und staatlicher Förderung.',
      features: [
        'Wärmepumpen (Luft, Wasser, Erdwärme)',
        'Gas- & Öl-Brennwerttechnik',
        'Fußboden- & Wandflächenheizung',
        'Hybride Heizsysteme',
        'Smart Home Integration',
        'KfW-Förderung bis zu 70%'
      ],
      color: 'from-orange-500 to-orange-600',
      bgGradient: 'from-orange-500/20 to-orange-500/5'
    },
    {
      id: 'solar',
      icon: Sun,
      title: 'Solar- & Umwelttechnik',
      subtitle: 'Nachhaltige Energielösungen',
      description: 'Nutzen Sie die Kraft der Sonne für Warmwasser und Heizung. Wirtschaftlich, umweltfreundlich und zukunftssicher.',
      features: [
        'Solarthermie-Anlagen',
        'Photovoltaik-Beratung',
        'Integration in Bestandssysteme',
        'Optimale Auslegung & Planung',
        'Staatliche Förderung nutzen',
        'Langfristige Amortisation'
      ],
      color: 'from-yellow-500 to-yellow-600',
      bgGradient: 'from-yellow-500/20 to-yellow-500/5'
    },
    {
      id: 'notdienst',
      icon: Wrench,
      title: '24h Notdienst',
      subtitle: 'Schnelle Hilfe, wenn\'s drauf ankommt',
      description: 'Rohrbruch, Heizungsausfall, Wasserschaden? Unser 24-Stunden-Service ist sofort für Sie da – an 365 Tagen im Jahr.',
      features: [
        'Sofortige Erreichbarkeit',
        'Max. 60 Min. vor Ort (Umkreis 30km)',
        'Professionelle Schadensbegrenzung',
        'Transparente Notdienst-Preise',
        'Alle Notfall-Ersatzteile vorrätig',
        'Direktabrechnung mit Versicherung'
      ],
      color: 'from-red-500 to-red-600',
      bgGradient: 'from-red-500/20 to-red-500/5'
    },
    {
      id: 'wartung',
      icon: Clock,
      title: 'Wartung & Service',
      subtitle: 'Regelmäßige Pflege für lange Lebensdauer',
      description: 'Durch regelmäßige Wartung vermeiden Sie teure Ausfälle, sparen Energie und verlängern die Lebensdauer Ihrer Anlagen.',
      features: [
        'Heizungswartung nach DIN',
        'Sanitär-Inspektionen',
        'Jährliche Wartungsverträge',
        'Digitales Wartungsprotokoll',
        'Erinnerungsservice',
        'Vorzugspreise für Vertragskunden'
      ],
      color: 'from-green-500 to-green-600',
      bgGradient: 'from-green-500/20 to-green-500/5'
    },
    {
      id: 'smarthome',
      icon: Wifi,
      title: 'Smart Home Integration',
      subtitle: 'Intelligente Haustechnik-Steuerung',
      description: 'Steuern Sie Heizung, Warmwasser und Belüftung intelligent per App. Maximaler Komfort bei optimaler Energieeffizienz.',
      features: [
        'App-Steuerung für Heizung & Co.',
        'Automatische Temperaturregelung',
        'Verbrauchsanalyse in Echtzeit',
        'Integration in bestehende Systeme',
        'Fernwartung & Monitoring',
        'Energieoptimierung durch KI'
      ],
      color: 'from-purple-500 to-purple-600',
      bgGradient: 'from-purple-500/20 to-purple-500/5'
    }
  ];

  return (
    <div className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      {/* Background Decoration */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a3a52] mb-4">
            Unsere Leistungen
          </h1>
          <p className="text-xl text-[#2c3e50]/70 max-w-3xl mx-auto">
            Umfassende Lösungen für Sanitär, Heizung und Energietechnik – alles aus einer Hand
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isExpanded = expandedService === service.id;

            return (
              <div
                key={service.id}
                id={`service-${index}`}
                data-animate
                className={`relative transition-all duration-700 ${
                  isVisible[`service-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-white/60 backdrop-blur-xl rounded-3xl border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:shadow-[0_16px_64px_rgba(0,176,80,0.2)] transition-all duration-300" />

                <div className="relative p-8">
                  {/* Service Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.bgGradient} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-8 h-8 text-[#1a3a52]" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-[#1a3a52] mb-1">
                        {service.title}
                      </h2>
                      <p className="text-[#00b050] font-medium">{service.subtitle}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-[#2c3e50]/80 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className={`space-y-3 mb-6 transition-all duration-300 ${
                    isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                  }`}>
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#00b050] flex-shrink-0 mt-0.5" />
                        <span className="text-[#2c3e50]">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3">
                    <Button
                      onClick={() => setExpandedService(isExpanded ? null : service.id)}
                      variant="outline"
                      className="border-[#1a3a52] text-[#1a3a52] hover:bg-[#1a3a52] hover:text-white"
                    >
                      {isExpanded ? 'Weniger anzeigen' : 'Mehr erfahren'}
                      <ChevronDown className={`ml-2 w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                    </Button>
                    <Link to={createPageUrl('Contact')}>
                      <Button className="bg-[#00b050] hover:bg-[#00b050]/90">
                        Jetzt anfragen
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a3a52]/80 to-[#00b050]/80 backdrop-blur-xl rounded-3xl" />
          <div className="relative p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Nicht das Richtige gefunden?
            </h2>
            <p className="text-xl mb-6 max-w-2xl mx-auto">
              Wir beraten Sie gerne zu allen Fragen rund um Sanitär, Heizung und Energietechnik
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to={createPageUrl('Contact')}>
                <Button size="lg" className="bg-white text-[#1a3a52] hover:bg-white/90">
                  Kostenlose Beratung vereinbaren
                </Button>
              </Link>
              <Link to={createPageUrl('Blog')}>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#1a3a52]">
                  Blog & Ratgeber
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
