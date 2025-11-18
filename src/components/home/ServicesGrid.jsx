import React from 'react';
import { Droplet, Flame, Wind, Wrench, Zap, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesGrid = ({ isVisible = true }) => {
  const services = [
    {
      icon: Droplet,
      title: 'Sanitärtechnik',
      description: 'Installation, Reparatur und Wartung von Sanitäranlagen, Bädern und Wasserleitungen',
      color: '#00b050'
    },
    {
      icon: Flame,
      title: 'Heizungstechnik',
      description: 'Moderne Heizungssysteme, Wartung und Optimierung für maximale Effizienz',
      color: '#00b050'
    },
    {
      icon: Wind,
      title: 'Klimatechnik',
      description: 'Klimaanlagen, Lüftungssysteme und Luftqualitätslösungen für Komfort',
      color: '#00b050'
    },
    {
      icon: Wrench,
      title: 'Reparaturen',
      description: 'Schnelle und zuverlässige Reparaturen aller haustechnischen Anlagen',
      color: '#00b050'
    },
    {
      icon: Zap,
      title: 'Modernisierung',
      description: 'Energieeffiziente Sanierung und Modernisierung Ihrer Haustechnik',
      color: '#00b050'
    },
    {
      icon: Shield,
      title: 'Wartung',
      description: 'Regelmäßige Wartung und Inspektion für langfristige Zuverlässigkeit',
      color: '#00b050'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1a3a52] mb-4">
            Unsere Leistungen
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Von der Installation bis zur Wartung – wir bieten umfassende Lösungen für alle Bereiche der Haustechnik
          </p>
        </div>

        {/* Services Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {services.map((service, index) => (
            <div
              key={index}
              className="backdrop-blur-xl bg-white/80 rounded-2xl p-6 md:p-8 border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col h-full">
                <div className="mb-4 p-4 rounded-full bg-gradient-to-br from-[#1a3a52] to-[#2d5a7b] w-fit group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-[#00b050]" strokeWidth={2} />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-[#1a3a52] mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 flex-grow">
                  {service.description}
                </p>

                <Button
                  variant="outline"
                  className="min-h-[44px] w-full border-2 border-[#00b050] text-[#00b050] hover:bg-[#00b050] hover:text-white transition-all duration-300"
                >
                  Mehr erfahren
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
