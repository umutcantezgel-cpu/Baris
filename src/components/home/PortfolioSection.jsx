import React from 'react';
import { ExternalLink, Building2, Home, Factory } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PortfolioSection = ({ isVisible = true }) => {
  const projects = [
    {
      title: 'Wohnkomplex München',
      category: 'Wohnbau',
      icon: Building2,
      description: 'Komplette Heizungs- und Sanitärinstallation für 45 Wohneinheiten',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
      year: '2024'
    },
    {
      title: 'Einfamilienhaus Sanierung',
      category: 'Privat',
      icon: Home,
      description: 'Energetische Sanierung mit moderner Wärmepumpentechnologie',
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80',
      year: '2024'
    },
    {
      title: 'Gewerbeimmobilie Hamburg',
      category: 'Gewerbe',
      icon: Factory,
      description: 'Installation eines effizienten Klima- und Lüftungssystems',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
      year: '2023'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1a3a52] mb-4">
            Referenzprojekte
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Erfolgreiche Projekte, die unser Know-how und unsere Expertise unter Beweis stellen
          </p>
        </div>

        {/* Projects Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative backdrop-blur-xl bg-white/80 rounded-2xl overflow-hidden border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 md:h-56 overflow-hidden bg-gradient-to-br from-[#1a3a52] to-[#2d5a7b]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 backdrop-blur-md bg-white/20 px-3 py-1 rounded-full text-white text-sm font-semibold border border-white/30">
                  {project.year}
                </div>
                <div className="absolute bottom-4 left-4 p-3 rounded-full bg-gradient-to-br from-[#1a3a52] to-[#2d5a7b]">
                  <project.icon className="w-6 h-6 text-[#00b050]" strokeWidth={2} />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-sm font-semibold text-[#00b050] uppercase tracking-wide">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#1a3a52] mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <Button
                  variant="ghost"
                  className="min-h-[44px] w-full text-[#00b050] hover:text-[#00b050] hover:bg-[#00b050]/10 transition-all duration-300 group/btn"
                >
                  Details ansehen
                  <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Button
            className="min-h-[44px] bg-[#1a3a52] hover:bg-[#1a3a52]/90 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Alle Projekte ansehen
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
